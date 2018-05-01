if (self.CavalryLogger) { CavalryLogger.start_js(["bzP+w"]); }

__d("ChatQuietLinks",["DataStore","DOM","Event","Parent","UserAgent_DEPRECATED","getOrCreateDOMID"],(function(a,b,c,d,e,f){__p&&__p();var g={};a={silenceLinks:function(a){h(a,this.removeEmptyHrefs.bind(this))},nukeLinks:function(a){h(a,this.removeAllHrefs.bind(this))},removeEmptyHrefs:function(a){i(a,function(a){return!a||a==="#"})},removeAllHrefs:function(a){i(a)}};function h(a,c){__p&&__p();var d=!!b("UserAgent_DEPRECATED").chrome(),e=!!b("UserAgent_DEPRECATED").chrome()||b("UserAgent_DEPRECATED").ie()>=9||b("UserAgent_DEPRECATED").firefox()>=4;if(g[b("getOrCreateDOMID")(a)])return;g[b("getOrCreateDOMID")(a)]=!0;if(!e)return;if(!d){c&&c(a);return}b("Event").listen(a,"mouseover",function(a){a=b("Parent").byTag(a.getTarget(),"a");if(a){var c=a.getAttribute("href");j(c)&&(b("DataStore").set(a,"stashedHref",a.getAttribute("href")),a.removeAttribute("href"))}});b("Event").listen(a,"mouseout",function(a){a=b("Parent").byTag(a.getTarget(),"a");var c=a&&b("DataStore").remove(a,"stashedHref");j(c)&&a.setAttribute("href",c)});b("Event").listen(a,"mousedown",function(a){if(!a.isDefaultRequested())return!0;a=b("Parent").byTag(a.getTarget(),"a");var c=a&&b("DataStore").get(a,"stashedHref");j(c)&&a.setAttribute("href",c)})}function i(a,c){a=b("DOM").scry(a,"a");c&&(a=a.filter(function(a){return c(a.getAttribute("href"))}));a.forEach(function(a){a.removeAttribute("href"),a.tabIndex||a.setAttribute("tabindex",0)})}function j(a){return a&&a!=="#"}e.exports=a}),null);
__d("XUIButton.react",["cx","AbstractButton.react","React","joinClasses"],(function(a,b,c,d,e,f,g){__p&&__p();var h;c=b("React").PropTypes;var i="medium";h=babelHelpers.inherits(a,b("React").Component);h&&h.prototype;a.getButtonSize=function(a){"use strict";return a.size||i};a.prototype.render=function(){"use strict";var a=this.props,c=a.use,d=a.size,e=a.borderShade,f=a.suppressed;a=babelHelpers.objectWithoutProperties(a,["use","size","borderShade","suppressed"]);d="_4jy0"+(d==="small"?" _517i":"")+(d==="medium"?" _4jy3":"")+(d==="large"?" _4jy4":"")+(d==="xlarge"?" _4jy5":"")+(d==="xxlarge"?" _4jy6":"")+(c==="default"?" _517h":"")+(c==="confirm"?" _4jy1":"")+(c==="special"?" _4jy2":"")+(e==="light"?" _51sy":"")+(e==="dark"?" _9c6":"")+(f?" _59pe":"")+(c==="confirm"||c==="special"?" selected":"");return b("React").createElement(b("AbstractButton.react"),babelHelpers["extends"]({},a,{label:this.props.label,className:b("joinClasses")(this.props.className,d)}))};function a(){"use strict";h.apply(this,arguments)}a.defaultProps={use:"default",size:i,borderShade:"light",suppressed:!1};a.propTypes={use:c.oneOf(["default","special","confirm"]),size:c.oneOf(["small","medium","large","xlarge","xxlarge"]),borderShade:c.oneOf(["light","dark"]),suppressed:c.bool};e.exports=a}),null);
__d("XUIDialogButton.react",["cx","React","XUIButton.react","joinClasses"],(function(a,b,c,d,e,f,g){__p&&__p();var h;c=b("React").PropTypes;h=babelHelpers.inherits(a,b("React").Component);h&&h.prototype;a.prototype.render=function(){"use strict";var a=this.props.action,c=(a=="confirm"?"layerConfirm":"")+(a=="cancel"?" layerCancel":"")+(a=="button"?" layerButton":""),d=this.props.href;a=="cancel"?d="#":a=="button"&&(d=d||"#");return b("React").createElement(b("XUIButton.react"),babelHelpers["extends"]({},this.props,{className:b("joinClasses")(this.props.className,c),href:d,role:"button"}))};function a(){"use strict";h.apply(this,arguments)}a.propTypes={action:c.oneOf(["cancel","confirm","button"])};e.exports=a}),null);
__d("XUIDialogOkayButton.react",["cx","fbt","React","XUIDialogButton.react","joinClasses"],(function(a,b,c,d,e,f,g,h){__p&&__p();var i;c=b("React").PropTypes;i=babelHelpers.inherits(a,b("React").Component);i&&i.prototype;a.prototype.render=function(){"use strict";return b("React").createElement(b("XUIDialogButton.react"),babelHelpers["extends"]({},this.props,{className:b("joinClasses")(this.props.className,"_2z1w"),action:this.props.action,label:h._("OK")}))};function a(){"use strict";i.apply(this,arguments)}a.propTypes={action:c.oneOf(["confirm","cancel","button"]).isRequired};e.exports=a}),null);
__d("XUIDialogBody.react",["cx","React","joinClasses","XUIText.react"],(function(a,b,c,d,e,f,g){__p&&__p();var h;c=b("React").PropTypes;h=babelHelpers.inherits(a,b("React").Component);h&&h.prototype;a.prototype.render=function(){"use strict";var a="_4-i2"+(this.props.useCustomPadding?"":" _pig");return b("React").createElement(b("XUIText.react"),babelHelpers["extends"]({},this.props,{className:b("joinClasses")(this.props.className,a),display:"block",size:this.props.fontSize}),this.props.children)};function a(){"use strict";h.apply(this,arguments)}a.propTypes={fontSize:c.oneOf(["medium","inherit"]),useCustomPadding:c.bool};a.defaultProps={fontSize:"medium"};e.exports=a}),null);
__d("XUIOverlayFooter.react",["cx","React","joinClasses"],(function(a,b,c,d,e,f,g){__p&&__p();var h;h=babelHelpers.inherits(a,b("React").Component);h&&h.prototype;a.prototype.render=function(){"use strict";return b("React").createElement("div",babelHelpers["extends"]({},this.props,{className:b("joinClasses")(this.props.className,"_5lnf uiOverlayFooter")}),this.props.children)};function a(){"use strict";h.apply(this,arguments)}e.exports=a}),null);
__d("XUIDialogFooter.react",["cx","LeftRight.react","React","XUIOverlayFooter.react","XUIText.react","joinClasses"],(function(a,b,c,d,e,f,g){__p&&__p();var h;c=b("React").PropTypes;h=babelHelpers.inherits(a,b("React").Component);h&&h.prototype;a.prototype.render=function(){"use strict";var a="_5a8u"+(this.props.fullBleedBorder?" _27qq":""),c=this.props,d=c.children,e=c.leftContent;c=babelHelpers.objectWithoutProperties(c,["children","leftContent"]);return b("React").createElement(b("XUIOverlayFooter.react"),babelHelpers["extends"]({},c,{className:b("joinClasses")(this.props.className,a)}),b("React").createElement(b("XUIText.react"),{display:"block",fontSize:this.props.fontSize},b("React").createElement(b("LeftRight.react"),null,b("React").createElement("div",null,e),b("React").createElement("div",null,d))))};function a(){"use strict";h.apply(this,arguments)}a.propTypes={fontSize:c.oneOf(["medium","inherit"]),fullBleedBorder:c.bool,leftContent:c.object};a.defaultProps={fontSize:"medium"};e.exports=a}),null);
__d("XUIDialogTitle.react",["cx","fbt","LeftRight.react","React","XUICloseButton.react","joinClasses"],(function(a,b,c,d,e,f,g,h){__p&&__p();var i;c=b("React").PropTypes;i=babelHelpers.inherits(a,b("React").Component);i&&i.prototype;a.prototype.render=function(){"use strict";var a=null,c=this.props,d=c.closeButtonText,e=c.showCloseButton;c=babelHelpers.objectWithoutProperties(c,["closeButtonText","showCloseButton"]);e&&(a=b("React").createElement(b("XUICloseButton.react"),{label:d,className:"layerCancel _51-t"}));d=b("React").Children.toArray(this.props.children);return b("React").createElement("div",babelHelpers["extends"]({},c,{className:b("joinClasses")(this.props.className,"_4-i0"+(e?" _2gb3":""))}),b("React").createElement(b("LeftRight.react"),null,b("React").createElement("h3",{className:"_52c9","data-hover":"tooltip","data-tooltip-display":"overflow"},d[0]),b("React").createElement("div",{className:"_51-u"},d.slice(1),a)))};function a(){"use strict";i.apply(this,arguments)}a.propTypes={closeButtonText:c.oneOfType([c.node,c.string]),showCloseButton:c.bool};a.defaultProps={closeButtonText:h._("Close"),showCloseButton:!0};e.exports=a}),null);
__d("FlipDirection",["DOM","Input","Style"],(function(a,b,c,d,e,f){__p&&__p();a={setDirection:function(a){__p&&__p();var c=arguments.length<=1||arguments[1]===undefined?5:arguments[1],d=b("DOM").isNodeOfType(a,"input")&&a.type=="text",e=b("DOM").isNodeOfType(a,"textarea");if(!(d||e)||a.getAttribute("data-prevent-auto-flip"))return;var f=b("Input").getValue(a),g=a.style&&a.style.direction;if(!g){var h=0,i=!0;for(var j=0;j<f.length;j++){var k=f.charCodeAt(j);if(k>=48){i&&(i=!1,h++);if(k>=1470&&k<=1920){b("Style").set(a,"direction","rtl");a.setAttribute("dir","rtl");return}if(h==c){b("Style").set(a,"direction","ltr");a.setAttribute("dir","ltr");return}}else i=!0}}else f.length===0&&(b("Style").set(a,"direction",""),a.removeAttribute("dir"))}};e.exports=a}),null);
__d("FlipDirectionOnKeypress",["Event","FlipDirection"],(function(a,b,c,d,e,f){a=function(event){var a=event.getTarget();b("FlipDirection").setDirection(a)};b("Event").listen(document.documentElement,{keyup:a,input:a})}),null);
__d("XBasicFBNuxViewController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/ajax/megaphone/view_fbnux/",{nux_id:{type:"Int",required:!0}})}),null);
__d("BasicFBNux",["AsyncRequest","XBasicFBNuxDismissController","XBasicFBNuxViewController"],(function(a,b,c,d,e,f){var g={subscribeHide:function(a,b){a.subscribe("hide",g.onDismiss.bind(this,b))},onView:function(a){a=b("XBasicFBNuxViewController").getURIBuilder().setInt("nux_id",a).getURI();new(b("AsyncRequest"))().setURI(a).send()},onDismiss:function(a){a=b("XBasicFBNuxDismissController").getURIBuilder().setInt("nux_id",a).getURI();new(b("AsyncRequest"))().setURI(a).send()}};e.exports=g}),null);
__d("DOMTraverser",["DOM"],(function(a,b,c,d,e,f){__p&&__p();var g={previousNode:function(a){if(a.previousElementSibling){var b=a.previousElementSibling;while(b.lastElementChild!==null)b=b.lastElementChild;return b}return a.parentElement},nextNode:function(a){__p&&__p();if(a.firstElementChild)return a.firstElementChild;if(a.nextElementSibling)return a.nextElementSibling;a=a.parentElement;while(a!=null){if(a.nextElementSibling)return a.nextElementSibling;a=a.parentElement}return null},previousFilteredNode:function(a,b,c){__p&&__p();if(b===a)return null;b=g.previousNode(b);while(b!=null){if(b instanceof HTMLElement&&c(b))return b;if(b===a)return null;b=g.previousNode(b)}return null},nextFilteredNode:function(a,c,d){c=g.nextNode(c);while(c!=null){if(a&&!b("DOM").contains(a,c))return null;if(c instanceof HTMLElement&&d(c))return c;c=g.nextNode(c)}return null}};e.exports=g}),null);
__d("DialogHideOnSuccess",["csx","cx","CSS"],(function(a,b,c,d,e,f,g,h){__p&&__p();function a(a){"use strict";this._layer=a}a.prototype.enable=function(){"use strict";this._subscription=this._layer.subscribe("success",this._handle.bind(this))};a.prototype.disable=function(){"use strict";this._subscription.unsubscribe(),this._subscription=null};a.prototype._handle=function(a,event){"use strict";b("CSS").matchesSelector(event.getTarget(),"._s")&&this._layer.hide()};Object.assign(a.prototype,{_subscription:null});e.exports=a}),null);
__d("isAsyncScrollQuery",["UserAgent"],(function(a,b,c,d,e,f){var g=null;function a(){g===null&&(g=b("UserAgent").isPlatform("Mac OS X >= 10.8")&&b("UserAgent").isBrowser("Safari >= 6.0"));return g}e.exports=a}),null);
__d("ScrollAwareDOM",["ArbiterMixin","CSS","DOM","DOMDimensions","HTML","Vector","ViewportBounds","getDocumentScrollElement","getElementPosition","getViewportDimensions","isAsyncScrollQuery","isNode"],(function(a,b,c,d,e,f){__p&&__p();function a(a,b){return function(){var c=arguments;j.monitor(arguments[a],function(){b.apply(null,c)})}}function g(a){a instanceof Array||(a=[a]);for(var c=0;c<a.length;c++){var d=b("HTML").replaceJSONWrapper(a[c]);if(d instanceof b("HTML"))return d.getRootNode();else if(b("isNode")(d))return d}return null}function h(a){return b("getElementPosition")(a).y>b("ViewportBounds").getTop()}function i(a){a=b("getElementPosition")(a).y+b("DOMDimensions").getElementDimensions(a).height;var c=b("getViewportDimensions")().height-b("ViewportBounds").getBottom();return a>=c}var j=babelHelpers["extends"]({monitor:function(a,c){__p&&__p();if(b("isAsyncScrollQuery")())return c();a=g(a);if(a){var d=!!a.offsetParent;if(d&&(h(a)||i(a)))return c();var e=b("Vector").getDocumentDimensions(),f=c();if(d||a.offsetParent&&!h(a)){d=b("Vector").getDocumentDimensions().sub(e);e={delta:d,target:a};j.inform("scroll",e)!==!1&&d.scrollElementBy(b("getDocumentScrollElement")())}return f}else return c()},replace:function(a,c){var d=g(c);(!d||b("CSS").hasClass(d,"hidden_elem"))&&(d=a);return j.monitor(d,function(){b("DOM").replace(a,c)})},prependContent:a(1,b("DOM").prependContent),insertAfter:a(1,b("DOM").insertAfter),insertBefore:a(1,b("DOM").insertBefore),setContent:a(0,b("DOM").setContent),appendContent:a(1,b("DOM").appendContent),remove:a(0,b("DOM").remove),empty:a(0,b("DOM").empty)},b("ArbiterMixin"));e.exports=j}),null);
__d("debounceAcrossTransitions",["debounce"],(function(a,b,c,d,e,f){function a(a,c,d){return b("debounce")(a,c,d,!0)}e.exports=a}),18);
__d("TabIsolation",["Event","Focus","Keys","TabbableElements","containsNode"],(function(a,b,c,d,e,f){__p&&__p();var g=[],h=0;function a(a){"use strict";this.$3=a,this.$1=null,this.$2=h++}a.prototype.enable=function(){"use strict";g.unshift(this.$2),this.$1=b("Event").listen(window,"keydown",function(a){g[0]===this.$2&&this.$4(a)}.bind(this),b("Event").Priority.URGENT)};a.prototype.disable=function(){"use strict";if(this.$1){var a=g.indexOf(this.$2);a>-1&&g.splice(a,1);this.$1.remove();this.$1=null}};a.prototype.$4=function(a){"use strict";__p&&__p();if(b("Event").getKeyCode(a)!==b("Keys").TAB)return;var c=a.getTarget();if(!c)return;var d=b("TabbableElements").find(this.$3),e=d[0];d=d[d.length-1];var f=a.getModifiers();f=f.shift;f&&c===e?(a.preventDefault(),b("Focus").set(d)):(!f&&c===d||!b("containsNode")(this.$3,c))&&(a.preventDefault(),b("Focus").set(e))};e.exports=a}),18);
__d("LayerAutoFocusReact",["focusWithinLayer"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(a){this._layer=a,this._subscription=null}a.prototype.enable=function(){this._layer.containsReactComponent&&(this._subscription=this._layer.subscribe("reactshow",this._focus.bind(this)))};a.prototype.disable=function(){this._subscription&&(this._subscription.unsubscribe(),this._subscription=null)};a.prototype._focus=function(){var a=this._layer.getRoot();a&&b("focusWithinLayer")(a)};e.exports=a}),null);
__d("LayerDestroyOnHide",[],(function(a,b,c,d,e,f){__p&&__p();function a(a){"use strict";this._layer=a}a.prototype.enable=function(){"use strict";var a=this._layer.destroy.bind(this._layer);this._subscription=this._layer.subscribe("hide",function(){setTimeout(a,0)})};a.prototype.disable=function(){"use strict";this._subscription&&(this._subscription.unsubscribe(),this._subscription=null)};Object.assign(a.prototype,{_subscription:null});e.exports=a}),null);
__d("LayerFadeOnHide",["invariant","CSSFade","Layer","SubscriptionsHandler","UserAgent_DEPRECATED","clearTimeout","emptyFunction","setTimeoutAcrossTransitions"],(function(a,b,c,d,e,f,g){__p&&__p();function h(a){"use strict";this._layer=a,this._subscriptionsHandler=new(b("SubscriptionsHandler"))()}h.prototype.enable=function(){"use strict";if(b("UserAgent_DEPRECATED").ie()<9)return;this._subscription=this._layer.subscribe("starthide",this._handleStartHide.bind(this))};h.prototype.disable=function(){"use strict";this._subscription&&(this._subscription.unsubscribe(),this._subscription=null),this._subscriptionsHandler.release()};h.prototype._getDuration=function(){"use strict";return 150};h.prototype._handleStartHide=function(){"use strict";__p&&__p();var a=!0,c=b("Layer").subscribe("show",function(){c.unsubscribe(),a=!1}),d=b("setTimeoutAcrossTransitions")(function(){c.unsubscribe();c=null;var b=function(){this._layer.finishHide()}.bind(this);a?this._animate(b):b()}.bind(this),0);this._subscriptionsHandler.addSubscriptions({remove:function(){b("clearTimeout")(d)}});return!1};h.prototype._animate=function(a){"use strict";var c=this._layer.getRoot();c!=null||g(0);b("CSSFade").hide(c,{callback:function(){a()},duration:this._getDuration()})};h.forDuration=function(a){var c;c=babelHelpers.inherits(d,h);c&&c.prototype;function d(){c.apply(this,arguments)}d.prototype._getDuration=b("emptyFunction").thatReturns(a);return d};Object.assign(h.prototype,{_subscription:null});e.exports=h}),null);
__d("LayerRemoveOnHide",["DOM"],(function(a,b,c,d,e,f){__p&&__p();function a(a){"use strict";this._layer=a}a.prototype.enable=function(){"use strict";this._subscription=this._layer.subscribe("hide",b("DOM").remove.bind(null,this._layer.getRoot()))};a.prototype.disable=function(){"use strict";this._subscription&&(this._subscription.unsubscribe(),this._subscription=null)};Object.assign(a.prototype,{_subscription:null});e.exports=a}),null);
__d("LayerTabIsolation",["TabIsolation"],(function(a,b,c,d,e,f){__p&&__p();function a(a){"use strict";this._layer=a,this._tabIsolation=null}a.prototype.enable=function(){"use strict";this._tabIsolation=new(b("TabIsolation"))(this._layer.getRoot()),this._subscriptions=[this._layer.subscribe("show",this._tabIsolation.enable.bind(this._tabIsolation)),this._layer.subscribe("hide",this._tabIsolation.disable.bind(this._tabIsolation))]};a.prototype.disable=function(){"use strict";while(this._subscriptions.length)this._subscriptions.pop().unsubscribe();this._tabIsolation.disable();this._tabIsolation=null};Object.assign(a.prototype,{_subscriptions:[]});e.exports=a}),null);
__d("LayerTogglerContext",["Toggler"],(function(a,b,c,d,e,f){__p&&__p();function a(a){"use strict";this._layer=a}a.prototype.enable=function(){"use strict";this._root=this._layer.getRoot(),b("Toggler").createInstance(this._root).setSticky(!1)};a.prototype.disable=function(){"use strict";b("Toggler").destroyInstance(this._root),this._root=null};e.exports=a}),null);
__d("ModalLayer",["csx","cx","Arbiter","ArbiterMixin","CSS","DataStore","DOM","DOMDimensions","DOMQuery","Event","Scroll","ScrollAwareDOM","Style","UserAgent","Vector","debounceAcrossTransitions","getDocumentScrollElement","isAsyncScrollQuery","removeFromArray","setTimeoutAcrossTransitions","ge"],(function(a,b,c,d,e,f,g,h){__p&&__p();var i=[],j=null,k=null,l=null;function m(){l||(l=b("DOMQuery").scry(document.body,"._li")[0]||b("ge")("FB4BResponsiveMain"));return l}function n(a){__p&&__p();var c={position:b("Vector").getScrollPosition(),listener:undefined},d=a.offsetTop-c.position.y;b("CSS").addClass(a,"_31e");b("Style").set(a,"top",d+"px");b("Arbiter").inform("reflow");c.listener=b("ScrollAwareDOM").subscribe("scroll",function(d,e){if(b("DOMQuery").contains(a,e.target)){d=a.offsetTop-e.delta.y;b("Style").set(a,"top",d+"px");c.position=c.position.add(e.delta);return!1}return!0});b("DataStore").set(a,"ModalLayerData",c)}function o(a,c){__p&&__p();var d=b("DataStore").get(a,"ModalLayerData");if(d){var e=function(){__p&&__p();b("CSS").removeClass(a,"_31e");b("Style").set(a,"top","");if(c){var e=b("getDocumentScrollElement")();b("Scroll").setTop(e,d.position.y);b("Scroll").getTop(e)!==d.position.y&&(b("Scroll").setTop(e,d.position.y+1),b("Scroll").setTop(e,d.position.y))}b("Arbiter").inform("reflow");d.listener.unsubscribe();d.listener=null;b("DataStore").remove(a,"ModalLayerData")};if(c&&b("isAsyncScrollQuery")()){var f=b("DOM").create("div",{className:"_42w"});b("Style").set(f,"height",a.offsetHeight+"px");b("DOM").appendContent(document.body,f);var g=b("getDocumentScrollElement")();b("Scroll").setTop(g,d.position.y);c=!1;setTimeout(function(){e(),b("DOM").remove(f)},0)}else e()}}function p(){var a=m();a!=null&&!b("CSS").matchesSelector(a,"._31e")&&n(a)}function q(){i.length||o(m(),!0)}function r(){__p&&__p();var a=i.length;while(a--){var c=i[a],d=c.getLayerRoot();if(d){s(d,0);c=c.getLayerContentRoot();if(c){c=c.offsetWidth+b("DOMDimensions").measureElementBox(c,"width",0,0,1);s(d,c)}}}}function s(a,c){b("Style").set(a,"min-width",c+(c?"px":""))}function t(a){"use strict";this._layer=a,this._enabled=!1}t.prototype.enable=function(){"use strict";if(!m())return;this._subscription=this._layer.subscribe(["show","hide"],function(a){a=="show"?this._addModal():this._removeModal()}.bind(this));this._layer.isShown()&&this._addModal();this._enabled=!0};t.prototype.disable=function(){"use strict";if(!m())return;this._subscription&&this._subscription.unsubscribe();this._layer.isShown()&&this._removeModal();this._enabled=!1};t.prototype._addModal=function(){"use strict";__p&&__p();var a=this.getLayerRoot();b("CSS").addClass(a,"_3qw");this._wash=b("DOM").create("div",{className:"_3ixn"});b("DOM").prependContent(a,this._wash);a=i[i.length-1];a?n(a.getLayerRoot()):p();a=b("getDocumentScrollElement")();b("Scroll").setTop(a,0);if(!i.length){a=b("debounceAcrossTransitions")(r,100);j=b("Event").listen(window,"resize",a);k=b("Arbiter").subscribe("reflow",a)}i.push(this);t.inform("show",this);setTimeout(r,0)};t.prototype._removeModal=function(){"use strict";__p&&__p();var a=this.getLayerRoot();b("CSS").removeClass(a,"_3qw");b("DOM").remove(this._wash);this._wash=null;s(a,0);var c=this===i[i.length-1];b("removeFromArray")(i,this);i.length||(j&&j.remove(),j=null,k&&k.unsubscribe(),k=null);void 0;var d=void 0;b("UserAgent").isBrowser("Safari")&&(a=b("Event").listen(document.documentElement,"mousewheel",b("Event").prevent),d=a.remove.bind(a));b("setTimeoutAcrossTransitions")(function(){var a=i[i.length-1];a?(o(a.getLayerRoot(),c),t.inform("show",a)):(q(),t.inform("hide",this));i.length&&setTimeout(r,0);b("UserAgent").isBrowser("Safari")&&setTimeout(function(){d()},0)}.bind(this),200)};t.prototype.getLayerRoot=function(){"use strict";return this._enabled?this._layer.getRoot():null};t.prototype.getLayerContentRoot=function(){"use strict";return this._enabled?this._layer.getContentRoot():null};t.getTopmostModalLayer=function(){"use strict";return i[i.length-1]};Object.assign(t,b("ArbiterMixin"));e.exports=t}),null);
__d("ContextualDialogXUITheme",["cx"],(function(a,b,c,d,e,f,g){a={wrapperClassName:"_53ii",arrowDimensions:{offset:12,length:16}};e.exports=a}),null);
__d("DialogPosition",["Vector"],(function(a,b,c,d,e,f){__p&&__p();var g=40,h;a={calculateTopMargin:function(a,c){var d=arguments.length<=2||arguments[2]===undefined?null:arguments[2],e=arguments.length<=3||arguments[3]===undefined?!1:arguments[3],f=b("Vector").getViewportDimensions(),i=!1;e&&d&&(i=d+c>f.y);if(d&&!i)return d;if(h)return h;var j=Math.floor((f.x+a)*(f.y-c)/(4*f.x));return Math.max(j,g)},setFixedTopMargin:function(a){h=a}};e.exports=a}),null);
__d("DialogX",["cx","fbt","Arbiter","CSS","DialogPosition","DOMQuery","Event","JSXDOM","Layer","LayerAutoFocus","LayerButtons","LayerFormHooks","LayerRefocusOnHide","LayerTabIsolation","LayerTogglerContext","ModalLayer","Style","Vector","debounce","getOrCreateDOMID","goURI","shield"],(function(a,b,c,d,e,f,g,h){__p&&__p();var i,j;i=babelHelpers.inherits(a,b("Layer"));j=i&&i.prototype;a.prototype._configure=function(a,c){"use strict";__p&&__p();j._configure.call(this,a,c);b("CSS").addClass(this.getRoot(),"_4-hy");if(a.autohide)var d=this.subscribe("show",function(){d.unsubscribe(),setTimeout(b("shield")(this.hide,this),a.autohide)}.bind(this));if(a.redirectURI)var e=this.subscribe("hide",function(){e.unsubscribe(),b("goURI")(a.redirectURI)});this._fixedTopPosition=a.fixedTopPosition;this._ignoreFixedTopInShortViewport=a.ignoreFixedTopInShortViewport};a.prototype._getDefaultBehaviors=function(){"use strict";return j._getDefaultBehaviors.call(this).concat([k,b("ModalLayer"),b("LayerAutoFocus"),b("LayerButtons"),b("LayerFormHooks"),b("LayerTabIsolation"),b("LayerTogglerContext"),b("LayerRefocusOnHide")])};a.prototype._buildWrapper=function(a,c){"use strict";__p&&__p();var d=a.xui?"_4t2a":"_t",e=a.xui?"_59s7":"_1yv";this._innerContent=b("JSXDOM").div(null,c);c={className:e,role:"dialog"};if(a.labelledBy)c["aria-labelledby"]=a.labelledBy;else if(a.label)c["aria-label"]=a.label;else if(a.titleID)c["aria-labelledby"]=a.titleID;else if(a.titleClass){e=b("DOMQuery").scry(this._innerContent,a.titleClass);if(e.length){e=b("getOrCreateDOMID")(e[0]);c["aria-labelledby"]=e}else c["aria-label"]=this._getDefaultLabel()}else c["aria-label"]=this._getDefaultLabel();e={className:d};a["data-testid"]&&(e["data-testid"]=a["data-testid"]);this._wrapper=b("JSXDOM").div(c,b("JSXDOM").div(e,this._innerContent));this.setWidth(a.width);return b("JSXDOM").div({className:"_10"},this._wrapper)};a.prototype._getDefaultLabel=function(){"use strict";return h._("Dialog content")};a.prototype.getContentRoot=function(){"use strict";return this._wrapper};a.prototype.getInnerContent=function(){"use strict";return this._innerContent};a.prototype.updatePosition=function(){"use strict";var a=b("Vector").getElementDimensions(this._wrapper);a=b("DialogPosition").calculateTopMargin(a.x,a.y,this._fixedTopPosition,this._ignoreFixedTopInShortViewport);b("Style").set(this._wrapper,"margin-top",a+"px");this.inform("update_position",{type:"DialogX",top:a})};a.prototype.setWidth=function(a){"use strict";a=Math.floor(a);if(a===this._width)return;this._width=a;b("Style").set(this._wrapper,"width",a+"px")};a.prototype.getWidth=function(){"use strict";return this._width};a.prototype.getFixedTopPosition=function(){"use strict";return this._fixedTopPosition};a.prototype.shouldIgnoreFixedTopInShortViewport=function(){"use strict";return this._ignoreFixedTopInShortViewport};function a(){"use strict";i.apply(this,arguments)}function k(a){"use strict";this._layer=a}k.prototype.enable=function(){"use strict";this._subscription=this._layer.subscribe(["show","hide"],function(a){a==="show"?(this._attach(),b("Arbiter").inform("layer_shown",{type:"DialogX"})):(this._detach(),b("Arbiter").inform("layer_hidden",{type:"DialogX"}))}.bind(this))};k.prototype.disable=function(){"use strict";this._subscription.unsubscribe(),this._subscription=null,this._resize&&this._detach()};k.prototype._attach=function(){"use strict";this._layer.updatePosition(),this._resize=b("Event").listen(window,"resize",b("debounce")(this._layer.updatePosition.bind(this._layer)))};k.prototype._detach=function(){"use strict";this._resize.remove(),this._resize=null};Object.assign(k.prototype,{_subscription:null,_resize:null});e.exports=a}),null);