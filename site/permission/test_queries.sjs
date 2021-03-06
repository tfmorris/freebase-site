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

var mf = acre.require("MANIFEST").mf;

mf.require("test", "mox").playback(this, "playback_test_queries.json");

var q = acre.require("queries");

test("has_permission.domain", function() {
  var result;
  q.has_permission("/freebase", "/user/daepark")
    .then(function(has_permission) {
      result = has_permission;
    });
  acre.async.wait_on_results();
  ok(result, "expected has_permission=true");
});

test("has_permission.domain.dont_allow_experts", function() {
  var result;
  q.has_permission("/freebase", "/user/tfmorris")
    .then(function(has_permission) {
      result = has_permission;
    });
  acre.async.wait_on_results();
  ok(!result, "expected has_permission=false");
});

test("has_permission.domain.allow_experts", function() {
  var result;
  q.has_permission("/freebase", "/user/tfmorris", true)
    .then(function(has_permission) {
      result = has_permission;
    });
  acre.async.wait_on_results();
  ok(result, "expected has_permission=true");
});

test("has_permission.type", function() {
  var result;
  q.has_permission("/base/slamdunk/player", "/user/daepark")
    .then(function(has_permission) {
      result = has_permission;
    });
  acre.async.wait_on_results();
  ok(result, "expected has_permission=true");
});

acre.test.report();

