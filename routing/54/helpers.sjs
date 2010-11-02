var rules = acre.require("app_routes").rules;

/**
 * Split path to script_id and path_info pairs. This is not like an ordinary path split.
 *
 * /foo.bar/baz/fu?k=v => ['foo.bar', '/baz/fu', 'k=v']
 *
 * NOTE: The path MUST begin with "/" but the resulting script_id DOES NOT start with "/".
 * The script_id defaults to "index" if path is "/".
 *
 * @param path:String (required)
 * @return a pair of [script_id, path_info] where "/" + script_id + path_info = path.
 */
function split_path(path) {
  var query_string = null;
  if (path.indexOf("?") !== -1) {
    var [path, query_string] = path.split("?", 2);
  }
  var path_segs = path.split("/");
  path_segs.shift();
  var script_id = path_segs.shift() || "index";
  return [script_id, "/" + path_segs.join("/"), query_string];
};


/**
 * Split path into a pair of [root, ext] where root + "." + ext = path.
 *
 * /foo/bar/baz.png => [/foo/bar/baz, png]
 *
 * The ext defaults to "sjs" if there is no extension.
 *
 * @param path:String (required)
 * @return a pair of [root, ext] where root + "." + ext = path.
 */
function split_extension(path) {
  var i = path.lastIndexOf(".");
  if (i !== -1) {
    return [path.substring(0, i), path.substring(i+1)];
  }
  return [path, "sjs"];
};

/**
 * Get the canonical url for an acre resource specified by "app" label or path id
 *   and "file" name.
 * The "app" label MUST be defined in /freebase/site/routing/app_routes.
 */

function relative_url_for(app, file, params, extra_path) {
  var route = rules.route_for_app(app, file);
  if (!route) {
    throw "No route found in routing app_routes for app:"+app+" script:"+file;
  }

  var url;
  if (route.script && route.script === file) {
    url = route.prefix + extra_path;
  } else {
    url = route.prefix + (file ? "/" + file : "") + extra_path;
  }

  return acre.form.build_url(url, params);
}