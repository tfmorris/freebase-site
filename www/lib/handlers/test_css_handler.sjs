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
acre.require('/test/lib').enable(this);

var h = acre.require("core/helpers");

var test_helpers = acre.require("handlers/helpers_test");

var css_handler = acre.require("handlers/css_handler");

acre.require("handlers/mock_handler").record(this, css_handler, "handlers/playback_test_css_handler.json");

test("quote_url", function() {
  equal(css_handler.quote_url("some url"),   '"some url"');
  equal(css_handler.quote_url('"some url"'), '"some url"');
  equal(css_handler.quote_url("'some url'"), '"some url"');
});

var self = this;
test("preprocessor", function() {
   var css = [
     "div { background: url(template/ui-icons.png) no-repeat; display: inline-block;}",
     "img { background: url(http://www.google.com/logo.png); }"
   ];

  var script = {
    get_content: function() {
      return {
        body: css.join("\n")
      };
    },
    scope: self
  };

  var expected = css.join("\n");
  expected = expected.replace("url(template/ui-icons.png)", "url(\"" + h.static_url(acre.resolve("template/ui-icons.png")) + "\")")
    .replace("url(http://www.google.com/logo.png)", "url(\"http://www.google.com/logo.png\")");

  equal(css_handler.preprocessor(script), expected);
});

test("require", function() {
  var module = acre.require("handlers/handle_me.css", test_helpers.metadata("css", "handlers/css_handler"));
  console.log("require", module);
});

test("include", function() {
  var module = acre.include("handlers/handle_me.css", test_helpers.metadata("css", "handlers/css_handler"));
  console.log("include", module);
  //equal(acre.response.header["content-type"], "text/css");
});


acre.test.report();
