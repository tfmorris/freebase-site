
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
if(!("JSON"in window&&window.JSON)){if(!this.JSON)this.JSON={};(function(){function c(f){return f<10?"0"+f:f}function r(f){a.lastIndex=0;return a.test(f)?'"'+f.replace(a,function(h){var j=g[h];return typeof j==="string"?j:"\\u"+("0000"+h.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+f+'"'}function p(f,h){var j,i,n,o,k=b,l,m=h[f];if(m&&typeof m==="object"&&typeof m.toJSON==="function")m=m.toJSON(f);if(typeof e==="function")m=e.call(h,f,m);switch(typeof m){case "string":return r(m);case "number":return isFinite(m)?
String(m):"null";case "boolean":case "null":return String(m);case "object":if(!m)return"null";b+=d;l=[];if(Object.prototype.toString.apply(m)==="[object Array]"){o=m.length;for(j=0;j<o;j+=1)l[j]=p(j,m)||"null";n=l.length===0?"[]":b?"[\n"+b+l.join(",\n"+b)+"\n"+k+"]":"["+l.join(",")+"]";b=k;return n}if(e&&typeof e==="object"){o=e.length;for(j=0;j<o;j+=1){i=e[j];if(typeof i==="string")if(n=p(i,m))l.push(r(i)+(b?": ":":")+n)}}else for(i in m)if(Object.hasOwnProperty.call(m,i))if(n=p(i,m))l.push(r(i)+
(b?": ":":")+n);n=l.length===0?"{}":b?"{\n"+b+l.join(",\n"+b)+"\n"+k+"}":"{"+l.join(",")+"}";b=k;return n}}if(typeof Date.prototype.toJSON!=="function"){Date.prototype.toJSON=function(){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+c(this.getUTCMonth()+1)+"-"+c(this.getUTCDate())+"T"+c(this.getUTCHours())+":"+c(this.getUTCMinutes())+":"+c(this.getUTCSeconds())+"Z":null};String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(){return this.valueOf()}}var q=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
a=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,b,d,g={"\u0008":"\\b","\t":"\\t","\n":"\\n","\u000c":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},e;if(typeof JSON.stringify!=="function")JSON.stringify=function(f,h,j){var i;d=b="";if(typeof j==="number")for(i=0;i<j;i+=1)d+=" ";else if(typeof j==="string")d=j;if((e=h)&&typeof h!=="function"&&(typeof h!=="object"||typeof h.length!=="number"))throw new Error("JSON.stringify");return p("",
{"":f})};if(typeof JSON.parse!=="function")JSON.parse=function(f,h){function j(n,o){var k,l,m=n[o];if(m&&typeof m==="object")for(k in m)if(Object.hasOwnProperty.call(m,k)){l=j(m,k);if(l!==undefined)m[k]=l;else delete m[k]}return h.call(n,o,m)}var i;f=String(f);q.lastIndex=0;if(q.test(f))f=f.replace(q,function(n){return"\\u"+("0000"+n.charCodeAt(0).toString(16)).slice(-4)});if(/^[\],:{}\s]*$/.test(f.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
"]").replace(/(?:^|:|,)(?:\s*\[)+/g,""))){i=eval("("+f+")");return typeof h==="function"?j({"":i},""):i}throw new SyntaxError("JSON.parse");}})()}
(function(c,r){if(!("console"in window)){var p=window.console={};p.log=p.warn=p.error=p.debug=function(){}}c(function(){var a=c("<div>");c(document.body).append(a);var b=setTimeout(function(){if(c.cleanData){var d=c.cleanData;c.cleanData=function(e){for(var f=0,h;(h=e[f])!=null;f++)c(h).triggerHandler("remove");d(e)}}else{var g=c.fn.remove;c.fn.remove=function(e,f){return this.each(function(){if(!f)if(!e||c.filter(e,[this]).length)c("*",this).add([this]).each(function(){c(this).triggerHandler("remove")});
return g.call(c(this),e,f)})}}},1);a.bind("remove",function(){clearTimeout(b)});a.remove()});c.suggest=function(a,b){c.fn[a]=function(d){this.length||console.warn("Suggest: invoked on empty element set");return this.each(function(){if(this.nodeName)if(this.nodeName.toUpperCase()==="INPUT")this.type&&this.type.toUpperCase()!=="TEXT"&&console.warn("Suggest: unsupported INPUT type: "+this.type);else console.warn("Suggest: unsupported DOM element: "+this.nodeName);var g=c.data(this,a);g&&g._destroy();
c.data(this,a,new c.suggest[a](this,d))._init()})};c.suggest[a]=function(d,g){var e=this,f=this.options=c.extend(true,{},c.suggest.defaults,c.suggest[a].defaults,g),h=f.css_prefix=f.css_prefix||"",j=f.css;this.name=a;c.each(j,function(k){j[k]=h+j[k]});f.ac_param={};c.each(["key","filter","spell","exact","lang"],function(k,l){var m=f[l];m===null||m===""||(f.ac_param[l]=m)});this._status={START:"",LOADING:"",SELECT:"",ERROR:""};if(f.status&&f.status instanceof Array&&f.status.length>=3){this._status.START=
f.status[0]||"";this._status.LOADING=f.status[1]||"";this._status.SELECT=f.status[2]||"";if(f.status.length===4)this._status.ERROR=f.status[3]||""}var i=this.status=c('<div style="display:none;">').addClass(j.status),n=this.list=c("<ul>").addClass(j.list),o=this.pane=c('<div style="display:none;" class="fbs-reset">').addClass(j.pane);o.append(i).append(n);if(f.parent)c(f.parent).append(o);else{o.css("position","absolute");f.zIndex&&o.css("z-index",f.zIndex);c(document.body).append(o)}o.bind("mousedown",
function(k){e.input.data("dont_hide",true);k.stopPropagation()}).bind("mouseup",function(k){e.input.data("dont_hide")&&e.input.focus();e.input.removeData("dont_hide");k.stopPropagation()}).bind("click",function(k){k.stopPropagation();if(k=e.get_selected()){e.onselect(k,true);e.hide_all()}});n.hover(function(k){e.hoverover_list(k)},function(k){e.hoverout_list(k)});this.input=c(d).attr("autocomplete","off").unbind(".suggest").bind("remove.suggest",function(){e._destroy()}).bind("keydown.suggest",function(k){e.keydown(k)}).bind("keypress.suggest",
function(k){e.keypress(k)}).bind("keyup.suggest",function(k){e.keyup(k)}).bind("blur.suggest",function(k){e.blur(k)}).bind("textchange.suggest",function(){e.textchange()}).bind("focus.suggest",function(k){e.focus(k)}).bind(c.browser.msie?"paste.suggest":"input.suggest",function(){clearTimeout(e.paste_timeout);e.paste_timeout=setTimeout(function(){e.textchange()},0)});this.onresize=function(){e.invalidate_position();if(o.is(":visible")){e.position();if(f.flyout&&e.flyoutpane&&e.flyoutpane.is(":visible")){var k=
e.get_selected();k&&e.flyout_position(k)}}};c(window).bind("resize.suggest",this.onresize).bind("scroll.suggest",this.onresize)};c.suggest[a].prototype=c.extend({},c.suggest.prototype,b)};c.suggest.prototype={_init:function(){},_destroy:function(){this.pane.remove();this.list.remove();this.input.unbind(".suggest");c(window).unbind("resize.suggest",this.onresize).unbind("scroll.suggest",this.onresize);this.input.removeData("data.suggest")},invalidate_position:function(){self._position=null},status_start:function(){this.hide_all();
this.status.siblings().hide();if(this._status.START){this.status.text(this._status.START).show();if(!this.pane.is(":visible")){this.position();this.pane_show()}}this._status.LOADING&&this.status.removeClass("loading")},status_loading:function(){this.status.siblings().show();if(this._status.LOADING){this.status.addClass("loading").text(this._status.LOADING).show();if(!this.pane.is(":visible")){this.position();this.pane_show()}}else this.status.hide()},status_select:function(){this.status.siblings().show();
this._status.SELECT?this.status.text(this._status.SELECT).show():this.status.hide();this._status.LOADING&&this.status.removeClass("loading")},status_error:function(){this.status.siblings().show();this._status.ERROR?this.status.text(this._status.ERROR).show():this.status.hide();this._status.LOADING&&this.status.removeClass("loading")},focus:function(a){this.input.val()===""?this.status_start():this.focus_hook(a)},focus_hook:function(){if(!this.input.data("data.suggest")&&!this.pane.is(":visible")&&
c("."+this.options.css.item,this.list).length){this.position();this.pane_show()}},keydown:function(a){var b=a.keyCode;if(b===9)this.tab(a);else if(b===38||b===40)a.shiftKey||a.preventDefault()},keypress:function(a){var b=a.keyCode;if(b===38||b===40)a.shiftKey||a.preventDefault();else b===13&&this.enter(a)},keyup:function(a){var b=a.keyCode;if(b===38){a.preventDefault();this.up(a)}else if(b===40){a.preventDefault();this.down(a)}else if(a.ctrlKey&&b===77)c(".fbs-more-link",this.pane).click();else if(c.suggest.is_char(a)){clearTimeout(this.keypress.timeout);
var d=this;this.keypress.timeout=setTimeout(function(){d.textchange()},0)}else b===27&&this.escape(a);return true},blur:function(a){if(!this.input.data("dont_hide")){this.input.data("data.suggest")||this.check_required(a);this.hide_all()}},tab:function(a){if(!(a.shiftKey||a.metaKey||a.ctrlKey)){a=this.options;a=this.pane.is(":visible")&&c("."+a.css.item,this.list).length;var b=this.get_selected();if(a&&b){this.onselect(b);this.hide_all()}}},enter:function(a){var b=this.options;if(this.pane.is(":visible"))if(a.shiftKey){this.shift_enter(a);
a.preventDefault()}else if(c("."+b.css.item,this.list).length){var d=this.get_selected();if(d){this.onselect(d);this.hide_all();a.preventDefault()}else{d=this.input.data("data.suggest");if(b.soft)d||this.check_required(a);else if(c("."+this.options.css.item+":visible",this.list).length){this.updown(false);a.preventDefault()}else d||this.check_required(a)}}},shift_enter:function(){},escape:function(){this.hide_all()},up:function(a){this.updown(true,a.ctrlKey||a.shiftKey)},down:function(a){this.updown(false,
null,a.ctrlKey||a.shiftKey)},updown:function(a,b,d){var g=this.options.css,e=this.list;if(this.pane.is(":visible")){var f=c("."+g.item+":visible",e);if(f.length){e=c(f[0]);f=c(f[f.length-1]);var h=this.get_selected()||[];clearTimeout(this.ignore_mouseover.timeout);this._ignore_mouseover=false;if(a)if(b)this._goto(e);else if(h.length)if(h[0]==e[0]){e.removeClass(g.selected);this.input.val(this.input.data("original.suggest"));this.hoverout_list()}else this._goto(h.prevAll("."+g.item+":visible:first"));
else this._goto(f);else if(d)this._goto(f);else if(h.length)if(h[0]==f[0]){f.removeClass(g.selected);this.input.val(this.input.data("original.suggest"));this.hoverout_list()}else this._goto(h.nextAll("."+g.item+":visible:first"));else this._goto(e)}}else a||this.textchange()},_goto:function(a){a.trigger("mouseover.suggest");var b=a.data("data.suggest");this.input.val(b?b.name:this.input.data("original.suggest"));this.scroll_to(a)},scroll_to:function(a){var b=this.list,d=b.scrollTop(),g=d+b.innerHeight(),
e=a.outerHeight();a=a.prevAll().length*e;e=a+e;if(a<d){this.ignore_mouseover();b.scrollTop(a)}else if(e>g){this.ignore_mouseover();b.scrollTop(d+e-g)}},textchange:function(){this.input.removeData("data.suggest");this.input.trigger("fb-textchange",this);var a=this.input.val();if(a==="")this.status_start();else{this.status_loading();this.request(a)}},request:function(){},response:function(a){if(a){"cost"in a&&this.trackEvent(this.name,"response","cost",a.cost);if(this.check_response(a)){var b=[];if(c.isArray(a))b=
a;else if("result"in a)b=a.result;var d=c.map(arguments,function(j){return j});this.response_hook.apply(this,d);var g=null,e=this,f=this.options;c.each(b,function(j,i){if(!i.id&&i.mid)i.id=i.mid;var n=e.create_item(i,a).bind("mouseover.suggest",function(o){e.mouseover_item(o)}).data("data.suggest",i);e.list.append(n);if(j===0)g=n});this.input.data("original.suggest",this.input.val());if(c("."+f.css.item,this.list).length===0&&f.nomatch){b=c('<li class="fbs-nomatch">');if(typeof f.nomatch==="string")b.text(f.nomatch);
else{f.nomatch.title&&b.append(c('<em class="fbs-nomatch-text">').text(f.nomatch.title));f.nomatch.heading&&b.append(c("<h3>").text(f.nomatch.heading));if((f=f.nomatch.tips)&&f.length){var h=c('<ul class="fbs-search-tips">');c.each(f,function(j,i){h.append(c("<li>").text(i))});b.append(h)}}b.bind("click.suggest",function(j){j.stopPropagation()});this.list.append(b)}d.push(g);this.show_hook.apply(this,d);this.position();this.pane_show()}}},pane_show:function(){var a=false;if(c("> li",this.list).length)a=
true;a||this.pane.children(":not(."+this.options.css.list+")").each(function(){if(c(this).css("display")!="none"){a=true;return false}});if(a)if(this.options.animate){var b=this;this.pane.slideDown("fast",function(){b.input.trigger("fb-pane-show",b)})}else{this.pane.show();this.input.trigger("fb-pane-show",this)}else{this.pane.hide();this.input.trigger("fb-pane-hide",this)}},create_item:function(a){var b=this.options.css,d=c("<li>").addClass(b.item);a=c("<label>").text(a.name);d.append(c("<div>").addClass(b.item_name).append(a));
return d},mouseover_item:function(a){if(!this._ignore_mouseover){a=a.target;if(a.nodeName.toLowerCase()!=="li")a=c(a).parents("li:first");var b=c(a),d=this.options.css;c("."+d.item,this.list).each(function(){this!==b[0]&&c(this).removeClass(d.selected)});if(!b.hasClass(d.selected)){b.addClass(d.selected);this.mouseover_item_hook(b)}}},mouseover_item_hook:function(){},hoverover_list:function(){},hoverout_list:function(){},check_response:function(){return true},response_hook:function(){this.list.empty()},
show_hook:function(){this.status_select()},position:function(){var a=this.pane,b=this.options;if(!b.parent){if(!self._position){var d=this.input,g=d.offset(),e=d.outerWidth(true),f=d.outerHeight(true);g.top+=f;var h=a.outerWidth(),j=a.outerHeight(),i=g.top+j/2,n=c(window).scrollLeft();d=c(window).scrollTop();var o=c(window).width(),k=c(window).height()+d,l=true;if("left"==b.align)l=true;else if("right"==b.align)l=false;else if(g.left>n+o/2)l=false;if(!l){l=g.left-(h-e);if(l>n)g.left=l}if(i>k){b=g.top-
f-j;if(b>d)g.top=b}this._position=g}a.css({top:this._position.top,left:this._position.left})}},ignore_mouseover:function(){this._ignore_mouseover=true;var a=this;this.ignore_mouseover.timeout=setTimeout(function(){a.ignore_mouseover_reset()},1E3)},ignore_mouseover_reset:function(){this._ignore_mouseover=false},get_selected:function(){var a=null,b=this.options.css.selected;c("li",this.list).each(function(){var d=c(this);if(d.hasClass(b)&&d.is(":visible")){a=d;return false}});return a},onselect:function(a){var b=
a.data("data.suggest");if(b){this.input.val(b.name).data("data.suggest",b).trigger("fb-select",b);this.trackEvent(this.name,"fb-select","index",a.prevAll().length)}},trackEvent:function(a,b,d,g){this.input.trigger("fb-track-event",{category:a,action:b,label:d,value:g})},check_required:function(a){var b=this.options.required;if(b===true){if(this.input.val()!==""){this.input.trigger("fb-required",{domEvent:a});return false}}else if(b==="always"){this.input.trigger("fb-required",{domEvent:a});return false}return true},
hide_all:function(){this.pane.hide();this.input.trigger("fb-pane-hide",this)}};c.extend(c.suggest,{defaults:{status:["Start typing to get suggestions...","Searching...","Select an item from the list:","Sorry, something went wrong. Please try again later"],required:false,soft:false,nomatch:"no matches",css:{pane:"fbs-pane",list:"fbs-list",item:"fbs-item",item_name:"fbs-item-name",selected:"fbs-selected",status:"fbs-status"},css_prefix:null,parent:null,animate:false,zIndex:null},$$:function(a,b){return c("."+
a,b)},use_jsonp:function(a){if(!a)return false;var b=window.location.href;b=b.substr(0,b.length-window.location.pathname.length);if(b===a)return false;return true},strongify:function(a,b){var d,g=a.toLowerCase().indexOf(b.toLowerCase());if(g>=0){var e=b.length;d=document.createTextNode(a.substring(0,g));var f=c("<strong>").text(a.substring(g,g+e));g=document.createTextNode(a.substring(g+e));d=c("<div>").append(d).append(f).append(g)}else d=c("<div>").text(a);return d},keyCode:{CAPS_LOCK:20,CONTROL:17,
DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,INSERT:45,LEFT:37,NUMPAD_ENTER:108,PAGE_DOWN:34,PAGE_UP:33,RIGHT:39,SHIFT:16,SPACE:32,TAB:9,UP:38,OPTION:18,APPLE:224},is_char:function(a){if(a.type==="keypress")if((a.metaKey||a.ctrlKey)&&a.charCode===118)return true;else{if("isChar"in a)return a.isChar}else{var b=c.suggest.keyCode.not_char;if(!b){b={};c.each(c.suggest.keyCode,function(d,g){b[""+g]=1});c.suggest.keyCode.not_char=b}return!(""+a.keyCode in b)}}});var q={_destroy:c.suggest.prototype._destroy,
show_hook:c.suggest.prototype.show_hook};c.suggest("suggest",{_init:function(){var a=this,b=this.options;if(b.flyout_service_url==null)b.flyout_service_url=b.service_url;this.flyout_url=b.flyout_service_url;if(b.flyout_service_path)if(/^\$\{id\}$/.test(b.flyout_service_path))this.flyout_object_url=true;else this.flyout_url+=b.flyout_service_path;this.jsonp=true;this.jsonp_flyout=c.suggest.use_jsonp(b.flyout_url);if(!c.suggest.cache)c.suggest.cache={};if(b.flyout){this.flyoutpane=c('<div style="display:none;" class="fbs-reset">').addClass(b.css.flyoutpane);
if(b.flyout_parent)c(b.flyout_parent).append(this.flyoutpane);else{this.flyoutpane.css("position","absolute");b.zIndex&&this.flyoutpane.css("z-index",b.zIndex);c(document.body).append(this.flyoutpane)}this.flyoutpane.hover(function(d){a.hoverover_list(d)},function(d){a.hoverout_list(d)}).bind("mousedown.suggest",function(d){d.stopPropagation();a.pane.click()});if(!c.suggest.flyout)c.suggest.flyout={};if(!c.suggest.flyout.cache)c.suggest.flyout.cache={}}},_destroy:function(){q._destroy.call(this);
this.flyoutpane&&this.flyoutpane.remove();this.input.removeData("request.count.suggest");this.input.removeData("flyout.request.count.suggest")},shift_enter:function(a){if(this.options.suggest_new){this.suggest_new();this.hide_all()}else this.check_required(a)},hide_all:function(){this.pane.hide();this.flyoutpane&&this.flyoutpane.hide();this.input.trigger("fb-pane-hide",this);this.input.trigger("fb-flyoutpane-hide",this)},request:function(a,b){var d=this,g=this.options;if(this.ac_xhr){this.ac_xhr.abort();
this.ac_xhr=null}var e={query:a,prefixed:true,format:"ac"};if(b)e.cursor=b;c.extend(e,g.ac_param);var f=g.service_url+g.service_path+"?"+c.param(e),h=c.suggest.cache[f];if(h)this.response(h,b?b:-1,true);else{clearTimeout(this.request.timeout);var j={url:g.service_url+g.service_path,data:e,traditional:true,beforeSend:function(){var i=d.input.data("request.count.suggest")||0;i||d.trackEvent(d.name,"start_session");i+=1;d.trackEvent(d.name,"request","count",i);d.input.data("request.count.suggest",i)},
success:function(i){c.suggest.cache[f]=i;i.prefix=a;d.response(i,b?b:-1)},error:function(i){d.status_error();d.trackEvent(d.name,"request","error",{url:this.url,response:i?i.responseText:""});d.input.trigger("fb-error",Array.prototype.slice.call(arguments))},complete:function(i){i&&d.trackEvent(d.name,"request","tid",i.getResponseHeader("X-Metaweb-TID"))},dataType:d.jsonp?"jsonp":"json",cache:true};this.request.timeout=setTimeout(function(){d.ac_xhr=c.ajax(j)},g.xhr_delay)}},create_item:function(a,
b){var d=this.options.css,g=c("<li>").addClass(d.item),e=c("<div>").addClass(d.item_name).append(c("<label>").append(c.suggest.strongify(a.name||a.id,b.prefix)));g.append(e);var f=a.notable;d=c("<div>").addClass(d.item_type);f&&f.name&&d.text(f.name);e.prepend(d);return g},mouseover_item_hook:function(a){a=a.data("data.suggest");this.options.flyout&&a&&this.flyout_request(a)},check_response:function(a){return a.prefix===this.input.val()},response_hook:function(a,b){this.flyoutpane&&this.flyoutpane.hide();
b>0?c(".fbs-more",this.pane).remove():this.list.empty()},show_hook:function(a,b,d){q.show_hook.apply(this,[a]);var g=this.options,e=this,f=this.pane,h=this.list,j=a.result,i=c(".fbs-more",f),n=c(".fbs-suggestnew",f);c(".fbs-status",f);var o=a.correction;if(o&&o.length){var k=c('<a class="fbs-spell-link" href="#">').append(o[0]).bind("click.suggest",function(l){l.preventDefault();l.stopPropagation();e.input.val(o[0]).trigger("textchange")});e.status.empty().append("Search instead for ").append(k).show()}if(j&&
j.length&&"cursor"in a){if(!i.length){j=c('<a class="fbs-more-link" href="#" title="(Ctrl+m)">view more</a>');i=c('<div class="fbs-more">').append(j);j.bind("click.suggest",function(l){l.preventDefault();l.stopPropagation();l=c(this).parent(".fbs-more");e.more(l.data("cursor.suggest"))});h.after(i)}i.data("cursor.suggest",a.cursor);i.show()}else i.remove();if(g.suggest_new){if(!n.length){a=c('<button class="fbs-suggestnew-button">');a.text(g.suggest_new);n=c('<div class="fbs-suggestnew">').append('<div class="fbs-suggestnew-description">Your item not in the list?</div>').append(a).append('<span class="fbs-suggestnew-shortcut">(Shift+Enter)</span>').bind("click.suggest",
function(l){l.stopPropagation();e.suggest_new(l)});f.append(n)}n.show()}else n.remove();if(d&&d.length&&b>0){b=d.prevAll().length*d.outerHeight();h.scrollTop();h.animate({scrollTop:b},"slow",function(){d.trigger("mouseover.suggest")})}},suggest_new:function(){var a=this.input.val();if(a!==""){this.input.data("data.suggest",a).trigger("fb-select-new",a);this.trackEvent(this.name,"fb-select-new","index","new");this.hide_all()}},more:function(a){if(a){var b=this.input.data("original.suggest");b!==null&&
this.input.val(b);this.request(this.input.val(),a);this.trackEvent(this.name,"more","cursor",a)}return false},flyout_request:function(a){var b=this;if(this.flyout_xhr){this.flyout_xhr.abort();this.flyout_xhr=null}var d=this.options,g=this.flyoutpane.data("data.suggest");if(g&&a.id===g.id){if(!this.flyoutpane.is(":visible")){this.flyout_position(this.get_selected());this.flyoutpane.show();this.input.trigger("fb-flyoutpane-show",this)}}else if((g=c.suggest.flyout.cache[a.id])&&g.id&&g.html)this.flyout_response(g);
else{g=this.flyout_url;var e=a.id;a=null;if(this.flyout_object_url)g+=e+"?flyout";else a={id:e};var f={url:g,data:a,traditional:true,beforeSend:function(){var h=b.input.data("flyout.request.count.suggest")||0;h+=1;b.trackEvent(b.name,"flyout.request","count",h);b.input.data("flyout.request.count.suggest",h)},success:function(h){h=b.jsonp_flyout?h:{id:e,html:h};c.suggest.flyout.cache[h.id]=h;b.flyout_response(h)},error:function(h){b.trackEvent(b.name,"flyout","error",{url:this.url,response:h?h.responseText:
""})},complete:function(h){h&&b.trackEvent(b.name,"flyout","tid",h.getResponseHeader("X-Metaweb-TID"))},dataType:b.jsonp_flyout?"jsonp":"html",cache:true};clearTimeout(this.flyout_request.timeout);this.flyout_request.timeout=setTimeout(function(){b.flyout_xhr=c.ajax(f)},d.xhr_delay);this.input.trigger("fb-request-flyout",f)}},flyout_response:function(a){var b=this.pane,d=this.get_selected()||[];if(b.is(":visible")&&d.length)if((b=d.data("data.suggest"))&&a.id===b.id&&a.html){this.flyoutpane.html(a.html);
this.flyout_position(d);this.flyoutpane.show().data("data.suggest",b);this.input.trigger("fb-flyoutpane-show",this)}},flyout_position:function(a){if(!this.options.flyout_parent){var b=this.pane,d=this.flyoutpane,g=this.options.css,e=r,f={top:parseInt(d.css("top"),10),left:parseInt(d.css("left"),10)},h=b.offset(),j=b.outerWidth(),i=d.outerHeight(),n=d.outerWidth();if(this.options.flyout==="bottom"){e=h;j=this.input.offset();if(h.top<j.top)e.top-=i;else e.top+=b.outerHeight();d.addClass(g.flyoutpane+
"-bottom")}else{e=a.offset();a=a.outerHeight();e.left+=j;var o=e.left+n;b=c(document.body).scrollLeft();var k=c(window).width()+b;e.top=e.top+a-i;if(e.top<h.top)e.top=h.top;if(o>k){h=e.left-(j+n);if(h>b)e.left=h}d.removeClass(g.flyoutpane+"-bottom")}e.top===f.top&&e.left===f.left||d.css({top:e.top,left:e.left})}},hoverout_list:function(){this.flyoutpane&&!this.get_selected()&&this.flyoutpane.hide()}});c.extend(c.suggest.suggest,{defaults:{filter:null,spell:"always",exact:false,lang:null,key:null,
service_url:"https://www.googleapis.com",service_path:"/freebase/v1/search",align:null,flyout:true,flyout_service_url:"http://www.freebase.com",flyout_service_path:"/private/flyout",flyout_parent:null,suggest_new:null,nomatch:{title:"No suggested matches",heading:"Tips on getting better suggestions:",tips:["Enter more or fewer characters","Add words related to your original search","Try alternate spellings","Check your spelling"]},css:{item_type:"fbs-item-type",flyoutpane:"fbs-flyout-pane"},xhr_delay:200}});
document.createElement("input")})(jQuery);