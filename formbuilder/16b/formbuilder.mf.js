
/*
 * Copyright 2012, Google Inc.
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
/*
 
 jQuery Tools @VERSION / Expose - Dim the lights

 NO COPYRIGHTS OR LICENSES. DO WHAT YOU LIKE.

 http://flowplayer.org/tools/toolbox/expose.html

 Since: Mar 2010
 Date: @DATE 
 
 jQuery Tools @VERSION Overlay - Overlay base. Extend it.

 NO COPYRIGHTS OR LICENSES. DO WHAT YOU LIKE.

 http://flowplayer.org/tools/overlay/

 Since: March 2008
 Date: @DATE 
*/
(function(b){function i(){d();b(this).parents(".headmenu").data("submenu").find("a:first").click();return!1}function f(a,e){var c=b(this),f=c.data("menu"),j=c.data("submenu");f.addClass("active");if(!j.is(".submenu-valid")){var f=c.offset(),g=c.outerHeight(),g=f.top+g;j.is(".center")?(c=c.outerWidth(),c=f.left+c/2-j.outerWidth()/2):j.is(".right")?(c=c.outerWidth(),c=f.left+c-j.outerWidth()):c=f.left;c={display:"none",position:"absolute",top:g,left:c};e.overlay&&(c.zIndex=e.overlay.css("zIndex"));
j.css(c);b(document.body).append(j);j.addClass(".submenu-valid")}j.is(":visible")?d(j):(d(),j.fadeIn());return!1}function d(a){a=a||b(".submenu:visible");a.data("menu")&&a.data("menu").removeClass("active");a.hide()}b.factory("nicemenu",{init:function(){var a=this.options;b(".headmenu",this.element).each(function(){var e=b(this),c=e.next(".submenu"),d=e.parents(".nicemenu");e.data("submenu",c);e.data("menu",d);c.data("headmenu",e);c.data("menu",d);b(".default-action",e).click(i);e.click(function(b){return f.apply(this,
[b,a])})});b(".submenu",this.element).click(function(){d(b(this));b(this).fadeOut()})}});b(document).click(function(){d()}).bind("scroll resize",function(){d();b(".submenu-valid").each(function(){b(this).removeClass("submenu-valid")})})})(jQuery);
(function(b){function i(){if(b.browser.msie){var a=b(document).height(),c=b(window).height();return[window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,20>a-c?c:a]}return[b(document).width(),b(document).height()]}function f(a){if(a)return a.call(b.mask)}b.tools=b.tools||{version:"@VERSION"};var d;d=b.tools.expose={conf:{maskId:"exposeMask",loadSpeed:"slow",closeSpeed:"fast",closeOnClick:!0,closeOnEsc:!0,zIndex:9998,opacity:0.8,startOpacity:0,color:"#fff",onLoad:null,
onClose:null}};var a,e,c,k,j;b.mask={load:function(g,p){if(c)return this;"string"==typeof g&&(g={color:g});g=g||k;k=g=b.extend(b.extend({},d.conf),g);a=b("#"+g.maskId);a.length||(a=b("<div/>").attr("id",g.maskId),b("body").append(a));var n=i();a.css({position:"absolute",top:0,left:0,width:n[0],height:n[1],display:"none",opacity:g.startOpacity,zIndex:g.zIndex});g.color&&a.css("backgroundColor",g.color);if(!1===f(g.onBeforeLoad))return this;g.closeOnEsc&&b(document).bind("keydown.mask",function(a){a.keyCode==
27&&b.mask.close(a)});g.closeOnClick&&a.bind("click.mask",function(a){b.mask.close(a)});b(window).bind("resize.mask",function(){b.mask.fit()});p&&p.length&&(j=p.eq(0).css("zIndex"),b.each(p,function(){var a=b(this);/relative|absolute|fixed/i.test(a.css("position"))||a.css("position","relative")}),e=p.css({zIndex:Math.max(g.zIndex+1,"auto"==j?0:j)}));a.css({display:"block"}).fadeTo(g.loadSpeed,g.opacity,function(){b.mask.fit();f(g.onLoad)});c=!0;return this},close:function(){if(c){if(!1===f(k.onBeforeClose))return this;
a.fadeOut(k.closeSpeed,function(){f(k.onClose);e&&e.css({zIndex:j})});b(document).unbind("keydown.mask");a.unbind("click.mask");b(window).unbind("resize.mask");c=!1}return this},fit:function(){if(c){var b=i();a.css({width:b[0],height:b[1]})}},getMask:function(){return a},isLoaded:function(){return c},getConf:function(){return k},getExposed:function(){return e}};b.fn.mask=function(a){b.mask.load(a);return this};b.fn.expose=function(a){b.mask.load(a,this);return this}})(jQuery);
(function(b){function i(a,e){var c=this,k=a.add(c),j=b(window),g,i,n,m=b.tools.expose&&(e.mask||e.expose),o=Math.random().toString().slice(10);m&&("string"==typeof m&&(m={color:m}),m.closeOnClick=m.closeOnEsc=!1);var l=e.target||a.attr("rel");i=l?b(l):a;if(!i.length)throw"Could not find Overlay: "+l;a&&-1==a.index(i)&&a.click(function(b){c.load(b);return b.preventDefault()});b.extend(c,{load:function(a){if(c.isOpened())return c;var g=d[e.effect];if(!g)throw'Overlay: cannot find effect : "'+e.effect+
'"';e.oneInstance&&b.each(f,function(){this.close(a)});a=a||b.Event();a.type="onBeforeLoad";k.trigger(a);if(a.isDefaultPrevented())return c;n=true;m&&b(i).expose(m);var l=e.top,q=e.left,t=i.outerWidth({margin:true}),r=i.outerHeight({margin:true});typeof l=="string"&&(l=l=="center"?Math.max((j.height()-r)/2,0):parseInt(l,10)/100*j.height());q=="center"&&(q=Math.max((j.width()-t)/2,0));g[0].call(c,{top:l,left:q},function(){if(n){a.type="onLoad";k.trigger(a)}});if(m&&e.closeOnClick)b.mask.getMask().one("click",
c.close);e.closeOnClick&&b(document).bind("click."+o,function(h){b(h.target).parents(i).length||c.close(h)});e.closeOnEsc&&b(document).bind("keydown."+o,function(h){h.keyCode==27&&c.close(h)});return c},close:function(a){if(!c.isOpened())return c;a=a||b.Event();a.type="onBeforeClose";k.trigger(a);if(!a.isDefaultPrevented()){n=false;d[e.effect][1].call(c,function(){a.type="onClose";k.trigger(a)});b(document).unbind("click."+o).unbind("keydown."+o);m&&b.mask.close();return c}},getOverlay:function(){return i},
getTrigger:function(){return a},getClosers:function(){return g},isOpened:function(){return n},getConf:function(){return e}});b.each(["onBeforeLoad","onStart","onLoad","onBeforeClose","onClose"],function(a,d){b.isFunction(e[d])&&b(c).bind(d,e[d]);c[d]=function(a){b(c).bind(d,a);return c}});g=i.find(e.close||".close");!g.length&&!e.close&&(g=b('<a class="close"></a>'),i.prepend(g));g.click(function(b){c.close(b)});e.load&&c.load()}b.tools=b.tools||{version:"@VERSION"};b.tools.overlay={addEffect:function(b,
e,c){d[b]=[e,c]},conf:{close:null,closeOnClick:!0,closeOnEsc:!0,closeSpeed:"fast",effect:"default",fixed:!b.browser.msie||6<b.browser.version,left:"center",load:!1,mask:null,oneInstance:!0,speed:"normal",target:null,top:"10%"}};var f=[],d={};b.tools.overlay.addEffect("default",function(a,d){var c=this.getConf(),f=b(window);c.fixed||(a.top+=f.scrollTop(),a.left+=f.scrollLeft());a.position=c.fixed?"fixed":"absolute";this.getOverlay().css(a).fadeIn(c.speed,d)},function(b){this.getOverlay().fadeOut(this.getConf().closeSpeed,
b)});b.fn.overlay=function(a){var d=this.data("overlay");if(d)return d;b.isFunction(a)&&(a={onBeforeLoad:a});a=b.extend(!0,{},b.tools.overlay.conf,a);this.each(function(){d=new i(b(this),a);f.push(d);b(this).data("overlay",d)});return a.api?d:this}})(jQuery);
(function(b){var i="undefined"!=typeof window.innerWidth?function(){return{w:window.innerWidth,h:window.innerHeight}}:"undefined"!=typeof document.documentElement&&"undefined"!=typeof document.documentElement.clientWidth&&0!=document.documentElement.clientWidth?function(){return{w:document.documentElement.clientWidth,h:document.documentElement.clientHeight}}:function(){return{w:document.getElementsByTagName("body")[0].clientWidth,h:document.getElementsByTagName("body")[0].clientHeight}};window.kbs=
function(f){b(".kbs.current",f).removeClass("current");var d=b(".domain-section:first",f),a=b(".domain-section:last",f),e=this.scroll_to=function(h){var a=b(document).scrollTop();b(document).height();var c=i().h,c=a+c,d=h.offset().top,h=d+h.height();d<a?b(document).scrollTop(d):h>c&&b(document).scrollTop(a+(h-c))},c=this.get_current=function(){return b(".kbs.current:first",f)},k=this.set_next=function(h,b,a){h=h||c();b.length&&(h.removeClass("current"),b.addClass("current"),a||e(b))},j=this.next_domain=
function(h){var b=c(),a=g(b);a&&(a=a.find(".kbs:first"),k(b,a,h))},g=this._next_domain=function(h){if(!h||!h.length)return b(".domain-section:first",f);h=h.closest(".domain-section");return!h.length||h[0]===a[0]?d:h.next(".domain-section")},p=this.prev_domain=function(){var b=c(),a=n(b);a&&(a=a.find(".kbs:first"),k(b,a))},n=this._prev_domain=function(h){if(!h||!h.length)return b(".domain-section:last",f);var c=h.closest(".domain-section");return h.closest(".property-section").length||h.closest(".type-section").length?
c:!c.length||c[0]===d[0]?a:c.prev(".domain-section")},m=this.next_type=function(){var b=c(),a=o(b);a&&(a=a.find(".kbs:first"),k(b,a))},o=this._next_type=function(h){if(!h||!h.length)return b(".type-section:first",f);var a=h.closest(".domain-section"),h=h.closest(".type-section"),h=h.length?h.next(".type-section"):a.find(".type-section:first");if(!h||!h.length){var c=g(a);if(c)for(;c.get(0)!==a.get(0);){h=c.find(".type-section:first");if(h.length)break;c=g(c)}}return h},l=this.prev_type=function(){var b=
c(),a=s(b);a&&(a=a.find(".kbs:first"),k(b,a))},s=this._prev_type=function(a){if(!a||!a.length)return b(".type-section:last",f);var c=a.closest(".domain-section"),d=a.closest(".type-section");if(a.closest(".property-section").length)return d;var e;d.length&&(e=d.prev(".type-section"));if(!e||!e.length)if(a=n(c))for(;a.get(0)!==c.get(0);){e=a.find(".type-section:last");if(e.length)break;a=n(a)}return e},u=this.next_prop=function(){var a=c(),b=v(a);b&&(b=b.find(".kbs:first"),k(a,b))},v=this._next_prop=
function(a){if(!a||!a.length)return b(".property-section:first",f);var c=a.closest(".domain-section"),d=a.closest(".type-section"),e=a.closest(".property-section"),c=e.length?e.next(".property-section"):d.length?d.find(".property-section:first"):c.find(".property-section:first");if(!c||!c.length)if(a=o(a))for(;a.get(0)!==d.get(0);){c=a.find(".property-section:first");if(c.length)break;null==d.get(0)&&(d=a);a=o(a)}return c},q=this.prev_prop=function(){var a=c(),b=t(a);b&&(b=b.find(".kbs:first"),k(a,
b))},t=this._prev_prop=function(a){if(!a||!a.length)return b(".property-section:last",f);var c=a.closest(".domain-section"),d=a.closest(".type-section"),e=a.closest(".property-section");if(a.closest(".data-section").length)return e;var g;e.length&&(g=e.prev(".property-section"));if(!g||!g.length)if(l=d.length?s(d):s(c))for(;l.get(0)!==d.get(0);){g=l.find(".property-section:last");if(g.length)break;null==d.get(0)&&(d=l);l=s(l)}return g};this.next=function(){var a=c(),b=this._next(a);b&&k(a,b)};this._next=
function(c){if(!c||!c.length)return b(".domain-section:first .kbs:first",f);var e=c.closest(".domain-section"),g=c.closest(".type-section"),i=c.closest(".property-section");if(c.closest(".data-section").length){c=c.next(".kbs");if(c.length)return c;c=i.next(".property-section").find(".kbs:first");if(c.length)return c;c=g.next(".type-section").find(".kbs:first")}else if(i.length){c=i.find(".data-section:first .kbs:first");if(c.length)return c;c=i.next(".property-section").find(".kbs:first");if(c.length)return c;
c=g.next(".type-section").find(".kbs:first")}else if(g.length){c=g.find(".property-section:first .kbs:first");if(c.length)return c;c=g.next(".type-section").find(".kbs:first")}else c=e.find(".type-section:first .kbs:first");return c.length?c:e.get(0)===a.get(0)?d.find(".kbs:first"):e.next(".domain-section").find(".kbs:first")};this.prev=function(){var a=c(),b=this._prev(a);b&&k(a,b)};this._prev=function(c){if(!c||!c.length)return c=b(".data-section:last .kbs:last",f),c.length||(c=b(".property-section:last .kbs:first",
f)),c.length||(c=b(".type-section:last .kbs:first",f)),c.length||(c=b(".domain-section:last .kbs:first",f)),c;var e=c.closest(".domain-section"),g=c.closest(".type-section"),i=c.closest(".property-section");return c.closest(".data-section").length?(c=c.prev(".kbs"),c.length?c:i.find(".kbs:first")):i.length?(c=i.prev(".property-section").find(".kbs:last"),c.length?c:g.find(".kbs:first")):g.length?(c=g.prev(".type-section").find(".kbs:last"),c.length?c:e.find(".kbs:first")):e.get(0)===d.get(0)?a.find(".kbs:last"):
e.prev(".domain-section").find(".kbs:last")};this.edit=function(){this.get_current().trigger("edit")};var r=this;b(document).unbind(".kbs").bind("keydown.kbs",function(a){var c=a.target;if(c==document.body||c==document||c==window||c==b("html")[0])c=a.keyCode,68===c?a.shiftKey?p():j():84===c?a.shiftKey?l():m():80===c?a.shiftKey?q():u():74===c?r.next():75===c?r.prev():69===c&&r.edit()})}})(jQuery);
(function(b,i){var f=window.propbox={init:function(d,a){a=b.extend({lang:"/lang/en"},a);if(!a.base_ajax_url)throw Error("base_ajax_url required in propbox options");if(!a.base_static_url)throw Error("base_static_url required in propbox options");if(!a.id)throw Error("topic id required in propbox options");if(!a.lang)throw Error("lang required in propbox options");f.options=a;f.kbs=new i(d);f.kbs.set_next(f.kbs.get_current(),b(".kbs:visible:first",d,!0));b(".kbs",d).live("click",function(){var a=f.kbs.get_current();
f.kbs.set_next(a,b(this),!0)}).live("edit",function(){var a=b(this).find(".headmenu:first").data("submenu");a&&b("li:first a:first",a).click()});f.init_menus(d)},init_menus:function(d,a){d=b(d||document);a&&b(".nicemenu",d).nicemenu();var e;e=d&&d.is(".hover-row")?d:b(".hover-row",d);e.hover(f.row_menu_hoverover,f.row_menu_hoverout);e.dblclick(function(){var a=b(".nicemenu .default-action",this);a.length||(a=b(".nicemenu:first .submenu:first a:first",this));var d=a.attr("href");("#"==d||0==d.indexOf("javascript:void(0)"))&&
b(a).click()});b(".nicemenu .headmenu",d).add(b(".nicemenu .default-action",d)).click("click",function(){if(f.kbs){var a=f.kbs.get_current();a&&f.kbs.set_next(a,b(this).parents(".kbs:first"),!0)}return!1})},row_menu_hoverover:function(){b(this).addClass("row-hover")},row_menu_hoverout:function(){b(this).removeClass("row-hover")},get_script:function(d,a){var e=f.get_script.cache;e||(e=f.get_script.cache={});var c=e[d];c?1===c.state?c.callbacks.push(a):4===c.state&&a():(c=e[d]={state:0,callbacks:[a]},
b.ajax({url:f.options.base_static_url+d,dataType:"script",beforeSend:function(){c.state=1},success:function(){c.state=4;b.each(c.callbacks,function(a,b){b()})},error:function(){c.state=-1}}))},prop_edit:function(d,a){var e=b(d).parents(".property-section");e.length||(e=b(d).parents(".submenu").data("headmenu").parents(".property-section"));e=e.find(".data-section .data-row:first:visible .nicemenu:first .headmenu:first a");e.length?e.click():f.prop_add(d,a);return!1},prop_add:function(d,a){var e=b(d).parents(".property-section");
e.length||(e=b(d).parents(".submenu").data("headmenu").parents(".property-section"));f.get_script("/propbox-edit.mf.js",function(){f.edit.prop_add_begin(e,a)});return!1},value_edit:function(d){var a=b(d).parents(".submenu").data("headmenu").parents(".data-row:first"),e=a.parents(".property-section");f.get_script("/propbox-edit.mf.js",function(){f.edit.value_edit_begin(e,a)});return!1},value_delete:function(d){var a=b(d).parents(".submenu").data("headmenu").parents(".data-row:first"),e=a.parents(".property-section");
f.get_script("/propbox-edit.mf.js",function(){f.edit.value_delete_begin(e,a)});return!1},remove_type:function(d){var d=b(d),a=d.parents(".type-section");f.get_script("/propbox-edit.mf.js",function(){f.edit.remove_type_begin(d,a)});return!1},add_type:function(d,a,e){var d=b(d),c=d.parents(".type-section"),i=f.options.incompatible_types;i?i.search(f.options.id,a,e,{compatible:function(){f.add_type_submit(d,c)},incompatible:i.overlay_incompatible_callback({onConfirm:function(){f.add_type_submit(d,c)}})}):
f.add_type_submit(d,c);return!1},add_type_submit:function(b,a){f.get_script("/propbox-edit.mf.js",function(){f.edit.add_type_submit(b,a)})},add_has_no_value:function(d){var a=b(d).parents(".submenu").data("headmenu").parents(".property-section");f.get_script("/propbox-edit.mf.js",function(){f.edit.add_has_no_value(a)});return!1},add_has_value:function(d){var a=b(d).parents(".submenu").data("headmenu").parents(".property-section");f.get_script("/propbox-edit.mf.js",function(){f.edit.add_has_value(a)});
return!1},remove_has_no_value:function(d){var a=b(d).parents(".property-section");f.get_script("/propbox-edit.mf.js",function(){f.edit.remove_has_no_value(a)});return!1},remove_has_value:function(d){var a=b(d).parents(".property-section");f.get_script("/propbox-edit.mf.js",function(){f.edit.remove_has_value(a)});return!1},more:function(d,a,e){var c=b(d).parents(".property-section");f.get_script("/propbox-edit.mf.js",function(){f.edit.more(c,a,e)})}}})(jQuery,window.kbs);
(function(b,i,f){var d=i.formbuilder={init:function(){i.c.header&&b("#header").fadeIn();b(".nicemenu").nicemenu();f.init(null,{id:i.c.id,base_ajax_url:i.h.ajax_url("lib/propbox"),base_static_url:i.h.static_url("lib/propbox"),lang:i.lang||"/lang/en",suggest_impl:i.suggest_options,incompatible_types:i.incompatible_types});b(window).bind("fb.user.signedin",function(a,d){b("#signedin > a:first").text(d.name)})}};b(d.init)})(jQuery,window.freebase,window.propbox);