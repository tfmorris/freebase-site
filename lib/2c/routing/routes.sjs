/*
 * Copyright 2010, Google Inc.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are
 * met:
 *
 *     * Redistributions of source code must retain the above copyright
 * notice, this list of conditions and the following disclaimer.
 *     * Redistributions in binary form must reproduce the above
 * copyright notice, this list of conditions and the following disclaimer
 * in the documentation and/or other materials provided with the
 * distribution.
 *     * Neither the name of Google Inc. nor the names of its
 * contributors may be used to endorse or promote products derived from
 * this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
 * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
 * OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

var h = acre.require("routing/helpers");
var app_routes = acre.require('routing/app_routes');

/**
 * Invoke the error app template with status=404 and exit.
 */
function not_found(id) {
  var path = acre.form.build_url(app_routes.app_labels.error + "/index", {status:404, not_found:id});
  acre.route(path);
  acre.exit();
};

function is_release_pod() {
  return /www.(freebase|sandbox\-freebase)\.com$/.test(acre.request.server_name);
};

/**
 * Try acre.route the given path parameters.
 * Before acre.route, we do an acre.get_medata and check existence of the app and script.
 * If success, acre.route. Otherwise, not_found()
 */
function do_route(app_path, script, path_info, query_string) {
  
  if (is_release_pod()) { 

    //dont run tests on freebase.com urls
    if (script && (script.indexOf('test_') === 0 || script.indexOf('qunit_') === 0)) { 
       console.log('Cannot run tests on production URLs - try freebaseapps');
       return not_found(script);
    }

    //app_path might be null if there was no rule in app_routes
    if (app_path) {
       app_path = "//release." + app_path.slice(2);
    }
  }

  //if app_path is null, get_metadata will return the current app
  try {
    var md = acre.get_metadata(app_path);
  }
  catch (ex) {
    console.log(ex);
    console.log('routing: get_metadata for ' + app_path + ' failed');
    return not_found(app_path || acre.current_script.app.id);
  }

  if (md === null) { 
    console.log('routing: get_metadata for ' + app_path  + ' failed');
    return not_found(app_path || acre.current_script.app.id);
  } 

  //if there is no 'routes' file or the file being requested in the app
  var b = "//" + md.host + "/";
  if (!acre.resolve(b + "routes") && !acre.resolve(b + script)) {
    return not_found(md.app_id + "/" + script);
  }

  var path = [
    (app_path ? app_path + "/" : ""),
    script,
    path_info,
    (query_string ? "?" + query_string : "")
  ];

  path = path.join("");
  acre.route(path);
  return acre.exit();
};

function host_based_redirects(req) {
  var req_path = req.url.replace(req.app_url, "");
  var url = app_routes.host_redirects[req.server_name];
  if (url) {
    acre.response.status = 301;
    acre.response.set_header("location", url + req_path);
    acre.response.set_header("cache-control", "public, max-age: 3600");
    acre.exit();
  }
}

// route a request of the kind /[global]/file_path
function global_routing(req) {
  var req_path = req.url.replace(req.app_url, "");

  //all requests that start with /fss/ are for static files
  if (req_path.indexOf("/static/") != 0) {
    return false;
  }
  
  var file_path = req_path.replace("/static/", "//");
  acre.route(file_path);
}


function path_based_routing(req, app_labels) {
  var req_path = req.url.replace(req.app_url, "");
  // filter out query string
  var path = req_path;
  var query_string;
  if (req_path.indexOf("?") !== -1) {
    var path_segs = req_path.split("?", 2);
    path = path_segs[0];
    query_string = path_segs[1];
  }

  var route = app_routes.rules.route_for_path(path);
  if (route) {
    if (route.redirect && route.url) {
      // Handle both absolute and relative redirects
      acre.response.status = route.redirect;
      var redirect_url;
      if (/^https?:\/\//.test(route.url)) {
        redirect_url = route.url;
      } else {
        redirect_url = req.app_url + req_path.replace(route.prefix, route.url);
      }
      acre.response.set_header("location", redirect_url);
      acre.exit();

    } else if (route.app) {
      // Handle canonical app routing
      var app = app_labels ? app_labels[route.app] : app_routes.app_labels[route.app];
      if (!app) {
        throw route.app+" must be defined in the MANIFEST for routing.";
      }
      var script = route.script;
      var path_info = path.replace(route.prefix, '');

      if (!script) {
        var [script, path_info, qs] = h.split_path(path_info);
      }

      // acre.route and exit
      do_route(app, script, path_info, query_string);
    }
  } else {
    // default to local acre.route
    var [script, path_info, query_string] = h.split_path(req_path);
    do_route(null, script, path_info, query_string);
  }

  throw 'Invalid route: '+route;
}


/**
 * Main route logic
 */
function route(req, app_labels) {
  req = acre.request || req;
  host_based_redirects(req);
  global_routing(req);
  path_based_routing(req, app_labels);
}


if (acre.current_script === acre.request.script) {
  route();
}