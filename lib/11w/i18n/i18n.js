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

;(function($, dojo) {

  dojo.require("dojo.date.stamp");
  dojo.require("dojo.date.locale");
  dojo.require("dojo.number");

  var bundle;
  var isRTL = false;

  var FORMAT_LENGTHS = {
    "long":1, "short":1, "full":1, "medium":1
  };

  var r_y = /^\d{4}$/;
  var r_yM = /^\d{4}\-\d{2}$/;
  var r_L = /L/g;

  var i18n = window.i18n = {
    /**
     * HACK: some dojo cldr formats use Greek Alphabet, 'L' to denote month
     */
    normalize_pattern: function(pattern) {
      return pattern.replace(r_L, "M");
    },

    ize: function(context) {
      i18n.datetime(context);
      i18n.number(context);
    },

    /**
     * localize datetime value i.e., <time datetime="1853-03-30"> ==> 1853年3月30日 (zh)
     */
    datetime: function(context) {
      var times = $("time", context)
        .each(function() {
          var $this = $(this);
          var datetime = $this.attr("datetime");
          if (datetime) {
            var d = dojo.date.stamp.fromISOString(datetime);
            var o = {
              selector: "date"
            };
            var format = $this.attr("data-format");
            if (format) {
              if (FORMAT_LENGTHS[format]) {
                o.formatLength = format;
              }
              else {
                o.datePattern = bundle["dateFormatItem-" + format];
              }
            }
            else if (r_y.test(datetime)) {
              o.datePattern = bundle["dateFormatItem-y"];
            }
            else if (r_yM.test(datetime)) {
              o.datePattern = bundle["dateFormatItem-yMMM"];
            }
            else {
              o.datePattern = bundle["dateFormat-long"];
            }
            if (o.datePattern) {
              o.datePattern = i18n.normalize_pattern(o.datePattern);
            }
            var str = dojo.date.locale.format(d, o);
            $this.text(str);
          }
        });

      if (isRTL) {
        times.attr("dir", "rtl");
      }

      times.css("visibility", "visible");
    },

    /**
     * localize number value i.e., <span class="number" data-value="1234"> ==> 1,234 (fr)
     */
    number: function(context) {
      var numbers = $(".number", context)
        .each(function() {
          var $this = $(this);
          var v = $this.attr("data-value");
          if (v != null) {
            var str = dojo.number.format(v);
            $this.text(str);
          }
        });

      if (isRTL) {
        numbers.attr("dir", "rtl");
      }
      numbers.css("visibility", "visible");
    }
  };

  dojo.ready(function() {
console.log(dojo.locale);
    if (dojo.locale === "ar" || dojo.locale === "he") {
      isRTL = true;
    }

    bundle = dojo.date.locale._getGregorianBundle();
    i18n.ize();
  });

})(jQuery, dojo,  window.freebase);