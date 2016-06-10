/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	__webpack_require__(5);
	__webpack_require__(8);
	$ = __webpack_require__(10);
	Vue = __webpack_require__(11);
	__webpack_require__(13);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(2);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./animation.scss", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./animation.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, "@charset \"UTF-8\";\n/*アニメーション設定*/\n/*ここからアニメーションコード*/\n@-webkit-keyframes LoadFinishAnimation1 {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n\n@-moz-keyframes LoadFinishAnimation1 {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n\n@keyframes LoadFinishAnimation1 {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n\n@-webkit-keyframes LoadFinishAnimation2 {\n  0% {\n    -webkit-transform: scale(0, 0);\n    -moz-transform: scale(0, 0);\n    -ms-transform: scale(0, 0);\n    -o-transform: scale(0, 0);\n    transform: scale(0, 0); }\n  100% {\n    -webkit-transform: scale(1, 1);\n    -moz-transform: scale(1, 1);\n    -ms-transform: scale(1, 1);\n    -o-transform: scale(1, 1);\n    transform: scale(1, 1); } }\n\n@-moz-keyframes LoadFinishAnimation2 {\n  0% {\n    -webkit-transform: scale(0, 0);\n    -moz-transform: scale(0, 0);\n    -ms-transform: scale(0, 0);\n    -o-transform: scale(0, 0);\n    transform: scale(0, 0); }\n  100% {\n    -webkit-transform: scale(1, 1);\n    -moz-transform: scale(1, 1);\n    -ms-transform: scale(1, 1);\n    -o-transform: scale(1, 1);\n    transform: scale(1, 1); } }\n\n@keyframes LoadFinishAnimation2 {\n  0% {\n    -webkit-transform: scale(0, 0);\n    -moz-transform: scale(0, 0);\n    -ms-transform: scale(0, 0);\n    -o-transform: scale(0, 0);\n    transform: scale(0, 0); }\n  100% {\n    -webkit-transform: scale(1, 1);\n    -moz-transform: scale(1, 1);\n    -ms-transform: scale(1, 1);\n    -o-transform: scale(1, 1);\n    transform: scale(1, 1); } }\n\n@-webkit-keyframes Content1Arrow {\n  0% {\n    bottom: 120px; }\n  100% {\n    bottom: 100px; } }\n\n@-moz-keyframes Content1Arrow {\n  0% {\n    bottom: 120px; }\n  100% {\n    bottom: 100px; } }\n\n@keyframes Content1Arrow {\n  0% {\n    bottom: 120px; }\n  100% {\n    bottom: 100px; } }\n\n#Content1HeaderBottomArrow {\n  -webkit-animation: Content1Arrow 0.8s linear 0s infinite alternate;\n  -moz-animation: Content1Arrow 0.8s linear 0s infinite alternate;\n  animation: Content1Arrow 0.8s linear 0s infinite alternate;\n  -webkit-animation-fill-mode: both;\n  -moz-animation-fill-mode: both;\n  animation-fill-mode: both; }\n", ""]);

	// exports


/***/ },
/* 3 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(6);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./style.scss", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./style.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports
	exports.push([module.id, "@import url(http://fonts.googleapis.com/earlyaccess/notosansjapanese.css);", ""]);

	// module
	exports.push([module.id, "@font-face {\n  font-family: 'Material Icons';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://example.com/MaterialIcons-Regular.eot);\n  /* For IE6-8 */\n  src: local(\"Material Icons\"), local(\"MaterialIcons-Regular\"), url(https://example.com/MaterialIcons-Regular.woff2) format(\"woff2\"), url(https://example.com/MaterialIcons-Regular.woff) format(\"woff\"), url(https://example.com/MaterialIcons-Regular.ttf) format(\"truetype\"); }\n\n.material-icons {\n  font-family: 'Material Icons';\n  font-weight: normal;\n  font-style: normal;\n  font-size: 140px;\n  /* Preferred icon size */\n  display: inline-block;\n  line-height: 1;\n  text-transform: none;\n  letter-spacing: normal;\n  word-wrap: normal;\n  white-space: nowrap;\n  direction: ltr;\n  /* Support for all WebKit browsers. */\n  -webkit-font-smoothing: antialiased;\n  /* Support for Safari and Chrome. */\n  text-rendering: optimizeLegibility;\n  /* Support for Firefox. */\n  -moz-osx-font-smoothing: grayscale;\n  /* Support for IE. */\n  font-feature-settings: 'liga';\n  color: #63c5ce; }\n\nbody, html {\n  width: 100%;\n  height: 100%;\n  margin: 0;\n  background: #000;\n  letter-spacing: 2px;\n  font-family: 'Noto Sans Japanese', sans-serif;\n  font-weight: 100;\n  color: #FFF;\n  -webkit-text-size-adjust: 100%;\n  min-width: 1024px;\n  -ms-overflow-x: hidden;\n  overflow-x: hidden; }\n\nbutton {\n  background: none;\n  border: none;\n  letter-spacing: 2px;\n  font-family: 'Noto Sans Japanese', sans-serif;\n  font-weight: 100;\n  outline: none; }\n\n.Contents {\n  width: 100%;\n  height: 100%;\n  position: relative; }\n\n.ContentsHeaderTopBorderCenter {\n  width: 150px;\n  height: 10px;\n  margin-bottom: 100px;\n  margin-left: calc(50% - 75px);\n  position: relative;\n  top: 80px; }\n\n.ContentsHeaderTopBorderLeft {\n  width: 100px;\n  height: 10px;\n  margin-bottom: 100px;\n  margin-left: 10%;\n  position: relative;\n  top: 80px; }\n\n.ContentsHeaderCenter {\n  width: 100%;\n  font-size: 60px;\n  text-align: center;\n  letter-spacing: 10px; }\n\n.ContentsHeaderLeft {\n  width: 80%;\n  margin-left: 10%;\n  font-size: 45px;\n  letter-spacing: 10px; }\n\n.ContentsTextCenter {\n  width: 80%;\n  margin-top: 100px;\n  margin-left: 10%;\n  text-align: center;\n  font-size: 35px;\n  line-height: 3; }\n\n.ContentsTextLeft {\n  width: 80%;\n  margin-top: 100px;\n  margin-left: 10%;\n  font-size: 35px;\n  line-height: 3; }\n\n#BackImg {\n  height: 100%;\n  position: fixed;\n  top: 0;\n  left: -400px;\n  z-index: 3; }\n\n/***Content1***/\n#Content1Logo {\n  width: 80%;\n  position: absolute;\n  bottom: 65%;\n  left: 10%; }\n\n#Content1HeaderSub {\n  width: 80%;\n  position: absolute;\n  top: 37%;\n  left: 10%;\n  font-size: 35px;\n  text-align: center; }\n\n#Content1Btn {\n  width: 500px;\n  height: 100px;\n  position: absolute;\n  top: 60%;\n  left: calc(50% - 250px);\n  font-size: 28px;\n  color: #FFF; }\n\n/***Content1***/\n/***Content2***/\n#Content2 {\n  height: auto; }\n\n/***Content2***/\n/***Content2***/\n#Content3 {\n  background: url(" + __webpack_require__(7) + ");\n  -webkit-background-size: cover;\n  -o-background-size: cover;\n  background-size: cover; }\n\n#Content3Shadow {\n  width: 100%;\n  height: auto;\n  background: rgba(0, 0, 0, 0.65); }\n\n/***Content2***/\n/***Content2***/\n#Content4 {\n  height: auto;\n  background: #FFF; }\n\n.Content4ItemBox {\n  width: 46%;\n  margin-left: calc((100% - 92%) / 3);\n  margin-bottom: 100px;\n  text-align: center;\n  float: left;\n  color: #000;\n  font-size: 35px; }\n\n.Content4ItemHeader {\n  font-size: 40px;\n  font-weight: 200; }\n\n/***Content2***/\n/***Content2***/\n#Content5 {\n  height: auto;\n  background: #000; }\n\n.Content4ItemBox {\n  width: 46%;\n  margin-left: calc((100% - 92%) / 3);\n  margin-bottom: 100px;\n  text-align: center;\n  float: left;\n  color: #000;\n  font-size: 35px; }\n\n.Content4ItemHeader {\n  font-size: 40px;\n  font-weight: 200; }\n\n/***Content2***/\n/***Content2***/\n#Content6 {\n  height: auto;\n  background: #fff;\n  color: #000;\n  font-weight: 200; }\n\n.Content6Q {\n  color: #63c5ce;\n  font-size: 50px;\n  font-weight: 100; }\n\n.Content6A {\n  color: #f7b5c4;\n  font-size: 50px;\n  font-weight: 100; }\n\n/***Content2***/\n/***Content2***/\n#Content7 {\n  height: auto; }\n\n.Content7Img {\n  width: 45%;\n  margin-left: calc((100% - 90%) / 3); }\n\n/***Content2***/\n/***Content2***/\n#Content8 {\n  height: auto;\n  background: #FFF; }\n\n.Content8Inputs {\n  width: calc(100% - 20px);\n  height: 100px;\n  background: rgba(99, 197, 206, 0.4);\n  color: #000;\n  margin: 0;\n  margin-top: 50px;\n  margin-bottom: 50px;\n  padding-left: 10px;\n  padding-right: 10px;\n  border: none;\n  font-size: 32px;\n  letter-spacing: 3px; }\n\n#Content8TextArea {\n  width: calc(100% - 20px);\n  height: 500px;\n  background: rgba(99, 197, 206, 0.4);\n  color: #000;\n  margin: 0;\n  margin-top: 50px;\n  padding-left: 10px;\n  padding-right: 10px;\n  border: none;\n  font-size: 32px; }\n\n#Content8SendBtn {\n  width: 100%;\n  height: 100px;\n  margin-top: 50px;\n  margin-bottom: 50px;\n  font-size: 30px;\n  letter-spacing: 3px; }\n\n/***Content2***/\n", ""]);

	// exports


/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = "data:image/jpg;base64,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"

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(9);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./grade.scss", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./grade.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, "/*\n#Sample{\n  @include gradient(#ff00ff, #ff00cc, vertical);\n}\n*/\n.ContentsHeaderTopBorderCenter {\n  background: #f7b5c4;\n  background: -moz-linear-gradient(left, #f7b5c4 0%, #63c5ce 100%);\n  background: -webkit-gradient(linear, left top, right top, color-stop(0%, #f7b5c4), color-stop(100%, #63c5ce));\n  background: -webkit-linear-gradient(left, #f7b5c4 0%, #63c5ce 100%);\n  background: -o-linear-gradient(left, #f7b5c4 0%, #63c5ce 100%);\n  background: -ms-linear-gradient(left, #f7b5c4 0%, #63c5ce 100%);\n  background: linear-gradient(to right, #f7b5c4 0%, #63c5ce 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='$start-color', endColorstr='$end-color',GradientType=1 ); }\n\n.ContentsHeaderTopBorderLeft {\n  background: #f7b5c4;\n  background: -moz-linear-gradient(left, #f7b5c4 0%, #63c5ce 100%);\n  background: -webkit-gradient(linear, left top, right top, color-stop(0%, #f7b5c4), color-stop(100%, #63c5ce));\n  background: -webkit-linear-gradient(left, #f7b5c4 0%, #63c5ce 100%);\n  background: -o-linear-gradient(left, #f7b5c4 0%, #63c5ce 100%);\n  background: -ms-linear-gradient(left, #f7b5c4 0%, #63c5ce 100%);\n  background: linear-gradient(to right, #f7b5c4 0%, #63c5ce 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='$start-color', endColorstr='$end-color',GradientType=1 ); }\n\n#Content1Btn {\n  background: #f7b5c4;\n  background: -moz-linear-gradient(left, #f7b5c4 0%, #63c5ce 100%);\n  background: -webkit-gradient(linear, left top, right top, color-stop(0%, #f7b5c4), color-stop(100%, #63c5ce));\n  background: -webkit-linear-gradient(left, #f7b5c4 0%, #63c5ce 100%);\n  background: -o-linear-gradient(left, #f7b5c4 0%, #63c5ce 100%);\n  background: -ms-linear-gradient(left, #f7b5c4 0%, #63c5ce 100%);\n  background: linear-gradient(to right, #f7b5c4 0%, #63c5ce 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='$start-color', endColorstr='$end-color',GradientType=1 ); }\n\n#Content8SendBtn {\n  background: #f7b5c4;\n  background: -moz-linear-gradient(left, #f7b5c4 0%, #63c5ce 100%);\n  background: -webkit-gradient(linear, left top, right top, color-stop(0%, #f7b5c4), color-stop(100%, #63c5ce));\n  background: -webkit-linear-gradient(left, #f7b5c4 0%, #63c5ce 100%);\n  background: -o-linear-gradient(left, #f7b5c4 0%, #63c5ce 100%);\n  background: -ms-linear-gradient(left, #f7b5c4 0%, #63c5ce 100%);\n  background: linear-gradient(to right, #f7b5c4 0%, #63c5ce 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='$start-color', endColorstr='$end-color',GradientType=1 ); }\n", ""]);

	// exports


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	 * jQuery JavaScript Library v2.2.3
	 * http://jquery.com/
	 *
	 * Includes Sizzle.js
	 * http://sizzlejs.com/
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license
	 * http://jquery.org/license
	 *
	 * Date: 2016-04-05T19:26Z
	 */

	(function( global, factory ) {

		if ( typeof module === "object" && typeof module.exports === "object" ) {
			// For CommonJS and CommonJS-like environments where a proper `window`
			// is present, execute the factory and get jQuery.
			// For environments that do not have a `window` with a `document`
			// (such as Node.js), expose a factory as module.exports.
			// This accentuates the need for the creation of a real `window`.
			// e.g. var jQuery = require("jquery")(window);
			// See ticket #14549 for more info.
			module.exports = global.document ?
				factory( global, true ) :
				function( w ) {
					if ( !w.document ) {
						throw new Error( "jQuery requires a window with a document" );
					}
					return factory( w );
				};
		} else {
			factory( global );
		}

	// Pass this if window is not defined yet
	}(typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

	// Support: Firefox 18+
	// Can't be in strict mode, several libs including ASP.NET trace
	// the stack via arguments.caller.callee and Firefox dies if
	// you try to trace through "use strict" call chains. (#13335)
	//"use strict";
	var arr = [];

	var document = window.document;

	var slice = arr.slice;

	var concat = arr.concat;

	var push = arr.push;

	var indexOf = arr.indexOf;

	var class2type = {};

	var toString = class2type.toString;

	var hasOwn = class2type.hasOwnProperty;

	var support = {};



	var
		version = "2.2.3",

		// Define a local copy of jQuery
		jQuery = function( selector, context ) {

			// The jQuery object is actually just the init constructor 'enhanced'
			// Need init if jQuery is called (just allow error to be thrown if not included)
			return new jQuery.fn.init( selector, context );
		},

		// Support: Android<4.1
		// Make sure we trim BOM and NBSP
		rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,

		// Matches dashed string for camelizing
		rmsPrefix = /^-ms-/,
		rdashAlpha = /-([\da-z])/gi,

		// Used by jQuery.camelCase as callback to replace()
		fcamelCase = function( all, letter ) {
			return letter.toUpperCase();
		};

	jQuery.fn = jQuery.prototype = {

		// The current version of jQuery being used
		jquery: version,

		constructor: jQuery,

		// Start with an empty selector
		selector: "",

		// The default length of a jQuery object is 0
		length: 0,

		toArray: function() {
			return slice.call( this );
		},

		// Get the Nth element in the matched element set OR
		// Get the whole matched element set as a clean array
		get: function( num ) {
			return num != null ?

				// Return just the one element from the set
				( num < 0 ? this[ num + this.length ] : this[ num ] ) :

				// Return all the elements in a clean array
				slice.call( this );
		},

		// Take an array of elements and push it onto the stack
		// (returning the new matched element set)
		pushStack: function( elems ) {

			// Build a new jQuery matched element set
			var ret = jQuery.merge( this.constructor(), elems );

			// Add the old object onto the stack (as a reference)
			ret.prevObject = this;
			ret.context = this.context;

			// Return the newly-formed element set
			return ret;
		},

		// Execute a callback for every element in the matched set.
		each: function( callback ) {
			return jQuery.each( this, callback );
		},

		map: function( callback ) {
			return this.pushStack( jQuery.map( this, function( elem, i ) {
				return callback.call( elem, i, elem );
			} ) );
		},

		slice: function() {
			return this.pushStack( slice.apply( this, arguments ) );
		},

		first: function() {
			return this.eq( 0 );
		},

		last: function() {
			return this.eq( -1 );
		},

		eq: function( i ) {
			var len = this.length,
				j = +i + ( i < 0 ? len : 0 );
			return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
		},

		end: function() {
			return this.prevObject || this.constructor();
		},

		// For internal use only.
		// Behaves like an Array's method, not like a jQuery method.
		push: push,
		sort: arr.sort,
		splice: arr.splice
	};

	jQuery.extend = jQuery.fn.extend = function() {
		var options, name, src, copy, copyIsArray, clone,
			target = arguments[ 0 ] || {},
			i = 1,
			length = arguments.length,
			deep = false;

		// Handle a deep copy situation
		if ( typeof target === "boolean" ) {
			deep = target;

			// Skip the boolean and the target
			target = arguments[ i ] || {};
			i++;
		}

		// Handle case when target is a string or something (possible in deep copy)
		if ( typeof target !== "object" && !jQuery.isFunction( target ) ) {
			target = {};
		}

		// Extend jQuery itself if only one argument is passed
		if ( i === length ) {
			target = this;
			i--;
		}

		for ( ; i < length; i++ ) {

			// Only deal with non-null/undefined values
			if ( ( options = arguments[ i ] ) != null ) {

				// Extend the base object
				for ( name in options ) {
					src = target[ name ];
					copy = options[ name ];

					// Prevent never-ending loop
					if ( target === copy ) {
						continue;
					}

					// Recurse if we're merging plain objects or arrays
					if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
						( copyIsArray = jQuery.isArray( copy ) ) ) ) {

						if ( copyIsArray ) {
							copyIsArray = false;
							clone = src && jQuery.isArray( src ) ? src : [];

						} else {
							clone = src && jQuery.isPlainObject( src ) ? src : {};
						}

						// Never move original objects, clone them
						target[ name ] = jQuery.extend( deep, clone, copy );

					// Don't bring in undefined values
					} else if ( copy !== undefined ) {
						target[ name ] = copy;
					}
				}
			}
		}

		// Return the modified object
		return target;
	};

	jQuery.extend( {

		// Unique for each copy of jQuery on the page
		expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

		// Assume jQuery is ready without the ready module
		isReady: true,

		error: function( msg ) {
			throw new Error( msg );
		},

		noop: function() {},

		isFunction: function( obj ) {
			return jQuery.type( obj ) === "function";
		},

		isArray: Array.isArray,

		isWindow: function( obj ) {
			return obj != null && obj === obj.window;
		},

		isNumeric: function( obj ) {

			// parseFloat NaNs numeric-cast false positives (null|true|false|"")
			// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
			// subtraction forces infinities to NaN
			// adding 1 corrects loss of precision from parseFloat (#15100)
			var realStringObj = obj && obj.toString();
			return !jQuery.isArray( obj ) && ( realStringObj - parseFloat( realStringObj ) + 1 ) >= 0;
		},

		isPlainObject: function( obj ) {
			var key;

			// Not plain objects:
			// - Any object or value whose internal [[Class]] property is not "[object Object]"
			// - DOM nodes
			// - window
			if ( jQuery.type( obj ) !== "object" || obj.nodeType || jQuery.isWindow( obj ) ) {
				return false;
			}

			// Not own constructor property must be Object
			if ( obj.constructor &&
					!hasOwn.call( obj, "constructor" ) &&
					!hasOwn.call( obj.constructor.prototype || {}, "isPrototypeOf" ) ) {
				return false;
			}

			// Own properties are enumerated firstly, so to speed up,
			// if last one is own, then all properties are own
			for ( key in obj ) {}

			return key === undefined || hasOwn.call( obj, key );
		},

		isEmptyObject: function( obj ) {
			var name;
			for ( name in obj ) {
				return false;
			}
			return true;
		},

		type: function( obj ) {
			if ( obj == null ) {
				return obj + "";
			}

			// Support: Android<4.0, iOS<6 (functionish RegExp)
			return typeof obj === "object" || typeof obj === "function" ?
				class2type[ toString.call( obj ) ] || "object" :
				typeof obj;
		},

		// Evaluates a script in a global context
		globalEval: function( code ) {
			var script,
				indirect = eval;

			code = jQuery.trim( code );

			if ( code ) {

				// If the code includes a valid, prologue position
				// strict mode pragma, execute code by injecting a
				// script tag into the document.
				if ( code.indexOf( "use strict" ) === 1 ) {
					script = document.createElement( "script" );
					script.text = code;
					document.head.appendChild( script ).parentNode.removeChild( script );
				} else {

					// Otherwise, avoid the DOM node creation, insertion
					// and removal by using an indirect global eval

					indirect( code );
				}
			}
		},

		// Convert dashed to camelCase; used by the css and data modules
		// Support: IE9-11+
		// Microsoft forgot to hump their vendor prefix (#9572)
		camelCase: function( string ) {
			return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
		},

		nodeName: function( elem, name ) {
			return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
		},

		each: function( obj, callback ) {
			var length, i = 0;

			if ( isArrayLike( obj ) ) {
				length = obj.length;
				for ( ; i < length; i++ ) {
					if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
						break;
					}
				}
			} else {
				for ( i in obj ) {
					if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
						break;
					}
				}
			}

			return obj;
		},

		// Support: Android<4.1
		trim: function( text ) {
			return text == null ?
				"" :
				( text + "" ).replace( rtrim, "" );
		},

		// results is for internal usage only
		makeArray: function( arr, results ) {
			var ret = results || [];

			if ( arr != null ) {
				if ( isArrayLike( Object( arr ) ) ) {
					jQuery.merge( ret,
						typeof arr === "string" ?
						[ arr ] : arr
					);
				} else {
					push.call( ret, arr );
				}
			}

			return ret;
		},

		inArray: function( elem, arr, i ) {
			return arr == null ? -1 : indexOf.call( arr, elem, i );
		},

		merge: function( first, second ) {
			var len = +second.length,
				j = 0,
				i = first.length;

			for ( ; j < len; j++ ) {
				first[ i++ ] = second[ j ];
			}

			first.length = i;

			return first;
		},

		grep: function( elems, callback, invert ) {
			var callbackInverse,
				matches = [],
				i = 0,
				length = elems.length,
				callbackExpect = !invert;

			// Go through the array, only saving the items
			// that pass the validator function
			for ( ; i < length; i++ ) {
				callbackInverse = !callback( elems[ i ], i );
				if ( callbackInverse !== callbackExpect ) {
					matches.push( elems[ i ] );
				}
			}

			return matches;
		},

		// arg is for internal usage only
		map: function( elems, callback, arg ) {
			var length, value,
				i = 0,
				ret = [];

			// Go through the array, translating each of the items to their new values
			if ( isArrayLike( elems ) ) {
				length = elems.length;
				for ( ; i < length; i++ ) {
					value = callback( elems[ i ], i, arg );

					if ( value != null ) {
						ret.push( value );
					}
				}

			// Go through every key on the object,
			} else {
				for ( i in elems ) {
					value = callback( elems[ i ], i, arg );

					if ( value != null ) {
						ret.push( value );
					}
				}
			}

			// Flatten any nested arrays
			return concat.apply( [], ret );
		},

		// A global GUID counter for objects
		guid: 1,

		// Bind a function to a context, optionally partially applying any
		// arguments.
		proxy: function( fn, context ) {
			var tmp, args, proxy;

			if ( typeof context === "string" ) {
				tmp = fn[ context ];
				context = fn;
				fn = tmp;
			}

			// Quick check to determine if target is callable, in the spec
			// this throws a TypeError, but we will just return undefined.
			if ( !jQuery.isFunction( fn ) ) {
				return undefined;
			}

			// Simulated bind
			args = slice.call( arguments, 2 );
			proxy = function() {
				return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
			};

			// Set the guid of unique handler to the same of original handler, so it can be removed
			proxy.guid = fn.guid = fn.guid || jQuery.guid++;

			return proxy;
		},

		now: Date.now,

		// jQuery.support is not used in Core but other projects attach their
		// properties to it so it needs to exist.
		support: support
	} );

	// JSHint would error on this code due to the Symbol not being defined in ES5.
	// Defining this global in .jshintrc would create a danger of using the global
	// unguarded in another place, it seems safer to just disable JSHint for these
	// three lines.
	/* jshint ignore: start */
	if ( typeof Symbol === "function" ) {
		jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
	}
	/* jshint ignore: end */

	// Populate the class2type map
	jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
	function( i, name ) {
		class2type[ "[object " + name + "]" ] = name.toLowerCase();
	} );

	function isArrayLike( obj ) {

		// Support: iOS 8.2 (not reproducible in simulator)
		// `in` check used to prevent JIT error (gh-2145)
		// hasOwn isn't used here due to false negatives
		// regarding Nodelist length in IE
		var length = !!obj && "length" in obj && obj.length,
			type = jQuery.type( obj );

		if ( type === "function" || jQuery.isWindow( obj ) ) {
			return false;
		}

		return type === "array" || length === 0 ||
			typeof length === "number" && length > 0 && ( length - 1 ) in obj;
	}
	var Sizzle =
	/*!
	 * Sizzle CSS Selector Engine v2.2.1
	 * http://sizzlejs.com/
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license
	 * http://jquery.org/license
	 *
	 * Date: 2015-10-17
	 */
	(function( window ) {

	var i,
		support,
		Expr,
		getText,
		isXML,
		tokenize,
		compile,
		select,
		outermostContext,
		sortInput,
		hasDuplicate,

		// Local document vars
		setDocument,
		document,
		docElem,
		documentIsHTML,
		rbuggyQSA,
		rbuggyMatches,
		matches,
		contains,

		// Instance-specific data
		expando = "sizzle" + 1 * new Date(),
		preferredDoc = window.document,
		dirruns = 0,
		done = 0,
		classCache = createCache(),
		tokenCache = createCache(),
		compilerCache = createCache(),
		sortOrder = function( a, b ) {
			if ( a === b ) {
				hasDuplicate = true;
			}
			return 0;
		},

		// General-purpose constants
		MAX_NEGATIVE = 1 << 31,

		// Instance methods
		hasOwn = ({}).hasOwnProperty,
		arr = [],
		pop = arr.pop,
		push_native = arr.push,
		push = arr.push,
		slice = arr.slice,
		// Use a stripped-down indexOf as it's faster than native
		// http://jsperf.com/thor-indexof-vs-for/5
		indexOf = function( list, elem ) {
			var i = 0,
				len = list.length;
			for ( ; i < len; i++ ) {
				if ( list[i] === elem ) {
					return i;
				}
			}
			return -1;
		},

		booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

		// Regular expressions

		// http://www.w3.org/TR/css3-selectors/#whitespace
		whitespace = "[\\x20\\t\\r\\n\\f]",

		// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
		identifier = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",

		// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
		attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
			// Operator (capture 2)
			"*([*^$|!~]?=)" + whitespace +
			// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
			"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
			"*\\]",

		pseudos = ":(" + identifier + ")(?:\\((" +
			// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
			// 1. quoted (capture 3; capture 4 or capture 5)
			"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
			// 2. simple (capture 6)
			"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
			// 3. anything else (capture 2)
			".*" +
			")\\)|)",

		// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
		rwhitespace = new RegExp( whitespace + "+", "g" ),
		rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

		rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
		rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),

		rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),

		rpseudo = new RegExp( pseudos ),
		ridentifier = new RegExp( "^" + identifier + "$" ),

		matchExpr = {
			"ID": new RegExp( "^#(" + identifier + ")" ),
			"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
			"TAG": new RegExp( "^(" + identifier + "|[*])" ),
			"ATTR": new RegExp( "^" + attributes ),
			"PSEUDO": new RegExp( "^" + pseudos ),
			"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
				"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
				"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
			"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
			// For use in libraries implementing .is()
			// We use this for POS matching in `select`
			"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
				whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
		},

		rinputs = /^(?:input|select|textarea|button)$/i,
		rheader = /^h\d$/i,

		rnative = /^[^{]+\{\s*\[native \w/,

		// Easily-parseable/retrievable ID or TAG or CLASS selectors
		rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

		rsibling = /[+~]/,
		rescape = /'|\\/g,

		// CSS escapes http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
		runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
		funescape = function( _, escaped, escapedWhitespace ) {
			var high = "0x" + escaped - 0x10000;
			// NaN means non-codepoint
			// Support: Firefox<24
			// Workaround erroneous numeric interpretation of +"0x"
			return high !== high || escapedWhitespace ?
				escaped :
				high < 0 ?
					// BMP codepoint
					String.fromCharCode( high + 0x10000 ) :
					// Supplemental Plane codepoint (surrogate pair)
					String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
		},

		// Used for iframes
		// See setDocument()
		// Removing the function wrapper causes a "Permission Denied"
		// error in IE
		unloadHandler = function() {
			setDocument();
		};

	// Optimize for push.apply( _, NodeList )
	try {
		push.apply(
			(arr = slice.call( preferredDoc.childNodes )),
			preferredDoc.childNodes
		);
		// Support: Android<4.0
		// Detect silently failing push.apply
		arr[ preferredDoc.childNodes.length ].nodeType;
	} catch ( e ) {
		push = { apply: arr.length ?

			// Leverage slice if possible
			function( target, els ) {
				push_native.apply( target, slice.call(els) );
			} :

			// Support: IE<9
			// Otherwise append directly
			function( target, els ) {
				var j = target.length,
					i = 0;
				// Can't trust NodeList.length
				while ( (target[j++] = els[i++]) ) {}
				target.length = j - 1;
			}
		};
	}

	function Sizzle( selector, context, results, seed ) {
		var m, i, elem, nid, nidselect, match, groups, newSelector,
			newContext = context && context.ownerDocument,

			// nodeType defaults to 9, since context defaults to document
			nodeType = context ? context.nodeType : 9;

		results = results || [];

		// Return early from calls with invalid selector or context
		if ( typeof selector !== "string" || !selector ||
			nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

			return results;
		}

		// Try to shortcut find operations (as opposed to filters) in HTML documents
		if ( !seed ) {

			if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
				setDocument( context );
			}
			context = context || document;

			if ( documentIsHTML ) {

				// If the selector is sufficiently simple, try using a "get*By*" DOM method
				// (excepting DocumentFragment context, where the methods don't exist)
				if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {

					// ID selector
					if ( (m = match[1]) ) {

						// Document context
						if ( nodeType === 9 ) {
							if ( (elem = context.getElementById( m )) ) {

								// Support: IE, Opera, Webkit
								// TODO: identify versions
								// getElementById can match elements by name instead of ID
								if ( elem.id === m ) {
									results.push( elem );
									return results;
								}
							} else {
								return results;
							}

						// Element context
						} else {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( newContext && (elem = newContext.getElementById( m )) &&
								contains( context, elem ) &&
								elem.id === m ) {

								results.push( elem );
								return results;
							}
						}

					// Type selector
					} else if ( match[2] ) {
						push.apply( results, context.getElementsByTagName( selector ) );
						return results;

					// Class selector
					} else if ( (m = match[3]) && support.getElementsByClassName &&
						context.getElementsByClassName ) {

						push.apply( results, context.getElementsByClassName( m ) );
						return results;
					}
				}

				// Take advantage of querySelectorAll
				if ( support.qsa &&
					!compilerCache[ selector + " " ] &&
					(!rbuggyQSA || !rbuggyQSA.test( selector )) ) {

					if ( nodeType !== 1 ) {
						newContext = context;
						newSelector = selector;

					// qSA looks outside Element context, which is not what we want
					// Thanks to Andrew Dupont for this workaround technique
					// Support: IE <=8
					// Exclude object elements
					} else if ( context.nodeName.toLowerCase() !== "object" ) {

						// Capture the context ID, setting it first if necessary
						if ( (nid = context.getAttribute( "id" )) ) {
							nid = nid.replace( rescape, "\\$&" );
						} else {
							context.setAttribute( "id", (nid = expando) );
						}

						// Prefix every selector in the list
						groups = tokenize( selector );
						i = groups.length;
						nidselect = ridentifier.test( nid ) ? "#" + nid : "[id='" + nid + "']";
						while ( i-- ) {
							groups[i] = nidselect + " " + toSelector( groups[i] );
						}
						newSelector = groups.join( "," );

						// Expand context for sibling selectors
						newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
							context;
					}

					if ( newSelector ) {
						try {
							push.apply( results,
								newContext.querySelectorAll( newSelector )
							);
							return results;
						} catch ( qsaError ) {
						} finally {
							if ( nid === expando ) {
								context.removeAttribute( "id" );
							}
						}
					}
				}
			}
		}

		// All others
		return select( selector.replace( rtrim, "$1" ), context, results, seed );
	}

	/**
	 * Create key-value caches of limited size
	 * @returns {function(string, object)} Returns the Object data after storing it on itself with
	 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
	 *	deleting the oldest entry
	 */
	function createCache() {
		var keys = [];

		function cache( key, value ) {
			// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
			if ( keys.push( key + " " ) > Expr.cacheLength ) {
				// Only keep the most recent entries
				delete cache[ keys.shift() ];
			}
			return (cache[ key + " " ] = value);
		}
		return cache;
	}

	/**
	 * Mark a function for special use by Sizzle
	 * @param {Function} fn The function to mark
	 */
	function markFunction( fn ) {
		fn[ expando ] = true;
		return fn;
	}

	/**
	 * Support testing using an element
	 * @param {Function} fn Passed the created div and expects a boolean result
	 */
	function assert( fn ) {
		var div = document.createElement("div");

		try {
			return !!fn( div );
		} catch (e) {
			return false;
		} finally {
			// Remove from its parent by default
			if ( div.parentNode ) {
				div.parentNode.removeChild( div );
			}
			// release memory in IE
			div = null;
		}
	}

	/**
	 * Adds the same handler for all of the specified attrs
	 * @param {String} attrs Pipe-separated list of attributes
	 * @param {Function} handler The method that will be applied
	 */
	function addHandle( attrs, handler ) {
		var arr = attrs.split("|"),
			i = arr.length;

		while ( i-- ) {
			Expr.attrHandle[ arr[i] ] = handler;
		}
	}

	/**
	 * Checks document order of two siblings
	 * @param {Element} a
	 * @param {Element} b
	 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
	 */
	function siblingCheck( a, b ) {
		var cur = b && a,
			diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
				( ~b.sourceIndex || MAX_NEGATIVE ) -
				( ~a.sourceIndex || MAX_NEGATIVE );

		// Use IE sourceIndex if available on both nodes
		if ( diff ) {
			return diff;
		}

		// Check if b follows a
		if ( cur ) {
			while ( (cur = cur.nextSibling) ) {
				if ( cur === b ) {
					return -1;
				}
			}
		}

		return a ? 1 : -1;
	}

	/**
	 * Returns a function to use in pseudos for input types
	 * @param {String} type
	 */
	function createInputPseudo( type ) {
		return function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === type;
		};
	}

	/**
	 * Returns a function to use in pseudos for buttons
	 * @param {String} type
	 */
	function createButtonPseudo( type ) {
		return function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return (name === "input" || name === "button") && elem.type === type;
		};
	}

	/**
	 * Returns a function to use in pseudos for positionals
	 * @param {Function} fn
	 */
	function createPositionalPseudo( fn ) {
		return markFunction(function( argument ) {
			argument = +argument;
			return markFunction(function( seed, matches ) {
				var j,
					matchIndexes = fn( [], seed.length, argument ),
					i = matchIndexes.length;

				// Match elements found at the specified indexes
				while ( i-- ) {
					if ( seed[ (j = matchIndexes[i]) ] ) {
						seed[j] = !(matches[j] = seed[j]);
					}
				}
			});
		});
	}

	/**
	 * Checks a node for validity as a Sizzle context
	 * @param {Element|Object=} context
	 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
	 */
	function testContext( context ) {
		return context && typeof context.getElementsByTagName !== "undefined" && context;
	}

	// Expose support vars for convenience
	support = Sizzle.support = {};

	/**
	 * Detects XML nodes
	 * @param {Element|Object} elem An element or a document
	 * @returns {Boolean} True iff elem is a non-HTML XML node
	 */
	isXML = Sizzle.isXML = function( elem ) {
		// documentElement is verified for cases where it doesn't yet exist
		// (such as loading iframes in IE - #4833)
		var documentElement = elem && (elem.ownerDocument || elem).documentElement;
		return documentElement ? documentElement.nodeName !== "HTML" : false;
	};

	/**
	 * Sets document-related variables once based on the current document
	 * @param {Element|Object} [doc] An element or document object to use to set the document
	 * @returns {Object} Returns the current document
	 */
	setDocument = Sizzle.setDocument = function( node ) {
		var hasCompare, parent,
			doc = node ? node.ownerDocument || node : preferredDoc;

		// Return early if doc is invalid or already selected
		if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
			return document;
		}

		// Update global variables
		document = doc;
		docElem = document.documentElement;
		documentIsHTML = !isXML( document );

		// Support: IE 9-11, Edge
		// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
		if ( (parent = document.defaultView) && parent.top !== parent ) {
			// Support: IE 11
			if ( parent.addEventListener ) {
				parent.addEventListener( "unload", unloadHandler, false );

			// Support: IE 9 - 10 only
			} else if ( parent.attachEvent ) {
				parent.attachEvent( "onunload", unloadHandler );
			}
		}

		/* Attributes
		---------------------------------------------------------------------- */

		// Support: IE<8
		// Verify that getAttribute really returns attributes and not properties
		// (excepting IE8 booleans)
		support.attributes = assert(function( div ) {
			div.className = "i";
			return !div.getAttribute("className");
		});

		/* getElement(s)By*
		---------------------------------------------------------------------- */

		// Check if getElementsByTagName("*") returns only elements
		support.getElementsByTagName = assert(function( div ) {
			div.appendChild( document.createComment("") );
			return !div.getElementsByTagName("*").length;
		});

		// Support: IE<9
		support.getElementsByClassName = rnative.test( document.getElementsByClassName );

		// Support: IE<10
		// Check if getElementById returns elements by name
		// The broken getElementById methods don't pick up programatically-set names,
		// so use a roundabout getElementsByName test
		support.getById = assert(function( div ) {
			docElem.appendChild( div ).id = expando;
			return !document.getElementsByName || !document.getElementsByName( expando ).length;
		});

		// ID find and filter
		if ( support.getById ) {
			Expr.find["ID"] = function( id, context ) {
				if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
					var m = context.getElementById( id );
					return m ? [ m ] : [];
				}
			};
			Expr.filter["ID"] = function( id ) {
				var attrId = id.replace( runescape, funescape );
				return function( elem ) {
					return elem.getAttribute("id") === attrId;
				};
			};
		} else {
			// Support: IE6/7
			// getElementById is not reliable as a find shortcut
			delete Expr.find["ID"];

			Expr.filter["ID"] =  function( id ) {
				var attrId = id.replace( runescape, funescape );
				return function( elem ) {
					var node = typeof elem.getAttributeNode !== "undefined" &&
						elem.getAttributeNode("id");
					return node && node.value === attrId;
				};
			};
		}

		// Tag
		Expr.find["TAG"] = support.getElementsByTagName ?
			function( tag, context ) {
				if ( typeof context.getElementsByTagName !== "undefined" ) {
					return context.getElementsByTagName( tag );

				// DocumentFragment nodes don't have gEBTN
				} else if ( support.qsa ) {
					return context.querySelectorAll( tag );
				}
			} :

			function( tag, context ) {
				var elem,
					tmp = [],
					i = 0,
					// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
					results = context.getElementsByTagName( tag );

				// Filter out possible comments
				if ( tag === "*" ) {
					while ( (elem = results[i++]) ) {
						if ( elem.nodeType === 1 ) {
							tmp.push( elem );
						}
					}

					return tmp;
				}
				return results;
			};

		// Class
		Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
			if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
				return context.getElementsByClassName( className );
			}
		};

		/* QSA/matchesSelector
		---------------------------------------------------------------------- */

		// QSA and matchesSelector support

		// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
		rbuggyMatches = [];

		// qSa(:focus) reports false when true (Chrome 21)
		// We allow this because of a bug in IE8/9 that throws an error
		// whenever `document.activeElement` is accessed on an iframe
		// So, we allow :focus to pass through QSA all the time to avoid the IE error
		// See http://bugs.jquery.com/ticket/13378
		rbuggyQSA = [];

		if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
			// Build QSA regex
			// Regex strategy adopted from Diego Perini
			assert(function( div ) {
				// Select is set to empty string on purpose
				// This is to test IE's treatment of not explicitly
				// setting a boolean content attribute,
				// since its presence should be enough
				// http://bugs.jquery.com/ticket/12359
				docElem.appendChild( div ).innerHTML = "<a id='" + expando + "'></a>" +
					"<select id='" + expando + "-\r\\' msallowcapture=''>" +
					"<option selected=''></option></select>";

				// Support: IE8, Opera 11-12.16
				// Nothing should be selected when empty strings follow ^= or $= or *=
				// The test attribute must be unknown in Opera but "safe" for WinRT
				// http://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
				if ( div.querySelectorAll("[msallowcapture^='']").length ) {
					rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
				}

				// Support: IE8
				// Boolean attributes and "value" are not treated correctly
				if ( !div.querySelectorAll("[selected]").length ) {
					rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
				}

				// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
				if ( !div.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
					rbuggyQSA.push("~=");
				}

				// Webkit/Opera - :checked should return selected option elements
				// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
				// IE8 throws error here and will not see later tests
				if ( !div.querySelectorAll(":checked").length ) {
					rbuggyQSA.push(":checked");
				}

				// Support: Safari 8+, iOS 8+
				// https://bugs.webkit.org/show_bug.cgi?id=136851
				// In-page `selector#id sibing-combinator selector` fails
				if ( !div.querySelectorAll( "a#" + expando + "+*" ).length ) {
					rbuggyQSA.push(".#.+[+~]");
				}
			});

			assert(function( div ) {
				// Support: Windows 8 Native Apps
				// The type and name attributes are restricted during .innerHTML assignment
				var input = document.createElement("input");
				input.setAttribute( "type", "hidden" );
				div.appendChild( input ).setAttribute( "name", "D" );

				// Support: IE8
				// Enforce case-sensitivity of name attribute
				if ( div.querySelectorAll("[name=d]").length ) {
					rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
				}

				// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
				// IE8 throws error here and will not see later tests
				if ( !div.querySelectorAll(":enabled").length ) {
					rbuggyQSA.push( ":enabled", ":disabled" );
				}

				// Opera 10-11 does not throw on post-comma invalid pseudos
				div.querySelectorAll("*,:x");
				rbuggyQSA.push(",.*:");
			});
		}

		if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
			docElem.webkitMatchesSelector ||
			docElem.mozMatchesSelector ||
			docElem.oMatchesSelector ||
			docElem.msMatchesSelector) )) ) {

			assert(function( div ) {
				// Check to see if it's possible to do matchesSelector
				// on a disconnected node (IE 9)
				support.disconnectedMatch = matches.call( div, "div" );

				// This should fail with an exception
				// Gecko does not error, returns false instead
				matches.call( div, "[s!='']:x" );
				rbuggyMatches.push( "!=", pseudos );
			});
		}

		rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
		rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

		/* Contains
		---------------------------------------------------------------------- */
		hasCompare = rnative.test( docElem.compareDocumentPosition );

		// Element contains another
		// Purposefully self-exclusive
		// As in, an element does not contain itself
		contains = hasCompare || rnative.test( docElem.contains ) ?
			function( a, b ) {
				var adown = a.nodeType === 9 ? a.documentElement : a,
					bup = b && b.parentNode;
				return a === bup || !!( bup && bup.nodeType === 1 && (
					adown.contains ?
						adown.contains( bup ) :
						a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
				));
			} :
			function( a, b ) {
				if ( b ) {
					while ( (b = b.parentNode) ) {
						if ( b === a ) {
							return true;
						}
					}
				}
				return false;
			};

		/* Sorting
		---------------------------------------------------------------------- */

		// Document order sorting
		sortOrder = hasCompare ?
		function( a, b ) {

			// Flag for duplicate removal
			if ( a === b ) {
				hasDuplicate = true;
				return 0;
			}

			// Sort on method existence if only one input has compareDocumentPosition
			var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
			if ( compare ) {
				return compare;
			}

			// Calculate position if both inputs belong to the same document
			compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
				a.compareDocumentPosition( b ) :

				// Otherwise we know they are disconnected
				1;

			// Disconnected nodes
			if ( compare & 1 ||
				(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

				// Choose the first element that is related to our preferred document
				if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
					return -1;
				}
				if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
					return 1;
				}

				// Maintain original order
				return sortInput ?
					( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
					0;
			}

			return compare & 4 ? -1 : 1;
		} :
		function( a, b ) {
			// Exit early if the nodes are identical
			if ( a === b ) {
				hasDuplicate = true;
				return 0;
			}

			var cur,
				i = 0,
				aup = a.parentNode,
				bup = b.parentNode,
				ap = [ a ],
				bp = [ b ];

			// Parentless nodes are either documents or disconnected
			if ( !aup || !bup ) {
				return a === document ? -1 :
					b === document ? 1 :
					aup ? -1 :
					bup ? 1 :
					sortInput ?
					( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
					0;

			// If the nodes are siblings, we can do a quick check
			} else if ( aup === bup ) {
				return siblingCheck( a, b );
			}

			// Otherwise we need full lists of their ancestors for comparison
			cur = a;
			while ( (cur = cur.parentNode) ) {
				ap.unshift( cur );
			}
			cur = b;
			while ( (cur = cur.parentNode) ) {
				bp.unshift( cur );
			}

			// Walk down the tree looking for a discrepancy
			while ( ap[i] === bp[i] ) {
				i++;
			}

			return i ?
				// Do a sibling check if the nodes have a common ancestor
				siblingCheck( ap[i], bp[i] ) :

				// Otherwise nodes in our document sort first
				ap[i] === preferredDoc ? -1 :
				bp[i] === preferredDoc ? 1 :
				0;
		};

		return document;
	};

	Sizzle.matches = function( expr, elements ) {
		return Sizzle( expr, null, null, elements );
	};

	Sizzle.matchesSelector = function( elem, expr ) {
		// Set document vars if needed
		if ( ( elem.ownerDocument || elem ) !== document ) {
			setDocument( elem );
		}

		// Make sure that attribute selectors are quoted
		expr = expr.replace( rattributeQuotes, "='$1']" );

		if ( support.matchesSelector && documentIsHTML &&
			!compilerCache[ expr + " " ] &&
			( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
			( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

			try {
				var ret = matches.call( elem, expr );

				// IE 9's matchesSelector returns false on disconnected nodes
				if ( ret || support.disconnectedMatch ||
						// As well, disconnected nodes are said to be in a document
						// fragment in IE 9
						elem.document && elem.document.nodeType !== 11 ) {
					return ret;
				}
			} catch (e) {}
		}

		return Sizzle( expr, document, null, [ elem ] ).length > 0;
	};

	Sizzle.contains = function( context, elem ) {
		// Set document vars if needed
		if ( ( context.ownerDocument || context ) !== document ) {
			setDocument( context );
		}
		return contains( context, elem );
	};

	Sizzle.attr = function( elem, name ) {
		// Set document vars if needed
		if ( ( elem.ownerDocument || elem ) !== document ) {
			setDocument( elem );
		}

		var fn = Expr.attrHandle[ name.toLowerCase() ],
			// Don't get fooled by Object.prototype properties (jQuery #13807)
			val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
				fn( elem, name, !documentIsHTML ) :
				undefined;

		return val !== undefined ?
			val :
			support.attributes || !documentIsHTML ?
				elem.getAttribute( name ) :
				(val = elem.getAttributeNode(name)) && val.specified ?
					val.value :
					null;
	};

	Sizzle.error = function( msg ) {
		throw new Error( "Syntax error, unrecognized expression: " + msg );
	};

	/**
	 * Document sorting and removing duplicates
	 * @param {ArrayLike} results
	 */
	Sizzle.uniqueSort = function( results ) {
		var elem,
			duplicates = [],
			j = 0,
			i = 0;

		// Unless we *know* we can detect duplicates, assume their presence
		hasDuplicate = !support.detectDuplicates;
		sortInput = !support.sortStable && results.slice( 0 );
		results.sort( sortOrder );

		if ( hasDuplicate ) {
			while ( (elem = results[i++]) ) {
				if ( elem === results[ i ] ) {
					j = duplicates.push( i );
				}
			}
			while ( j-- ) {
				results.splice( duplicates[ j ], 1 );
			}
		}

		// Clear input after sorting to release objects
		// See https://github.com/jquery/sizzle/pull/225
		sortInput = null;

		return results;
	};

	/**
	 * Utility function for retrieving the text value of an array of DOM nodes
	 * @param {Array|Element} elem
	 */
	getText = Sizzle.getText = function( elem ) {
		var node,
			ret = "",
			i = 0,
			nodeType = elem.nodeType;

		if ( !nodeType ) {
			// If no nodeType, this is expected to be an array
			while ( (node = elem[i++]) ) {
				// Do not traverse comment nodes
				ret += getText( node );
			}
		} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
			// Use textContent for elements
			// innerText usage removed for consistency of new lines (jQuery #11153)
			if ( typeof elem.textContent === "string" ) {
				return elem.textContent;
			} else {
				// Traverse its children
				for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
					ret += getText( elem );
				}
			}
		} else if ( nodeType === 3 || nodeType === 4 ) {
			return elem.nodeValue;
		}
		// Do not include comment or processing instruction nodes

		return ret;
	};

	Expr = Sizzle.selectors = {

		// Can be adjusted by the user
		cacheLength: 50,

		createPseudo: markFunction,

		match: matchExpr,

		attrHandle: {},

		find: {},

		relative: {
			">": { dir: "parentNode", first: true },
			" ": { dir: "parentNode" },
			"+": { dir: "previousSibling", first: true },
			"~": { dir: "previousSibling" }
		},

		preFilter: {
			"ATTR": function( match ) {
				match[1] = match[1].replace( runescape, funescape );

				// Move the given value to match[3] whether quoted or unquoted
				match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

				if ( match[2] === "~=" ) {
					match[3] = " " + match[3] + " ";
				}

				return match.slice( 0, 4 );
			},

			"CHILD": function( match ) {
				/* matches from matchExpr["CHILD"]
					1 type (only|nth|...)
					2 what (child|of-type)
					3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
					4 xn-component of xn+y argument ([+-]?\d*n|)
					5 sign of xn-component
					6 x of xn-component
					7 sign of y-component
					8 y of y-component
				*/
				match[1] = match[1].toLowerCase();

				if ( match[1].slice( 0, 3 ) === "nth" ) {
					// nth-* requires argument
					if ( !match[3] ) {
						Sizzle.error( match[0] );
					}

					// numeric x and y parameters for Expr.filter.CHILD
					// remember that false/true cast respectively to 0/1
					match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
					match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

				// other types prohibit arguments
				} else if ( match[3] ) {
					Sizzle.error( match[0] );
				}

				return match;
			},

			"PSEUDO": function( match ) {
				var excess,
					unquoted = !match[6] && match[2];

				if ( matchExpr["CHILD"].test( match[0] ) ) {
					return null;
				}

				// Accept quoted arguments as-is
				if ( match[3] ) {
					match[2] = match[4] || match[5] || "";

				// Strip excess characters from unquoted arguments
				} else if ( unquoted && rpseudo.test( unquoted ) &&
					// Get excess from tokenize (recursively)
					(excess = tokenize( unquoted, true )) &&
					// advance to the next closing parenthesis
					(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

					// excess is a negative index
					match[0] = match[0].slice( 0, excess );
					match[2] = unquoted.slice( 0, excess );
				}

				// Return only captures needed by the pseudo filter method (type and argument)
				return match.slice( 0, 3 );
			}
		},

		filter: {

			"TAG": function( nodeNameSelector ) {
				var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
				return nodeNameSelector === "*" ?
					function() { return true; } :
					function( elem ) {
						return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
					};
			},

			"CLASS": function( className ) {
				var pattern = classCache[ className + " " ];

				return pattern ||
					(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
					classCache( className, function( elem ) {
						return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
					});
			},

			"ATTR": function( name, operator, check ) {
				return function( elem ) {
					var result = Sizzle.attr( elem, name );

					if ( result == null ) {
						return operator === "!=";
					}
					if ( !operator ) {
						return true;
					}

					result += "";

					return operator === "=" ? result === check :
						operator === "!=" ? result !== check :
						operator === "^=" ? check && result.indexOf( check ) === 0 :
						operator === "*=" ? check && result.indexOf( check ) > -1 :
						operator === "$=" ? check && result.slice( -check.length ) === check :
						operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
						operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
						false;
				};
			},

			"CHILD": function( type, what, argument, first, last ) {
				var simple = type.slice( 0, 3 ) !== "nth",
					forward = type.slice( -4 ) !== "last",
					ofType = what === "of-type";

				return first === 1 && last === 0 ?

					// Shortcut for :nth-*(n)
					function( elem ) {
						return !!elem.parentNode;
					} :

					function( elem, context, xml ) {
						var cache, uniqueCache, outerCache, node, nodeIndex, start,
							dir = simple !== forward ? "nextSibling" : "previousSibling",
							parent = elem.parentNode,
							name = ofType && elem.nodeName.toLowerCase(),
							useCache = !xml && !ofType,
							diff = false;

						if ( parent ) {

							// :(first|last|only)-(child|of-type)
							if ( simple ) {
								while ( dir ) {
									node = elem;
									while ( (node = node[ dir ]) ) {
										if ( ofType ?
											node.nodeName.toLowerCase() === name :
											node.nodeType === 1 ) {

											return false;
										}
									}
									// Reverse direction for :only-* (if we haven't yet done so)
									start = dir = type === "only" && !start && "nextSibling";
								}
								return true;
							}

							start = [ forward ? parent.firstChild : parent.lastChild ];

							// non-xml :nth-child(...) stores cache data on `parent`
							if ( forward && useCache ) {

								// Seek `elem` from a previously-cached index

								// ...in a gzip-friendly way
								node = parent;
								outerCache = node[ expando ] || (node[ expando ] = {});

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									(outerCache[ node.uniqueID ] = {});

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex && cache[ 2 ];
								node = nodeIndex && parent.childNodes[ nodeIndex ];

								while ( (node = ++nodeIndex && node && node[ dir ] ||

									// Fallback to seeking `elem` from the start
									(diff = nodeIndex = 0) || start.pop()) ) {

									// When found, cache indexes on `parent` and break
									if ( node.nodeType === 1 && ++diff && node === elem ) {
										uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
										break;
									}
								}

							} else {
								// Use previously-cached element index if available
								if ( useCache ) {
									// ...in a gzip-friendly way
									node = elem;
									outerCache = node[ expando ] || (node[ expando ] = {});

									// Support: IE <9 only
									// Defend against cloned attroperties (jQuery gh-1709)
									uniqueCache = outerCache[ node.uniqueID ] ||
										(outerCache[ node.uniqueID ] = {});

									cache = uniqueCache[ type ] || [];
									nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
									diff = nodeIndex;
								}

								// xml :nth-child(...)
								// or :nth-last-child(...) or :nth(-last)?-of-type(...)
								if ( diff === false ) {
									// Use the same loop as above to seek `elem` from the start
									while ( (node = ++nodeIndex && node && node[ dir ] ||
										(diff = nodeIndex = 0) || start.pop()) ) {

										if ( ( ofType ?
											node.nodeName.toLowerCase() === name :
											node.nodeType === 1 ) &&
											++diff ) {

											// Cache the index of each encountered element
											if ( useCache ) {
												outerCache = node[ expando ] || (node[ expando ] = {});

												// Support: IE <9 only
												// Defend against cloned attroperties (jQuery gh-1709)
												uniqueCache = outerCache[ node.uniqueID ] ||
													(outerCache[ node.uniqueID ] = {});

												uniqueCache[ type ] = [ dirruns, diff ];
											}

											if ( node === elem ) {
												break;
											}
										}
									}
								}
							}

							// Incorporate the offset, then check against cycle size
							diff -= last;
							return diff === first || ( diff % first === 0 && diff / first >= 0 );
						}
					};
			},

			"PSEUDO": function( pseudo, argument ) {
				// pseudo-class names are case-insensitive
				// http://www.w3.org/TR/selectors/#pseudo-classes
				// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
				// Remember that setFilters inherits from pseudos
				var args,
					fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
						Sizzle.error( "unsupported pseudo: " + pseudo );

				// The user may use createPseudo to indicate that
				// arguments are needed to create the filter function
				// just as Sizzle does
				if ( fn[ expando ] ) {
					return fn( argument );
				}

				// But maintain support for old signatures
				if ( fn.length > 1 ) {
					args = [ pseudo, pseudo, "", argument ];
					return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
						markFunction(function( seed, matches ) {
							var idx,
								matched = fn( seed, argument ),
								i = matched.length;
							while ( i-- ) {
								idx = indexOf( seed, matched[i] );
								seed[ idx ] = !( matches[ idx ] = matched[i] );
							}
						}) :
						function( elem ) {
							return fn( elem, 0, args );
						};
				}

				return fn;
			}
		},

		pseudos: {
			// Potentially complex pseudos
			"not": markFunction(function( selector ) {
				// Trim the selector passed to compile
				// to avoid treating leading and trailing
				// spaces as combinators
				var input = [],
					results = [],
					matcher = compile( selector.replace( rtrim, "$1" ) );

				return matcher[ expando ] ?
					markFunction(function( seed, matches, context, xml ) {
						var elem,
							unmatched = matcher( seed, null, xml, [] ),
							i = seed.length;

						// Match elements unmatched by `matcher`
						while ( i-- ) {
							if ( (elem = unmatched[i]) ) {
								seed[i] = !(matches[i] = elem);
							}
						}
					}) :
					function( elem, context, xml ) {
						input[0] = elem;
						matcher( input, null, xml, results );
						// Don't keep the element (issue #299)
						input[0] = null;
						return !results.pop();
					};
			}),

			"has": markFunction(function( selector ) {
				return function( elem ) {
					return Sizzle( selector, elem ).length > 0;
				};
			}),

			"contains": markFunction(function( text ) {
				text = text.replace( runescape, funescape );
				return function( elem ) {
					return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
				};
			}),

			// "Whether an element is represented by a :lang() selector
			// is based solely on the element's language value
			// being equal to the identifier C,
			// or beginning with the identifier C immediately followed by "-".
			// The matching of C against the element's language value is performed case-insensitively.
			// The identifier C does not have to be a valid language name."
			// http://www.w3.org/TR/selectors/#lang-pseudo
			"lang": markFunction( function( lang ) {
				// lang value must be a valid identifier
				if ( !ridentifier.test(lang || "") ) {
					Sizzle.error( "unsupported lang: " + lang );
				}
				lang = lang.replace( runescape, funescape ).toLowerCase();
				return function( elem ) {
					var elemLang;
					do {
						if ( (elemLang = documentIsHTML ?
							elem.lang :
							elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

							elemLang = elemLang.toLowerCase();
							return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
						}
					} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
					return false;
				};
			}),

			// Miscellaneous
			"target": function( elem ) {
				var hash = window.location && window.location.hash;
				return hash && hash.slice( 1 ) === elem.id;
			},

			"root": function( elem ) {
				return elem === docElem;
			},

			"focus": function( elem ) {
				return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
			},

			// Boolean properties
			"enabled": function( elem ) {
				return elem.disabled === false;
			},

			"disabled": function( elem ) {
				return elem.disabled === true;
			},

			"checked": function( elem ) {
				// In CSS3, :checked should return both checked and selected elements
				// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
				var nodeName = elem.nodeName.toLowerCase();
				return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
			},

			"selected": function( elem ) {
				// Accessing this property makes selected-by-default
				// options in Safari work properly
				if ( elem.parentNode ) {
					elem.parentNode.selectedIndex;
				}

				return elem.selected === true;
			},

			// Contents
			"empty": function( elem ) {
				// http://www.w3.org/TR/selectors/#empty-pseudo
				// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
				//   but not by others (comment: 8; processing instruction: 7; etc.)
				// nodeType < 6 works because attributes (2) do not appear as children
				for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
					if ( elem.nodeType < 6 ) {
						return false;
					}
				}
				return true;
			},

			"parent": function( elem ) {
				return !Expr.pseudos["empty"]( elem );
			},

			// Element/input types
			"header": function( elem ) {
				return rheader.test( elem.nodeName );
			},

			"input": function( elem ) {
				return rinputs.test( elem.nodeName );
			},

			"button": function( elem ) {
				var name = elem.nodeName.toLowerCase();
				return name === "input" && elem.type === "button" || name === "button";
			},

			"text": function( elem ) {
				var attr;
				return elem.nodeName.toLowerCase() === "input" &&
					elem.type === "text" &&

					// Support: IE<8
					// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
					( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
			},

			// Position-in-collection
			"first": createPositionalPseudo(function() {
				return [ 0 ];
			}),

			"last": createPositionalPseudo(function( matchIndexes, length ) {
				return [ length - 1 ];
			}),

			"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
				return [ argument < 0 ? argument + length : argument ];
			}),

			"even": createPositionalPseudo(function( matchIndexes, length ) {
				var i = 0;
				for ( ; i < length; i += 2 ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),

			"odd": createPositionalPseudo(function( matchIndexes, length ) {
				var i = 1;
				for ( ; i < length; i += 2 ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),

			"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
				var i = argument < 0 ? argument + length : argument;
				for ( ; --i >= 0; ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),

			"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
				var i = argument < 0 ? argument + length : argument;
				for ( ; ++i < length; ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			})
		}
	};

	Expr.pseudos["nth"] = Expr.pseudos["eq"];

	// Add button/input type pseudos
	for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
		Expr.pseudos[ i ] = createInputPseudo( i );
	}
	for ( i in { submit: true, reset: true } ) {
		Expr.pseudos[ i ] = createButtonPseudo( i );
	}

	// Easy API for creating new setFilters
	function setFilters() {}
	setFilters.prototype = Expr.filters = Expr.pseudos;
	Expr.setFilters = new setFilters();

	tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
		var matched, match, tokens, type,
			soFar, groups, preFilters,
			cached = tokenCache[ selector + " " ];

		if ( cached ) {
			return parseOnly ? 0 : cached.slice( 0 );
		}

		soFar = selector;
		groups = [];
		preFilters = Expr.preFilter;

		while ( soFar ) {

			// Comma and first run
			if ( !matched || (match = rcomma.exec( soFar )) ) {
				if ( match ) {
					// Don't consume trailing commas as valid
					soFar = soFar.slice( match[0].length ) || soFar;
				}
				groups.push( (tokens = []) );
			}

			matched = false;

			// Combinators
			if ( (match = rcombinators.exec( soFar )) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					// Cast descendant combinators to space
					type: match[0].replace( rtrim, " " )
				});
				soFar = soFar.slice( matched.length );
			}

			// Filters
			for ( type in Expr.filter ) {
				if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
					(match = preFilters[ type ]( match ))) ) {
					matched = match.shift();
					tokens.push({
						value: matched,
						type: type,
						matches: match
					});
					soFar = soFar.slice( matched.length );
				}
			}

			if ( !matched ) {
				break;
			}
		}

		// Return the length of the invalid excess
		// if we're just parsing
		// Otherwise, throw an error or return tokens
		return parseOnly ?
			soFar.length :
			soFar ?
				Sizzle.error( selector ) :
				// Cache the tokens
				tokenCache( selector, groups ).slice( 0 );
	};

	function toSelector( tokens ) {
		var i = 0,
			len = tokens.length,
			selector = "";
		for ( ; i < len; i++ ) {
			selector += tokens[i].value;
		}
		return selector;
	}

	function addCombinator( matcher, combinator, base ) {
		var dir = combinator.dir,
			checkNonElements = base && dir === "parentNode",
			doneName = done++;

		return combinator.first ?
			// Check against closest ancestor/preceding element
			function( elem, context, xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						return matcher( elem, context, xml );
					}
				}
			} :

			// Check against all ancestor/preceding elements
			function( elem, context, xml ) {
				var oldCache, uniqueCache, outerCache,
					newCache = [ dirruns, doneName ];

				// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
				if ( xml ) {
					while ( (elem = elem[ dir ]) ) {
						if ( elem.nodeType === 1 || checkNonElements ) {
							if ( matcher( elem, context, xml ) ) {
								return true;
							}
						}
					}
				} else {
					while ( (elem = elem[ dir ]) ) {
						if ( elem.nodeType === 1 || checkNonElements ) {
							outerCache = elem[ expando ] || (elem[ expando ] = {});

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});

							if ( (oldCache = uniqueCache[ dir ]) &&
								oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

								// Assign to newCache so results back-propagate to previous elements
								return (newCache[ 2 ] = oldCache[ 2 ]);
							} else {
								// Reuse newcache so results back-propagate to previous elements
								uniqueCache[ dir ] = newCache;

								// A match means we're done; a fail means we have to keep checking
								if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
									return true;
								}
							}
						}
					}
				}
			};
	}

	function elementMatcher( matchers ) {
		return matchers.length > 1 ?
			function( elem, context, xml ) {
				var i = matchers.length;
				while ( i-- ) {
					if ( !matchers[i]( elem, context, xml ) ) {
						return false;
					}
				}
				return true;
			} :
			matchers[0];
	}

	function multipleContexts( selector, contexts, results ) {
		var i = 0,
			len = contexts.length;
		for ( ; i < len; i++ ) {
			Sizzle( selector, contexts[i], results );
		}
		return results;
	}

	function condense( unmatched, map, filter, context, xml ) {
		var elem,
			newUnmatched = [],
			i = 0,
			len = unmatched.length,
			mapped = map != null;

		for ( ; i < len; i++ ) {
			if ( (elem = unmatched[i]) ) {
				if ( !filter || filter( elem, context, xml ) ) {
					newUnmatched.push( elem );
					if ( mapped ) {
						map.push( i );
					}
				}
			}
		}

		return newUnmatched;
	}

	function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
		if ( postFilter && !postFilter[ expando ] ) {
			postFilter = setMatcher( postFilter );
		}
		if ( postFinder && !postFinder[ expando ] ) {
			postFinder = setMatcher( postFinder, postSelector );
		}
		return markFunction(function( seed, results, context, xml ) {
			var temp, i, elem,
				preMap = [],
				postMap = [],
				preexisting = results.length,

				// Get initial elements from seed or context
				elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

				// Prefilter to get matcher input, preserving a map for seed-results synchronization
				matcherIn = preFilter && ( seed || !selector ) ?
					condense( elems, preMap, preFilter, context, xml ) :
					elems,

				matcherOut = matcher ?
					// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
					postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

						// ...intermediate processing is necessary
						[] :

						// ...otherwise use results directly
						results :
					matcherIn;

			// Find primary matches
			if ( matcher ) {
				matcher( matcherIn, matcherOut, context, xml );
			}

			// Apply postFilter
			if ( postFilter ) {
				temp = condense( matcherOut, postMap );
				postFilter( temp, [], context, xml );

				// Un-match failing elements by moving them back to matcherIn
				i = temp.length;
				while ( i-- ) {
					if ( (elem = temp[i]) ) {
						matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
					}
				}
			}

			if ( seed ) {
				if ( postFinder || preFilter ) {
					if ( postFinder ) {
						// Get the final matcherOut by condensing this intermediate into postFinder contexts
						temp = [];
						i = matcherOut.length;
						while ( i-- ) {
							if ( (elem = matcherOut[i]) ) {
								// Restore matcherIn since elem is not yet a final match
								temp.push( (matcherIn[i] = elem) );
							}
						}
						postFinder( null, (matcherOut = []), temp, xml );
					}

					// Move matched elements from seed to results to keep them synchronized
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) &&
							(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {

							seed[temp] = !(results[temp] = elem);
						}
					}
				}

			// Add elements to results, through postFinder if defined
			} else {
				matcherOut = condense(
					matcherOut === results ?
						matcherOut.splice( preexisting, matcherOut.length ) :
						matcherOut
				);
				if ( postFinder ) {
					postFinder( null, results, matcherOut, xml );
				} else {
					push.apply( results, matcherOut );
				}
			}
		});
	}

	function matcherFromTokens( tokens ) {
		var checkContext, matcher, j,
			len = tokens.length,
			leadingRelative = Expr.relative[ tokens[0].type ],
			implicitRelative = leadingRelative || Expr.relative[" "],
			i = leadingRelative ? 1 : 0,

			// The foundational matcher ensures that elements are reachable from top-level context(s)
			matchContext = addCombinator( function( elem ) {
				return elem === checkContext;
			}, implicitRelative, true ),
			matchAnyContext = addCombinator( function( elem ) {
				return indexOf( checkContext, elem ) > -1;
			}, implicitRelative, true ),
			matchers = [ function( elem, context, xml ) {
				var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
					(checkContext = context).nodeType ?
						matchContext( elem, context, xml ) :
						matchAnyContext( elem, context, xml ) );
				// Avoid hanging onto element (issue #299)
				checkContext = null;
				return ret;
			} ];

		for ( ; i < len; i++ ) {
			if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
				matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
			} else {
				matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

				// Return special upon seeing a positional matcher
				if ( matcher[ expando ] ) {
					// Find the next relative operator (if any) for proper handling
					j = ++i;
					for ( ; j < len; j++ ) {
						if ( Expr.relative[ tokens[j].type ] ) {
							break;
						}
					}
					return setMatcher(
						i > 1 && elementMatcher( matchers ),
						i > 1 && toSelector(
							// If the preceding token was a descendant combinator, insert an implicit any-element `*`
							tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
						).replace( rtrim, "$1" ),
						matcher,
						i < j && matcherFromTokens( tokens.slice( i, j ) ),
						j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
						j < len && toSelector( tokens )
					);
				}
				matchers.push( matcher );
			}
		}

		return elementMatcher( matchers );
	}

	function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
		var bySet = setMatchers.length > 0,
			byElement = elementMatchers.length > 0,
			superMatcher = function( seed, context, xml, results, outermost ) {
				var elem, j, matcher,
					matchedCount = 0,
					i = "0",
					unmatched = seed && [],
					setMatched = [],
					contextBackup = outermostContext,
					// We must always have either seed elements or outermost context
					elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
					// Use integer dirruns iff this is the outermost matcher
					dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
					len = elems.length;

				if ( outermost ) {
					outermostContext = context === document || context || outermost;
				}

				// Add elements passing elementMatchers directly to results
				// Support: IE<9, Safari
				// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
				for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
					if ( byElement && elem ) {
						j = 0;
						if ( !context && elem.ownerDocument !== document ) {
							setDocument( elem );
							xml = !documentIsHTML;
						}
						while ( (matcher = elementMatchers[j++]) ) {
							if ( matcher( elem, context || document, xml) ) {
								results.push( elem );
								break;
							}
						}
						if ( outermost ) {
							dirruns = dirrunsUnique;
						}
					}

					// Track unmatched elements for set filters
					if ( bySet ) {
						// They will have gone through all possible matchers
						if ( (elem = !matcher && elem) ) {
							matchedCount--;
						}

						// Lengthen the array for every element, matched or not
						if ( seed ) {
							unmatched.push( elem );
						}
					}
				}

				// `i` is now the count of elements visited above, and adding it to `matchedCount`
				// makes the latter nonnegative.
				matchedCount += i;

				// Apply set filters to unmatched elements
				// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
				// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
				// no element matchers and no seed.
				// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
				// case, which will result in a "00" `matchedCount` that differs from `i` but is also
				// numerically zero.
				if ( bySet && i !== matchedCount ) {
					j = 0;
					while ( (matcher = setMatchers[j++]) ) {
						matcher( unmatched, setMatched, context, xml );
					}

					if ( seed ) {
						// Reintegrate element matches to eliminate the need for sorting
						if ( matchedCount > 0 ) {
							while ( i-- ) {
								if ( !(unmatched[i] || setMatched[i]) ) {
									setMatched[i] = pop.call( results );
								}
							}
						}

						// Discard index placeholder values to get only actual matches
						setMatched = condense( setMatched );
					}

					// Add matches to results
					push.apply( results, setMatched );

					// Seedless set matches succeeding multiple successful matchers stipulate sorting
					if ( outermost && !seed && setMatched.length > 0 &&
						( matchedCount + setMatchers.length ) > 1 ) {

						Sizzle.uniqueSort( results );
					}
				}

				// Override manipulation of globals by nested matchers
				if ( outermost ) {
					dirruns = dirrunsUnique;
					outermostContext = contextBackup;
				}

				return unmatched;
			};

		return bySet ?
			markFunction( superMatcher ) :
			superMatcher;
	}

	compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
		var i,
			setMatchers = [],
			elementMatchers = [],
			cached = compilerCache[ selector + " " ];

		if ( !cached ) {
			// Generate a function of recursive functions that can be used to check each element
			if ( !match ) {
				match = tokenize( selector );
			}
			i = match.length;
			while ( i-- ) {
				cached = matcherFromTokens( match[i] );
				if ( cached[ expando ] ) {
					setMatchers.push( cached );
				} else {
					elementMatchers.push( cached );
				}
			}

			// Cache the compiled function
			cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

			// Save selector and tokenization
			cached.selector = selector;
		}
		return cached;
	};

	/**
	 * A low-level selection function that works with Sizzle's compiled
	 *  selector functions
	 * @param {String|Function} selector A selector or a pre-compiled
	 *  selector function built with Sizzle.compile
	 * @param {Element} context
	 * @param {Array} [results]
	 * @param {Array} [seed] A set of elements to match against
	 */
	select = Sizzle.select = function( selector, context, results, seed ) {
		var i, tokens, token, type, find,
			compiled = typeof selector === "function" && selector,
			match = !seed && tokenize( (selector = compiled.selector || selector) );

		results = results || [];

		// Try to minimize operations if there is only one selector in the list and no seed
		// (the latter of which guarantees us context)
		if ( match.length === 1 ) {

			// Reduce context if the leading compound selector is an ID
			tokens = match[0] = match[0].slice( 0 );
			if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
					support.getById && context.nodeType === 9 && documentIsHTML &&
					Expr.relative[ tokens[1].type ] ) {

				context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
				if ( !context ) {
					return results;

				// Precompiled matchers will still verify ancestry, so step up a level
				} else if ( compiled ) {
					context = context.parentNode;
				}

				selector = selector.slice( tokens.shift().value.length );
			}

			// Fetch a seed set for right-to-left matching
			i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
			while ( i-- ) {
				token = tokens[i];

				// Abort if we hit a combinator
				if ( Expr.relative[ (type = token.type) ] ) {
					break;
				}
				if ( (find = Expr.find[ type ]) ) {
					// Search, expanding context for leading sibling combinators
					if ( (seed = find(
						token.matches[0].replace( runescape, funescape ),
						rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
					)) ) {

						// If seed is empty or no tokens remain, we can return early
						tokens.splice( i, 1 );
						selector = seed.length && toSelector( tokens );
						if ( !selector ) {
							push.apply( results, seed );
							return results;
						}

						break;
					}
				}
			}
		}

		// Compile and execute a filtering function if one is not provided
		// Provide `match` to avoid retokenization if we modified the selector above
		( compiled || compile( selector, match ) )(
			seed,
			context,
			!documentIsHTML,
			results,
			!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
		);
		return results;
	};

	// One-time assignments

	// Sort stability
	support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

	// Support: Chrome 14-35+
	// Always assume duplicates if they aren't passed to the comparison function
	support.detectDuplicates = !!hasDuplicate;

	// Initialize against the default document
	setDocument();

	// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
	// Detached nodes confoundingly follow *each other*
	support.sortDetached = assert(function( div1 ) {
		// Should return 1, but returns 4 (following)
		return div1.compareDocumentPosition( document.createElement("div") ) & 1;
	});

	// Support: IE<8
	// Prevent attribute/property "interpolation"
	// http://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
	if ( !assert(function( div ) {
		div.innerHTML = "<a href='#'></a>";
		return div.firstChild.getAttribute("href") === "#" ;
	}) ) {
		addHandle( "type|href|height|width", function( elem, name, isXML ) {
			if ( !isXML ) {
				return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
			}
		});
	}

	// Support: IE<9
	// Use defaultValue in place of getAttribute("value")
	if ( !support.attributes || !assert(function( div ) {
		div.innerHTML = "<input/>";
		div.firstChild.setAttribute( "value", "" );
		return div.firstChild.getAttribute( "value" ) === "";
	}) ) {
		addHandle( "value", function( elem, name, isXML ) {
			if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
				return elem.defaultValue;
			}
		});
	}

	// Support: IE<9
	// Use getAttributeNode to fetch booleans when getAttribute lies
	if ( !assert(function( div ) {
		return div.getAttribute("disabled") == null;
	}) ) {
		addHandle( booleans, function( elem, name, isXML ) {
			var val;
			if ( !isXML ) {
				return elem[ name ] === true ? name.toLowerCase() :
						(val = elem.getAttributeNode( name )) && val.specified ?
						val.value :
					null;
			}
		});
	}

	return Sizzle;

	})( window );



	jQuery.find = Sizzle;
	jQuery.expr = Sizzle.selectors;
	jQuery.expr[ ":" ] = jQuery.expr.pseudos;
	jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
	jQuery.text = Sizzle.getText;
	jQuery.isXMLDoc = Sizzle.isXML;
	jQuery.contains = Sizzle.contains;



	var dir = function( elem, dir, until ) {
		var matched = [],
			truncate = until !== undefined;

		while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
			if ( elem.nodeType === 1 ) {
				if ( truncate && jQuery( elem ).is( until ) ) {
					break;
				}
				matched.push( elem );
			}
		}
		return matched;
	};


	var siblings = function( n, elem ) {
		var matched = [];

		for ( ; n; n = n.nextSibling ) {
			if ( n.nodeType === 1 && n !== elem ) {
				matched.push( n );
			}
		}

		return matched;
	};


	var rneedsContext = jQuery.expr.match.needsContext;

	var rsingleTag = ( /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/ );



	var risSimple = /^.[^:#\[\.,]*$/;

	// Implement the identical functionality for filter and not
	function winnow( elements, qualifier, not ) {
		if ( jQuery.isFunction( qualifier ) ) {
			return jQuery.grep( elements, function( elem, i ) {
				/* jshint -W018 */
				return !!qualifier.call( elem, i, elem ) !== not;
			} );

		}

		if ( qualifier.nodeType ) {
			return jQuery.grep( elements, function( elem ) {
				return ( elem === qualifier ) !== not;
			} );

		}

		if ( typeof qualifier === "string" ) {
			if ( risSimple.test( qualifier ) ) {
				return jQuery.filter( qualifier, elements, not );
			}

			qualifier = jQuery.filter( qualifier, elements );
		}

		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
		} );
	}

	jQuery.filter = function( expr, elems, not ) {
		var elem = elems[ 0 ];

		if ( not ) {
			expr = ":not(" + expr + ")";
		}

		return elems.length === 1 && elem.nodeType === 1 ?
			jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [] :
			jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
				return elem.nodeType === 1;
			} ) );
	};

	jQuery.fn.extend( {
		find: function( selector ) {
			var i,
				len = this.length,
				ret = [],
				self = this;

			if ( typeof selector !== "string" ) {
				return this.pushStack( jQuery( selector ).filter( function() {
					for ( i = 0; i < len; i++ ) {
						if ( jQuery.contains( self[ i ], this ) ) {
							return true;
						}
					}
				} ) );
			}

			for ( i = 0; i < len; i++ ) {
				jQuery.find( selector, self[ i ], ret );
			}

			// Needed because $( selector, context ) becomes $( context ).find( selector )
			ret = this.pushStack( len > 1 ? jQuery.unique( ret ) : ret );
			ret.selector = this.selector ? this.selector + " " + selector : selector;
			return ret;
		},
		filter: function( selector ) {
			return this.pushStack( winnow( this, selector || [], false ) );
		},
		not: function( selector ) {
			return this.pushStack( winnow( this, selector || [], true ) );
		},
		is: function( selector ) {
			return !!winnow(
				this,

				// If this is a positional/relative selector, check membership in the returned set
				// so $("p:first").is("p:last") won't return true for a doc with two "p".
				typeof selector === "string" && rneedsContext.test( selector ) ?
					jQuery( selector ) :
					selector || [],
				false
			).length;
		}
	} );


	// Initialize a jQuery object


	// A central reference to the root jQuery(document)
	var rootjQuery,

		// A simple way to check for HTML strings
		// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
		// Strict HTML recognition (#11290: must start with <)
		rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,

		init = jQuery.fn.init = function( selector, context, root ) {
			var match, elem;

			// HANDLE: $(""), $(null), $(undefined), $(false)
			if ( !selector ) {
				return this;
			}

			// Method init() accepts an alternate rootjQuery
			// so migrate can support jQuery.sub (gh-2101)
			root = root || rootjQuery;

			// Handle HTML strings
			if ( typeof selector === "string" ) {
				if ( selector[ 0 ] === "<" &&
					selector[ selector.length - 1 ] === ">" &&
					selector.length >= 3 ) {

					// Assume that strings that start and end with <> are HTML and skip the regex check
					match = [ null, selector, null ];

				} else {
					match = rquickExpr.exec( selector );
				}

				// Match html or make sure no context is specified for #id
				if ( match && ( match[ 1 ] || !context ) ) {

					// HANDLE: $(html) -> $(array)
					if ( match[ 1 ] ) {
						context = context instanceof jQuery ? context[ 0 ] : context;

						// Option to run scripts is true for back-compat
						// Intentionally let the error be thrown if parseHTML is not present
						jQuery.merge( this, jQuery.parseHTML(
							match[ 1 ],
							context && context.nodeType ? context.ownerDocument || context : document,
							true
						) );

						// HANDLE: $(html, props)
						if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
							for ( match in context ) {

								// Properties of context are called as methods if possible
								if ( jQuery.isFunction( this[ match ] ) ) {
									this[ match ]( context[ match ] );

								// ...and otherwise set as attributes
								} else {
									this.attr( match, context[ match ] );
								}
							}
						}

						return this;

					// HANDLE: $(#id)
					} else {
						elem = document.getElementById( match[ 2 ] );

						// Support: Blackberry 4.6
						// gEBID returns nodes no longer in the document (#6963)
						if ( elem && elem.parentNode ) {

							// Inject the element directly into the jQuery object
							this.length = 1;
							this[ 0 ] = elem;
						}

						this.context = document;
						this.selector = selector;
						return this;
					}

				// HANDLE: $(expr, $(...))
				} else if ( !context || context.jquery ) {
					return ( context || root ).find( selector );

				// HANDLE: $(expr, context)
				// (which is just equivalent to: $(context).find(expr)
				} else {
					return this.constructor( context ).find( selector );
				}

			// HANDLE: $(DOMElement)
			} else if ( selector.nodeType ) {
				this.context = this[ 0 ] = selector;
				this.length = 1;
				return this;

			// HANDLE: $(function)
			// Shortcut for document ready
			} else if ( jQuery.isFunction( selector ) ) {
				return root.ready !== undefined ?
					root.ready( selector ) :

					// Execute immediately if ready is not present
					selector( jQuery );
			}

			if ( selector.selector !== undefined ) {
				this.selector = selector.selector;
				this.context = selector.context;
			}

			return jQuery.makeArray( selector, this );
		};

	// Give the init function the jQuery prototype for later instantiation
	init.prototype = jQuery.fn;

	// Initialize central reference
	rootjQuery = jQuery( document );


	var rparentsprev = /^(?:parents|prev(?:Until|All))/,

		// Methods guaranteed to produce a unique set when starting from a unique set
		guaranteedUnique = {
			children: true,
			contents: true,
			next: true,
			prev: true
		};

	jQuery.fn.extend( {
		has: function( target ) {
			var targets = jQuery( target, this ),
				l = targets.length;

			return this.filter( function() {
				var i = 0;
				for ( ; i < l; i++ ) {
					if ( jQuery.contains( this, targets[ i ] ) ) {
						return true;
					}
				}
			} );
		},

		closest: function( selectors, context ) {
			var cur,
				i = 0,
				l = this.length,
				matched = [],
				pos = rneedsContext.test( selectors ) || typeof selectors !== "string" ?
					jQuery( selectors, context || this.context ) :
					0;

			for ( ; i < l; i++ ) {
				for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

					// Always skip document fragments
					if ( cur.nodeType < 11 && ( pos ?
						pos.index( cur ) > -1 :

						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, selectors ) ) ) {

						matched.push( cur );
						break;
					}
				}
			}

			return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
		},

		// Determine the position of an element within the set
		index: function( elem ) {

			// No argument, return index in parent
			if ( !elem ) {
				return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
			}

			// Index in selector
			if ( typeof elem === "string" ) {
				return indexOf.call( jQuery( elem ), this[ 0 ] );
			}

			// Locate the position of the desired element
			return indexOf.call( this,

				// If it receives a jQuery object, the first element is used
				elem.jquery ? elem[ 0 ] : elem
			);
		},

		add: function( selector, context ) {
			return this.pushStack(
				jQuery.uniqueSort(
					jQuery.merge( this.get(), jQuery( selector, context ) )
				)
			);
		},

		addBack: function( selector ) {
			return this.add( selector == null ?
				this.prevObject : this.prevObject.filter( selector )
			);
		}
	} );

	function sibling( cur, dir ) {
		while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
		return cur;
	}

	jQuery.each( {
		parent: function( elem ) {
			var parent = elem.parentNode;
			return parent && parent.nodeType !== 11 ? parent : null;
		},
		parents: function( elem ) {
			return dir( elem, "parentNode" );
		},
		parentsUntil: function( elem, i, until ) {
			return dir( elem, "parentNode", until );
		},
		next: function( elem ) {
			return sibling( elem, "nextSibling" );
		},
		prev: function( elem ) {
			return sibling( elem, "previousSibling" );
		},
		nextAll: function( elem ) {
			return dir( elem, "nextSibling" );
		},
		prevAll: function( elem ) {
			return dir( elem, "previousSibling" );
		},
		nextUntil: function( elem, i, until ) {
			return dir( elem, "nextSibling", until );
		},
		prevUntil: function( elem, i, until ) {
			return dir( elem, "previousSibling", until );
		},
		siblings: function( elem ) {
			return siblings( ( elem.parentNode || {} ).firstChild, elem );
		},
		children: function( elem ) {
			return siblings( elem.firstChild );
		},
		contents: function( elem ) {
			return elem.contentDocument || jQuery.merge( [], elem.childNodes );
		}
	}, function( name, fn ) {
		jQuery.fn[ name ] = function( until, selector ) {
			var matched = jQuery.map( this, fn, until );

			if ( name.slice( -5 ) !== "Until" ) {
				selector = until;
			}

			if ( selector && typeof selector === "string" ) {
				matched = jQuery.filter( selector, matched );
			}

			if ( this.length > 1 ) {

				// Remove duplicates
				if ( !guaranteedUnique[ name ] ) {
					jQuery.uniqueSort( matched );
				}

				// Reverse order for parents* and prev-derivatives
				if ( rparentsprev.test( name ) ) {
					matched.reverse();
				}
			}

			return this.pushStack( matched );
		};
	} );
	var rnotwhite = ( /\S+/g );



	// Convert String-formatted options into Object-formatted ones
	function createOptions( options ) {
		var object = {};
		jQuery.each( options.match( rnotwhite ) || [], function( _, flag ) {
			object[ flag ] = true;
		} );
		return object;
	}

	/*
	 * Create a callback list using the following parameters:
	 *
	 *	options: an optional list of space-separated options that will change how
	 *			the callback list behaves or a more traditional option object
	 *
	 * By default a callback list will act like an event callback list and can be
	 * "fired" multiple times.
	 *
	 * Possible options:
	 *
	 *	once:			will ensure the callback list can only be fired once (like a Deferred)
	 *
	 *	memory:			will keep track of previous values and will call any callback added
	 *					after the list has been fired right away with the latest "memorized"
	 *					values (like a Deferred)
	 *
	 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
	 *
	 *	stopOnFalse:	interrupt callings when a callback returns false
	 *
	 */
	jQuery.Callbacks = function( options ) {

		// Convert options from String-formatted to Object-formatted if needed
		// (we check in cache first)
		options = typeof options === "string" ?
			createOptions( options ) :
			jQuery.extend( {}, options );

		var // Flag to know if list is currently firing
			firing,

			// Last fire value for non-forgettable lists
			memory,

			// Flag to know if list was already fired
			fired,

			// Flag to prevent firing
			locked,

			// Actual callback list
			list = [],

			// Queue of execution data for repeatable lists
			queue = [],

			// Index of currently firing callback (modified by add/remove as needed)
			firingIndex = -1,

			// Fire callbacks
			fire = function() {

				// Enforce single-firing
				locked = options.once;

				// Execute callbacks for all pending executions,
				// respecting firingIndex overrides and runtime changes
				fired = firing = true;
				for ( ; queue.length; firingIndex = -1 ) {
					memory = queue.shift();
					while ( ++firingIndex < list.length ) {

						// Run callback and check for early termination
						if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
							options.stopOnFalse ) {

							// Jump to end and forget the data so .add doesn't re-fire
							firingIndex = list.length;
							memory = false;
						}
					}
				}

				// Forget the data if we're done with it
				if ( !options.memory ) {
					memory = false;
				}

				firing = false;

				// Clean up if we're done firing for good
				if ( locked ) {

					// Keep an empty list if we have data for future add calls
					if ( memory ) {
						list = [];

					// Otherwise, this object is spent
					} else {
						list = "";
					}
				}
			},

			// Actual Callbacks object
			self = {

				// Add a callback or a collection of callbacks to the list
				add: function() {
					if ( list ) {

						// If we have memory from a past run, we should fire after adding
						if ( memory && !firing ) {
							firingIndex = list.length - 1;
							queue.push( memory );
						}

						( function add( args ) {
							jQuery.each( args, function( _, arg ) {
								if ( jQuery.isFunction( arg ) ) {
									if ( !options.unique || !self.has( arg ) ) {
										list.push( arg );
									}
								} else if ( arg && arg.length && jQuery.type( arg ) !== "string" ) {

									// Inspect recursively
									add( arg );
								}
							} );
						} )( arguments );

						if ( memory && !firing ) {
							fire();
						}
					}
					return this;
				},

				// Remove a callback from the list
				remove: function() {
					jQuery.each( arguments, function( _, arg ) {
						var index;
						while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
							list.splice( index, 1 );

							// Handle firing indexes
							if ( index <= firingIndex ) {
								firingIndex--;
							}
						}
					} );
					return this;
				},

				// Check if a given callback is in the list.
				// If no argument is given, return whether or not list has callbacks attached.
				has: function( fn ) {
					return fn ?
						jQuery.inArray( fn, list ) > -1 :
						list.length > 0;
				},

				// Remove all callbacks from the list
				empty: function() {
					if ( list ) {
						list = [];
					}
					return this;
				},

				// Disable .fire and .add
				// Abort any current/pending executions
				// Clear all callbacks and values
				disable: function() {
					locked = queue = [];
					list = memory = "";
					return this;
				},
				disabled: function() {
					return !list;
				},

				// Disable .fire
				// Also disable .add unless we have memory (since it would have no effect)
				// Abort any pending executions
				lock: function() {
					locked = queue = [];
					if ( !memory ) {
						list = memory = "";
					}
					return this;
				},
				locked: function() {
					return !!locked;
				},

				// Call all callbacks with the given context and arguments
				fireWith: function( context, args ) {
					if ( !locked ) {
						args = args || [];
						args = [ context, args.slice ? args.slice() : args ];
						queue.push( args );
						if ( !firing ) {
							fire();
						}
					}
					return this;
				},

				// Call all the callbacks with the given arguments
				fire: function() {
					self.fireWith( this, arguments );
					return this;
				},

				// To know if the callbacks have already been called at least once
				fired: function() {
					return !!fired;
				}
			};

		return self;
	};


	jQuery.extend( {

		Deferred: function( func ) {
			var tuples = [

					// action, add listener, listener list, final state
					[ "resolve", "done", jQuery.Callbacks( "once memory" ), "resolved" ],
					[ "reject", "fail", jQuery.Callbacks( "once memory" ), "rejected" ],
					[ "notify", "progress", jQuery.Callbacks( "memory" ) ]
				],
				state = "pending",
				promise = {
					state: function() {
						return state;
					},
					always: function() {
						deferred.done( arguments ).fail( arguments );
						return this;
					},
					then: function( /* fnDone, fnFail, fnProgress */ ) {
						var fns = arguments;
						return jQuery.Deferred( function( newDefer ) {
							jQuery.each( tuples, function( i, tuple ) {
								var fn = jQuery.isFunction( fns[ i ] ) && fns[ i ];

								// deferred[ done | fail | progress ] for forwarding actions to newDefer
								deferred[ tuple[ 1 ] ]( function() {
									var returned = fn && fn.apply( this, arguments );
									if ( returned && jQuery.isFunction( returned.promise ) ) {
										returned.promise()
											.progress( newDefer.notify )
											.done( newDefer.resolve )
											.fail( newDefer.reject );
									} else {
										newDefer[ tuple[ 0 ] + "With" ](
											this === promise ? newDefer.promise() : this,
											fn ? [ returned ] : arguments
										);
									}
								} );
							} );
							fns = null;
						} ).promise();
					},

					// Get a promise for this deferred
					// If obj is provided, the promise aspect is added to the object
					promise: function( obj ) {
						return obj != null ? jQuery.extend( obj, promise ) : promise;
					}
				},
				deferred = {};

			// Keep pipe for back-compat
			promise.pipe = promise.then;

			// Add list-specific methods
			jQuery.each( tuples, function( i, tuple ) {
				var list = tuple[ 2 ],
					stateString = tuple[ 3 ];

				// promise[ done | fail | progress ] = list.add
				promise[ tuple[ 1 ] ] = list.add;

				// Handle state
				if ( stateString ) {
					list.add( function() {

						// state = [ resolved | rejected ]
						state = stateString;

					// [ reject_list | resolve_list ].disable; progress_list.lock
					}, tuples[ i ^ 1 ][ 2 ].disable, tuples[ 2 ][ 2 ].lock );
				}

				// deferred[ resolve | reject | notify ]
				deferred[ tuple[ 0 ] ] = function() {
					deferred[ tuple[ 0 ] + "With" ]( this === deferred ? promise : this, arguments );
					return this;
				};
				deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
			} );

			// Make the deferred a promise
			promise.promise( deferred );

			// Call given func if any
			if ( func ) {
				func.call( deferred, deferred );
			}

			// All done!
			return deferred;
		},

		// Deferred helper
		when: function( subordinate /* , ..., subordinateN */ ) {
			var i = 0,
				resolveValues = slice.call( arguments ),
				length = resolveValues.length,

				// the count of uncompleted subordinates
				remaining = length !== 1 ||
					( subordinate && jQuery.isFunction( subordinate.promise ) ) ? length : 0,

				// the master Deferred.
				// If resolveValues consist of only a single Deferred, just use that.
				deferred = remaining === 1 ? subordinate : jQuery.Deferred(),

				// Update function for both resolve and progress values
				updateFunc = function( i, contexts, values ) {
					return function( value ) {
						contexts[ i ] = this;
						values[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
						if ( values === progressValues ) {
							deferred.notifyWith( contexts, values );
						} else if ( !( --remaining ) ) {
							deferred.resolveWith( contexts, values );
						}
					};
				},

				progressValues, progressContexts, resolveContexts;

			// Add listeners to Deferred subordinates; treat others as resolved
			if ( length > 1 ) {
				progressValues = new Array( length );
				progressContexts = new Array( length );
				resolveContexts = new Array( length );
				for ( ; i < length; i++ ) {
					if ( resolveValues[ i ] && jQuery.isFunction( resolveValues[ i ].promise ) ) {
						resolveValues[ i ].promise()
							.progress( updateFunc( i, progressContexts, progressValues ) )
							.done( updateFunc( i, resolveContexts, resolveValues ) )
							.fail( deferred.reject );
					} else {
						--remaining;
					}
				}
			}

			// If we're not waiting on anything, resolve the master
			if ( !remaining ) {
				deferred.resolveWith( resolveContexts, resolveValues );
			}

			return deferred.promise();
		}
	} );


	// The deferred used on DOM ready
	var readyList;

	jQuery.fn.ready = function( fn ) {

		// Add the callback
		jQuery.ready.promise().done( fn );

		return this;
	};

	jQuery.extend( {

		// Is the DOM ready to be used? Set to true once it occurs.
		isReady: false,

		// A counter to track how many items to wait for before
		// the ready event fires. See #6781
		readyWait: 1,

		// Hold (or release) the ready event
		holdReady: function( hold ) {
			if ( hold ) {
				jQuery.readyWait++;
			} else {
				jQuery.ready( true );
			}
		},

		// Handle when the DOM is ready
		ready: function( wait ) {

			// Abort if there are pending holds or we're already ready
			if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
				return;
			}

			// Remember that the DOM is ready
			jQuery.isReady = true;

			// If a normal DOM Ready event fired, decrement, and wait if need be
			if ( wait !== true && --jQuery.readyWait > 0 ) {
				return;
			}

			// If there are functions bound, to execute
			readyList.resolveWith( document, [ jQuery ] );

			// Trigger any bound ready events
			if ( jQuery.fn.triggerHandler ) {
				jQuery( document ).triggerHandler( "ready" );
				jQuery( document ).off( "ready" );
			}
		}
	} );

	/**
	 * The ready event handler and self cleanup method
	 */
	function completed() {
		document.removeEventListener( "DOMContentLoaded", completed );
		window.removeEventListener( "load", completed );
		jQuery.ready();
	}

	jQuery.ready.promise = function( obj ) {
		if ( !readyList ) {

			readyList = jQuery.Deferred();

			// Catch cases where $(document).ready() is called
			// after the browser event has already occurred.
			// Support: IE9-10 only
			// Older IE sometimes signals "interactive" too soon
			if ( document.readyState === "complete" ||
				( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

				// Handle it asynchronously to allow scripts the opportunity to delay ready
				window.setTimeout( jQuery.ready );

			} else {

				// Use the handy event callback
				document.addEventListener( "DOMContentLoaded", completed );

				// A fallback to window.onload, that will always work
				window.addEventListener( "load", completed );
			}
		}
		return readyList.promise( obj );
	};

	// Kick off the DOM ready check even if the user does not
	jQuery.ready.promise();




	// Multifunctional method to get and set values of a collection
	// The value/s can optionally be executed if it's a function
	var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
		var i = 0,
			len = elems.length,
			bulk = key == null;

		// Sets many values
		if ( jQuery.type( key ) === "object" ) {
			chainable = true;
			for ( i in key ) {
				access( elems, fn, i, key[ i ], true, emptyGet, raw );
			}

		// Sets one value
		} else if ( value !== undefined ) {
			chainable = true;

			if ( !jQuery.isFunction( value ) ) {
				raw = true;
			}

			if ( bulk ) {

				// Bulk operations run against the entire set
				if ( raw ) {
					fn.call( elems, value );
					fn = null;

				// ...except when executing function values
				} else {
					bulk = fn;
					fn = function( elem, key, value ) {
						return bulk.call( jQuery( elem ), value );
					};
				}
			}

			if ( fn ) {
				for ( ; i < len; i++ ) {
					fn(
						elems[ i ], key, raw ?
						value :
						value.call( elems[ i ], i, fn( elems[ i ], key ) )
					);
				}
			}
		}

		return chainable ?
			elems :

			// Gets
			bulk ?
				fn.call( elems ) :
				len ? fn( elems[ 0 ], key ) : emptyGet;
	};
	var acceptData = function( owner ) {

		// Accepts only:
		//  - Node
		//    - Node.ELEMENT_NODE
		//    - Node.DOCUMENT_NODE
		//  - Object
		//    - Any
		/* jshint -W018 */
		return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
	};




	function Data() {
		this.expando = jQuery.expando + Data.uid++;
	}

	Data.uid = 1;

	Data.prototype = {

		register: function( owner, initial ) {
			var value = initial || {};

			// If it is a node unlikely to be stringify-ed or looped over
			// use plain assignment
			if ( owner.nodeType ) {
				owner[ this.expando ] = value;

			// Otherwise secure it in a non-enumerable, non-writable property
			// configurability must be true to allow the property to be
			// deleted with the delete operator
			} else {
				Object.defineProperty( owner, this.expando, {
					value: value,
					writable: true,
					configurable: true
				} );
			}
			return owner[ this.expando ];
		},
		cache: function( owner ) {

			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see #8335.
			// Always return an empty object.
			if ( !acceptData( owner ) ) {
				return {};
			}

			// Check if the owner object already has a cache
			var value = owner[ this.expando ];

			// If not, create one
			if ( !value ) {
				value = {};

				// We can accept data for non-element nodes in modern browsers,
				// but we should not, see #8335.
				// Always return an empty object.
				if ( acceptData( owner ) ) {

					// If it is a node unlikely to be stringify-ed or looped over
					// use plain assignment
					if ( owner.nodeType ) {
						owner[ this.expando ] = value;

					// Otherwise secure it in a non-enumerable property
					// configurable must be true to allow the property to be
					// deleted when data is removed
					} else {
						Object.defineProperty( owner, this.expando, {
							value: value,
							configurable: true
						} );
					}
				}
			}

			return value;
		},
		set: function( owner, data, value ) {
			var prop,
				cache = this.cache( owner );

			// Handle: [ owner, key, value ] args
			if ( typeof data === "string" ) {
				cache[ data ] = value;

			// Handle: [ owner, { properties } ] args
			} else {

				// Copy the properties one-by-one to the cache object
				for ( prop in data ) {
					cache[ prop ] = data[ prop ];
				}
			}
			return cache;
		},
		get: function( owner, key ) {
			return key === undefined ?
				this.cache( owner ) :
				owner[ this.expando ] && owner[ this.expando ][ key ];
		},
		access: function( owner, key, value ) {
			var stored;

			// In cases where either:
			//
			//   1. No key was specified
			//   2. A string key was specified, but no value provided
			//
			// Take the "read" path and allow the get method to determine
			// which value to return, respectively either:
			//
			//   1. The entire cache object
			//   2. The data stored at the key
			//
			if ( key === undefined ||
					( ( key && typeof key === "string" ) && value === undefined ) ) {

				stored = this.get( owner, key );

				return stored !== undefined ?
					stored : this.get( owner, jQuery.camelCase( key ) );
			}

			// When the key is not a string, or both a key and value
			// are specified, set or extend (existing objects) with either:
			//
			//   1. An object of properties
			//   2. A key and value
			//
			this.set( owner, key, value );

			// Since the "set" path can have two possible entry points
			// return the expected data based on which path was taken[*]
			return value !== undefined ? value : key;
		},
		remove: function( owner, key ) {
			var i, name, camel,
				cache = owner[ this.expando ];

			if ( cache === undefined ) {
				return;
			}

			if ( key === undefined ) {
				this.register( owner );

			} else {

				// Support array or space separated string of keys
				if ( jQuery.isArray( key ) ) {

					// If "name" is an array of keys...
					// When data is initially created, via ("key", "val") signature,
					// keys will be converted to camelCase.
					// Since there is no way to tell _how_ a key was added, remove
					// both plain key and camelCase key. #12786
					// This will only penalize the array argument path.
					name = key.concat( key.map( jQuery.camelCase ) );
				} else {
					camel = jQuery.camelCase( key );

					// Try the string as a key before any manipulation
					if ( key in cache ) {
						name = [ key, camel ];
					} else {

						// If a key with the spaces exists, use it.
						// Otherwise, create an array by matching non-whitespace
						name = camel;
						name = name in cache ?
							[ name ] : ( name.match( rnotwhite ) || [] );
					}
				}

				i = name.length;

				while ( i-- ) {
					delete cache[ name[ i ] ];
				}
			}

			// Remove the expando if there's no more data
			if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

				// Support: Chrome <= 35-45+
				// Webkit & Blink performance suffers when deleting properties
				// from DOM nodes, so set to undefined instead
				// https://code.google.com/p/chromium/issues/detail?id=378607
				if ( owner.nodeType ) {
					owner[ this.expando ] = undefined;
				} else {
					delete owner[ this.expando ];
				}
			}
		},
		hasData: function( owner ) {
			var cache = owner[ this.expando ];
			return cache !== undefined && !jQuery.isEmptyObject( cache );
		}
	};
	var dataPriv = new Data();

	var dataUser = new Data();



	//	Implementation Summary
	//
	//	1. Enforce API surface and semantic compatibility with 1.9.x branch
	//	2. Improve the module's maintainability by reducing the storage
	//		paths to a single mechanism.
	//	3. Use the same single mechanism to support "private" and "user" data.
	//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
	//	5. Avoid exposing implementation details on user objects (eg. expando properties)
	//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

	var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
		rmultiDash = /[A-Z]/g;

	function dataAttr( elem, key, data ) {
		var name;

		// If nothing was found internally, try to fetch any
		// data from the HTML5 data-* attribute
		if ( data === undefined && elem.nodeType === 1 ) {
			name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
			data = elem.getAttribute( name );

			if ( typeof data === "string" ) {
				try {
					data = data === "true" ? true :
						data === "false" ? false :
						data === "null" ? null :

						// Only convert to a number if it doesn't change the string
						+data + "" === data ? +data :
						rbrace.test( data ) ? jQuery.parseJSON( data ) :
						data;
				} catch ( e ) {}

				// Make sure we set the data so it isn't changed later
				dataUser.set( elem, key, data );
			} else {
				data = undefined;
			}
		}
		return data;
	}

	jQuery.extend( {
		hasData: function( elem ) {
			return dataUser.hasData( elem ) || dataPriv.hasData( elem );
		},

		data: function( elem, name, data ) {
			return dataUser.access( elem, name, data );
		},

		removeData: function( elem, name ) {
			dataUser.remove( elem, name );
		},

		// TODO: Now that all calls to _data and _removeData have been replaced
		// with direct calls to dataPriv methods, these can be deprecated.
		_data: function( elem, name, data ) {
			return dataPriv.access( elem, name, data );
		},

		_removeData: function( elem, name ) {
			dataPriv.remove( elem, name );
		}
	} );

	jQuery.fn.extend( {
		data: function( key, value ) {
			var i, name, data,
				elem = this[ 0 ],
				attrs = elem && elem.attributes;

			// Gets all values
			if ( key === undefined ) {
				if ( this.length ) {
					data = dataUser.get( elem );

					if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
						i = attrs.length;
						while ( i-- ) {

							// Support: IE11+
							// The attrs elements can be null (#14894)
							if ( attrs[ i ] ) {
								name = attrs[ i ].name;
								if ( name.indexOf( "data-" ) === 0 ) {
									name = jQuery.camelCase( name.slice( 5 ) );
									dataAttr( elem, name, data[ name ] );
								}
							}
						}
						dataPriv.set( elem, "hasDataAttrs", true );
					}
				}

				return data;
			}

			// Sets multiple values
			if ( typeof key === "object" ) {
				return this.each( function() {
					dataUser.set( this, key );
				} );
			}

			return access( this, function( value ) {
				var data, camelKey;

				// The calling jQuery object (element matches) is not empty
				// (and therefore has an element appears at this[ 0 ]) and the
				// `value` parameter was not undefined. An empty jQuery object
				// will result in `undefined` for elem = this[ 0 ] which will
				// throw an exception if an attempt to read a data cache is made.
				if ( elem && value === undefined ) {

					// Attempt to get data from the cache
					// with the key as-is
					data = dataUser.get( elem, key ) ||

						// Try to find dashed key if it exists (gh-2779)
						// This is for 2.2.x only
						dataUser.get( elem, key.replace( rmultiDash, "-$&" ).toLowerCase() );

					if ( data !== undefined ) {
						return data;
					}

					camelKey = jQuery.camelCase( key );

					// Attempt to get data from the cache
					// with the key camelized
					data = dataUser.get( elem, camelKey );
					if ( data !== undefined ) {
						return data;
					}

					// Attempt to "discover" the data in
					// HTML5 custom data-* attrs
					data = dataAttr( elem, camelKey, undefined );
					if ( data !== undefined ) {
						return data;
					}

					// We tried really hard, but the data doesn't exist.
					return;
				}

				// Set the data...
				camelKey = jQuery.camelCase( key );
				this.each( function() {

					// First, attempt to store a copy or reference of any
					// data that might've been store with a camelCased key.
					var data = dataUser.get( this, camelKey );

					// For HTML5 data-* attribute interop, we have to
					// store property names with dashes in a camelCase form.
					// This might not apply to all properties...*
					dataUser.set( this, camelKey, value );

					// *... In the case of properties that might _actually_
					// have dashes, we need to also store a copy of that
					// unchanged property.
					if ( key.indexOf( "-" ) > -1 && data !== undefined ) {
						dataUser.set( this, key, value );
					}
				} );
			}, null, value, arguments.length > 1, null, true );
		},

		removeData: function( key ) {
			return this.each( function() {
				dataUser.remove( this, key );
			} );
		}
	} );


	jQuery.extend( {
		queue: function( elem, type, data ) {
			var queue;

			if ( elem ) {
				type = ( type || "fx" ) + "queue";
				queue = dataPriv.get( elem, type );

				// Speed up dequeue by getting out quickly if this is just a lookup
				if ( data ) {
					if ( !queue || jQuery.isArray( data ) ) {
						queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
					} else {
						queue.push( data );
					}
				}
				return queue || [];
			}
		},

		dequeue: function( elem, type ) {
			type = type || "fx";

			var queue = jQuery.queue( elem, type ),
				startLength = queue.length,
				fn = queue.shift(),
				hooks = jQuery._queueHooks( elem, type ),
				next = function() {
					jQuery.dequeue( elem, type );
				};

			// If the fx queue is dequeued, always remove the progress sentinel
			if ( fn === "inprogress" ) {
				fn = queue.shift();
				startLength--;
			}

			if ( fn ) {

				// Add a progress sentinel to prevent the fx queue from being
				// automatically dequeued
				if ( type === "fx" ) {
					queue.unshift( "inprogress" );
				}

				// Clear up the last queue stop function
				delete hooks.stop;
				fn.call( elem, next, hooks );
			}

			if ( !startLength && hooks ) {
				hooks.empty.fire();
			}
		},

		// Not public - generate a queueHooks object, or return the current one
		_queueHooks: function( elem, type ) {
			var key = type + "queueHooks";
			return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
				empty: jQuery.Callbacks( "once memory" ).add( function() {
					dataPriv.remove( elem, [ type + "queue", key ] );
				} )
			} );
		}
	} );

	jQuery.fn.extend( {
		queue: function( type, data ) {
			var setter = 2;

			if ( typeof type !== "string" ) {
				data = type;
				type = "fx";
				setter--;
			}

			if ( arguments.length < setter ) {
				return jQuery.queue( this[ 0 ], type );
			}

			return data === undefined ?
				this :
				this.each( function() {
					var queue = jQuery.queue( this, type, data );

					// Ensure a hooks for this queue
					jQuery._queueHooks( this, type );

					if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
						jQuery.dequeue( this, type );
					}
				} );
		},
		dequeue: function( type ) {
			return this.each( function() {
				jQuery.dequeue( this, type );
			} );
		},
		clearQueue: function( type ) {
			return this.queue( type || "fx", [] );
		},

		// Get a promise resolved when queues of a certain type
		// are emptied (fx is the type by default)
		promise: function( type, obj ) {
			var tmp,
				count = 1,
				defer = jQuery.Deferred(),
				elements = this,
				i = this.length,
				resolve = function() {
					if ( !( --count ) ) {
						defer.resolveWith( elements, [ elements ] );
					}
				};

			if ( typeof type !== "string" ) {
				obj = type;
				type = undefined;
			}
			type = type || "fx";

			while ( i-- ) {
				tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
				if ( tmp && tmp.empty ) {
					count++;
					tmp.empty.add( resolve );
				}
			}
			resolve();
			return defer.promise( obj );
		}
	} );
	var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

	var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


	var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

	var isHidden = function( elem, el ) {

			// isHidden might be called from jQuery#filter function;
			// in that case, element will be second argument
			elem = el || elem;
			return jQuery.css( elem, "display" ) === "none" ||
				!jQuery.contains( elem.ownerDocument, elem );
		};



	function adjustCSS( elem, prop, valueParts, tween ) {
		var adjusted,
			scale = 1,
			maxIterations = 20,
			currentValue = tween ?
				function() { return tween.cur(); } :
				function() { return jQuery.css( elem, prop, "" ); },
			initial = currentValue(),
			unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

			// Starting value computation is required for potential unit mismatches
			initialInUnit = ( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
				rcssNum.exec( jQuery.css( elem, prop ) );

		if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

			// Trust units reported by jQuery.css
			unit = unit || initialInUnit[ 3 ];

			// Make sure we update the tween properties later on
			valueParts = valueParts || [];

			// Iteratively approximate from a nonzero starting point
			initialInUnit = +initial || 1;

			do {

				// If previous iteration zeroed out, double until we get *something*.
				// Use string for doubling so we don't accidentally see scale as unchanged below
				scale = scale || ".5";

				// Adjust and apply
				initialInUnit = initialInUnit / scale;
				jQuery.style( elem, prop, initialInUnit + unit );

			// Update scale, tolerating zero or NaN from tween.cur()
			// Break the loop if scale is unchanged or perfect, or if we've just had enough.
			} while (
				scale !== ( scale = currentValue() / initial ) && scale !== 1 && --maxIterations
			);
		}

		if ( valueParts ) {
			initialInUnit = +initialInUnit || +initial || 0;

			// Apply relative offset (+=/-=) if specified
			adjusted = valueParts[ 1 ] ?
				initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
				+valueParts[ 2 ];
			if ( tween ) {
				tween.unit = unit;
				tween.start = initialInUnit;
				tween.end = adjusted;
			}
		}
		return adjusted;
	}
	var rcheckableType = ( /^(?:checkbox|radio)$/i );

	var rtagName = ( /<([\w:-]+)/ );

	var rscriptType = ( /^$|\/(?:java|ecma)script/i );



	// We have to close these tags to support XHTML (#13200)
	var wrapMap = {

		// Support: IE9
		option: [ 1, "<select multiple='multiple'>", "</select>" ],

		// XHTML parsers do not magically insert elements in the
		// same way that tag soup parsers do. So we cannot shorten
		// this by omitting <tbody> or other required elements.
		thead: [ 1, "<table>", "</table>" ],
		col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
		tr: [ 2, "<table><tbody>", "</tbody></table>" ],
		td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

		_default: [ 0, "", "" ]
	};

	// Support: IE9
	wrapMap.optgroup = wrapMap.option;

	wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
	wrapMap.th = wrapMap.td;


	function getAll( context, tag ) {

		// Support: IE9-11+
		// Use typeof to avoid zero-argument method invocation on host objects (#15151)
		var ret = typeof context.getElementsByTagName !== "undefined" ?
				context.getElementsByTagName( tag || "*" ) :
				typeof context.querySelectorAll !== "undefined" ?
					context.querySelectorAll( tag || "*" ) :
				[];

		return tag === undefined || tag && jQuery.nodeName( context, tag ) ?
			jQuery.merge( [ context ], ret ) :
			ret;
	}


	// Mark scripts as having already been evaluated
	function setGlobalEval( elems, refElements ) {
		var i = 0,
			l = elems.length;

		for ( ; i < l; i++ ) {
			dataPriv.set(
				elems[ i ],
				"globalEval",
				!refElements || dataPriv.get( refElements[ i ], "globalEval" )
			);
		}
	}


	var rhtml = /<|&#?\w+;/;

	function buildFragment( elems, context, scripts, selection, ignored ) {
		var elem, tmp, tag, wrap, contains, j,
			fragment = context.createDocumentFragment(),
			nodes = [],
			i = 0,
			l = elems.length;

		for ( ; i < l; i++ ) {
			elem = elems[ i ];

			if ( elem || elem === 0 ) {

				// Add nodes directly
				if ( jQuery.type( elem ) === "object" ) {

					// Support: Android<4.1, PhantomJS<2
					// push.apply(_, arraylike) throws on ancient WebKit
					jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

				// Convert non-html into a text node
				} else if ( !rhtml.test( elem ) ) {
					nodes.push( context.createTextNode( elem ) );

				// Convert html into DOM nodes
				} else {
					tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

					// Deserialize a standard representation
					tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
					wrap = wrapMap[ tag ] || wrapMap._default;
					tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

					// Descend through wrappers to the right content
					j = wrap[ 0 ];
					while ( j-- ) {
						tmp = tmp.lastChild;
					}

					// Support: Android<4.1, PhantomJS<2
					// push.apply(_, arraylike) throws on ancient WebKit
					jQuery.merge( nodes, tmp.childNodes );

					// Remember the top-level container
					tmp = fragment.firstChild;

					// Ensure the created nodes are orphaned (#12392)
					tmp.textContent = "";
				}
			}
		}

		// Remove wrapper from fragment
		fragment.textContent = "";

		i = 0;
		while ( ( elem = nodes[ i++ ] ) ) {

			// Skip elements already in the context collection (trac-4087)
			if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
				if ( ignored ) {
					ignored.push( elem );
				}
				continue;
			}

			contains = jQuery.contains( elem.ownerDocument, elem );

			// Append to fragment
			tmp = getAll( fragment.appendChild( elem ), "script" );

			// Preserve script evaluation history
			if ( contains ) {
				setGlobalEval( tmp );
			}

			// Capture executables
			if ( scripts ) {
				j = 0;
				while ( ( elem = tmp[ j++ ] ) ) {
					if ( rscriptType.test( elem.type || "" ) ) {
						scripts.push( elem );
					}
				}
			}
		}

		return fragment;
	}


	( function() {
		var fragment = document.createDocumentFragment(),
			div = fragment.appendChild( document.createElement( "div" ) ),
			input = document.createElement( "input" );

		// Support: Android 4.0-4.3, Safari<=5.1
		// Check state lost if the name is set (#11217)
		// Support: Windows Web Apps (WWA)
		// `name` and `type` must use .setAttribute for WWA (#14901)
		input.setAttribute( "type", "radio" );
		input.setAttribute( "checked", "checked" );
		input.setAttribute( "name", "t" );

		div.appendChild( input );

		// Support: Safari<=5.1, Android<4.2
		// Older WebKit doesn't clone checked state correctly in fragments
		support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

		// Support: IE<=11+
		// Make sure textarea (and checkbox) defaultValue is properly cloned
		div.innerHTML = "<textarea>x</textarea>";
		support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
	} )();


	var
		rkeyEvent = /^key/,
		rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
		rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

	function returnTrue() {
		return true;
	}

	function returnFalse() {
		return false;
	}

	// Support: IE9
	// See #13393 for more info
	function safeActiveElement() {
		try {
			return document.activeElement;
		} catch ( err ) { }
	}

	function on( elem, types, selector, data, fn, one ) {
		var origFn, type;

		// Types can be a map of types/handlers
		if ( typeof types === "object" ) {

			// ( types-Object, selector, data )
			if ( typeof selector !== "string" ) {

				// ( types-Object, data )
				data = data || selector;
				selector = undefined;
			}
			for ( type in types ) {
				on( elem, type, selector, data, types[ type ], one );
			}
			return elem;
		}

		if ( data == null && fn == null ) {

			// ( types, fn )
			fn = selector;
			data = selector = undefined;
		} else if ( fn == null ) {
			if ( typeof selector === "string" ) {

				// ( types, selector, fn )
				fn = data;
				data = undefined;
			} else {

				// ( types, data, fn )
				fn = data;
				data = selector;
				selector = undefined;
			}
		}
		if ( fn === false ) {
			fn = returnFalse;
		} else if ( !fn ) {
			return elem;
		}

		if ( one === 1 ) {
			origFn = fn;
			fn = function( event ) {

				// Can use an empty set, since event contains the info
				jQuery().off( event );
				return origFn.apply( this, arguments );
			};

			// Use same guid so caller can remove using origFn
			fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
		}
		return elem.each( function() {
			jQuery.event.add( this, types, fn, data, selector );
		} );
	}

	/*
	 * Helper functions for managing events -- not part of the public interface.
	 * Props to Dean Edwards' addEvent library for many of the ideas.
	 */
	jQuery.event = {

		global: {},

		add: function( elem, types, handler, data, selector ) {

			var handleObjIn, eventHandle, tmp,
				events, t, handleObj,
				special, handlers, type, namespaces, origType,
				elemData = dataPriv.get( elem );

			// Don't attach events to noData or text/comment nodes (but allow plain objects)
			if ( !elemData ) {
				return;
			}

			// Caller can pass in an object of custom data in lieu of the handler
			if ( handler.handler ) {
				handleObjIn = handler;
				handler = handleObjIn.handler;
				selector = handleObjIn.selector;
			}

			// Make sure that the handler has a unique ID, used to find/remove it later
			if ( !handler.guid ) {
				handler.guid = jQuery.guid++;
			}

			// Init the element's event structure and main handler, if this is the first
			if ( !( events = elemData.events ) ) {
				events = elemData.events = {};
			}
			if ( !( eventHandle = elemData.handle ) ) {
				eventHandle = elemData.handle = function( e ) {

					// Discard the second event of a jQuery.event.trigger() and
					// when an event is called after a page has unloaded
					return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
						jQuery.event.dispatch.apply( elem, arguments ) : undefined;
				};
			}

			// Handle multiple events separated by a space
			types = ( types || "" ).match( rnotwhite ) || [ "" ];
			t = types.length;
			while ( t-- ) {
				tmp = rtypenamespace.exec( types[ t ] ) || [];
				type = origType = tmp[ 1 ];
				namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

				// There *must* be a type, no attaching namespace-only handlers
				if ( !type ) {
					continue;
				}

				// If event changes its type, use the special event handlers for the changed type
				special = jQuery.event.special[ type ] || {};

				// If selector defined, determine special event api type, otherwise given type
				type = ( selector ? special.delegateType : special.bindType ) || type;

				// Update special based on newly reset type
				special = jQuery.event.special[ type ] || {};

				// handleObj is passed to all event handlers
				handleObj = jQuery.extend( {
					type: type,
					origType: origType,
					data: data,
					handler: handler,
					guid: handler.guid,
					selector: selector,
					needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
					namespace: namespaces.join( "." )
				}, handleObjIn );

				// Init the event handler queue if we're the first
				if ( !( handlers = events[ type ] ) ) {
					handlers = events[ type ] = [];
					handlers.delegateCount = 0;

					// Only use addEventListener if the special events handler returns false
					if ( !special.setup ||
						special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

						if ( elem.addEventListener ) {
							elem.addEventListener( type, eventHandle );
						}
					}
				}

				if ( special.add ) {
					special.add.call( elem, handleObj );

					if ( !handleObj.handler.guid ) {
						handleObj.handler.guid = handler.guid;
					}
				}

				// Add to the element's handler list, delegates in front
				if ( selector ) {
					handlers.splice( handlers.delegateCount++, 0, handleObj );
				} else {
					handlers.push( handleObj );
				}

				// Keep track of which events have ever been used, for event optimization
				jQuery.event.global[ type ] = true;
			}

		},

		// Detach an event or set of events from an element
		remove: function( elem, types, handler, selector, mappedTypes ) {

			var j, origCount, tmp,
				events, t, handleObj,
				special, handlers, type, namespaces, origType,
				elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

			if ( !elemData || !( events = elemData.events ) ) {
				return;
			}

			// Once for each type.namespace in types; type may be omitted
			types = ( types || "" ).match( rnotwhite ) || [ "" ];
			t = types.length;
			while ( t-- ) {
				tmp = rtypenamespace.exec( types[ t ] ) || [];
				type = origType = tmp[ 1 ];
				namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

				// Unbind all events (on this namespace, if provided) for the element
				if ( !type ) {
					for ( type in events ) {
						jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
					}
					continue;
				}

				special = jQuery.event.special[ type ] || {};
				type = ( selector ? special.delegateType : special.bindType ) || type;
				handlers = events[ type ] || [];
				tmp = tmp[ 2 ] &&
					new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

				// Remove matching events
				origCount = j = handlers.length;
				while ( j-- ) {
					handleObj = handlers[ j ];

					if ( ( mappedTypes || origType === handleObj.origType ) &&
						( !handler || handler.guid === handleObj.guid ) &&
						( !tmp || tmp.test( handleObj.namespace ) ) &&
						( !selector || selector === handleObj.selector ||
							selector === "**" && handleObj.selector ) ) {
						handlers.splice( j, 1 );

						if ( handleObj.selector ) {
							handlers.delegateCount--;
						}
						if ( special.remove ) {
							special.remove.call( elem, handleObj );
						}
					}
				}

				// Remove generic event handler if we removed something and no more handlers exist
				// (avoids potential for endless recursion during removal of special event handlers)
				if ( origCount && !handlers.length ) {
					if ( !special.teardown ||
						special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

						jQuery.removeEvent( elem, type, elemData.handle );
					}

					delete events[ type ];
				}
			}

			// Remove data and the expando if it's no longer used
			if ( jQuery.isEmptyObject( events ) ) {
				dataPriv.remove( elem, "handle events" );
			}
		},

		dispatch: function( event ) {

			// Make a writable jQuery.Event from the native event object
			event = jQuery.event.fix( event );

			var i, j, ret, matched, handleObj,
				handlerQueue = [],
				args = slice.call( arguments ),
				handlers = ( dataPriv.get( this, "events" ) || {} )[ event.type ] || [],
				special = jQuery.event.special[ event.type ] || {};

			// Use the fix-ed jQuery.Event rather than the (read-only) native event
			args[ 0 ] = event;
			event.delegateTarget = this;

			// Call the preDispatch hook for the mapped type, and let it bail if desired
			if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
				return;
			}

			// Determine handlers
			handlerQueue = jQuery.event.handlers.call( this, event, handlers );

			// Run delegates first; they may want to stop propagation beneath us
			i = 0;
			while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
				event.currentTarget = matched.elem;

				j = 0;
				while ( ( handleObj = matched.handlers[ j++ ] ) &&
					!event.isImmediatePropagationStopped() ) {

					// Triggered event must either 1) have no namespace, or 2) have namespace(s)
					// a subset or equal to those in the bound event (both can have no namespace).
					if ( !event.rnamespace || event.rnamespace.test( handleObj.namespace ) ) {

						event.handleObj = handleObj;
						event.data = handleObj.data;

						ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
							handleObj.handler ).apply( matched.elem, args );

						if ( ret !== undefined ) {
							if ( ( event.result = ret ) === false ) {
								event.preventDefault();
								event.stopPropagation();
							}
						}
					}
				}
			}

			// Call the postDispatch hook for the mapped type
			if ( special.postDispatch ) {
				special.postDispatch.call( this, event );
			}

			return event.result;
		},

		handlers: function( event, handlers ) {
			var i, matches, sel, handleObj,
				handlerQueue = [],
				delegateCount = handlers.delegateCount,
				cur = event.target;

			// Support (at least): Chrome, IE9
			// Find delegate handlers
			// Black-hole SVG <use> instance trees (#13180)
			//
			// Support: Firefox<=42+
			// Avoid non-left-click in FF but don't block IE radio events (#3861, gh-2343)
			if ( delegateCount && cur.nodeType &&
				( event.type !== "click" || isNaN( event.button ) || event.button < 1 ) ) {

				for ( ; cur !== this; cur = cur.parentNode || this ) {

					// Don't check non-elements (#13208)
					// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
					if ( cur.nodeType === 1 && ( cur.disabled !== true || event.type !== "click" ) ) {
						matches = [];
						for ( i = 0; i < delegateCount; i++ ) {
							handleObj = handlers[ i ];

							// Don't conflict with Object.prototype properties (#13203)
							sel = handleObj.selector + " ";

							if ( matches[ sel ] === undefined ) {
								matches[ sel ] = handleObj.needsContext ?
									jQuery( sel, this ).index( cur ) > -1 :
									jQuery.find( sel, this, null, [ cur ] ).length;
							}
							if ( matches[ sel ] ) {
								matches.push( handleObj );
							}
						}
						if ( matches.length ) {
							handlerQueue.push( { elem: cur, handlers: matches } );
						}
					}
				}
			}

			// Add the remaining (directly-bound) handlers
			if ( delegateCount < handlers.length ) {
				handlerQueue.push( { elem: this, handlers: handlers.slice( delegateCount ) } );
			}

			return handlerQueue;
		},

		// Includes some event props shared by KeyEvent and MouseEvent
		props: ( "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase " +
			"metaKey relatedTarget shiftKey target timeStamp view which" ).split( " " ),

		fixHooks: {},

		keyHooks: {
			props: "char charCode key keyCode".split( " " ),
			filter: function( event, original ) {

				// Add which for key events
				if ( event.which == null ) {
					event.which = original.charCode != null ? original.charCode : original.keyCode;
				}

				return event;
			}
		},

		mouseHooks: {
			props: ( "button buttons clientX clientY offsetX offsetY pageX pageY " +
				"screenX screenY toElement" ).split( " " ),
			filter: function( event, original ) {
				var eventDoc, doc, body,
					button = original.button;

				// Calculate pageX/Y if missing and clientX/Y available
				if ( event.pageX == null && original.clientX != null ) {
					eventDoc = event.target.ownerDocument || document;
					doc = eventDoc.documentElement;
					body = eventDoc.body;

					event.pageX = original.clientX +
						( doc && doc.scrollLeft || body && body.scrollLeft || 0 ) -
						( doc && doc.clientLeft || body && body.clientLeft || 0 );
					event.pageY = original.clientY +
						( doc && doc.scrollTop  || body && body.scrollTop  || 0 ) -
						( doc && doc.clientTop  || body && body.clientTop  || 0 );
				}

				// Add which for click: 1 === left; 2 === middle; 3 === right
				// Note: button is not normalized, so don't use it
				if ( !event.which && button !== undefined ) {
					event.which = ( button & 1 ? 1 : ( button & 2 ? 3 : ( button & 4 ? 2 : 0 ) ) );
				}

				return event;
			}
		},

		fix: function( event ) {
			if ( event[ jQuery.expando ] ) {
				return event;
			}

			// Create a writable copy of the event object and normalize some properties
			var i, prop, copy,
				type = event.type,
				originalEvent = event,
				fixHook = this.fixHooks[ type ];

			if ( !fixHook ) {
				this.fixHooks[ type ] = fixHook =
					rmouseEvent.test( type ) ? this.mouseHooks :
					rkeyEvent.test( type ) ? this.keyHooks :
					{};
			}
			copy = fixHook.props ? this.props.concat( fixHook.props ) : this.props;

			event = new jQuery.Event( originalEvent );

			i = copy.length;
			while ( i-- ) {
				prop = copy[ i ];
				event[ prop ] = originalEvent[ prop ];
			}

			// Support: Cordova 2.5 (WebKit) (#13255)
			// All events should have a target; Cordova deviceready doesn't
			if ( !event.target ) {
				event.target = document;
			}

			// Support: Safari 6.0+, Chrome<28
			// Target should not be a text node (#504, #13143)
			if ( event.target.nodeType === 3 ) {
				event.target = event.target.parentNode;
			}

			return fixHook.filter ? fixHook.filter( event, originalEvent ) : event;
		},

		special: {
			load: {

				// Prevent triggered image.load events from bubbling to window.load
				noBubble: true
			},
			focus: {

				// Fire native event if possible so blur/focus sequence is correct
				trigger: function() {
					if ( this !== safeActiveElement() && this.focus ) {
						this.focus();
						return false;
					}
				},
				delegateType: "focusin"
			},
			blur: {
				trigger: function() {
					if ( this === safeActiveElement() && this.blur ) {
						this.blur();
						return false;
					}
				},
				delegateType: "focusout"
			},
			click: {

				// For checkbox, fire native event so checked state will be right
				trigger: function() {
					if ( this.type === "checkbox" && this.click && jQuery.nodeName( this, "input" ) ) {
						this.click();
						return false;
					}
				},

				// For cross-browser consistency, don't fire native .click() on links
				_default: function( event ) {
					return jQuery.nodeName( event.target, "a" );
				}
			},

			beforeunload: {
				postDispatch: function( event ) {

					// Support: Firefox 20+
					// Firefox doesn't alert if the returnValue field is not set.
					if ( event.result !== undefined && event.originalEvent ) {
						event.originalEvent.returnValue = event.result;
					}
				}
			}
		}
	};

	jQuery.removeEvent = function( elem, type, handle ) {

		// This "if" is needed for plain objects
		if ( elem.removeEventListener ) {
			elem.removeEventListener( type, handle );
		}
	};

	jQuery.Event = function( src, props ) {

		// Allow instantiation without the 'new' keyword
		if ( !( this instanceof jQuery.Event ) ) {
			return new jQuery.Event( src, props );
		}

		// Event object
		if ( src && src.type ) {
			this.originalEvent = src;
			this.type = src.type;

			// Events bubbling up the document may have been marked as prevented
			// by a handler lower down the tree; reflect the correct value.
			this.isDefaultPrevented = src.defaultPrevented ||
					src.defaultPrevented === undefined &&

					// Support: Android<4.0
					src.returnValue === false ?
				returnTrue :
				returnFalse;

		// Event type
		} else {
			this.type = src;
		}

		// Put explicitly provided properties onto the event object
		if ( props ) {
			jQuery.extend( this, props );
		}

		// Create a timestamp if incoming event doesn't have one
		this.timeStamp = src && src.timeStamp || jQuery.now();

		// Mark it as fixed
		this[ jQuery.expando ] = true;
	};

	// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
	// http://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
	jQuery.Event.prototype = {
		constructor: jQuery.Event,
		isDefaultPrevented: returnFalse,
		isPropagationStopped: returnFalse,
		isImmediatePropagationStopped: returnFalse,

		preventDefault: function() {
			var e = this.originalEvent;

			this.isDefaultPrevented = returnTrue;

			if ( e ) {
				e.preventDefault();
			}
		},
		stopPropagation: function() {
			var e = this.originalEvent;

			this.isPropagationStopped = returnTrue;

			if ( e ) {
				e.stopPropagation();
			}
		},
		stopImmediatePropagation: function() {
			var e = this.originalEvent;

			this.isImmediatePropagationStopped = returnTrue;

			if ( e ) {
				e.stopImmediatePropagation();
			}

			this.stopPropagation();
		}
	};

	// Create mouseenter/leave events using mouseover/out and event-time checks
	// so that event delegation works in jQuery.
	// Do the same for pointerenter/pointerleave and pointerover/pointerout
	//
	// Support: Safari 7 only
	// Safari sends mouseenter too often; see:
	// https://code.google.com/p/chromium/issues/detail?id=470258
	// for the description of the bug (it existed in older Chrome versions as well).
	jQuery.each( {
		mouseenter: "mouseover",
		mouseleave: "mouseout",
		pointerenter: "pointerover",
		pointerleave: "pointerout"
	}, function( orig, fix ) {
		jQuery.event.special[ orig ] = {
			delegateType: fix,
			bindType: fix,

			handle: function( event ) {
				var ret,
					target = this,
					related = event.relatedTarget,
					handleObj = event.handleObj;

				// For mouseenter/leave call the handler if related is outside the target.
				// NB: No relatedTarget if the mouse left/entered the browser window
				if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
					event.type = handleObj.origType;
					ret = handleObj.handler.apply( this, arguments );
					event.type = fix;
				}
				return ret;
			}
		};
	} );

	jQuery.fn.extend( {
		on: function( types, selector, data, fn ) {
			return on( this, types, selector, data, fn );
		},
		one: function( types, selector, data, fn ) {
			return on( this, types, selector, data, fn, 1 );
		},
		off: function( types, selector, fn ) {
			var handleObj, type;
			if ( types && types.preventDefault && types.handleObj ) {

				// ( event )  dispatched jQuery.Event
				handleObj = types.handleObj;
				jQuery( types.delegateTarget ).off(
					handleObj.namespace ?
						handleObj.origType + "." + handleObj.namespace :
						handleObj.origType,
					handleObj.selector,
					handleObj.handler
				);
				return this;
			}
			if ( typeof types === "object" ) {

				// ( types-object [, selector] )
				for ( type in types ) {
					this.off( type, selector, types[ type ] );
				}
				return this;
			}
			if ( selector === false || typeof selector === "function" ) {

				// ( types [, fn] )
				fn = selector;
				selector = undefined;
			}
			if ( fn === false ) {
				fn = returnFalse;
			}
			return this.each( function() {
				jQuery.event.remove( this, types, fn, selector );
			} );
		}
	} );


	var
		rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,

		// Support: IE 10-11, Edge 10240+
		// In IE/Edge using regex groups here causes severe slowdowns.
		// See https://connect.microsoft.com/IE/feedback/details/1736512/
		rnoInnerhtml = /<script|<style|<link/i,

		// checked="checked" or checked
		rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
		rscriptTypeMasked = /^true\/(.*)/,
		rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

	// Manipulating tables requires a tbody
	function manipulationTarget( elem, content ) {
		return jQuery.nodeName( elem, "table" ) &&
			jQuery.nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ?

			elem.getElementsByTagName( "tbody" )[ 0 ] ||
				elem.appendChild( elem.ownerDocument.createElement( "tbody" ) ) :
			elem;
	}

	// Replace/restore the type attribute of script elements for safe DOM manipulation
	function disableScript( elem ) {
		elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
		return elem;
	}
	function restoreScript( elem ) {
		var match = rscriptTypeMasked.exec( elem.type );

		if ( match ) {
			elem.type = match[ 1 ];
		} else {
			elem.removeAttribute( "type" );
		}

		return elem;
	}

	function cloneCopyEvent( src, dest ) {
		var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

		if ( dest.nodeType !== 1 ) {
			return;
		}

		// 1. Copy private data: events, handlers, etc.
		if ( dataPriv.hasData( src ) ) {
			pdataOld = dataPriv.access( src );
			pdataCur = dataPriv.set( dest, pdataOld );
			events = pdataOld.events;

			if ( events ) {
				delete pdataCur.handle;
				pdataCur.events = {};

				for ( type in events ) {
					for ( i = 0, l = events[ type ].length; i < l; i++ ) {
						jQuery.event.add( dest, type, events[ type ][ i ] );
					}
				}
			}
		}

		// 2. Copy user data
		if ( dataUser.hasData( src ) ) {
			udataOld = dataUser.access( src );
			udataCur = jQuery.extend( {}, udataOld );

			dataUser.set( dest, udataCur );
		}
	}

	// Fix IE bugs, see support tests
	function fixInput( src, dest ) {
		var nodeName = dest.nodeName.toLowerCase();

		// Fails to persist the checked state of a cloned checkbox or radio button.
		if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
			dest.checked = src.checked;

		// Fails to return the selected option to the default selected state when cloning options
		} else if ( nodeName === "input" || nodeName === "textarea" ) {
			dest.defaultValue = src.defaultValue;
		}
	}

	function domManip( collection, args, callback, ignored ) {

		// Flatten any nested arrays
		args = concat.apply( [], args );

		var fragment, first, scripts, hasScripts, node, doc,
			i = 0,
			l = collection.length,
			iNoClone = l - 1,
			value = args[ 0 ],
			isFunction = jQuery.isFunction( value );

		// We can't cloneNode fragments that contain checked, in WebKit
		if ( isFunction ||
				( l > 1 && typeof value === "string" &&
					!support.checkClone && rchecked.test( value ) ) ) {
			return collection.each( function( index ) {
				var self = collection.eq( index );
				if ( isFunction ) {
					args[ 0 ] = value.call( this, index, self.html() );
				}
				domManip( self, args, callback, ignored );
			} );
		}

		if ( l ) {
			fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
			first = fragment.firstChild;

			if ( fragment.childNodes.length === 1 ) {
				fragment = first;
			}

			// Require either new content or an interest in ignored elements to invoke the callback
			if ( first || ignored ) {
				scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
				hasScripts = scripts.length;

				// Use the original fragment for the last item
				// instead of the first because it can end up
				// being emptied incorrectly in certain situations (#8070).
				for ( ; i < l; i++ ) {
					node = fragment;

					if ( i !== iNoClone ) {
						node = jQuery.clone( node, true, true );

						// Keep references to cloned scripts for later restoration
						if ( hasScripts ) {

							// Support: Android<4.1, PhantomJS<2
							// push.apply(_, arraylike) throws on ancient WebKit
							jQuery.merge( scripts, getAll( node, "script" ) );
						}
					}

					callback.call( collection[ i ], node, i );
				}

				if ( hasScripts ) {
					doc = scripts[ scripts.length - 1 ].ownerDocument;

					// Reenable scripts
					jQuery.map( scripts, restoreScript );

					// Evaluate executable scripts on first document insertion
					for ( i = 0; i < hasScripts; i++ ) {
						node = scripts[ i ];
						if ( rscriptType.test( node.type || "" ) &&
							!dataPriv.access( node, "globalEval" ) &&
							jQuery.contains( doc, node ) ) {

							if ( node.src ) {

								// Optional AJAX dependency, but won't run scripts if not present
								if ( jQuery._evalUrl ) {
									jQuery._evalUrl( node.src );
								}
							} else {
								jQuery.globalEval( node.textContent.replace( rcleanScript, "" ) );
							}
						}
					}
				}
			}
		}

		return collection;
	}

	function remove( elem, selector, keepData ) {
		var node,
			nodes = selector ? jQuery.filter( selector, elem ) : elem,
			i = 0;

		for ( ; ( node = nodes[ i ] ) != null; i++ ) {
			if ( !keepData && node.nodeType === 1 ) {
				jQuery.cleanData( getAll( node ) );
			}

			if ( node.parentNode ) {
				if ( keepData && jQuery.contains( node.ownerDocument, node ) ) {
					setGlobalEval( getAll( node, "script" ) );
				}
				node.parentNode.removeChild( node );
			}
		}

		return elem;
	}

	jQuery.extend( {
		htmlPrefilter: function( html ) {
			return html.replace( rxhtmlTag, "<$1></$2>" );
		},

		clone: function( elem, dataAndEvents, deepDataAndEvents ) {
			var i, l, srcElements, destElements,
				clone = elem.cloneNode( true ),
				inPage = jQuery.contains( elem.ownerDocument, elem );

			// Fix IE cloning issues
			if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
					!jQuery.isXMLDoc( elem ) ) {

				// We eschew Sizzle here for performance reasons: http://jsperf.com/getall-vs-sizzle/2
				destElements = getAll( clone );
				srcElements = getAll( elem );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					fixInput( srcElements[ i ], destElements[ i ] );
				}
			}

			// Copy the events from the original to the clone
			if ( dataAndEvents ) {
				if ( deepDataAndEvents ) {
					srcElements = srcElements || getAll( elem );
					destElements = destElements || getAll( clone );

					for ( i = 0, l = srcElements.length; i < l; i++ ) {
						cloneCopyEvent( srcElements[ i ], destElements[ i ] );
					}
				} else {
					cloneCopyEvent( elem, clone );
				}
			}

			// Preserve script evaluation history
			destElements = getAll( clone, "script" );
			if ( destElements.length > 0 ) {
				setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
			}

			// Return the cloned set
			return clone;
		},

		cleanData: function( elems ) {
			var data, elem, type,
				special = jQuery.event.special,
				i = 0;

			for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
				if ( acceptData( elem ) ) {
					if ( ( data = elem[ dataPriv.expando ] ) ) {
						if ( data.events ) {
							for ( type in data.events ) {
								if ( special[ type ] ) {
									jQuery.event.remove( elem, type );

								// This is a shortcut to avoid jQuery.event.remove's overhead
								} else {
									jQuery.removeEvent( elem, type, data.handle );
								}
							}
						}

						// Support: Chrome <= 35-45+
						// Assign undefined instead of using delete, see Data#remove
						elem[ dataPriv.expando ] = undefined;
					}
					if ( elem[ dataUser.expando ] ) {

						// Support: Chrome <= 35-45+
						// Assign undefined instead of using delete, see Data#remove
						elem[ dataUser.expando ] = undefined;
					}
				}
			}
		}
	} );

	jQuery.fn.extend( {

		// Keep domManip exposed until 3.0 (gh-2225)
		domManip: domManip,

		detach: function( selector ) {
			return remove( this, selector, true );
		},

		remove: function( selector ) {
			return remove( this, selector );
		},

		text: function( value ) {
			return access( this, function( value ) {
				return value === undefined ?
					jQuery.text( this ) :
					this.empty().each( function() {
						if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
							this.textContent = value;
						}
					} );
			}, null, value, arguments.length );
		},

		append: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
					var target = manipulationTarget( this, elem );
					target.appendChild( elem );
				}
			} );
		},

		prepend: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
					var target = manipulationTarget( this, elem );
					target.insertBefore( elem, target.firstChild );
				}
			} );
		},

		before: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.parentNode ) {
					this.parentNode.insertBefore( elem, this );
				}
			} );
		},

		after: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.parentNode ) {
					this.parentNode.insertBefore( elem, this.nextSibling );
				}
			} );
		},

		empty: function() {
			var elem,
				i = 0;

			for ( ; ( elem = this[ i ] ) != null; i++ ) {
				if ( elem.nodeType === 1 ) {

					// Prevent memory leaks
					jQuery.cleanData( getAll( elem, false ) );

					// Remove any remaining nodes
					elem.textContent = "";
				}
			}

			return this;
		},

		clone: function( dataAndEvents, deepDataAndEvents ) {
			dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
			deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

			return this.map( function() {
				return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
			} );
		},

		html: function( value ) {
			return access( this, function( value ) {
				var elem = this[ 0 ] || {},
					i = 0,
					l = this.length;

				if ( value === undefined && elem.nodeType === 1 ) {
					return elem.innerHTML;
				}

				// See if we can take a shortcut and just use innerHTML
				if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
					!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

					value = jQuery.htmlPrefilter( value );

					try {
						for ( ; i < l; i++ ) {
							elem = this[ i ] || {};

							// Remove element nodes and prevent memory leaks
							if ( elem.nodeType === 1 ) {
								jQuery.cleanData( getAll( elem, false ) );
								elem.innerHTML = value;
							}
						}

						elem = 0;

					// If using innerHTML throws an exception, use the fallback method
					} catch ( e ) {}
				}

				if ( elem ) {
					this.empty().append( value );
				}
			}, null, value, arguments.length );
		},

		replaceWith: function() {
			var ignored = [];

			// Make the changes, replacing each non-ignored context element with the new content
			return domManip( this, arguments, function( elem ) {
				var parent = this.parentNode;

				if ( jQuery.inArray( this, ignored ) < 0 ) {
					jQuery.cleanData( getAll( this ) );
					if ( parent ) {
						parent.replaceChild( elem, this );
					}
				}

			// Force callback invocation
			}, ignored );
		}
	} );

	jQuery.each( {
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function( name, original ) {
		jQuery.fn[ name ] = function( selector ) {
			var elems,
				ret = [],
				insert = jQuery( selector ),
				last = insert.length - 1,
				i = 0;

			for ( ; i <= last; i++ ) {
				elems = i === last ? this : this.clone( true );
				jQuery( insert[ i ] )[ original ]( elems );

				// Support: QtWebKit
				// .get() because push.apply(_, arraylike) throws
				push.apply( ret, elems.get() );
			}

			return this.pushStack( ret );
		};
	} );


	var iframe,
		elemdisplay = {

			// Support: Firefox
			// We have to pre-define these values for FF (#10227)
			HTML: "block",
			BODY: "block"
		};

	/**
	 * Retrieve the actual display of a element
	 * @param {String} name nodeName of the element
	 * @param {Object} doc Document object
	 */

	// Called only from within defaultDisplay
	function actualDisplay( name, doc ) {
		var elem = jQuery( doc.createElement( name ) ).appendTo( doc.body ),

			display = jQuery.css( elem[ 0 ], "display" );

		// We don't have any data stored on the element,
		// so use "detach" method as fast way to get rid of the element
		elem.detach();

		return display;
	}

	/**
	 * Try to determine the default display value of an element
	 * @param {String} nodeName
	 */
	function defaultDisplay( nodeName ) {
		var doc = document,
			display = elemdisplay[ nodeName ];

		if ( !display ) {
			display = actualDisplay( nodeName, doc );

			// If the simple way fails, read from inside an iframe
			if ( display === "none" || !display ) {

				// Use the already-created iframe if possible
				iframe = ( iframe || jQuery( "<iframe frameborder='0' width='0' height='0'/>" ) )
					.appendTo( doc.documentElement );

				// Always write a new HTML skeleton so Webkit and Firefox don't choke on reuse
				doc = iframe[ 0 ].contentDocument;

				// Support: IE
				doc.write();
				doc.close();

				display = actualDisplay( nodeName, doc );
				iframe.detach();
			}

			// Store the correct default display
			elemdisplay[ nodeName ] = display;
		}

		return display;
	}
	var rmargin = ( /^margin/ );

	var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

	var getStyles = function( elem ) {

			// Support: IE<=11+, Firefox<=30+ (#15098, #14150)
			// IE throws on elements created in popups
			// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
			var view = elem.ownerDocument.defaultView;

			if ( !view || !view.opener ) {
				view = window;
			}

			return view.getComputedStyle( elem );
		};

	var swap = function( elem, options, callback, args ) {
		var ret, name,
			old = {};

		// Remember the old values, and insert the new ones
		for ( name in options ) {
			old[ name ] = elem.style[ name ];
			elem.style[ name ] = options[ name ];
		}

		ret = callback.apply( elem, args || [] );

		// Revert the old values
		for ( name in options ) {
			elem.style[ name ] = old[ name ];
		}

		return ret;
	};


	var documentElement = document.documentElement;



	( function() {
		var pixelPositionVal, boxSizingReliableVal, pixelMarginRightVal, reliableMarginLeftVal,
			container = document.createElement( "div" ),
			div = document.createElement( "div" );

		// Finish early in limited (non-browser) environments
		if ( !div.style ) {
			return;
		}

		// Support: IE9-11+
		// Style of cloned element affects source element cloned (#8908)
		div.style.backgroundClip = "content-box";
		div.cloneNode( true ).style.backgroundClip = "";
		support.clearCloneStyle = div.style.backgroundClip === "content-box";

		container.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;" +
			"padding:0;margin-top:1px;position:absolute";
		container.appendChild( div );

		// Executing both pixelPosition & boxSizingReliable tests require only one layout
		// so they're executed at the same time to save the second computation.
		function computeStyleTests() {
			div.style.cssText =

				// Support: Firefox<29, Android 2.3
				// Vendor-prefix box-sizing
				"-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;" +
				"position:relative;display:block;" +
				"margin:auto;border:1px;padding:1px;" +
				"top:1%;width:50%";
			div.innerHTML = "";
			documentElement.appendChild( container );

			var divStyle = window.getComputedStyle( div );
			pixelPositionVal = divStyle.top !== "1%";
			reliableMarginLeftVal = divStyle.marginLeft === "2px";
			boxSizingReliableVal = divStyle.width === "4px";

			// Support: Android 4.0 - 4.3 only
			// Some styles come back with percentage values, even though they shouldn't
			div.style.marginRight = "50%";
			pixelMarginRightVal = divStyle.marginRight === "4px";

			documentElement.removeChild( container );
		}

		jQuery.extend( support, {
			pixelPosition: function() {

				// This test is executed only once but we still do memoizing
				// since we can use the boxSizingReliable pre-computing.
				// No need to check if the test was already performed, though.
				computeStyleTests();
				return pixelPositionVal;
			},
			boxSizingReliable: function() {
				if ( boxSizingReliableVal == null ) {
					computeStyleTests();
				}
				return boxSizingReliableVal;
			},
			pixelMarginRight: function() {

				// Support: Android 4.0-4.3
				// We're checking for boxSizingReliableVal here instead of pixelMarginRightVal
				// since that compresses better and they're computed together anyway.
				if ( boxSizingReliableVal == null ) {
					computeStyleTests();
				}
				return pixelMarginRightVal;
			},
			reliableMarginLeft: function() {

				// Support: IE <=8 only, Android 4.0 - 4.3 only, Firefox <=3 - 37
				if ( boxSizingReliableVal == null ) {
					computeStyleTests();
				}
				return reliableMarginLeftVal;
			},
			reliableMarginRight: function() {

				// Support: Android 2.3
				// Check if div with explicit width and no margin-right incorrectly
				// gets computed margin-right based on width of container. (#3333)
				// WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
				// This support function is only executed once so no memoizing is needed.
				var ret,
					marginDiv = div.appendChild( document.createElement( "div" ) );

				// Reset CSS: box-sizing; display; margin; border; padding
				marginDiv.style.cssText = div.style.cssText =

					// Support: Android 2.3
					// Vendor-prefix box-sizing
					"-webkit-box-sizing:content-box;box-sizing:content-box;" +
					"display:block;margin:0;border:0;padding:0";
				marginDiv.style.marginRight = marginDiv.style.width = "0";
				div.style.width = "1px";
				documentElement.appendChild( container );

				ret = !parseFloat( window.getComputedStyle( marginDiv ).marginRight );

				documentElement.removeChild( container );
				div.removeChild( marginDiv );

				return ret;
			}
		} );
	} )();


	function curCSS( elem, name, computed ) {
		var width, minWidth, maxWidth, ret,
			style = elem.style;

		computed = computed || getStyles( elem );
		ret = computed ? computed.getPropertyValue( name ) || computed[ name ] : undefined;

		// Support: Opera 12.1x only
		// Fall back to style even without computed
		// computed is undefined for elems on document fragments
		if ( ( ret === "" || ret === undefined ) && !jQuery.contains( elem.ownerDocument, elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// Support: IE9
		// getPropertyValue is only needed for .css('filter') (#12537)
		if ( computed ) {

			// A tribute to the "awesome hack by Dean Edwards"
			// Android Browser returns percentage for some values,
			// but width seems to be reliably pixels.
			// This is against the CSSOM draft spec:
			// http://dev.w3.org/csswg/cssom/#resolved-values
			if ( !support.pixelMarginRight() && rnumnonpx.test( ret ) && rmargin.test( name ) ) {

				// Remember the original values
				width = style.width;
				minWidth = style.minWidth;
				maxWidth = style.maxWidth;

				// Put in the new values to get a computed value out
				style.minWidth = style.maxWidth = style.width = ret;
				ret = computed.width;

				// Revert the changed values
				style.width = width;
				style.minWidth = minWidth;
				style.maxWidth = maxWidth;
			}
		}

		return ret !== undefined ?

			// Support: IE9-11+
			// IE returns zIndex value as an integer.
			ret + "" :
			ret;
	}


	function addGetHookIf( conditionFn, hookFn ) {

		// Define the hook, we'll check on the first run if it's really needed.
		return {
			get: function() {
				if ( conditionFn() ) {

					// Hook not needed (or it's not possible to use it due
					// to missing dependency), remove it.
					delete this.get;
					return;
				}

				// Hook needed; redefine it so that the support test is not executed again.
				return ( this.get = hookFn ).apply( this, arguments );
			}
		};
	}


	var

		// Swappable if display is none or starts with table
		// except "table", "table-cell", or "table-caption"
		// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
		rdisplayswap = /^(none|table(?!-c[ea]).+)/,

		cssShow = { position: "absolute", visibility: "hidden", display: "block" },
		cssNormalTransform = {
			letterSpacing: "0",
			fontWeight: "400"
		},

		cssPrefixes = [ "Webkit", "O", "Moz", "ms" ],
		emptyStyle = document.createElement( "div" ).style;

	// Return a css property mapped to a potentially vendor prefixed property
	function vendorPropName( name ) {

		// Shortcut for names that are not vendor prefixed
		if ( name in emptyStyle ) {
			return name;
		}

		// Check for vendor prefixed names
		var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
			i = cssPrefixes.length;

		while ( i-- ) {
			name = cssPrefixes[ i ] + capName;
			if ( name in emptyStyle ) {
				return name;
			}
		}
	}

	function setPositiveNumber( elem, value, subtract ) {

		// Any relative (+/-) values have already been
		// normalized at this point
		var matches = rcssNum.exec( value );
		return matches ?

			// Guard against undefined "subtract", e.g., when used as in cssHooks
			Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
			value;
	}

	function augmentWidthOrHeight( elem, name, extra, isBorderBox, styles ) {
		var i = extra === ( isBorderBox ? "border" : "content" ) ?

			// If we already have the right measurement, avoid augmentation
			4 :

			// Otherwise initialize for horizontal or vertical properties
			name === "width" ? 1 : 0,

			val = 0;

		for ( ; i < 4; i += 2 ) {

			// Both box models exclude margin, so add it if we want it
			if ( extra === "margin" ) {
				val += jQuery.css( elem, extra + cssExpand[ i ], true, styles );
			}

			if ( isBorderBox ) {

				// border-box includes padding, so remove it if we want content
				if ( extra === "content" ) {
					val -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
				}

				// At this point, extra isn't border nor margin, so remove border
				if ( extra !== "margin" ) {
					val -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
				}
			} else {

				// At this point, extra isn't content, so add padding
				val += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

				// At this point, extra isn't content nor padding, so add border
				if ( extra !== "padding" ) {
					val += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
				}
			}
		}

		return val;
	}

	function getWidthOrHeight( elem, name, extra ) {

		// Start with offset property, which is equivalent to the border-box value
		var valueIsBorderBox = true,
			val = name === "width" ? elem.offsetWidth : elem.offsetHeight,
			styles = getStyles( elem ),
			isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

		// Support: IE11 only
		// In IE 11 fullscreen elements inside of an iframe have
		// 100x too small dimensions (gh-1764).
		if ( document.msFullscreenElement && window.top !== window ) {

			// Support: IE11 only
			// Running getBoundingClientRect on a disconnected node
			// in IE throws an error.
			if ( elem.getClientRects().length ) {
				val = Math.round( elem.getBoundingClientRect()[ name ] * 100 );
			}
		}

		// Some non-html elements return undefined for offsetWidth, so check for null/undefined
		// svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
		// MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
		if ( val <= 0 || val == null ) {

			// Fall back to computed then uncomputed css if necessary
			val = curCSS( elem, name, styles );
			if ( val < 0 || val == null ) {
				val = elem.style[ name ];
			}

			// Computed unit is not pixels. Stop here and return.
			if ( rnumnonpx.test( val ) ) {
				return val;
			}

			// Check for style in case a browser which returns unreliable values
			// for getComputedStyle silently falls back to the reliable elem.style
			valueIsBorderBox = isBorderBox &&
				( support.boxSizingReliable() || val === elem.style[ name ] );

			// Normalize "", auto, and prepare for extra
			val = parseFloat( val ) || 0;
		}

		// Use the active box-sizing model to add/subtract irrelevant styles
		return ( val +
			augmentWidthOrHeight(
				elem,
				name,
				extra || ( isBorderBox ? "border" : "content" ),
				valueIsBorderBox,
				styles
			)
		) + "px";
	}

	function showHide( elements, show ) {
		var display, elem, hidden,
			values = [],
			index = 0,
			length = elements.length;

		for ( ; index < length; index++ ) {
			elem = elements[ index ];
			if ( !elem.style ) {
				continue;
			}

			values[ index ] = dataPriv.get( elem, "olddisplay" );
			display = elem.style.display;
			if ( show ) {

				// Reset the inline display of this element to learn if it is
				// being hidden by cascaded rules or not
				if ( !values[ index ] && display === "none" ) {
					elem.style.display = "";
				}

				// Set elements which have been overridden with display: none
				// in a stylesheet to whatever the default browser style is
				// for such an element
				if ( elem.style.display === "" && isHidden( elem ) ) {
					values[ index ] = dataPriv.access(
						elem,
						"olddisplay",
						defaultDisplay( elem.nodeName )
					);
				}
			} else {
				hidden = isHidden( elem );

				if ( display !== "none" || !hidden ) {
					dataPriv.set(
						elem,
						"olddisplay",
						hidden ? display : jQuery.css( elem, "display" )
					);
				}
			}
		}

		// Set the display of most of the elements in a second loop
		// to avoid the constant reflow
		for ( index = 0; index < length; index++ ) {
			elem = elements[ index ];
			if ( !elem.style ) {
				continue;
			}
			if ( !show || elem.style.display === "none" || elem.style.display === "" ) {
				elem.style.display = show ? values[ index ] || "" : "none";
			}
		}

		return elements;
	}

	jQuery.extend( {

		// Add in style property hooks for overriding the default
		// behavior of getting and setting a style property
		cssHooks: {
			opacity: {
				get: function( elem, computed ) {
					if ( computed ) {

						// We should always get a number back from opacity
						var ret = curCSS( elem, "opacity" );
						return ret === "" ? "1" : ret;
					}
				}
			}
		},

		// Don't automatically add "px" to these possibly-unitless properties
		cssNumber: {
			"animationIterationCount": true,
			"columnCount": true,
			"fillOpacity": true,
			"flexGrow": true,
			"flexShrink": true,
			"fontWeight": true,
			"lineHeight": true,
			"opacity": true,
			"order": true,
			"orphans": true,
			"widows": true,
			"zIndex": true,
			"zoom": true
		},

		// Add in properties whose names you wish to fix before
		// setting or getting the value
		cssProps: {
			"float": "cssFloat"
		},

		// Get and set the style property on a DOM Node
		style: function( elem, name, value, extra ) {

			// Don't set styles on text and comment nodes
			if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
				return;
			}

			// Make sure that we're working with the right name
			var ret, type, hooks,
				origName = jQuery.camelCase( name ),
				style = elem.style;

			name = jQuery.cssProps[ origName ] ||
				( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );

			// Gets hook for the prefixed version, then unprefixed version
			hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

			// Check if we're setting a value
			if ( value !== undefined ) {
				type = typeof value;

				// Convert "+=" or "-=" to relative numbers (#7345)
				if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
					value = adjustCSS( elem, name, ret );

					// Fixes bug #9237
					type = "number";
				}

				// Make sure that null and NaN values aren't set (#7116)
				if ( value == null || value !== value ) {
					return;
				}

				// If a number was passed in, add the unit (except for certain CSS properties)
				if ( type === "number" ) {
					value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
				}

				// Support: IE9-11+
				// background-* props affect original clone's values
				if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
					style[ name ] = "inherit";
				}

				// If a hook was provided, use that value, otherwise just set the specified value
				if ( !hooks || !( "set" in hooks ) ||
					( value = hooks.set( elem, value, extra ) ) !== undefined ) {

					style[ name ] = value;
				}

			} else {

				// If a hook was provided get the non-computed value from there
				if ( hooks && "get" in hooks &&
					( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

					return ret;
				}

				// Otherwise just get the value from the style object
				return style[ name ];
			}
		},

		css: function( elem, name, extra, styles ) {
			var val, num, hooks,
				origName = jQuery.camelCase( name );

			// Make sure that we're working with the right name
			name = jQuery.cssProps[ origName ] ||
				( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );

			// Try prefixed name followed by the unprefixed name
			hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

			// If a hook was provided get the computed value from there
			if ( hooks && "get" in hooks ) {
				val = hooks.get( elem, true, extra );
			}

			// Otherwise, if a way to get the computed value exists, use that
			if ( val === undefined ) {
				val = curCSS( elem, name, styles );
			}

			// Convert "normal" to computed value
			if ( val === "normal" && name in cssNormalTransform ) {
				val = cssNormalTransform[ name ];
			}

			// Make numeric if forced or a qualifier was provided and val looks numeric
			if ( extra === "" || extra ) {
				num = parseFloat( val );
				return extra === true || isFinite( num ) ? num || 0 : val;
			}
			return val;
		}
	} );

	jQuery.each( [ "height", "width" ], function( i, name ) {
		jQuery.cssHooks[ name ] = {
			get: function( elem, computed, extra ) {
				if ( computed ) {

					// Certain elements can have dimension info if we invisibly show them
					// but it must have a current display style that would benefit
					return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&
						elem.offsetWidth === 0 ?
							swap( elem, cssShow, function() {
								return getWidthOrHeight( elem, name, extra );
							} ) :
							getWidthOrHeight( elem, name, extra );
				}
			},

			set: function( elem, value, extra ) {
				var matches,
					styles = extra && getStyles( elem ),
					subtract = extra && augmentWidthOrHeight(
						elem,
						name,
						extra,
						jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
						styles
					);

				// Convert to pixels if value adjustment is needed
				if ( subtract && ( matches = rcssNum.exec( value ) ) &&
					( matches[ 3 ] || "px" ) !== "px" ) {

					elem.style[ name ] = value;
					value = jQuery.css( elem, name );
				}

				return setPositiveNumber( elem, value, subtract );
			}
		};
	} );

	jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
		function( elem, computed ) {
			if ( computed ) {
				return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
					elem.getBoundingClientRect().left -
						swap( elem, { marginLeft: 0 }, function() {
							return elem.getBoundingClientRect().left;
						} )
					) + "px";
			}
		}
	);

	// Support: Android 2.3
	jQuery.cssHooks.marginRight = addGetHookIf( support.reliableMarginRight,
		function( elem, computed ) {
			if ( computed ) {
				return swap( elem, { "display": "inline-block" },
					curCSS, [ elem, "marginRight" ] );
			}
		}
	);

	// These hooks are used by animate to expand properties
	jQuery.each( {
		margin: "",
		padding: "",
		border: "Width"
	}, function( prefix, suffix ) {
		jQuery.cssHooks[ prefix + suffix ] = {
			expand: function( value ) {
				var i = 0,
					expanded = {},

					// Assumes a single number if not a string
					parts = typeof value === "string" ? value.split( " " ) : [ value ];

				for ( ; i < 4; i++ ) {
					expanded[ prefix + cssExpand[ i ] + suffix ] =
						parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
				}

				return expanded;
			}
		};

		if ( !rmargin.test( prefix ) ) {
			jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
		}
	} );

	jQuery.fn.extend( {
		css: function( name, value ) {
			return access( this, function( elem, name, value ) {
				var styles, len,
					map = {},
					i = 0;

				if ( jQuery.isArray( name ) ) {
					styles = getStyles( elem );
					len = name.length;

					for ( ; i < len; i++ ) {
						map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
					}

					return map;
				}

				return value !== undefined ?
					jQuery.style( elem, name, value ) :
					jQuery.css( elem, name );
			}, name, value, arguments.length > 1 );
		},
		show: function() {
			return showHide( this, true );
		},
		hide: function() {
			return showHide( this );
		},
		toggle: function( state ) {
			if ( typeof state === "boolean" ) {
				return state ? this.show() : this.hide();
			}

			return this.each( function() {
				if ( isHidden( this ) ) {
					jQuery( this ).show();
				} else {
					jQuery( this ).hide();
				}
			} );
		}
	} );


	function Tween( elem, options, prop, end, easing ) {
		return new Tween.prototype.init( elem, options, prop, end, easing );
	}
	jQuery.Tween = Tween;

	Tween.prototype = {
		constructor: Tween,
		init: function( elem, options, prop, end, easing, unit ) {
			this.elem = elem;
			this.prop = prop;
			this.easing = easing || jQuery.easing._default;
			this.options = options;
			this.start = this.now = this.cur();
			this.end = end;
			this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
		},
		cur: function() {
			var hooks = Tween.propHooks[ this.prop ];

			return hooks && hooks.get ?
				hooks.get( this ) :
				Tween.propHooks._default.get( this );
		},
		run: function( percent ) {
			var eased,
				hooks = Tween.propHooks[ this.prop ];

			if ( this.options.duration ) {
				this.pos = eased = jQuery.easing[ this.easing ](
					percent, this.options.duration * percent, 0, 1, this.options.duration
				);
			} else {
				this.pos = eased = percent;
			}
			this.now = ( this.end - this.start ) * eased + this.start;

			if ( this.options.step ) {
				this.options.step.call( this.elem, this.now, this );
			}

			if ( hooks && hooks.set ) {
				hooks.set( this );
			} else {
				Tween.propHooks._default.set( this );
			}
			return this;
		}
	};

	Tween.prototype.init.prototype = Tween.prototype;

	Tween.propHooks = {
		_default: {
			get: function( tween ) {
				var result;

				// Use a property on the element directly when it is not a DOM element,
				// or when there is no matching style property that exists.
				if ( tween.elem.nodeType !== 1 ||
					tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
					return tween.elem[ tween.prop ];
				}

				// Passing an empty string as a 3rd parameter to .css will automatically
				// attempt a parseFloat and fallback to a string if the parse fails.
				// Simple values such as "10px" are parsed to Float;
				// complex values such as "rotate(1rad)" are returned as-is.
				result = jQuery.css( tween.elem, tween.prop, "" );

				// Empty strings, null, undefined and "auto" are converted to 0.
				return !result || result === "auto" ? 0 : result;
			},
			set: function( tween ) {

				// Use step hook for back compat.
				// Use cssHook if its there.
				// Use .style if available and use plain properties where available.
				if ( jQuery.fx.step[ tween.prop ] ) {
					jQuery.fx.step[ tween.prop ]( tween );
				} else if ( tween.elem.nodeType === 1 &&
					( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null ||
						jQuery.cssHooks[ tween.prop ] ) ) {
					jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
				} else {
					tween.elem[ tween.prop ] = tween.now;
				}
			}
		}
	};

	// Support: IE9
	// Panic based approach to setting things on disconnected nodes
	Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
		set: function( tween ) {
			if ( tween.elem.nodeType && tween.elem.parentNode ) {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	};

	jQuery.easing = {
		linear: function( p ) {
			return p;
		},
		swing: function( p ) {
			return 0.5 - Math.cos( p * Math.PI ) / 2;
		},
		_default: "swing"
	};

	jQuery.fx = Tween.prototype.init;

	// Back Compat <1.8 extension point
	jQuery.fx.step = {};




	var
		fxNow, timerId,
		rfxtypes = /^(?:toggle|show|hide)$/,
		rrun = /queueHooks$/;

	// Animations created synchronously will run synchronously
	function createFxNow() {
		window.setTimeout( function() {
			fxNow = undefined;
		} );
		return ( fxNow = jQuery.now() );
	}

	// Generate parameters to create a standard animation
	function genFx( type, includeWidth ) {
		var which,
			i = 0,
			attrs = { height: type };

		// If we include width, step value is 1 to do all cssExpand values,
		// otherwise step value is 2 to skip over Left and Right
		includeWidth = includeWidth ? 1 : 0;
		for ( ; i < 4 ; i += 2 - includeWidth ) {
			which = cssExpand[ i ];
			attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
		}

		if ( includeWidth ) {
			attrs.opacity = attrs.width = type;
		}

		return attrs;
	}

	function createTween( value, prop, animation ) {
		var tween,
			collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
			index = 0,
			length = collection.length;
		for ( ; index < length; index++ ) {
			if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

				// We're done with this property
				return tween;
			}
		}
	}

	function defaultPrefilter( elem, props, opts ) {
		/* jshint validthis: true */
		var prop, value, toggle, tween, hooks, oldfire, display, checkDisplay,
			anim = this,
			orig = {},
			style = elem.style,
			hidden = elem.nodeType && isHidden( elem ),
			dataShow = dataPriv.get( elem, "fxshow" );

		// Handle queue: false promises
		if ( !opts.queue ) {
			hooks = jQuery._queueHooks( elem, "fx" );
			if ( hooks.unqueued == null ) {
				hooks.unqueued = 0;
				oldfire = hooks.empty.fire;
				hooks.empty.fire = function() {
					if ( !hooks.unqueued ) {
						oldfire();
					}
				};
			}
			hooks.unqueued++;

			anim.always( function() {

				// Ensure the complete handler is called before this completes
				anim.always( function() {
					hooks.unqueued--;
					if ( !jQuery.queue( elem, "fx" ).length ) {
						hooks.empty.fire();
					}
				} );
			} );
		}

		// Height/width overflow pass
		if ( elem.nodeType === 1 && ( "height" in props || "width" in props ) ) {

			// Make sure that nothing sneaks out
			// Record all 3 overflow attributes because IE9-10 do not
			// change the overflow attribute when overflowX and
			// overflowY are set to the same value
			opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

			// Set display property to inline-block for height/width
			// animations on inline elements that are having width/height animated
			display = jQuery.css( elem, "display" );

			// Test default display if display is currently "none"
			checkDisplay = display === "none" ?
				dataPriv.get( elem, "olddisplay" ) || defaultDisplay( elem.nodeName ) : display;

			if ( checkDisplay === "inline" && jQuery.css( elem, "float" ) === "none" ) {
				style.display = "inline-block";
			}
		}

		if ( opts.overflow ) {
			style.overflow = "hidden";
			anim.always( function() {
				style.overflow = opts.overflow[ 0 ];
				style.overflowX = opts.overflow[ 1 ];
				style.overflowY = opts.overflow[ 2 ];
			} );
		}

		// show/hide pass
		for ( prop in props ) {
			value = props[ prop ];
			if ( rfxtypes.exec( value ) ) {
				delete props[ prop ];
				toggle = toggle || value === "toggle";
				if ( value === ( hidden ? "hide" : "show" ) ) {

					// If there is dataShow left over from a stopped hide or show
					// and we are going to proceed with show, we should pretend to be hidden
					if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
						hidden = true;
					} else {
						continue;
					}
				}
				orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );

			// Any non-fx value stops us from restoring the original display value
			} else {
				display = undefined;
			}
		}

		if ( !jQuery.isEmptyObject( orig ) ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access( elem, "fxshow", {} );
			}

			// Store state if its toggle - enables .stop().toggle() to "reverse"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}
			if ( hidden ) {
				jQuery( elem ).show();
			} else {
				anim.done( function() {
					jQuery( elem ).hide();
				} );
			}
			anim.done( function() {
				var prop;

				dataPriv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
			for ( prop in orig ) {
				tween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );

				if ( !( prop in dataShow ) ) {
					dataShow[ prop ] = tween.start;
					if ( hidden ) {
						tween.end = tween.start;
						tween.start = prop === "width" || prop === "height" ? 1 : 0;
					}
				}
			}

		// If this is a noop like .hide().hide(), restore an overwritten display value
		} else if ( ( display === "none" ? defaultDisplay( elem.nodeName ) : display ) === "inline" ) {
			style.display = display;
		}
	}

	function propFilter( props, specialEasing ) {
		var index, name, easing, value, hooks;

		// camelCase, specialEasing and expand cssHook pass
		for ( index in props ) {
			name = jQuery.camelCase( index );
			easing = specialEasing[ name ];
			value = props[ index ];
			if ( jQuery.isArray( value ) ) {
				easing = value[ 1 ];
				value = props[ index ] = value[ 0 ];
			}

			if ( index !== name ) {
				props[ name ] = value;
				delete props[ index ];
			}

			hooks = jQuery.cssHooks[ name ];
			if ( hooks && "expand" in hooks ) {
				value = hooks.expand( value );
				delete props[ name ];

				// Not quite $.extend, this won't overwrite existing keys.
				// Reusing 'index' because we have the correct "name"
				for ( index in value ) {
					if ( !( index in props ) ) {
						props[ index ] = value[ index ];
						specialEasing[ index ] = easing;
					}
				}
			} else {
				specialEasing[ name ] = easing;
			}
		}
	}

	function Animation( elem, properties, options ) {
		var result,
			stopped,
			index = 0,
			length = Animation.prefilters.length,
			deferred = jQuery.Deferred().always( function() {

				// Don't match elem in the :animated selector
				delete tick.elem;
			} ),
			tick = function() {
				if ( stopped ) {
					return false;
				}
				var currentTime = fxNow || createFxNow(),
					remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

					// Support: Android 2.3
					// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
					temp = remaining / animation.duration || 0,
					percent = 1 - temp,
					index = 0,
					length = animation.tweens.length;

				for ( ; index < length ; index++ ) {
					animation.tweens[ index ].run( percent );
				}

				deferred.notifyWith( elem, [ animation, percent, remaining ] );

				if ( percent < 1 && length ) {
					return remaining;
				} else {
					deferred.resolveWith( elem, [ animation ] );
					return false;
				}
			},
			animation = deferred.promise( {
				elem: elem,
				props: jQuery.extend( {}, properties ),
				opts: jQuery.extend( true, {
					specialEasing: {},
					easing: jQuery.easing._default
				}, options ),
				originalProperties: properties,
				originalOptions: options,
				startTime: fxNow || createFxNow(),
				duration: options.duration,
				tweens: [],
				createTween: function( prop, end ) {
					var tween = jQuery.Tween( elem, animation.opts, prop, end,
							animation.opts.specialEasing[ prop ] || animation.opts.easing );
					animation.tweens.push( tween );
					return tween;
				},
				stop: function( gotoEnd ) {
					var index = 0,

						// If we are going to the end, we want to run all the tweens
						// otherwise we skip this part
						length = gotoEnd ? animation.tweens.length : 0;
					if ( stopped ) {
						return this;
					}
					stopped = true;
					for ( ; index < length ; index++ ) {
						animation.tweens[ index ].run( 1 );
					}

					// Resolve when we played the last frame; otherwise, reject
					if ( gotoEnd ) {
						deferred.notifyWith( elem, [ animation, 1, 0 ] );
						deferred.resolveWith( elem, [ animation, gotoEnd ] );
					} else {
						deferred.rejectWith( elem, [ animation, gotoEnd ] );
					}
					return this;
				}
			} ),
			props = animation.props;

		propFilter( props, animation.opts.specialEasing );

		for ( ; index < length ; index++ ) {
			result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
			if ( result ) {
				if ( jQuery.isFunction( result.stop ) ) {
					jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
						jQuery.proxy( result.stop, result );
				}
				return result;
			}
		}

		jQuery.map( props, createTween, animation );

		if ( jQuery.isFunction( animation.opts.start ) ) {
			animation.opts.start.call( elem, animation );
		}

		jQuery.fx.timer(
			jQuery.extend( tick, {
				elem: elem,
				anim: animation,
				queue: animation.opts.queue
			} )
		);

		// attach callbacks from options
		return animation.progress( animation.opts.progress )
			.done( animation.opts.done, animation.opts.complete )
			.fail( animation.opts.fail )
			.always( animation.opts.always );
	}

	jQuery.Animation = jQuery.extend( Animation, {
		tweeners: {
			"*": [ function( prop, value ) {
				var tween = this.createTween( prop, value );
				adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
				return tween;
			} ]
		},

		tweener: function( props, callback ) {
			if ( jQuery.isFunction( props ) ) {
				callback = props;
				props = [ "*" ];
			} else {
				props = props.match( rnotwhite );
			}

			var prop,
				index = 0,
				length = props.length;

			for ( ; index < length ; index++ ) {
				prop = props[ index ];
				Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
				Animation.tweeners[ prop ].unshift( callback );
			}
		},

		prefilters: [ defaultPrefilter ],

		prefilter: function( callback, prepend ) {
			if ( prepend ) {
				Animation.prefilters.unshift( callback );
			} else {
				Animation.prefilters.push( callback );
			}
		}
	} );

	jQuery.speed = function( speed, easing, fn ) {
		var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
			complete: fn || !fn && easing ||
				jQuery.isFunction( speed ) && speed,
			duration: speed,
			easing: fn && easing || easing && !jQuery.isFunction( easing ) && easing
		};

		opt.duration = jQuery.fx.off ? 0 : typeof opt.duration === "number" ?
			opt.duration : opt.duration in jQuery.fx.speeds ?
				jQuery.fx.speeds[ opt.duration ] : jQuery.fx.speeds._default;

		// Normalize opt.queue - true/undefined/null -> "fx"
		if ( opt.queue == null || opt.queue === true ) {
			opt.queue = "fx";
		}

		// Queueing
		opt.old = opt.complete;

		opt.complete = function() {
			if ( jQuery.isFunction( opt.old ) ) {
				opt.old.call( this );
			}

			if ( opt.queue ) {
				jQuery.dequeue( this, opt.queue );
			}
		};

		return opt;
	};

	jQuery.fn.extend( {
		fadeTo: function( speed, to, easing, callback ) {

			// Show any hidden elements after setting opacity to 0
			return this.filter( isHidden ).css( "opacity", 0 ).show()

				// Animate to the value specified
				.end().animate( { opacity: to }, speed, easing, callback );
		},
		animate: function( prop, speed, easing, callback ) {
			var empty = jQuery.isEmptyObject( prop ),
				optall = jQuery.speed( speed, easing, callback ),
				doAnimation = function() {

					// Operate on a copy of prop so per-property easing won't be lost
					var anim = Animation( this, jQuery.extend( {}, prop ), optall );

					// Empty animations, or finishing resolves immediately
					if ( empty || dataPriv.get( this, "finish" ) ) {
						anim.stop( true );
					}
				};
				doAnimation.finish = doAnimation;

			return empty || optall.queue === false ?
				this.each( doAnimation ) :
				this.queue( optall.queue, doAnimation );
		},
		stop: function( type, clearQueue, gotoEnd ) {
			var stopQueue = function( hooks ) {
				var stop = hooks.stop;
				delete hooks.stop;
				stop( gotoEnd );
			};

			if ( typeof type !== "string" ) {
				gotoEnd = clearQueue;
				clearQueue = type;
				type = undefined;
			}
			if ( clearQueue && type !== false ) {
				this.queue( type || "fx", [] );
			}

			return this.each( function() {
				var dequeue = true,
					index = type != null && type + "queueHooks",
					timers = jQuery.timers,
					data = dataPriv.get( this );

				if ( index ) {
					if ( data[ index ] && data[ index ].stop ) {
						stopQueue( data[ index ] );
					}
				} else {
					for ( index in data ) {
						if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
							stopQueue( data[ index ] );
						}
					}
				}

				for ( index = timers.length; index--; ) {
					if ( timers[ index ].elem === this &&
						( type == null || timers[ index ].queue === type ) ) {

						timers[ index ].anim.stop( gotoEnd );
						dequeue = false;
						timers.splice( index, 1 );
					}
				}

				// Start the next in the queue if the last step wasn't forced.
				// Timers currently will call their complete callbacks, which
				// will dequeue but only if they were gotoEnd.
				if ( dequeue || !gotoEnd ) {
					jQuery.dequeue( this, type );
				}
			} );
		},
		finish: function( type ) {
			if ( type !== false ) {
				type = type || "fx";
			}
			return this.each( function() {
				var index,
					data = dataPriv.get( this ),
					queue = data[ type + "queue" ],
					hooks = data[ type + "queueHooks" ],
					timers = jQuery.timers,
					length = queue ? queue.length : 0;

				// Enable finishing flag on private data
				data.finish = true;

				// Empty the queue first
				jQuery.queue( this, type, [] );

				if ( hooks && hooks.stop ) {
					hooks.stop.call( this, true );
				}

				// Look for any active animations, and finish them
				for ( index = timers.length; index--; ) {
					if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
						timers[ index ].anim.stop( true );
						timers.splice( index, 1 );
					}
				}

				// Look for any animations in the old queue and finish them
				for ( index = 0; index < length; index++ ) {
					if ( queue[ index ] && queue[ index ].finish ) {
						queue[ index ].finish.call( this );
					}
				}

				// Turn off finishing flag
				delete data.finish;
			} );
		}
	} );

	jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
		var cssFn = jQuery.fn[ name ];
		jQuery.fn[ name ] = function( speed, easing, callback ) {
			return speed == null || typeof speed === "boolean" ?
				cssFn.apply( this, arguments ) :
				this.animate( genFx( name, true ), speed, easing, callback );
		};
	} );

	// Generate shortcuts for custom animations
	jQuery.each( {
		slideDown: genFx( "show" ),
		slideUp: genFx( "hide" ),
		slideToggle: genFx( "toggle" ),
		fadeIn: { opacity: "show" },
		fadeOut: { opacity: "hide" },
		fadeToggle: { opacity: "toggle" }
	}, function( name, props ) {
		jQuery.fn[ name ] = function( speed, easing, callback ) {
			return this.animate( props, speed, easing, callback );
		};
	} );

	jQuery.timers = [];
	jQuery.fx.tick = function() {
		var timer,
			i = 0,
			timers = jQuery.timers;

		fxNow = jQuery.now();

		for ( ; i < timers.length; i++ ) {
			timer = timers[ i ];

			// Checks the timer has not already been removed
			if ( !timer() && timers[ i ] === timer ) {
				timers.splice( i--, 1 );
			}
		}

		if ( !timers.length ) {
			jQuery.fx.stop();
		}
		fxNow = undefined;
	};

	jQuery.fx.timer = function( timer ) {
		jQuery.timers.push( timer );
		if ( timer() ) {
			jQuery.fx.start();
		} else {
			jQuery.timers.pop();
		}
	};

	jQuery.fx.interval = 13;
	jQuery.fx.start = function() {
		if ( !timerId ) {
			timerId = window.setInterval( jQuery.fx.tick, jQuery.fx.interval );
		}
	};

	jQuery.fx.stop = function() {
		window.clearInterval( timerId );

		timerId = null;
	};

	jQuery.fx.speeds = {
		slow: 600,
		fast: 200,

		// Default speed
		_default: 400
	};


	// Based off of the plugin by Clint Helfers, with permission.
	// http://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
	jQuery.fn.delay = function( time, type ) {
		time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
		type = type || "fx";

		return this.queue( type, function( next, hooks ) {
			var timeout = window.setTimeout( next, time );
			hooks.stop = function() {
				window.clearTimeout( timeout );
			};
		} );
	};


	( function() {
		var input = document.createElement( "input" ),
			select = document.createElement( "select" ),
			opt = select.appendChild( document.createElement( "option" ) );

		input.type = "checkbox";

		// Support: iOS<=5.1, Android<=4.2+
		// Default value for a checkbox should be "on"
		support.checkOn = input.value !== "";

		// Support: IE<=11+
		// Must access selectedIndex to make default options select
		support.optSelected = opt.selected;

		// Support: Android<=2.3
		// Options inside disabled selects are incorrectly marked as disabled
		select.disabled = true;
		support.optDisabled = !opt.disabled;

		// Support: IE<=11+
		// An input loses its value after becoming a radio
		input = document.createElement( "input" );
		input.value = "t";
		input.type = "radio";
		support.radioValue = input.value === "t";
	} )();


	var boolHook,
		attrHandle = jQuery.expr.attrHandle;

	jQuery.fn.extend( {
		attr: function( name, value ) {
			return access( this, jQuery.attr, name, value, arguments.length > 1 );
		},

		removeAttr: function( name ) {
			return this.each( function() {
				jQuery.removeAttr( this, name );
			} );
		}
	} );

	jQuery.extend( {
		attr: function( elem, name, value ) {
			var ret, hooks,
				nType = elem.nodeType;

			// Don't get/set attributes on text, comment and attribute nodes
			if ( nType === 3 || nType === 8 || nType === 2 ) {
				return;
			}

			// Fallback to prop when attributes are not supported
			if ( typeof elem.getAttribute === "undefined" ) {
				return jQuery.prop( elem, name, value );
			}

			// All attributes are lowercase
			// Grab necessary hook if one is defined
			if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
				name = name.toLowerCase();
				hooks = jQuery.attrHooks[ name ] ||
					( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
			}

			if ( value !== undefined ) {
				if ( value === null ) {
					jQuery.removeAttr( elem, name );
					return;
				}

				if ( hooks && "set" in hooks &&
					( ret = hooks.set( elem, value, name ) ) !== undefined ) {
					return ret;
				}

				elem.setAttribute( name, value + "" );
				return value;
			}

			if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
				return ret;
			}

			ret = jQuery.find.attr( elem, name );

			// Non-existent attributes return null, we normalize to undefined
			return ret == null ? undefined : ret;
		},

		attrHooks: {
			type: {
				set: function( elem, value ) {
					if ( !support.radioValue && value === "radio" &&
						jQuery.nodeName( elem, "input" ) ) {
						var val = elem.value;
						elem.setAttribute( "type", value );
						if ( val ) {
							elem.value = val;
						}
						return value;
					}
				}
			}
		},

		removeAttr: function( elem, value ) {
			var name, propName,
				i = 0,
				attrNames = value && value.match( rnotwhite );

			if ( attrNames && elem.nodeType === 1 ) {
				while ( ( name = attrNames[ i++ ] ) ) {
					propName = jQuery.propFix[ name ] || name;

					// Boolean attributes get special treatment (#10870)
					if ( jQuery.expr.match.bool.test( name ) ) {

						// Set corresponding property to false
						elem[ propName ] = false;
					}

					elem.removeAttribute( name );
				}
			}
		}
	} );

	// Hooks for boolean attributes
	boolHook = {
		set: function( elem, value, name ) {
			if ( value === false ) {

				// Remove boolean attributes when set to false
				jQuery.removeAttr( elem, name );
			} else {
				elem.setAttribute( name, name );
			}
			return name;
		}
	};
	jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
		var getter = attrHandle[ name ] || jQuery.find.attr;

		attrHandle[ name ] = function( elem, name, isXML ) {
			var ret, handle;
			if ( !isXML ) {

				// Avoid an infinite loop by temporarily removing this function from the getter
				handle = attrHandle[ name ];
				attrHandle[ name ] = ret;
				ret = getter( elem, name, isXML ) != null ?
					name.toLowerCase() :
					null;
				attrHandle[ name ] = handle;
			}
			return ret;
		};
	} );




	var rfocusable = /^(?:input|select|textarea|button)$/i,
		rclickable = /^(?:a|area)$/i;

	jQuery.fn.extend( {
		prop: function( name, value ) {
			return access( this, jQuery.prop, name, value, arguments.length > 1 );
		},

		removeProp: function( name ) {
			return this.each( function() {
				delete this[ jQuery.propFix[ name ] || name ];
			} );
		}
	} );

	jQuery.extend( {
		prop: function( elem, name, value ) {
			var ret, hooks,
				nType = elem.nodeType;

			// Don't get/set properties on text, comment and attribute nodes
			if ( nType === 3 || nType === 8 || nType === 2 ) {
				return;
			}

			if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

				// Fix name and attach hooks
				name = jQuery.propFix[ name ] || name;
				hooks = jQuery.propHooks[ name ];
			}

			if ( value !== undefined ) {
				if ( hooks && "set" in hooks &&
					( ret = hooks.set( elem, value, name ) ) !== undefined ) {
					return ret;
				}

				return ( elem[ name ] = value );
			}

			if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
				return ret;
			}

			return elem[ name ];
		},

		propHooks: {
			tabIndex: {
				get: function( elem ) {

					// elem.tabIndex doesn't always return the
					// correct value when it hasn't been explicitly set
					// http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
					// Use proper attribute retrieval(#12072)
					var tabindex = jQuery.find.attr( elem, "tabindex" );

					return tabindex ?
						parseInt( tabindex, 10 ) :
						rfocusable.test( elem.nodeName ) ||
							rclickable.test( elem.nodeName ) && elem.href ?
								0 :
								-1;
				}
			}
		},

		propFix: {
			"for": "htmlFor",
			"class": "className"
		}
	} );

	// Support: IE <=11 only
	// Accessing the selectedIndex property
	// forces the browser to respect setting selected
	// on the option
	// The getter ensures a default option is selected
	// when in an optgroup
	if ( !support.optSelected ) {
		jQuery.propHooks.selected = {
			get: function( elem ) {
				var parent = elem.parentNode;
				if ( parent && parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
				return null;
			},
			set: function( elem ) {
				var parent = elem.parentNode;
				if ( parent ) {
					parent.selectedIndex;

					if ( parent.parentNode ) {
						parent.parentNode.selectedIndex;
					}
				}
			}
		};
	}

	jQuery.each( [
		"tabIndex",
		"readOnly",
		"maxLength",
		"cellSpacing",
		"cellPadding",
		"rowSpan",
		"colSpan",
		"useMap",
		"frameBorder",
		"contentEditable"
	], function() {
		jQuery.propFix[ this.toLowerCase() ] = this;
	} );




	var rclass = /[\t\r\n\f]/g;

	function getClass( elem ) {
		return elem.getAttribute && elem.getAttribute( "class" ) || "";
	}

	jQuery.fn.extend( {
		addClass: function( value ) {
			var classes, elem, cur, curValue, clazz, j, finalValue,
				i = 0;

			if ( jQuery.isFunction( value ) ) {
				return this.each( function( j ) {
					jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
				} );
			}

			if ( typeof value === "string" && value ) {
				classes = value.match( rnotwhite ) || [];

				while ( ( elem = this[ i++ ] ) ) {
					curValue = getClass( elem );
					cur = elem.nodeType === 1 &&
						( " " + curValue + " " ).replace( rclass, " " );

					if ( cur ) {
						j = 0;
						while ( ( clazz = classes[ j++ ] ) ) {
							if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
								cur += clazz + " ";
							}
						}

						// Only assign if different to avoid unneeded rendering.
						finalValue = jQuery.trim( cur );
						if ( curValue !== finalValue ) {
							elem.setAttribute( "class", finalValue );
						}
					}
				}
			}

			return this;
		},

		removeClass: function( value ) {
			var classes, elem, cur, curValue, clazz, j, finalValue,
				i = 0;

			if ( jQuery.isFunction( value ) ) {
				return this.each( function( j ) {
					jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
				} );
			}

			if ( !arguments.length ) {
				return this.attr( "class", "" );
			}

			if ( typeof value === "string" && value ) {
				classes = value.match( rnotwhite ) || [];

				while ( ( elem = this[ i++ ] ) ) {
					curValue = getClass( elem );

					// This expression is here for better compressibility (see addClass)
					cur = elem.nodeType === 1 &&
						( " " + curValue + " " ).replace( rclass, " " );

					if ( cur ) {
						j = 0;
						while ( ( clazz = classes[ j++ ] ) ) {

							// Remove *all* instances
							while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
								cur = cur.replace( " " + clazz + " ", " " );
							}
						}

						// Only assign if different to avoid unneeded rendering.
						finalValue = jQuery.trim( cur );
						if ( curValue !== finalValue ) {
							elem.setAttribute( "class", finalValue );
						}
					}
				}
			}

			return this;
		},

		toggleClass: function( value, stateVal ) {
			var type = typeof value;

			if ( typeof stateVal === "boolean" && type === "string" ) {
				return stateVal ? this.addClass( value ) : this.removeClass( value );
			}

			if ( jQuery.isFunction( value ) ) {
				return this.each( function( i ) {
					jQuery( this ).toggleClass(
						value.call( this, i, getClass( this ), stateVal ),
						stateVal
					);
				} );
			}

			return this.each( function() {
				var className, i, self, classNames;

				if ( type === "string" ) {

					// Toggle individual class names
					i = 0;
					self = jQuery( this );
					classNames = value.match( rnotwhite ) || [];

					while ( ( className = classNames[ i++ ] ) ) {

						// Check each className given, space separated list
						if ( self.hasClass( className ) ) {
							self.removeClass( className );
						} else {
							self.addClass( className );
						}
					}

				// Toggle whole class name
				} else if ( value === undefined || type === "boolean" ) {
					className = getClass( this );
					if ( className ) {

						// Store className if set
						dataPriv.set( this, "__className__", className );
					}

					// If the element has a class name or if we're passed `false`,
					// then remove the whole classname (if there was one, the above saved it).
					// Otherwise bring back whatever was previously saved (if anything),
					// falling back to the empty string if nothing was stored.
					if ( this.setAttribute ) {
						this.setAttribute( "class",
							className || value === false ?
							"" :
							dataPriv.get( this, "__className__" ) || ""
						);
					}
				}
			} );
		},

		hasClass: function( selector ) {
			var className, elem,
				i = 0;

			className = " " + selector + " ";
			while ( ( elem = this[ i++ ] ) ) {
				if ( elem.nodeType === 1 &&
					( " " + getClass( elem ) + " " ).replace( rclass, " " )
						.indexOf( className ) > -1
				) {
					return true;
				}
			}

			return false;
		}
	} );




	var rreturn = /\r/g,
		rspaces = /[\x20\t\r\n\f]+/g;

	jQuery.fn.extend( {
		val: function( value ) {
			var hooks, ret, isFunction,
				elem = this[ 0 ];

			if ( !arguments.length ) {
				if ( elem ) {
					hooks = jQuery.valHooks[ elem.type ] ||
						jQuery.valHooks[ elem.nodeName.toLowerCase() ];

					if ( hooks &&
						"get" in hooks &&
						( ret = hooks.get( elem, "value" ) ) !== undefined
					) {
						return ret;
					}

					ret = elem.value;

					return typeof ret === "string" ?

						// Handle most common string cases
						ret.replace( rreturn, "" ) :

						// Handle cases where value is null/undef or number
						ret == null ? "" : ret;
				}

				return;
			}

			isFunction = jQuery.isFunction( value );

			return this.each( function( i ) {
				var val;

				if ( this.nodeType !== 1 ) {
					return;
				}

				if ( isFunction ) {
					val = value.call( this, i, jQuery( this ).val() );
				} else {
					val = value;
				}

				// Treat null/undefined as ""; convert numbers to string
				if ( val == null ) {
					val = "";

				} else if ( typeof val === "number" ) {
					val += "";

				} else if ( jQuery.isArray( val ) ) {
					val = jQuery.map( val, function( value ) {
						return value == null ? "" : value + "";
					} );
				}

				hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

				// If set returns undefined, fall back to normal setting
				if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
					this.value = val;
				}
			} );
		}
	} );

	jQuery.extend( {
		valHooks: {
			option: {
				get: function( elem ) {

					var val = jQuery.find.attr( elem, "value" );
					return val != null ?
						val :

						// Support: IE10-11+
						// option.text throws exceptions (#14686, #14858)
						// Strip and collapse whitespace
						// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
						jQuery.trim( jQuery.text( elem ) ).replace( rspaces, " " );
				}
			},
			select: {
				get: function( elem ) {
					var value, option,
						options = elem.options,
						index = elem.selectedIndex,
						one = elem.type === "select-one" || index < 0,
						values = one ? null : [],
						max = one ? index + 1 : options.length,
						i = index < 0 ?
							max :
							one ? index : 0;

					// Loop through all the selected options
					for ( ; i < max; i++ ) {
						option = options[ i ];

						// IE8-9 doesn't update selected after form reset (#2551)
						if ( ( option.selected || i === index ) &&

								// Don't return options that are disabled or in a disabled optgroup
								( support.optDisabled ?
									!option.disabled : option.getAttribute( "disabled" ) === null ) &&
								( !option.parentNode.disabled ||
									!jQuery.nodeName( option.parentNode, "optgroup" ) ) ) {

							// Get the specific value for the option
							value = jQuery( option ).val();

							// We don't need an array for one selects
							if ( one ) {
								return value;
							}

							// Multi-Selects return an array
							values.push( value );
						}
					}

					return values;
				},

				set: function( elem, value ) {
					var optionSet, option,
						options = elem.options,
						values = jQuery.makeArray( value ),
						i = options.length;

					while ( i-- ) {
						option = options[ i ];
						if ( option.selected =
							jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
						) {
							optionSet = true;
						}
					}

					// Force browsers to behave consistently when non-matching value is set
					if ( !optionSet ) {
						elem.selectedIndex = -1;
					}
					return values;
				}
			}
		}
	} );

	// Radios and checkboxes getter/setter
	jQuery.each( [ "radio", "checkbox" ], function() {
		jQuery.valHooks[ this ] = {
			set: function( elem, value ) {
				if ( jQuery.isArray( value ) ) {
					return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
				}
			}
		};
		if ( !support.checkOn ) {
			jQuery.valHooks[ this ].get = function( elem ) {
				return elem.getAttribute( "value" ) === null ? "on" : elem.value;
			};
		}
	} );




	// Return jQuery for attributes-only inclusion


	var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/;

	jQuery.extend( jQuery.event, {

		trigger: function( event, data, elem, onlyHandlers ) {

			var i, cur, tmp, bubbleType, ontype, handle, special,
				eventPath = [ elem || document ],
				type = hasOwn.call( event, "type" ) ? event.type : event,
				namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

			cur = tmp = elem = elem || document;

			// Don't do events on text and comment nodes
			if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
				return;
			}

			// focus/blur morphs to focusin/out; ensure we're not firing them right now
			if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
				return;
			}

			if ( type.indexOf( "." ) > -1 ) {

				// Namespaced trigger; create a regexp to match event type in handle()
				namespaces = type.split( "." );
				type = namespaces.shift();
				namespaces.sort();
			}
			ontype = type.indexOf( ":" ) < 0 && "on" + type;

			// Caller can pass in a jQuery.Event object, Object, or just an event type string
			event = event[ jQuery.expando ] ?
				event :
				new jQuery.Event( type, typeof event === "object" && event );

			// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
			event.isTrigger = onlyHandlers ? 2 : 3;
			event.namespace = namespaces.join( "." );
			event.rnamespace = event.namespace ?
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
				null;

			// Clean up the event in case it is being reused
			event.result = undefined;
			if ( !event.target ) {
				event.target = elem;
			}

			// Clone any incoming data and prepend the event, creating the handler arg list
			data = data == null ?
				[ event ] :
				jQuery.makeArray( data, [ event ] );

			// Allow special events to draw outside the lines
			special = jQuery.event.special[ type ] || {};
			if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
				return;
			}

			// Determine event propagation path in advance, per W3C events spec (#9951)
			// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
			if ( !onlyHandlers && !special.noBubble && !jQuery.isWindow( elem ) ) {

				bubbleType = special.delegateType || type;
				if ( !rfocusMorph.test( bubbleType + type ) ) {
					cur = cur.parentNode;
				}
				for ( ; cur; cur = cur.parentNode ) {
					eventPath.push( cur );
					tmp = cur;
				}

				// Only add window if we got to document (e.g., not plain obj or detached DOM)
				if ( tmp === ( elem.ownerDocument || document ) ) {
					eventPath.push( tmp.defaultView || tmp.parentWindow || window );
				}
			}

			// Fire handlers on the event path
			i = 0;
			while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {

				event.type = i > 1 ?
					bubbleType :
					special.bindType || type;

				// jQuery handler
				handle = ( dataPriv.get( cur, "events" ) || {} )[ event.type ] &&
					dataPriv.get( cur, "handle" );
				if ( handle ) {
					handle.apply( cur, data );
				}

				// Native handler
				handle = ontype && cur[ ontype ];
				if ( handle && handle.apply && acceptData( cur ) ) {
					event.result = handle.apply( cur, data );
					if ( event.result === false ) {
						event.preventDefault();
					}
				}
			}
			event.type = type;

			// If nobody prevented the default action, do it now
			if ( !onlyHandlers && !event.isDefaultPrevented() ) {

				if ( ( !special._default ||
					special._default.apply( eventPath.pop(), data ) === false ) &&
					acceptData( elem ) ) {

					// Call a native DOM method on the target with the same name name as the event.
					// Don't do default actions on window, that's where global variables be (#6170)
					if ( ontype && jQuery.isFunction( elem[ type ] ) && !jQuery.isWindow( elem ) ) {

						// Don't re-trigger an onFOO event when we call its FOO() method
						tmp = elem[ ontype ];

						if ( tmp ) {
							elem[ ontype ] = null;
						}

						// Prevent re-triggering of the same event, since we already bubbled it above
						jQuery.event.triggered = type;
						elem[ type ]();
						jQuery.event.triggered = undefined;

						if ( tmp ) {
							elem[ ontype ] = tmp;
						}
					}
				}
			}

			return event.result;
		},

		// Piggyback on a donor event to simulate a different one
		simulate: function( type, elem, event ) {
			var e = jQuery.extend(
				new jQuery.Event(),
				event,
				{
					type: type,
					isSimulated: true

					// Previously, `originalEvent: {}` was set here, so stopPropagation call
					// would not be triggered on donor event, since in our own
					// jQuery.event.stopPropagation function we had a check for existence of
					// originalEvent.stopPropagation method, so, consequently it would be a noop.
					//
					// But now, this "simulate" function is used only for events
					// for which stopPropagation() is noop, so there is no need for that anymore.
					//
					// For the 1.x branch though, guard for "click" and "submit"
					// events is still used, but was moved to jQuery.event.stopPropagation function
					// because `originalEvent` should point to the original event for the constancy
					// with other events and for more focused logic
				}
			);

			jQuery.event.trigger( e, null, elem );

			if ( e.isDefaultPrevented() ) {
				event.preventDefault();
			}
		}

	} );

	jQuery.fn.extend( {

		trigger: function( type, data ) {
			return this.each( function() {
				jQuery.event.trigger( type, data, this );
			} );
		},
		triggerHandler: function( type, data ) {
			var elem = this[ 0 ];
			if ( elem ) {
				return jQuery.event.trigger( type, data, elem, true );
			}
		}
	} );


	jQuery.each( ( "blur focus focusin focusout load resize scroll unload click dblclick " +
		"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
		"change select submit keydown keypress keyup error contextmenu" ).split( " " ),
		function( i, name ) {

		// Handle event binding
		jQuery.fn[ name ] = function( data, fn ) {
			return arguments.length > 0 ?
				this.on( name, null, data, fn ) :
				this.trigger( name );
		};
	} );

	jQuery.fn.extend( {
		hover: function( fnOver, fnOut ) {
			return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
		}
	} );




	support.focusin = "onfocusin" in window;


	// Support: Firefox
	// Firefox doesn't have focus(in | out) events
	// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
	//
	// Support: Chrome, Safari
	// focus(in | out) events fire after focus & blur events,
	// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
	// Related ticket - https://code.google.com/p/chromium/issues/detail?id=449857
	if ( !support.focusin ) {
		jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

			// Attach a single capturing handler on the document while someone wants focusin/focusout
			var handler = function( event ) {
				jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
			};

			jQuery.event.special[ fix ] = {
				setup: function() {
					var doc = this.ownerDocument || this,
						attaches = dataPriv.access( doc, fix );

					if ( !attaches ) {
						doc.addEventListener( orig, handler, true );
					}
					dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
				},
				teardown: function() {
					var doc = this.ownerDocument || this,
						attaches = dataPriv.access( doc, fix ) - 1;

					if ( !attaches ) {
						doc.removeEventListener( orig, handler, true );
						dataPriv.remove( doc, fix );

					} else {
						dataPriv.access( doc, fix, attaches );
					}
				}
			};
		} );
	}
	var location = window.location;

	var nonce = jQuery.now();

	var rquery = ( /\?/ );



	// Support: Android 2.3
	// Workaround failure to string-cast null input
	jQuery.parseJSON = function( data ) {
		return JSON.parse( data + "" );
	};


	// Cross-browser xml parsing
	jQuery.parseXML = function( data ) {
		var xml;
		if ( !data || typeof data !== "string" ) {
			return null;
		}

		// Support: IE9
		try {
			xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
		} catch ( e ) {
			xml = undefined;
		}

		if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
			jQuery.error( "Invalid XML: " + data );
		}
		return xml;
	};


	var
		rhash = /#.*$/,
		rts = /([?&])_=[^&]*/,
		rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

		// #7653, #8125, #8152: local protocol detection
		rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
		rnoContent = /^(?:GET|HEAD)$/,
		rprotocol = /^\/\//,

		/* Prefilters
		 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
		 * 2) These are called:
		 *    - BEFORE asking for a transport
		 *    - AFTER param serialization (s.data is a string if s.processData is true)
		 * 3) key is the dataType
		 * 4) the catchall symbol "*" can be used
		 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
		 */
		prefilters = {},

		/* Transports bindings
		 * 1) key is the dataType
		 * 2) the catchall symbol "*" can be used
		 * 3) selection will start with transport dataType and THEN go to "*" if needed
		 */
		transports = {},

		// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
		allTypes = "*/".concat( "*" ),

		// Anchor tag for parsing the document origin
		originAnchor = document.createElement( "a" );
		originAnchor.href = location.href;

	// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
	function addToPrefiltersOrTransports( structure ) {

		// dataTypeExpression is optional and defaults to "*"
		return function( dataTypeExpression, func ) {

			if ( typeof dataTypeExpression !== "string" ) {
				func = dataTypeExpression;
				dataTypeExpression = "*";
			}

			var dataType,
				i = 0,
				dataTypes = dataTypeExpression.toLowerCase().match( rnotwhite ) || [];

			if ( jQuery.isFunction( func ) ) {

				// For each dataType in the dataTypeExpression
				while ( ( dataType = dataTypes[ i++ ] ) ) {

					// Prepend if requested
					if ( dataType[ 0 ] === "+" ) {
						dataType = dataType.slice( 1 ) || "*";
						( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

					// Otherwise append
					} else {
						( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
					}
				}
			}
		};
	}

	// Base inspection function for prefilters and transports
	function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

		var inspected = {},
			seekingTransport = ( structure === transports );

		function inspect( dataType ) {
			var selected;
			inspected[ dataType ] = true;
			jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
				var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
				if ( typeof dataTypeOrTransport === "string" &&
					!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

					options.dataTypes.unshift( dataTypeOrTransport );
					inspect( dataTypeOrTransport );
					return false;
				} else if ( seekingTransport ) {
					return !( selected = dataTypeOrTransport );
				}
			} );
			return selected;
		}

		return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
	}

	// A special extend for ajax options
	// that takes "flat" options (not to be deep extended)
	// Fixes #9887
	function ajaxExtend( target, src ) {
		var key, deep,
			flatOptions = jQuery.ajaxSettings.flatOptions || {};

		for ( key in src ) {
			if ( src[ key ] !== undefined ) {
				( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
			}
		}
		if ( deep ) {
			jQuery.extend( true, target, deep );
		}

		return target;
	}

	/* Handles responses to an ajax request:
	 * - finds the right dataType (mediates between content-type and expected dataType)
	 * - returns the corresponding response
	 */
	function ajaxHandleResponses( s, jqXHR, responses ) {

		var ct, type, finalDataType, firstDataType,
			contents = s.contents,
			dataTypes = s.dataTypes;

		// Remove auto dataType and get content-type in the process
		while ( dataTypes[ 0 ] === "*" ) {
			dataTypes.shift();
			if ( ct === undefined ) {
				ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
			}
		}

		// Check if we're dealing with a known content-type
		if ( ct ) {
			for ( type in contents ) {
				if ( contents[ type ] && contents[ type ].test( ct ) ) {
					dataTypes.unshift( type );
					break;
				}
			}
		}

		// Check to see if we have a response for the expected dataType
		if ( dataTypes[ 0 ] in responses ) {
			finalDataType = dataTypes[ 0 ];
		} else {

			// Try convertible dataTypes
			for ( type in responses ) {
				if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
					finalDataType = type;
					break;
				}
				if ( !firstDataType ) {
					firstDataType = type;
				}
			}

			// Or just use first one
			finalDataType = finalDataType || firstDataType;
		}

		// If we found a dataType
		// We add the dataType to the list if needed
		// and return the corresponding response
		if ( finalDataType ) {
			if ( finalDataType !== dataTypes[ 0 ] ) {
				dataTypes.unshift( finalDataType );
			}
			return responses[ finalDataType ];
		}
	}

	/* Chain conversions given the request and the original response
	 * Also sets the responseXXX fields on the jqXHR instance
	 */
	function ajaxConvert( s, response, jqXHR, isSuccess ) {
		var conv2, current, conv, tmp, prev,
			converters = {},

			// Work with a copy of dataTypes in case we need to modify it for conversion
			dataTypes = s.dataTypes.slice();

		// Create converters map with lowercased keys
		if ( dataTypes[ 1 ] ) {
			for ( conv in s.converters ) {
				converters[ conv.toLowerCase() ] = s.converters[ conv ];
			}
		}

		current = dataTypes.shift();

		// Convert to each sequential dataType
		while ( current ) {

			if ( s.responseFields[ current ] ) {
				jqXHR[ s.responseFields[ current ] ] = response;
			}

			// Apply the dataFilter if provided
			if ( !prev && isSuccess && s.dataFilter ) {
				response = s.dataFilter( response, s.dataType );
			}

			prev = current;
			current = dataTypes.shift();

			if ( current ) {

			// There's only work to do if current dataType is non-auto
				if ( current === "*" ) {

					current = prev;

				// Convert response if prev dataType is non-auto and differs from current
				} else if ( prev !== "*" && prev !== current ) {

					// Seek a direct converter
					conv = converters[ prev + " " + current ] || converters[ "* " + current ];

					// If none found, seek a pair
					if ( !conv ) {
						for ( conv2 in converters ) {

							// If conv2 outputs current
							tmp = conv2.split( " " );
							if ( tmp[ 1 ] === current ) {

								// If prev can be converted to accepted input
								conv = converters[ prev + " " + tmp[ 0 ] ] ||
									converters[ "* " + tmp[ 0 ] ];
								if ( conv ) {

									// Condense equivalence converters
									if ( conv === true ) {
										conv = converters[ conv2 ];

									// Otherwise, insert the intermediate dataType
									} else if ( converters[ conv2 ] !== true ) {
										current = tmp[ 0 ];
										dataTypes.unshift( tmp[ 1 ] );
									}
									break;
								}
							}
						}
					}

					// Apply converter (if not an equivalence)
					if ( conv !== true ) {

						// Unless errors are allowed to bubble, catch and return them
						if ( conv && s.throws ) {
							response = conv( response );
						} else {
							try {
								response = conv( response );
							} catch ( e ) {
								return {
									state: "parsererror",
									error: conv ? e : "No conversion from " + prev + " to " + current
								};
							}
						}
					}
				}
			}
		}

		return { state: "success", data: response };
	}

	jQuery.extend( {

		// Counter for holding the number of active queries
		active: 0,

		// Last-Modified header cache for next request
		lastModified: {},
		etag: {},

		ajaxSettings: {
			url: location.href,
			type: "GET",
			isLocal: rlocalProtocol.test( location.protocol ),
			global: true,
			processData: true,
			async: true,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			/*
			timeout: 0,
			data: null,
			dataType: null,
			username: null,
			password: null,
			cache: null,
			throws: false,
			traditional: false,
			headers: {},
			*/

			accepts: {
				"*": allTypes,
				text: "text/plain",
				html: "text/html",
				xml: "application/xml, text/xml",
				json: "application/json, text/javascript"
			},

			contents: {
				xml: /\bxml\b/,
				html: /\bhtml/,
				json: /\bjson\b/
			},

			responseFields: {
				xml: "responseXML",
				text: "responseText",
				json: "responseJSON"
			},

			// Data converters
			// Keys separate source (or catchall "*") and destination types with a single space
			converters: {

				// Convert anything to text
				"* text": String,

				// Text to html (true = no transformation)
				"text html": true,

				// Evaluate text as a json expression
				"text json": jQuery.parseJSON,

				// Parse text as xml
				"text xml": jQuery.parseXML
			},

			// For options that shouldn't be deep extended:
			// you can add your own custom options here if
			// and when you create one that shouldn't be
			// deep extended (see ajaxExtend)
			flatOptions: {
				url: true,
				context: true
			}
		},

		// Creates a full fledged settings object into target
		// with both ajaxSettings and settings fields.
		// If target is omitted, writes into ajaxSettings.
		ajaxSetup: function( target, settings ) {
			return settings ?

				// Building a settings object
				ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

				// Extending ajaxSettings
				ajaxExtend( jQuery.ajaxSettings, target );
		},

		ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
		ajaxTransport: addToPrefiltersOrTransports( transports ),

		// Main method
		ajax: function( url, options ) {

			// If url is an object, simulate pre-1.5 signature
			if ( typeof url === "object" ) {
				options = url;
				url = undefined;
			}

			// Force options to be an object
			options = options || {};

			var transport,

				// URL without anti-cache param
				cacheURL,

				// Response headers
				responseHeadersString,
				responseHeaders,

				// timeout handle
				timeoutTimer,

				// Url cleanup var
				urlAnchor,

				// To know if global events are to be dispatched
				fireGlobals,

				// Loop variable
				i,

				// Create the final options object
				s = jQuery.ajaxSetup( {}, options ),

				// Callbacks context
				callbackContext = s.context || s,

				// Context for global events is callbackContext if it is a DOM node or jQuery collection
				globalEventContext = s.context &&
					( callbackContext.nodeType || callbackContext.jquery ) ?
						jQuery( callbackContext ) :
						jQuery.event,

				// Deferreds
				deferred = jQuery.Deferred(),
				completeDeferred = jQuery.Callbacks( "once memory" ),

				// Status-dependent callbacks
				statusCode = s.statusCode || {},

				// Headers (they are sent all at once)
				requestHeaders = {},
				requestHeadersNames = {},

				// The jqXHR state
				state = 0,

				// Default abort message
				strAbort = "canceled",

				// Fake xhr
				jqXHR = {
					readyState: 0,

					// Builds headers hashtable if needed
					getResponseHeader: function( key ) {
						var match;
						if ( state === 2 ) {
							if ( !responseHeaders ) {
								responseHeaders = {};
								while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
									responseHeaders[ match[ 1 ].toLowerCase() ] = match[ 2 ];
								}
							}
							match = responseHeaders[ key.toLowerCase() ];
						}
						return match == null ? null : match;
					},

					// Raw string
					getAllResponseHeaders: function() {
						return state === 2 ? responseHeadersString : null;
					},

					// Caches the header
					setRequestHeader: function( name, value ) {
						var lname = name.toLowerCase();
						if ( !state ) {
							name = requestHeadersNames[ lname ] = requestHeadersNames[ lname ] || name;
							requestHeaders[ name ] = value;
						}
						return this;
					},

					// Overrides response content-type header
					overrideMimeType: function( type ) {
						if ( !state ) {
							s.mimeType = type;
						}
						return this;
					},

					// Status-dependent callbacks
					statusCode: function( map ) {
						var code;
						if ( map ) {
							if ( state < 2 ) {
								for ( code in map ) {

									// Lazy-add the new callback in a way that preserves old ones
									statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
								}
							} else {

								// Execute the appropriate callbacks
								jqXHR.always( map[ jqXHR.status ] );
							}
						}
						return this;
					},

					// Cancel the request
					abort: function( statusText ) {
						var finalText = statusText || strAbort;
						if ( transport ) {
							transport.abort( finalText );
						}
						done( 0, finalText );
						return this;
					}
				};

			// Attach deferreds
			deferred.promise( jqXHR ).complete = completeDeferred.add;
			jqXHR.success = jqXHR.done;
			jqXHR.error = jqXHR.fail;

			// Remove hash character (#7531: and string promotion)
			// Add protocol if not provided (prefilters might expect it)
			// Handle falsy url in the settings object (#10093: consistency with old signature)
			// We also use the url parameter if available
			s.url = ( ( url || s.url || location.href ) + "" ).replace( rhash, "" )
				.replace( rprotocol, location.protocol + "//" );

			// Alias method option to type as per ticket #12004
			s.type = options.method || options.type || s.method || s.type;

			// Extract dataTypes list
			s.dataTypes = jQuery.trim( s.dataType || "*" ).toLowerCase().match( rnotwhite ) || [ "" ];

			// A cross-domain request is in order when the origin doesn't match the current origin.
			if ( s.crossDomain == null ) {
				urlAnchor = document.createElement( "a" );

				// Support: IE8-11+
				// IE throws exception if url is malformed, e.g. http://example.com:80x/
				try {
					urlAnchor.href = s.url;

					// Support: IE8-11+
					// Anchor's host property isn't correctly set when s.url is relative
					urlAnchor.href = urlAnchor.href;
					s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
						urlAnchor.protocol + "//" + urlAnchor.host;
				} catch ( e ) {

					// If there is an error parsing the URL, assume it is crossDomain,
					// it can be rejected by the transport if it is invalid
					s.crossDomain = true;
				}
			}

			// Convert data if not already a string
			if ( s.data && s.processData && typeof s.data !== "string" ) {
				s.data = jQuery.param( s.data, s.traditional );
			}

			// Apply prefilters
			inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

			// If request was aborted inside a prefilter, stop there
			if ( state === 2 ) {
				return jqXHR;
			}

			// We can fire global events as of now if asked to
			// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
			fireGlobals = jQuery.event && s.global;

			// Watch for a new set of requests
			if ( fireGlobals && jQuery.active++ === 0 ) {
				jQuery.event.trigger( "ajaxStart" );
			}

			// Uppercase the type
			s.type = s.type.toUpperCase();

			// Determine if request has content
			s.hasContent = !rnoContent.test( s.type );

			// Save the URL in case we're toying with the If-Modified-Since
			// and/or If-None-Match header later on
			cacheURL = s.url;

			// More options handling for requests with no content
			if ( !s.hasContent ) {

				// If data is available, append data to url
				if ( s.data ) {
					cacheURL = ( s.url += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data );

					// #9682: remove data so that it's not used in an eventual retry
					delete s.data;
				}

				// Add anti-cache in url if needed
				if ( s.cache === false ) {
					s.url = rts.test( cacheURL ) ?

						// If there is already a '_' parameter, set its value
						cacheURL.replace( rts, "$1_=" + nonce++ ) :

						// Otherwise add one to the end
						cacheURL + ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + nonce++;
				}
			}

			// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
			if ( s.ifModified ) {
				if ( jQuery.lastModified[ cacheURL ] ) {
					jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
				}
				if ( jQuery.etag[ cacheURL ] ) {
					jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
				}
			}

			// Set the correct header, if data is being sent
			if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
				jqXHR.setRequestHeader( "Content-Type", s.contentType );
			}

			// Set the Accepts header for the server, depending on the dataType
			jqXHR.setRequestHeader(
				"Accept",
				s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
					s.accepts[ s.dataTypes[ 0 ] ] +
						( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
					s.accepts[ "*" ]
			);

			// Check for headers option
			for ( i in s.headers ) {
				jqXHR.setRequestHeader( i, s.headers[ i ] );
			}

			// Allow custom headers/mimetypes and early abort
			if ( s.beforeSend &&
				( s.beforeSend.call( callbackContext, jqXHR, s ) === false || state === 2 ) ) {

				// Abort if not done already and return
				return jqXHR.abort();
			}

			// Aborting is no longer a cancellation
			strAbort = "abort";

			// Install callbacks on deferreds
			for ( i in { success: 1, error: 1, complete: 1 } ) {
				jqXHR[ i ]( s[ i ] );
			}

			// Get transport
			transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

			// If no transport, we auto-abort
			if ( !transport ) {
				done( -1, "No Transport" );
			} else {
				jqXHR.readyState = 1;

				// Send global event
				if ( fireGlobals ) {
					globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
				}

				// If request was aborted inside ajaxSend, stop there
				if ( state === 2 ) {
					return jqXHR;
				}

				// Timeout
				if ( s.async && s.timeout > 0 ) {
					timeoutTimer = window.setTimeout( function() {
						jqXHR.abort( "timeout" );
					}, s.timeout );
				}

				try {
					state = 1;
					transport.send( requestHeaders, done );
				} catch ( e ) {

					// Propagate exception as error if not done
					if ( state < 2 ) {
						done( -1, e );

					// Simply rethrow otherwise
					} else {
						throw e;
					}
				}
			}

			// Callback for when everything is done
			function done( status, nativeStatusText, responses, headers ) {
				var isSuccess, success, error, response, modified,
					statusText = nativeStatusText;

				// Called once
				if ( state === 2 ) {
					return;
				}

				// State is "done" now
				state = 2;

				// Clear timeout if it exists
				if ( timeoutTimer ) {
					window.clearTimeout( timeoutTimer );
				}

				// Dereference transport for early garbage collection
				// (no matter how long the jqXHR object will be used)
				transport = undefined;

				// Cache response headers
				responseHeadersString = headers || "";

				// Set readyState
				jqXHR.readyState = status > 0 ? 4 : 0;

				// Determine if successful
				isSuccess = status >= 200 && status < 300 || status === 304;

				// Get response data
				if ( responses ) {
					response = ajaxHandleResponses( s, jqXHR, responses );
				}

				// Convert no matter what (that way responseXXX fields are always set)
				response = ajaxConvert( s, response, jqXHR, isSuccess );

				// If successful, handle type chaining
				if ( isSuccess ) {

					// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
					if ( s.ifModified ) {
						modified = jqXHR.getResponseHeader( "Last-Modified" );
						if ( modified ) {
							jQuery.lastModified[ cacheURL ] = modified;
						}
						modified = jqXHR.getResponseHeader( "etag" );
						if ( modified ) {
							jQuery.etag[ cacheURL ] = modified;
						}
					}

					// if no content
					if ( status === 204 || s.type === "HEAD" ) {
						statusText = "nocontent";

					// if not modified
					} else if ( status === 304 ) {
						statusText = "notmodified";

					// If we have data, let's convert it
					} else {
						statusText = response.state;
						success = response.data;
						error = response.error;
						isSuccess = !error;
					}
				} else {

					// Extract error from statusText and normalize for non-aborts
					error = statusText;
					if ( status || !statusText ) {
						statusText = "error";
						if ( status < 0 ) {
							status = 0;
						}
					}
				}

				// Set data for the fake xhr object
				jqXHR.status = status;
				jqXHR.statusText = ( nativeStatusText || statusText ) + "";

				// Success/Error
				if ( isSuccess ) {
					deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
				} else {
					deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
				}

				// Status-dependent callbacks
				jqXHR.statusCode( statusCode );
				statusCode = undefined;

				if ( fireGlobals ) {
					globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
						[ jqXHR, s, isSuccess ? success : error ] );
				}

				// Complete
				completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

				if ( fireGlobals ) {
					globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

					// Handle the global AJAX counter
					if ( !( --jQuery.active ) ) {
						jQuery.event.trigger( "ajaxStop" );
					}
				}
			}

			return jqXHR;
		},

		getJSON: function( url, data, callback ) {
			return jQuery.get( url, data, callback, "json" );
		},

		getScript: function( url, callback ) {
			return jQuery.get( url, undefined, callback, "script" );
		}
	} );

	jQuery.each( [ "get", "post" ], function( i, method ) {
		jQuery[ method ] = function( url, data, callback, type ) {

			// Shift arguments if data argument was omitted
			if ( jQuery.isFunction( data ) ) {
				type = type || callback;
				callback = data;
				data = undefined;
			}

			// The url can be an options object (which then must have .url)
			return jQuery.ajax( jQuery.extend( {
				url: url,
				type: method,
				dataType: type,
				data: data,
				success: callback
			}, jQuery.isPlainObject( url ) && url ) );
		};
	} );


	jQuery._evalUrl = function( url ) {
		return jQuery.ajax( {
			url: url,

			// Make this explicit, since user can override this through ajaxSetup (#11264)
			type: "GET",
			dataType: "script",
			async: false,
			global: false,
			"throws": true
		} );
	};


	jQuery.fn.extend( {
		wrapAll: function( html ) {
			var wrap;

			if ( jQuery.isFunction( html ) ) {
				return this.each( function( i ) {
					jQuery( this ).wrapAll( html.call( this, i ) );
				} );
			}

			if ( this[ 0 ] ) {

				// The elements to wrap the target around
				wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

				if ( this[ 0 ].parentNode ) {
					wrap.insertBefore( this[ 0 ] );
				}

				wrap.map( function() {
					var elem = this;

					while ( elem.firstElementChild ) {
						elem = elem.firstElementChild;
					}

					return elem;
				} ).append( this );
			}

			return this;
		},

		wrapInner: function( html ) {
			if ( jQuery.isFunction( html ) ) {
				return this.each( function( i ) {
					jQuery( this ).wrapInner( html.call( this, i ) );
				} );
			}

			return this.each( function() {
				var self = jQuery( this ),
					contents = self.contents();

				if ( contents.length ) {
					contents.wrapAll( html );

				} else {
					self.append( html );
				}
			} );
		},

		wrap: function( html ) {
			var isFunction = jQuery.isFunction( html );

			return this.each( function( i ) {
				jQuery( this ).wrapAll( isFunction ? html.call( this, i ) : html );
			} );
		},

		unwrap: function() {
			return this.parent().each( function() {
				if ( !jQuery.nodeName( this, "body" ) ) {
					jQuery( this ).replaceWith( this.childNodes );
				}
			} ).end();
		}
	} );


	jQuery.expr.filters.hidden = function( elem ) {
		return !jQuery.expr.filters.visible( elem );
	};
	jQuery.expr.filters.visible = function( elem ) {

		// Support: Opera <= 12.12
		// Opera reports offsetWidths and offsetHeights less than zero on some elements
		// Use OR instead of AND as the element is not visible if either is true
		// See tickets #10406 and #13132
		return elem.offsetWidth > 0 || elem.offsetHeight > 0 || elem.getClientRects().length > 0;
	};




	var r20 = /%20/g,
		rbracket = /\[\]$/,
		rCRLF = /\r?\n/g,
		rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
		rsubmittable = /^(?:input|select|textarea|keygen)/i;

	function buildParams( prefix, obj, traditional, add ) {
		var name;

		if ( jQuery.isArray( obj ) ) {

			// Serialize array item.
			jQuery.each( obj, function( i, v ) {
				if ( traditional || rbracket.test( prefix ) ) {

					// Treat each array item as a scalar.
					add( prefix, v );

				} else {

					// Item is non-scalar (array or object), encode its numeric index.
					buildParams(
						prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
						v,
						traditional,
						add
					);
				}
			} );

		} else if ( !traditional && jQuery.type( obj ) === "object" ) {

			// Serialize object item.
			for ( name in obj ) {
				buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
			}

		} else {

			// Serialize scalar item.
			add( prefix, obj );
		}
	}

	// Serialize an array of form elements or a set of
	// key/values into a query string
	jQuery.param = function( a, traditional ) {
		var prefix,
			s = [],
			add = function( key, value ) {

				// If value is a function, invoke it and return its value
				value = jQuery.isFunction( value ) ? value() : ( value == null ? "" : value );
				s[ s.length ] = encodeURIComponent( key ) + "=" + encodeURIComponent( value );
			};

		// Set traditional to true for jQuery <= 1.3.2 behavior.
		if ( traditional === undefined ) {
			traditional = jQuery.ajaxSettings && jQuery.ajaxSettings.traditional;
		}

		// If an array was passed in, assume that it is an array of form elements.
		if ( jQuery.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

			// Serialize the form elements
			jQuery.each( a, function() {
				add( this.name, this.value );
			} );

		} else {

			// If traditional, encode the "old" way (the way 1.3.2 or older
			// did it), otherwise encode params recursively.
			for ( prefix in a ) {
				buildParams( prefix, a[ prefix ], traditional, add );
			}
		}

		// Return the resulting serialization
		return s.join( "&" ).replace( r20, "+" );
	};

	jQuery.fn.extend( {
		serialize: function() {
			return jQuery.param( this.serializeArray() );
		},
		serializeArray: function() {
			return this.map( function() {

				// Can add propHook for "elements" to filter or add form elements
				var elements = jQuery.prop( this, "elements" );
				return elements ? jQuery.makeArray( elements ) : this;
			} )
			.filter( function() {
				var type = this.type;

				// Use .is( ":disabled" ) so that fieldset[disabled] works
				return this.name && !jQuery( this ).is( ":disabled" ) &&
					rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
					( this.checked || !rcheckableType.test( type ) );
			} )
			.map( function( i, elem ) {
				var val = jQuery( this ).val();

				return val == null ?
					null :
					jQuery.isArray( val ) ?
						jQuery.map( val, function( val ) {
							return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
						} ) :
						{ name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
			} ).get();
		}
	} );


	jQuery.ajaxSettings.xhr = function() {
		try {
			return new window.XMLHttpRequest();
		} catch ( e ) {}
	};

	var xhrSuccessStatus = {

			// File protocol always yields status code 0, assume 200
			0: 200,

			// Support: IE9
			// #1450: sometimes IE returns 1223 when it should be 204
			1223: 204
		},
		xhrSupported = jQuery.ajaxSettings.xhr();

	support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
	support.ajax = xhrSupported = !!xhrSupported;

	jQuery.ajaxTransport( function( options ) {
		var callback, errorCallback;

		// Cross domain only allowed if supported through XMLHttpRequest
		if ( support.cors || xhrSupported && !options.crossDomain ) {
			return {
				send: function( headers, complete ) {
					var i,
						xhr = options.xhr();

					xhr.open(
						options.type,
						options.url,
						options.async,
						options.username,
						options.password
					);

					// Apply custom fields if provided
					if ( options.xhrFields ) {
						for ( i in options.xhrFields ) {
							xhr[ i ] = options.xhrFields[ i ];
						}
					}

					// Override mime type if needed
					if ( options.mimeType && xhr.overrideMimeType ) {
						xhr.overrideMimeType( options.mimeType );
					}

					// X-Requested-With header
					// For cross-domain requests, seeing as conditions for a preflight are
					// akin to a jigsaw puzzle, we simply never set it to be sure.
					// (it can always be set on a per-request basis or even using ajaxSetup)
					// For same-domain requests, won't change header if already provided.
					if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
						headers[ "X-Requested-With" ] = "XMLHttpRequest";
					}

					// Set headers
					for ( i in headers ) {
						xhr.setRequestHeader( i, headers[ i ] );
					}

					// Callback
					callback = function( type ) {
						return function() {
							if ( callback ) {
								callback = errorCallback = xhr.onload =
									xhr.onerror = xhr.onabort = xhr.onreadystatechange = null;

								if ( type === "abort" ) {
									xhr.abort();
								} else if ( type === "error" ) {

									// Support: IE9
									// On a manual native abort, IE9 throws
									// errors on any property access that is not readyState
									if ( typeof xhr.status !== "number" ) {
										complete( 0, "error" );
									} else {
										complete(

											// File: protocol always yields status 0; see #8605, #14207
											xhr.status,
											xhr.statusText
										);
									}
								} else {
									complete(
										xhrSuccessStatus[ xhr.status ] || xhr.status,
										xhr.statusText,

										// Support: IE9 only
										// IE9 has no XHR2 but throws on binary (trac-11426)
										// For XHR2 non-text, let the caller handle it (gh-2498)
										( xhr.responseType || "text" ) !== "text"  ||
										typeof xhr.responseText !== "string" ?
											{ binary: xhr.response } :
											{ text: xhr.responseText },
										xhr.getAllResponseHeaders()
									);
								}
							}
						};
					};

					// Listen to events
					xhr.onload = callback();
					errorCallback = xhr.onerror = callback( "error" );

					// Support: IE9
					// Use onreadystatechange to replace onabort
					// to handle uncaught aborts
					if ( xhr.onabort !== undefined ) {
						xhr.onabort = errorCallback;
					} else {
						xhr.onreadystatechange = function() {

							// Check readyState before timeout as it changes
							if ( xhr.readyState === 4 ) {

								// Allow onerror to be called first,
								// but that will not handle a native abort
								// Also, save errorCallback to a variable
								// as xhr.onerror cannot be accessed
								window.setTimeout( function() {
									if ( callback ) {
										errorCallback();
									}
								} );
							}
						};
					}

					// Create the abort callback
					callback = callback( "abort" );

					try {

						// Do send the request (this may raise an exception)
						xhr.send( options.hasContent && options.data || null );
					} catch ( e ) {

						// #14683: Only rethrow if this hasn't been notified as an error yet
						if ( callback ) {
							throw e;
						}
					}
				},

				abort: function() {
					if ( callback ) {
						callback();
					}
				}
			};
		}
	} );




	// Install script dataType
	jQuery.ajaxSetup( {
		accepts: {
			script: "text/javascript, application/javascript, " +
				"application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /\b(?:java|ecma)script\b/
		},
		converters: {
			"text script": function( text ) {
				jQuery.globalEval( text );
				return text;
			}
		}
	} );

	// Handle cache's special case and crossDomain
	jQuery.ajaxPrefilter( "script", function( s ) {
		if ( s.cache === undefined ) {
			s.cache = false;
		}
		if ( s.crossDomain ) {
			s.type = "GET";
		}
	} );

	// Bind script tag hack transport
	jQuery.ajaxTransport( "script", function( s ) {

		// This transport only deals with cross domain requests
		if ( s.crossDomain ) {
			var script, callback;
			return {
				send: function( _, complete ) {
					script = jQuery( "<script>" ).prop( {
						charset: s.scriptCharset,
						src: s.url
					} ).on(
						"load error",
						callback = function( evt ) {
							script.remove();
							callback = null;
							if ( evt ) {
								complete( evt.type === "error" ? 404 : 200, evt.type );
							}
						}
					);

					// Use native DOM manipulation to avoid our domManip AJAX trickery
					document.head.appendChild( script[ 0 ] );
				},
				abort: function() {
					if ( callback ) {
						callback();
					}
				}
			};
		}
	} );




	var oldCallbacks = [],
		rjsonp = /(=)\?(?=&|$)|\?\?/;

	// Default jsonp settings
	jQuery.ajaxSetup( {
		jsonp: "callback",
		jsonpCallback: function() {
			var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
			this[ callback ] = true;
			return callback;
		}
	} );

	// Detect, normalize options and install callbacks for jsonp requests
	jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

		var callbackName, overwritten, responseContainer,
			jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
				"url" :
				typeof s.data === "string" &&
					( s.contentType || "" )
						.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
					rjsonp.test( s.data ) && "data"
			);

		// Handle iff the expected data type is "jsonp" or we have a parameter to set
		if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

			// Get callback name, remembering preexisting value associated with it
			callbackName = s.jsonpCallback = jQuery.isFunction( s.jsonpCallback ) ?
				s.jsonpCallback() :
				s.jsonpCallback;

			// Insert callback into url or form data
			if ( jsonProp ) {
				s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
			} else if ( s.jsonp !== false ) {
				s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
			}

			// Use data converter to retrieve json after script execution
			s.converters[ "script json" ] = function() {
				if ( !responseContainer ) {
					jQuery.error( callbackName + " was not called" );
				}
				return responseContainer[ 0 ];
			};

			// Force json dataType
			s.dataTypes[ 0 ] = "json";

			// Install callback
			overwritten = window[ callbackName ];
			window[ callbackName ] = function() {
				responseContainer = arguments;
			};

			// Clean-up function (fires after converters)
			jqXHR.always( function() {

				// If previous value didn't exist - remove it
				if ( overwritten === undefined ) {
					jQuery( window ).removeProp( callbackName );

				// Otherwise restore preexisting value
				} else {
					window[ callbackName ] = overwritten;
				}

				// Save back as free
				if ( s[ callbackName ] ) {

					// Make sure that re-using the options doesn't screw things around
					s.jsonpCallback = originalSettings.jsonpCallback;

					// Save the callback name for future use
					oldCallbacks.push( callbackName );
				}

				// Call if it was a function and we have a response
				if ( responseContainer && jQuery.isFunction( overwritten ) ) {
					overwritten( responseContainer[ 0 ] );
				}

				responseContainer = overwritten = undefined;
			} );

			// Delegate to script
			return "script";
		}
	} );




	// Argument "data" should be string of html
	// context (optional): If specified, the fragment will be created in this context,
	// defaults to document
	// keepScripts (optional): If true, will include scripts passed in the html string
	jQuery.parseHTML = function( data, context, keepScripts ) {
		if ( !data || typeof data !== "string" ) {
			return null;
		}
		if ( typeof context === "boolean" ) {
			keepScripts = context;
			context = false;
		}
		context = context || document;

		var parsed = rsingleTag.exec( data ),
			scripts = !keepScripts && [];

		// Single tag
		if ( parsed ) {
			return [ context.createElement( parsed[ 1 ] ) ];
		}

		parsed = buildFragment( [ data ], context, scripts );

		if ( scripts && scripts.length ) {
			jQuery( scripts ).remove();
		}

		return jQuery.merge( [], parsed.childNodes );
	};


	// Keep a copy of the old load method
	var _load = jQuery.fn.load;

	/**
	 * Load a url into a page
	 */
	jQuery.fn.load = function( url, params, callback ) {
		if ( typeof url !== "string" && _load ) {
			return _load.apply( this, arguments );
		}

		var selector, type, response,
			self = this,
			off = url.indexOf( " " );

		if ( off > -1 ) {
			selector = jQuery.trim( url.slice( off ) );
			url = url.slice( 0, off );
		}

		// If it's a function
		if ( jQuery.isFunction( params ) ) {

			// We assume that it's the callback
			callback = params;
			params = undefined;

		// Otherwise, build a param string
		} else if ( params && typeof params === "object" ) {
			type = "POST";
		}

		// If we have elements to modify, make the request
		if ( self.length > 0 ) {
			jQuery.ajax( {
				url: url,

				// If "type" variable is undefined, then "GET" method will be used.
				// Make value of this field explicit since
				// user can override it through ajaxSetup method
				type: type || "GET",
				dataType: "html",
				data: params
			} ).done( function( responseText ) {

				// Save response for use in complete callback
				response = arguments;

				self.html( selector ?

					// If a selector was specified, locate the right elements in a dummy div
					// Exclude scripts to avoid IE 'Permission Denied' errors
					jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

					// Otherwise use the full result
					responseText );

			// If the request succeeds, this function gets "data", "status", "jqXHR"
			// but they are ignored because response was set above.
			// If it fails, this function gets "jqXHR", "status", "error"
			} ).always( callback && function( jqXHR, status ) {
				self.each( function() {
					callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
				} );
			} );
		}

		return this;
	};




	// Attach a bunch of functions for handling common AJAX events
	jQuery.each( [
		"ajaxStart",
		"ajaxStop",
		"ajaxComplete",
		"ajaxError",
		"ajaxSuccess",
		"ajaxSend"
	], function( i, type ) {
		jQuery.fn[ type ] = function( fn ) {
			return this.on( type, fn );
		};
	} );




	jQuery.expr.filters.animated = function( elem ) {
		return jQuery.grep( jQuery.timers, function( fn ) {
			return elem === fn.elem;
		} ).length;
	};




	/**
	 * Gets a window from an element
	 */
	function getWindow( elem ) {
		return jQuery.isWindow( elem ) ? elem : elem.nodeType === 9 && elem.defaultView;
	}

	jQuery.offset = {
		setOffset: function( elem, options, i ) {
			var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
				position = jQuery.css( elem, "position" ),
				curElem = jQuery( elem ),
				props = {};

			// Set position first, in-case top/left are set even on static elem
			if ( position === "static" ) {
				elem.style.position = "relative";
			}

			curOffset = curElem.offset();
			curCSSTop = jQuery.css( elem, "top" );
			curCSSLeft = jQuery.css( elem, "left" );
			calculatePosition = ( position === "absolute" || position === "fixed" ) &&
				( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

			// Need to be able to calculate position if either
			// top or left is auto and position is either absolute or fixed
			if ( calculatePosition ) {
				curPosition = curElem.position();
				curTop = curPosition.top;
				curLeft = curPosition.left;

			} else {
				curTop = parseFloat( curCSSTop ) || 0;
				curLeft = parseFloat( curCSSLeft ) || 0;
			}

			if ( jQuery.isFunction( options ) ) {

				// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
				options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
			}

			if ( options.top != null ) {
				props.top = ( options.top - curOffset.top ) + curTop;
			}
			if ( options.left != null ) {
				props.left = ( options.left - curOffset.left ) + curLeft;
			}

			if ( "using" in options ) {
				options.using.call( elem, props );

			} else {
				curElem.css( props );
			}
		}
	};

	jQuery.fn.extend( {
		offset: function( options ) {
			if ( arguments.length ) {
				return options === undefined ?
					this :
					this.each( function( i ) {
						jQuery.offset.setOffset( this, options, i );
					} );
			}

			var docElem, win,
				elem = this[ 0 ],
				box = { top: 0, left: 0 },
				doc = elem && elem.ownerDocument;

			if ( !doc ) {
				return;
			}

			docElem = doc.documentElement;

			// Make sure it's not a disconnected DOM node
			if ( !jQuery.contains( docElem, elem ) ) {
				return box;
			}

			box = elem.getBoundingClientRect();
			win = getWindow( doc );
			return {
				top: box.top + win.pageYOffset - docElem.clientTop,
				left: box.left + win.pageXOffset - docElem.clientLeft
			};
		},

		position: function() {
			if ( !this[ 0 ] ) {
				return;
			}

			var offsetParent, offset,
				elem = this[ 0 ],
				parentOffset = { top: 0, left: 0 };

			// Fixed elements are offset from window (parentOffset = {top:0, left: 0},
			// because it is its only offset parent
			if ( jQuery.css( elem, "position" ) === "fixed" ) {

				// Assume getBoundingClientRect is there when computed position is fixed
				offset = elem.getBoundingClientRect();

			} else {

				// Get *real* offsetParent
				offsetParent = this.offsetParent();

				// Get correct offsets
				offset = this.offset();
				if ( !jQuery.nodeName( offsetParent[ 0 ], "html" ) ) {
					parentOffset = offsetParent.offset();
				}

				// Add offsetParent borders
				parentOffset.top += jQuery.css( offsetParent[ 0 ], "borderTopWidth", true );
				parentOffset.left += jQuery.css( offsetParent[ 0 ], "borderLeftWidth", true );
			}

			// Subtract parent offsets and element margins
			return {
				top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
				left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
			};
		},

		// This method will return documentElement in the following cases:
		// 1) For the element inside the iframe without offsetParent, this method will return
		//    documentElement of the parent window
		// 2) For the hidden or detached element
		// 3) For body or html element, i.e. in case of the html node - it will return itself
		//
		// but those exceptions were never presented as a real life use-cases
		// and might be considered as more preferable results.
		//
		// This logic, however, is not guaranteed and can change at any point in the future
		offsetParent: function() {
			return this.map( function() {
				var offsetParent = this.offsetParent;

				while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
					offsetParent = offsetParent.offsetParent;
				}

				return offsetParent || documentElement;
			} );
		}
	} );

	// Create scrollLeft and scrollTop methods
	jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
		var top = "pageYOffset" === prop;

		jQuery.fn[ method ] = function( val ) {
			return access( this, function( elem, method, val ) {
				var win = getWindow( elem );

				if ( val === undefined ) {
					return win ? win[ prop ] : elem[ method ];
				}

				if ( win ) {
					win.scrollTo(
						!top ? val : win.pageXOffset,
						top ? val : win.pageYOffset
					);

				} else {
					elem[ method ] = val;
				}
			}, method, val, arguments.length );
		};
	} );

	// Support: Safari<7-8+, Chrome<37-44+
	// Add the top/left cssHooks using jQuery.fn.position
	// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
	// Blink bug: https://code.google.com/p/chromium/issues/detail?id=229280
	// getComputedStyle returns percent when specified for top/left/bottom/right;
	// rather than make the css module depend on the offset module, just check for it here
	jQuery.each( [ "top", "left" ], function( i, prop ) {
		jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
			function( elem, computed ) {
				if ( computed ) {
					computed = curCSS( elem, prop );

					// If curCSS returns percentage, fallback to offset
					return rnumnonpx.test( computed ) ?
						jQuery( elem ).position()[ prop ] + "px" :
						computed;
				}
			}
		);
	} );


	// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
	jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
		jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
			function( defaultExtra, funcName ) {

			// Margin is only for outerHeight, outerWidth
			jQuery.fn[ funcName ] = function( margin, value ) {
				var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
					extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

				return access( this, function( elem, type, value ) {
					var doc;

					if ( jQuery.isWindow( elem ) ) {

						// As of 5/8/2012 this will yield incorrect results for Mobile Safari, but there
						// isn't a whole lot we can do. See pull request at this URL for discussion:
						// https://github.com/jquery/jquery/pull/764
						return elem.document.documentElement[ "client" + name ];
					}

					// Get document width or height
					if ( elem.nodeType === 9 ) {
						doc = elem.documentElement;

						// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
						// whichever is greatest
						return Math.max(
							elem.body[ "scroll" + name ], doc[ "scroll" + name ],
							elem.body[ "offset" + name ], doc[ "offset" + name ],
							doc[ "client" + name ]
						);
					}

					return value === undefined ?

						// Get width or height on the element, requesting but not forcing parseFloat
						jQuery.css( elem, type, extra ) :

						// Set width or height on the element
						jQuery.style( elem, type, value, extra );
				}, type, chainable ? margin : undefined, chainable, null );
			};
		} );
	} );


	jQuery.fn.extend( {

		bind: function( types, data, fn ) {
			return this.on( types, null, data, fn );
		},
		unbind: function( types, fn ) {
			return this.off( types, null, fn );
		},

		delegate: function( selector, types, data, fn ) {
			return this.on( types, selector, data, fn );
		},
		undelegate: function( selector, types, fn ) {

			// ( namespace ) or ( selector, types [, fn] )
			return arguments.length === 1 ?
				this.off( selector, "**" ) :
				this.off( types, selector || "**", fn );
		},
		size: function() {
			return this.length;
		}
	} );

	jQuery.fn.andSelf = jQuery.fn.addBack;




	// Register as a named AMD module, since jQuery can be concatenated with other
	// files that may use define, but not via a proper concatenation script that
	// understands anonymous AMD modules. A named AMD is safest and most robust
	// way to register. Lowercase jquery is used because AMD module names are
	// derived from file names, and jQuery is normally delivered in a lowercase
	// file name. Do this after creating the global so that if an AMD module wants
	// to call noConflict to hide this version of jQuery, it will work.

	// Note that for maximum portability, libraries that are not jQuery should
	// declare themselves as anonymous modules, and avoid setting a global if an
	// AMD loader is present. jQuery is a special case. For more information, see
	// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

	if ( true ) {
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
			return jQuery;
		}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}



	var

		// Map over jQuery in case of overwrite
		_jQuery = window.jQuery,

		// Map over the $ in case of overwrite
		_$ = window.$;

	jQuery.noConflict = function( deep ) {
		if ( window.$ === jQuery ) {
			window.$ = _$;
		}

		if ( deep && window.jQuery === jQuery ) {
			window.jQuery = _jQuery;
		}

		return jQuery;
	};

	// Expose jQuery and $ identifiers, even in AMD
	// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
	// and CommonJS for browser emulators (#13566)
	if ( !noGlobal ) {
		window.jQuery = window.$ = jQuery;
	}

	return jQuery;
	}));


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, process) {/*!
	 * Vue.js v1.0.24
	 * (c) 2016 Evan You
	 * Released under the MIT License.
	 */
	'use strict';

	function set(obj, key, val) {
	  if (hasOwn(obj, key)) {
	    obj[key] = val;
	    return;
	  }
	  if (obj._isVue) {
	    set(obj._data, key, val);
	    return;
	  }
	  var ob = obj.__ob__;
	  if (!ob) {
	    obj[key] = val;
	    return;
	  }
	  ob.convert(key, val);
	  ob.dep.notify();
	  if (ob.vms) {
	    var i = ob.vms.length;
	    while (i--) {
	      var vm = ob.vms[i];
	      vm._proxy(key);
	      vm._digest();
	    }
	  }
	  return val;
	}

	/**
	 * Delete a property and trigger change if necessary.
	 *
	 * @param {Object} obj
	 * @param {String} key
	 */

	function del(obj, key) {
	  if (!hasOwn(obj, key)) {
	    return;
	  }
	  delete obj[key];
	  var ob = obj.__ob__;
	  if (!ob) {
	    if (obj._isVue) {
	      delete obj._data[key];
	      obj._digest();
	    }
	    return;
	  }
	  ob.dep.notify();
	  if (ob.vms) {
	    var i = ob.vms.length;
	    while (i--) {
	      var vm = ob.vms[i];
	      vm._unproxy(key);
	      vm._digest();
	    }
	  }
	}

	var hasOwnProperty = Object.prototype.hasOwnProperty;
	/**
	 * Check whether the object has the property.
	 *
	 * @param {Object} obj
	 * @param {String} key
	 * @return {Boolean}
	 */

	function hasOwn(obj, key) {
	  return hasOwnProperty.call(obj, key);
	}

	/**
	 * Check if an expression is a literal value.
	 *
	 * @param {String} exp
	 * @return {Boolean}
	 */

	var literalValueRE = /^\s?(true|false|-?[\d\.]+|'[^']*'|"[^"]*")\s?$/;

	function isLiteral(exp) {
	  return literalValueRE.test(exp);
	}

	/**
	 * Check if a string starts with $ or _
	 *
	 * @param {String} str
	 * @return {Boolean}
	 */

	function isReserved(str) {
	  var c = (str + '').charCodeAt(0);
	  return c === 0x24 || c === 0x5F;
	}

	/**
	 * Guard text output, make sure undefined outputs
	 * empty string
	 *
	 * @param {*} value
	 * @return {String}
	 */

	function _toString(value) {
	  return value == null ? '' : value.toString();
	}

	/**
	 * Check and convert possible numeric strings to numbers
	 * before setting back to data
	 *
	 * @param {*} value
	 * @return {*|Number}
	 */

	function toNumber(value) {
	  if (typeof value !== 'string') {
	    return value;
	  } else {
	    var parsed = Number(value);
	    return isNaN(parsed) ? value : parsed;
	  }
	}

	/**
	 * Convert string boolean literals into real booleans.
	 *
	 * @param {*} value
	 * @return {*|Boolean}
	 */

	function toBoolean(value) {
	  return value === 'true' ? true : value === 'false' ? false : value;
	}

	/**
	 * Strip quotes from a string
	 *
	 * @param {String} str
	 * @return {String | false}
	 */

	function stripQuotes(str) {
	  var a = str.charCodeAt(0);
	  var b = str.charCodeAt(str.length - 1);
	  return a === b && (a === 0x22 || a === 0x27) ? str.slice(1, -1) : str;
	}

	/**
	 * Camelize a hyphen-delmited string.
	 *
	 * @param {String} str
	 * @return {String}
	 */

	var camelizeRE = /-(\w)/g;

	function camelize(str) {
	  return str.replace(camelizeRE, toUpper);
	}

	function toUpper(_, c) {
	  return c ? c.toUpperCase() : '';
	}

	/**
	 * Hyphenate a camelCase string.
	 *
	 * @param {String} str
	 * @return {String}
	 */

	var hyphenateRE = /([a-z\d])([A-Z])/g;

	function hyphenate(str) {
	  return str.replace(hyphenateRE, '$1-$2').toLowerCase();
	}

	/**
	 * Converts hyphen/underscore/slash delimitered names into
	 * camelized classNames.
	 *
	 * e.g. my-component => MyComponent
	 *      some_else    => SomeElse
	 *      some/comp    => SomeComp
	 *
	 * @param {String} str
	 * @return {String}
	 */

	var classifyRE = /(?:^|[-_\/])(\w)/g;

	function classify(str) {
	  return str.replace(classifyRE, toUpper);
	}

	/**
	 * Simple bind, faster than native
	 *
	 * @param {Function} fn
	 * @param {Object} ctx
	 * @return {Function}
	 */

	function bind(fn, ctx) {
	  return function (a) {
	    var l = arguments.length;
	    return l ? l > 1 ? fn.apply(ctx, arguments) : fn.call(ctx, a) : fn.call(ctx);
	  };
	}

	/**
	 * Convert an Array-like object to a real Array.
	 *
	 * @param {Array-like} list
	 * @param {Number} [start] - start index
	 * @return {Array}
	 */

	function toArray(list, start) {
	  start = start || 0;
	  var i = list.length - start;
	  var ret = new Array(i);
	  while (i--) {
	    ret[i] = list[i + start];
	  }
	  return ret;
	}

	/**
	 * Mix properties into target object.
	 *
	 * @param {Object} to
	 * @param {Object} from
	 */

	function extend(to, from) {
	  var keys = Object.keys(from);
	  var i = keys.length;
	  while (i--) {
	    to[keys[i]] = from[keys[i]];
	  }
	  return to;
	}

	/**
	 * Quick object check - this is primarily used to tell
	 * Objects from primitive values when we know the value
	 * is a JSON-compliant type.
	 *
	 * @param {*} obj
	 * @return {Boolean}
	 */

	function isObject(obj) {
	  return obj !== null && typeof obj === 'object';
	}

	/**
	 * Strict object type check. Only returns true
	 * for plain JavaScript objects.
	 *
	 * @param {*} obj
	 * @return {Boolean}
	 */

	var toString = Object.prototype.toString;
	var OBJECT_STRING = '[object Object]';

	function isPlainObject(obj) {
	  return toString.call(obj) === OBJECT_STRING;
	}

	/**
	 * Array type check.
	 *
	 * @param {*} obj
	 * @return {Boolean}
	 */

	var isArray = Array.isArray;

	/**
	 * Define a property.
	 *
	 * @param {Object} obj
	 * @param {String} key
	 * @param {*} val
	 * @param {Boolean} [enumerable]
	 */

	function def(obj, key, val, enumerable) {
	  Object.defineProperty(obj, key, {
	    value: val,
	    enumerable: !!enumerable,
	    writable: true,
	    configurable: true
	  });
	}

	/**
	 * Debounce a function so it only gets called after the
	 * input stops arriving after the given wait period.
	 *
	 * @param {Function} func
	 * @param {Number} wait
	 * @return {Function} - the debounced function
	 */

	function _debounce(func, wait) {
	  var timeout, args, context, timestamp, result;
	  var later = function later() {
	    var last = Date.now() - timestamp;
	    if (last < wait && last >= 0) {
	      timeout = setTimeout(later, wait - last);
	    } else {
	      timeout = null;
	      result = func.apply(context, args);
	      if (!timeout) context = args = null;
	    }
	  };
	  return function () {
	    context = this;
	    args = arguments;
	    timestamp = Date.now();
	    if (!timeout) {
	      timeout = setTimeout(later, wait);
	    }
	    return result;
	  };
	}

	/**
	 * Manual indexOf because it's slightly faster than
	 * native.
	 *
	 * @param {Array} arr
	 * @param {*} obj
	 */

	function indexOf(arr, obj) {
	  var i = arr.length;
	  while (i--) {
	    if (arr[i] === obj) return i;
	  }
	  return -1;
	}

	/**
	 * Make a cancellable version of an async callback.
	 *
	 * @param {Function} fn
	 * @return {Function}
	 */

	function cancellable(fn) {
	  var cb = function cb() {
	    if (!cb.cancelled) {
	      return fn.apply(this, arguments);
	    }
	  };
	  cb.cancel = function () {
	    cb.cancelled = true;
	  };
	  return cb;
	}

	/**
	 * Check if two values are loosely equal - that is,
	 * if they are plain objects, do they have the same shape?
	 *
	 * @param {*} a
	 * @param {*} b
	 * @return {Boolean}
	 */

	function looseEqual(a, b) {
	  /* eslint-disable eqeqeq */
	  return a == b || (isObject(a) && isObject(b) ? JSON.stringify(a) === JSON.stringify(b) : false);
	  /* eslint-enable eqeqeq */
	}

	var hasProto = ('__proto__' in {});

	// Browser environment sniffing
	var inBrowser = typeof window !== 'undefined' && Object.prototype.toString.call(window) !== '[object Object]';

	// detect devtools
	var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

	// UA sniffing for working around browser-specific quirks
	var UA = inBrowser && window.navigator.userAgent.toLowerCase();
	var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
	var isAndroid = UA && UA.indexOf('android') > 0;
	var isIos = UA && /(iphone|ipad|ipod|ios)/i.test(UA);
	var isWechat = UA && UA.indexOf('micromessenger') > 0;

	var transitionProp = undefined;
	var transitionEndEvent = undefined;
	var animationProp = undefined;
	var animationEndEvent = undefined;

	// Transition property/event sniffing
	if (inBrowser && !isIE9) {
	  var isWebkitTrans = window.ontransitionend === undefined && window.onwebkittransitionend !== undefined;
	  var isWebkitAnim = window.onanimationend === undefined && window.onwebkitanimationend !== undefined;
	  transitionProp = isWebkitTrans ? 'WebkitTransition' : 'transition';
	  transitionEndEvent = isWebkitTrans ? 'webkitTransitionEnd' : 'transitionend';
	  animationProp = isWebkitAnim ? 'WebkitAnimation' : 'animation';
	  animationEndEvent = isWebkitAnim ? 'webkitAnimationEnd' : 'animationend';
	}

	/**
	 * Defer a task to execute it asynchronously. Ideally this
	 * should be executed as a microtask, so we leverage
	 * MutationObserver if it's available, and fallback to
	 * setTimeout(0).
	 *
	 * @param {Function} cb
	 * @param {Object} ctx
	 */

	var nextTick = (function () {
	  var callbacks = [];
	  var pending = false;
	  var timerFunc;
	  function nextTickHandler() {
	    pending = false;
	    var copies = callbacks.slice(0);
	    callbacks = [];
	    for (var i = 0; i < copies.length; i++) {
	      copies[i]();
	    }
	  }

	  /* istanbul ignore if */
	  if (typeof MutationObserver !== 'undefined' && !(isWechat && isIos)) {
	    var counter = 1;
	    var observer = new MutationObserver(nextTickHandler);
	    var textNode = document.createTextNode(counter);
	    observer.observe(textNode, {
	      characterData: true
	    });
	    timerFunc = function () {
	      counter = (counter + 1) % 2;
	      textNode.data = counter;
	    };
	  } else {
	    // webpack attempts to inject a shim for setImmediate
	    // if it is used as a global, so we have to work around that to
	    // avoid bundling unnecessary code.
	    var context = inBrowser ? window : typeof global !== 'undefined' ? global : {};
	    timerFunc = context.setImmediate || setTimeout;
	  }
	  return function (cb, ctx) {
	    var func = ctx ? function () {
	      cb.call(ctx);
	    } : cb;
	    callbacks.push(func);
	    if (pending) return;
	    pending = true;
	    timerFunc(nextTickHandler, 0);
	  };
	})();

	var _Set = undefined;
	/* istanbul ignore if */
	if (typeof Set !== 'undefined' && Set.toString().match(/native code/)) {
	  // use native Set when available.
	  _Set = Set;
	} else {
	  // a non-standard Set polyfill that only works with primitive keys.
	  _Set = function () {
	    this.set = Object.create(null);
	  };
	  _Set.prototype.has = function (key) {
	    return this.set[key] !== undefined;
	  };
	  _Set.prototype.add = function (key) {
	    this.set[key] = 1;
	  };
	  _Set.prototype.clear = function () {
	    this.set = Object.create(null);
	  };
	}

	function Cache(limit) {
	  this.size = 0;
	  this.limit = limit;
	  this.head = this.tail = undefined;
	  this._keymap = Object.create(null);
	}

	var p = Cache.prototype;

	/**
	 * Put <value> into the cache associated with <key>.
	 * Returns the entry which was removed to make room for
	 * the new entry. Otherwise undefined is returned.
	 * (i.e. if there was enough room already).
	 *
	 * @param {String} key
	 * @param {*} value
	 * @return {Entry|undefined}
	 */

	p.put = function (key, value) {
	  var removed;
	  if (this.size === this.limit) {
	    removed = this.shift();
	  }

	  var entry = this.get(key, true);
	  if (!entry) {
	    entry = {
	      key: key
	    };
	    this._keymap[key] = entry;
	    if (this.tail) {
	      this.tail.newer = entry;
	      entry.older = this.tail;
	    } else {
	      this.head = entry;
	    }
	    this.tail = entry;
	    this.size++;
	  }
	  entry.value = value;

	  return removed;
	};

	/**
	 * Purge the least recently used (oldest) entry from the
	 * cache. Returns the removed entry or undefined if the
	 * cache was empty.
	 */

	p.shift = function () {
	  var entry = this.head;
	  if (entry) {
	    this.head = this.head.newer;
	    this.head.older = undefined;
	    entry.newer = entry.older = undefined;
	    this._keymap[entry.key] = undefined;
	    this.size--;
	  }
	  return entry;
	};

	/**
	 * Get and register recent use of <key>. Returns the value
	 * associated with <key> or undefined if not in cache.
	 *
	 * @param {String} key
	 * @param {Boolean} returnEntry
	 * @return {Entry|*}
	 */

	p.get = function (key, returnEntry) {
	  var entry = this._keymap[key];
	  if (entry === undefined) return;
	  if (entry === this.tail) {
	    return returnEntry ? entry : entry.value;
	  }
	  // HEAD--------------TAIL
	  //   <.older   .newer>
	  //  <--- add direction --
	  //   A  B  C  <D>  E
	  if (entry.newer) {
	    if (entry === this.head) {
	      this.head = entry.newer;
	    }
	    entry.newer.older = entry.older; // C <-- E.
	  }
	  if (entry.older) {
	    entry.older.newer = entry.newer; // C. --> E
	  }
	  entry.newer = undefined; // D --x
	  entry.older = this.tail; // D. --> E
	  if (this.tail) {
	    this.tail.newer = entry; // E. <-- D
	  }
	  this.tail = entry;
	  return returnEntry ? entry : entry.value;
	};

	var cache$1 = new Cache(1000);
	var filterTokenRE = /[^\s'"]+|'[^']*'|"[^"]*"/g;
	var reservedArgRE = /^in$|^-?\d+/;

	/**
	 * Parser state
	 */

	var str;
	var dir;
	var c;
	var prev;
	var i;
	var l;
	var lastFilterIndex;
	var inSingle;
	var inDouble;
	var curly;
	var square;
	var paren;
	/**
	 * Push a filter to the current directive object
	 */

	function pushFilter() {
	  var exp = str.slice(lastFilterIndex, i).trim();
	  var filter;
	  if (exp) {
	    filter = {};
	    var tokens = exp.match(filterTokenRE);
	    filter.name = tokens[0];
	    if (tokens.length > 1) {
	      filter.args = tokens.slice(1).map(processFilterArg);
	    }
	  }
	  if (filter) {
	    (dir.filters = dir.filters || []).push(filter);
	  }
	  lastFilterIndex = i + 1;
	}

	/**
	 * Check if an argument is dynamic and strip quotes.
	 *
	 * @param {String} arg
	 * @return {Object}
	 */

	function processFilterArg(arg) {
	  if (reservedArgRE.test(arg)) {
	    return {
	      value: toNumber(arg),
	      dynamic: false
	    };
	  } else {
	    var stripped = stripQuotes(arg);
	    var dynamic = stripped === arg;
	    return {
	      value: dynamic ? arg : stripped,
	      dynamic: dynamic
	    };
	  }
	}

	/**
	 * Parse a directive value and extract the expression
	 * and its filters into a descriptor.
	 *
	 * Example:
	 *
	 * "a + 1 | uppercase" will yield:
	 * {
	 *   expression: 'a + 1',
	 *   filters: [
	 *     { name: 'uppercase', args: null }
	 *   ]
	 * }
	 *
	 * @param {String} s
	 * @return {Object}
	 */

	function parseDirective(s) {
	  var hit = cache$1.get(s);
	  if (hit) {
	    return hit;
	  }

	  // reset parser state
	  str = s;
	  inSingle = inDouble = false;
	  curly = square = paren = 0;
	  lastFilterIndex = 0;
	  dir = {};

	  for (i = 0, l = str.length; i < l; i++) {
	    prev = c;
	    c = str.charCodeAt(i);
	    if (inSingle) {
	      // check single quote
	      if (c === 0x27 && prev !== 0x5C) inSingle = !inSingle;
	    } else if (inDouble) {
	      // check double quote
	      if (c === 0x22 && prev !== 0x5C) inDouble = !inDouble;
	    } else if (c === 0x7C && // pipe
	    str.charCodeAt(i + 1) !== 0x7C && str.charCodeAt(i - 1) !== 0x7C) {
	      if (dir.expression == null) {
	        // first filter, end of expression
	        lastFilterIndex = i + 1;
	        dir.expression = str.slice(0, i).trim();
	      } else {
	        // already has filter
	        pushFilter();
	      }
	    } else {
	      switch (c) {
	        case 0x22:
	          inDouble = true;break; // "
	        case 0x27:
	          inSingle = true;break; // '
	        case 0x28:
	          paren++;break; // (
	        case 0x29:
	          paren--;break; // )
	        case 0x5B:
	          square++;break; // [
	        case 0x5D:
	          square--;break; // ]
	        case 0x7B:
	          curly++;break; // {
	        case 0x7D:
	          curly--;break; // }
	      }
	    }
	  }

	  if (dir.expression == null) {
	    dir.expression = str.slice(0, i).trim();
	  } else if (lastFilterIndex !== 0) {
	    pushFilter();
	  }

	  cache$1.put(s, dir);
	  return dir;
	}

	var directive = Object.freeze({
	  parseDirective: parseDirective
	});

	var regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g;
	var cache = undefined;
	var tagRE = undefined;
	var htmlRE = undefined;
	/**
	 * Escape a string so it can be used in a RegExp
	 * constructor.
	 *
	 * @param {String} str
	 */

	function escapeRegex(str) {
	  return str.replace(regexEscapeRE, '\\$&');
	}

	function compileRegex() {
	  var open = escapeRegex(config.delimiters[0]);
	  var close = escapeRegex(config.delimiters[1]);
	  var unsafeOpen = escapeRegex(config.unsafeDelimiters[0]);
	  var unsafeClose = escapeRegex(config.unsafeDelimiters[1]);
	  tagRE = new RegExp(unsafeOpen + '((?:.|\\n)+?)' + unsafeClose + '|' + open + '((?:.|\\n)+?)' + close, 'g');
	  htmlRE = new RegExp('^' + unsafeOpen + '.*' + unsafeClose + '$');
	  // reset cache
	  cache = new Cache(1000);
	}

	/**
	 * Parse a template text string into an array of tokens.
	 *
	 * @param {String} text
	 * @return {Array<Object> | null}
	 *               - {String} type
	 *               - {String} value
	 *               - {Boolean} [html]
	 *               - {Boolean} [oneTime]
	 */

	function parseText(text) {
	  if (!cache) {
	    compileRegex();
	  }
	  var hit = cache.get(text);
	  if (hit) {
	    return hit;
	  }
	  if (!tagRE.test(text)) {
	    return null;
	  }
	  var tokens = [];
	  var lastIndex = tagRE.lastIndex = 0;
	  var match, index, html, value, first, oneTime;
	  /* eslint-disable no-cond-assign */
	  while (match = tagRE.exec(text)) {
	    /* eslint-enable no-cond-assign */
	    index = match.index;
	    // push text token
	    if (index > lastIndex) {
	      tokens.push({
	        value: text.slice(lastIndex, index)
	      });
	    }
	    // tag token
	    html = htmlRE.test(match[0]);
	    value = html ? match[1] : match[2];
	    first = value.charCodeAt(0);
	    oneTime = first === 42; // *
	    value = oneTime ? value.slice(1) : value;
	    tokens.push({
	      tag: true,
	      value: value.trim(),
	      html: html,
	      oneTime: oneTime
	    });
	    lastIndex = index + match[0].length;
	  }
	  if (lastIndex < text.length) {
	    tokens.push({
	      value: text.slice(lastIndex)
	    });
	  }
	  cache.put(text, tokens);
	  return tokens;
	}

	/**
	 * Format a list of tokens into an expression.
	 * e.g. tokens parsed from 'a {{b}} c' can be serialized
	 * into one single expression as '"a " + b + " c"'.
	 *
	 * @param {Array} tokens
	 * @param {Vue} [vm]
	 * @return {String}
	 */

	function tokensToExp(tokens, vm) {
	  if (tokens.length > 1) {
	    return tokens.map(function (token) {
	      return formatToken(token, vm);
	    }).join('+');
	  } else {
	    return formatToken(tokens[0], vm, true);
	  }
	}

	/**
	 * Format a single token.
	 *
	 * @param {Object} token
	 * @param {Vue} [vm]
	 * @param {Boolean} [single]
	 * @return {String}
	 */

	function formatToken(token, vm, single) {
	  return token.tag ? token.oneTime && vm ? '"' + vm.$eval(token.value) + '"' : inlineFilters(token.value, single) : '"' + token.value + '"';
	}

	/**
	 * For an attribute with multiple interpolation tags,
	 * e.g. attr="some-{{thing | filter}}", in order to combine
	 * the whole thing into a single watchable expression, we
	 * have to inline those filters. This function does exactly
	 * that. This is a bit hacky but it avoids heavy changes
	 * to directive parser and watcher mechanism.
	 *
	 * @param {String} exp
	 * @param {Boolean} single
	 * @return {String}
	 */

	var filterRE = /[^|]\|[^|]/;
	function inlineFilters(exp, single) {
	  if (!filterRE.test(exp)) {
	    return single ? exp : '(' + exp + ')';
	  } else {
	    var dir = parseDirective(exp);
	    if (!dir.filters) {
	      return '(' + exp + ')';
	    } else {
	      return 'this._applyFilters(' + dir.expression + // value
	      ',null,' + // oldValue (null for read)
	      JSON.stringify(dir.filters) + // filter descriptors
	      ',false)'; // write?
	    }
	  }
	}

	var text = Object.freeze({
	  compileRegex: compileRegex,
	  parseText: parseText,
	  tokensToExp: tokensToExp
	});

	var delimiters = ['{{', '}}'];
	var unsafeDelimiters = ['{{{', '}}}'];

	var config = Object.defineProperties({

	  /**
	   * Whether to print debug messages.
	   * Also enables stack trace for warnings.
	   *
	   * @type {Boolean}
	   */

	  debug: false,

	  /**
	   * Whether to suppress warnings.
	   *
	   * @type {Boolean}
	   */

	  silent: false,

	  /**
	   * Whether to use async rendering.
	   */

	  async: true,

	  /**
	   * Whether to warn against errors caught when evaluating
	   * expressions.
	   */

	  warnExpressionErrors: true,

	  /**
	   * Whether to allow devtools inspection.
	   * Disabled by default in production builds.
	   */

	  devtools: process.env.NODE_ENV !== 'production',

	  /**
	   * Internal flag to indicate the delimiters have been
	   * changed.
	   *
	   * @type {Boolean}
	   */

	  _delimitersChanged: true,

	  /**
	   * List of asset types that a component can own.
	   *
	   * @type {Array}
	   */

	  _assetTypes: ['component', 'directive', 'elementDirective', 'filter', 'transition', 'partial'],

	  /**
	   * prop binding modes
	   */

	  _propBindingModes: {
	    ONE_WAY: 0,
	    TWO_WAY: 1,
	    ONE_TIME: 2
	  },

	  /**
	   * Max circular updates allowed in a batcher flush cycle.
	   */

	  _maxUpdateCount: 100

	}, {
	  delimiters: { /**
	                 * Interpolation delimiters. Changing these would trigger
	                 * the text parser to re-compile the regular expressions.
	                 *
	                 * @type {Array<String>}
	                 */

	    get: function get() {
	      return delimiters;
	    },
	    set: function set(val) {
	      delimiters = val;
	      compileRegex();
	    },
	    configurable: true,
	    enumerable: true
	  },
	  unsafeDelimiters: {
	    get: function get() {
	      return unsafeDelimiters;
	    },
	    set: function set(val) {
	      unsafeDelimiters = val;
	      compileRegex();
	    },
	    configurable: true,
	    enumerable: true
	  }
	});

	var warn = undefined;
	var formatComponentName = undefined;

	if (process.env.NODE_ENV !== 'production') {
	  (function () {
	    var hasConsole = typeof console !== 'undefined';

	    warn = function (msg, vm) {
	      if (hasConsole && !config.silent) {
	        console.error('[Vue warn]: ' + msg + (vm ? formatComponentName(vm) : ''));
	      }
	    };

	    formatComponentName = function (vm) {
	      var name = vm._isVue ? vm.$options.name : vm.name;
	      return name ? ' (found in component: <' + hyphenate(name) + '>)' : '';
	    };
	  })();
	}

	/**
	 * Append with transition.
	 *
	 * @param {Element} el
	 * @param {Element} target
	 * @param {Vue} vm
	 * @param {Function} [cb]
	 */

	function appendWithTransition(el, target, vm, cb) {
	  applyTransition(el, 1, function () {
	    target.appendChild(el);
	  }, vm, cb);
	}

	/**
	 * InsertBefore with transition.
	 *
	 * @param {Element} el
	 * @param {Element} target
	 * @param {Vue} vm
	 * @param {Function} [cb]
	 */

	function beforeWithTransition(el, target, vm, cb) {
	  applyTransition(el, 1, function () {
	    before(el, target);
	  }, vm, cb);
	}

	/**
	 * Remove with transition.
	 *
	 * @param {Element} el
	 * @param {Vue} vm
	 * @param {Function} [cb]
	 */

	function removeWithTransition(el, vm, cb) {
	  applyTransition(el, -1, function () {
	    remove(el);
	  }, vm, cb);
	}

	/**
	 * Apply transitions with an operation callback.
	 *
	 * @param {Element} el
	 * @param {Number} direction
	 *                  1: enter
	 *                 -1: leave
	 * @param {Function} op - the actual DOM operation
	 * @param {Vue} vm
	 * @param {Function} [cb]
	 */

	function applyTransition(el, direction, op, vm, cb) {
	  var transition = el.__v_trans;
	  if (!transition ||
	  // skip if there are no js hooks and CSS transition is
	  // not supported
	  !transition.hooks && !transitionEndEvent ||
	  // skip transitions for initial compile
	  !vm._isCompiled ||
	  // if the vm is being manipulated by a parent directive
	  // during the parent's compilation phase, skip the
	  // animation.
	  vm.$parent && !vm.$parent._isCompiled) {
	    op();
	    if (cb) cb();
	    return;
	  }
	  var action = direction > 0 ? 'enter' : 'leave';
	  transition[action](op, cb);
	}

	var transition = Object.freeze({
	  appendWithTransition: appendWithTransition,
	  beforeWithTransition: beforeWithTransition,
	  removeWithTransition: removeWithTransition,
	  applyTransition: applyTransition
	});

	/**
	 * Query an element selector if it's not an element already.
	 *
	 * @param {String|Element} el
	 * @return {Element}
	 */

	function query(el) {
	  if (typeof el === 'string') {
	    var selector = el;
	    el = document.querySelector(el);
	    if (!el) {
	      process.env.NODE_ENV !== 'production' && warn('Cannot find element: ' + selector);
	    }
	  }
	  return el;
	}

	/**
	 * Check if a node is in the document.
	 * Note: document.documentElement.contains should work here
	 * but always returns false for comment nodes in phantomjs,
	 * making unit tests difficult. This is fixed by doing the
	 * contains() check on the node's parentNode instead of
	 * the node itself.
	 *
	 * @param {Node} node
	 * @return {Boolean}
	 */

	function inDoc(node) {
	  if (!node) return false;
	  var doc = node.ownerDocument.documentElement;
	  var parent = node.parentNode;
	  return doc === node || doc === parent || !!(parent && parent.nodeType === 1 && doc.contains(parent));
	}

	/**
	 * Get and remove an attribute from a node.
	 *
	 * @param {Node} node
	 * @param {String} _attr
	 */

	function getAttr(node, _attr) {
	  var val = node.getAttribute(_attr);
	  if (val !== null) {
	    node.removeAttribute(_attr);
	  }
	  return val;
	}

	/**
	 * Get an attribute with colon or v-bind: prefix.
	 *
	 * @param {Node} node
	 * @param {String} name
	 * @return {String|null}
	 */

	function getBindAttr(node, name) {
	  var val = getAttr(node, ':' + name);
	  if (val === null) {
	    val = getAttr(node, 'v-bind:' + name);
	  }
	  return val;
	}

	/**
	 * Check the presence of a bind attribute.
	 *
	 * @param {Node} node
	 * @param {String} name
	 * @return {Boolean}
	 */

	function hasBindAttr(node, name) {
	  return node.hasAttribute(name) || node.hasAttribute(':' + name) || node.hasAttribute('v-bind:' + name);
	}

	/**
	 * Insert el before target
	 *
	 * @param {Element} el
	 * @param {Element} target
	 */

	function before(el, target) {
	  target.parentNode.insertBefore(el, target);
	}

	/**
	 * Insert el after target
	 *
	 * @param {Element} el
	 * @param {Element} target
	 */

	function after(el, target) {
	  if (target.nextSibling) {
	    before(el, target.nextSibling);
	  } else {
	    target.parentNode.appendChild(el);
	  }
	}

	/**
	 * Remove el from DOM
	 *
	 * @param {Element} el
	 */

	function remove(el) {
	  el.parentNode.removeChild(el);
	}

	/**
	 * Prepend el to target
	 *
	 * @param {Element} el
	 * @param {Element} target
	 */

	function prepend(el, target) {
	  if (target.firstChild) {
	    before(el, target.firstChild);
	  } else {
	    target.appendChild(el);
	  }
	}

	/**
	 * Replace target with el
	 *
	 * @param {Element} target
	 * @param {Element} el
	 */

	function replace(target, el) {
	  var parent = target.parentNode;
	  if (parent) {
	    parent.replaceChild(el, target);
	  }
	}

	/**
	 * Add event listener shorthand.
	 *
	 * @param {Element} el
	 * @param {String} event
	 * @param {Function} cb
	 * @param {Boolean} [useCapture]
	 */

	function on(el, event, cb, useCapture) {
	  el.addEventListener(event, cb, useCapture);
	}

	/**
	 * Remove event listener shorthand.
	 *
	 * @param {Element} el
	 * @param {String} event
	 * @param {Function} cb
	 */

	function off(el, event, cb) {
	  el.removeEventListener(event, cb);
	}

	/**
	 * For IE9 compat: when both class and :class are present
	 * getAttribute('class') returns wrong value...
	 *
	 * @param {Element} el
	 * @return {String}
	 */

	function getClass(el) {
	  var classname = el.className;
	  if (typeof classname === 'object') {
	    classname = classname.baseVal || '';
	  }
	  return classname;
	}

	/**
	 * In IE9, setAttribute('class') will result in empty class
	 * if the element also has the :class attribute; However in
	 * PhantomJS, setting `className` does not work on SVG elements...
	 * So we have to do a conditional check here.
	 *
	 * @param {Element} el
	 * @param {String} cls
	 */

	function setClass(el, cls) {
	  /* istanbul ignore if */
	  if (isIE9 && !/svg$/.test(el.namespaceURI)) {
	    el.className = cls;
	  } else {
	    el.setAttribute('class', cls);
	  }
	}

	/**
	 * Add class with compatibility for IE & SVG
	 *
	 * @param {Element} el
	 * @param {String} cls
	 */

	function addClass(el, cls) {
	  if (el.classList) {
	    el.classList.add(cls);
	  } else {
	    var cur = ' ' + getClass(el) + ' ';
	    if (cur.indexOf(' ' + cls + ' ') < 0) {
	      setClass(el, (cur + cls).trim());
	    }
	  }
	}

	/**
	 * Remove class with compatibility for IE & SVG
	 *
	 * @param {Element} el
	 * @param {String} cls
	 */

	function removeClass(el, cls) {
	  if (el.classList) {
	    el.classList.remove(cls);
	  } else {
	    var cur = ' ' + getClass(el) + ' ';
	    var tar = ' ' + cls + ' ';
	    while (cur.indexOf(tar) >= 0) {
	      cur = cur.replace(tar, ' ');
	    }
	    setClass(el, cur.trim());
	  }
	  if (!el.className) {
	    el.removeAttribute('class');
	  }
	}

	/**
	 * Extract raw content inside an element into a temporary
	 * container div
	 *
	 * @param {Element} el
	 * @param {Boolean} asFragment
	 * @return {Element|DocumentFragment}
	 */

	function extractContent(el, asFragment) {
	  var child;
	  var rawContent;
	  /* istanbul ignore if */
	  if (isTemplate(el) && isFragment(el.content)) {
	    el = el.content;
	  }
	  if (el.hasChildNodes()) {
	    trimNode(el);
	    rawContent = asFragment ? document.createDocumentFragment() : document.createElement('div');
	    /* eslint-disable no-cond-assign */
	    while (child = el.firstChild) {
	      /* eslint-enable no-cond-assign */
	      rawContent.appendChild(child);
	    }
	  }
	  return rawContent;
	}

	/**
	 * Trim possible empty head/tail text and comment
	 * nodes inside a parent.
	 *
	 * @param {Node} node
	 */

	function trimNode(node) {
	  var child;
	  /* eslint-disable no-sequences */
	  while ((child = node.firstChild, isTrimmable(child))) {
	    node.removeChild(child);
	  }
	  while ((child = node.lastChild, isTrimmable(child))) {
	    node.removeChild(child);
	  }
	  /* eslint-enable no-sequences */
	}

	function isTrimmable(node) {
	  return node && (node.nodeType === 3 && !node.data.trim() || node.nodeType === 8);
	}

	/**
	 * Check if an element is a template tag.
	 * Note if the template appears inside an SVG its tagName
	 * will be in lowercase.
	 *
	 * @param {Element} el
	 */

	function isTemplate(el) {
	  return el.tagName && el.tagName.toLowerCase() === 'template';
	}

	/**
	 * Create an "anchor" for performing dom insertion/removals.
	 * This is used in a number of scenarios:
	 * - fragment instance
	 * - v-html
	 * - v-if
	 * - v-for
	 * - component
	 *
	 * @param {String} content
	 * @param {Boolean} persist - IE trashes empty textNodes on
	 *                            cloneNode(true), so in certain
	 *                            cases the anchor needs to be
	 *                            non-empty to be persisted in
	 *                            templates.
	 * @return {Comment|Text}
	 */

	function createAnchor(content, persist) {
	  var anchor = config.debug ? document.createComment(content) : document.createTextNode(persist ? ' ' : '');
	  anchor.__v_anchor = true;
	  return anchor;
	}

	/**
	 * Find a component ref attribute that starts with $.
	 *
	 * @param {Element} node
	 * @return {String|undefined}
	 */

	var refRE = /^v-ref:/;

	function findRef(node) {
	  if (node.hasAttributes()) {
	    var attrs = node.attributes;
	    for (var i = 0, l = attrs.length; i < l; i++) {
	      var name = attrs[i].name;
	      if (refRE.test(name)) {
	        return camelize(name.replace(refRE, ''));
	      }
	    }
	  }
	}

	/**
	 * Map a function to a range of nodes .
	 *
	 * @param {Node} node
	 * @param {Node} end
	 * @param {Function} op
	 */

	function mapNodeRange(node, end, op) {
	  var next;
	  while (node !== end) {
	    next = node.nextSibling;
	    op(node);
	    node = next;
	  }
	  op(end);
	}

	/**
	 * Remove a range of nodes with transition, store
	 * the nodes in a fragment with correct ordering,
	 * and call callback when done.
	 *
	 * @param {Node} start
	 * @param {Node} end
	 * @param {Vue} vm
	 * @param {DocumentFragment} frag
	 * @param {Function} cb
	 */

	function removeNodeRange(start, end, vm, frag, cb) {
	  var done = false;
	  var removed = 0;
	  var nodes = [];
	  mapNodeRange(start, end, function (node) {
	    if (node === end) done = true;
	    nodes.push(node);
	    removeWithTransition(node, vm, onRemoved);
	  });
	  function onRemoved() {
	    removed++;
	    if (done && removed >= nodes.length) {
	      for (var i = 0; i < nodes.length; i++) {
	        frag.appendChild(nodes[i]);
	      }
	      cb && cb();
	    }
	  }
	}

	/**
	 * Check if a node is a DocumentFragment.
	 *
	 * @param {Node} node
	 * @return {Boolean}
	 */

	function isFragment(node) {
	  return node && node.nodeType === 11;
	}

	/**
	 * Get outerHTML of elements, taking care
	 * of SVG elements in IE as well.
	 *
	 * @param {Element} el
	 * @return {String}
	 */

	function getOuterHTML(el) {
	  if (el.outerHTML) {
	    return el.outerHTML;
	  } else {
	    var container = document.createElement('div');
	    container.appendChild(el.cloneNode(true));
	    return container.innerHTML;
	  }
	}

	var commonTagRE = /^(div|p|span|img|a|b|i|br|ul|ol|li|h1|h2|h3|h4|h5|h6|code|pre|table|th|td|tr|form|label|input|select|option|nav|article|section|header|footer)$/i;
	var reservedTagRE = /^(slot|partial|component)$/i;

	var isUnknownElement = undefined;
	if (process.env.NODE_ENV !== 'production') {
	  isUnknownElement = function (el, tag) {
	    if (tag.indexOf('-') > -1) {
	      // http://stackoverflow.com/a/28210364/1070244
	      return el.constructor === window.HTMLUnknownElement || el.constructor === window.HTMLElement;
	    } else {
	      return (/HTMLUnknownElement/.test(el.toString()) &&
	        // Chrome returns unknown for several HTML5 elements.
	        // https://code.google.com/p/chromium/issues/detail?id=540526
	        !/^(data|time|rtc|rb)$/.test(tag)
	      );
	    }
	  };
	}

	/**
	 * Check if an element is a component, if yes return its
	 * component id.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Object|undefined}
	 */

	function checkComponentAttr(el, options) {
	  var tag = el.tagName.toLowerCase();
	  var hasAttrs = el.hasAttributes();
	  if (!commonTagRE.test(tag) && !reservedTagRE.test(tag)) {
	    if (resolveAsset(options, 'components', tag)) {
	      return { id: tag };
	    } else {
	      var is = hasAttrs && getIsBinding(el, options);
	      if (is) {
	        return is;
	      } else if (process.env.NODE_ENV !== 'production') {
	        var expectedTag = options._componentNameMap && options._componentNameMap[tag];
	        if (expectedTag) {
	          warn('Unknown custom element: <' + tag + '> - ' + 'did you mean <' + expectedTag + '>? ' + 'HTML is case-insensitive, remember to use kebab-case in templates.');
	        } else if (isUnknownElement(el, tag)) {
	          warn('Unknown custom element: <' + tag + '> - did you ' + 'register the component correctly? For recursive components, ' + 'make sure to provide the "name" option.');
	        }
	      }
	    }
	  } else if (hasAttrs) {
	    return getIsBinding(el, options);
	  }
	}

	/**
	 * Get "is" binding from an element.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Object|undefined}
	 */

	function getIsBinding(el, options) {
	  // dynamic syntax
	  var exp = el.getAttribute('is');
	  if (exp != null) {
	    if (resolveAsset(options, 'components', exp)) {
	      el.removeAttribute('is');
	      return { id: exp };
	    }
	  } else {
	    exp = getBindAttr(el, 'is');
	    if (exp != null) {
	      return { id: exp, dynamic: true };
	    }
	  }
	}

	/**
	 * Option overwriting strategies are functions that handle
	 * how to merge a parent option value and a child option
	 * value into the final value.
	 *
	 * All strategy functions follow the same signature:
	 *
	 * @param {*} parentVal
	 * @param {*} childVal
	 * @param {Vue} [vm]
	 */

	var strats = config.optionMergeStrategies = Object.create(null);

	/**
	 * Helper that recursively merges two data objects together.
	 */

	function mergeData(to, from) {
	  var key, toVal, fromVal;
	  for (key in from) {
	    toVal = to[key];
	    fromVal = from[key];
	    if (!hasOwn(to, key)) {
	      set(to, key, fromVal);
	    } else if (isObject(toVal) && isObject(fromVal)) {
	      mergeData(toVal, fromVal);
	    }
	  }
	  return to;
	}

	/**
	 * Data
	 */

	strats.data = function (parentVal, childVal, vm) {
	  if (!vm) {
	    // in a Vue.extend merge, both should be functions
	    if (!childVal) {
	      return parentVal;
	    }
	    if (typeof childVal !== 'function') {
	      process.env.NODE_ENV !== 'production' && warn('The "data" option should be a function ' + 'that returns a per-instance value in component ' + 'definitions.', vm);
	      return parentVal;
	    }
	    if (!parentVal) {
	      return childVal;
	    }
	    // when parentVal & childVal are both present,
	    // we need to return a function that returns the
	    // merged result of both functions... no need to
	    // check if parentVal is a function here because
	    // it has to be a function to pass previous merges.
	    return function mergedDataFn() {
	      return mergeData(childVal.call(this), parentVal.call(this));
	    };
	  } else if (parentVal || childVal) {
	    return function mergedInstanceDataFn() {
	      // instance merge
	      var instanceData = typeof childVal === 'function' ? childVal.call(vm) : childVal;
	      var defaultData = typeof parentVal === 'function' ? parentVal.call(vm) : undefined;
	      if (instanceData) {
	        return mergeData(instanceData, defaultData);
	      } else {
	        return defaultData;
	      }
	    };
	  }
	};

	/**
	 * El
	 */

	strats.el = function (parentVal, childVal, vm) {
	  if (!vm && childVal && typeof childVal !== 'function') {
	    process.env.NODE_ENV !== 'production' && warn('The "el" option should be a function ' + 'that returns a per-instance value in component ' + 'definitions.', vm);
	    return;
	  }
	  var ret = childVal || parentVal;
	  // invoke the element factory if this is instance merge
	  return vm && typeof ret === 'function' ? ret.call(vm) : ret;
	};

	/**
	 * Hooks and param attributes are merged as arrays.
	 */

	strats.init = strats.created = strats.ready = strats.attached = strats.detached = strats.beforeCompile = strats.compiled = strats.beforeDestroy = strats.destroyed = strats.activate = function (parentVal, childVal) {
	  return childVal ? parentVal ? parentVal.concat(childVal) : isArray(childVal) ? childVal : [childVal] : parentVal;
	};

	/**
	 * Assets
	 *
	 * When a vm is present (instance creation), we need to do
	 * a three-way merge between constructor options, instance
	 * options and parent options.
	 */

	function mergeAssets(parentVal, childVal) {
	  var res = Object.create(parentVal || null);
	  return childVal ? extend(res, guardArrayAssets(childVal)) : res;
	}

	config._assetTypes.forEach(function (type) {
	  strats[type + 's'] = mergeAssets;
	});

	/**
	 * Events & Watchers.
	 *
	 * Events & watchers hashes should not overwrite one
	 * another, so we merge them as arrays.
	 */

	strats.watch = strats.events = function (parentVal, childVal) {
	  if (!childVal) return parentVal;
	  if (!parentVal) return childVal;
	  var ret = {};
	  extend(ret, parentVal);
	  for (var key in childVal) {
	    var parent = ret[key];
	    var child = childVal[key];
	    if (parent && !isArray(parent)) {
	      parent = [parent];
	    }
	    ret[key] = parent ? parent.concat(child) : [child];
	  }
	  return ret;
	};

	/**
	 * Other object hashes.
	 */

	strats.props = strats.methods = strats.computed = function (parentVal, childVal) {
	  if (!childVal) return parentVal;
	  if (!parentVal) return childVal;
	  var ret = Object.create(null);
	  extend(ret, parentVal);
	  extend(ret, childVal);
	  return ret;
	};

	/**
	 * Default strategy.
	 */

	var defaultStrat = function defaultStrat(parentVal, childVal) {
	  return childVal === undefined ? parentVal : childVal;
	};

	/**
	 * Make sure component options get converted to actual
	 * constructors.
	 *
	 * @param {Object} options
	 */

	function guardComponents(options) {
	  if (options.components) {
	    var components = options.components = guardArrayAssets(options.components);
	    var ids = Object.keys(components);
	    var def;
	    if (process.env.NODE_ENV !== 'production') {
	      var map = options._componentNameMap = {};
	    }
	    for (var i = 0, l = ids.length; i < l; i++) {
	      var key = ids[i];
	      if (commonTagRE.test(key) || reservedTagRE.test(key)) {
	        process.env.NODE_ENV !== 'production' && warn('Do not use built-in or reserved HTML elements as component ' + 'id: ' + key);
	        continue;
	      }
	      // record a all lowercase <-> kebab-case mapping for
	      // possible custom element case error warning
	      if (process.env.NODE_ENV !== 'production') {
	        map[key.replace(/-/g, '').toLowerCase()] = hyphenate(key);
	      }
	      def = components[key];
	      if (isPlainObject(def)) {
	        components[key] = Vue.extend(def);
	      }
	    }
	  }
	}

	/**
	 * Ensure all props option syntax are normalized into the
	 * Object-based format.
	 *
	 * @param {Object} options
	 */

	function guardProps(options) {
	  var props = options.props;
	  var i, val;
	  if (isArray(props)) {
	    options.props = {};
	    i = props.length;
	    while (i--) {
	      val = props[i];
	      if (typeof val === 'string') {
	        options.props[val] = null;
	      } else if (val.name) {
	        options.props[val.name] = val;
	      }
	    }
	  } else if (isPlainObject(props)) {
	    var keys = Object.keys(props);
	    i = keys.length;
	    while (i--) {
	      val = props[keys[i]];
	      if (typeof val === 'function') {
	        props[keys[i]] = { type: val };
	      }
	    }
	  }
	}

	/**
	 * Guard an Array-format assets option and converted it
	 * into the key-value Object format.
	 *
	 * @param {Object|Array} assets
	 * @return {Object}
	 */

	function guardArrayAssets(assets) {
	  if (isArray(assets)) {
	    var res = {};
	    var i = assets.length;
	    var asset;
	    while (i--) {
	      asset = assets[i];
	      var id = typeof asset === 'function' ? asset.options && asset.options.name || asset.id : asset.name || asset.id;
	      if (!id) {
	        process.env.NODE_ENV !== 'production' && warn('Array-syntax assets must provide a "name" or "id" field.');
	      } else {
	        res[id] = asset;
	      }
	    }
	    return res;
	  }
	  return assets;
	}

	/**
	 * Merge two option objects into a new one.
	 * Core utility used in both instantiation and inheritance.
	 *
	 * @param {Object} parent
	 * @param {Object} child
	 * @param {Vue} [vm] - if vm is present, indicates this is
	 *                     an instantiation merge.
	 */

	function mergeOptions(parent, child, vm) {
	  guardComponents(child);
	  guardProps(child);
	  if (process.env.NODE_ENV !== 'production') {
	    if (child.propsData && !vm) {
	      warn('propsData can only be used as an instantiation option.');
	    }
	  }
	  var options = {};
	  var key;
	  if (child['extends']) {
	    parent = typeof child['extends'] === 'function' ? mergeOptions(parent, child['extends'].options, vm) : mergeOptions(parent, child['extends'], vm);
	  }
	  if (child.mixins) {
	    for (var i = 0, l = child.mixins.length; i < l; i++) {
	      parent = mergeOptions(parent, child.mixins[i], vm);
	    }
	  }
	  for (key in parent) {
	    mergeField(key);
	  }
	  for (key in child) {
	    if (!hasOwn(parent, key)) {
	      mergeField(key);
	    }
	  }
	  function mergeField(key) {
	    var strat = strats[key] || defaultStrat;
	    options[key] = strat(parent[key], child[key], vm, key);
	  }
	  return options;
	}

	/**
	 * Resolve an asset.
	 * This function is used because child instances need access
	 * to assets defined in its ancestor chain.
	 *
	 * @param {Object} options
	 * @param {String} type
	 * @param {String} id
	 * @param {Boolean} warnMissing
	 * @return {Object|Function}
	 */

	function resolveAsset(options, type, id, warnMissing) {
	  /* istanbul ignore if */
	  if (typeof id !== 'string') {
	    return;
	  }
	  var assets = options[type];
	  var camelizedId;
	  var res = assets[id] ||
	  // camelCase ID
	  assets[camelizedId = camelize(id)] ||
	  // Pascal Case ID
	  assets[camelizedId.charAt(0).toUpperCase() + camelizedId.slice(1)];
	  if (process.env.NODE_ENV !== 'production' && warnMissing && !res) {
	    warn('Failed to resolve ' + type.slice(0, -1) + ': ' + id, options);
	  }
	  return res;
	}

	var uid$1 = 0;

	/**
	 * A dep is an observable that can have multiple
	 * directives subscribing to it.
	 *
	 * @constructor
	 */
	function Dep() {
	  this.id = uid$1++;
	  this.subs = [];
	}

	// the current target watcher being evaluated.
	// this is globally unique because there could be only one
	// watcher being evaluated at any time.
	Dep.target = null;

	/**
	 * Add a directive subscriber.
	 *
	 * @param {Directive} sub
	 */

	Dep.prototype.addSub = function (sub) {
	  this.subs.push(sub);
	};

	/**
	 * Remove a directive subscriber.
	 *
	 * @param {Directive} sub
	 */

	Dep.prototype.removeSub = function (sub) {
	  this.subs.$remove(sub);
	};

	/**
	 * Add self as a dependency to the target watcher.
	 */

	Dep.prototype.depend = function () {
	  Dep.target.addDep(this);
	};

	/**
	 * Notify all subscribers of a new value.
	 */

	Dep.prototype.notify = function () {
	  // stablize the subscriber list first
	  var subs = toArray(this.subs);
	  for (var i = 0, l = subs.length; i < l; i++) {
	    subs[i].update();
	  }
	};

	var arrayProto = Array.prototype;
	var arrayMethods = Object.create(arrayProto)

	/**
	 * Intercept mutating methods and emit events
	 */

	;['push', 'pop', 'shift', 'unshift', 'splice', 'sort', 'reverse'].forEach(function (method) {
	  // cache original method
	  var original = arrayProto[method];
	  def(arrayMethods, method, function mutator() {
	    // avoid leaking arguments:
	    // http://jsperf.com/closure-with-arguments
	    var i = arguments.length;
	    var args = new Array(i);
	    while (i--) {
	      args[i] = arguments[i];
	    }
	    var result = original.apply(this, args);
	    var ob = this.__ob__;
	    var inserted;
	    switch (method) {
	      case 'push':
	        inserted = args;
	        break;
	      case 'unshift':
	        inserted = args;
	        break;
	      case 'splice':
	        inserted = args.slice(2);
	        break;
	    }
	    if (inserted) ob.observeArray(inserted);
	    // notify change
	    ob.dep.notify();
	    return result;
	  });
	});

	/**
	 * Swap the element at the given index with a new value
	 * and emits corresponding event.
	 *
	 * @param {Number} index
	 * @param {*} val
	 * @return {*} - replaced element
	 */

	def(arrayProto, '$set', function $set(index, val) {
	  if (index >= this.length) {
	    this.length = Number(index) + 1;
	  }
	  return this.splice(index, 1, val)[0];
	});

	/**
	 * Convenience method to remove the element at given index or target element reference.
	 *
	 * @param {*} item
	 */

	def(arrayProto, '$remove', function $remove(item) {
	  /* istanbul ignore if */
	  if (!this.length) return;
	  var index = indexOf(this, item);
	  if (index > -1) {
	    return this.splice(index, 1);
	  }
	});

	var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

	/**
	 * By default, when a reactive property is set, the new value is
	 * also converted to become reactive. However in certain cases, e.g.
	 * v-for scope alias and props, we don't want to force conversion
	 * because the value may be a nested value under a frozen data structure.
	 *
	 * So whenever we want to set a reactive property without forcing
	 * conversion on the new value, we wrap that call inside this function.
	 */

	var shouldConvert = true;

	function withoutConversion(fn) {
	  shouldConvert = false;
	  fn();
	  shouldConvert = true;
	}

	/**
	 * Observer class that are attached to each observed
	 * object. Once attached, the observer converts target
	 * object's property keys into getter/setters that
	 * collect dependencies and dispatches updates.
	 *
	 * @param {Array|Object} value
	 * @constructor
	 */

	function Observer(value) {
	  this.value = value;
	  this.dep = new Dep();
	  def(value, '__ob__', this);
	  if (isArray(value)) {
	    var augment = hasProto ? protoAugment : copyAugment;
	    augment(value, arrayMethods, arrayKeys);
	    this.observeArray(value);
	  } else {
	    this.walk(value);
	  }
	}

	// Instance methods

	/**
	 * Walk through each property and convert them into
	 * getter/setters. This method should only be called when
	 * value type is Object.
	 *
	 * @param {Object} obj
	 */

	Observer.prototype.walk = function (obj) {
	  var keys = Object.keys(obj);
	  for (var i = 0, l = keys.length; i < l; i++) {
	    this.convert(keys[i], obj[keys[i]]);
	  }
	};

	/**
	 * Observe a list of Array items.
	 *
	 * @param {Array} items
	 */

	Observer.prototype.observeArray = function (items) {
	  for (var i = 0, l = items.length; i < l; i++) {
	    observe(items[i]);
	  }
	};

	/**
	 * Convert a property into getter/setter so we can emit
	 * the events when the property is accessed/changed.
	 *
	 * @param {String} key
	 * @param {*} val
	 */

	Observer.prototype.convert = function (key, val) {
	  defineReactive(this.value, key, val);
	};

	/**
	 * Add an owner vm, so that when $set/$delete mutations
	 * happen we can notify owner vms to proxy the keys and
	 * digest the watchers. This is only called when the object
	 * is observed as an instance's root $data.
	 *
	 * @param {Vue} vm
	 */

	Observer.prototype.addVm = function (vm) {
	  (this.vms || (this.vms = [])).push(vm);
	};

	/**
	 * Remove an owner vm. This is called when the object is
	 * swapped out as an instance's $data object.
	 *
	 * @param {Vue} vm
	 */

	Observer.prototype.removeVm = function (vm) {
	  this.vms.$remove(vm);
	};

	// helpers

	/**
	 * Augment an target Object or Array by intercepting
	 * the prototype chain using __proto__
	 *
	 * @param {Object|Array} target
	 * @param {Object} src
	 */

	function protoAugment(target, src) {
	  /* eslint-disable no-proto */
	  target.__proto__ = src;
	  /* eslint-enable no-proto */
	}

	/**
	 * Augment an target Object or Array by defining
	 * hidden properties.
	 *
	 * @param {Object|Array} target
	 * @param {Object} proto
	 */

	function copyAugment(target, src, keys) {
	  for (var i = 0, l = keys.length; i < l; i++) {
	    var key = keys[i];
	    def(target, key, src[key]);
	  }
	}

	/**
	 * Attempt to create an observer instance for a value,
	 * returns the new observer if successfully observed,
	 * or the existing observer if the value already has one.
	 *
	 * @param {*} value
	 * @param {Vue} [vm]
	 * @return {Observer|undefined}
	 * @static
	 */

	function observe(value, vm) {
	  if (!value || typeof value !== 'object') {
	    return;
	  }
	  var ob;
	  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
	    ob = value.__ob__;
	  } else if (shouldConvert && (isArray(value) || isPlainObject(value)) && Object.isExtensible(value) && !value._isVue) {
	    ob = new Observer(value);
	  }
	  if (ob && vm) {
	    ob.addVm(vm);
	  }
	  return ob;
	}

	/**
	 * Define a reactive property on an Object.
	 *
	 * @param {Object} obj
	 * @param {String} key
	 * @param {*} val
	 */

	function defineReactive(obj, key, val) {
	  var dep = new Dep();

	  var property = Object.getOwnPropertyDescriptor(obj, key);
	  if (property && property.configurable === false) {
	    return;
	  }

	  // cater for pre-defined getter/setters
	  var getter = property && property.get;
	  var setter = property && property.set;

	  var childOb = observe(val);
	  Object.defineProperty(obj, key, {
	    enumerable: true,
	    configurable: true,
	    get: function reactiveGetter() {
	      var value = getter ? getter.call(obj) : val;
	      if (Dep.target) {
	        dep.depend();
	        if (childOb) {
	          childOb.dep.depend();
	        }
	        if (isArray(value)) {
	          for (var e, i = 0, l = value.length; i < l; i++) {
	            e = value[i];
	            e && e.__ob__ && e.__ob__.dep.depend();
	          }
	        }
	      }
	      return value;
	    },
	    set: function reactiveSetter(newVal) {
	      var value = getter ? getter.call(obj) : val;
	      if (newVal === value) {
	        return;
	      }
	      if (setter) {
	        setter.call(obj, newVal);
	      } else {
	        val = newVal;
	      }
	      childOb = observe(newVal);
	      dep.notify();
	    }
	  });
	}



	var util = Object.freeze({
		defineReactive: defineReactive,
		set: set,
		del: del,
		hasOwn: hasOwn,
		isLiteral: isLiteral,
		isReserved: isReserved,
		_toString: _toString,
		toNumber: toNumber,
		toBoolean: toBoolean,
		stripQuotes: stripQuotes,
		camelize: camelize,
		hyphenate: hyphenate,
		classify: classify,
		bind: bind,
		toArray: toArray,
		extend: extend,
		isObject: isObject,
		isPlainObject: isPlainObject,
		def: def,
		debounce: _debounce,
		indexOf: indexOf,
		cancellable: cancellable,
		looseEqual: looseEqual,
		isArray: isArray,
		hasProto: hasProto,
		inBrowser: inBrowser,
		devtools: devtools,
		isIE9: isIE9,
		isAndroid: isAndroid,
		isIos: isIos,
		isWechat: isWechat,
		get transitionProp () { return transitionProp; },
		get transitionEndEvent () { return transitionEndEvent; },
		get animationProp () { return animationProp; },
		get animationEndEvent () { return animationEndEvent; },
		nextTick: nextTick,
		get _Set () { return _Set; },
		query: query,
		inDoc: inDoc,
		getAttr: getAttr,
		getBindAttr: getBindAttr,
		hasBindAttr: hasBindAttr,
		before: before,
		after: after,
		remove: remove,
		prepend: prepend,
		replace: replace,
		on: on,
		off: off,
		setClass: setClass,
		addClass: addClass,
		removeClass: removeClass,
		extractContent: extractContent,
		trimNode: trimNode,
		isTemplate: isTemplate,
		createAnchor: createAnchor,
		findRef: findRef,
		mapNodeRange: mapNodeRange,
		removeNodeRange: removeNodeRange,
		isFragment: isFragment,
		getOuterHTML: getOuterHTML,
		mergeOptions: mergeOptions,
		resolveAsset: resolveAsset,
		checkComponentAttr: checkComponentAttr,
		commonTagRE: commonTagRE,
		reservedTagRE: reservedTagRE,
		get warn () { return warn; }
	});

	var uid = 0;

	function initMixin (Vue) {
	  /**
	   * The main init sequence. This is called for every
	   * instance, including ones that are created from extended
	   * constructors.
	   *
	   * @param {Object} options - this options object should be
	   *                           the result of merging class
	   *                           options and the options passed
	   *                           in to the constructor.
	   */

	  Vue.prototype._init = function (options) {
	    options = options || {};

	    this.$el = null;
	    this.$parent = options.parent;
	    this.$root = this.$parent ? this.$parent.$root : this;
	    this.$children = [];
	    this.$refs = {}; // child vm references
	    this.$els = {}; // element references
	    this._watchers = []; // all watchers as an array
	    this._directives = []; // all directives

	    // a uid
	    this._uid = uid++;

	    // a flag to avoid this being observed
	    this._isVue = true;

	    // events bookkeeping
	    this._events = {}; // registered callbacks
	    this._eventsCount = {}; // for $broadcast optimization

	    // fragment instance properties
	    this._isFragment = false;
	    this._fragment = // @type {DocumentFragment}
	    this._fragmentStart = // @type {Text|Comment}
	    this._fragmentEnd = null; // @type {Text|Comment}

	    // lifecycle state
	    this._isCompiled = this._isDestroyed = this._isReady = this._isAttached = this._isBeingDestroyed = this._vForRemoving = false;
	    this._unlinkFn = null;

	    // context:
	    // if this is a transcluded component, context
	    // will be the common parent vm of this instance
	    // and its host.
	    this._context = options._context || this.$parent;

	    // scope:
	    // if this is inside an inline v-for, the scope
	    // will be the intermediate scope created for this
	    // repeat fragment. this is used for linking props
	    // and container directives.
	    this._scope = options._scope;

	    // fragment:
	    // if this instance is compiled inside a Fragment, it
	    // needs to reigster itself as a child of that fragment
	    // for attach/detach to work properly.
	    this._frag = options._frag;
	    if (this._frag) {
	      this._frag.children.push(this);
	    }

	    // push self into parent / transclusion host
	    if (this.$parent) {
	      this.$parent.$children.push(this);
	    }

	    // merge options.
	    options = this.$options = mergeOptions(this.constructor.options, options, this);

	    // set ref
	    this._updateRef();

	    // initialize data as empty object.
	    // it will be filled up in _initData().
	    this._data = {};

	    // call init hook
	    this._callHook('init');

	    // initialize data observation and scope inheritance.
	    this._initState();

	    // setup event system and option events.
	    this._initEvents();

	    // call created hook
	    this._callHook('created');

	    // if `el` option is passed, start compilation.
	    if (options.el) {
	      this.$mount(options.el);
	    }
	  };
	}

	var pathCache = new Cache(1000);

	// actions
	var APPEND = 0;
	var PUSH = 1;
	var INC_SUB_PATH_DEPTH = 2;
	var PUSH_SUB_PATH = 3;

	// states
	var BEFORE_PATH = 0;
	var IN_PATH = 1;
	var BEFORE_IDENT = 2;
	var IN_IDENT = 3;
	var IN_SUB_PATH = 4;
	var IN_SINGLE_QUOTE = 5;
	var IN_DOUBLE_QUOTE = 6;
	var AFTER_PATH = 7;
	var ERROR = 8;

	var pathStateMachine = [];

	pathStateMachine[BEFORE_PATH] = {
	  'ws': [BEFORE_PATH],
	  'ident': [IN_IDENT, APPEND],
	  '[': [IN_SUB_PATH],
	  'eof': [AFTER_PATH]
	};

	pathStateMachine[IN_PATH] = {
	  'ws': [IN_PATH],
	  '.': [BEFORE_IDENT],
	  '[': [IN_SUB_PATH],
	  'eof': [AFTER_PATH]
	};

	pathStateMachine[BEFORE_IDENT] = {
	  'ws': [BEFORE_IDENT],
	  'ident': [IN_IDENT, APPEND]
	};

	pathStateMachine[IN_IDENT] = {
	  'ident': [IN_IDENT, APPEND],
	  '0': [IN_IDENT, APPEND],
	  'number': [IN_IDENT, APPEND],
	  'ws': [IN_PATH, PUSH],
	  '.': [BEFORE_IDENT, PUSH],
	  '[': [IN_SUB_PATH, PUSH],
	  'eof': [AFTER_PATH, PUSH]
	};

	pathStateMachine[IN_SUB_PATH] = {
	  "'": [IN_SINGLE_QUOTE, APPEND],
	  '"': [IN_DOUBLE_QUOTE, APPEND],
	  '[': [IN_SUB_PATH, INC_SUB_PATH_DEPTH],
	  ']': [IN_PATH, PUSH_SUB_PATH],
	  'eof': ERROR,
	  'else': [IN_SUB_PATH, APPEND]
	};

	pathStateMachine[IN_SINGLE_QUOTE] = {
	  "'": [IN_SUB_PATH, APPEND],
	  'eof': ERROR,
	  'else': [IN_SINGLE_QUOTE, APPEND]
	};

	pathStateMachine[IN_DOUBLE_QUOTE] = {
	  '"': [IN_SUB_PATH, APPEND],
	  'eof': ERROR,
	  'else': [IN_DOUBLE_QUOTE, APPEND]
	};

	/**
	 * Determine the type of a character in a keypath.
	 *
	 * @param {Char} ch
	 * @return {String} type
	 */

	function getPathCharType(ch) {
	  if (ch === undefined) {
	    return 'eof';
	  }

	  var code = ch.charCodeAt(0);

	  switch (code) {
	    case 0x5B: // [
	    case 0x5D: // ]
	    case 0x2E: // .
	    case 0x22: // "
	    case 0x27: // '
	    case 0x30:
	      // 0
	      return ch;

	    case 0x5F: // _
	    case 0x24:
	      // $
	      return 'ident';

	    case 0x20: // Space
	    case 0x09: // Tab
	    case 0x0A: // Newline
	    case 0x0D: // Return
	    case 0xA0: // No-break space
	    case 0xFEFF: // Byte Order Mark
	    case 0x2028: // Line Separator
	    case 0x2029:
	      // Paragraph Separator
	      return 'ws';
	  }

	  // a-z, A-Z
	  if (code >= 0x61 && code <= 0x7A || code >= 0x41 && code <= 0x5A) {
	    return 'ident';
	  }

	  // 1-9
	  if (code >= 0x31 && code <= 0x39) {
	    return 'number';
	  }

	  return 'else';
	}

	/**
	 * Format a subPath, return its plain form if it is
	 * a literal string or number. Otherwise prepend the
	 * dynamic indicator (*).
	 *
	 * @param {String} path
	 * @return {String}
	 */

	function formatSubPath(path) {
	  var trimmed = path.trim();
	  // invalid leading 0
	  if (path.charAt(0) === '0' && isNaN(path)) {
	    return false;
	  }
	  return isLiteral(trimmed) ? stripQuotes(trimmed) : '*' + trimmed;
	}

	/**
	 * Parse a string path into an array of segments
	 *
	 * @param {String} path
	 * @return {Array|undefined}
	 */

	function parse(path) {
	  var keys = [];
	  var index = -1;
	  var mode = BEFORE_PATH;
	  var subPathDepth = 0;
	  var c, newChar, key, type, transition, action, typeMap;

	  var actions = [];

	  actions[PUSH] = function () {
	    if (key !== undefined) {
	      keys.push(key);
	      key = undefined;
	    }
	  };

	  actions[APPEND] = function () {
	    if (key === undefined) {
	      key = newChar;
	    } else {
	      key += newChar;
	    }
	  };

	  actions[INC_SUB_PATH_DEPTH] = function () {
	    actions[APPEND]();
	    subPathDepth++;
	  };

	  actions[PUSH_SUB_PATH] = function () {
	    if (subPathDepth > 0) {
	      subPathDepth--;
	      mode = IN_SUB_PATH;
	      actions[APPEND]();
	    } else {
	      subPathDepth = 0;
	      key = formatSubPath(key);
	      if (key === false) {
	        return false;
	      } else {
	        actions[PUSH]();
	      }
	    }
	  };

	  function maybeUnescapeQuote() {
	    var nextChar = path[index + 1];
	    if (mode === IN_SINGLE_QUOTE && nextChar === "'" || mode === IN_DOUBLE_QUOTE && nextChar === '"') {
	      index++;
	      newChar = '\\' + nextChar;
	      actions[APPEND]();
	      return true;
	    }
	  }

	  while (mode != null) {
	    index++;
	    c = path[index];

	    if (c === '\\' && maybeUnescapeQuote()) {
	      continue;
	    }

	    type = getPathCharType(c);
	    typeMap = pathStateMachine[mode];
	    transition = typeMap[type] || typeMap['else'] || ERROR;

	    if (transition === ERROR) {
	      return; // parse error
	    }

	    mode = transition[0];
	    action = actions[transition[1]];
	    if (action) {
	      newChar = transition[2];
	      newChar = newChar === undefined ? c : newChar;
	      if (action() === false) {
	        return;
	      }
	    }

	    if (mode === AFTER_PATH) {
	      keys.raw = path;
	      return keys;
	    }
	  }
	}

	/**
	 * External parse that check for a cache hit first
	 *
	 * @param {String} path
	 * @return {Array|undefined}
	 */

	function parsePath(path) {
	  var hit = pathCache.get(path);
	  if (!hit) {
	    hit = parse(path);
	    if (hit) {
	      pathCache.put(path, hit);
	    }
	  }
	  return hit;
	}

	/**
	 * Get from an object from a path string
	 *
	 * @param {Object} obj
	 * @param {String} path
	 */

	function getPath(obj, path) {
	  return parseExpression(path).get(obj);
	}

	/**
	 * Warn against setting non-existent root path on a vm.
	 */

	var warnNonExistent;
	if (process.env.NODE_ENV !== 'production') {
	  warnNonExistent = function (path, vm) {
	    warn('You are setting a non-existent path "' + path.raw + '" ' + 'on a vm instance. Consider pre-initializing the property ' + 'with the "data" option for more reliable reactivity ' + 'and better performance.', vm);
	  };
	}

	/**
	 * Set on an object from a path
	 *
	 * @param {Object} obj
	 * @param {String | Array} path
	 * @param {*} val
	 */

	function setPath(obj, path, val) {
	  var original = obj;
	  if (typeof path === 'string') {
	    path = parse(path);
	  }
	  if (!path || !isObject(obj)) {
	    return false;
	  }
	  var last, key;
	  for (var i = 0, l = path.length; i < l; i++) {
	    last = obj;
	    key = path[i];
	    if (key.charAt(0) === '*') {
	      key = parseExpression(key.slice(1)).get.call(original, original);
	    }
	    if (i < l - 1) {
	      obj = obj[key];
	      if (!isObject(obj)) {
	        obj = {};
	        if (process.env.NODE_ENV !== 'production' && last._isVue) {
	          warnNonExistent(path, last);
	        }
	        set(last, key, obj);
	      }
	    } else {
	      if (isArray(obj)) {
	        obj.$set(key, val);
	      } else if (key in obj) {
	        obj[key] = val;
	      } else {
	        if (process.env.NODE_ENV !== 'production' && obj._isVue) {
	          warnNonExistent(path, obj);
	        }
	        set(obj, key, val);
	      }
	    }
	  }
	  return true;
	}

	var path = Object.freeze({
	  parsePath: parsePath,
	  getPath: getPath,
	  setPath: setPath
	});

	var expressionCache = new Cache(1000);

	var allowedKeywords = 'Math,Date,this,true,false,null,undefined,Infinity,NaN,' + 'isNaN,isFinite,decodeURI,decodeURIComponent,encodeURI,' + 'encodeURIComponent,parseInt,parseFloat';
	var allowedKeywordsRE = new RegExp('^(' + allowedKeywords.replace(/,/g, '\\b|') + '\\b)');

	// keywords that don't make sense inside expressions
	var improperKeywords = 'break,case,class,catch,const,continue,debugger,default,' + 'delete,do,else,export,extends,finally,for,function,if,' + 'import,in,instanceof,let,return,super,switch,throw,try,' + 'var,while,with,yield,enum,await,implements,package,' + 'protected,static,interface,private,public';
	var improperKeywordsRE = new RegExp('^(' + improperKeywords.replace(/,/g, '\\b|') + '\\b)');

	var wsRE = /\s/g;
	var newlineRE = /\n/g;
	var saveRE = /[\{,]\s*[\w\$_]+\s*:|('(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`)|new |typeof |void /g;
	var restoreRE = /"(\d+)"/g;
	var pathTestRE = /^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['.*?'\]|\[".*?"\]|\[\d+\]|\[[A-Za-z_$][\w$]*\])*$/;
	var identRE = /[^\w$\.](?:[A-Za-z_$][\w$]*)/g;
	var booleanLiteralRE = /^(?:true|false)$/;

	/**
	 * Save / Rewrite / Restore
	 *
	 * When rewriting paths found in an expression, it is
	 * possible for the same letter sequences to be found in
	 * strings and Object literal property keys. Therefore we
	 * remove and store these parts in a temporary array, and
	 * restore them after the path rewrite.
	 */

	var saved = [];

	/**
	 * Save replacer
	 *
	 * The save regex can match two possible cases:
	 * 1. An opening object literal
	 * 2. A string
	 * If matched as a plain string, we need to escape its
	 * newlines, since the string needs to be preserved when
	 * generating the function body.
	 *
	 * @param {String} str
	 * @param {String} isString - str if matched as a string
	 * @return {String} - placeholder with index
	 */

	function save(str, isString) {
	  var i = saved.length;
	  saved[i] = isString ? str.replace(newlineRE, '\\n') : str;
	  return '"' + i + '"';
	}

	/**
	 * Path rewrite replacer
	 *
	 * @param {String} raw
	 * @return {String}
	 */

	function rewrite(raw) {
	  var c = raw.charAt(0);
	  var path = raw.slice(1);
	  if (allowedKeywordsRE.test(path)) {
	    return raw;
	  } else {
	    path = path.indexOf('"') > -1 ? path.replace(restoreRE, restore) : path;
	    return c + 'scope.' + path;
	  }
	}

	/**
	 * Restore replacer
	 *
	 * @param {String} str
	 * @param {String} i - matched save index
	 * @return {String}
	 */

	function restore(str, i) {
	  return saved[i];
	}

	/**
	 * Rewrite an expression, prefixing all path accessors with
	 * `scope.` and generate getter/setter functions.
	 *
	 * @param {String} exp
	 * @return {Function}
	 */

	function compileGetter(exp) {
	  if (improperKeywordsRE.test(exp)) {
	    process.env.NODE_ENV !== 'production' && warn('Avoid using reserved keywords in expression: ' + exp);
	  }
	  // reset state
	  saved.length = 0;
	  // save strings and object literal keys
	  var body = exp.replace(saveRE, save).replace(wsRE, '');
	  // rewrite all paths
	  // pad 1 space here becaue the regex matches 1 extra char
	  body = (' ' + body).replace(identRE, rewrite).replace(restoreRE, restore);
	  return makeGetterFn(body);
	}

	/**
	 * Build a getter function. Requires eval.
	 *
	 * We isolate the try/catch so it doesn't affect the
	 * optimization of the parse function when it is not called.
	 *
	 * @param {String} body
	 * @return {Function|undefined}
	 */

	function makeGetterFn(body) {
	  try {
	    /* eslint-disable no-new-func */
	    return new Function('scope', 'return ' + body + ';');
	    /* eslint-enable no-new-func */
	  } catch (e) {
	    process.env.NODE_ENV !== 'production' && warn('Invalid expression. ' + 'Generated function body: ' + body);
	  }
	}

	/**
	 * Compile a setter function for the expression.
	 *
	 * @param {String} exp
	 * @return {Function|undefined}
	 */

	function compileSetter(exp) {
	  var path = parsePath(exp);
	  if (path) {
	    return function (scope, val) {
	      setPath(scope, path, val);
	    };
	  } else {
	    process.env.NODE_ENV !== 'production' && warn('Invalid setter expression: ' + exp);
	  }
	}

	/**
	 * Parse an expression into re-written getter/setters.
	 *
	 * @param {String} exp
	 * @param {Boolean} needSet
	 * @return {Function}
	 */

	function parseExpression(exp, needSet) {
	  exp = exp.trim();
	  // try cache
	  var hit = expressionCache.get(exp);
	  if (hit) {
	    if (needSet && !hit.set) {
	      hit.set = compileSetter(hit.exp);
	    }
	    return hit;
	  }
	  var res = { exp: exp };
	  res.get = isSimplePath(exp) && exp.indexOf('[') < 0
	  // optimized super simple getter
	  ? makeGetterFn('scope.' + exp)
	  // dynamic getter
	  : compileGetter(exp);
	  if (needSet) {
	    res.set = compileSetter(exp);
	  }
	  expressionCache.put(exp, res);
	  return res;
	}

	/**
	 * Check if an expression is a simple path.
	 *
	 * @param {String} exp
	 * @return {Boolean}
	 */

	function isSimplePath(exp) {
	  return pathTestRE.test(exp) &&
	  // don't treat true/false as paths
	  !booleanLiteralRE.test(exp) &&
	  // Math constants e.g. Math.PI, Math.E etc.
	  exp.slice(0, 5) !== 'Math.';
	}

	var expression = Object.freeze({
	  parseExpression: parseExpression,
	  isSimplePath: isSimplePath
	});

	// we have two separate queues: one for directive updates
	// and one for user watcher registered via $watch().
	// we want to guarantee directive updates to be called
	// before user watchers so that when user watchers are
	// triggered, the DOM would have already been in updated
	// state.

	var queue = [];
	var userQueue = [];
	var has = {};
	var circular = {};
	var waiting = false;

	/**
	 * Reset the batcher's state.
	 */

	function resetBatcherState() {
	  queue.length = 0;
	  userQueue.length = 0;
	  has = {};
	  circular = {};
	  waiting = false;
	}

	/**
	 * Flush both queues and run the watchers.
	 */

	function flushBatcherQueue() {
	  var _again = true;

	  _function: while (_again) {
	    _again = false;

	    runBatcherQueue(queue);
	    runBatcherQueue(userQueue);
	    // user watchers triggered more watchers,
	    // keep flushing until it depletes
	    if (queue.length) {
	      _again = true;
	      continue _function;
	    }
	    // dev tool hook
	    /* istanbul ignore if */
	    if (devtools && config.devtools) {
	      devtools.emit('flush');
	    }
	    resetBatcherState();
	  }
	}

	/**
	 * Run the watchers in a single queue.
	 *
	 * @param {Array} queue
	 */

	function runBatcherQueue(queue) {
	  // do not cache length because more watchers might be pushed
	  // as we run existing watchers
	  for (var i = 0; i < queue.length; i++) {
	    var watcher = queue[i];
	    var id = watcher.id;
	    has[id] = null;
	    watcher.run();
	    // in dev build, check and stop circular updates.
	    if (process.env.NODE_ENV !== 'production' && has[id] != null) {
	      circular[id] = (circular[id] || 0) + 1;
	      if (circular[id] > config._maxUpdateCount) {
	        warn('You may have an infinite update loop for watcher ' + 'with expression "' + watcher.expression + '"', watcher.vm);
	        break;
	      }
	    }
	  }
	  queue.length = 0;
	}

	/**
	 * Push a watcher into the watcher queue.
	 * Jobs with duplicate IDs will be skipped unless it's
	 * pushed when the queue is being flushed.
	 *
	 * @param {Watcher} watcher
	 *   properties:
	 *   - {Number} id
	 *   - {Function} run
	 */

	function pushWatcher(watcher) {
	  var id = watcher.id;
	  if (has[id] == null) {
	    // push watcher into appropriate queue
	    var q = watcher.user ? userQueue : queue;
	    has[id] = q.length;
	    q.push(watcher);
	    // queue the flush
	    if (!waiting) {
	      waiting = true;
	      nextTick(flushBatcherQueue);
	    }
	  }
	}

	var uid$2 = 0;

	/**
	 * A watcher parses an expression, collects dependencies,
	 * and fires callback when the expression value changes.
	 * This is used for both the $watch() api and directives.
	 *
	 * @param {Vue} vm
	 * @param {String|Function} expOrFn
	 * @param {Function} cb
	 * @param {Object} options
	 *                 - {Array} filters
	 *                 - {Boolean} twoWay
	 *                 - {Boolean} deep
	 *                 - {Boolean} user
	 *                 - {Boolean} sync
	 *                 - {Boolean} lazy
	 *                 - {Function} [preProcess]
	 *                 - {Function} [postProcess]
	 * @constructor
	 */
	function Watcher(vm, expOrFn, cb, options) {
	  // mix in options
	  if (options) {
	    extend(this, options);
	  }
	  var isFn = typeof expOrFn === 'function';
	  this.vm = vm;
	  vm._watchers.push(this);
	  this.expression = expOrFn;
	  this.cb = cb;
	  this.id = ++uid$2; // uid for batching
	  this.active = true;
	  this.dirty = this.lazy; // for lazy watchers
	  this.deps = [];
	  this.newDeps = [];
	  this.depIds = new _Set();
	  this.newDepIds = new _Set();
	  this.prevError = null; // for async error stacks
	  // parse expression for getter/setter
	  if (isFn) {
	    this.getter = expOrFn;
	    this.setter = undefined;
	  } else {
	    var res = parseExpression(expOrFn, this.twoWay);
	    this.getter = res.get;
	    this.setter = res.set;
	  }
	  this.value = this.lazy ? undefined : this.get();
	  // state for avoiding false triggers for deep and Array
	  // watchers during vm._digest()
	  this.queued = this.shallow = false;
	}

	/**
	 * Evaluate the getter, and re-collect dependencies.
	 */

	Watcher.prototype.get = function () {
	  this.beforeGet();
	  var scope = this.scope || this.vm;
	  var value;
	  try {
	    value = this.getter.call(scope, scope);
	  } catch (e) {
	    if (process.env.NODE_ENV !== 'production' && config.warnExpressionErrors) {
	      warn('Error when evaluating expression ' + '"' + this.expression + '": ' + e.toString(), this.vm);
	    }
	  }
	  // "touch" every property so they are all tracked as
	  // dependencies for deep watching
	  if (this.deep) {
	    traverse(value);
	  }
	  if (this.preProcess) {
	    value = this.preProcess(value);
	  }
	  if (this.filters) {
	    value = scope._applyFilters(value, null, this.filters, false);
	  }
	  if (this.postProcess) {
	    value = this.postProcess(value);
	  }
	  this.afterGet();
	  return value;
	};

	/**
	 * Set the corresponding value with the setter.
	 *
	 * @param {*} value
	 */

	Watcher.prototype.set = function (value) {
	  var scope = this.scope || this.vm;
	  if (this.filters) {
	    value = scope._applyFilters(value, this.value, this.filters, true);
	  }
	  try {
	    this.setter.call(scope, scope, value);
	  } catch (e) {
	    if (process.env.NODE_ENV !== 'production' && config.warnExpressionErrors) {
	      warn('Error when evaluating setter ' + '"' + this.expression + '": ' + e.toString(), this.vm);
	    }
	  }
	  // two-way sync for v-for alias
	  var forContext = scope.$forContext;
	  if (forContext && forContext.alias === this.expression) {
	    if (forContext.filters) {
	      process.env.NODE_ENV !== 'production' && warn('It seems you are using two-way binding on ' + 'a v-for alias (' + this.expression + '), and the ' + 'v-for has filters. This will not work properly. ' + 'Either remove the filters or use an array of ' + 'objects and bind to object properties instead.', this.vm);
	      return;
	    }
	    forContext._withLock(function () {
	      if (scope.$key) {
	        // original is an object
	        forContext.rawValue[scope.$key] = value;
	      } else {
	        forContext.rawValue.$set(scope.$index, value);
	      }
	    });
	  }
	};

	/**
	 * Prepare for dependency collection.
	 */

	Watcher.prototype.beforeGet = function () {
	  Dep.target = this;
	};

	/**
	 * Add a dependency to this directive.
	 *
	 * @param {Dep} dep
	 */

	Watcher.prototype.addDep = function (dep) {
	  var id = dep.id;
	  if (!this.newDepIds.has(id)) {
	    this.newDepIds.add(id);
	    this.newDeps.push(dep);
	    if (!this.depIds.has(id)) {
	      dep.addSub(this);
	    }
	  }
	};

	/**
	 * Clean up for dependency collection.
	 */

	Watcher.prototype.afterGet = function () {
	  Dep.target = null;
	  var i = this.deps.length;
	  while (i--) {
	    var dep = this.deps[i];
	    if (!this.newDepIds.has(dep.id)) {
	      dep.removeSub(this);
	    }
	  }
	  var tmp = this.depIds;
	  this.depIds = this.newDepIds;
	  this.newDepIds = tmp;
	  this.newDepIds.clear();
	  tmp = this.deps;
	  this.deps = this.newDeps;
	  this.newDeps = tmp;
	  this.newDeps.length = 0;
	};

	/**
	 * Subscriber interface.
	 * Will be called when a dependency changes.
	 *
	 * @param {Boolean} shallow
	 */

	Watcher.prototype.update = function (shallow) {
	  if (this.lazy) {
	    this.dirty = true;
	  } else if (this.sync || !config.async) {
	    this.run();
	  } else {
	    // if queued, only overwrite shallow with non-shallow,
	    // but not the other way around.
	    this.shallow = this.queued ? shallow ? this.shallow : false : !!shallow;
	    this.queued = true;
	    // record before-push error stack in debug mode
	    /* istanbul ignore if */
	    if (process.env.NODE_ENV !== 'production' && config.debug) {
	      this.prevError = new Error('[vue] async stack trace');
	    }
	    pushWatcher(this);
	  }
	};

	/**
	 * Batcher job interface.
	 * Will be called by the batcher.
	 */

	Watcher.prototype.run = function () {
	  if (this.active) {
	    var value = this.get();
	    if (value !== this.value ||
	    // Deep watchers and watchers on Object/Arrays should fire even
	    // when the value is the same, because the value may
	    // have mutated; but only do so if this is a
	    // non-shallow update (caused by a vm digest).
	    (isObject(value) || this.deep) && !this.shallow) {
	      // set new value
	      var oldValue = this.value;
	      this.value = value;
	      // in debug + async mode, when a watcher callbacks
	      // throws, we also throw the saved before-push error
	      // so the full cross-tick stack trace is available.
	      var prevError = this.prevError;
	      /* istanbul ignore if */
	      if (process.env.NODE_ENV !== 'production' && config.debug && prevError) {
	        this.prevError = null;
	        try {
	          this.cb.call(this.vm, value, oldValue);
	        } catch (e) {
	          nextTick(function () {
	            throw prevError;
	          }, 0);
	          throw e;
	        }
	      } else {
	        this.cb.call(this.vm, value, oldValue);
	      }
	    }
	    this.queued = this.shallow = false;
	  }
	};

	/**
	 * Evaluate the value of the watcher.
	 * This only gets called for lazy watchers.
	 */

	Watcher.prototype.evaluate = function () {
	  // avoid overwriting another watcher that is being
	  // collected.
	  var current = Dep.target;
	  this.value = this.get();
	  this.dirty = false;
	  Dep.target = current;
	};

	/**
	 * Depend on all deps collected by this watcher.
	 */

	Watcher.prototype.depend = function () {
	  var i = this.deps.length;
	  while (i--) {
	    this.deps[i].depend();
	  }
	};

	/**
	 * Remove self from all dependencies' subcriber list.
	 */

	Watcher.prototype.teardown = function () {
	  if (this.active) {
	    // remove self from vm's watcher list
	    // this is a somewhat expensive operation so we skip it
	    // if the vm is being destroyed or is performing a v-for
	    // re-render (the watcher list is then filtered by v-for).
	    if (!this.vm._isBeingDestroyed && !this.vm._vForRemoving) {
	      this.vm._watchers.$remove(this);
	    }
	    var i = this.deps.length;
	    while (i--) {
	      this.deps[i].removeSub(this);
	    }
	    this.active = false;
	    this.vm = this.cb = this.value = null;
	  }
	};

	/**
	 * Recrusively traverse an object to evoke all converted
	 * getters, so that every nested property inside the object
	 * is collected as a "deep" dependency.
	 *
	 * @param {*} val
	 */

	var seenObjects = new _Set();
	function traverse(val, seen) {
	  var i = undefined,
	      keys = undefined;
	  if (!seen) {
	    seen = seenObjects;
	    seen.clear();
	  }
	  var isA = isArray(val);
	  var isO = isObject(val);
	  if (isA || isO) {
	    if (val.__ob__) {
	      var depId = val.__ob__.dep.id;
	      if (seen.has(depId)) {
	        return;
	      } else {
	        seen.add(depId);
	      }
	    }
	    if (isA) {
	      i = val.length;
	      while (i--) traverse(val[i], seen);
	    } else if (isO) {
	      keys = Object.keys(val);
	      i = keys.length;
	      while (i--) traverse(val[keys[i]], seen);
	    }
	  }
	}

	var text$1 = {

	  bind: function bind() {
	    this.attr = this.el.nodeType === 3 ? 'data' : 'textContent';
	  },

	  update: function update(value) {
	    this.el[this.attr] = _toString(value);
	  }
	};

	var templateCache = new Cache(1000);
	var idSelectorCache = new Cache(1000);

	var map = {
	  efault: [0, '', ''],
	  legend: [1, '<fieldset>', '</fieldset>'],
	  tr: [2, '<table><tbody>', '</tbody></table>'],
	  col: [2, '<table><tbody></tbody><colgroup>', '</colgroup></table>']
	};

	map.td = map.th = [3, '<table><tbody><tr>', '</tr></tbody></table>'];

	map.option = map.optgroup = [1, '<select multiple="multiple">', '</select>'];

	map.thead = map.tbody = map.colgroup = map.caption = map.tfoot = [1, '<table>', '</table>'];

	map.g = map.defs = map.symbol = map.use = map.image = map.text = map.circle = map.ellipse = map.line = map.path = map.polygon = map.polyline = map.rect = [1, '<svg ' + 'xmlns="http://www.w3.org/2000/svg" ' + 'xmlns:xlink="http://www.w3.org/1999/xlink" ' + 'xmlns:ev="http://www.w3.org/2001/xml-events"' + 'version="1.1">', '</svg>'];

	/**
	 * Check if a node is a supported template node with a
	 * DocumentFragment content.
	 *
	 * @param {Node} node
	 * @return {Boolean}
	 */

	function isRealTemplate(node) {
	  return isTemplate(node) && isFragment(node.content);
	}

	var tagRE$1 = /<([\w:-]+)/;
	var entityRE = /&#?\w+?;/;

	/**
	 * Convert a string template to a DocumentFragment.
	 * Determines correct wrapping by tag types. Wrapping
	 * strategy found in jQuery & component/domify.
	 *
	 * @param {String} templateString
	 * @param {Boolean} raw
	 * @return {DocumentFragment}
	 */

	function stringToFragment(templateString, raw) {
	  // try a cache hit first
	  var cacheKey = raw ? templateString : templateString.trim();
	  var hit = templateCache.get(cacheKey);
	  if (hit) {
	    return hit;
	  }

	  var frag = document.createDocumentFragment();
	  var tagMatch = templateString.match(tagRE$1);
	  var entityMatch = entityRE.test(templateString);

	  if (!tagMatch && !entityMatch) {
	    // text only, return a single text node.
	    frag.appendChild(document.createTextNode(templateString));
	  } else {
	    var tag = tagMatch && tagMatch[1];
	    var wrap = map[tag] || map.efault;
	    var depth = wrap[0];
	    var prefix = wrap[1];
	    var suffix = wrap[2];
	    var node = document.createElement('div');

	    node.innerHTML = prefix + templateString + suffix;
	    while (depth--) {
	      node = node.lastChild;
	    }

	    var child;
	    /* eslint-disable no-cond-assign */
	    while (child = node.firstChild) {
	      /* eslint-enable no-cond-assign */
	      frag.appendChild(child);
	    }
	  }
	  if (!raw) {
	    trimNode(frag);
	  }
	  templateCache.put(cacheKey, frag);
	  return frag;
	}

	/**
	 * Convert a template node to a DocumentFragment.
	 *
	 * @param {Node} node
	 * @return {DocumentFragment}
	 */

	function nodeToFragment(node) {
	  // if its a template tag and the browser supports it,
	  // its content is already a document fragment. However, iOS Safari has
	  // bug when using directly cloned template content with touch
	  // events and can cause crashes when the nodes are removed from DOM, so we
	  // have to treat template elements as string templates. (#2805)
	  /* istanbul ignore if */
	  if (isRealTemplate(node)) {
	    return stringToFragment(node.innerHTML);
	  }
	  // script template
	  if (node.tagName === 'SCRIPT') {
	    return stringToFragment(node.textContent);
	  }
	  // normal node, clone it to avoid mutating the original
	  var clonedNode = cloneNode(node);
	  var frag = document.createDocumentFragment();
	  var child;
	  /* eslint-disable no-cond-assign */
	  while (child = clonedNode.firstChild) {
	    /* eslint-enable no-cond-assign */
	    frag.appendChild(child);
	  }
	  trimNode(frag);
	  return frag;
	}

	// Test for the presence of the Safari template cloning bug
	// https://bugs.webkit.org/showug.cgi?id=137755
	var hasBrokenTemplate = (function () {
	  /* istanbul ignore else */
	  if (inBrowser) {
	    var a = document.createElement('div');
	    a.innerHTML = '<template>1</template>';
	    return !a.cloneNode(true).firstChild.innerHTML;
	  } else {
	    return false;
	  }
	})();

	// Test for IE10/11 textarea placeholder clone bug
	var hasTextareaCloneBug = (function () {
	  /* istanbul ignore else */
	  if (inBrowser) {
	    var t = document.createElement('textarea');
	    t.placeholder = 't';
	    return t.cloneNode(true).value === 't';
	  } else {
	    return false;
	  }
	})();

	/**
	 * 1. Deal with Safari cloning nested <template> bug by
	 *    manually cloning all template instances.
	 * 2. Deal with IE10/11 textarea placeholder bug by setting
	 *    the correct value after cloning.
	 *
	 * @param {Element|DocumentFragment} node
	 * @return {Element|DocumentFragment}
	 */

	function cloneNode(node) {
	  /* istanbul ignore if */
	  if (!node.querySelectorAll) {
	    return node.cloneNode();
	  }
	  var res = node.cloneNode(true);
	  var i, original, cloned;
	  /* istanbul ignore if */
	  if (hasBrokenTemplate) {
	    var tempClone = res;
	    if (isRealTemplate(node)) {
	      node = node.content;
	      tempClone = res.content;
	    }
	    original = node.querySelectorAll('template');
	    if (original.length) {
	      cloned = tempClone.querySelectorAll('template');
	      i = cloned.length;
	      while (i--) {
	        cloned[i].parentNode.replaceChild(cloneNode(original[i]), cloned[i]);
	      }
	    }
	  }
	  /* istanbul ignore if */
	  if (hasTextareaCloneBug) {
	    if (node.tagName === 'TEXTAREA') {
	      res.value = node.value;
	    } else {
	      original = node.querySelectorAll('textarea');
	      if (original.length) {
	        cloned = res.querySelectorAll('textarea');
	        i = cloned.length;
	        while (i--) {
	          cloned[i].value = original[i].value;
	        }
	      }
	    }
	  }
	  return res;
	}

	/**
	 * Process the template option and normalizes it into a
	 * a DocumentFragment that can be used as a partial or a
	 * instance template.
	 *
	 * @param {*} template
	 *        Possible values include:
	 *        - DocumentFragment object
	 *        - Node object of type Template
	 *        - id selector: '#some-template-id'
	 *        - template string: '<div><span>{{msg}}</span></div>'
	 * @param {Boolean} shouldClone
	 * @param {Boolean} raw
	 *        inline HTML interpolation. Do not check for id
	 *        selector and keep whitespace in the string.
	 * @return {DocumentFragment|undefined}
	 */

	function parseTemplate(template, shouldClone, raw) {
	  var node, frag;

	  // if the template is already a document fragment,
	  // do nothing
	  if (isFragment(template)) {
	    trimNode(template);
	    return shouldClone ? cloneNode(template) : template;
	  }

	  if (typeof template === 'string') {
	    // id selector
	    if (!raw && template.charAt(0) === '#') {
	      // id selector can be cached too
	      frag = idSelectorCache.get(template);
	      if (!frag) {
	        node = document.getElementById(template.slice(1));
	        if (node) {
	          frag = nodeToFragment(node);
	          // save selector to cache
	          idSelectorCache.put(template, frag);
	        }
	      }
	    } else {
	      // normal string template
	      frag = stringToFragment(template, raw);
	    }
	  } else if (template.nodeType) {
	    // a direct node
	    frag = nodeToFragment(template);
	  }

	  return frag && shouldClone ? cloneNode(frag) : frag;
	}

	var template = Object.freeze({
	  cloneNode: cloneNode,
	  parseTemplate: parseTemplate
	});

	var html = {

	  bind: function bind() {
	    // a comment node means this is a binding for
	    // {{{ inline unescaped html }}}
	    if (this.el.nodeType === 8) {
	      // hold nodes
	      this.nodes = [];
	      // replace the placeholder with proper anchor
	      this.anchor = createAnchor('v-html');
	      replace(this.el, this.anchor);
	    }
	  },

	  update: function update(value) {
	    value = _toString(value);
	    if (this.nodes) {
	      this.swap(value);
	    } else {
	      this.el.innerHTML = value;
	    }
	  },

	  swap: function swap(value) {
	    // remove old nodes
	    var i = this.nodes.length;
	    while (i--) {
	      remove(this.nodes[i]);
	    }
	    // convert new value to a fragment
	    // do not attempt to retrieve from id selector
	    var frag = parseTemplate(value, true, true);
	    // save a reference to these nodes so we can remove later
	    this.nodes = toArray(frag.childNodes);
	    before(frag, this.anchor);
	  }
	};

	/**
	 * Abstraction for a partially-compiled fragment.
	 * Can optionally compile content with a child scope.
	 *
	 * @param {Function} linker
	 * @param {Vue} vm
	 * @param {DocumentFragment} frag
	 * @param {Vue} [host]
	 * @param {Object} [scope]
	 * @param {Fragment} [parentFrag]
	 */
	function Fragment(linker, vm, frag, host, scope, parentFrag) {
	  this.children = [];
	  this.childFrags = [];
	  this.vm = vm;
	  this.scope = scope;
	  this.inserted = false;
	  this.parentFrag = parentFrag;
	  if (parentFrag) {
	    parentFrag.childFrags.push(this);
	  }
	  this.unlink = linker(vm, frag, host, scope, this);
	  var single = this.single = frag.childNodes.length === 1 &&
	  // do not go single mode if the only node is an anchor
	  !frag.childNodes[0].__v_anchor;
	  if (single) {
	    this.node = frag.childNodes[0];
	    this.before = singleBefore;
	    this.remove = singleRemove;
	  } else {
	    this.node = createAnchor('fragment-start');
	    this.end = createAnchor('fragment-end');
	    this.frag = frag;
	    prepend(this.node, frag);
	    frag.appendChild(this.end);
	    this.before = multiBefore;
	    this.remove = multiRemove;
	  }
	  this.node.__v_frag = this;
	}

	/**
	 * Call attach/detach for all components contained within
	 * this fragment. Also do so recursively for all child
	 * fragments.
	 *
	 * @param {Function} hook
	 */

	Fragment.prototype.callHook = function (hook) {
	  var i, l;
	  for (i = 0, l = this.childFrags.length; i < l; i++) {
	    this.childFrags[i].callHook(hook);
	  }
	  for (i = 0, l = this.children.length; i < l; i++) {
	    hook(this.children[i]);
	  }
	};

	/**
	 * Insert fragment before target, single node version
	 *
	 * @param {Node} target
	 * @param {Boolean} withTransition
	 */

	function singleBefore(target, withTransition) {
	  this.inserted = true;
	  var method = withTransition !== false ? beforeWithTransition : before;
	  method(this.node, target, this.vm);
	  if (inDoc(this.node)) {
	    this.callHook(attach);
	  }
	}

	/**
	 * Remove fragment, single node version
	 */

	function singleRemove() {
	  this.inserted = false;
	  var shouldCallRemove = inDoc(this.node);
	  var self = this;
	  this.beforeRemove();
	  removeWithTransition(this.node, this.vm, function () {
	    if (shouldCallRemove) {
	      self.callHook(detach);
	    }
	    self.destroy();
	  });
	}

	/**
	 * Insert fragment before target, multi-nodes version
	 *
	 * @param {Node} target
	 * @param {Boolean} withTransition
	 */

	function multiBefore(target, withTransition) {
	  this.inserted = true;
	  var vm = this.vm;
	  var method = withTransition !== false ? beforeWithTransition : before;
	  mapNodeRange(this.node, this.end, function (node) {
	    method(node, target, vm);
	  });
	  if (inDoc(this.node)) {
	    this.callHook(attach);
	  }
	}

	/**
	 * Remove fragment, multi-nodes version
	 */

	function multiRemove() {
	  this.inserted = false;
	  var self = this;
	  var shouldCallRemove = inDoc(this.node);
	  this.beforeRemove();
	  removeNodeRange(this.node, this.end, this.vm, this.frag, function () {
	    if (shouldCallRemove) {
	      self.callHook(detach);
	    }
	    self.destroy();
	  });
	}

	/**
	 * Prepare the fragment for removal.
	 */

	Fragment.prototype.beforeRemove = function () {
	  var i, l;
	  for (i = 0, l = this.childFrags.length; i < l; i++) {
	    // call the same method recursively on child
	    // fragments, depth-first
	    this.childFrags[i].beforeRemove(false);
	  }
	  for (i = 0, l = this.children.length; i < l; i++) {
	    // Call destroy for all contained instances,
	    // with remove:false and defer:true.
	    // Defer is necessary because we need to
	    // keep the children to call detach hooks
	    // on them.
	    this.children[i].$destroy(false, true);
	  }
	  var dirs = this.unlink.dirs;
	  for (i = 0, l = dirs.length; i < l; i++) {
	    // disable the watchers on all the directives
	    // so that the rendered content stays the same
	    // during removal.
	    dirs[i]._watcher && dirs[i]._watcher.teardown();
	  }
	};

	/**
	 * Destroy the fragment.
	 */

	Fragment.prototype.destroy = function () {
	  if (this.parentFrag) {
	    this.parentFrag.childFrags.$remove(this);
	  }
	  this.node.__v_frag = null;
	  this.unlink();
	};

	/**
	 * Call attach hook for a Vue instance.
	 *
	 * @param {Vue} child
	 */

	function attach(child) {
	  if (!child._isAttached && inDoc(child.$el)) {
	    child._callHook('attached');
	  }
	}

	/**
	 * Call detach hook for a Vue instance.
	 *
	 * @param {Vue} child
	 */

	function detach(child) {
	  if (child._isAttached && !inDoc(child.$el)) {
	    child._callHook('detached');
	  }
	}

	var linkerCache = new Cache(5000);

	/**
	 * A factory that can be used to create instances of a
	 * fragment. Caches the compiled linker if possible.
	 *
	 * @param {Vue} vm
	 * @param {Element|String} el
	 */
	function FragmentFactory(vm, el) {
	  this.vm = vm;
	  var template;
	  var isString = typeof el === 'string';
	  if (isString || isTemplate(el) && !el.hasAttribute('v-if')) {
	    template = parseTemplate(el, true);
	  } else {
	    template = document.createDocumentFragment();
	    template.appendChild(el);
	  }
	  this.template = template;
	  // linker can be cached, but only for components
	  var linker;
	  var cid = vm.constructor.cid;
	  if (cid > 0) {
	    var cacheId = cid + (isString ? el : getOuterHTML(el));
	    linker = linkerCache.get(cacheId);
	    if (!linker) {
	      linker = compile(template, vm.$options, true);
	      linkerCache.put(cacheId, linker);
	    }
	  } else {
	    linker = compile(template, vm.$options, true);
	  }
	  this.linker = linker;
	}

	/**
	 * Create a fragment instance with given host and scope.
	 *
	 * @param {Vue} host
	 * @param {Object} scope
	 * @param {Fragment} parentFrag
	 */

	FragmentFactory.prototype.create = function (host, scope, parentFrag) {
	  var frag = cloneNode(this.template);
	  return new Fragment(this.linker, this.vm, frag, host, scope, parentFrag);
	};

	var ON = 700;
	var MODEL = 800;
	var BIND = 850;
	var TRANSITION = 1100;
	var EL = 1500;
	var COMPONENT = 1500;
	var PARTIAL = 1750;
	var IF = 2100;
	var FOR = 2200;
	var SLOT = 2300;

	var uid$3 = 0;

	var vFor = {

	  priority: FOR,
	  terminal: true,

	  params: ['track-by', 'stagger', 'enter-stagger', 'leave-stagger'],

	  bind: function bind() {
	    // support "item in/of items" syntax
	    var inMatch = this.expression.match(/(.*) (?:in|of) (.*)/);
	    if (inMatch) {
	      var itMatch = inMatch[1].match(/\((.*),(.*)\)/);
	      if (itMatch) {
	        this.iterator = itMatch[1].trim();
	        this.alias = itMatch[2].trim();
	      } else {
	        this.alias = inMatch[1].trim();
	      }
	      this.expression = inMatch[2];
	    }

	    if (!this.alias) {
	      process.env.NODE_ENV !== 'production' && warn('Invalid v-for expression "' + this.descriptor.raw + '": ' + 'alias is required.', this.vm);
	      return;
	    }

	    // uid as a cache identifier
	    this.id = '__v-for__' + ++uid$3;

	    // check if this is an option list,
	    // so that we know if we need to update the <select>'s
	    // v-model when the option list has changed.
	    // because v-model has a lower priority than v-for,
	    // the v-model is not bound here yet, so we have to
	    // retrive it in the actual updateModel() function.
	    var tag = this.el.tagName;
	    this.isOption = (tag === 'OPTION' || tag === 'OPTGROUP') && this.el.parentNode.tagName === 'SELECT';

	    // setup anchor nodes
	    this.start = createAnchor('v-for-start');
	    this.end = createAnchor('v-for-end');
	    replace(this.el, this.end);
	    before(this.start, this.end);

	    // cache
	    this.cache = Object.create(null);

	    // fragment factory
	    this.factory = new FragmentFactory(this.vm, this.el);
	  },

	  update: function update(data) {
	    this.diff(data);
	    this.updateRef();
	    this.updateModel();
	  },

	  /**
	   * Diff, based on new data and old data, determine the
	   * minimum amount of DOM manipulations needed to make the
	   * DOM reflect the new data Array.
	   *
	   * The algorithm diffs the new data Array by storing a
	   * hidden reference to an owner vm instance on previously
	   * seen data. This allows us to achieve O(n) which is
	   * better than a levenshtein distance based algorithm,
	   * which is O(m * n).
	   *
	   * @param {Array} data
	   */

	  diff: function diff(data) {
	    // check if the Array was converted from an Object
	    var item = data[0];
	    var convertedFromObject = this.fromObject = isObject(item) && hasOwn(item, '$key') && hasOwn(item, '$value');

	    var trackByKey = this.params.trackBy;
	    var oldFrags = this.frags;
	    var frags = this.frags = new Array(data.length);
	    var alias = this.alias;
	    var iterator = this.iterator;
	    var start = this.start;
	    var end = this.end;
	    var inDocument = inDoc(start);
	    var init = !oldFrags;
	    var i, l, frag, key, value, primitive;

	    // First pass, go through the new Array and fill up
	    // the new frags array. If a piece of data has a cached
	    // instance for it, we reuse it. Otherwise build a new
	    // instance.
	    for (i = 0, l = data.length; i < l; i++) {
	      item = data[i];
	      key = convertedFromObject ? item.$key : null;
	      value = convertedFromObject ? item.$value : item;
	      primitive = !isObject(value);
	      frag = !init && this.getCachedFrag(value, i, key);
	      if (frag) {
	        // reusable fragment
	        frag.reused = true;
	        // update $index
	        frag.scope.$index = i;
	        // update $key
	        if (key) {
	          frag.scope.$key = key;
	        }
	        // update iterator
	        if (iterator) {
	          frag.scope[iterator] = key !== null ? key : i;
	        }
	        // update data for track-by, object repeat &
	        // primitive values.
	        if (trackByKey || convertedFromObject || primitive) {
	          withoutConversion(function () {
	            frag.scope[alias] = value;
	          });
	        }
	      } else {
	        // new isntance
	        frag = this.create(value, alias, i, key);
	        frag.fresh = !init;
	      }
	      frags[i] = frag;
	      if (init) {
	        frag.before(end);
	      }
	    }

	    // we're done for the initial render.
	    if (init) {
	      return;
	    }

	    // Second pass, go through the old fragments and
	    // destroy those who are not reused (and remove them
	    // from cache)
	    var removalIndex = 0;
	    var totalRemoved = oldFrags.length - frags.length;
	    // when removing a large number of fragments, watcher removal
	    // turns out to be a perf bottleneck, so we batch the watcher
	    // removals into a single filter call!
	    this.vm._vForRemoving = true;
	    for (i = 0, l = oldFrags.length; i < l; i++) {
	      frag = oldFrags[i];
	      if (!frag.reused) {
	        this.deleteCachedFrag(frag);
	        this.remove(frag, removalIndex++, totalRemoved, inDocument);
	      }
	    }
	    this.vm._vForRemoving = false;
	    if (removalIndex) {
	      this.vm._watchers = this.vm._watchers.filter(function (w) {
	        return w.active;
	      });
	    }

	    // Final pass, move/insert new fragments into the
	    // right place.
	    var targetPrev, prevEl, currentPrev;
	    var insertionIndex = 0;
	    for (i = 0, l = frags.length; i < l; i++) {
	      frag = frags[i];
	      // this is the frag that we should be after
	      targetPrev = frags[i - 1];
	      prevEl = targetPrev ? targetPrev.staggerCb ? targetPrev.staggerAnchor : targetPrev.end || targetPrev.node : start;
	      if (frag.reused && !frag.staggerCb) {
	        currentPrev = findPrevFrag(frag, start, this.id);
	        if (currentPrev !== targetPrev && (!currentPrev ||
	        // optimization for moving a single item.
	        // thanks to suggestions by @livoras in #1807
	        findPrevFrag(currentPrev, start, this.id) !== targetPrev)) {
	          this.move(frag, prevEl);
	        }
	      } else {
	        // new instance, or still in stagger.
	        // insert with updated stagger index.
	        this.insert(frag, insertionIndex++, prevEl, inDocument);
	      }
	      frag.reused = frag.fresh = false;
	    }
	  },

	  /**
	   * Create a new fragment instance.
	   *
	   * @param {*} value
	   * @param {String} alias
	   * @param {Number} index
	   * @param {String} [key]
	   * @return {Fragment}
	   */

	  create: function create(value, alias, index, key) {
	    var host = this._host;
	    // create iteration scope
	    var parentScope = this._scope || this.vm;
	    var scope = Object.create(parentScope);
	    // ref holder for the scope
	    scope.$refs = Object.create(parentScope.$refs);
	    scope.$els = Object.create(parentScope.$els);
	    // make sure point $parent to parent scope
	    scope.$parent = parentScope;
	    // for two-way binding on alias
	    scope.$forContext = this;
	    // define scope properties
	    // important: define the scope alias without forced conversion
	    // so that frozen data structures remain non-reactive.
	    withoutConversion(function () {
	      defineReactive(scope, alias, value);
	    });
	    defineReactive(scope, '$index', index);
	    if (key) {
	      defineReactive(scope, '$key', key);
	    } else if (scope.$key) {
	      // avoid accidental fallback
	      def(scope, '$key', null);
	    }
	    if (this.iterator) {
	      defineReactive(scope, this.iterator, key !== null ? key : index);
	    }
	    var frag = this.factory.create(host, scope, this._frag);
	    frag.forId = this.id;
	    this.cacheFrag(value, frag, index, key);
	    return frag;
	  },

	  /**
	   * Update the v-ref on owner vm.
	   */

	  updateRef: function updateRef() {
	    var ref = this.descriptor.ref;
	    if (!ref) return;
	    var hash = (this._scope || this.vm).$refs;
	    var refs;
	    if (!this.fromObject) {
	      refs = this.frags.map(findVmFromFrag);
	    } else {
	      refs = {};
	      this.frags.forEach(function (frag) {
	        refs[frag.scope.$key] = findVmFromFrag(frag);
	      });
	    }
	    hash[ref] = refs;
	  },

	  /**
	   * For option lists, update the containing v-model on
	   * parent <select>.
	   */

	  updateModel: function updateModel() {
	    if (this.isOption) {
	      var parent = this.start.parentNode;
	      var model = parent && parent.__v_model;
	      if (model) {
	        model.forceUpdate();
	      }
	    }
	  },

	  /**
	   * Insert a fragment. Handles staggering.
	   *
	   * @param {Fragment} frag
	   * @param {Number} index
	   * @param {Node} prevEl
	   * @param {Boolean} inDocument
	   */

	  insert: function insert(frag, index, prevEl, inDocument) {
	    if (frag.staggerCb) {
	      frag.staggerCb.cancel();
	      frag.staggerCb = null;
	    }
	    var staggerAmount = this.getStagger(frag, index, null, 'enter');
	    if (inDocument && staggerAmount) {
	      // create an anchor and insert it synchronously,
	      // so that we can resolve the correct order without
	      // worrying about some elements not inserted yet
	      var anchor = frag.staggerAnchor;
	      if (!anchor) {
	        anchor = frag.staggerAnchor = createAnchor('stagger-anchor');
	        anchor.__v_frag = frag;
	      }
	      after(anchor, prevEl);
	      var op = frag.staggerCb = cancellable(function () {
	        frag.staggerCb = null;
	        frag.before(anchor);
	        remove(anchor);
	      });
	      setTimeout(op, staggerAmount);
	    } else {
	      var target = prevEl.nextSibling;
	      /* istanbul ignore if */
	      if (!target) {
	        // reset end anchor position in case the position was messed up
	        // by an external drag-n-drop library.
	        after(this.end, prevEl);
	        target = this.end;
	      }
	      frag.before(target);
	    }
	  },

	  /**
	   * Remove a fragment. Handles staggering.
	   *
	   * @param {Fragment} frag
	   * @param {Number} index
	   * @param {Number} total
	   * @param {Boolean} inDocument
	   */

	  remove: function remove(frag, index, total, inDocument) {
	    if (frag.staggerCb) {
	      frag.staggerCb.cancel();
	      frag.staggerCb = null;
	      // it's not possible for the same frag to be removed
	      // twice, so if we have a pending stagger callback,
	      // it means this frag is queued for enter but removed
	      // before its transition started. Since it is already
	      // destroyed, we can just leave it in detached state.
	      return;
	    }
	    var staggerAmount = this.getStagger(frag, index, total, 'leave');
	    if (inDocument && staggerAmount) {
	      var op = frag.staggerCb = cancellable(function () {
	        frag.staggerCb = null;
	        frag.remove();
	      });
	      setTimeout(op, staggerAmount);
	    } else {
	      frag.remove();
	    }
	  },

	  /**
	   * Move a fragment to a new position.
	   * Force no transition.
	   *
	   * @param {Fragment} frag
	   * @param {Node} prevEl
	   */

	  move: function move(frag, prevEl) {
	    // fix a common issue with Sortable:
	    // if prevEl doesn't have nextSibling, this means it's
	    // been dragged after the end anchor. Just re-position
	    // the end anchor to the end of the container.
	    /* istanbul ignore if */
	    if (!prevEl.nextSibling) {
	      this.end.parentNode.appendChild(this.end);
	    }
	    frag.before(prevEl.nextSibling, false);
	  },

	  /**
	   * Cache a fragment using track-by or the object key.
	   *
	   * @param {*} value
	   * @param {Fragment} frag
	   * @param {Number} index
	   * @param {String} [key]
	   */

	  cacheFrag: function cacheFrag(value, frag, index, key) {
	    var trackByKey = this.params.trackBy;
	    var cache = this.cache;
	    var primitive = !isObject(value);
	    var id;
	    if (key || trackByKey || primitive) {
	      id = getTrackByKey(index, key, value, trackByKey);
	      if (!cache[id]) {
	        cache[id] = frag;
	      } else if (trackByKey !== '$index') {
	        process.env.NODE_ENV !== 'production' && this.warnDuplicate(value);
	      }
	    } else {
	      id = this.id;
	      if (hasOwn(value, id)) {
	        if (value[id] === null) {
	          value[id] = frag;
	        } else {
	          process.env.NODE_ENV !== 'production' && this.warnDuplicate(value);
	        }
	      } else if (Object.isExtensible(value)) {
	        def(value, id, frag);
	      } else if (process.env.NODE_ENV !== 'production') {
	        warn('Frozen v-for objects cannot be automatically tracked, make sure to ' + 'provide a track-by key.');
	      }
	    }
	    frag.raw = value;
	  },

	  /**
	   * Get a cached fragment from the value/index/key
	   *
	   * @param {*} value
	   * @param {Number} index
	   * @param {String} key
	   * @return {Fragment}
	   */

	  getCachedFrag: function getCachedFrag(value, index, key) {
	    var trackByKey = this.params.trackBy;
	    var primitive = !isObject(value);
	    var frag;
	    if (key || trackByKey || primitive) {
	      var id = getTrackByKey(index, key, value, trackByKey);
	      frag = this.cache[id];
	    } else {
	      frag = value[this.id];
	    }
	    if (frag && (frag.reused || frag.fresh)) {
	      process.env.NODE_ENV !== 'production' && this.warnDuplicate(value);
	    }
	    return frag;
	  },

	  /**
	   * Delete a fragment from cache.
	   *
	   * @param {Fragment} frag
	   */

	  deleteCachedFrag: function deleteCachedFrag(frag) {
	    var value = frag.raw;
	    var trackByKey = this.params.trackBy;
	    var scope = frag.scope;
	    var index = scope.$index;
	    // fix #948: avoid accidentally fall through to
	    // a parent repeater which happens to have $key.
	    var key = hasOwn(scope, '$key') && scope.$key;
	    var primitive = !isObject(value);
	    if (trackByKey || key || primitive) {
	      var id = getTrackByKey(index, key, value, trackByKey);
	      this.cache[id] = null;
	    } else {
	      value[this.id] = null;
	      frag.raw = null;
	    }
	  },

	  /**
	   * Get the stagger amount for an insertion/removal.
	   *
	   * @param {Fragment} frag
	   * @param {Number} index
	   * @param {Number} total
	   * @param {String} type
	   */

	  getStagger: function getStagger(frag, index, total, type) {
	    type = type + 'Stagger';
	    var trans = frag.node.__v_trans;
	    var hooks = trans && trans.hooks;
	    var hook = hooks && (hooks[type] || hooks.stagger);
	    return hook ? hook.call(frag, index, total) : index * parseInt(this.params[type] || this.params.stagger, 10);
	  },

	  /**
	   * Pre-process the value before piping it through the
	   * filters. This is passed to and called by the watcher.
	   */

	  _preProcess: function _preProcess(value) {
	    // regardless of type, store the un-filtered raw value.
	    this.rawValue = value;
	    return value;
	  },

	  /**
	   * Post-process the value after it has been piped through
	   * the filters. This is passed to and called by the watcher.
	   *
	   * It is necessary for this to be called during the
	   * wathcer's dependency collection phase because we want
	   * the v-for to update when the source Object is mutated.
	   */

	  _postProcess: function _postProcess(value) {
	    if (isArray(value)) {
	      return value;
	    } else if (isPlainObject(value)) {
	      // convert plain object to array.
	      var keys = Object.keys(value);
	      var i = keys.length;
	      var res = new Array(i);
	      var key;
	      while (i--) {
	        key = keys[i];
	        res[i] = {
	          $key: key,
	          $value: value[key]
	        };
	      }
	      return res;
	    } else {
	      if (typeof value === 'number' && !isNaN(value)) {
	        value = range(value);
	      }
	      return value || [];
	    }
	  },

	  unbind: function unbind() {
	    if (this.descriptor.ref) {
	      (this._scope || this.vm).$refs[this.descriptor.ref] = null;
	    }
	    if (this.frags) {
	      var i = this.frags.length;
	      var frag;
	      while (i--) {
	        frag = this.frags[i];
	        this.deleteCachedFrag(frag);
	        frag.destroy();
	      }
	    }
	  }
	};

	/**
	 * Helper to find the previous element that is a fragment
	 * anchor. This is necessary because a destroyed frag's
	 * element could still be lingering in the DOM before its
	 * leaving transition finishes, but its inserted flag
	 * should have been set to false so we can skip them.
	 *
	 * If this is a block repeat, we want to make sure we only
	 * return frag that is bound to this v-for. (see #929)
	 *
	 * @param {Fragment} frag
	 * @param {Comment|Text} anchor
	 * @param {String} id
	 * @return {Fragment}
	 */

	function findPrevFrag(frag, anchor, id) {
	  var el = frag.node.previousSibling;
	  /* istanbul ignore if */
	  if (!el) return;
	  frag = el.__v_frag;
	  while ((!frag || frag.forId !== id || !frag.inserted) && el !== anchor) {
	    el = el.previousSibling;
	    /* istanbul ignore if */
	    if (!el) return;
	    frag = el.__v_frag;
	  }
	  return frag;
	}

	/**
	 * Find a vm from a fragment.
	 *
	 * @param {Fragment} frag
	 * @return {Vue|undefined}
	 */

	function findVmFromFrag(frag) {
	  var node = frag.node;
	  // handle multi-node frag
	  if (frag.end) {
	    while (!node.__vue__ && node !== frag.end && node.nextSibling) {
	      node = node.nextSibling;
	    }
	  }
	  return node.__vue__;
	}

	/**
	 * Create a range array from given number.
	 *
	 * @param {Number} n
	 * @return {Array}
	 */

	function range(n) {
	  var i = -1;
	  var ret = new Array(Math.floor(n));
	  while (++i < n) {
	    ret[i] = i;
	  }
	  return ret;
	}

	/**
	 * Get the track by key for an item.
	 *
	 * @param {Number} index
	 * @param {String} key
	 * @param {*} value
	 * @param {String} [trackByKey]
	 */

	function getTrackByKey(index, key, value, trackByKey) {
	  return trackByKey ? trackByKey === '$index' ? index : trackByKey.charAt(0).match(/\w/) ? getPath(value, trackByKey) : value[trackByKey] : key || value;
	}

	if (process.env.NODE_ENV !== 'production') {
	  vFor.warnDuplicate = function (value) {
	    warn('Duplicate value found in v-for="' + this.descriptor.raw + '": ' + JSON.stringify(value) + '. Use track-by="$index" if ' + 'you are expecting duplicate values.', this.vm);
	  };
	}

	var vIf = {

	  priority: IF,
	  terminal: true,

	  bind: function bind() {
	    var el = this.el;
	    if (!el.__vue__) {
	      // check else block
	      var next = el.nextElementSibling;
	      if (next && getAttr(next, 'v-else') !== null) {
	        remove(next);
	        this.elseEl = next;
	      }
	      // check main block
	      this.anchor = createAnchor('v-if');
	      replace(el, this.anchor);
	    } else {
	      process.env.NODE_ENV !== 'production' && warn('v-if="' + this.expression + '" cannot be ' + 'used on an instance root element.', this.vm);
	      this.invalid = true;
	    }
	  },

	  update: function update(value) {
	    if (this.invalid) return;
	    if (value) {
	      if (!this.frag) {
	        this.insert();
	      }
	    } else {
	      this.remove();
	    }
	  },

	  insert: function insert() {
	    if (this.elseFrag) {
	      this.elseFrag.remove();
	      this.elseFrag = null;
	    }
	    // lazy init factory
	    if (!this.factory) {
	      this.factory = new FragmentFactory(this.vm, this.el);
	    }
	    this.frag = this.factory.create(this._host, this._scope, this._frag);
	    this.frag.before(this.anchor);
	  },

	  remove: function remove() {
	    if (this.frag) {
	      this.frag.remove();
	      this.frag = null;
	    }
	    if (this.elseEl && !this.elseFrag) {
	      if (!this.elseFactory) {
	        this.elseFactory = new FragmentFactory(this.elseEl._context || this.vm, this.elseEl);
	      }
	      this.elseFrag = this.elseFactory.create(this._host, this._scope, this._frag);
	      this.elseFrag.before(this.anchor);
	    }
	  },

	  unbind: function unbind() {
	    if (this.frag) {
	      this.frag.destroy();
	    }
	    if (this.elseFrag) {
	      this.elseFrag.destroy();
	    }
	  }
	};

	var show = {

	  bind: function bind() {
	    // check else block
	    var next = this.el.nextElementSibling;
	    if (next && getAttr(next, 'v-else') !== null) {
	      this.elseEl = next;
	    }
	  },

	  update: function update(value) {
	    this.apply(this.el, value);
	    if (this.elseEl) {
	      this.apply(this.elseEl, !value);
	    }
	  },

	  apply: function apply(el, value) {
	    if (inDoc(el)) {
	      applyTransition(el, value ? 1 : -1, toggle, this.vm);
	    } else {
	      toggle();
	    }
	    function toggle() {
	      el.style.display = value ? '' : 'none';
	    }
	  }
	};

	var text$2 = {

	  bind: function bind() {
	    var self = this;
	    var el = this.el;
	    var isRange = el.type === 'range';
	    var lazy = this.params.lazy;
	    var number = this.params.number;
	    var debounce = this.params.debounce;

	    // handle composition events.
	    //   http://blog.evanyou.me/2014/01/03/composition-event/
	    // skip this for Android because it handles composition
	    // events quite differently. Android doesn't trigger
	    // composition events for language input methods e.g.
	    // Chinese, but instead triggers them for spelling
	    // suggestions... (see Discussion/#162)
	    var composing = false;
	    if (!isAndroid && !isRange) {
	      this.on('compositionstart', function () {
	        composing = true;
	      });
	      this.on('compositionend', function () {
	        composing = false;
	        // in IE11 the "compositionend" event fires AFTER
	        // the "input" event, so the input handler is blocked
	        // at the end... have to call it here.
	        //
	        // #1327: in lazy mode this is unecessary.
	        if (!lazy) {
	          self.listener();
	        }
	      });
	    }

	    // prevent messing with the input when user is typing,
	    // and force update on blur.
	    this.focused = false;
	    if (!isRange && !lazy) {
	      this.on('focus', function () {
	        self.focused = true;
	      });
	      this.on('blur', function () {
	        self.focused = false;
	        // do not sync value after fragment removal (#2017)
	        if (!self._frag || self._frag.inserted) {
	          self.rawListener();
	        }
	      });
	    }

	    // Now attach the main listener
	    this.listener = this.rawListener = function () {
	      if (composing || !self._bound) {
	        return;
	      }
	      var val = number || isRange ? toNumber(el.value) : el.value;
	      self.set(val);
	      // force update on next tick to avoid lock & same value
	      // also only update when user is not typing
	      nextTick(function () {
	        if (self._bound && !self.focused) {
	          self.update(self._watcher.value);
	        }
	      });
	    };

	    // apply debounce
	    if (debounce) {
	      this.listener = _debounce(this.listener, debounce);
	    }

	    // Support jQuery events, since jQuery.trigger() doesn't
	    // trigger native events in some cases and some plugins
	    // rely on $.trigger()
	    //
	    // We want to make sure if a listener is attached using
	    // jQuery, it is also removed with jQuery, that's why
	    // we do the check for each directive instance and
	    // store that check result on itself. This also allows
	    // easier test coverage control by unsetting the global
	    // jQuery variable in tests.
	    this.hasjQuery = typeof jQuery === 'function';
	    if (this.hasjQuery) {
	      var method = jQuery.fn.on ? 'on' : 'bind';
	      jQuery(el)[method]('change', this.rawListener);
	      if (!lazy) {
	        jQuery(el)[method]('input', this.listener);
	      }
	    } else {
	      this.on('change', this.rawListener);
	      if (!lazy) {
	        this.on('input', this.listener);
	      }
	    }

	    // IE9 doesn't fire input event on backspace/del/cut
	    if (!lazy && isIE9) {
	      this.on('cut', function () {
	        nextTick(self.listener);
	      });
	      this.on('keyup', function (e) {
	        if (e.keyCode === 46 || e.keyCode === 8) {
	          self.listener();
	        }
	      });
	    }

	    // set initial value if present
	    if (el.hasAttribute('value') || el.tagName === 'TEXTAREA' && el.value.trim()) {
	      this.afterBind = this.listener;
	    }
	  },

	  update: function update(value) {
	    this.el.value = _toString(value);
	  },

	  unbind: function unbind() {
	    var el = this.el;
	    if (this.hasjQuery) {
	      var method = jQuery.fn.off ? 'off' : 'unbind';
	      jQuery(el)[method]('change', this.listener);
	      jQuery(el)[method]('input', this.listener);
	    }
	  }
	};

	var radio = {

	  bind: function bind() {
	    var self = this;
	    var el = this.el;

	    this.getValue = function () {
	      // value overwrite via v-bind:value
	      if (el.hasOwnProperty('_value')) {
	        return el._value;
	      }
	      var val = el.value;
	      if (self.params.number) {
	        val = toNumber(val);
	      }
	      return val;
	    };

	    this.listener = function () {
	      self.set(self.getValue());
	    };
	    this.on('change', this.listener);

	    if (el.hasAttribute('checked')) {
	      this.afterBind = this.listener;
	    }
	  },

	  update: function update(value) {
	    this.el.checked = looseEqual(value, this.getValue());
	  }
	};

	var select = {

	  bind: function bind() {
	    var self = this;
	    var el = this.el;

	    // method to force update DOM using latest value.
	    this.forceUpdate = function () {
	      if (self._watcher) {
	        self.update(self._watcher.get());
	      }
	    };

	    // check if this is a multiple select
	    var multiple = this.multiple = el.hasAttribute('multiple');

	    // attach listener
	    this.listener = function () {
	      var value = getValue(el, multiple);
	      value = self.params.number ? isArray(value) ? value.map(toNumber) : toNumber(value) : value;
	      self.set(value);
	    };
	    this.on('change', this.listener);

	    // if has initial value, set afterBind
	    var initValue = getValue(el, multiple, true);
	    if (multiple && initValue.length || !multiple && initValue !== null) {
	      this.afterBind = this.listener;
	    }

	    // All major browsers except Firefox resets
	    // selectedIndex with value -1 to 0 when the element
	    // is appended to a new parent, therefore we have to
	    // force a DOM update whenever that happens...
	    this.vm.$on('hook:attached', this.forceUpdate);
	  },

	  update: function update(value) {
	    var el = this.el;
	    el.selectedIndex = -1;
	    var multi = this.multiple && isArray(value);
	    var options = el.options;
	    var i = options.length;
	    var op, val;
	    while (i--) {
	      op = options[i];
	      val = op.hasOwnProperty('_value') ? op._value : op.value;
	      /* eslint-disable eqeqeq */
	      op.selected = multi ? indexOf$1(value, val) > -1 : looseEqual(value, val);
	      /* eslint-enable eqeqeq */
	    }
	  },

	  unbind: function unbind() {
	    /* istanbul ignore next */
	    this.vm.$off('hook:attached', this.forceUpdate);
	  }
	};

	/**
	 * Get select value
	 *
	 * @param {SelectElement} el
	 * @param {Boolean} multi
	 * @param {Boolean} init
	 * @return {Array|*}
	 */

	function getValue(el, multi, init) {
	  var res = multi ? [] : null;
	  var op, val, selected;
	  for (var i = 0, l = el.options.length; i < l; i++) {
	    op = el.options[i];
	    selected = init ? op.hasAttribute('selected') : op.selected;
	    if (selected) {
	      val = op.hasOwnProperty('_value') ? op._value : op.value;
	      if (multi) {
	        res.push(val);
	      } else {
	        return val;
	      }
	    }
	  }
	  return res;
	}

	/**
	 * Native Array.indexOf uses strict equal, but in this
	 * case we need to match string/numbers with custom equal.
	 *
	 * @param {Array} arr
	 * @param {*} val
	 */

	function indexOf$1(arr, val) {
	  var i = arr.length;
	  while (i--) {
	    if (looseEqual(arr[i], val)) {
	      return i;
	    }
	  }
	  return -1;
	}

	var checkbox = {

	  bind: function bind() {
	    var self = this;
	    var el = this.el;

	    this.getValue = function () {
	      return el.hasOwnProperty('_value') ? el._value : self.params.number ? toNumber(el.value) : el.value;
	    };

	    function getBooleanValue() {
	      var val = el.checked;
	      if (val && el.hasOwnProperty('_trueValue')) {
	        return el._trueValue;
	      }
	      if (!val && el.hasOwnProperty('_falseValue')) {
	        return el._falseValue;
	      }
	      return val;
	    }

	    this.listener = function () {
	      var model = self._watcher.value;
	      if (isArray(model)) {
	        var val = self.getValue();
	        if (el.checked) {
	          if (indexOf(model, val) < 0) {
	            model.push(val);
	          }
	        } else {
	          model.$remove(val);
	        }
	      } else {
	        self.set(getBooleanValue());
	      }
	    };

	    this.on('change', this.listener);
	    if (el.hasAttribute('checked')) {
	      this.afterBind = this.listener;
	    }
	  },

	  update: function update(value) {
	    var el = this.el;
	    if (isArray(value)) {
	      el.checked = indexOf(value, this.getValue()) > -1;
	    } else {
	      if (el.hasOwnProperty('_trueValue')) {
	        el.checked = looseEqual(value, el._trueValue);
	      } else {
	        el.checked = !!value;
	      }
	    }
	  }
	};

	var handlers = {
	  text: text$2,
	  radio: radio,
	  select: select,
	  checkbox: checkbox
	};

	var model = {

	  priority: MODEL,
	  twoWay: true,
	  handlers: handlers,
	  params: ['lazy', 'number', 'debounce'],

	  /**
	   * Possible elements:
	   *   <select>
	   *   <textarea>
	   *   <input type="*">
	   *     - text
	   *     - checkbox
	   *     - radio
	   *     - number
	   */

	  bind: function bind() {
	    // friendly warning...
	    this.checkFilters();
	    if (this.hasRead && !this.hasWrite) {
	      process.env.NODE_ENV !== 'production' && warn('It seems you are using a read-only filter with ' + 'v-model="' + this.descriptor.raw + '". ' + 'You might want to use a two-way filter to ensure correct behavior.', this.vm);
	    }
	    var el = this.el;
	    var tag = el.tagName;
	    var handler;
	    if (tag === 'INPUT') {
	      handler = handlers[el.type] || handlers.text;
	    } else if (tag === 'SELECT') {
	      handler = handlers.select;
	    } else if (tag === 'TEXTAREA') {
	      handler = handlers.text;
	    } else {
	      process.env.NODE_ENV !== 'production' && warn('v-model does not support element type: ' + tag, this.vm);
	      return;
	    }
	    el.__v_model = this;
	    handler.bind.call(this);
	    this.update = handler.update;
	    this._unbind = handler.unbind;
	  },

	  /**
	   * Check read/write filter stats.
	   */

	  checkFilters: function checkFilters() {
	    var filters = this.filters;
	    if (!filters) return;
	    var i = filters.length;
	    while (i--) {
	      var filter = resolveAsset(this.vm.$options, 'filters', filters[i].name);
	      if (typeof filter === 'function' || filter.read) {
	        this.hasRead = true;
	      }
	      if (filter.write) {
	        this.hasWrite = true;
	      }
	    }
	  },

	  unbind: function unbind() {
	    this.el.__v_model = null;
	    this._unbind && this._unbind();
	  }
	};

	// keyCode aliases
	var keyCodes = {
	  esc: 27,
	  tab: 9,
	  enter: 13,
	  space: 32,
	  'delete': [8, 46],
	  up: 38,
	  left: 37,
	  right: 39,
	  down: 40
	};

	function keyFilter(handler, keys) {
	  var codes = keys.map(function (key) {
	    var charCode = key.charCodeAt(0);
	    if (charCode > 47 && charCode < 58) {
	      return parseInt(key, 10);
	    }
	    if (key.length === 1) {
	      charCode = key.toUpperCase().charCodeAt(0);
	      if (charCode > 64 && charCode < 91) {
	        return charCode;
	      }
	    }
	    return keyCodes[key];
	  });
	  codes = [].concat.apply([], codes);
	  return function keyHandler(e) {
	    if (codes.indexOf(e.keyCode) > -1) {
	      return handler.call(this, e);
	    }
	  };
	}

	function stopFilter(handler) {
	  return function stopHandler(e) {
	    e.stopPropagation();
	    return handler.call(this, e);
	  };
	}

	function preventFilter(handler) {
	  return function preventHandler(e) {
	    e.preventDefault();
	    return handler.call(this, e);
	  };
	}

	function selfFilter(handler) {
	  return function selfHandler(e) {
	    if (e.target === e.currentTarget) {
	      return handler.call(this, e);
	    }
	  };
	}

	var on$1 = {

	  priority: ON,
	  acceptStatement: true,
	  keyCodes: keyCodes,

	  bind: function bind() {
	    // deal with iframes
	    if (this.el.tagName === 'IFRAME' && this.arg !== 'load') {
	      var self = this;
	      this.iframeBind = function () {
	        on(self.el.contentWindow, self.arg, self.handler, self.modifiers.capture);
	      };
	      this.on('load', this.iframeBind);
	    }
	  },

	  update: function update(handler) {
	    // stub a noop for v-on with no value,
	    // e.g. @mousedown.prevent
	    if (!this.descriptor.raw) {
	      handler = function () {};
	    }

	    if (typeof handler !== 'function') {
	      process.env.NODE_ENV !== 'production' && warn('v-on:' + this.arg + '="' + this.expression + '" expects a function value, ' + 'got ' + handler, this.vm);
	      return;
	    }

	    // apply modifiers
	    if (this.modifiers.stop) {
	      handler = stopFilter(handler);
	    }
	    if (this.modifiers.prevent) {
	      handler = preventFilter(handler);
	    }
	    if (this.modifiers.self) {
	      handler = selfFilter(handler);
	    }
	    // key filter
	    var keys = Object.keys(this.modifiers).filter(function (key) {
	      return key !== 'stop' && key !== 'prevent' && key !== 'self' && key !== 'capture';
	    });
	    if (keys.length) {
	      handler = keyFilter(handler, keys);
	    }

	    this.reset();
	    this.handler = handler;

	    if (this.iframeBind) {
	      this.iframeBind();
	    } else {
	      on(this.el, this.arg, this.handler, this.modifiers.capture);
	    }
	  },

	  reset: function reset() {
	    var el = this.iframeBind ? this.el.contentWindow : this.el;
	    if (this.handler) {
	      off(el, this.arg, this.handler);
	    }
	  },

	  unbind: function unbind() {
	    this.reset();
	  }
	};

	var prefixes = ['-webkit-', '-moz-', '-ms-'];
	var camelPrefixes = ['Webkit', 'Moz', 'ms'];
	var importantRE = /!important;?$/;
	var propCache = Object.create(null);

	var testEl = null;

	var style = {

	  deep: true,

	  update: function update(value) {
	    if (typeof value === 'string') {
	      this.el.style.cssText = value;
	    } else if (isArray(value)) {
	      this.handleObject(value.reduce(extend, {}));
	    } else {
	      this.handleObject(value || {});
	    }
	  },

	  handleObject: function handleObject(value) {
	    // cache object styles so that only changed props
	    // are actually updated.
	    var cache = this.cache || (this.cache = {});
	    var name, val;
	    for (name in cache) {
	      if (!(name in value)) {
	        this.handleSingle(name, null);
	        delete cache[name];
	      }
	    }
	    for (name in value) {
	      val = value[name];
	      if (val !== cache[name]) {
	        cache[name] = val;
	        this.handleSingle(name, val);
	      }
	    }
	  },

	  handleSingle: function handleSingle(prop, value) {
	    prop = normalize(prop);
	    if (!prop) return; // unsupported prop
	    // cast possible numbers/booleans into strings
	    if (value != null) value += '';
	    if (value) {
	      var isImportant = importantRE.test(value) ? 'important' : '';
	      if (isImportant) {
	        /* istanbul ignore if */
	        if (process.env.NODE_ENV !== 'production') {
	          warn('It\'s probably a bad idea to use !important with inline rules. ' + 'This feature will be deprecated in a future version of Vue.');
	        }
	        value = value.replace(importantRE, '').trim();
	        this.el.style.setProperty(prop.kebab, value, isImportant);
	      } else {
	        this.el.style[prop.camel] = value;
	      }
	    } else {
	      this.el.style[prop.camel] = '';
	    }
	  }

	};

	/**
	 * Normalize a CSS property name.
	 * - cache result
	 * - auto prefix
	 * - camelCase -> dash-case
	 *
	 * @param {String} prop
	 * @return {String}
	 */

	function normalize(prop) {
	  if (propCache[prop]) {
	    return propCache[prop];
	  }
	  var res = prefix(prop);
	  propCache[prop] = propCache[res] = res;
	  return res;
	}

	/**
	 * Auto detect the appropriate prefix for a CSS property.
	 * https://gist.github.com/paulirish/523692
	 *
	 * @param {String} prop
	 * @return {String}
	 */

	function prefix(prop) {
	  prop = hyphenate(prop);
	  var camel = camelize(prop);
	  var upper = camel.charAt(0).toUpperCase() + camel.slice(1);
	  if (!testEl) {
	    testEl = document.createElement('div');
	  }
	  var i = prefixes.length;
	  var prefixed;
	  if (camel !== 'filter' && camel in testEl.style) {
	    return {
	      kebab: prop,
	      camel: camel
	    };
	  }
	  while (i--) {
	    prefixed = camelPrefixes[i] + upper;
	    if (prefixed in testEl.style) {
	      return {
	        kebab: prefixes[i] + prop,
	        camel: prefixed
	      };
	    }
	  }
	}

	// xlink
	var xlinkNS = 'http://www.w3.org/1999/xlink';
	var xlinkRE = /^xlink:/;

	// check for attributes that prohibit interpolations
	var disallowedInterpAttrRE = /^v-|^:|^@|^(?:is|transition|transition-mode|debounce|track-by|stagger|enter-stagger|leave-stagger)$/;
	// these attributes should also set their corresponding properties
	// because they only affect the initial state of the element
	var attrWithPropsRE = /^(?:value|checked|selected|muted)$/;
	// these attributes expect enumrated values of "true" or "false"
	// but are not boolean attributes
	var enumeratedAttrRE = /^(?:draggable|contenteditable|spellcheck)$/;

	// these attributes should set a hidden property for
	// binding v-model to object values
	var modelProps = {
	  value: '_value',
	  'true-value': '_trueValue',
	  'false-value': '_falseValue'
	};

	var bind$1 = {

	  priority: BIND,

	  bind: function bind() {
	    var attr = this.arg;
	    var tag = this.el.tagName;
	    // should be deep watch on object mode
	    if (!attr) {
	      this.deep = true;
	    }
	    // handle interpolation bindings
	    var descriptor = this.descriptor;
	    var tokens = descriptor.interp;
	    if (tokens) {
	      // handle interpolations with one-time tokens
	      if (descriptor.hasOneTime) {
	        this.expression = tokensToExp(tokens, this._scope || this.vm);
	      }

	      // only allow binding on native attributes
	      if (disallowedInterpAttrRE.test(attr) || attr === 'name' && (tag === 'PARTIAL' || tag === 'SLOT')) {
	        process.env.NODE_ENV !== 'production' && warn(attr + '="' + descriptor.raw + '": ' + 'attribute interpolation is not allowed in Vue.js ' + 'directives and special attributes.', this.vm);
	        this.el.removeAttribute(attr);
	        this.invalid = true;
	      }

	      /* istanbul ignore if */
	      if (process.env.NODE_ENV !== 'production') {
	        var raw = attr + '="' + descriptor.raw + '": ';
	        // warn src
	        if (attr === 'src') {
	          warn(raw + 'interpolation in "src" attribute will cause ' + 'a 404 request. Use v-bind:src instead.', this.vm);
	        }

	        // warn style
	        if (attr === 'style') {
	          warn(raw + 'interpolation in "style" attribute will cause ' + 'the attribute to be discarded in Internet Explorer. ' + 'Use v-bind:style instead.', this.vm);
	        }
	      }
	    }
	  },

	  update: function update(value) {
	    if (this.invalid) {
	      return;
	    }
	    var attr = this.arg;
	    if (this.arg) {
	      this.handleSingle(attr, value);
	    } else {
	      this.handleObject(value || {});
	    }
	  },

	  // share object handler with v-bind:class
	  handleObject: style.handleObject,

	  handleSingle: function handleSingle(attr, value) {
	    var el = this.el;
	    var interp = this.descriptor.interp;
	    if (this.modifiers.camel) {
	      attr = camelize(attr);
	    }
	    if (!interp && attrWithPropsRE.test(attr) && attr in el) {
	      var attrValue = attr === 'value' ? value == null // IE9 will set input.value to "null" for null...
	      ? '' : value : value;

	      if (el[attr] !== attrValue) {
	        el[attr] = attrValue;
	      }
	    }
	    // set model props
	    var modelProp = modelProps[attr];
	    if (!interp && modelProp) {
	      el[modelProp] = value;
	      // update v-model if present
	      var model = el.__v_model;
	      if (model) {
	        model.listener();
	      }
	    }
	    // do not set value attribute for textarea
	    if (attr === 'value' && el.tagName === 'TEXTAREA') {
	      el.removeAttribute(attr);
	      return;
	    }
	    // update attribute
	    if (enumeratedAttrRE.test(attr)) {
	      el.setAttribute(attr, value ? 'true' : 'false');
	    } else if (value != null && value !== false) {
	      if (attr === 'class') {
	        // handle edge case #1960:
	        // class interpolation should not overwrite Vue transition class
	        if (el.__v_trans) {
	          value += ' ' + el.__v_trans.id + '-transition';
	        }
	        setClass(el, value);
	      } else if (xlinkRE.test(attr)) {
	        el.setAttributeNS(xlinkNS, attr, value === true ? '' : value);
	      } else {
	        el.setAttribute(attr, value === true ? '' : value);
	      }
	    } else {
	      el.removeAttribute(attr);
	    }
	  }
	};

	var el = {

	  priority: EL,

	  bind: function bind() {
	    /* istanbul ignore if */
	    if (!this.arg) {
	      return;
	    }
	    var id = this.id = camelize(this.arg);
	    var refs = (this._scope || this.vm).$els;
	    if (hasOwn(refs, id)) {
	      refs[id] = this.el;
	    } else {
	      defineReactive(refs, id, this.el);
	    }
	  },

	  unbind: function unbind() {
	    var refs = (this._scope || this.vm).$els;
	    if (refs[this.id] === this.el) {
	      refs[this.id] = null;
	    }
	  }
	};

	var ref = {
	  bind: function bind() {
	    process.env.NODE_ENV !== 'production' && warn('v-ref:' + this.arg + ' must be used on a child ' + 'component. Found on <' + this.el.tagName.toLowerCase() + '>.', this.vm);
	  }
	};

	var cloak = {
	  bind: function bind() {
	    var el = this.el;
	    this.vm.$once('pre-hook:compiled', function () {
	      el.removeAttribute('v-cloak');
	    });
	  }
	};

	// must export plain object
	var directives = {
	  text: text$1,
	  html: html,
	  'for': vFor,
	  'if': vIf,
	  show: show,
	  model: model,
	  on: on$1,
	  bind: bind$1,
	  el: el,
	  ref: ref,
	  cloak: cloak
	};

	var vClass = {

	  deep: true,

	  update: function update(value) {
	    if (!value) {
	      this.cleanup();
	    } else if (typeof value === 'string') {
	      this.setClass(value.trim().split(/\s+/));
	    } else {
	      this.setClass(normalize$1(value));
	    }
	  },

	  setClass: function setClass(value) {
	    this.cleanup(value);
	    for (var i = 0, l = value.length; i < l; i++) {
	      var val = value[i];
	      if (val) {
	        apply(this.el, val, addClass);
	      }
	    }
	    this.prevKeys = value;
	  },

	  cleanup: function cleanup(value) {
	    var prevKeys = this.prevKeys;
	    if (!prevKeys) return;
	    var i = prevKeys.length;
	    while (i--) {
	      var key = prevKeys[i];
	      if (!value || value.indexOf(key) < 0) {
	        apply(this.el, key, removeClass);
	      }
	    }
	  }
	};

	/**
	 * Normalize objects and arrays (potentially containing objects)
	 * into array of strings.
	 *
	 * @param {Object|Array<String|Object>} value
	 * @return {Array<String>}
	 */

	function normalize$1(value) {
	  var res = [];
	  if (isArray(value)) {
	    for (var i = 0, l = value.length; i < l; i++) {
	      var _key = value[i];
	      if (_key) {
	        if (typeof _key === 'string') {
	          res.push(_key);
	        } else {
	          for (var k in _key) {
	            if (_key[k]) res.push(k);
	          }
	        }
	      }
	    }
	  } else if (isObject(value)) {
	    for (var key in value) {
	      if (value[key]) res.push(key);
	    }
	  }
	  return res;
	}

	/**
	 * Add or remove a class/classes on an element
	 *
	 * @param {Element} el
	 * @param {String} key The class name. This may or may not
	 *                     contain a space character, in such a
	 *                     case we'll deal with multiple class
	 *                     names at once.
	 * @param {Function} fn
	 */

	function apply(el, key, fn) {
	  key = key.trim();
	  if (key.indexOf(' ') === -1) {
	    fn(el, key);
	    return;
	  }
	  // The key contains one or more space characters.
	  // Since a class name doesn't accept such characters, we
	  // treat it as multiple classes.
	  var keys = key.split(/\s+/);
	  for (var i = 0, l = keys.length; i < l; i++) {
	    fn(el, keys[i]);
	  }
	}

	var component = {

	  priority: COMPONENT,

	  params: ['keep-alive', 'transition-mode', 'inline-template'],

	  /**
	   * Setup. Two possible usages:
	   *
	   * - static:
	   *   <comp> or <div v-component="comp">
	   *
	   * - dynamic:
	   *   <component :is="view">
	   */

	  bind: function bind() {
	    if (!this.el.__vue__) {
	      // keep-alive cache
	      this.keepAlive = this.params.keepAlive;
	      if (this.keepAlive) {
	        this.cache = {};
	      }
	      // check inline-template
	      if (this.params.inlineTemplate) {
	        // extract inline template as a DocumentFragment
	        this.inlineTemplate = extractContent(this.el, true);
	      }
	      // component resolution related state
	      this.pendingComponentCb = this.Component = null;
	      // transition related state
	      this.pendingRemovals = 0;
	      this.pendingRemovalCb = null;
	      // create a ref anchor
	      this.anchor = createAnchor('v-component');
	      replace(this.el, this.anchor);
	      // remove is attribute.
	      // this is removed during compilation, but because compilation is
	      // cached, when the component is used elsewhere this attribute
	      // will remain at link time.
	      this.el.removeAttribute('is');
	      this.el.removeAttribute(':is');
	      // remove ref, same as above
	      if (this.descriptor.ref) {
	        this.el.removeAttribute('v-ref:' + hyphenate(this.descriptor.ref));
	      }
	      // if static, build right now.
	      if (this.literal) {
	        this.setComponent(this.expression);
	      }
	    } else {
	      process.env.NODE_ENV !== 'production' && warn('cannot mount component "' + this.expression + '" ' + 'on already mounted element: ' + this.el);
	    }
	  },

	  /**
	   * Public update, called by the watcher in the dynamic
	   * literal scenario, e.g. <component :is="view">
	   */

	  update: function update(value) {
	    if (!this.literal) {
	      this.setComponent(value);
	    }
	  },

	  /**
	   * Switch dynamic components. May resolve the component
	   * asynchronously, and perform transition based on
	   * specified transition mode. Accepts a few additional
	   * arguments specifically for vue-router.
	   *
	   * The callback is called when the full transition is
	   * finished.
	   *
	   * @param {String} value
	   * @param {Function} [cb]
	   */

	  setComponent: function setComponent(value, cb) {
	    this.invalidatePending();
	    if (!value) {
	      // just remove current
	      this.unbuild(true);
	      this.remove(this.childVM, cb);
	      this.childVM = null;
	    } else {
	      var self = this;
	      this.resolveComponent(value, function () {
	        self.mountComponent(cb);
	      });
	    }
	  },

	  /**
	   * Resolve the component constructor to use when creating
	   * the child vm.
	   *
	   * @param {String|Function} value
	   * @param {Function} cb
	   */

	  resolveComponent: function resolveComponent(value, cb) {
	    var self = this;
	    this.pendingComponentCb = cancellable(function (Component) {
	      self.ComponentName = Component.options.name || (typeof value === 'string' ? value : null);
	      self.Component = Component;
	      cb();
	    });
	    this.vm._resolveComponent(value, this.pendingComponentCb);
	  },

	  /**
	   * Create a new instance using the current constructor and
	   * replace the existing instance. This method doesn't care
	   * whether the new component and the old one are actually
	   * the same.
	   *
	   * @param {Function} [cb]
	   */

	  mountComponent: function mountComponent(cb) {
	    // actual mount
	    this.unbuild(true);
	    var self = this;
	    var activateHooks = this.Component.options.activate;
	    var cached = this.getCached();
	    var newComponent = this.build();
	    if (activateHooks && !cached) {
	      this.waitingFor = newComponent;
	      callActivateHooks(activateHooks, newComponent, function () {
	        if (self.waitingFor !== newComponent) {
	          return;
	        }
	        self.waitingFor = null;
	        self.transition(newComponent, cb);
	      });
	    } else {
	      // update ref for kept-alive component
	      if (cached) {
	        newComponent._updateRef();
	      }
	      this.transition(newComponent, cb);
	    }
	  },

	  /**
	   * When the component changes or unbinds before an async
	   * constructor is resolved, we need to invalidate its
	   * pending callback.
	   */

	  invalidatePending: function invalidatePending() {
	    if (this.pendingComponentCb) {
	      this.pendingComponentCb.cancel();
	      this.pendingComponentCb = null;
	    }
	  },

	  /**
	   * Instantiate/insert a new child vm.
	   * If keep alive and has cached instance, insert that
	   * instance; otherwise build a new one and cache it.
	   *
	   * @param {Object} [extraOptions]
	   * @return {Vue} - the created instance
	   */

	  build: function build(extraOptions) {
	    var cached = this.getCached();
	    if (cached) {
	      return cached;
	    }
	    if (this.Component) {
	      // default options
	      var options = {
	        name: this.ComponentName,
	        el: cloneNode(this.el),
	        template: this.inlineTemplate,
	        // make sure to add the child with correct parent
	        // if this is a transcluded component, its parent
	        // should be the transclusion host.
	        parent: this._host || this.vm,
	        // if no inline-template, then the compiled
	        // linker can be cached for better performance.
	        _linkerCachable: !this.inlineTemplate,
	        _ref: this.descriptor.ref,
	        _asComponent: true,
	        _isRouterView: this._isRouterView,
	        // if this is a transcluded component, context
	        // will be the common parent vm of this instance
	        // and its host.
	        _context: this.vm,
	        // if this is inside an inline v-for, the scope
	        // will be the intermediate scope created for this
	        // repeat fragment. this is used for linking props
	        // and container directives.
	        _scope: this._scope,
	        // pass in the owner fragment of this component.
	        // this is necessary so that the fragment can keep
	        // track of its contained components in order to
	        // call attach/detach hooks for them.
	        _frag: this._frag
	      };
	      // extra options
	      // in 1.0.0 this is used by vue-router only
	      /* istanbul ignore if */
	      if (extraOptions) {
	        extend(options, extraOptions);
	      }
	      var child = new this.Component(options);
	      if (this.keepAlive) {
	        this.cache[this.Component.cid] = child;
	      }
	      /* istanbul ignore if */
	      if (process.env.NODE_ENV !== 'production' && this.el.hasAttribute('transition') && child._isFragment) {
	        warn('Transitions will not work on a fragment instance. ' + 'Template: ' + child.$options.template, child);
	      }
	      return child;
	    }
	  },

	  /**
	   * Try to get a cached instance of the current component.
	   *
	   * @return {Vue|undefined}
	   */

	  getCached: function getCached() {
	    return this.keepAlive && this.cache[this.Component.cid];
	  },

	  /**
	   * Teardown the current child, but defers cleanup so
	   * that we can separate the destroy and removal steps.
	   *
	   * @param {Boolean} defer
	   */

	  unbuild: function unbuild(defer) {
	    if (this.waitingFor) {
	      if (!this.keepAlive) {
	        this.waitingFor.$destroy();
	      }
	      this.waitingFor = null;
	    }
	    var child = this.childVM;
	    if (!child || this.keepAlive) {
	      if (child) {
	        // remove ref
	        child._inactive = true;
	        child._updateRef(true);
	      }
	      return;
	    }
	    // the sole purpose of `deferCleanup` is so that we can
	    // "deactivate" the vm right now and perform DOM removal
	    // later.
	    child.$destroy(false, defer);
	  },

	  /**
	   * Remove current destroyed child and manually do
	   * the cleanup after removal.
	   *
	   * @param {Function} cb
	   */

	  remove: function remove(child, cb) {
	    var keepAlive = this.keepAlive;
	    if (child) {
	      // we may have a component switch when a previous
	      // component is still being transitioned out.
	      // we want to trigger only one lastest insertion cb
	      // when the existing transition finishes. (#1119)
	      this.pendingRemovals++;
	      this.pendingRemovalCb = cb;
	      var self = this;
	      child.$remove(function () {
	        self.pendingRemovals--;
	        if (!keepAlive) child._cleanup();
	        if (!self.pendingRemovals && self.pendingRemovalCb) {
	          self.pendingRemovalCb();
	          self.pendingRemovalCb = null;
	        }
	      });
	    } else if (cb) {
	      cb();
	    }
	  },

	  /**
	   * Actually swap the components, depending on the
	   * transition mode. Defaults to simultaneous.
	   *
	   * @param {Vue} target
	   * @param {Function} [cb]
	   */

	  transition: function transition(target, cb) {
	    var self = this;
	    var current = this.childVM;
	    // for devtool inspection
	    if (current) current._inactive = true;
	    target._inactive = false;
	    this.childVM = target;
	    switch (self.params.transitionMode) {
	      case 'in-out':
	        target.$before(self.anchor, function () {
	          self.remove(current, cb);
	        });
	        break;
	      case 'out-in':
	        self.remove(current, function () {
	          target.$before(self.anchor, cb);
	        });
	        break;
	      default:
	        self.remove(current);
	        target.$before(self.anchor, cb);
	    }
	  },

	  /**
	   * Unbind.
	   */

	  unbind: function unbind() {
	    this.invalidatePending();
	    // Do not defer cleanup when unbinding
	    this.unbuild();
	    // destroy all keep-alive cached instances
	    if (this.cache) {
	      for (var key in this.cache) {
	        this.cache[key].$destroy();
	      }
	      this.cache = null;
	    }
	  }
	};

	/**
	 * Call activate hooks in order (asynchronous)
	 *
	 * @param {Array} hooks
	 * @param {Vue} vm
	 * @param {Function} cb
	 */

	function callActivateHooks(hooks, vm, cb) {
	  var total = hooks.length;
	  var called = 0;
	  hooks[0].call(vm, next);
	  function next() {
	    if (++called >= total) {
	      cb();
	    } else {
	      hooks[called].call(vm, next);
	    }
	  }
	}

	var propBindingModes = config._propBindingModes;
	var empty = {};

	// regexes
	var identRE$1 = /^[$_a-zA-Z]+[\w$]*$/;
	var settablePathRE = /^[A-Za-z_$][\w$]*(\.[A-Za-z_$][\w$]*|\[[^\[\]]+\])*$/;

	/**
	 * Compile props on a root element and return
	 * a props link function.
	 *
	 * @param {Element|DocumentFragment} el
	 * @param {Array} propOptions
	 * @param {Vue} vm
	 * @return {Function} propsLinkFn
	 */

	function compileProps(el, propOptions, vm) {
	  var props = [];
	  var names = Object.keys(propOptions);
	  var i = names.length;
	  var options, name, attr, value, path, parsed, prop;
	  while (i--) {
	    name = names[i];
	    options = propOptions[name] || empty;

	    if (process.env.NODE_ENV !== 'production' && name === '$data') {
	      warn('Do not use $data as prop.', vm);
	      continue;
	    }

	    // props could contain dashes, which will be
	    // interpreted as minus calculations by the parser
	    // so we need to camelize the path here
	    path = camelize(name);
	    if (!identRE$1.test(path)) {
	      process.env.NODE_ENV !== 'production' && warn('Invalid prop key: "' + name + '". Prop keys ' + 'must be valid identifiers.', vm);
	      continue;
	    }

	    prop = {
	      name: name,
	      path: path,
	      options: options,
	      mode: propBindingModes.ONE_WAY,
	      raw: null
	    };

	    attr = hyphenate(name);
	    // first check dynamic version
	    if ((value = getBindAttr(el, attr)) === null) {
	      if ((value = getBindAttr(el, attr + '.sync')) !== null) {
	        prop.mode = propBindingModes.TWO_WAY;
	      } else if ((value = getBindAttr(el, attr + '.once')) !== null) {
	        prop.mode = propBindingModes.ONE_TIME;
	      }
	    }
	    if (value !== null) {
	      // has dynamic binding!
	      prop.raw = value;
	      parsed = parseDirective(value);
	      value = parsed.expression;
	      prop.filters = parsed.filters;
	      // check binding type
	      if (isLiteral(value) && !parsed.filters) {
	        // for expressions containing literal numbers and
	        // booleans, there's no need to setup a prop binding,
	        // so we can optimize them as a one-time set.
	        prop.optimizedLiteral = true;
	      } else {
	        prop.dynamic = true;
	        // check non-settable path for two-way bindings
	        if (process.env.NODE_ENV !== 'production' && prop.mode === propBindingModes.TWO_WAY && !settablePathRE.test(value)) {
	          prop.mode = propBindingModes.ONE_WAY;
	          warn('Cannot bind two-way prop with non-settable ' + 'parent path: ' + value, vm);
	        }
	      }
	      prop.parentPath = value;

	      // warn required two-way
	      if (process.env.NODE_ENV !== 'production' && options.twoWay && prop.mode !== propBindingModes.TWO_WAY) {
	        warn('Prop "' + name + '" expects a two-way binding type.', vm);
	      }
	    } else if ((value = getAttr(el, attr)) !== null) {
	      // has literal binding!
	      prop.raw = value;
	    } else if (process.env.NODE_ENV !== 'production') {
	      // check possible camelCase prop usage
	      var lowerCaseName = path.toLowerCase();
	      value = /[A-Z\-]/.test(name) && (el.getAttribute(lowerCaseName) || el.getAttribute(':' + lowerCaseName) || el.getAttribute('v-bind:' + lowerCaseName) || el.getAttribute(':' + lowerCaseName + '.once') || el.getAttribute('v-bind:' + lowerCaseName + '.once') || el.getAttribute(':' + lowerCaseName + '.sync') || el.getAttribute('v-bind:' + lowerCaseName + '.sync'));
	      if (value) {
	        warn('Possible usage error for prop `' + lowerCaseName + '` - ' + 'did you mean `' + attr + '`? HTML is case-insensitive, remember to use ' + 'kebab-case for props in templates.', vm);
	      } else if (options.required) {
	        // warn missing required
	        warn('Missing required prop: ' + name, vm);
	      }
	    }
	    // push prop
	    props.push(prop);
	  }
	  return makePropsLinkFn(props);
	}

	/**
	 * Build a function that applies props to a vm.
	 *
	 * @param {Array} props
	 * @return {Function} propsLinkFn
	 */

	function makePropsLinkFn(props) {
	  return function propsLinkFn(vm, scope) {
	    // store resolved props info
	    vm._props = {};
	    var inlineProps = vm.$options.propsData;
	    var i = props.length;
	    var prop, path, options, value, raw;
	    while (i--) {
	      prop = props[i];
	      raw = prop.raw;
	      path = prop.path;
	      options = prop.options;
	      vm._props[path] = prop;
	      if (inlineProps && hasOwn(inlineProps, path)) {
	        initProp(vm, prop, inlineProps[path]);
	      }if (raw === null) {
	        // initialize absent prop
	        initProp(vm, prop, undefined);
	      } else if (prop.dynamic) {
	        // dynamic prop
	        if (prop.mode === propBindingModes.ONE_TIME) {
	          // one time binding
	          value = (scope || vm._context || vm).$get(prop.parentPath);
	          initProp(vm, prop, value);
	        } else {
	          if (vm._context) {
	            // dynamic binding
	            vm._bindDir({
	              name: 'prop',
	              def: propDef,
	              prop: prop
	            }, null, null, scope); // el, host, scope
	          } else {
	              // root instance
	              initProp(vm, prop, vm.$get(prop.parentPath));
	            }
	        }
	      } else if (prop.optimizedLiteral) {
	        // optimized literal, cast it and just set once
	        var stripped = stripQuotes(raw);
	        value = stripped === raw ? toBoolean(toNumber(raw)) : stripped;
	        initProp(vm, prop, value);
	      } else {
	        // string literal, but we need to cater for
	        // Boolean props with no value, or with same
	        // literal value (e.g. disabled="disabled")
	        // see https://github.com/vuejs/vue-loader/issues/182
	        value = options.type === Boolean && (raw === '' || raw === hyphenate(prop.name)) ? true : raw;
	        initProp(vm, prop, value);
	      }
	    }
	  };
	}

	/**
	 * Process a prop with a rawValue, applying necessary coersions,
	 * default values & assertions and call the given callback with
	 * processed value.
	 *
	 * @param {Vue} vm
	 * @param {Object} prop
	 * @param {*} rawValue
	 * @param {Function} fn
	 */

	function processPropValue(vm, prop, rawValue, fn) {
	  var isSimple = prop.dynamic && isSimplePath(prop.parentPath);
	  var value = rawValue;
	  if (value === undefined) {
	    value = getPropDefaultValue(vm, prop);
	  }
	  value = coerceProp(prop, value);
	  var coerced = value !== rawValue;
	  if (!assertProp(prop, value, vm)) {
	    value = undefined;
	  }
	  if (isSimple && !coerced) {
	    withoutConversion(function () {
	      fn(value);
	    });
	  } else {
	    fn(value);
	  }
	}

	/**
	 * Set a prop's initial value on a vm and its data object.
	 *
	 * @param {Vue} vm
	 * @param {Object} prop
	 * @param {*} value
	 */

	function initProp(vm, prop, value) {
	  processPropValue(vm, prop, value, function (value) {
	    defineReactive(vm, prop.path, value);
	  });
	}

	/**
	 * Update a prop's value on a vm.
	 *
	 * @param {Vue} vm
	 * @param {Object} prop
	 * @param {*} value
	 */

	function updateProp(vm, prop, value) {
	  processPropValue(vm, prop, value, function (value) {
	    vm[prop.path] = value;
	  });
	}

	/**
	 * Get the default value of a prop.
	 *
	 * @param {Vue} vm
	 * @param {Object} prop
	 * @return {*}
	 */

	function getPropDefaultValue(vm, prop) {
	  // no default, return undefined
	  var options = prop.options;
	  if (!hasOwn(options, 'default')) {
	    // absent boolean value defaults to false
	    return options.type === Boolean ? false : undefined;
	  }
	  var def = options['default'];
	  // warn against non-factory defaults for Object & Array
	  if (isObject(def)) {
	    process.env.NODE_ENV !== 'production' && warn('Invalid default value for prop "' + prop.name + '": ' + 'Props with type Object/Array must use a factory function ' + 'to return the default value.', vm);
	  }
	  // call factory function for non-Function types
	  return typeof def === 'function' && options.type !== Function ? def.call(vm) : def;
	}

	/**
	 * Assert whether a prop is valid.
	 *
	 * @param {Object} prop
	 * @param {*} value
	 * @param {Vue} vm
	 */

	function assertProp(prop, value, vm) {
	  if (!prop.options.required && ( // non-required
	  prop.raw === null || // abscent
	  value == null) // null or undefined
	  ) {
	      return true;
	    }
	  var options = prop.options;
	  var type = options.type;
	  var valid = !type;
	  var expectedTypes = [];
	  if (type) {
	    if (!isArray(type)) {
	      type = [type];
	    }
	    for (var i = 0; i < type.length && !valid; i++) {
	      var assertedType = assertType(value, type[i]);
	      expectedTypes.push(assertedType.expectedType);
	      valid = assertedType.valid;
	    }
	  }
	  if (!valid) {
	    if (process.env.NODE_ENV !== 'production') {
	      warn('Invalid prop: type check failed for prop "' + prop.name + '".' + ' Expected ' + expectedTypes.map(formatType).join(', ') + ', got ' + formatValue(value) + '.', vm);
	    }
	    return false;
	  }
	  var validator = options.validator;
	  if (validator) {
	    if (!validator(value)) {
	      process.env.NODE_ENV !== 'production' && warn('Invalid prop: custom validator check failed for prop "' + prop.name + '".', vm);
	      return false;
	    }
	  }
	  return true;
	}

	/**
	 * Force parsing value with coerce option.
	 *
	 * @param {*} value
	 * @param {Object} options
	 * @return {*}
	 */

	function coerceProp(prop, value) {
	  var coerce = prop.options.coerce;
	  if (!coerce) {
	    return value;
	  }
	  // coerce is a function
	  return coerce(value);
	}

	/**
	 * Assert the type of a value
	 *
	 * @param {*} value
	 * @param {Function} type
	 * @return {Object}
	 */

	function assertType(value, type) {
	  var valid;
	  var expectedType;
	  if (type === String) {
	    expectedType = 'string';
	    valid = typeof value === expectedType;
	  } else if (type === Number) {
	    expectedType = 'number';
	    valid = typeof value === expectedType;
	  } else if (type === Boolean) {
	    expectedType = 'boolean';
	    valid = typeof value === expectedType;
	  } else if (type === Function) {
	    expectedType = 'function';
	    valid = typeof value === expectedType;
	  } else if (type === Object) {
	    expectedType = 'object';
	    valid = isPlainObject(value);
	  } else if (type === Array) {
	    expectedType = 'array';
	    valid = isArray(value);
	  } else {
	    valid = value instanceof type;
	  }
	  return {
	    valid: valid,
	    expectedType: expectedType
	  };
	}

	/**
	 * Format type for output
	 *
	 * @param {String} type
	 * @return {String}
	 */

	function formatType(type) {
	  return type ? type.charAt(0).toUpperCase() + type.slice(1) : 'custom type';
	}

	/**
	 * Format value
	 *
	 * @param {*} value
	 * @return {String}
	 */

	function formatValue(val) {
	  return Object.prototype.toString.call(val).slice(8, -1);
	}

	var bindingModes = config._propBindingModes;

	var propDef = {

	  bind: function bind() {
	    var child = this.vm;
	    var parent = child._context;
	    // passed in from compiler directly
	    var prop = this.descriptor.prop;
	    var childKey = prop.path;
	    var parentKey = prop.parentPath;
	    var twoWay = prop.mode === bindingModes.TWO_WAY;

	    var parentWatcher = this.parentWatcher = new Watcher(parent, parentKey, function (val) {
	      updateProp(child, prop, val);
	    }, {
	      twoWay: twoWay,
	      filters: prop.filters,
	      // important: props need to be observed on the
	      // v-for scope if present
	      scope: this._scope
	    });

	    // set the child initial value.
	    initProp(child, prop, parentWatcher.value);

	    // setup two-way binding
	    if (twoWay) {
	      // important: defer the child watcher creation until
	      // the created hook (after data observation)
	      var self = this;
	      child.$once('pre-hook:created', function () {
	        self.childWatcher = new Watcher(child, childKey, function (val) {
	          parentWatcher.set(val);
	        }, {
	          // ensure sync upward before parent sync down.
	          // this is necessary in cases e.g. the child
	          // mutates a prop array, then replaces it. (#1683)
	          sync: true
	        });
	      });
	    }
	  },

	  unbind: function unbind() {
	    this.parentWatcher.teardown();
	    if (this.childWatcher) {
	      this.childWatcher.teardown();
	    }
	  }
	};

	var queue$1 = [];
	var queued = false;

	/**
	 * Push a job into the queue.
	 *
	 * @param {Function} job
	 */

	function pushJob(job) {
	  queue$1.push(job);
	  if (!queued) {
	    queued = true;
	    nextTick(flush);
	  }
	}

	/**
	 * Flush the queue, and do one forced reflow before
	 * triggering transitions.
	 */

	function flush() {
	  // Force layout
	  var f = document.documentElement.offsetHeight;
	  for (var i = 0; i < queue$1.length; i++) {
	    queue$1[i]();
	  }
	  queue$1 = [];
	  queued = false;
	  // dummy return, so js linters don't complain about
	  // unused variable f
	  return f;
	}

	var TYPE_TRANSITION = 'transition';
	var TYPE_ANIMATION = 'animation';
	var transDurationProp = transitionProp + 'Duration';
	var animDurationProp = animationProp + 'Duration';

	/**
	 * If a just-entered element is applied the
	 * leave class while its enter transition hasn't started yet,
	 * and the transitioned property has the same value for both
	 * enter/leave, then the leave transition will be skipped and
	 * the transitionend event never fires. This function ensures
	 * its callback to be called after a transition has started
	 * by waiting for double raf.
	 *
	 * It falls back to setTimeout on devices that support CSS
	 * transitions but not raf (e.g. Android 4.2 browser) - since
	 * these environments are usually slow, we are giving it a
	 * relatively large timeout.
	 */

	var raf = inBrowser && window.requestAnimationFrame;
	var waitForTransitionStart = raf
	/* istanbul ignore next */
	? function (fn) {
	  raf(function () {
	    raf(fn);
	  });
	} : function (fn) {
	  setTimeout(fn, 50);
	};

	/**
	 * A Transition object that encapsulates the state and logic
	 * of the transition.
	 *
	 * @param {Element} el
	 * @param {String} id
	 * @param {Object} hooks
	 * @param {Vue} vm
	 */
	function Transition(el, id, hooks, vm) {
	  this.id = id;
	  this.el = el;
	  this.enterClass = hooks && hooks.enterClass || id + '-enter';
	  this.leaveClass = hooks && hooks.leaveClass || id + '-leave';
	  this.hooks = hooks;
	  this.vm = vm;
	  // async state
	  this.pendingCssEvent = this.pendingCssCb = this.cancel = this.pendingJsCb = this.op = this.cb = null;
	  this.justEntered = false;
	  this.entered = this.left = false;
	  this.typeCache = {};
	  // check css transition type
	  this.type = hooks && hooks.type;
	  /* istanbul ignore if */
	  if (process.env.NODE_ENV !== 'production') {
	    if (this.type && this.type !== TYPE_TRANSITION && this.type !== TYPE_ANIMATION) {
	      warn('invalid CSS transition type for transition="' + this.id + '": ' + this.type, vm);
	    }
	  }
	  // bind
	  var self = this;['enterNextTick', 'enterDone', 'leaveNextTick', 'leaveDone'].forEach(function (m) {
	    self[m] = bind(self[m], self);
	  });
	}

	var p$1 = Transition.prototype;

	/**
	 * Start an entering transition.
	 *
	 * 1. enter transition triggered
	 * 2. call beforeEnter hook
	 * 3. add enter class
	 * 4. insert/show element
	 * 5. call enter hook (with possible explicit js callback)
	 * 6. reflow
	 * 7. based on transition type:
	 *    - transition:
	 *        remove class now, wait for transitionend,
	 *        then done if there's no explicit js callback.
	 *    - animation:
	 *        wait for animationend, remove class,
	 *        then done if there's no explicit js callback.
	 *    - no css transition:
	 *        done now if there's no explicit js callback.
	 * 8. wait for either done or js callback, then call
	 *    afterEnter hook.
	 *
	 * @param {Function} op - insert/show the element
	 * @param {Function} [cb]
	 */

	p$1.enter = function (op, cb) {
	  this.cancelPending();
	  this.callHook('beforeEnter');
	  this.cb = cb;
	  addClass(this.el, this.enterClass);
	  op();
	  this.entered = false;
	  this.callHookWithCb('enter');
	  if (this.entered) {
	    return; // user called done synchronously.
	  }
	  this.cancel = this.hooks && this.hooks.enterCancelled;
	  pushJob(this.enterNextTick);
	};

	/**
	 * The "nextTick" phase of an entering transition, which is
	 * to be pushed into a queue and executed after a reflow so
	 * that removing the class can trigger a CSS transition.
	 */

	p$1.enterNextTick = function () {
	  var _this = this;

	  // prevent transition skipping
	  this.justEntered = true;
	  waitForTransitionStart(function () {
	    _this.justEntered = false;
	  });
	  var enterDone = this.enterDone;
	  var type = this.getCssTransitionType(this.enterClass);
	  if (!this.pendingJsCb) {
	    if (type === TYPE_TRANSITION) {
	      // trigger transition by removing enter class now
	      removeClass(this.el, this.enterClass);
	      this.setupCssCb(transitionEndEvent, enterDone);
	    } else if (type === TYPE_ANIMATION) {
	      this.setupCssCb(animationEndEvent, enterDone);
	    } else {
	      enterDone();
	    }
	  } else if (type === TYPE_TRANSITION) {
	    removeClass(this.el, this.enterClass);
	  }
	};

	/**
	 * The "cleanup" phase of an entering transition.
	 */

	p$1.enterDone = function () {
	  this.entered = true;
	  this.cancel = this.pendingJsCb = null;
	  removeClass(this.el, this.enterClass);
	  this.callHook('afterEnter');
	  if (this.cb) this.cb();
	};

	/**
	 * Start a leaving transition.
	 *
	 * 1. leave transition triggered.
	 * 2. call beforeLeave hook
	 * 3. add leave class (trigger css transition)
	 * 4. call leave hook (with possible explicit js callback)
	 * 5. reflow if no explicit js callback is provided
	 * 6. based on transition type:
	 *    - transition or animation:
	 *        wait for end event, remove class, then done if
	 *        there's no explicit js callback.
	 *    - no css transition:
	 *        done if there's no explicit js callback.
	 * 7. wait for either done or js callback, then call
	 *    afterLeave hook.
	 *
	 * @param {Function} op - remove/hide the element
	 * @param {Function} [cb]
	 */

	p$1.leave = function (op, cb) {
	  this.cancelPending();
	  this.callHook('beforeLeave');
	  this.op = op;
	  this.cb = cb;
	  addClass(this.el, this.leaveClass);
	  this.left = false;
	  this.callHookWithCb('leave');
	  if (this.left) {
	    return; // user called done synchronously.
	  }
	  this.cancel = this.hooks && this.hooks.leaveCancelled;
	  // only need to handle leaveDone if
	  // 1. the transition is already done (synchronously called
	  //    by the user, which causes this.op set to null)
	  // 2. there's no explicit js callback
	  if (this.op && !this.pendingJsCb) {
	    // if a CSS transition leaves immediately after enter,
	    // the transitionend event never fires. therefore we
	    // detect such cases and end the leave immediately.
	    if (this.justEntered) {
	      this.leaveDone();
	    } else {
	      pushJob(this.leaveNextTick);
	    }
	  }
	};

	/**
	 * The "nextTick" phase of a leaving transition.
	 */

	p$1.leaveNextTick = function () {
	  var type = this.getCssTransitionType(this.leaveClass);
	  if (type) {
	    var event = type === TYPE_TRANSITION ? transitionEndEvent : animationEndEvent;
	    this.setupCssCb(event, this.leaveDone);
	  } else {
	    this.leaveDone();
	  }
	};

	/**
	 * The "cleanup" phase of a leaving transition.
	 */

	p$1.leaveDone = function () {
	  this.left = true;
	  this.cancel = this.pendingJsCb = null;
	  this.op();
	  removeClass(this.el, this.leaveClass);
	  this.callHook('afterLeave');
	  if (this.cb) this.cb();
	  this.op = null;
	};

	/**
	 * Cancel any pending callbacks from a previously running
	 * but not finished transition.
	 */

	p$1.cancelPending = function () {
	  this.op = this.cb = null;
	  var hasPending = false;
	  if (this.pendingCssCb) {
	    hasPending = true;
	    off(this.el, this.pendingCssEvent, this.pendingCssCb);
	    this.pendingCssEvent = this.pendingCssCb = null;
	  }
	  if (this.pendingJsCb) {
	    hasPending = true;
	    this.pendingJsCb.cancel();
	    this.pendingJsCb = null;
	  }
	  if (hasPending) {
	    removeClass(this.el, this.enterClass);
	    removeClass(this.el, this.leaveClass);
	  }
	  if (this.cancel) {
	    this.cancel.call(this.vm, this.el);
	    this.cancel = null;
	  }
	};

	/**
	 * Call a user-provided synchronous hook function.
	 *
	 * @param {String} type
	 */

	p$1.callHook = function (type) {
	  if (this.hooks && this.hooks[type]) {
	    this.hooks[type].call(this.vm, this.el);
	  }
	};

	/**
	 * Call a user-provided, potentially-async hook function.
	 * We check for the length of arguments to see if the hook
	 * expects a `done` callback. If true, the transition's end
	 * will be determined by when the user calls that callback;
	 * otherwise, the end is determined by the CSS transition or
	 * animation.
	 *
	 * @param {String} type
	 */

	p$1.callHookWithCb = function (type) {
	  var hook = this.hooks && this.hooks[type];
	  if (hook) {
	    if (hook.length > 1) {
	      this.pendingJsCb = cancellable(this[type + 'Done']);
	    }
	    hook.call(this.vm, this.el, this.pendingJsCb);
	  }
	};

	/**
	 * Get an element's transition type based on the
	 * calculated styles.
	 *
	 * @param {String} className
	 * @return {Number}
	 */

	p$1.getCssTransitionType = function (className) {
	  /* istanbul ignore if */
	  if (!transitionEndEvent ||
	  // skip CSS transitions if page is not visible -
	  // this solves the issue of transitionend events not
	  // firing until the page is visible again.
	  // pageVisibility API is supported in IE10+, same as
	  // CSS transitions.
	  document.hidden ||
	  // explicit js-only transition
	  this.hooks && this.hooks.css === false ||
	  // element is hidden
	  isHidden(this.el)) {
	    return;
	  }
	  var type = this.type || this.typeCache[className];
	  if (type) return type;
	  var inlineStyles = this.el.style;
	  var computedStyles = window.getComputedStyle(this.el);
	  var transDuration = inlineStyles[transDurationProp] || computedStyles[transDurationProp];
	  if (transDuration && transDuration !== '0s') {
	    type = TYPE_TRANSITION;
	  } else {
	    var animDuration = inlineStyles[animDurationProp] || computedStyles[animDurationProp];
	    if (animDuration && animDuration !== '0s') {
	      type = TYPE_ANIMATION;
	    }
	  }
	  if (type) {
	    this.typeCache[className] = type;
	  }
	  return type;
	};

	/**
	 * Setup a CSS transitionend/animationend callback.
	 *
	 * @param {String} event
	 * @param {Function} cb
	 */

	p$1.setupCssCb = function (event, cb) {
	  this.pendingCssEvent = event;
	  var self = this;
	  var el = this.el;
	  var onEnd = this.pendingCssCb = function (e) {
	    if (e.target === el) {
	      off(el, event, onEnd);
	      self.pendingCssEvent = self.pendingCssCb = null;
	      if (!self.pendingJsCb && cb) {
	        cb();
	      }
	    }
	  };
	  on(el, event, onEnd);
	};

	/**
	 * Check if an element is hidden - in that case we can just
	 * skip the transition alltogether.
	 *
	 * @param {Element} el
	 * @return {Boolean}
	 */

	function isHidden(el) {
	  if (/svg$/.test(el.namespaceURI)) {
	    // SVG elements do not have offset(Width|Height)
	    // so we need to check the client rect
	    var rect = el.getBoundingClientRect();
	    return !(rect.width || rect.height);
	  } else {
	    return !(el.offsetWidth || el.offsetHeight || el.getClientRects().length);
	  }
	}

	var transition$1 = {

	  priority: TRANSITION,

	  update: function update(id, oldId) {
	    var el = this.el;
	    // resolve on owner vm
	    var hooks = resolveAsset(this.vm.$options, 'transitions', id);
	    id = id || 'v';
	    el.__v_trans = new Transition(el, id, hooks, this.vm);
	    if (oldId) {
	      removeClass(el, oldId + '-transition');
	    }
	    addClass(el, id + '-transition');
	  }
	};

	var internalDirectives = {
	  style: style,
	  'class': vClass,
	  component: component,
	  prop: propDef,
	  transition: transition$1
	};

	// special binding prefixes
	var bindRE = /^v-bind:|^:/;
	var onRE = /^v-on:|^@/;
	var dirAttrRE = /^v-([^:]+)(?:$|:(.*)$)/;
	var modifierRE = /\.[^\.]+/g;
	var transitionRE = /^(v-bind:|:)?transition$/;

	// default directive priority
	var DEFAULT_PRIORITY = 1000;
	var DEFAULT_TERMINAL_PRIORITY = 2000;

	/**
	 * Compile a template and return a reusable composite link
	 * function, which recursively contains more link functions
	 * inside. This top level compile function would normally
	 * be called on instance root nodes, but can also be used
	 * for partial compilation if the partial argument is true.
	 *
	 * The returned composite link function, when called, will
	 * return an unlink function that tearsdown all directives
	 * created during the linking phase.
	 *
	 * @param {Element|DocumentFragment} el
	 * @param {Object} options
	 * @param {Boolean} partial
	 * @return {Function}
	 */

	function compile(el, options, partial) {
	  // link function for the node itself.
	  var nodeLinkFn = partial || !options._asComponent ? compileNode(el, options) : null;
	  // link function for the childNodes
	  var childLinkFn = !(nodeLinkFn && nodeLinkFn.terminal) && !isScript(el) && el.hasChildNodes() ? compileNodeList(el.childNodes, options) : null;

	  /**
	   * A composite linker function to be called on a already
	   * compiled piece of DOM, which instantiates all directive
	   * instances.
	   *
	   * @param {Vue} vm
	   * @param {Element|DocumentFragment} el
	   * @param {Vue} [host] - host vm of transcluded content
	   * @param {Object} [scope] - v-for scope
	   * @param {Fragment} [frag] - link context fragment
	   * @return {Function|undefined}
	   */

	  return function compositeLinkFn(vm, el, host, scope, frag) {
	    // cache childNodes before linking parent, fix #657
	    var childNodes = toArray(el.childNodes);
	    // link
	    var dirs = linkAndCapture(function compositeLinkCapturer() {
	      if (nodeLinkFn) nodeLinkFn(vm, el, host, scope, frag);
	      if (childLinkFn) childLinkFn(vm, childNodes, host, scope, frag);
	    }, vm);
	    return makeUnlinkFn(vm, dirs);
	  };
	}

	/**
	 * Apply a linker to a vm/element pair and capture the
	 * directives created during the process.
	 *
	 * @param {Function} linker
	 * @param {Vue} vm
	 */

	function linkAndCapture(linker, vm) {
	  /* istanbul ignore if */
	  if (process.env.NODE_ENV === 'production') {
	    // reset directives before every capture in production
	    // mode, so that when unlinking we don't need to splice
	    // them out (which turns out to be a perf hit).
	    // they are kept in development mode because they are
	    // useful for Vue's own tests.
	    vm._directives = [];
	  }
	  var originalDirCount = vm._directives.length;
	  linker();
	  var dirs = vm._directives.slice(originalDirCount);
	  dirs.sort(directiveComparator);
	  for (var i = 0, l = dirs.length; i < l; i++) {
	    dirs[i]._bind();
	  }
	  return dirs;
	}

	/**
	 * Directive priority sort comparator
	 *
	 * @param {Object} a
	 * @param {Object} b
	 */

	function directiveComparator(a, b) {
	  a = a.descriptor.def.priority || DEFAULT_PRIORITY;
	  b = b.descriptor.def.priority || DEFAULT_PRIORITY;
	  return a > b ? -1 : a === b ? 0 : 1;
	}

	/**
	 * Linker functions return an unlink function that
	 * tearsdown all directives instances generated during
	 * the process.
	 *
	 * We create unlink functions with only the necessary
	 * information to avoid retaining additional closures.
	 *
	 * @param {Vue} vm
	 * @param {Array} dirs
	 * @param {Vue} [context]
	 * @param {Array} [contextDirs]
	 * @return {Function}
	 */

	function makeUnlinkFn(vm, dirs, context, contextDirs) {
	  function unlink(destroying) {
	    teardownDirs(vm, dirs, destroying);
	    if (context && contextDirs) {
	      teardownDirs(context, contextDirs);
	    }
	  }
	  // expose linked directives
	  unlink.dirs = dirs;
	  return unlink;
	}

	/**
	 * Teardown partial linked directives.
	 *
	 * @param {Vue} vm
	 * @param {Array} dirs
	 * @param {Boolean} destroying
	 */

	function teardownDirs(vm, dirs, destroying) {
	  var i = dirs.length;
	  while (i--) {
	    dirs[i]._teardown();
	    if (process.env.NODE_ENV !== 'production' && !destroying) {
	      vm._directives.$remove(dirs[i]);
	    }
	  }
	}

	/**
	 * Compile link props on an instance.
	 *
	 * @param {Vue} vm
	 * @param {Element} el
	 * @param {Object} props
	 * @param {Object} [scope]
	 * @return {Function}
	 */

	function compileAndLinkProps(vm, el, props, scope) {
	  var propsLinkFn = compileProps(el, props, vm);
	  var propDirs = linkAndCapture(function () {
	    propsLinkFn(vm, scope);
	  }, vm);
	  return makeUnlinkFn(vm, propDirs);
	}

	/**
	 * Compile the root element of an instance.
	 *
	 * 1. attrs on context container (context scope)
	 * 2. attrs on the component template root node, if
	 *    replace:true (child scope)
	 *
	 * If this is a fragment instance, we only need to compile 1.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @param {Object} contextOptions
	 * @return {Function}
	 */

	function compileRoot(el, options, contextOptions) {
	  var containerAttrs = options._containerAttrs;
	  var replacerAttrs = options._replacerAttrs;
	  var contextLinkFn, replacerLinkFn;

	  // only need to compile other attributes for
	  // non-fragment instances
	  if (el.nodeType !== 11) {
	    // for components, container and replacer need to be
	    // compiled separately and linked in different scopes.
	    if (options._asComponent) {
	      // 2. container attributes
	      if (containerAttrs && contextOptions) {
	        contextLinkFn = compileDirectives(containerAttrs, contextOptions);
	      }
	      if (replacerAttrs) {
	        // 3. replacer attributes
	        replacerLinkFn = compileDirectives(replacerAttrs, options);
	      }
	    } else {
	      // non-component, just compile as a normal element.
	      replacerLinkFn = compileDirectives(el.attributes, options);
	    }
	  } else if (process.env.NODE_ENV !== 'production' && containerAttrs) {
	    // warn container directives for fragment instances
	    var names = containerAttrs.filter(function (attr) {
	      // allow vue-loader/vueify scoped css attributes
	      return attr.name.indexOf('_v-') < 0 &&
	      // allow event listeners
	      !onRE.test(attr.name) &&
	      // allow slots
	      attr.name !== 'slot';
	    }).map(function (attr) {
	      return '"' + attr.name + '"';
	    });
	    if (names.length) {
	      var plural = names.length > 1;
	      warn('Attribute' + (plural ? 's ' : ' ') + names.join(', ') + (plural ? ' are' : ' is') + ' ignored on component ' + '<' + options.el.tagName.toLowerCase() + '> because ' + 'the component is a fragment instance: ' + 'http://vuejs.org/guide/components.html#Fragment-Instance');
	    }
	  }

	  options._containerAttrs = options._replacerAttrs = null;
	  return function rootLinkFn(vm, el, scope) {
	    // link context scope dirs
	    var context = vm._context;
	    var contextDirs;
	    if (context && contextLinkFn) {
	      contextDirs = linkAndCapture(function () {
	        contextLinkFn(context, el, null, scope);
	      }, context);
	    }

	    // link self
	    var selfDirs = linkAndCapture(function () {
	      if (replacerLinkFn) replacerLinkFn(vm, el);
	    }, vm);

	    // return the unlink function that tearsdown context
	    // container directives.
	    return makeUnlinkFn(vm, selfDirs, context, contextDirs);
	  };
	}

	/**
	 * Compile a node and return a nodeLinkFn based on the
	 * node type.
	 *
	 * @param {Node} node
	 * @param {Object} options
	 * @return {Function|null}
	 */

	function compileNode(node, options) {
	  var type = node.nodeType;
	  if (type === 1 && !isScript(node)) {
	    return compileElement(node, options);
	  } else if (type === 3 && node.data.trim()) {
	    return compileTextNode(node, options);
	  } else {
	    return null;
	  }
	}

	/**
	 * Compile an element and return a nodeLinkFn.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Function|null}
	 */

	function compileElement(el, options) {
	  // preprocess textareas.
	  // textarea treats its text content as the initial value.
	  // just bind it as an attr directive for value.
	  if (el.tagName === 'TEXTAREA') {
	    var tokens = parseText(el.value);
	    if (tokens) {
	      el.setAttribute(':value', tokensToExp(tokens));
	      el.value = '';
	    }
	  }
	  var linkFn;
	  var hasAttrs = el.hasAttributes();
	  var attrs = hasAttrs && toArray(el.attributes);
	  // check terminal directives (for & if)
	  if (hasAttrs) {
	    linkFn = checkTerminalDirectives(el, attrs, options);
	  }
	  // check element directives
	  if (!linkFn) {
	    linkFn = checkElementDirectives(el, options);
	  }
	  // check component
	  if (!linkFn) {
	    linkFn = checkComponent(el, options);
	  }
	  // normal directives
	  if (!linkFn && hasAttrs) {
	    linkFn = compileDirectives(attrs, options);
	  }
	  return linkFn;
	}

	/**
	 * Compile a textNode and return a nodeLinkFn.
	 *
	 * @param {TextNode} node
	 * @param {Object} options
	 * @return {Function|null} textNodeLinkFn
	 */

	function compileTextNode(node, options) {
	  // skip marked text nodes
	  if (node._skip) {
	    return removeText;
	  }

	  var tokens = parseText(node.wholeText);
	  if (!tokens) {
	    return null;
	  }

	  // mark adjacent text nodes as skipped,
	  // because we are using node.wholeText to compile
	  // all adjacent text nodes together. This fixes
	  // issues in IE where sometimes it splits up a single
	  // text node into multiple ones.
	  var next = node.nextSibling;
	  while (next && next.nodeType === 3) {
	    next._skip = true;
	    next = next.nextSibling;
	  }

	  var frag = document.createDocumentFragment();
	  var el, token;
	  for (var i = 0, l = tokens.length; i < l; i++) {
	    token = tokens[i];
	    el = token.tag ? processTextToken(token, options) : document.createTextNode(token.value);
	    frag.appendChild(el);
	  }
	  return makeTextNodeLinkFn(tokens, frag, options);
	}

	/**
	 * Linker for an skipped text node.
	 *
	 * @param {Vue} vm
	 * @param {Text} node
	 */

	function removeText(vm, node) {
	  remove(node);
	}

	/**
	 * Process a single text token.
	 *
	 * @param {Object} token
	 * @param {Object} options
	 * @return {Node}
	 */

	function processTextToken(token, options) {
	  var el;
	  if (token.oneTime) {
	    el = document.createTextNode(token.value);
	  } else {
	    if (token.html) {
	      el = document.createComment('v-html');
	      setTokenType('html');
	    } else {
	      // IE will clean up empty textNodes during
	      // frag.cloneNode(true), so we have to give it
	      // something here...
	      el = document.createTextNode(' ');
	      setTokenType('text');
	    }
	  }
	  function setTokenType(type) {
	    if (token.descriptor) return;
	    var parsed = parseDirective(token.value);
	    token.descriptor = {
	      name: type,
	      def: directives[type],
	      expression: parsed.expression,
	      filters: parsed.filters
	    };
	  }
	  return el;
	}

	/**
	 * Build a function that processes a textNode.
	 *
	 * @param {Array<Object>} tokens
	 * @param {DocumentFragment} frag
	 */

	function makeTextNodeLinkFn(tokens, frag) {
	  return function textNodeLinkFn(vm, el, host, scope) {
	    var fragClone = frag.cloneNode(true);
	    var childNodes = toArray(fragClone.childNodes);
	    var token, value, node;
	    for (var i = 0, l = tokens.length; i < l; i++) {
	      token = tokens[i];
	      value = token.value;
	      if (token.tag) {
	        node = childNodes[i];
	        if (token.oneTime) {
	          value = (scope || vm).$eval(value);
	          if (token.html) {
	            replace(node, parseTemplate(value, true));
	          } else {
	            node.data = value;
	          }
	        } else {
	          vm._bindDir(token.descriptor, node, host, scope);
	        }
	      }
	    }
	    replace(el, fragClone);
	  };
	}

	/**
	 * Compile a node list and return a childLinkFn.
	 *
	 * @param {NodeList} nodeList
	 * @param {Object} options
	 * @return {Function|undefined}
	 */

	function compileNodeList(nodeList, options) {
	  var linkFns = [];
	  var nodeLinkFn, childLinkFn, node;
	  for (var i = 0, l = nodeList.length; i < l; i++) {
	    node = nodeList[i];
	    nodeLinkFn = compileNode(node, options);
	    childLinkFn = !(nodeLinkFn && nodeLinkFn.terminal) && node.tagName !== 'SCRIPT' && node.hasChildNodes() ? compileNodeList(node.childNodes, options) : null;
	    linkFns.push(nodeLinkFn, childLinkFn);
	  }
	  return linkFns.length ? makeChildLinkFn(linkFns) : null;
	}

	/**
	 * Make a child link function for a node's childNodes.
	 *
	 * @param {Array<Function>} linkFns
	 * @return {Function} childLinkFn
	 */

	function makeChildLinkFn(linkFns) {
	  return function childLinkFn(vm, nodes, host, scope, frag) {
	    var node, nodeLinkFn, childrenLinkFn;
	    for (var i = 0, n = 0, l = linkFns.length; i < l; n++) {
	      node = nodes[n];
	      nodeLinkFn = linkFns[i++];
	      childrenLinkFn = linkFns[i++];
	      // cache childNodes before linking parent, fix #657
	      var childNodes = toArray(node.childNodes);
	      if (nodeLinkFn) {
	        nodeLinkFn(vm, node, host, scope, frag);
	      }
	      if (childrenLinkFn) {
	        childrenLinkFn(vm, childNodes, host, scope, frag);
	      }
	    }
	  };
	}

	/**
	 * Check for element directives (custom elements that should
	 * be resovled as terminal directives).
	 *
	 * @param {Element} el
	 * @param {Object} options
	 */

	function checkElementDirectives(el, options) {
	  var tag = el.tagName.toLowerCase();
	  if (commonTagRE.test(tag)) {
	    return;
	  }
	  var def = resolveAsset(options, 'elementDirectives', tag);
	  if (def) {
	    return makeTerminalNodeLinkFn(el, tag, '', options, def);
	  }
	}

	/**
	 * Check if an element is a component. If yes, return
	 * a component link function.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Function|undefined}
	 */

	function checkComponent(el, options) {
	  var component = checkComponentAttr(el, options);
	  if (component) {
	    var ref = findRef(el);
	    var descriptor = {
	      name: 'component',
	      ref: ref,
	      expression: component.id,
	      def: internalDirectives.component,
	      modifiers: {
	        literal: !component.dynamic
	      }
	    };
	    var componentLinkFn = function componentLinkFn(vm, el, host, scope, frag) {
	      if (ref) {
	        defineReactive((scope || vm).$refs, ref, null);
	      }
	      vm._bindDir(descriptor, el, host, scope, frag);
	    };
	    componentLinkFn.terminal = true;
	    return componentLinkFn;
	  }
	}

	/**
	 * Check an element for terminal directives in fixed order.
	 * If it finds one, return a terminal link function.
	 *
	 * @param {Element} el
	 * @param {Array} attrs
	 * @param {Object} options
	 * @return {Function} terminalLinkFn
	 */

	function checkTerminalDirectives(el, attrs, options) {
	  // skip v-pre
	  if (getAttr(el, 'v-pre') !== null) {
	    return skip;
	  }
	  // skip v-else block, but only if following v-if
	  if (el.hasAttribute('v-else')) {
	    var prev = el.previousElementSibling;
	    if (prev && prev.hasAttribute('v-if')) {
	      return skip;
	    }
	  }

	  var attr, name, value, modifiers, matched, dirName, rawName, arg, def, termDef;
	  for (var i = 0, j = attrs.length; i < j; i++) {
	    attr = attrs[i];
	    name = attr.name.replace(modifierRE, '');
	    if (matched = name.match(dirAttrRE)) {
	      def = resolveAsset(options, 'directives', matched[1]);
	      if (def && def.terminal) {
	        if (!termDef || (def.priority || DEFAULT_TERMINAL_PRIORITY) > termDef.priority) {
	          termDef = def;
	          rawName = attr.name;
	          modifiers = parseModifiers(attr.name);
	          value = attr.value;
	          dirName = matched[1];
	          arg = matched[2];
	        }
	      }
	    }
	  }

	  if (termDef) {
	    return makeTerminalNodeLinkFn(el, dirName, value, options, termDef, rawName, arg, modifiers);
	  }
	}

	function skip() {}
	skip.terminal = true;

	/**
	 * Build a node link function for a terminal directive.
	 * A terminal link function terminates the current
	 * compilation recursion and handles compilation of the
	 * subtree in the directive.
	 *
	 * @param {Element} el
	 * @param {String} dirName
	 * @param {String} value
	 * @param {Object} options
	 * @param {Object} def
	 * @param {String} [rawName]
	 * @param {String} [arg]
	 * @param {Object} [modifiers]
	 * @return {Function} terminalLinkFn
	 */

	function makeTerminalNodeLinkFn(el, dirName, value, options, def, rawName, arg, modifiers) {
	  var parsed = parseDirective(value);
	  var descriptor = {
	    name: dirName,
	    arg: arg,
	    expression: parsed.expression,
	    filters: parsed.filters,
	    raw: value,
	    attr: rawName,
	    modifiers: modifiers,
	    def: def
	  };
	  // check ref for v-for and router-view
	  if (dirName === 'for' || dirName === 'router-view') {
	    descriptor.ref = findRef(el);
	  }
	  var fn = function terminalNodeLinkFn(vm, el, host, scope, frag) {
	    if (descriptor.ref) {
	      defineReactive((scope || vm).$refs, descriptor.ref, null);
	    }
	    vm._bindDir(descriptor, el, host, scope, frag);
	  };
	  fn.terminal = true;
	  return fn;
	}

	/**
	 * Compile the directives on an element and return a linker.
	 *
	 * @param {Array|NamedNodeMap} attrs
	 * @param {Object} options
	 * @return {Function}
	 */

	function compileDirectives(attrs, options) {
	  var i = attrs.length;
	  var dirs = [];
	  var attr, name, value, rawName, rawValue, dirName, arg, modifiers, dirDef, tokens, matched;
	  while (i--) {
	    attr = attrs[i];
	    name = rawName = attr.name;
	    value = rawValue = attr.value;
	    tokens = parseText(value);
	    // reset arg
	    arg = null;
	    // check modifiers
	    modifiers = parseModifiers(name);
	    name = name.replace(modifierRE, '');

	    // attribute interpolations
	    if (tokens) {
	      value = tokensToExp(tokens);
	      arg = name;
	      pushDir('bind', directives.bind, tokens);
	      // warn against mixing mustaches with v-bind
	      if (process.env.NODE_ENV !== 'production') {
	        if (name === 'class' && Array.prototype.some.call(attrs, function (attr) {
	          return attr.name === ':class' || attr.name === 'v-bind:class';
	        })) {
	          warn('class="' + rawValue + '": Do not mix mustache interpolation ' + 'and v-bind for "class" on the same element. Use one or the other.', options);
	        }
	      }
	    } else

	      // special attribute: transition
	      if (transitionRE.test(name)) {
	        modifiers.literal = !bindRE.test(name);
	        pushDir('transition', internalDirectives.transition);
	      } else

	        // event handlers
	        if (onRE.test(name)) {
	          arg = name.replace(onRE, '');
	          pushDir('on', directives.on);
	        } else

	          // attribute bindings
	          if (bindRE.test(name)) {
	            dirName = name.replace(bindRE, '');
	            if (dirName === 'style' || dirName === 'class') {
	              pushDir(dirName, internalDirectives[dirName]);
	            } else {
	              arg = dirName;
	              pushDir('bind', directives.bind);
	            }
	          } else

	            // normal directives
	            if (matched = name.match(dirAttrRE)) {
	              dirName = matched[1];
	              arg = matched[2];

	              // skip v-else (when used with v-show)
	              if (dirName === 'else') {
	                continue;
	              }

	              dirDef = resolveAsset(options, 'directives', dirName, true);
	              if (dirDef) {
	                pushDir(dirName, dirDef);
	              }
	            }
	  }

	  /**
	   * Push a directive.
	   *
	   * @param {String} dirName
	   * @param {Object|Function} def
	   * @param {Array} [interpTokens]
	   */

	  function pushDir(dirName, def, interpTokens) {
	    var hasOneTimeToken = interpTokens && hasOneTime(interpTokens);
	    var parsed = !hasOneTimeToken && parseDirective(value);
	    dirs.push({
	      name: dirName,
	      attr: rawName,
	      raw: rawValue,
	      def: def,
	      arg: arg,
	      modifiers: modifiers,
	      // conversion from interpolation strings with one-time token
	      // to expression is differed until directive bind time so that we
	      // have access to the actual vm context for one-time bindings.
	      expression: parsed && parsed.expression,
	      filters: parsed && parsed.filters,
	      interp: interpTokens,
	      hasOneTime: hasOneTimeToken
	    });
	  }

	  if (dirs.length) {
	    return makeNodeLinkFn(dirs);
	  }
	}

	/**
	 * Parse modifiers from directive attribute name.
	 *
	 * @param {String} name
	 * @return {Object}
	 */

	function parseModifiers(name) {
	  var res = Object.create(null);
	  var match = name.match(modifierRE);
	  if (match) {
	    var i = match.length;
	    while (i--) {
	      res[match[i].slice(1)] = true;
	    }
	  }
	  return res;
	}

	/**
	 * Build a link function for all directives on a single node.
	 *
	 * @param {Array} directives
	 * @return {Function} directivesLinkFn
	 */

	function makeNodeLinkFn(directives) {
	  return function nodeLinkFn(vm, el, host, scope, frag) {
	    // reverse apply because it's sorted low to high
	    var i = directives.length;
	    while (i--) {
	      vm._bindDir(directives[i], el, host, scope, frag);
	    }
	  };
	}

	/**
	 * Check if an interpolation string contains one-time tokens.
	 *
	 * @param {Array} tokens
	 * @return {Boolean}
	 */

	function hasOneTime(tokens) {
	  var i = tokens.length;
	  while (i--) {
	    if (tokens[i].oneTime) return true;
	  }
	}

	function isScript(el) {
	  return el.tagName === 'SCRIPT' && (!el.hasAttribute('type') || el.getAttribute('type') === 'text/javascript');
	}

	var specialCharRE = /[^\w\-:\.]/;

	/**
	 * Process an element or a DocumentFragment based on a
	 * instance option object. This allows us to transclude
	 * a template node/fragment before the instance is created,
	 * so the processed fragment can then be cloned and reused
	 * in v-for.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Element|DocumentFragment}
	 */

	function transclude(el, options) {
	  // extract container attributes to pass them down
	  // to compiler, because they need to be compiled in
	  // parent scope. we are mutating the options object here
	  // assuming the same object will be used for compile
	  // right after this.
	  if (options) {
	    options._containerAttrs = extractAttrs(el);
	  }
	  // for template tags, what we want is its content as
	  // a documentFragment (for fragment instances)
	  if (isTemplate(el)) {
	    el = parseTemplate(el);
	  }
	  if (options) {
	    if (options._asComponent && !options.template) {
	      options.template = '<slot></slot>';
	    }
	    if (options.template) {
	      options._content = extractContent(el);
	      el = transcludeTemplate(el, options);
	    }
	  }
	  if (isFragment(el)) {
	    // anchors for fragment instance
	    // passing in `persist: true` to avoid them being
	    // discarded by IE during template cloning
	    prepend(createAnchor('v-start', true), el);
	    el.appendChild(createAnchor('v-end', true));
	  }
	  return el;
	}

	/**
	 * Process the template option.
	 * If the replace option is true this will swap the $el.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Element|DocumentFragment}
	 */

	function transcludeTemplate(el, options) {
	  var template = options.template;
	  var frag = parseTemplate(template, true);
	  if (frag) {
	    var replacer = frag.firstChild;
	    var tag = replacer.tagName && replacer.tagName.toLowerCase();
	    if (options.replace) {
	      /* istanbul ignore if */
	      if (el === document.body) {
	        process.env.NODE_ENV !== 'production' && warn('You are mounting an instance with a template to ' + '<body>. This will replace <body> entirely. You ' + 'should probably use `replace: false` here.');
	      }
	      // there are many cases where the instance must
	      // become a fragment instance: basically anything that
	      // can create more than 1 root nodes.
	      if (
	      // multi-children template
	      frag.childNodes.length > 1 ||
	      // non-element template
	      replacer.nodeType !== 1 ||
	      // single nested component
	      tag === 'component' || resolveAsset(options, 'components', tag) || hasBindAttr(replacer, 'is') ||
	      // element directive
	      resolveAsset(options, 'elementDirectives', tag) ||
	      // for block
	      replacer.hasAttribute('v-for') ||
	      // if block
	      replacer.hasAttribute('v-if')) {
	        return frag;
	      } else {
	        options._replacerAttrs = extractAttrs(replacer);
	        mergeAttrs(el, replacer);
	        return replacer;
	      }
	    } else {
	      el.appendChild(frag);
	      return el;
	    }
	  } else {
	    process.env.NODE_ENV !== 'production' && warn('Invalid template option: ' + template);
	  }
	}

	/**
	 * Helper to extract a component container's attributes
	 * into a plain object array.
	 *
	 * @param {Element} el
	 * @return {Array}
	 */

	function extractAttrs(el) {
	  if (el.nodeType === 1 && el.hasAttributes()) {
	    return toArray(el.attributes);
	  }
	}

	/**
	 * Merge the attributes of two elements, and make sure
	 * the class names are merged properly.
	 *
	 * @param {Element} from
	 * @param {Element} to
	 */

	function mergeAttrs(from, to) {
	  var attrs = from.attributes;
	  var i = attrs.length;
	  var name, value;
	  while (i--) {
	    name = attrs[i].name;
	    value = attrs[i].value;
	    if (!to.hasAttribute(name) && !specialCharRE.test(name)) {
	      to.setAttribute(name, value);
	    } else if (name === 'class' && !parseText(value) && (value = value.trim())) {
	      value.split(/\s+/).forEach(function (cls) {
	        addClass(to, cls);
	      });
	    }
	  }
	}

	/**
	 * Scan and determine slot content distribution.
	 * We do this during transclusion instead at compile time so that
	 * the distribution is decoupled from the compilation order of
	 * the slots.
	 *
	 * @param {Element|DocumentFragment} template
	 * @param {Element} content
	 * @param {Vue} vm
	 */

	function resolveSlots(vm, content) {
	  if (!content) {
	    return;
	  }
	  var contents = vm._slotContents = Object.create(null);
	  var el, name;
	  for (var i = 0, l = content.children.length; i < l; i++) {
	    el = content.children[i];
	    /* eslint-disable no-cond-assign */
	    if (name = el.getAttribute('slot')) {
	      (contents[name] || (contents[name] = [])).push(el);
	    }
	    /* eslint-enable no-cond-assign */
	    if (process.env.NODE_ENV !== 'production' && getBindAttr(el, 'slot')) {
	      warn('The "slot" attribute must be static.', vm.$parent);
	    }
	  }
	  for (name in contents) {
	    contents[name] = extractFragment(contents[name], content);
	  }
	  if (content.hasChildNodes()) {
	    var nodes = content.childNodes;
	    if (nodes.length === 1 && nodes[0].nodeType === 3 && !nodes[0].data.trim()) {
	      return;
	    }
	    contents['default'] = extractFragment(content.childNodes, content);
	  }
	}

	/**
	 * Extract qualified content nodes from a node list.
	 *
	 * @param {NodeList} nodes
	 * @return {DocumentFragment}
	 */

	function extractFragment(nodes, parent) {
	  var frag = document.createDocumentFragment();
	  nodes = toArray(nodes);
	  for (var i = 0, l = nodes.length; i < l; i++) {
	    var node = nodes[i];
	    if (isTemplate(node) && !node.hasAttribute('v-if') && !node.hasAttribute('v-for')) {
	      parent.removeChild(node);
	      node = parseTemplate(node, true);
	    }
	    frag.appendChild(node);
	  }
	  return frag;
	}



	var compiler = Object.freeze({
		compile: compile,
		compileAndLinkProps: compileAndLinkProps,
		compileRoot: compileRoot,
		transclude: transclude,
		resolveSlots: resolveSlots
	});

	function stateMixin (Vue) {
	  /**
	   * Accessor for `$data` property, since setting $data
	   * requires observing the new object and updating
	   * proxied properties.
	   */

	  Object.defineProperty(Vue.prototype, '$data', {
	    get: function get() {
	      return this._data;
	    },
	    set: function set(newData) {
	      if (newData !== this._data) {
	        this._setData(newData);
	      }
	    }
	  });

	  /**
	   * Setup the scope of an instance, which contains:
	   * - observed data
	   * - computed properties
	   * - user methods
	   * - meta properties
	   */

	  Vue.prototype._initState = function () {
	    this._initProps();
	    this._initMeta();
	    this._initMethods();
	    this._initData();
	    this._initComputed();
	  };

	  /**
	   * Initialize props.
	   */

	  Vue.prototype._initProps = function () {
	    var options = this.$options;
	    var el = options.el;
	    var props = options.props;
	    if (props && !el) {
	      process.env.NODE_ENV !== 'production' && warn('Props will not be compiled if no `el` option is ' + 'provided at instantiation.', this);
	    }
	    // make sure to convert string selectors into element now
	    el = options.el = query(el);
	    this._propsUnlinkFn = el && el.nodeType === 1 && props
	    // props must be linked in proper scope if inside v-for
	    ? compileAndLinkProps(this, el, props, this._scope) : null;
	  };

	  /**
	   * Initialize the data.
	   */

	  Vue.prototype._initData = function () {
	    var dataFn = this.$options.data;
	    var data = this._data = dataFn ? dataFn() : {};
	    if (!isPlainObject(data)) {
	      data = {};
	      process.env.NODE_ENV !== 'production' && warn('data functions should return an object.', this);
	    }
	    var props = this._props;
	    // proxy data on instance
	    var keys = Object.keys(data);
	    var i, key;
	    i = keys.length;
	    while (i--) {
	      key = keys[i];
	      // there are two scenarios where we can proxy a data key:
	      // 1. it's not already defined as a prop
	      // 2. it's provided via a instantiation option AND there are no
	      //    template prop present
	      if (!props || !hasOwn(props, key)) {
	        this._proxy(key);
	      } else if (process.env.NODE_ENV !== 'production') {
	        warn('Data field "' + key + '" is already defined ' + 'as a prop. To provide default value for a prop, use the "default" ' + 'prop option; if you want to pass prop values to an instantiation ' + 'call, use the "propsData" option.', this);
	      }
	    }
	    // observe data
	    observe(data, this);
	  };

	  /**
	   * Swap the instance's $data. Called in $data's setter.
	   *
	   * @param {Object} newData
	   */

	  Vue.prototype._setData = function (newData) {
	    newData = newData || {};
	    var oldData = this._data;
	    this._data = newData;
	    var keys, key, i;
	    // unproxy keys not present in new data
	    keys = Object.keys(oldData);
	    i = keys.length;
	    while (i--) {
	      key = keys[i];
	      if (!(key in newData)) {
	        this._unproxy(key);
	      }
	    }
	    // proxy keys not already proxied,
	    // and trigger change for changed values
	    keys = Object.keys(newData);
	    i = keys.length;
	    while (i--) {
	      key = keys[i];
	      if (!hasOwn(this, key)) {
	        // new property
	        this._proxy(key);
	      }
	    }
	    oldData.__ob__.removeVm(this);
	    observe(newData, this);
	    this._digest();
	  };

	  /**
	   * Proxy a property, so that
	   * vm.prop === vm._data.prop
	   *
	   * @param {String} key
	   */

	  Vue.prototype._proxy = function (key) {
	    if (!isReserved(key)) {
	      // need to store ref to self here
	      // because these getter/setters might
	      // be called by child scopes via
	      // prototype inheritance.
	      var self = this;
	      Object.defineProperty(self, key, {
	        configurable: true,
	        enumerable: true,
	        get: function proxyGetter() {
	          return self._data[key];
	        },
	        set: function proxySetter(val) {
	          self._data[key] = val;
	        }
	      });
	    }
	  };

	  /**
	   * Unproxy a property.
	   *
	   * @param {String} key
	   */

	  Vue.prototype._unproxy = function (key) {
	    if (!isReserved(key)) {
	      delete this[key];
	    }
	  };

	  /**
	   * Force update on every watcher in scope.
	   */

	  Vue.prototype._digest = function () {
	    for (var i = 0, l = this._watchers.length; i < l; i++) {
	      this._watchers[i].update(true); // shallow updates
	    }
	  };

	  /**
	   * Setup computed properties. They are essentially
	   * special getter/setters
	   */

	  function noop() {}
	  Vue.prototype._initComputed = function () {
	    var computed = this.$options.computed;
	    if (computed) {
	      for (var key in computed) {
	        var userDef = computed[key];
	        var def = {
	          enumerable: true,
	          configurable: true
	        };
	        if (typeof userDef === 'function') {
	          def.get = makeComputedGetter(userDef, this);
	          def.set = noop;
	        } else {
	          def.get = userDef.get ? userDef.cache !== false ? makeComputedGetter(userDef.get, this) : bind(userDef.get, this) : noop;
	          def.set = userDef.set ? bind(userDef.set, this) : noop;
	        }
	        Object.defineProperty(this, key, def);
	      }
	    }
	  };

	  function makeComputedGetter(getter, owner) {
	    var watcher = new Watcher(owner, getter, null, {
	      lazy: true
	    });
	    return function computedGetter() {
	      if (watcher.dirty) {
	        watcher.evaluate();
	      }
	      if (Dep.target) {
	        watcher.depend();
	      }
	      return watcher.value;
	    };
	  }

	  /**
	   * Setup instance methods. Methods must be bound to the
	   * instance since they might be passed down as a prop to
	   * child components.
	   */

	  Vue.prototype._initMethods = function () {
	    var methods = this.$options.methods;
	    if (methods) {
	      for (var key in methods) {
	        this[key] = bind(methods[key], this);
	      }
	    }
	  };

	  /**
	   * Initialize meta information like $index, $key & $value.
	   */

	  Vue.prototype._initMeta = function () {
	    var metas = this.$options._meta;
	    if (metas) {
	      for (var key in metas) {
	        defineReactive(this, key, metas[key]);
	      }
	    }
	  };
	}

	var eventRE = /^v-on:|^@/;

	function eventsMixin (Vue) {
	  /**
	   * Setup the instance's option events & watchers.
	   * If the value is a string, we pull it from the
	   * instance's methods by name.
	   */

	  Vue.prototype._initEvents = function () {
	    var options = this.$options;
	    if (options._asComponent) {
	      registerComponentEvents(this, options.el);
	    }
	    registerCallbacks(this, '$on', options.events);
	    registerCallbacks(this, '$watch', options.watch);
	  };

	  /**
	   * Register v-on events on a child component
	   *
	   * @param {Vue} vm
	   * @param {Element} el
	   */

	  function registerComponentEvents(vm, el) {
	    var attrs = el.attributes;
	    var name, value, handler;
	    for (var i = 0, l = attrs.length; i < l; i++) {
	      name = attrs[i].name;
	      if (eventRE.test(name)) {
	        name = name.replace(eventRE, '');
	        // force the expression into a statement so that
	        // it always dynamically resolves the method to call (#2670)
	        // kinda ugly hack, but does the job.
	        value = attrs[i].value;
	        if (isSimplePath(value)) {
	          value += '.apply(this, $arguments)';
	        }
	        handler = (vm._scope || vm._context).$eval(value, true);
	        handler._fromParent = true;
	        vm.$on(name.replace(eventRE), handler);
	      }
	    }
	  }

	  /**
	   * Register callbacks for option events and watchers.
	   *
	   * @param {Vue} vm
	   * @param {String} action
	   * @param {Object} hash
	   */

	  function registerCallbacks(vm, action, hash) {
	    if (!hash) return;
	    var handlers, key, i, j;
	    for (key in hash) {
	      handlers = hash[key];
	      if (isArray(handlers)) {
	        for (i = 0, j = handlers.length; i < j; i++) {
	          register(vm, action, key, handlers[i]);
	        }
	      } else {
	        register(vm, action, key, handlers);
	      }
	    }
	  }

	  /**
	   * Helper to register an event/watch callback.
	   *
	   * @param {Vue} vm
	   * @param {String} action
	   * @param {String} key
	   * @param {Function|String|Object} handler
	   * @param {Object} [options]
	   */

	  function register(vm, action, key, handler, options) {
	    var type = typeof handler;
	    if (type === 'function') {
	      vm[action](key, handler, options);
	    } else if (type === 'string') {
	      var methods = vm.$options.methods;
	      var method = methods && methods[handler];
	      if (method) {
	        vm[action](key, method, options);
	      } else {
	        process.env.NODE_ENV !== 'production' && warn('Unknown method: "' + handler + '" when ' + 'registering callback for ' + action + ': "' + key + '".', vm);
	      }
	    } else if (handler && type === 'object') {
	      register(vm, action, key, handler.handler, handler);
	    }
	  }

	  /**
	   * Setup recursive attached/detached calls
	   */

	  Vue.prototype._initDOMHooks = function () {
	    this.$on('hook:attached', onAttached);
	    this.$on('hook:detached', onDetached);
	  };

	  /**
	   * Callback to recursively call attached hook on children
	   */

	  function onAttached() {
	    if (!this._isAttached) {
	      this._isAttached = true;
	      this.$children.forEach(callAttach);
	    }
	  }

	  /**
	   * Iterator to call attached hook
	   *
	   * @param {Vue} child
	   */

	  function callAttach(child) {
	    if (!child._isAttached && inDoc(child.$el)) {
	      child._callHook('attached');
	    }
	  }

	  /**
	   * Callback to recursively call detached hook on children
	   */

	  function onDetached() {
	    if (this._isAttached) {
	      this._isAttached = false;
	      this.$children.forEach(callDetach);
	    }
	  }

	  /**
	   * Iterator to call detached hook
	   *
	   * @param {Vue} child
	   */

	  function callDetach(child) {
	    if (child._isAttached && !inDoc(child.$el)) {
	      child._callHook('detached');
	    }
	  }

	  /**
	   * Trigger all handlers for a hook
	   *
	   * @param {String} hook
	   */

	  Vue.prototype._callHook = function (hook) {
	    this.$emit('pre-hook:' + hook);
	    var handlers = this.$options[hook];
	    if (handlers) {
	      for (var i = 0, j = handlers.length; i < j; i++) {
	        handlers[i].call(this);
	      }
	    }
	    this.$emit('hook:' + hook);
	  };
	}

	function noop() {}

	/**
	 * A directive links a DOM element with a piece of data,
	 * which is the result of evaluating an expression.
	 * It registers a watcher with the expression and calls
	 * the DOM update function when a change is triggered.
	 *
	 * @param {Object} descriptor
	 *                 - {String} name
	 *                 - {Object} def
	 *                 - {String} expression
	 *                 - {Array<Object>} [filters]
	 *                 - {Object} [modifiers]
	 *                 - {Boolean} literal
	 *                 - {String} attr
	 *                 - {String} arg
	 *                 - {String} raw
	 *                 - {String} [ref]
	 *                 - {Array<Object>} [interp]
	 *                 - {Boolean} [hasOneTime]
	 * @param {Vue} vm
	 * @param {Node} el
	 * @param {Vue} [host] - transclusion host component
	 * @param {Object} [scope] - v-for scope
	 * @param {Fragment} [frag] - owner fragment
	 * @constructor
	 */
	function Directive(descriptor, vm, el, host, scope, frag) {
	  this.vm = vm;
	  this.el = el;
	  // copy descriptor properties
	  this.descriptor = descriptor;
	  this.name = descriptor.name;
	  this.expression = descriptor.expression;
	  this.arg = descriptor.arg;
	  this.modifiers = descriptor.modifiers;
	  this.filters = descriptor.filters;
	  this.literal = this.modifiers && this.modifiers.literal;
	  // private
	  this._locked = false;
	  this._bound = false;
	  this._listeners = null;
	  // link context
	  this._host = host;
	  this._scope = scope;
	  this._frag = frag;
	  // store directives on node in dev mode
	  if (process.env.NODE_ENV !== 'production' && this.el) {
	    this.el._vue_directives = this.el._vue_directives || [];
	    this.el._vue_directives.push(this);
	  }
	}

	/**
	 * Initialize the directive, mixin definition properties,
	 * setup the watcher, call definition bind() and update()
	 * if present.
	 */

	Directive.prototype._bind = function () {
	  var name = this.name;
	  var descriptor = this.descriptor;

	  // remove attribute
	  if ((name !== 'cloak' || this.vm._isCompiled) && this.el && this.el.removeAttribute) {
	    var attr = descriptor.attr || 'v-' + name;
	    this.el.removeAttribute(attr);
	  }

	  // copy def properties
	  var def = descriptor.def;
	  if (typeof def === 'function') {
	    this.update = def;
	  } else {
	    extend(this, def);
	  }

	  // setup directive params
	  this._setupParams();

	  // initial bind
	  if (this.bind) {
	    this.bind();
	  }
	  this._bound = true;

	  if (this.literal) {
	    this.update && this.update(descriptor.raw);
	  } else if ((this.expression || this.modifiers) && (this.update || this.twoWay) && !this._checkStatement()) {
	    // wrapped updater for context
	    var dir = this;
	    if (this.update) {
	      this._update = function (val, oldVal) {
	        if (!dir._locked) {
	          dir.update(val, oldVal);
	        }
	      };
	    } else {
	      this._update = noop;
	    }
	    var preProcess = this._preProcess ? bind(this._preProcess, this) : null;
	    var postProcess = this._postProcess ? bind(this._postProcess, this) : null;
	    var watcher = this._watcher = new Watcher(this.vm, this.expression, this._update, // callback
	    {
	      filters: this.filters,
	      twoWay: this.twoWay,
	      deep: this.deep,
	      preProcess: preProcess,
	      postProcess: postProcess,
	      scope: this._scope
	    });
	    // v-model with inital inline value need to sync back to
	    // model instead of update to DOM on init. They would
	    // set the afterBind hook to indicate that.
	    if (this.afterBind) {
	      this.afterBind();
	    } else if (this.update) {
	      this.update(watcher.value);
	    }
	  }
	};

	/**
	 * Setup all param attributes, e.g. track-by,
	 * transition-mode, etc...
	 */

	Directive.prototype._setupParams = function () {
	  if (!this.params) {
	    return;
	  }
	  var params = this.params;
	  // swap the params array with a fresh object.
	  this.params = Object.create(null);
	  var i = params.length;
	  var key, val, mappedKey;
	  while (i--) {
	    key = hyphenate(params[i]);
	    mappedKey = camelize(key);
	    val = getBindAttr(this.el, key);
	    if (val != null) {
	      // dynamic
	      this._setupParamWatcher(mappedKey, val);
	    } else {
	      // static
	      val = getAttr(this.el, key);
	      if (val != null) {
	        this.params[mappedKey] = val === '' ? true : val;
	      }
	    }
	  }
	};

	/**
	 * Setup a watcher for a dynamic param.
	 *
	 * @param {String} key
	 * @param {String} expression
	 */

	Directive.prototype._setupParamWatcher = function (key, expression) {
	  var self = this;
	  var called = false;
	  var unwatch = (this._scope || this.vm).$watch(expression, function (val, oldVal) {
	    self.params[key] = val;
	    // since we are in immediate mode,
	    // only call the param change callbacks if this is not the first update.
	    if (called) {
	      var cb = self.paramWatchers && self.paramWatchers[key];
	      if (cb) {
	        cb.call(self, val, oldVal);
	      }
	    } else {
	      called = true;
	    }
	  }, {
	    immediate: true,
	    user: false
	  });(this._paramUnwatchFns || (this._paramUnwatchFns = [])).push(unwatch);
	};

	/**
	 * Check if the directive is a function caller
	 * and if the expression is a callable one. If both true,
	 * we wrap up the expression and use it as the event
	 * handler.
	 *
	 * e.g. on-click="a++"
	 *
	 * @return {Boolean}
	 */

	Directive.prototype._checkStatement = function () {
	  var expression = this.expression;
	  if (expression && this.acceptStatement && !isSimplePath(expression)) {
	    var fn = parseExpression(expression).get;
	    var scope = this._scope || this.vm;
	    var handler = function handler(e) {
	      scope.$event = e;
	      fn.call(scope, scope);
	      scope.$event = null;
	    };
	    if (this.filters) {
	      handler = scope._applyFilters(handler, null, this.filters);
	    }
	    this.update(handler);
	    return true;
	  }
	};

	/**
	 * Set the corresponding value with the setter.
	 * This should only be used in two-way directives
	 * e.g. v-model.
	 *
	 * @param {*} value
	 * @public
	 */

	Directive.prototype.set = function (value) {
	  /* istanbul ignore else */
	  if (this.twoWay) {
	    this._withLock(function () {
	      this._watcher.set(value);
	    });
	  } else if (process.env.NODE_ENV !== 'production') {
	    warn('Directive.set() can only be used inside twoWay' + 'directives.');
	  }
	};

	/**
	 * Execute a function while preventing that function from
	 * triggering updates on this directive instance.
	 *
	 * @param {Function} fn
	 */

	Directive.prototype._withLock = function (fn) {
	  var self = this;
	  self._locked = true;
	  fn.call(self);
	  nextTick(function () {
	    self._locked = false;
	  });
	};

	/**
	 * Convenience method that attaches a DOM event listener
	 * to the directive element and autometically tears it down
	 * during unbind.
	 *
	 * @param {String} event
	 * @param {Function} handler
	 * @param {Boolean} [useCapture]
	 */

	Directive.prototype.on = function (event, handler, useCapture) {
	  on(this.el, event, handler, useCapture);(this._listeners || (this._listeners = [])).push([event, handler]);
	};

	/**
	 * Teardown the watcher and call unbind.
	 */

	Directive.prototype._teardown = function () {
	  if (this._bound) {
	    this._bound = false;
	    if (this.unbind) {
	      this.unbind();
	    }
	    if (this._watcher) {
	      this._watcher.teardown();
	    }
	    var listeners = this._listeners;
	    var i;
	    if (listeners) {
	      i = listeners.length;
	      while (i--) {
	        off(this.el, listeners[i][0], listeners[i][1]);
	      }
	    }
	    var unwatchFns = this._paramUnwatchFns;
	    if (unwatchFns) {
	      i = unwatchFns.length;
	      while (i--) {
	        unwatchFns[i]();
	      }
	    }
	    if (process.env.NODE_ENV !== 'production' && this.el) {
	      this.el._vue_directives.$remove(this);
	    }
	    this.vm = this.el = this._watcher = this._listeners = null;
	  }
	};

	function lifecycleMixin (Vue) {
	  /**
	   * Update v-ref for component.
	   *
	   * @param {Boolean} remove
	   */

	  Vue.prototype._updateRef = function (remove) {
	    var ref = this.$options._ref;
	    if (ref) {
	      var refs = (this._scope || this._context).$refs;
	      if (remove) {
	        if (refs[ref] === this) {
	          refs[ref] = null;
	        }
	      } else {
	        refs[ref] = this;
	      }
	    }
	  };

	  /**
	   * Transclude, compile and link element.
	   *
	   * If a pre-compiled linker is available, that means the
	   * passed in element will be pre-transcluded and compiled
	   * as well - all we need to do is to call the linker.
	   *
	   * Otherwise we need to call transclude/compile/link here.
	   *
	   * @param {Element} el
	   */

	  Vue.prototype._compile = function (el) {
	    var options = this.$options;

	    // transclude and init element
	    // transclude can potentially replace original
	    // so we need to keep reference; this step also injects
	    // the template and caches the original attributes
	    // on the container node and replacer node.
	    var original = el;
	    el = transclude(el, options);
	    this._initElement(el);

	    // handle v-pre on root node (#2026)
	    if (el.nodeType === 1 && getAttr(el, 'v-pre') !== null) {
	      return;
	    }

	    // root is always compiled per-instance, because
	    // container attrs and props can be different every time.
	    var contextOptions = this._context && this._context.$options;
	    var rootLinker = compileRoot(el, options, contextOptions);

	    // resolve slot distribution
	    resolveSlots(this, options._content);

	    // compile and link the rest
	    var contentLinkFn;
	    var ctor = this.constructor;
	    // component compilation can be cached
	    // as long as it's not using inline-template
	    if (options._linkerCachable) {
	      contentLinkFn = ctor.linker;
	      if (!contentLinkFn) {
	        contentLinkFn = ctor.linker = compile(el, options);
	      }
	    }

	    // link phase
	    // make sure to link root with prop scope!
	    var rootUnlinkFn = rootLinker(this, el, this._scope);
	    var contentUnlinkFn = contentLinkFn ? contentLinkFn(this, el) : compile(el, options)(this, el);

	    // register composite unlink function
	    // to be called during instance destruction
	    this._unlinkFn = function () {
	      rootUnlinkFn();
	      // passing destroying: true to avoid searching and
	      // splicing the directives
	      contentUnlinkFn(true);
	    };

	    // finally replace original
	    if (options.replace) {
	      replace(original, el);
	    }

	    this._isCompiled = true;
	    this._callHook('compiled');
	  };

	  /**
	   * Initialize instance element. Called in the public
	   * $mount() method.
	   *
	   * @param {Element} el
	   */

	  Vue.prototype._initElement = function (el) {
	    if (isFragment(el)) {
	      this._isFragment = true;
	      this.$el = this._fragmentStart = el.firstChild;
	      this._fragmentEnd = el.lastChild;
	      // set persisted text anchors to empty
	      if (this._fragmentStart.nodeType === 3) {
	        this._fragmentStart.data = this._fragmentEnd.data = '';
	      }
	      this._fragment = el;
	    } else {
	      this.$el = el;
	    }
	    this.$el.__vue__ = this;
	    this._callHook('beforeCompile');
	  };

	  /**
	   * Create and bind a directive to an element.
	   *
	   * @param {Object} descriptor - parsed directive descriptor
	   * @param {Node} node   - target node
	   * @param {Vue} [host] - transclusion host component
	   * @param {Object} [scope] - v-for scope
	   * @param {Fragment} [frag] - owner fragment
	   */

	  Vue.prototype._bindDir = function (descriptor, node, host, scope, frag) {
	    this._directives.push(new Directive(descriptor, this, node, host, scope, frag));
	  };

	  /**
	   * Teardown an instance, unobserves the data, unbind all the
	   * directives, turn off all the event listeners, etc.
	   *
	   * @param {Boolean} remove - whether to remove the DOM node.
	   * @param {Boolean} deferCleanup - if true, defer cleanup to
	   *                                 be called later
	   */

	  Vue.prototype._destroy = function (remove, deferCleanup) {
	    if (this._isBeingDestroyed) {
	      if (!deferCleanup) {
	        this._cleanup();
	      }
	      return;
	    }

	    var destroyReady;
	    var pendingRemoval;

	    var self = this;
	    // Cleanup should be called either synchronously or asynchronoysly as
	    // callback of this.$remove(), or if remove and deferCleanup are false.
	    // In any case it should be called after all other removing, unbinding and
	    // turning of is done
	    var cleanupIfPossible = function cleanupIfPossible() {
	      if (destroyReady && !pendingRemoval && !deferCleanup) {
	        self._cleanup();
	      }
	    };

	    // remove DOM element
	    if (remove && this.$el) {
	      pendingRemoval = true;
	      this.$remove(function () {
	        pendingRemoval = false;
	        cleanupIfPossible();
	      });
	    }

	    this._callHook('beforeDestroy');
	    this._isBeingDestroyed = true;
	    var i;
	    // remove self from parent. only necessary
	    // if parent is not being destroyed as well.
	    var parent = this.$parent;
	    if (parent && !parent._isBeingDestroyed) {
	      parent.$children.$remove(this);
	      // unregister ref (remove: true)
	      this._updateRef(true);
	    }
	    // destroy all children.
	    i = this.$children.length;
	    while (i--) {
	      this.$children[i].$destroy();
	    }
	    // teardown props
	    if (this._propsUnlinkFn) {
	      this._propsUnlinkFn();
	    }
	    // teardown all directives. this also tearsdown all
	    // directive-owned watchers.
	    if (this._unlinkFn) {
	      this._unlinkFn();
	    }
	    i = this._watchers.length;
	    while (i--) {
	      this._watchers[i].teardown();
	    }
	    // remove reference to self on $el
	    if (this.$el) {
	      this.$el.__vue__ = null;
	    }

	    destroyReady = true;
	    cleanupIfPossible();
	  };

	  /**
	   * Clean up to ensure garbage collection.
	   * This is called after the leave transition if there
	   * is any.
	   */

	  Vue.prototype._cleanup = function () {
	    if (this._isDestroyed) {
	      return;
	    }
	    // remove self from owner fragment
	    // do it in cleanup so that we can call $destroy with
	    // defer right when a fragment is about to be removed.
	    if (this._frag) {
	      this._frag.children.$remove(this);
	    }
	    // remove reference from data ob
	    // frozen object may not have observer.
	    if (this._data && this._data.__ob__) {
	      this._data.__ob__.removeVm(this);
	    }
	    // Clean up references to private properties and other
	    // instances. preserve reference to _data so that proxy
	    // accessors still work. The only potential side effect
	    // here is that mutating the instance after it's destroyed
	    // may affect the state of other components that are still
	    // observing the same object, but that seems to be a
	    // reasonable responsibility for the user rather than
	    // always throwing an error on them.
	    this.$el = this.$parent = this.$root = this.$children = this._watchers = this._context = this._scope = this._directives = null;
	    // call the last hook...
	    this._isDestroyed = true;
	    this._callHook('destroyed');
	    // turn off all instance listeners.
	    this.$off();
	  };
	}

	function miscMixin (Vue) {
	  /**
	   * Apply a list of filter (descriptors) to a value.
	   * Using plain for loops here because this will be called in
	   * the getter of any watcher with filters so it is very
	   * performance sensitive.
	   *
	   * @param {*} value
	   * @param {*} [oldValue]
	   * @param {Array} filters
	   * @param {Boolean} write
	   * @return {*}
	   */

	  Vue.prototype._applyFilters = function (value, oldValue, filters, write) {
	    var filter, fn, args, arg, offset, i, l, j, k;
	    for (i = 0, l = filters.length; i < l; i++) {
	      filter = filters[write ? l - i - 1 : i];
	      fn = resolveAsset(this.$options, 'filters', filter.name, true);
	      if (!fn) continue;
	      fn = write ? fn.write : fn.read || fn;
	      if (typeof fn !== 'function') continue;
	      args = write ? [value, oldValue] : [value];
	      offset = write ? 2 : 1;
	      if (filter.args) {
	        for (j = 0, k = filter.args.length; j < k; j++) {
	          arg = filter.args[j];
	          args[j + offset] = arg.dynamic ? this.$get(arg.value) : arg.value;
	        }
	      }
	      value = fn.apply(this, args);
	    }
	    return value;
	  };

	  /**
	   * Resolve a component, depending on whether the component
	   * is defined normally or using an async factory function.
	   * Resolves synchronously if already resolved, otherwise
	   * resolves asynchronously and caches the resolved
	   * constructor on the factory.
	   *
	   * @param {String|Function} value
	   * @param {Function} cb
	   */

	  Vue.prototype._resolveComponent = function (value, cb) {
	    var factory;
	    if (typeof value === 'function') {
	      factory = value;
	    } else {
	      factory = resolveAsset(this.$options, 'components', value, true);
	    }
	    /* istanbul ignore if */
	    if (!factory) {
	      return;
	    }
	    // async component factory
	    if (!factory.options) {
	      if (factory.resolved) {
	        // cached
	        cb(factory.resolved);
	      } else if (factory.requested) {
	        // pool callbacks
	        factory.pendingCallbacks.push(cb);
	      } else {
	        factory.requested = true;
	        var cbs = factory.pendingCallbacks = [cb];
	        factory.call(this, function resolve(res) {
	          if (isPlainObject(res)) {
	            res = Vue.extend(res);
	          }
	          // cache resolved
	          factory.resolved = res;
	          // invoke callbacks
	          for (var i = 0, l = cbs.length; i < l; i++) {
	            cbs[i](res);
	          }
	        }, function reject(reason) {
	          process.env.NODE_ENV !== 'production' && warn('Failed to resolve async component' + (typeof value === 'string' ? ': ' + value : '') + '. ' + (reason ? '\nReason: ' + reason : ''));
	        });
	      }
	    } else {
	      // normal component
	      cb(factory);
	    }
	  };
	}

	var filterRE$1 = /[^|]\|[^|]/;

	function dataAPI (Vue) {
	  /**
	   * Get the value from an expression on this vm.
	   *
	   * @param {String} exp
	   * @param {Boolean} [asStatement]
	   * @return {*}
	   */

	  Vue.prototype.$get = function (exp, asStatement) {
	    var res = parseExpression(exp);
	    if (res) {
	      if (asStatement) {
	        var self = this;
	        return function statementHandler() {
	          self.$arguments = toArray(arguments);
	          var result = res.get.call(self, self);
	          self.$arguments = null;
	          return result;
	        };
	      } else {
	        try {
	          return res.get.call(this, this);
	        } catch (e) {}
	      }
	    }
	  };

	  /**
	   * Set the value from an expression on this vm.
	   * The expression must be a valid left-hand
	   * expression in an assignment.
	   *
	   * @param {String} exp
	   * @param {*} val
	   */

	  Vue.prototype.$set = function (exp, val) {
	    var res = parseExpression(exp, true);
	    if (res && res.set) {
	      res.set.call(this, this, val);
	    }
	  };

	  /**
	   * Delete a property on the VM
	   *
	   * @param {String} key
	   */

	  Vue.prototype.$delete = function (key) {
	    del(this._data, key);
	  };

	  /**
	   * Watch an expression, trigger callback when its
	   * value changes.
	   *
	   * @param {String|Function} expOrFn
	   * @param {Function} cb
	   * @param {Object} [options]
	   *                 - {Boolean} deep
	   *                 - {Boolean} immediate
	   * @return {Function} - unwatchFn
	   */

	  Vue.prototype.$watch = function (expOrFn, cb, options) {
	    var vm = this;
	    var parsed;
	    if (typeof expOrFn === 'string') {
	      parsed = parseDirective(expOrFn);
	      expOrFn = parsed.expression;
	    }
	    var watcher = new Watcher(vm, expOrFn, cb, {
	      deep: options && options.deep,
	      sync: options && options.sync,
	      filters: parsed && parsed.filters,
	      user: !options || options.user !== false
	    });
	    if (options && options.immediate) {
	      cb.call(vm, watcher.value);
	    }
	    return function unwatchFn() {
	      watcher.teardown();
	    };
	  };

	  /**
	   * Evaluate a text directive, including filters.
	   *
	   * @param {String} text
	   * @param {Boolean} [asStatement]
	   * @return {String}
	   */

	  Vue.prototype.$eval = function (text, asStatement) {
	    // check for filters.
	    if (filterRE$1.test(text)) {
	      var dir = parseDirective(text);
	      // the filter regex check might give false positive
	      // for pipes inside strings, so it's possible that
	      // we don't get any filters here
	      var val = this.$get(dir.expression, asStatement);
	      return dir.filters ? this._applyFilters(val, null, dir.filters) : val;
	    } else {
	      // no filter
	      return this.$get(text, asStatement);
	    }
	  };

	  /**
	   * Interpolate a piece of template text.
	   *
	   * @param {String} text
	   * @return {String}
	   */

	  Vue.prototype.$interpolate = function (text) {
	    var tokens = parseText(text);
	    var vm = this;
	    if (tokens) {
	      if (tokens.length === 1) {
	        return vm.$eval(tokens[0].value) + '';
	      } else {
	        return tokens.map(function (token) {
	          return token.tag ? vm.$eval(token.value) : token.value;
	        }).join('');
	      }
	    } else {
	      return text;
	    }
	  };

	  /**
	   * Log instance data as a plain JS object
	   * so that it is easier to inspect in console.
	   * This method assumes console is available.
	   *
	   * @param {String} [path]
	   */

	  Vue.prototype.$log = function (path) {
	    var data = path ? getPath(this._data, path) : this._data;
	    if (data) {
	      data = clean(data);
	    }
	    // include computed fields
	    if (!path) {
	      var key;
	      for (key in this.$options.computed) {
	        data[key] = clean(this[key]);
	      }
	      if (this._props) {
	        for (key in this._props) {
	          data[key] = clean(this[key]);
	        }
	      }
	    }
	    console.log(data);
	  };

	  /**
	   * "clean" a getter/setter converted object into a plain
	   * object copy.
	   *
	   * @param {Object} - obj
	   * @return {Object}
	   */

	  function clean(obj) {
	    return JSON.parse(JSON.stringify(obj));
	  }
	}

	function domAPI (Vue) {
	  /**
	   * Convenience on-instance nextTick. The callback is
	   * auto-bound to the instance, and this avoids component
	   * modules having to rely on the global Vue.
	   *
	   * @param {Function} fn
	   */

	  Vue.prototype.$nextTick = function (fn) {
	    nextTick(fn, this);
	  };

	  /**
	   * Append instance to target
	   *
	   * @param {Node} target
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition] - defaults to true
	   */

	  Vue.prototype.$appendTo = function (target, cb, withTransition) {
	    return insert(this, target, cb, withTransition, append, appendWithTransition);
	  };

	  /**
	   * Prepend instance to target
	   *
	   * @param {Node} target
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition] - defaults to true
	   */

	  Vue.prototype.$prependTo = function (target, cb, withTransition) {
	    target = query(target);
	    if (target.hasChildNodes()) {
	      this.$before(target.firstChild, cb, withTransition);
	    } else {
	      this.$appendTo(target, cb, withTransition);
	    }
	    return this;
	  };

	  /**
	   * Insert instance before target
	   *
	   * @param {Node} target
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition] - defaults to true
	   */

	  Vue.prototype.$before = function (target, cb, withTransition) {
	    return insert(this, target, cb, withTransition, beforeWithCb, beforeWithTransition);
	  };

	  /**
	   * Insert instance after target
	   *
	   * @param {Node} target
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition] - defaults to true
	   */

	  Vue.prototype.$after = function (target, cb, withTransition) {
	    target = query(target);
	    if (target.nextSibling) {
	      this.$before(target.nextSibling, cb, withTransition);
	    } else {
	      this.$appendTo(target.parentNode, cb, withTransition);
	    }
	    return this;
	  };

	  /**
	   * Remove instance from DOM
	   *
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition] - defaults to true
	   */

	  Vue.prototype.$remove = function (cb, withTransition) {
	    if (!this.$el.parentNode) {
	      return cb && cb();
	    }
	    var inDocument = this._isAttached && inDoc(this.$el);
	    // if we are not in document, no need to check
	    // for transitions
	    if (!inDocument) withTransition = false;
	    var self = this;
	    var realCb = function realCb() {
	      if (inDocument) self._callHook('detached');
	      if (cb) cb();
	    };
	    if (this._isFragment) {
	      removeNodeRange(this._fragmentStart, this._fragmentEnd, this, this._fragment, realCb);
	    } else {
	      var op = withTransition === false ? removeWithCb : removeWithTransition;
	      op(this.$el, this, realCb);
	    }
	    return this;
	  };

	  /**
	   * Shared DOM insertion function.
	   *
	   * @param {Vue} vm
	   * @param {Element} target
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition]
	   * @param {Function} op1 - op for non-transition insert
	   * @param {Function} op2 - op for transition insert
	   * @return vm
	   */

	  function insert(vm, target, cb, withTransition, op1, op2) {
	    target = query(target);
	    var targetIsDetached = !inDoc(target);
	    var op = withTransition === false || targetIsDetached ? op1 : op2;
	    var shouldCallHook = !targetIsDetached && !vm._isAttached && !inDoc(vm.$el);
	    if (vm._isFragment) {
	      mapNodeRange(vm._fragmentStart, vm._fragmentEnd, function (node) {
	        op(node, target, vm);
	      });
	      cb && cb();
	    } else {
	      op(vm.$el, target, vm, cb);
	    }
	    if (shouldCallHook) {
	      vm._callHook('attached');
	    }
	    return vm;
	  }

	  /**
	   * Check for selectors
	   *
	   * @param {String|Element} el
	   */

	  function query(el) {
	    return typeof el === 'string' ? document.querySelector(el) : el;
	  }

	  /**
	   * Append operation that takes a callback.
	   *
	   * @param {Node} el
	   * @param {Node} target
	   * @param {Vue} vm - unused
	   * @param {Function} [cb]
	   */

	  function append(el, target, vm, cb) {
	    target.appendChild(el);
	    if (cb) cb();
	  }

	  /**
	   * InsertBefore operation that takes a callback.
	   *
	   * @param {Node} el
	   * @param {Node} target
	   * @param {Vue} vm - unused
	   * @param {Function} [cb]
	   */

	  function beforeWithCb(el, target, vm, cb) {
	    before(el, target);
	    if (cb) cb();
	  }

	  /**
	   * Remove operation that takes a callback.
	   *
	   * @param {Node} el
	   * @param {Vue} vm - unused
	   * @param {Function} [cb]
	   */

	  function removeWithCb(el, vm, cb) {
	    remove(el);
	    if (cb) cb();
	  }
	}

	function eventsAPI (Vue) {
	  /**
	   * Listen on the given `event` with `fn`.
	   *
	   * @param {String} event
	   * @param {Function} fn
	   */

	  Vue.prototype.$on = function (event, fn) {
	    (this._events[event] || (this._events[event] = [])).push(fn);
	    modifyListenerCount(this, event, 1);
	    return this;
	  };

	  /**
	   * Adds an `event` listener that will be invoked a single
	   * time then automatically removed.
	   *
	   * @param {String} event
	   * @param {Function} fn
	   */

	  Vue.prototype.$once = function (event, fn) {
	    var self = this;
	    function on() {
	      self.$off(event, on);
	      fn.apply(this, arguments);
	    }
	    on.fn = fn;
	    this.$on(event, on);
	    return this;
	  };

	  /**
	   * Remove the given callback for `event` or all
	   * registered callbacks.
	   *
	   * @param {String} event
	   * @param {Function} fn
	   */

	  Vue.prototype.$off = function (event, fn) {
	    var cbs;
	    // all
	    if (!arguments.length) {
	      if (this.$parent) {
	        for (event in this._events) {
	          cbs = this._events[event];
	          if (cbs) {
	            modifyListenerCount(this, event, -cbs.length);
	          }
	        }
	      }
	      this._events = {};
	      return this;
	    }
	    // specific event
	    cbs = this._events[event];
	    if (!cbs) {
	      return this;
	    }
	    if (arguments.length === 1) {
	      modifyListenerCount(this, event, -cbs.length);
	      this._events[event] = null;
	      return this;
	    }
	    // specific handler
	    var cb;
	    var i = cbs.length;
	    while (i--) {
	      cb = cbs[i];
	      if (cb === fn || cb.fn === fn) {
	        modifyListenerCount(this, event, -1);
	        cbs.splice(i, 1);
	        break;
	      }
	    }
	    return this;
	  };

	  /**
	   * Trigger an event on self.
	   *
	   * @param {String|Object} event
	   * @return {Boolean} shouldPropagate
	   */

	  Vue.prototype.$emit = function (event) {
	    var isSource = typeof event === 'string';
	    event = isSource ? event : event.name;
	    var cbs = this._events[event];
	    var shouldPropagate = isSource || !cbs;
	    if (cbs) {
	      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
	      // this is a somewhat hacky solution to the question raised
	      // in #2102: for an inline component listener like <comp @test="doThis">,
	      // the propagation handling is somewhat broken. Therefore we
	      // need to treat these inline callbacks differently.
	      var hasParentCbs = isSource && cbs.some(function (cb) {
	        return cb._fromParent;
	      });
	      if (hasParentCbs) {
	        shouldPropagate = false;
	      }
	      var args = toArray(arguments, 1);
	      for (var i = 0, l = cbs.length; i < l; i++) {
	        var cb = cbs[i];
	        var res = cb.apply(this, args);
	        if (res === true && (!hasParentCbs || cb._fromParent)) {
	          shouldPropagate = true;
	        }
	      }
	    }
	    return shouldPropagate;
	  };

	  /**
	   * Recursively broadcast an event to all children instances.
	   *
	   * @param {String|Object} event
	   * @param {...*} additional arguments
	   */

	  Vue.prototype.$broadcast = function (event) {
	    var isSource = typeof event === 'string';
	    event = isSource ? event : event.name;
	    // if no child has registered for this event,
	    // then there's no need to broadcast.
	    if (!this._eventsCount[event]) return;
	    var children = this.$children;
	    var args = toArray(arguments);
	    if (isSource) {
	      // use object event to indicate non-source emit
	      // on children
	      args[0] = { name: event, source: this };
	    }
	    for (var i = 0, l = children.length; i < l; i++) {
	      var child = children[i];
	      var shouldPropagate = child.$emit.apply(child, args);
	      if (shouldPropagate) {
	        child.$broadcast.apply(child, args);
	      }
	    }
	    return this;
	  };

	  /**
	   * Recursively propagate an event up the parent chain.
	   *
	   * @param {String} event
	   * @param {...*} additional arguments
	   */

	  Vue.prototype.$dispatch = function (event) {
	    var shouldPropagate = this.$emit.apply(this, arguments);
	    if (!shouldPropagate) return;
	    var parent = this.$parent;
	    var args = toArray(arguments);
	    // use object event to indicate non-source emit
	    // on parents
	    args[0] = { name: event, source: this };
	    while (parent) {
	      shouldPropagate = parent.$emit.apply(parent, args);
	      parent = shouldPropagate ? parent.$parent : null;
	    }
	    return this;
	  };

	  /**
	   * Modify the listener counts on all parents.
	   * This bookkeeping allows $broadcast to return early when
	   * no child has listened to a certain event.
	   *
	   * @param {Vue} vm
	   * @param {String} event
	   * @param {Number} count
	   */

	  var hookRE = /^hook:/;
	  function modifyListenerCount(vm, event, count) {
	    var parent = vm.$parent;
	    // hooks do not get broadcasted so no need
	    // to do bookkeeping for them
	    if (!parent || !count || hookRE.test(event)) return;
	    while (parent) {
	      parent._eventsCount[event] = (parent._eventsCount[event] || 0) + count;
	      parent = parent.$parent;
	    }
	  }
	}

	function lifecycleAPI (Vue) {
	  /**
	   * Set instance target element and kick off the compilation
	   * process. The passed in `el` can be a selector string, an
	   * existing Element, or a DocumentFragment (for block
	   * instances).
	   *
	   * @param {Element|DocumentFragment|string} el
	   * @public
	   */

	  Vue.prototype.$mount = function (el) {
	    if (this._isCompiled) {
	      process.env.NODE_ENV !== 'production' && warn('$mount() should be called only once.', this);
	      return;
	    }
	    el = query(el);
	    if (!el) {
	      el = document.createElement('div');
	    }
	    this._compile(el);
	    this._initDOMHooks();
	    if (inDoc(this.$el)) {
	      this._callHook('attached');
	      ready.call(this);
	    } else {
	      this.$once('hook:attached', ready);
	    }
	    return this;
	  };

	  /**
	   * Mark an instance as ready.
	   */

	  function ready() {
	    this._isAttached = true;
	    this._isReady = true;
	    this._callHook('ready');
	  }

	  /**
	   * Teardown the instance, simply delegate to the internal
	   * _destroy.
	   *
	   * @param {Boolean} remove
	   * @param {Boolean} deferCleanup
	   */

	  Vue.prototype.$destroy = function (remove, deferCleanup) {
	    this._destroy(remove, deferCleanup);
	  };

	  /**
	   * Partially compile a piece of DOM and return a
	   * decompile function.
	   *
	   * @param {Element|DocumentFragment} el
	   * @param {Vue} [host]
	   * @param {Object} [scope]
	   * @param {Fragment} [frag]
	   * @return {Function}
	   */

	  Vue.prototype.$compile = function (el, host, scope, frag) {
	    return compile(el, this.$options, true)(this, el, host, scope, frag);
	  };
	}

	/**
	 * The exposed Vue constructor.
	 *
	 * API conventions:
	 * - public API methods/properties are prefixed with `$`
	 * - internal methods/properties are prefixed with `_`
	 * - non-prefixed properties are assumed to be proxied user
	 *   data.
	 *
	 * @constructor
	 * @param {Object} [options]
	 * @public
	 */

	function Vue(options) {
	  this._init(options);
	}

	// install internals
	initMixin(Vue);
	stateMixin(Vue);
	eventsMixin(Vue);
	lifecycleMixin(Vue);
	miscMixin(Vue);

	// install instance APIs
	dataAPI(Vue);
	domAPI(Vue);
	eventsAPI(Vue);
	lifecycleAPI(Vue);

	var slot = {

	  priority: SLOT,
	  params: ['name'],

	  bind: function bind() {
	    // this was resolved during component transclusion
	    var name = this.params.name || 'default';
	    var content = this.vm._slotContents && this.vm._slotContents[name];
	    if (!content || !content.hasChildNodes()) {
	      this.fallback();
	    } else {
	      this.compile(content.cloneNode(true), this.vm._context, this.vm);
	    }
	  },

	  compile: function compile(content, context, host) {
	    if (content && context) {
	      if (this.el.hasChildNodes() && content.childNodes.length === 1 && content.childNodes[0].nodeType === 1 && content.childNodes[0].hasAttribute('v-if')) {
	        // if the inserted slot has v-if
	        // inject fallback content as the v-else
	        var elseBlock = document.createElement('template');
	        elseBlock.setAttribute('v-else', '');
	        elseBlock.innerHTML = this.el.innerHTML;
	        // the else block should be compiled in child scope
	        elseBlock._context = this.vm;
	        content.appendChild(elseBlock);
	      }
	      var scope = host ? host._scope : this._scope;
	      this.unlink = context.$compile(content, host, scope, this._frag);
	    }
	    if (content) {
	      replace(this.el, content);
	    } else {
	      remove(this.el);
	    }
	  },

	  fallback: function fallback() {
	    this.compile(extractContent(this.el, true), this.vm);
	  },

	  unbind: function unbind() {
	    if (this.unlink) {
	      this.unlink();
	    }
	  }
	};

	var partial = {

	  priority: PARTIAL,

	  params: ['name'],

	  // watch changes to name for dynamic partials
	  paramWatchers: {
	    name: function name(value) {
	      vIf.remove.call(this);
	      if (value) {
	        this.insert(value);
	      }
	    }
	  },

	  bind: function bind() {
	    this.anchor = createAnchor('v-partial');
	    replace(this.el, this.anchor);
	    this.insert(this.params.name);
	  },

	  insert: function insert(id) {
	    var partial = resolveAsset(this.vm.$options, 'partials', id, true);
	    if (partial) {
	      this.factory = new FragmentFactory(this.vm, partial);
	      vIf.insert.call(this);
	    }
	  },

	  unbind: function unbind() {
	    if (this.frag) {
	      this.frag.destroy();
	    }
	  }
	};

	var elementDirectives = {
	  slot: slot,
	  partial: partial
	};

	var convertArray = vFor._postProcess;

	/**
	 * Limit filter for arrays
	 *
	 * @param {Number} n
	 * @param {Number} offset (Decimal expected)
	 */

	function limitBy(arr, n, offset) {
	  offset = offset ? parseInt(offset, 10) : 0;
	  n = toNumber(n);
	  return typeof n === 'number' ? arr.slice(offset, offset + n) : arr;
	}

	/**
	 * Filter filter for arrays
	 *
	 * @param {String} search
	 * @param {String} [delimiter]
	 * @param {String} ...dataKeys
	 */

	function filterBy(arr, search, delimiter) {
	  arr = convertArray(arr);
	  if (search == null) {
	    return arr;
	  }
	  if (typeof search === 'function') {
	    return arr.filter(search);
	  }
	  // cast to lowercase string
	  search = ('' + search).toLowerCase();
	  // allow optional `in` delimiter
	  // because why not
	  var n = delimiter === 'in' ? 3 : 2;
	  // extract and flatten keys
	  var keys = Array.prototype.concat.apply([], toArray(arguments, n));
	  var res = [];
	  var item, key, val, j;
	  for (var i = 0, l = arr.length; i < l; i++) {
	    item = arr[i];
	    val = item && item.$value || item;
	    j = keys.length;
	    if (j) {
	      while (j--) {
	        key = keys[j];
	        if (key === '$key' && contains(item.$key, search) || contains(getPath(val, key), search)) {
	          res.push(item);
	          break;
	        }
	      }
	    } else if (contains(item, search)) {
	      res.push(item);
	    }
	  }
	  return res;
	}

	/**
	 * Filter filter for arrays
	 *
	 * @param {String|Array<String>|Function} ...sortKeys
	 * @param {Number} [order]
	 */

	function orderBy(arr) {
	  var comparator = null;
	  var sortKeys = undefined;
	  arr = convertArray(arr);

	  // determine order (last argument)
	  var args = toArray(arguments, 1);
	  var order = args[args.length - 1];
	  if (typeof order === 'number') {
	    order = order < 0 ? -1 : 1;
	    args = args.length > 1 ? args.slice(0, -1) : args;
	  } else {
	    order = 1;
	  }

	  // determine sortKeys & comparator
	  var firstArg = args[0];
	  if (!firstArg) {
	    return arr;
	  } else if (typeof firstArg === 'function') {
	    // custom comparator
	    comparator = function (a, b) {
	      return firstArg(a, b) * order;
	    };
	  } else {
	    // string keys. flatten first
	    sortKeys = Array.prototype.concat.apply([], args);
	    comparator = function (a, b, i) {
	      i = i || 0;
	      return i >= sortKeys.length - 1 ? baseCompare(a, b, i) : baseCompare(a, b, i) || comparator(a, b, i + 1);
	    };
	  }

	  function baseCompare(a, b, sortKeyIndex) {
	    var sortKey = sortKeys[sortKeyIndex];
	    if (sortKey) {
	      if (sortKey !== '$key') {
	        if (isObject(a) && '$value' in a) a = a.$value;
	        if (isObject(b) && '$value' in b) b = b.$value;
	      }
	      a = isObject(a) ? getPath(a, sortKey) : a;
	      b = isObject(b) ? getPath(b, sortKey) : b;
	    }
	    return a === b ? 0 : a > b ? order : -order;
	  }

	  // sort on a copy to avoid mutating original array
	  return arr.slice().sort(comparator);
	}

	/**
	 * String contain helper
	 *
	 * @param {*} val
	 * @param {String} search
	 */

	function contains(val, search) {
	  var i;
	  if (isPlainObject(val)) {
	    var keys = Object.keys(val);
	    i = keys.length;
	    while (i--) {
	      if (contains(val[keys[i]], search)) {
	        return true;
	      }
	    }
	  } else if (isArray(val)) {
	    i = val.length;
	    while (i--) {
	      if (contains(val[i], search)) {
	        return true;
	      }
	    }
	  } else if (val != null) {
	    return val.toString().toLowerCase().indexOf(search) > -1;
	  }
	}

	var digitsRE = /(\d{3})(?=\d)/g;

	// asset collections must be a plain object.
	var filters = {

	  orderBy: orderBy,
	  filterBy: filterBy,
	  limitBy: limitBy,

	  /**
	   * Stringify value.
	   *
	   * @param {Number} indent
	   */

	  json: {
	    read: function read(value, indent) {
	      return typeof value === 'string' ? value : JSON.stringify(value, null, Number(indent) || 2);
	    },
	    write: function write(value) {
	      try {
	        return JSON.parse(value);
	      } catch (e) {
	        return value;
	      }
	    }
	  },

	  /**
	   * 'abc' => 'Abc'
	   */

	  capitalize: function capitalize(value) {
	    if (!value && value !== 0) return '';
	    value = value.toString();
	    return value.charAt(0).toUpperCase() + value.slice(1);
	  },

	  /**
	   * 'abc' => 'ABC'
	   */

	  uppercase: function uppercase(value) {
	    return value || value === 0 ? value.toString().toUpperCase() : '';
	  },

	  /**
	   * 'AbC' => 'abc'
	   */

	  lowercase: function lowercase(value) {
	    return value || value === 0 ? value.toString().toLowerCase() : '';
	  },

	  /**
	   * 12345 => $12,345.00
	   *
	   * @param {String} sign
	   * @param {Number} decimals Decimal places
	   */

	  currency: function currency(value, _currency, decimals) {
	    value = parseFloat(value);
	    if (!isFinite(value) || !value && value !== 0) return '';
	    _currency = _currency != null ? _currency : '$';
	    decimals = decimals != null ? decimals : 2;
	    var stringified = Math.abs(value).toFixed(decimals);
	    var _int = decimals ? stringified.slice(0, -1 - decimals) : stringified;
	    var i = _int.length % 3;
	    var head = i > 0 ? _int.slice(0, i) + (_int.length > 3 ? ',' : '') : '';
	    var _float = decimals ? stringified.slice(-1 - decimals) : '';
	    var sign = value < 0 ? '-' : '';
	    return sign + _currency + head + _int.slice(i).replace(digitsRE, '$1,') + _float;
	  },

	  /**
	   * 'item' => 'items'
	   *
	   * @params
	   *  an array of strings corresponding to
	   *  the single, double, triple ... forms of the word to
	   *  be pluralized. When the number to be pluralized
	   *  exceeds the length of the args, it will use the last
	   *  entry in the array.
	   *
	   *  e.g. ['single', 'double', 'triple', 'multiple']
	   */

	  pluralize: function pluralize(value) {
	    var args = toArray(arguments, 1);
	    return args.length > 1 ? args[value % 10 - 1] || args[args.length - 1] : args[0] + (value === 1 ? '' : 's');
	  },

	  /**
	   * Debounce a handler function.
	   *
	   * @param {Function} handler
	   * @param {Number} delay = 300
	   * @return {Function}
	   */

	  debounce: function debounce(handler, delay) {
	    if (!handler) return;
	    if (!delay) {
	      delay = 300;
	    }
	    return _debounce(handler, delay);
	  }
	};

	function installGlobalAPI (Vue) {
	  /**
	   * Vue and every constructor that extends Vue has an
	   * associated options object, which can be accessed during
	   * compilation steps as `this.constructor.options`.
	   *
	   * These can be seen as the default options of every
	   * Vue instance.
	   */

	  Vue.options = {
	    directives: directives,
	    elementDirectives: elementDirectives,
	    filters: filters,
	    transitions: {},
	    components: {},
	    partials: {},
	    replace: true
	  };

	  /**
	   * Expose useful internals
	   */

	  Vue.util = util;
	  Vue.config = config;
	  Vue.set = set;
	  Vue['delete'] = del;
	  Vue.nextTick = nextTick;

	  /**
	   * The following are exposed for advanced usage / plugins
	   */

	  Vue.compiler = compiler;
	  Vue.FragmentFactory = FragmentFactory;
	  Vue.internalDirectives = internalDirectives;
	  Vue.parsers = {
	    path: path,
	    text: text,
	    template: template,
	    directive: directive,
	    expression: expression
	  };

	  /**
	   * Each instance constructor, including Vue, has a unique
	   * cid. This enables us to create wrapped "child
	   * constructors" for prototypal inheritance and cache them.
	   */

	  Vue.cid = 0;
	  var cid = 1;

	  /**
	   * Class inheritance
	   *
	   * @param {Object} extendOptions
	   */

	  Vue.extend = function (extendOptions) {
	    extendOptions = extendOptions || {};
	    var Super = this;
	    var isFirstExtend = Super.cid === 0;
	    if (isFirstExtend && extendOptions._Ctor) {
	      return extendOptions._Ctor;
	    }
	    var name = extendOptions.name || Super.options.name;
	    if (process.env.NODE_ENV !== 'production') {
	      if (!/^[a-zA-Z][\w-]*$/.test(name)) {
	        warn('Invalid component name: "' + name + '". Component names ' + 'can only contain alphanumeric characaters and the hyphen.');
	        name = null;
	      }
	    }
	    var Sub = createClass(name || 'VueComponent');
	    Sub.prototype = Object.create(Super.prototype);
	    Sub.prototype.constructor = Sub;
	    Sub.cid = cid++;
	    Sub.options = mergeOptions(Super.options, extendOptions);
	    Sub['super'] = Super;
	    // allow further extension
	    Sub.extend = Super.extend;
	    // create asset registers, so extended classes
	    // can have their private assets too.
	    config._assetTypes.forEach(function (type) {
	      Sub[type] = Super[type];
	    });
	    // enable recursive self-lookup
	    if (name) {
	      Sub.options.components[name] = Sub;
	    }
	    // cache constructor
	    if (isFirstExtend) {
	      extendOptions._Ctor = Sub;
	    }
	    return Sub;
	  };

	  /**
	   * A function that returns a sub-class constructor with the
	   * given name. This gives us much nicer output when
	   * logging instances in the console.
	   *
	   * @param {String} name
	   * @return {Function}
	   */

	  function createClass(name) {
	    /* eslint-disable no-new-func */
	    return new Function('return function ' + classify(name) + ' (options) { this._init(options) }')();
	    /* eslint-enable no-new-func */
	  }

	  /**
	   * Plugin system
	   *
	   * @param {Object} plugin
	   */

	  Vue.use = function (plugin) {
	    /* istanbul ignore if */
	    if (plugin.installed) {
	      return;
	    }
	    // additional parameters
	    var args = toArray(arguments, 1);
	    args.unshift(this);
	    if (typeof plugin.install === 'function') {
	      plugin.install.apply(plugin, args);
	    } else {
	      plugin.apply(null, args);
	    }
	    plugin.installed = true;
	    return this;
	  };

	  /**
	   * Apply a global mixin by merging it into the default
	   * options.
	   */

	  Vue.mixin = function (mixin) {
	    Vue.options = mergeOptions(Vue.options, mixin);
	  };

	  /**
	   * Create asset registration methods with the following
	   * signature:
	   *
	   * @param {String} id
	   * @param {*} definition
	   */

	  config._assetTypes.forEach(function (type) {
	    Vue[type] = function (id, definition) {
	      if (!definition) {
	        return this.options[type + 's'][id];
	      } else {
	        /* istanbul ignore if */
	        if (process.env.NODE_ENV !== 'production') {
	          if (type === 'component' && (commonTagRE.test(id) || reservedTagRE.test(id))) {
	            warn('Do not use built-in or reserved HTML elements as component ' + 'id: ' + id);
	          }
	        }
	        if (type === 'component' && isPlainObject(definition)) {
	          definition.name = id;
	          definition = Vue.extend(definition);
	        }
	        this.options[type + 's'][id] = definition;
	        return definition;
	      }
	    };
	  });

	  // expose internal transition API
	  extend(Vue.transition, transition);
	}

	installGlobalAPI(Vue);

	Vue.version = '1.0.24';

	// devtools global hook
	/* istanbul ignore next */
	setTimeout(function () {
	  if (config.devtools) {
	    if (devtools) {
	      devtools.emit('init', Vue);
	    } else if (process.env.NODE_ENV !== 'production' && inBrowser && /Chrome\/\d+/.test(window.navigator.userAgent)) {
	      console.log('Download the Vue Devtools for a better development experience:\n' + 'https://github.com/vuejs/vue-devtools');
	    }
	  }
	}, 0);

	module.exports = Vue;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(12)))

/***/ },
/* 12 */
/***/ function(module, exports) {

	// shim for using process in browser

	var process = module.exports = {};
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = setTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    clearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        setTimeout(drainQueue, 0);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 13 */
/***/ function(module, exports) {

	

/***/ }
/******/ ]);