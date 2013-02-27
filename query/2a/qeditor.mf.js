
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
/*
 
 jQuery Tools @VERSION Tabs- The basics of UI design.

 NO COPYRIGHTS OR LICENSES. DO WHAT YOU LIKE.

 http://flowplayer.org/tools/tabs/

 Since: November 2008
 Date: @DATE 
*/
(function(a){function j(d,b,e){var f=this,k=d.add(this),h=d.find(e.tabs),i=b.jquery?b:d.children(b),o;h.length||(h=d.children());i.length||(i=d.parent().find(b));i.length||(i=a(b));a.extend(this,{click:function(n,l){var p=h.eq(n);if(typeof n=="string"&&n.replace("#","")){n=n.replace(/([\"\#\$\%\&\'\(\)\*\+\,\.\/\:\;\<\=\>\?\@\[\\\]\^\`\{\|\}\~])/g,"\\$1");p=h.filter("[href*="+n.replace("#","")+"]");n=Math.max(h.index(p),0)}if(e.rotate){var r=h.length-1;if(n<0)return f.click(r,l);if(n>r)return f.click(0,
l)}if(!p.length){if(o>=0)return f;n=e.initialIndex;p=h.eq(n)}if(n===o)return f;l=l||a.Event();l.type="onBeforeClick";k.trigger(l,[n]);if(!l.isDefaultPrevented()){m[e.effect].call(f,n,function(){l.type="onClick";k.trigger(l,[n])});o=n;h.removeClass(e.current);p.addClass(e.current);return f}},getConf:function(){return e},getTabs:function(){return h},getPanes:function(){return i},getCurrentPane:function(){return i.eq(o)},getCurrentTab:function(){return h.eq(o)},getIndex:function(){return o},next:function(){return f.click(o+
1)},prev:function(){return f.click(o-1)},destroy:function(){h.unbind(e.event).removeClass(e.current);i.find("a[href^=#]").unbind("click.T");return f}});a.each("onBeforeClick,onClick".split(","),function(n,l){a.isFunction(e[l])&&a(f).bind(l,e[l]);f[l]=function(p){a(f).bind(l,p);return f}});if(e.history&&a.fn.history){a.tools.history.init(h);e.event="history"}h.each(function(n){a(this).bind(e.event,function(l){f.click(n,l);return l.preventDefault()})});i.find("a[href^=#]").bind("click.T",function(n){f.click(a(this).attr("href"),
n)});if(location.hash)f.click(location.hash);else if(e.initialIndex===0||e.initialIndex>0)f.click(e.initialIndex)}a.tools=a.tools||{version:"@VERSION"};a.tools.tabs={conf:{tabs:"a",current:"current",onBeforeClick:null,onClick:null,effect:"default",initialIndex:0,event:"click",rotate:false,history:false},addEffect:function(d,b){m[d]=b}};var m={"default":function(d,b){this.getPanes().hide().eq(d).show();b.call()},fade:function(d,b){var e=this.getConf(),f=e.fadeOutSpeed,k=this.getPanes();f?k.fadeOut(f):
k.hide();k.eq(d).fadeIn(e.fadeInSpeed,b)},slide:function(d,b){this.getPanes().slideUp(200);this.getPanes().eq(d).slideDown(400,b)},ajax:function(d,b){this.getPanes().eq(0).load(this.getTabs().eq(d).attr("href"),b)}},g;a.tools.tabs.addEffect("horizontal",function(d,b){g||(g=this.getPanes().eq(0).width());this.getCurrentPane().animate({width:0},function(){a(this).hide()});this.getPanes().eq(d).animate({width:g},function(){a(this).show();b.call()})});a.fn.tabs=function(d,b){var e=this.data("tabs");if(e){e.destroy();
this.removeData("tabs")}if(a.isFunction(b))b={onBeforeClick:b};b=a.extend({},a.tools.tabs.conf,b);this.each(function(){e=new j(a(this),d,b);a(this).data("tabs",e)});return b.api?e:this}})(jQuery);
(function(a,j){function m(g){return!a(g).parents().andSelf().filter(function(){return a.curCSS(this,"visibility")==="hidden"||a.expr.filters.hidden(this)}).length}a.ui=a.ui||{};if(!a.ui.version){a.extend(a.ui,{version:"1.8.10",keyCode:{ALT:18,BACKSPACE:8,CAPS_LOCK:20,COMMA:188,COMMAND:91,COMMAND_LEFT:91,COMMAND_RIGHT:93,CONTROL:17,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,INSERT:45,LEFT:37,MENU:93,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,
PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SHIFT:16,SPACE:32,TAB:9,UP:38,WINDOWS:91}});a.fn.extend({_focus:a.fn.focus,focus:function(g,d){return typeof g==="number"?this.each(function(){var b=this;setTimeout(function(){a(b).focus();d&&d.call(b)},g)}):this._focus.apply(this,arguments)},scrollParent:function(){var g;g=a.browser.msie&&/(static|relative)/.test(this.css("position"))||/absolute/.test(this.css("position"))?this.parents().filter(function(){return/(relative|absolute|fixed)/.test(a.curCSS(this,
"position",1))&&/(auto|scroll)/.test(a.curCSS(this,"overflow",1)+a.curCSS(this,"overflow-y",1)+a.curCSS(this,"overflow-x",1))}).eq(0):this.parents().filter(function(){return/(auto|scroll)/.test(a.curCSS(this,"overflow",1)+a.curCSS(this,"overflow-y",1)+a.curCSS(this,"overflow-x",1))}).eq(0);return/fixed/.test(this.css("position"))||!g.length?a(document):g},zIndex:function(g){if(g!==j)return this.css("zIndex",g);if(this.length){g=a(this[0]);for(var d;g.length&&g[0]!==document;){d=g.css("position");
if(d==="absolute"||d==="relative"||d==="fixed"){d=parseInt(g.css("zIndex"),10);if(!isNaN(d)&&d!==0)return d}g=g.parent()}}return 0},disableSelection:function(){return this.bind((a.support.selectstart?"selectstart":"mousedown")+".ui-disableSelection",function(g){g.preventDefault()})},enableSelection:function(){return this.unbind(".ui-disableSelection")}});a.each(["Width","Height"],function(g,d){function b(h,i,o,n){a.each(e,function(){i-=parseFloat(a.curCSS(h,"padding"+this,true))||0;if(o)i-=parseFloat(a.curCSS(h,
"border"+this+"Width",true))||0;if(n)i-=parseFloat(a.curCSS(h,"margin"+this,true))||0});return i}var e=d==="Width"?["Left","Right"]:["Top","Bottom"],f=d.toLowerCase(),k={innerWidth:a.fn.innerWidth,innerHeight:a.fn.innerHeight,outerWidth:a.fn.outerWidth,outerHeight:a.fn.outerHeight};a.fn["inner"+d]=function(h){if(h===j)return k["inner"+d].call(this);return this.each(function(){a(this).css(f,b(this,h)+"px")})};a.fn["outer"+d]=function(h,i){if(typeof h!=="number")return k["outer"+d].call(this,h);return this.each(function(){a(this).css(f,
b(this,h,true,i)+"px")})}});a.extend(a.expr[":"],{data:function(g,d,b){return!!a.data(g,b[3])},focusable:function(g){var d=g.nodeName.toLowerCase(),b=a.attr(g,"tabindex");if("area"===d){d=g.parentNode;b=d.name;if(!g.href||!b||d.nodeName.toLowerCase()!=="map")return false;g=a("img[usemap=#"+b+"]")[0];return!!g&&m(g)}return(/input|select|textarea|button|object/.test(d)?!g.disabled:"a"==d?g.href||!isNaN(b):!isNaN(b))&&m(g)},tabbable:function(g){var d=a.attr(g,"tabindex");return(isNaN(d)||d>=0)&&a(g).is(":focusable")}});
a(function(){var g=document.body,d=g.appendChild(d=document.createElement("div"));a.extend(d.style,{minHeight:"100px",height:"auto",padding:0,borderWidth:0});a.support.minHeight=d.offsetHeight===100;a.support.selectstart="onselectstart"in d;g.removeChild(d).style.display="none"});a.extend(a.ui,{plugin:{add:function(g,d,b){g=a.ui[g].prototype;for(var e in b){g.plugins[e]=g.plugins[e]||[];g.plugins[e].push([d,b[e]])}},call:function(g,d,b){if((d=g.plugins[d])&&g.element[0].parentNode)for(var e=0;e<d.length;e++)g.options[d[e][0]]&&
d[e][1].apply(g.element,b)}},contains:function(g,d){return document.compareDocumentPosition?g.compareDocumentPosition(d)&16:g!==d&&g.contains(d)},hasScroll:function(g,d){if(a(g).css("overflow")==="hidden")return false;var b=d&&d==="left"?"scrollLeft":"scrollTop",e=false;if(g[b]>0)return true;g[b]=1;e=g[b]>0;g[b]=0;return e},isOverAxis:function(g,d,b){return g>d&&g<d+b},isOver:function(g,d,b,e,f,k){return a.ui.isOverAxis(g,b,f)&&a.ui.isOverAxis(d,e,k)}})}})(jQuery);
(function(a,j){if(a.cleanData){var m=a.cleanData;a.cleanData=function(d){for(var b=0,e;(e=d[b])!=null;b++)a(e).triggerHandler("remove");m(d)}}else{var g=a.fn.remove;a.fn.remove=function(d,b){return this.each(function(){if(!b)if(!d||a.filter(d,[this]).length)a("*",this).add([this]).each(function(){a(this).triggerHandler("remove")});return g.call(a(this),d,b)})}}a.widget=function(d,b,e){var f=d.split(".")[0],k;d=d.split(".")[1];k=f+"-"+d;if(!e){e=b;b=a.Widget}a.expr[":"][k]=function(h){return!!a.data(h,
d)};a[f]=a[f]||{};a[f][d]=function(h,i){arguments.length&&this._createWidget(h,i)};b=new b;b.options=a.extend(true,{},b.options);a[f][d].prototype=a.extend(true,b,{namespace:f,widgetName:d,widgetEventPrefix:a[f][d].prototype.widgetEventPrefix||d,widgetBaseClass:k},e);a.widget.bridge(d,a[f][d])};a.widget.bridge=function(d,b){a.fn[d]=function(e){var f=typeof e==="string",k=Array.prototype.slice.call(arguments,1),h=this;e=!f&&k.length?a.extend.apply(null,[true,e].concat(k)):e;if(f&&e.charAt(0)==="_")return h;
f?this.each(function(){var i=a.data(this,d),o=i&&a.isFunction(i[e])?i[e].apply(i,k):i;if(o!==i&&o!==j){h=o;return false}}):this.each(function(){var i=a.data(this,d);i?i.option(e||{})._init():a.data(this,d,new b(e,this))});return h}};a.Widget=function(d,b){arguments.length&&this._createWidget(d,b)};a.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",options:{disabled:false},_createWidget:function(d,b){a.data(b,this.widgetName,this);this.element=a(b);this.options=a.extend(true,{},this.options,
this._getCreateOptions(),d);var e=this;this.element.bind("remove."+this.widgetName,function(){e.destroy()});this._create();this._trigger("create");this._init()},_getCreateOptions:function(){return a.metadata&&a.metadata.get(this.element[0])[this.widgetName]},_create:function(){},_init:function(){},destroy:function(){this.element.unbind("."+this.widgetName).removeData(this.widgetName);this.widget().unbind("."+this.widgetName).removeAttr("aria-disabled").removeClass(this.widgetBaseClass+"-disabled ui-state-disabled")},
widget:function(){return this.element},option:function(d,b){var e=d;if(arguments.length===0)return a.extend({},this.options);if(typeof d==="string"){if(b===j)return this.options[d];e={};e[d]=b}this._setOptions(e);return this},_setOptions:function(d){var b=this;a.each(d,function(e,f){b._setOption(e,f)});return this},_setOption:function(d,b){this.options[d]=b;if(d==="disabled")this.widget()[b?"addClass":"removeClass"](this.widgetBaseClass+"-disabled ui-state-disabled").attr("aria-disabled",b);return this},
enable:function(){return this._setOption("disabled",false)},disable:function(){return this._setOption("disabled",true)},_trigger:function(d,b,e){var f=this.options[d];b=a.Event(b);b.type=(d===this.widgetEventPrefix?d:this.widgetEventPrefix+d).toLowerCase();e=e||{};if(b.originalEvent){d=a.event.props.length;for(var k;d;){k=a.event.props[--d];b[k]=b.originalEvent[k]}}this.element.trigger(b,e);return!(a.isFunction(f)&&f.call(this.element[0],b,e)===false||b.isDefaultPrevented())}}})(jQuery);
(function(a){a.widget("ui.mouse",{options:{cancel:":input,option",distance:1,delay:0},_mouseInit:function(){var j=this;this.element.bind("mousedown."+this.widgetName,function(m){return j._mouseDown(m)}).bind("click."+this.widgetName,function(m){if(true===a.data(m.target,j.widgetName+".preventClickEvent")){a.removeData(m.target,j.widgetName+".preventClickEvent");m.stopImmediatePropagation();return false}});this.started=false},_mouseDestroy:function(){this.element.unbind("."+this.widgetName)},_mouseDown:function(j){j.originalEvent=
j.originalEvent||{};if(!j.originalEvent.mouseHandled){this._mouseStarted&&this._mouseUp(j);this._mouseDownEvent=j;var m=this,g=j.which==1,d=typeof this.options.cancel=="string"?a(j.target).parents().add(j.target).filter(this.options.cancel).length:false;if(!g||d||!this._mouseCapture(j))return true;this.mouseDelayMet=!this.options.delay;if(!this.mouseDelayMet)this._mouseDelayTimer=setTimeout(function(){m.mouseDelayMet=true},this.options.delay);if(this._mouseDistanceMet(j)&&this._mouseDelayMet(j)){this._mouseStarted=
this._mouseStart(j)!==false;if(!this._mouseStarted){j.preventDefault();return true}}this._mouseMoveDelegate=function(b){return m._mouseMove(b)};this._mouseUpDelegate=function(b){return m._mouseUp(b)};a(document).bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate);j.preventDefault();return j.originalEvent.mouseHandled=true}},_mouseMove:function(j){if(a.browser.msie&&!(document.documentMode>=9)&&!j.button)return this._mouseUp(j);if(this._mouseStarted){this._mouseDrag(j);
return j.preventDefault()}if(this._mouseDistanceMet(j)&&this._mouseDelayMet(j))(this._mouseStarted=this._mouseStart(this._mouseDownEvent,j)!==false)?this._mouseDrag(j):this._mouseUp(j);return!this._mouseStarted},_mouseUp:function(j){a(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate);if(this._mouseStarted){this._mouseStarted=false;j.target==this._mouseDownEvent.target&&a.data(j.target,this.widgetName+".preventClickEvent",
true);this._mouseStop(j)}return false},_mouseDistanceMet:function(j){return Math.max(Math.abs(this._mouseDownEvent.pageX-j.pageX),Math.abs(this._mouseDownEvent.pageY-j.pageY))>=this.options.distance},_mouseDelayMet:function(){return this.mouseDelayMet},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return true}})})(jQuery);
(function(a){a.ui=a.ui||{};var j=/left|center|right/,m=/top|center|bottom/,g=a.fn.position,d=a.fn.offset;a.fn.position=function(b){if(!b||!b.of)return g.apply(this,arguments);b=a.extend({},b);var e=a(b.of),f=e[0],k=(b.collision||"flip").split(" "),h=b.offset?b.offset.split(" "):[0,0],i,o,n;if(f.nodeType===9){i=e.width();o=e.height();n={top:0,left:0}}else if(f.setTimeout){i=e.width();o=e.height();n={top:e.scrollTop(),left:e.scrollLeft()}}else if(f.preventDefault){b.at="left top";i=o=0;n={top:b.of.pageY,
left:b.of.pageX}}else{i=e.outerWidth();o=e.outerHeight();n=e.offset()}a.each(["my","at"],function(){var l=(b[this]||"").split(" ");if(l.length===1)l=j.test(l[0])?l.concat(["center"]):m.test(l[0])?["center"].concat(l):["center","center"];l[0]=j.test(l[0])?l[0]:"center";l[1]=m.test(l[1])?l[1]:"center";b[this]=l});if(k.length===1)k[1]=k[0];h[0]=parseInt(h[0],10)||0;if(h.length===1)h[1]=h[0];h[1]=parseInt(h[1],10)||0;if(b.at[0]==="right")n.left+=i;else if(b.at[0]==="center")n.left+=i/2;if(b.at[1]==="bottom")n.top+=
o;else if(b.at[1]==="center")n.top+=o/2;n.left+=h[0];n.top+=h[1];return this.each(function(){var l=a(this),p=l.outerWidth(),r=l.outerHeight(),s=parseInt(a.curCSS(this,"marginLeft",true))||0,t=parseInt(a.curCSS(this,"marginTop",true))||0,w=p+s+(parseInt(a.curCSS(this,"marginRight",true))||0),x=r+t+(parseInt(a.curCSS(this,"marginBottom",true))||0),q=a.extend({},n),u;if(b.my[0]==="right")q.left-=p;else if(b.my[0]==="center")q.left-=p/2;if(b.my[1]==="bottom")q.top-=r;else if(b.my[1]==="center")q.top-=
r/2;q.left=Math.round(q.left);q.top=Math.round(q.top);u={left:q.left-s,top:q.top-t};a.each(["left","top"],function(v,y){a.ui.position[k[v]]&&a.ui.position[k[v]][y](q,{targetWidth:i,targetHeight:o,elemWidth:p,elemHeight:r,collisionPosition:u,collisionWidth:w,collisionHeight:x,offset:h,my:b.my,at:b.at})});a.fn.bgiframe&&l.bgiframe();l.offset(a.extend(q,{using:b.using}))})};a.ui.position={fit:{left:function(b,e){var f=a(window);f=e.collisionPosition.left+e.collisionWidth-f.width()-f.scrollLeft();b.left=
f>0?b.left-f:Math.max(b.left-e.collisionPosition.left,b.left)},top:function(b,e){var f=a(window);f=e.collisionPosition.top+e.collisionHeight-f.height()-f.scrollTop();b.top=f>0?b.top-f:Math.max(b.top-e.collisionPosition.top,b.top)}},flip:{left:function(b,e){if(e.at[0]!=="center"){var f=a(window);f=e.collisionPosition.left+e.collisionWidth-f.width()-f.scrollLeft();var k=e.my[0]==="left"?-e.elemWidth:e.my[0]==="right"?e.elemWidth:0,h=e.at[0]==="left"?e.targetWidth:-e.targetWidth,i=-2*e.offset[0];b.left+=
e.collisionPosition.left<0?k+h+i:f>0?k+h+i:0}},top:function(b,e){if(e.at[1]!=="center"){var f=a(window);f=e.collisionPosition.top+e.collisionHeight-f.height()-f.scrollTop();var k=e.my[1]==="top"?-e.elemHeight:e.my[1]==="bottom"?e.elemHeight:0,h=e.at[1]==="top"?e.targetHeight:-e.targetHeight,i=-2*e.offset[1];b.top+=e.collisionPosition.top<0?k+h+i:f>0?k+h+i:0}}}};if(!a.offset.setOffset){a.offset.setOffset=function(b,e){if(/static/.test(a.curCSS(b,"position")))b.style.position="relative";var f=a(b),
k=f.offset(),h=parseInt(a.curCSS(b,"top",true),10)||0,i=parseInt(a.curCSS(b,"left",true),10)||0;k={top:e.top-k.top+h,left:e.left-k.left+i};"using"in e?e.using.call(b,k):f.css(k)};a.fn.offset=function(b){var e=this[0];if(!e||!e.ownerDocument)return null;if(b)return this.each(function(){a.offset.setOffset(this,b)});return d.call(this)}}})(jQuery);
(function(a,j){var m={buttons:true,height:true,maxHeight:true,maxWidth:true,minHeight:true,minWidth:true,width:true},g={maxHeight:true,maxWidth:true,minHeight:true,minWidth:true};a.widget("ui.dialog",{options:{autoOpen:true,buttons:{},closeOnEscape:true,closeText:"close",dialogClass:"",draggable:true,hide:null,height:"auto",maxHeight:false,maxWidth:false,minHeight:150,minWidth:150,modal:false,position:{my:"center",at:"center",collision:"fit",using:function(d){var b=a(this).css(d).offset().top;b<0&&
a(this).css("top",d.top-b)}},resizable:true,show:null,stack:true,title:"",width:300,zIndex:1E3},_create:function(){this.originalTitle=this.element.attr("title");if(typeof this.originalTitle!=="string")this.originalTitle="";this.options.title=this.options.title||this.originalTitle;var d=this,b=d.options,e=b.title||"&#160;",f=a.ui.dialog.getTitleId(d.element),k=(d.uiDialog=a("<div></div>")).appendTo(document.body).hide().addClass("ui-dialog ui-widget ui-widget-content ui-corner-all "+b.dialogClass).css({zIndex:b.zIndex}).attr("tabIndex",
-1).css("outline",0).keydown(function(o){if(b.closeOnEscape&&o.keyCode&&o.keyCode===a.ui.keyCode.ESCAPE){d.close(o);o.preventDefault()}}).attr({role:"dialog","aria-labelledby":f}).mousedown(function(o){d.moveToTop(false,o)});d.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(k);var h=(d.uiDialogTitlebar=a("<div></div>")).addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(k),i=a('<a href="#"></a>').addClass("ui-dialog-titlebar-close ui-corner-all").attr("role",
"button").hover(function(){i.addClass("ui-state-hover")},function(){i.removeClass("ui-state-hover")}).focus(function(){i.addClass("ui-state-focus")}).blur(function(){i.removeClass("ui-state-focus")}).click(function(o){d.close(o);return false}).appendTo(h);(d.uiDialogTitlebarCloseText=a("<span></span>")).addClass("ui-icon ui-icon-closethick").text(b.closeText).appendTo(i);a("<span></span>").addClass("ui-dialog-title").attr("id",f).html(e).prependTo(h);if(a.isFunction(b.beforeclose)&&!a.isFunction(b.beforeClose))b.beforeClose=
b.beforeclose;h.find("*").add(h).disableSelection();b.draggable&&a.fn.draggable&&d._makeDraggable();b.resizable&&a.fn.resizable&&d._makeResizable();d._createButtons(b.buttons);d._isOpen=false;a.fn.bgiframe&&k.bgiframe()},_init:function(){this.options.autoOpen&&this.open()},destroy:function(){this.overlay&&this.overlay.destroy();this.uiDialog.hide();this.element.unbind(".dialog").removeData("dialog").removeClass("ui-dialog-content ui-widget-content").hide().appendTo("body");this.uiDialog.remove();
this.originalTitle&&this.element.attr("title",this.originalTitle);return this},widget:function(){return this.uiDialog},close:function(d){var b=this,e,f;if(false!==b._trigger("beforeClose",d)){b.overlay&&b.overlay.destroy();b.uiDialog.unbind("keypress.ui-dialog");b._isOpen=false;if(b.options.hide)b.uiDialog.hide(b.options.hide,function(){b._trigger("close",d)});else{b.uiDialog.hide();b._trigger("close",d)}a.ui.dialog.overlay.resize();if(b.options.modal){e=0;a(".ui-dialog").each(function(){if(this!==
b.uiDialog[0]){f=a(this).css("z-index");isNaN(f)||(e=Math.max(e,f))}});a.ui.dialog.maxZ=e}return b}},isOpen:function(){return this._isOpen},moveToTop:function(d,b){var e=this.options;if(e.modal&&!d||!e.stack&&!e.modal)return this._trigger("focus",b);if(e.zIndex>a.ui.dialog.maxZ)a.ui.dialog.maxZ=e.zIndex;if(this.overlay){a.ui.dialog.maxZ+=1;this.overlay.$el.css("z-index",a.ui.dialog.overlay.maxZ=a.ui.dialog.maxZ)}e={scrollTop:this.element.attr("scrollTop"),scrollLeft:this.element.attr("scrollLeft")};
a.ui.dialog.maxZ+=1;this.uiDialog.css("z-index",a.ui.dialog.maxZ);this.element.attr(e);this._trigger("focus",b);return this},open:function(){if(!this._isOpen){var d=this.options,b=this.uiDialog;this.overlay=d.modal?new a.ui.dialog.overlay(this):null;this._size();this._position(d.position);b.show(d.show);this.moveToTop(true);d.modal&&b.bind("keypress.ui-dialog",function(e){if(e.keyCode===a.ui.keyCode.TAB){var f=a(":tabbable",this),k=f.filter(":first");f=f.filter(":last");if(e.target===f[0]&&!e.shiftKey){k.focus(1);
return false}else if(e.target===k[0]&&e.shiftKey){f.focus(1);return false}}});a(this.element.find(":tabbable").get().concat(b.find(".ui-dialog-buttonpane :tabbable").get().concat(b.get()))).eq(0).focus();this._isOpen=true;this._trigger("open");return this}},_createButtons:function(d){var b=this,e=false,f=a("<div></div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix"),k=a("<div></div>").addClass("ui-dialog-buttonset").appendTo(f);b.uiDialog.find(".ui-dialog-buttonpane").remove();
typeof d==="object"&&d!==null&&a.each(d,function(){return!(e=true)});if(e){a.each(d,function(h,i){i=a.isFunction(i)?{click:i,text:h}:i;var o=a('<button type="button"></button>').attr(i,true).unbind("click").click(function(){i.click.apply(b.element[0],arguments)}).appendTo(k);a.fn.button&&o.button()});f.appendTo(b.uiDialog)}},_makeDraggable:function(){function d(h){return{position:h.position,offset:h.offset}}var b=this,e=b.options,f=a(document),k;b.uiDialog.draggable({cancel:".ui-dialog-content, .ui-dialog-titlebar-close",
handle:".ui-dialog-titlebar",containment:"document",start:function(h,i){k=e.height==="auto"?"auto":a(this).height();a(this).height(a(this).height()).addClass("ui-dialog-dragging");b._trigger("dragStart",h,d(i))},drag:function(h,i){b._trigger("drag",h,d(i))},stop:function(h,i){e.position=[i.position.left-f.scrollLeft(),i.position.top-f.scrollTop()];a(this).removeClass("ui-dialog-dragging").height(k);b._trigger("dragStop",h,d(i));a.ui.dialog.overlay.resize()}})},_makeResizable:function(d){function b(h){return{originalPosition:h.originalPosition,
originalSize:h.originalSize,position:h.position,size:h.size}}d=d===j?this.options.resizable:d;var e=this,f=e.options,k=e.uiDialog.css("position");e.uiDialog.resizable({cancel:".ui-dialog-content",containment:"document",alsoResize:e.element,maxWidth:f.maxWidth,maxHeight:f.maxHeight,minWidth:f.minWidth,minHeight:e._minHeight(),handles:typeof d==="string"?d:"n,e,s,w,se,sw,ne,nw",start:function(h,i){a(this).addClass("ui-dialog-resizing");e._trigger("resizeStart",h,b(i))},resize:function(h,i){e._trigger("resize",
h,b(i))},stop:function(h,i){a(this).removeClass("ui-dialog-resizing");f.height=a(this).height();f.width=a(this).width();e._trigger("resizeStop",h,b(i));a.ui.dialog.overlay.resize()}}).css("position",k).find(".ui-resizable-se").addClass("ui-icon ui-icon-grip-diagonal-se")},_minHeight:function(){var d=this.options;return d.height==="auto"?d.minHeight:Math.min(d.minHeight,d.height)},_position:function(d){var b=[],e=[0,0],f;if(d){if(typeof d==="string"||typeof d==="object"&&"0"in d){b=d.split?d.split(" "):
[d[0],d[1]];if(b.length===1)b[1]=b[0];a.each(["left","top"],function(k,h){if(+b[k]===b[k]){e[k]=b[k];b[k]=h}});d={my:b.join(" "),at:b.join(" "),offset:e.join(" ")}}d=a.extend({},a.ui.dialog.prototype.options.position,d)}else d=a.ui.dialog.prototype.options.position;(f=this.uiDialog.is(":visible"))||this.uiDialog.show();this.uiDialog.css({top:0,left:0}).position(a.extend({of:window},d));f||this.uiDialog.hide()},_setOptions:function(d){var b=this,e={},f=false;a.each(d,function(k,h){b._setOption(k,h);
if(k in m)f=true;if(k in g)e[k]=h});f&&this._size();this.uiDialog.is(":data(resizable)")&&this.uiDialog.resizable("option",e)},_setOption:function(d,b){var e=this.uiDialog;switch(d){case "beforeclose":d="beforeClose";break;case "buttons":this._createButtons(b);break;case "closeText":this.uiDialogTitlebarCloseText.text(""+b);break;case "dialogClass":e.removeClass(this.options.dialogClass).addClass("ui-dialog ui-widget ui-widget-content ui-corner-all "+b);break;case "disabled":b?e.addClass("ui-dialog-disabled"):
e.removeClass("ui-dialog-disabled");break;case "draggable":var f=e.is(":data(draggable)");f&&!b&&e.draggable("destroy");!f&&b&&this._makeDraggable();break;case "position":this._position(b);break;case "resizable":(f=e.is(":data(resizable)"))&&!b&&e.resizable("destroy");f&&typeof b==="string"&&e.resizable("option","handles",b);!f&&b!==false&&this._makeResizable(b);break;case "title":a(".ui-dialog-title",this.uiDialogTitlebar).html(""+(b||"&#160;"));break}a.Widget.prototype._setOption.apply(this,arguments)},
_size:function(){var d=this.options,b,e,f=this.uiDialog.is(":visible");this.element.show().css({width:"auto",minHeight:0,height:0});if(d.minWidth>d.width)d.width=d.minWidth;b=this.uiDialog.css({height:"auto",width:d.width}).height();e=Math.max(0,d.minHeight-b);if(d.height==="auto")if(a.support.minHeight)this.element.css({minHeight:e,height:"auto"});else{this.uiDialog.show();d=this.element.css("height","auto").height();f||this.uiDialog.hide();this.element.height(Math.max(d,e))}else this.element.height(Math.max(d.height-
b,0));this.uiDialog.is(":data(resizable)")&&this.uiDialog.resizable("option","minHeight",this._minHeight())}});a.extend(a.ui.dialog,{version:"1.8.10",uuid:0,maxZ:0,getTitleId:function(d){d=d.attr("id");if(!d){this.uuid+=1;d=this.uuid}return"ui-dialog-title-"+d},overlay:function(d){this.$el=a.ui.dialog.overlay.create(d)}});a.extend(a.ui.dialog.overlay,{instances:[],oldInstances:[],maxZ:0,events:a.map("focus,mousedown,mouseup,keydown,keypress,click".split(","),function(d){return d+".dialog-overlay"}).join(" "),
create:function(d){if(this.instances.length===0){setTimeout(function(){a.ui.dialog.overlay.instances.length&&a(document).bind(a.ui.dialog.overlay.events,function(e){if(a(e.target).zIndex()<a.ui.dialog.overlay.maxZ)return false})},1);a(document).bind("keydown.dialog-overlay",function(e){if(d.options.closeOnEscape&&e.keyCode&&e.keyCode===a.ui.keyCode.ESCAPE){d.close(e);e.preventDefault()}});a(window).bind("resize.dialog-overlay",a.ui.dialog.overlay.resize)}var b=(this.oldInstances.pop()||a("<div></div>").addClass("ui-widget-overlay")).appendTo(document.body).css({width:this.width(),
height:this.height()});a.fn.bgiframe&&b.bgiframe();this.instances.push(b);return b},destroy:function(d){var b=a.inArray(d,this.instances);b!=-1&&this.oldInstances.push(this.instances.splice(b,1)[0]);this.instances.length===0&&a([document,window]).unbind(".dialog-overlay");d.remove();var e=0;a.each(this.instances,function(){e=Math.max(e,this.css("z-index"))});this.maxZ=e},height:function(){var d,b;if(a.browser.msie&&a.browser.version<7){d=Math.max(document.documentElement.scrollHeight,document.body.scrollHeight);
b=Math.max(document.documentElement.offsetHeight,document.body.offsetHeight);return d<b?a(window).height()+"px":d+"px"}else return a(document).height()+"px"},width:function(){var d,b;if(a.browser.msie&&a.browser.version<7){d=Math.max(document.documentElement.scrollWidth,document.body.scrollWidth);b=Math.max(document.documentElement.offsetWidth,document.body.offsetWidth);return d<b?a(window).width()+"px":d+"px"}else return a(document).width()+"px"},resize:function(){var d=a([]);a.each(a.ui.dialog.overlay.instances,
function(){d=d.add(this)});d.css({width:0,height:0}).css({width:a.ui.dialog.overlay.width(),height:a.ui.dialog.overlay.height()})}});a.extend(a.ui.dialog.overlay.prototype,{destroy:function(){a.ui.dialog.overlay.destroy(this.$el)}})})(jQuery);
(function(a){function j(m){(m||a(".submenu:visible")).fadeOut(function(){a(this).prev(".headmenu").removeClass("expanded")})}a.factory("nicemenu",{init:function(){a(".headmenu .default-action",this.element).click(function(){j();a(this).parents(".headmenu").next(".submenu").find("a:first").click();return false});a(".headmenu",this.element).click(function(){var m=a(this),g=m.position(),d=m.height();g=m.next(".submenu").css({top:g.top+d,left:g.left});if(g.is(":visible"))j(g);else{j();g.fadeIn(function(){m.addClass("expanded")})}return false});
a(".submenu",this.element).click(function(){j(a(this));a(this).fadeOut(function(){a(this).prev(".headmenu").removeClass("expanded")})})}});a(document).click(function(){j()})})(jQuery);
(function(a){a.factory("collapse_module",{init:function(){var j=this;this.$column=a(this.options.column);this.modules=a(this.options.modules,this.element);this.first_module=this.modules.get(0);this.trigger=a(".trigger:first",this.first_module);this.first_section=a(".module-section",this.first_module);this.other_modules=this.modules.slice(1);this.column_offset=this.$column.css("margin-left");this.set_collapsed(this.options.collapsed);this.trigger.click(function(m){return j.toggle(m)})},set_collapsed:function(j){if(this.toggle_state=
j){this.trigger.addClass("collapsed");this.$column.css("margin-left",0);this.first_section.hide();this.other_modules.hide()}else{this.trigger.removeClass("collapsed");this.$column.css("margin-left",this.column_offset);this.first_section.show();this.other_modules.show()}},toggle:function(){var j=this;if(this.toggle_state){this.trigger.removeClass("collapsed");this.$column.animate({marginLeft:this.column_offset},function(){j.first_section.slideDown(function(){j.modules.removeClass("collapsed")});j.other_modules.fadeIn()})}else{this.trigger.addClass("collapsed");
this.other_modules.fadeOut();this.first_section.slideUp(function(){j.$column.animate({marginLeft:0});j.modules.addClass("collapsed")})}this.toggle_state=!this.toggle_state;this.options.toggle_callback&&this.options.toggle_callback.call(this.trigger,this.toggle_state);return false}});a.extend(true,a.collapse_module,{defaults:{collapsed:false,modules:".module",column:"#main-column"}})})(jQuery);CueCard.helper=fb.h.ajax_url("lib/cuecard/");CueCard.freebaseServiceUrl=fb.acre.freebase.service_url+"/";
CueCard.urlPrefix=CueCard.apiProxy.base=fb.h.ajax_url("lib/cuecard/");var c={},queryEditorOptions;
function onLoad(){var a=CueCard.parseURLParameters(),j=false,m={toggle_callback:onToggleHeaders,stylesheet:$("#cuecard-outputPane-stylesheet").attr("href"),initial_tab:a.tab},g={paneldrawer:{element:$("#qe-module"),drawer_height:250,toggle_state:$.localstore("cc_cp")=="1",toggle_callback:onToggleControlPane,panel_content:"cuecard-queryEditor-content"},extended:0,costs:$.localstore("cc_cp_costs")=="1"?true:false};queryEditorOptions={focusOnReady:true,onUnauthorizedMqlWrite:function(){if(window.confirm("Query editor needs to be authorized to write data on your behalf. Proceed to authorization?")){saveQuery();
var h=document.location.href,i=h.indexOf("#");if(i>0)h=h.substr(0,i);else{i=h.indexOf("?");if(i>0)h=h.substr(0,i)}h="/signin/login?mw_cookie_scope=domain&onsignin="+encodeURIComponent(h);document.location=h}},codeMirror:{parserfile:[$("#codemirror-js").attr("href")],stylesheet:[$("#codemirror-css").attr("href")]}};if("q"in a||"query"in a){var d="q"in a?a.q:a.query;try{var b=JSON.parse(d);if("query"in b){d=JSON.stringify(b.query);delete b.query;g.env=b}}catch(e){}queryEditorOptions.content=d;queryEditorOptions.cleanUp=
true;if("extended"in a)g.extended=a.extended=="1"?1:0;if("as_of_time"in a)g.as_of_time=a.as_of_time;if("env"in a)try{g.env=JSON.parse(a.env)}catch(f){}}else try{b=JSON.parse($.localstore("qe_initialQuery"));if($.trim(b.t).length>0)queryEditorOptions.content=b.t;g.env=b.e}catch(k){}if("autorun"in a)j=true;queryEditorOptions.onReady=function(){$(".nicemenu").nicemenu();$("#links").prependTo("#the-output-pane .cuecard-outputPane-tabs");resizePanes();j&&c.queryEditor.run(false);setTimeout(function(){$("#qe-module, #the-output-pane").css("visibility",
"visible")},1)};if(queryEditorOptions.content)m.queryLoaded=true;c=CueCard.createComposition({queryEditorElement:$("#the-query-editor")[0],queryEditorOptions:queryEditorOptions,outputPaneElement:$("#the-output-pane")[0],outputPaneOptions:m,controlPaneElement:$("#the-control-pane")[0],controlPaneOptions:g});c.page_chrome_height=$("#header").outerHeight()+$("#breadcrumb").outerHeight()+$("#footer").outerHeight()+($("#content").outerHeight()-$("#content").height());$(window).bind("beforeunload",function(){saveQuery()})}
function resizePanes(){var a=$("body").outerHeight()-c.page_chrome_height;if(a){$("#qe-module").height(a);c.outputPane&&c.outputPane.layout(a);c.queryEditor&&c.queryEditor.layout(a)}}function onResize(){resizePanes()}function onToggleControlPane(a){$("span",this).addClass(a?"remove-icon":"add-icon").removeClass(a?"add-icon":"remove-icon");$.localstore("cc_cp",a?"1":"0",false)}function onToggleHeaders(a){$("span",this).addClass(a?"remove-icon":"add-icon").removeClass(a?"add-icon":"remove-icon")}
function computePermanentLink(a){a.href="?q="+encodeURIComponent(c.queryEditor.content())+getUrlFlags()}function computeCompactLink(a){a.href="?q="+encodeURIComponent(c.queryEditor.getUnresolvedQuery())+getUrlFlags()}function computeMqlReadLink(a){a.href=c.queryEditor.getMqlReadURL()}
function getUrlFlags(){var a=[],j=c.controlPane.getQueryEnvelope({},true);for(var m in j){a.push("env="+JSON.stringify(j));break}queryEditorOptions.emql&&a.push("emql=1");"debug"in queryEditorOptions&&a.push("debug="+queryEditorOptions.debug);queryEditorOptions.service!=null&&a.push("service="+encodeURIComponent(queryEditorOptions.service));return a.length==0?"":"&"+a.join("&")}
function saveQuery(){var a=CueCard.jsonize({t:c.queryEditor.content(),e:c.controlPane.getQueryEnvelope({},true,true)},{breakLines:false});$.localstore("qe_initialQuery",a,false)}function computeTinyCompactLink(){var a=c.queryEditor.getUnresolvedQuery();a=CueCard.helper+"tinyurl.ajax?q="+encodeURIComponent(a)+getUrlFlags()+"&autorun=1";var j=CueCard.UI.createBlockingContinuations(function(m,g){window.prompt("Tiny URL to copy",g.result.url)});$.post(a,{},j.onDone,"json")}
function closeStartingMessage(){$("#starting-message-container").hide();$.localstore("cc_greeting","0",false)}function refreshCache(){$.post(fb.acre.freebase.site_host+"/api/service/touch?mw_cookie_scope=domain",{},null,function(){})}$(function(){onLoad();$(window).resize(onResize)});