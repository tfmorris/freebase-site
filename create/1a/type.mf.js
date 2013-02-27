
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
 *
 * Additional Licenses for Third Party components can be found here:
 * http://wiki.freebase.com/wiki/Freebase_Site_License
 *
 */
(function(c){var f=function(){return typeof window.innerWidth!="undefined"?function(){return{w:window.innerWidth,h:window.innerHeight}}:typeof document.documentElement!="undefined"&&typeof document.documentElement.clientWidth!="undefined"&&document.documentElement.clientWidth!=0?function(){return{w:document.documentElement.clientWidth,h:document.documentElement.clientHeight}}:function(){return{w:document.getElementsByTagName("body")[0].clientWidth,h:document.getElementsByTagName("body")[0].clientHeight}}}();
window.kbs=function(d){c(".kbs.current",d).removeClass("current");var a=c(".domain-section:first",d),g=c(".domain-section:last",d),h=this.scroll_to=function(e){var j=c(document).scrollTop();c(document).height();var p=f().h;p=j+p;var s=e.offset().top;e=s+e.height();if(s<j)c(document).scrollTop(s);else e>p&&c(document).scrollTop(j+(e-p))},n=this.get_current=function(){return c(".kbs.current:first",d)},m=this.set_next=function(e,j,p){e=e||n();if(j.length){e.removeClass("current");j.addClass("current");
p||h(j)}},b=this.next_domain=function(e){var j=n(),p=i(j);if(p){p=p.find(".kbs:first");m(j,p,e)}},i=this._next_domain=function(e){if(!(e&&e.length))return c(".domain-section:first",d);e=e.closest(".domain-section");return!e.length||e[0]===g[0]?a:e.next(".domain-section")},k=this.prev_domain=function(){var e=n(),j=l(e);if(j){j=j.find(".kbs:first");m(e,j)}},l=this._prev_domain=function(e){if(!(e&&e.length))return c(".domain-section:last",d);var j=e.closest(".domain-section");if(e.closest(".property-section").length||
e.closest(".type-section").length)return j;return!j.length||j[0]===a[0]?g:j.prev(".domain-section")},o=this.next_type=function(){var e=n(),j=r(e);if(j){j=j.find(".kbs:first");m(e,j)}},r=this._next_type=function(e){if(!(e&&e.length))return c(".type-section:first",d);var j=e.closest(".domain-section");e=e.closest(".type-section");e=e.length?e.next(".type-section"):j.find(".type-section:first");if(!(e&&e.length)){var p=i(j);if(p)for(;p.get(0)!==j.get(0);){e=p.find(".type-section:first");if(e.length)break;
p=i(p)}}return e},q=this.prev_type=function(){var e=n(),j=t(e);if(j){j=j.find(".kbs:first");m(e,j)}},t=this._prev_type=function(e){if(!(e&&e.length))return c(".type-section:last",d);var j=e.closest(".domain-section"),p=e.closest(".type-section");if(e.closest(".property-section").length)return p;var s;if(p.length)s=p.prev(".type-section");if(!(s&&s.length))if(e=l(j))for(;e.get(0)!==j.get(0);){s=e.find(".type-section:last");if(s.length)break;e=l(e)}return s},w=this.next_prop=function(){var e=n(),j=
u(e);if(j){j=j.find(".kbs:first");m(e,j)}},u=this._next_prop=function(e){if(!(e&&e.length))return c(".property-section:first",d);var j=e.closest(".domain-section"),p=e.closest(".type-section"),s=e.closest(".property-section");j=s.length?s.next(".property-section"):p.length?p.find(".property-section:first"):j.find(".property-section:first");if(!(j&&j.length))if(e=r(e))for(;e.get(0)!==p.get(0);){j=e.find(".property-section:first");if(j.length)break;if(p.get(0)==null)p=e;e=r(e)}return j},y=this.prev_prop=
function(){var e=n(),j=z(e);if(j){j=j.find(".kbs:first");m(e,j)}},z=this._prev_prop=function(e){if(!(e&&e.length))return c(".property-section:last",d);var j=e.closest(".domain-section"),p=e.closest(".type-section"),s=e.closest(".property-section");if(e.closest(".data-section").length)return s;var v;if(s.length)v=s.prev(".property-section");if(!(v&&v.length))if(q=p.length?t(p):t(j))for(;q.get(0)!==p.get(0);){v=q.find(".property-section:last");if(v.length)break;if(p.get(0)==null)p=q;q=t(q)}return v};
this.next=function(){var e=n(),j=this._next(e);j&&m(e,j)};this._next=function(e){if(!(e&&e.length))return c(".domain-section:first .kbs:first",d);var j=e.closest(".domain-section"),p=e.closest(".type-section"),s=e.closest(".property-section");if(e.closest(".data-section").length){e=e.next(".kbs");if(e.length)return e;e=s.next(".property-section").find(".kbs:first");if(e.length)return e;e=p.next(".type-section").find(".kbs:first")}else if(s.length){e=s.find(".data-section:first .kbs:first");if(e.length)return e;
e=s.next(".property-section").find(".kbs:first");if(e.length)return e;e=p.next(".type-section").find(".kbs:first")}else if(p.length){e=p.find(".property-section:first .kbs:first");if(e.length)return e;e=p.next(".type-section").find(".kbs:first")}else e=j.find(".type-section:first .kbs:first");if(e.length)return e;return j.get(0)===g.get(0)?a.find(".kbs:first"):j.next(".domain-section").find(".kbs:first")};this.prev=function(){var e=n(),j=this._prev(e);j&&m(e,j)};this._prev=function(e){if(!(e&&e.length)){e=
c(".data-section:last .kbs:last",d);e.length||(e=c(".property-section:last .kbs:first",d));e.length||(e=c(".type-section:last .kbs:first",d));e.length||(e=c(".domain-section:last .kbs:first",d));return e}var j=e.closest(".domain-section"),p=e.closest(".type-section"),s=e.closest(".property-section");if(e.closest(".data-section").length){e=e.prev(".kbs");if(e.length)return e;return s.find(".kbs:first")}else if(s.length){e=s.prev(".property-section").find(".kbs:last");if(e.length)return e;return p.find(".kbs:first")}else if(p.length){e=
p.prev(".type-section").find(".kbs:last");if(e.length)return e;return j.find(".kbs:first")}else return j.get(0)===a.get(0)?g.find(".kbs:last"):j.prev(".domain-section").find(".kbs:last")};this.edit=function(){this.get_current().trigger("edit")};var x=this;c(document).unbind(".kbs").bind("keydown.kbs",function(e){var j=e.target;if(j==document.body||j==document||j==window||j==c("html")[0]){j=e.keyCode;if(j===68)e.shiftKey?k():b();else if(j===84)e.shiftKey?q():o();else if(j===80)e.shiftKey?y():w();else if(j===
74)x.next();else if(j===75)x.prev();else j===69&&x.edit()}})}})(jQuery);
(function(c,f){var d=window.propbox={init:function(a,g){g=c.extend({lang:"/lang/en"},g);if(!g.base_ajax_url)throw new Error("base_ajax_url required in propbox options");if(!g.base_static_url)throw new Error("base_static_url required in propbox options");if(!g.id)throw new Error("topic id required in propbox options");if(!g.lang)throw new Error("lang required in propbox options");d.options=g;d.kbs=new f(a);d.kbs.set_next(d.kbs.get_current(),c(".kbs:visible:first",a,true));c(".kbs",a).live("click",
function(){var h=d.kbs.get_current();d.kbs.set_next(h,c(this),true)}).live("edit",function(){c(this).find(".submenu:first li:first a").click()});d.init_menus(a)},init_menus:function(a,g){a=c(a||document);g&&c(".nicemenu",a).nicemenu();(a&&a.is(".data-row")?a:c(".data-row",a)).hover(d.row_menu_hoverover,d.row_menu_hoverout);c(".nicemenu .headmenu",a).add(c(".nicemenu .default-action",a)).click("click",function(){var h=d.kbs.get_current();d.kbs.set_next(h,c(this).parents(".kbs:first"),true);return false})},
row_menu_hoverover:function(){var a=c(this);d.row_menu_hoverover.timeout=setTimeout(function(){a.addClass("row-hover")},300)},row_menu_hoverout:function(){clearTimeout(d.row_menu_hoverover.timeout);c(this).removeClass("row-hover")},get_script:function(a,g){var h=d.get_script.cache;if(!h)h=d.get_script.cache={};var n=h[a];if(n)if(n.state===1)n.callbacks.push(g);else n.state===4&&g();else{n=h[a]={state:0,callbacks:[g]};c.ajax({url:d.options.base_static_url+a,dataType:"script",beforeSend:function(){n.state=
1},success:function(){n.state=4;c.each(n.callbacks,function(m,b){b()})},error:function(){n.state=-1}})}},prop_edit:function(a,g){var h=c(a).parents(".property-section").find(".data-section .data-row:first:visible .nicemenu:first .headmenu:first a");h.length?h.click():d.prop_add(a,g);return false},prop_add:function(a,g){var h=c(a).parents(".property-section");if(h.is(".editing"))return false;h.addClass("editing");d.get_script("/propbox-edit.mf.js",function(){d.edit.prop_add_begin(h,g)});return false},
value_edit:function(a){var g=c(a).parents(".data-row:first"),h=g.parents(".property-section");if(h.is(".editing"))return false;h.addClass("editing");d.get_script("/propbox-edit.mf.js",function(){d.edit.value_edit_begin(h,g)});return false},value_delete:function(a){var g=c(a).parents(".data-row:first"),h=g.parents(".property-section");if(h.is(".editing"))return false;h.addClass("editing");d.get_script("/propbox-edit.mf.js",function(){d.edit.value_delete_begin(h,g)});return false},close_message:function(a){c(a).parents(".row-msg:first").remove();
return false}}})(jQuery,window.kbs);
(function(c,f){f.require("dojo.date.stamp");f.require("dojo.date.locale");f.require("dojo.number");c.fn.validate_input=function(a){return this.each(function(){var g=c(this);if(g.is(":text")){var h=g.data("$.validate_input");h&&h._destroy();h=new d(this,a);g.data("$.validate_input",h)}})};var d=c.validate_input=function(a,g){var h=this.options=c.extend(true,{},d.defaults,g);if(typeof h.validator!=="function")throw"A validator is required";if(!h.lang)h.lang="/lang/en";h.lang=h.lang==="/lang/en"?["lang/en"]:
[h.lang,"/lang/en"];h.locales=[];c.each(h.lang,function(m,b){h.locales[m]=f.i18n.normalizeLocale(b.split("/").pop())});this.input=c(a);this.init();var n=this;this.input.bind("remove",function(){n._destroy()});return this};d.prototype={init:function(){var a=this;this.input.bind("keyup.validate_input",function(g){a.textchange(g)}).bind(c.browser.msie?"paste.validate_input":"input.validate_input",function(g){a.textchange(g)}).bind("keypress.validate_input",function(g){g.keyCode===13&&a.validate(true)}).bind("blur.validate_input",
function(){a.validate(true)})},_destroy:function(){this.input.unbind(".validate_input")},valid:function(a){this.input.trigger("valid",a)},invalid:function(a,g){this.input.trigger("invalid",g)},empty:function(){this.input.trigger("empty")},textchange:function(){clearTimeout(this.textchange_timeout);var a=this;this.textchange_timeout=setTimeout(function(){a.validate()},200)},validate:function(a){a&&clearTimeout(this.textchange_timeout);a=this.options;var g=c.trim(this.input.val());if(g==="")return this.empty();
try{return this.valid(a.validator(g,a))}catch(h){return this.invalid(g,""+h)}}};c.extend(d,{defaults:{validator:function(a){return{text:a,value:a}}},log:function(){},invalid:function(a,g,h,n){throw new Error("Invalid "+h+(n?": "+n:""));},text:function(a,g){if(a.lengh>4096)return this.invalid(a,g,type,"Text too long");return{text:a,value:a}},topic:function(){return d.defaults.validator},enumerated:function(){return d.defaults.validator},"boolean":function(){return d.defaults.validator},uri:function(a,
g){var h=d.uri.regex;if(!h)h=d.uri.regex=/^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i;
if(h.test(a))return{text:a,value:a};return d.invalid(a,g,"uri")},"int":function(a,g){return d.number.parse(a,g,false)},"float":function(a,g){return d.number.parse(a,g,true)},number:function(a,g,h){return d.number.parse(a,g,h)},datetime:function(a,g){return d.datetime.parse(a,g)},mqlkey:function(a,g){var h=d.mqlkey.regex;if(!h)h=d.mqlkey.regex=/^[A-Za-z0-9][A-Za-z0-9_-]*$/;if(h.test(a))return{text:a,value:a};return d.invalid(a,g,"mqlkey")}});c.extend(d.number,{parse:function(a,g,h){var n=g&&g.locales||
["en"],m,b;m=0;for(b=n.length;m<b;m++){var i=n[m];g=f.number.parse(a,{locale:i});if(!isNaN(g)){a={};if(h){a.value=g;a.text=f.number.format(g,{locale:i})}else{a.value=f.number.round(g,0);a.text=f.number.format(a.value,{locale:i})}return a}}throw d.invalid("number",a);}});c.extend(d.datetime,{formats:["yyyy",["dateFormatItem-y"],"yyyy-MM",["dateFormatItem-yM","dateFormatItem-yMMM"],"yyyy-MM-dd",["dateFormat-short","dateFormat-medium","dateFormat-long"]],parse:function(a,g){if(!f.date.stamp._isoRegExp)f.date.stamp._isoRegExp=
/^(?:(-?\d{4})(?:-(\d{2})(?:-(\d{2}))?)?)?(?:T(\d{2}):(\d{2})(?::(\d{2})(.\d+)?)?((?:[+-](\d{2}):(\d{2}))|Z)?)?$/;var h=f.date.stamp.fromISOString(a);if(h)return{text:a,value:a,date:h};var n=g&&g.locales||["en"],m,b,i,k,l,o;m=0;for(b=n.length;m<b;m++){var r=n[m],q=f.date.locale._getGregorianBundle(r);i=0;for(k=d.datetime.formats.length;i<k;i+=2){var t=d.datetime.formats[i],w=d.datetime.formats[i+1];l=0;for(o=w.length;l<o;l++){var u=q[w[l]];if(u){u=i18n.normalize_pattern(u);try{h=f.date.locale.parse(a,
{datePattern:u,selector:"date",locale:r});return{text:a,value:f.date.locale.format(h,{datePattern:t,selector:"date"}),date:h}}catch(y){}}}}}throw d.invalid("datetime",a);}})})(jQuery,dojo);
(function(c){c.fn.data_input=function(f){return this.each(function(){var d=c(this),a=d.data("$.data_input");a&&a._destroy();a=new c.data_input(this,f);d.data("$.data_input",a)})};c.data_input=function(f,d){this.options=c.extend(true,{},c.data_input.defaults,d);this.container=c(f);this.metadata=this.container.metadata();this.input=c(":input",this.container);this.init();var a=this;this.input.bind("remove",function(){a._destroy()})};c.data_input.prototype={init:function(){var f=this,d=this.container,
a=this.input,g=this.options;a.bind("focusin.data_input",function(){f.container.addClass("focus")}).bind("focusout.data_input",function(){f.container.removeClass("focus")}).bind("valid.data_input",function(h,n){var m={name:f.input.attr("name")};if(n.id)m.id=n.id;else{m.value=n.value;if(f.metadata.type==="/type/text")m.lang=f.metadata.lang||g.lang}f.container.data("data",m);f.container.removeClass("error").addClass("valid");f.container.trigger("valid")}).bind("invalid.data_input",function(){f.container.removeData("data");
f.container.removeClass("valid").addClass("error");f.container.trigger("invalid")}).bind("empty.data_input",function(){var h={name:f.input.attr("name")};if(f.metadata&&f.metadata.lang)h.lang=f.metadata.lang;f.container.data("data",h);f.container.removeClass("valid").removeClass("error");f.container.trigger("empty")}).bind("keypress.data_input",function(h){h.keyCode===13&&!h.isDefaultPrevented()&&f.container.trigger("submit")}).bind("keyup.data_input",function(h){h.keyCode===27&&f.container.trigger("cancel")});
if(d.is(".topic")){a.validate_topic(c.extend(true,{},g.suggest,{type:f.metadata.type})).bind("valid.data_input",function(h,n){f.fb_select(n)}).bind("invalid.data_input",function(){f.fb_textchange()});if(this.metadata&&this.metadata.id){a.data("data.suggest",this.metadata);this.validate()}}else if(d.is(".text"))a.validate_input({validator:c.validate_input.text});else if(d.is(".datetime"))a.validate_input({validator:c.validate_input.datetime,lang:g.lang});else if(d.is(".enumerated")){a.validate_enumerated().bind("valid.data_input",
function(h,n){f.fb_select(n)}).bind("invalid.data_input",function(){f.fb_textchange()});this.metadata&&this.metadata.id&&this.validate()}else if(d.is(".int"))a.validate_input({validator:c.validate_input["int"],lang:g.lang});else if(d.is(".float"))a.validate_input({validator:c.validate_input["float"],lang:g.lang});else if(d.is(".uri"))a.validate_input({validator:c.validate_input.uri});else if(d.is(".boolean"))a.validate_boolean();else if(d.is(".enumeration"))a.validate_input({validator:c.validate_input.mqlkey});
else if(d.is(".rawstring"))a.validate_input({validator:c.validate_input.text});else throw new Error("Invalid data-input: "+d.attr("class"));},_destroy:function(){this.input.unbind(".data_input")},validate:function(){var f=this.input;c.each(["$.validate_topic","$.validate_input","$.validate_enumerated","$.validate_boolean"],function(d,a){var g=f.data(a);if(g){g.validate(true);return false}})},reset:function(){this.container.removeData("data");if(this.input.is(":text"))this.input.val("");else if(this.input.is("select"))this.input[0].selectedIndex=
0;else this.input.is(":radio")&&this.input.each(function(){this.checked=false})},fb_textchange:function(){},fb_select:function(){},ajax_beforeSend:function(f){if(!this.xhr_queue)this.xhr_queue=[];this.xhr_queue.push(f);this.container.trigger("loading")},ajax_complete:function(f){if(!this.xhr_queue)this.xhr_queue=[];for(var d=0,a=this.xhr_queue.length;d<a;d++)if(f===this.xhr_queue[d]){this.xhr_queue.splice(d,1);break}this.xhr_queue.length===0&&this.container.trigger("loading_complete")}};c.extend(c.data_input,
{defaults:{suggest:{service_url:"http://www.freebase.com",service_path:"/private/suggest",flyout_service_url:"http://www.freebase.com",flyout_service_path:"/private/flyout",mqlread_url:"http://api.freebase.com/api/service/mqlread",category:"object",type:"/common/topic"}}});c.fn.validate_topic=function(f){return this.each(function(){var d=c(this);if(d.is(":text")){var a=d.data("$.validate_topic");a&&a._destroy();a=new c.validate_topic(this,f);d.data("$.validate_topic",a)}})};c.validate_topic=function(f,
d){this.options=c.extend(true,{},d);this.input=c(f);this.init()};c.validate_topic.prototype={init:function(){var f=this;this.input.suggest(this.options).bind("fb-textchange.validate_topic",function(){f.input.val()===""?f.empty():f.invalid()}).bind("fb-select.validate_topic",function(d,a){f.input.val(a.name!=null?a.name:a.id);f.valid(a)})},invalid:function(){this.input.trigger("invalid")},valid:function(f){this.input.trigger("valid",f)},empty:function(){this.input.trigger("empty")},_destroy:function(){this.input.unbind(".validate_topic")},
validate:function(){if(this.input.val()==="")this.empty();else{var f=this.input.data("data.suggest");f?this.valid(f):this.invalid()}}};c.fn.validate_enumerated=function(f){return this.each(function(){var d=c(this);if(d.is("select")){var a=d.data("$.validate_enumerated");a&&a._destroy();a=new c.validate_enumerated(this,f);d.data("$.validate_enumerated",a)}})};c.validate_enumerated=function(f,d){this.options=c.extend(true,{},d);this.input=c(f);this.init()};c.validate_enumerated.prototype={init:function(){var f=
this;this.input.bind("change.validate_enumerated, keypress.validate_enumerated",function(){this.selectedIndex===0?f.empty():f.valid({text:c(":selected",this).text(),id:this.value})})},invalid:function(){this.input.trigger("invalid")},valid:function(f){this.input.trigger("valid",f);this.input.trigger("fb-select",f)},empty:function(){this.input.trigger("empty")},_destroy:function(){this.input.unbind(".validate_enumerated")},validate:function(){var f=this.input[0];f.selectedIndex>0?this.valid({text:c(":selected",
this.input).text(),id:f.value}):this.empty()}};c.fn.validate_boolean=function(f){var d,a;this.each(function(){var h=c(this);if(h.is(":radio"))if(h.val().toLowerCase()==="true")d=h;else if(h.val().toLowerCase()==="false")a=h});if(d&&a){var g=d.data("$.validate_boolean");g&&g._destroy();g=new c.validate_boolean(d,a,f);d.data("$.validate_boolean",g)}return this};c.validate_boolean=function(f,d,a){this.options=c.extend(true,{},a);this.tradio=f;this.fradio=d;this.input=this.tradio;this.init()};c.validate_boolean.prototype=
{init:function(){var f=this;this.tradio.bind("change.validate_boolean",function(){f.validate()})},_destroy:function(){this.input.unbind(".validate_boolean")},valid:function(f){this.input.trigger("valid",f)},empty:function(){this.input.trigger("empty")},validate:function(){if(this.tradio.is(":checked"))this.valid({text:this.tradio.text(),value:true});else this.fradio.is(":checked")?this.valid({text:this.fradio.text(),value:false}):this.empty()}}})(jQuery);
(function(c){var f=window.editparams={Empty:function(d,a,g){this.structure=d;this.data=a;this.msg=g;this.toString=function(){return"Empty: "+this.msg}},Invalid:function(d,a,g){this.structure=d;this.data=a;this.msg=g;this.toString=function(){return"Invalid: "+this.msg}},parse:function(d,a){function g(i,k,l,o,r){try{f.validate(k,l);r.push(l)}catch(q){if(q instanceof f.Empty)r.push(l);else throw q;}}var h=(d.values||[]).slice(),n=d.properties||[],m=d.expected_type.mediator||n.length;if(m){if(!n.length)throw new f.Invalid(d,
null,"mediator musth have 1 or more properties");if(h.length&&h.length!==1)throw new f.Invalid(d,null,"Can't edit more than one value (row) for a mediator");}var b=[];c(".data-input",a).each(function(){var i=c(this),k=i.data("$.data_input");if(!k)throw new f.Invalid(d,null,"$.data-input not initialized for",this);k.validate(true);if(i.is(".error"))throw new f.Invalid(d,null,"$.data-input is invalid",this);k=i.data("data");if(!k)throw new f.Invalid(d,null,"$.data-input has no data",this);if(m){if(!b.length){b.push({});
c.each(n,function(r,q){b[0][q.id]=c.extend({},q,{values:[]})})}var l=b[0][k.name];if(l){var o=[];if(h.length)o=h[0][l.id].values||[];g(i,l,k,o,l.values)}else console.warn("editparams","unknown mediator property data",k)}else g(i,d,k,h,b)});return m?f.parse_mediator(d,h,b):f.parse_simple(d,h,b)},parse_mediator:function(d,a,g){if(g.length!==1)throw new f.Invalid(d,g,"Must specify one (new or updated) value for a mediator");g=g[0];var h;if(a.length)h=a[0];var n={};if(h)n.id=h.id;else{n.id=null;n.create=
"unconditional";n.connect=d.unique?"replace":"insert";n.type=[{id:d.expected_type.id,connect:"insert"}];(a=d.expected_type.included_types)&&a.forEach(function(l){n.type.push({id:l,connect:"insert"})})}a=false;d=d.properties;for(var m=0,b=d.length;m<b;m++){var i=d[m],k=f.parse_simple(i,h&&h[i.id]&&h[i.id].values||[],g[i.id]&&g[i.id].values||[]);if(k.length){n[i.id]=k;a=true}}return a?[n]:[]},parse_simple:function(d,a,g){return f.diff(d,a,g)},diff:function(d,a,g){var h=d.expected_type,n=d.expected_type.id,
m=d.unique,b=n==="/type/text";if(m)if(!b)if(a.length&&a.length!==1)throw new f.Invalid(d,a,"Can't edit more than one value (row) for a unique property.");else if(g.length&&g.length!==1)throw new f.Invalid(d,g,"Can't edit more than one value (row) for a unique property.");var i=[];if(f.LITERAL_TYPE_IDS[n]){i.push("value");b&&i.push("lang")}else i.push("id");n=[];var k=[],l,o;l=0;for(o=a.length;l<o;l++){var r=a[l];f.validate(d,r);f.inArray.apply(null,[r,g].concat(i))===-1&&n.push(f.clause(r,"delete"))}l=
0;for(o=g.length;l<o;l++){r=g[l];try{f.validate(d,r)}catch(q){continue}if(f.inArray.apply(null,[r,a].concat(i))===-1){if(m)if(b){var t=f.inArray(r,n,"lang");t!==-1&&n.splice(t,1)}else return[f.clause(r,"replace",h)];k.push(f.clause(r,m?"replace":"insert",h))}}return n.concat(k)},validate:function(d,a){var g=d.expected_type.id;if(f.LITERAL_TYPE_IDS[g])if(f.isEmpty(a.value))throw new f.Empty(d,a);else{if(g==="/type/text"&&f.isEmpty(a.lang))throw new f.Invalid(d,a,"Expected data.lang for /type/text");
if(g==="/type/int"||g==="/type/float"){if(c.type(a.value)!=="number")throw new f.Invalid(d,a,"Expected number data.value for "+g);}else if(g==="/type/boolean"){if(c.type(a.value)!=="boolean")throw new f.Invalid(d,a,"Expected boolean data.value for /type/boolean");}else if(c.type(a.value)!=="string")throw new f.Invalid(d,a,"Expected string data.value for "+g);}else if(f.isEmpty(a.id))throw new f.Empty(d,a);return a},clause:function(d,a,g){var h={connect:a};if(d.id){h.id=d.id;if(a!=="delete"&&g&&!g.enumeration){var n=
[{id:g.id,connect:"insert"}];(d=g.included_types)&&d.forEach(function(m){n.push({id:m,connect:"insert"})});h.type=n}}else{h.value=d.value;if(d.lang)h.lang=d.lang}return h},inArray:function(d,a){var g=Array.prototype.slice.call(arguments,2);if(!g.length)return c.inArray(d,a);for(var h=0,n=a.length;h<n;h++){for(var m=a[h],b=true,i=0,k=g.length;i<k;i++){var l=g[i];if(m[l]!=d[l]){b=false;break}}if(b)return h}return-1},isEmpty:function(d){return d==null||d===""},LITERAL_TYPE_IDS:{"/type/int":1,"/type/float":1,
"/type/boolean":1,"/type/rawstring":1,"/type/uri":1,"/type/text":1,"/type/datetime":1,"/type/id":1,"/type/key":1,"/type/value":1,"/type/enumeration":1}}})(jQuery);
(function(c,f,d){var a=f.options.base_ajax_url,g=f.options.id,h=f.options.lang,n=f.options.suggest,m=f.edit={prop_add_begin:function(b,i){var k={s:g,p:b.attr("data-id"),lang:h};c.ajax({url:a+"/prop_add_begin.ajax",data:k,dataType:"json",success:function(l,o,r){if(l.code!=="/api/status/ok")return m.ajax_error(r,null,b);l=c(l.result.html).hide();var q={mode:"add",event_prefix:"propbox.edit.prop_add.",ajax:{data:k,url:a+"/prop_edit_submit.ajax"},init:m.init_prop_add_form,submit:m.submit_prop_add_form,
prop_section:b,msg_row:c(".row-msg",l),edit_row:c(".edit-row",l),submit_row:c(".edit-row-submit",l),structure:l.metadata()};m.init(q);q.edit_row.bind("propbox.edit.prop_add.success",function(){if(i)q.edit_row.trigger(q.event_prefix+"cancel");else{m.reset_data_inputs(q);c(":input:visible:first",q.edit_row).focus();c(".button-submit",q.submit_row).attr("disabled","disabled").addClass("disabled");c(".button-cancel",q.submit_row).text("Done")}})},error:function(l){m.ajax_error(l,null,b)}})},init_prop_add_form:function(b){m.init_data_inputs(b);
c(":input:visible:first",b.edit_row).focus()},submit_prop_add_form:function(b){var i=c.extend({},b.ajax.data);try{var k=d.parse(b.structure,b.edit_row);i.o=JSON.stringify(k)}catch(l){i=c(".data-input.error",b.edit_row);if(i.length){b.edit_row.trigger(b.event_prefix+"error","Please specify a valid value");i.eq(0).find(":input").focus().select()}else b.edit_row.trigger(b.event_prefix+"error",l.toString());return}c.ajax({url:b.ajax.url,type:"POST",dataType:"json",data:i,success:function(o,r,q){if(o.code!==
"/api/status/ok")return m.ajax_error(q,b);o=c(o.result.html);b.msg_row.before(o);i18n.ize(o);c(".edit",o).show();f.init_menus(o,true);f.kbs.set_next(null,o,true);b.edit_row.trigger(b.event_prefix+"success")},error:function(o){m.ajax_error(o,b)}})},value_edit_begin:function(b,i){var k;if(i.is("tr"))k=i.attr("data-id");else{k=c(".property-value:first",i);k=k.attr("data-id")||k.attr("data-value")||k.attr("datetime")}var l={s:g,p:b.attr("data-id"),replace:k,lang:h};c.ajax({url:a+"/value_edit_begin.ajax",
data:l,dataType:"json",success:function(o,r,q){if(o.code!=="/api/status/ok")return m.ajax_error(q,null,b,i);o=c(o.result.html).hide();var t={mode:"edit",event_prefix:"propbox.edit.value_edit.",ajax:{data:l,url:a+"/prop_edit_submit.ajax"},init:m.init_value_edit_form,submit:m.submit_value_edit_form,prop_section:b,prop_row:i,msg_row:c(".row-msg",o),edit_row:c(".edit-row",o),submit_row:c(".edit-row-submit",o),structure:o.metadata()};m.init(t);t.edit_row.bind("propbox.edit.value_edit.success",function(){t.msg_row.remove();
t.edit_row.remove();t.submit_row.remove()}).bind("propbox.edit.value_edit.cancel",function(){t.prop_row.show()}).bind("propbox.edit.value_edit.delete",function(){m.loading_begin(t);f.edit.value_delete_begin(b,i,function(){t.msg_row.remove();t.edit_row.remove();t.submit_row.remove()})})},error:function(o){m.ajax_error(o,null,b,i)}})},init_value_edit_form:function(b){m.init_data_inputs(b);c(":input:visible:first",b.edit_row).focus()},submit_value_edit_form:function(b){var i=c.extend({},b.ajax.data);
try{var k=d.parse(b.structure,b.edit_row);i.o=JSON.stringify(k)}catch(l){i=c(".data-input.error",b.edit_row);if(i.length){b.edit_row.trigger(b.event_prefix+"error","Please specify a valid value");i.eq(0).find(":input").focus().select()}else b.edit_row.trigger(b.event_prefix+"error",l.toString());return}c.ajax({url:b.ajax.url,type:"POST",dataType:"json",data:i,success:function(o,r,q){if(o.code!=="/api/status/ok")return m.ajax_error(q,b);o=c(o.result.html);b.prop_row.after(o);i18n.ize(o);c(".edit",
o).show();f.init_menus(o,true);f.kbs.set_next(null,o,true);b.prop_row.remove();b.edit_row.trigger(b.event_prefix+"success")},error:function(o){m.ajax_error(o,b)}})},value_delete_begin:function(b,i,k){var l;if(i.is("tr"))l=i.attr("data-id");else{l=c(".property-value:first",i);l=l.attr("data-id")||l.attr("data-value")||l.attr("datetime")}l={s:g,p:b.attr("data-id"),o:l,lang:h};c.ajax({url:a+"/value_delete_submit.ajax",type:"POST",data:l,dataType:"json",success:function(o,r,q){if(o.code!=="/api/status/ok")return m.ajax_error(q,
null,b,i);o=c(o.result.html);i.before(o);i.hide();b.removeClass("editing");k&&k()},error:function(o){m.ajax_error(o,null,b,i)}})},value_delete_undo:function(b){var i=c(b).parents(".row-msg:first"),k=i.next(".data-row:hidden"),l=k.parents(".property-section");if(k.is("tr"))b=k.attr("data-id");else{b=c(".property-value:first",k);b=b.attr("data-id")||b.attr("data-value")||b.attr("datetime")}b={s:g,p:l.attr("data-id"),o:b,lang:h};c.ajax({url:a+"/value_delete_undo.ajax",type:"POST",data:b,dataType:"json",
success:function(o,r,q){if(o.code!=="/api/status/ok")return m.ajax_error(q,null,l,k);k.show();i.remove()},error:function(o){m.ajax_error(o,null,l,k)}});return false},loading_begin:function(b){c.each([b.edit_row,b.msg_row,b.submit_row],function(i,k){k&&k.addClass("loading")})},loading_complete:function(b){c.each([b.edit_row,b.msg_row,b.submit_row],function(i,k){k&&k.removeClass("loading")})},init_data_inputs:function(b){c(".data-input",b.edit_row).each(function(){m.init_data_input(c(this),b)})},init_data_input:function(b,
i){b.data_input({lang:h,suggest:n}).bind("valid",function(){i.edit_row.trigger(i.event_prefix+"valid");var k=b.parent(".form-field"),l=k.next(".magicbox-template");if(l.length){l=c("<div>").html(l.html());l=c(".form-field",l);k.after(l);m.init_data_input(c(".data-input",l),i)}}).bind("empty",function(){i.edit_row.trigger(i.event_prefix+"valid")}).bind("invalid",function(){i.edit_row.trigger(i.event_prefix+"invalid")}).bind("submit",function(){i.edit_row.trigger(i.event_prefix+"submit")}).bind("cancel",
function(){i.edit_row.trigger(i.event_prefix+"cancel")}).bind("loading",function(){c(this).addClass("loading")}).bind("loading_complete",function(){c(this).removeClass("loading")});if(b.is(".datetime"))i18n.ize_datetime_input(c(":text",b));else if(b.is(".int")||b.is(".float"))i18n.ize_number_input(c(":text",b))},reset_data_inputs:function(b){c(".data-input",b.edit_row).each(function(){c(this).data("$.data_input").reset()})},init:function(b){if(b.mode==="add"){var i=c(">.data-section",b.prop_section);
c("> .data-table > tbody > .empty-row, > .data-list > .empty-row",i).hide();c("> .data-table > tbody, > .data-list",i).append(b.msg_row).append(b.edit_row).append(b.submit_row)}else if(b.mode==="edit"){b.prop_row.hide();b.prop_row.after(b.msg_row);b.msg_row.after(b.edit_row);b.edit_row.after(b.submit_row)}c(".data-table > thead",b.prop_section).show();var k=b.event_prefix||"propbox.edit.";b.edit_row.bind(k+"valid",function(){c(".button-submit",b.submit_row).removeAttr("disabled").removeClass("disabled")}).bind(k+
"invalid",function(){c(".button-submit",b.submit_row).attr("disabled","disabled").addClass("disabled")}).bind(k+"submit",function(){m.submit(b)}).bind(k+"cancel",function(){m.cancel(b)}).bind(k+"error",function(l,o){m.error(b,o);m.loading_complete(b);b.prop_section.removeClass("editing")}).bind(k+"success",function(){m.loading_complete(b);b.prop_section.removeClass("editing")});c(".button-submit",b.submit_row).click(function(){b.edit_row.trigger(k+"submit")});c(".button-cancel",b.submit_row).click(function(){b.edit_row.trigger(k+
"cancel")});c(".button-delete",b.submit_row).click(function(){b.edit_row.trigger(k+"delete")});b.edit_row.show();b.submit_row.show();f.kbs.scroll_to(b.prop_section);b.init&&b.init(b)},cancel:function(b){b.msg_row.remove();b.edit_row.remove();b.submit_row.remove();b.prop_section.removeClass("editing");b=c(">.data-section",b.prop_section);c("> .data-table > tbody > tr, > .data-list > li",b).filter(":not(.empty-row)").length||c("> .data-table > tbody > .empty-row, > .data-list > .empty-row",b).show()},
submit:function(b){if(!b.edit_row.is(".loading"))if(!c(".button-submit",b.submit_row).is(":disabled")){document.activeElement&&c(document.activeElement).blur();m.clear_form_message(b);m.loading_begin(b);b.submit&&b.submit(b)}},error:function(b,i){c(".button-submit",b.submit_row).attr("disabled","disabled").addClass("disabled");return m.form_message(b,i,"error")},form_message:function(b,i,k){b.msg_row.find(".close-msg").css("visibility","visible").next().find(".msg-default").hide().next().text(i);
b.msg_row.attr("class","row-msg");k&&b.msg_row.addClass("row-msg-"+k)},clear_form_message:function(b){b.msg_row.find(".close-msg").css("visibility","hidden").next().find(".msg-default").show().next().html("&nbsp;")},ajax_error:function(b,i,k,l){b=b.responseText;if(i)i.edit_row.trigger(i.event_prefix+"error",b);else{i=c(".data-table",k);b=i.length?m.row_msg(b,"error","tr",c(">thead>tr:first>th",i).length):m.row_msg(b,"error","li");if(l){l.before(b);l.is(".edit-row")?l.removeClass("loading"):k.removeClass("editing")}else{i.length?
c(">tbody",i).append(b):c(".data-list",k).append(b);k.removeClass("editing")}}},row_msg:function(b,i,k,l){var o=c('<a class="close-msg" href="#">x</a>').click(function(){c(this).parents(".row-msg:first").remove();return false}),r=c("<span>").text(b);b=c("<"+k+' class="row-msg">');if(k==="tr"){k=c("<td>").append(o).append(r);l&&k.attr("colspan",l);b.append(k)}else b.append(o).append(r);i&&b.addClass("row-msg-"+i);return b}}})(jQuery,window.propbox,window.editparams);
(function(){})(jQuery,window.propbox,window.editparams);