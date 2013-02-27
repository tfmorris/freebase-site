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
;(function($, fb, propbox) {

  function suggest_options() {
    var o = $.extend({
      status: ["", "Searching...", "Select an item from the list:"]
    }, fb.suggest_options.service_defaults);
    if (fb.acre.freebase.apiary_url) {
      o.filter = "(any without:fus),(should type:/common/topic)";
      o.mqlread_url = fb.h.fb_apiary_url("/mqlread");
    }
    else {
      o.type = "/common/topic";
      o.type_strict = "should";
      o.category = "object";
      o.mqlread_url = fb.h.fb_api_url("/api/service/mqlread");
    }
    return o;
  };


  var topic = fb.topic = {

    init: function() {

      propbox.init("#topic-data", {
        id: fb.c.id,
        base_ajax_url: fb.h.ajax_url("lib/propbox"),
        base_static_url: fb.h.static_url("lib/propbox"),
        lang: fb.lang || "/lang/en",
        suggest: suggest_options()
      });

      // Initialize filter menu collapse/expand
      $(".column.nav").collapse_module({modules: ".module", column: ".section"});

      // Initialize prop counts filter suggest input
      fb.filters.init_domain_type_property_filter(".column.nav");

      // Initialize the property limit slider
      fb.filters.init_limit_slider_filter("#limit-slider", 10, 1, 100, 1);

      // Toggle for Add Types dialog
      $(".toolbar-trigger").click(function(){
        var $add_type_pane = $(".add-type").first();
        var $toolbar = $(this).closest(".toolbar");
        var $trigger = $(this);

        if($add_type_pane.is(":visible")) {
          $toolbar.removeClass("active");
          $trigger.removeClass("active");
          $add_type_pane.slideUp();
        }
        else {
          $trigger.addClass("active");
          $toolbar.addClass("active");
          $add_type_pane.slideDown();
        }
        return false;
      });

      $(".keyboard-shortcuts > a").overlay({
          close: ".modal-buttons .button-cancel",
          closeOnClick: false,
          mask: {
            color: '#000',
	    loadSpeed: 200,
	    opacity: 0.5
	  }
      });
    }
  };

  $(topic.init);

})(jQuery, window.freebase, window.propbox);