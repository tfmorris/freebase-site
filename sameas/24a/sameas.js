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

(function($, fb, propbox) {

  var sameas = fb.sameas = {

    init: function() {

      // Initialize filter menu collapse/expand
      $(".column.nav").collapse_module({modules: ".module", column: ".section"});

      // Initialize user/creator suggest input
      $(":text[name=creator]")
        .suggest(fb.suggest_options.any("type:/type/user"))
        .bind("fb-select", function(e, data) {
          $(this).val(data.id)
            .parents("form:first").submit();
        });

      // Initialize filters
      propbox.init_menus();
    },

    add_key: function(e) {
      var trigger = $(this);
      if (trigger.is(".editing")) { // are we already editing?
        return false;
      }
      trigger.addClass("editing");
      fb.get_script(fb.h.static_url("sameas-edit.mf.js"), function() {
        sameas.edit.add_key_begin(trigger, trigger.parents("table:first").find("tbody:first"));
      });
      return false;
    },

    edit_key: function(context) {
      var key_row = $(context).parents(".submenu").data("headmenu").parents(".data-row:first");
      if (key_row.is(".editing")) {
        return false;
      }
      key_row.addClass("editing");
      fb.get_script(fb.h.static_url("sameas-edit.mf.js"), function() {
        sameas.edit.edit_key_begin(key_row);
      });
      return false;
    },

    delete_key: function(context) {
      var key_row = $(context).parents(".submenu").data("headmenu").parents(".data-row:first");
      if (key_row.is(".editing")) {
        return false;
      }
      key_row.addClass("editing");
      fb.get_script(fb.h.static_url("sameas-edit.mf.js"), function() {
        sameas.edit.delete_key_begin(key_row);
      });
      return false;
    }

  };

  $(sameas.init);

})(jQuery, window.freebase, window.propbox);