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
	__webpack_require__(9);
	$ = __webpack_require__(11);
	Vue = __webpack_require__(12);
	__webpack_require__(14);

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
	exports.push([module.id, "@font-face {\n  font-family: 'Material Icons';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://example.com/MaterialIcons-Regular.eot);\n  /* For IE6-8 */\n  src: local(\"Material Icons\"), local(\"MaterialIcons-Regular\"), url(https://example.com/MaterialIcons-Regular.woff2) format(\"woff2\"), url(https://example.com/MaterialIcons-Regular.woff) format(\"woff\"), url(https://example.com/MaterialIcons-Regular.ttf) format(\"truetype\"); }\n\n.material-icons {\n  font-family: 'Material Icons';\n  font-weight: normal;\n  font-style: normal;\n  font-size: 140px;\n  /* Preferred icon size */\n  display: inline-block;\n  line-height: 1;\n  text-transform: none;\n  letter-spacing: normal;\n  word-wrap: normal;\n  white-space: nowrap;\n  direction: ltr;\n  /* Support for all WebKit browsers. */\n  -webkit-font-smoothing: antialiased;\n  /* Support for Safari and Chrome. */\n  text-rendering: optimizeLegibility;\n  /* Support for Firefox. */\n  -moz-osx-font-smoothing: grayscale;\n  /* Support for IE. */\n  font-feature-settings: 'liga';\n  color: #63c5ce; }\n\nbody, html {\n  width: 100%;\n  height: 100%;\n  margin: 0;\n  background: #000;\n  letter-spacing: 2px;\n  font-family: 'Noto Sans Japanese', sans-serif;\n  font-weight: 100;\n  color: #FFF;\n  -webkit-text-size-adjust: 100%;\n  min-width: 1024px;\n  -ms-overflow-x: hidden;\n  overflow-x: hidden; }\n\nbutton {\n  background: none;\n  border: none;\n  letter-spacing: 2px;\n  font-family: 'Noto Sans Japanese', sans-serif;\n  font-weight: 100;\n  outline: none; }\n\n.Contents {\n  width: 100%;\n  height: 100%;\n  position: relative; }\n\n.ContentsHeaderTopBorderCenter {\n  width: 150px;\n  height: 10px;\n  margin-bottom: 100px;\n  margin-left: calc(50% - 75px);\n  position: relative;\n  top: 80px; }\n\n.ContentsHeaderTopBorderLeft {\n  width: 100px;\n  height: 10px;\n  margin-bottom: 100px;\n  margin-left: 10%;\n  position: relative;\n  top: 80px; }\n\n.ContentsHeaderCenter {\n  width: 100%;\n  font-size: 60px;\n  text-align: center;\n  letter-spacing: 10px; }\n\n.ContentsHeaderLeft {\n  width: 80%;\n  margin-left: 10%;\n  font-size: 45px;\n  letter-spacing: 10px; }\n\n.ContentsTextCenter {\n  width: 80%;\n  margin-top: 100px;\n  margin-left: 10%;\n  text-align: center;\n  font-size: 30px;\n  line-height: 3; }\n\n.ContentsTextLeft {\n  width: 80%;\n  margin-top: 100px;\n  margin-left: 10%;\n  font-size: 30px;\n  line-height: 3; }\n\n#BackImg {\n  height: 100%;\n  position: fixed;\n  top: 0;\n  left: -400px; }\n\n/***Content1***/\n#Content1Logo {\n  width: 80%;\n  position: absolute;\n  bottom: 65%;\n  left: 10%; }\n\n#Content1HeaderSub {\n  width: 80%;\n  position: absolute;\n  top: 37%;\n  left: 10%;\n  font-size: 30px;\n  text-align: center; }\n\n#Content1Btn {\n  width: 500px;\n  height: 100px;\n  position: absolute;\n  top: 60%;\n  left: calc(50% - 250px);\n  font-size: 25px;\n  color: #FFF; }\n\n/***Content1***/\n/***Content2***/\n#Content2 {\n  height: auto; }\n\n/***Content2***/\n/***Content2***/\n#Content3 {\n  background: url(" + __webpack_require__(8) + ");\n  -webkit-background-size: cover;\n  -o-background-size: cover;\n  background-size: cover; }\n\n#Content3Shadow {\n  width: 100%;\n  height: auto;\n  background: rgba(0, 0, 0, 0.65); }\n\n/***Content2***/\n/***Content2***/\n#Content4 {\n  height: auto;\n  background: #FFF; }\n\n.Content4ItemBox {\n  width: 46%;\n  margin-left: calc((100% - 92%) / 3);\n  margin-bottom: 100px;\n  text-align: center;\n  float: left;\n  color: #000;\n  font-size: 30px; }\n\n.Content4ItemHeader {\n  font-size: 40px;\n  font-weight: 200; }\n\n/***Content2***/\n/***Content2***/\n#Content5 {\n  height: auto;\n  background: #000; }\n\n.Content4ItemBox {\n  width: 46%;\n  margin-left: calc((100% - 92%) / 3);\n  margin-bottom: 100px;\n  text-align: center;\n  float: left;\n  color: #000;\n  font-size: 30px; }\n\n.Content4ItemHeader {\n  font-size: 40px;\n  font-weight: 200; }\n\n/***Content2***/\n/***Content2***/\n#Content6 {\n  height: auto;\n  background: #fff;\n  color: #000;\n  font-weight: 200; }\n\n.Content6Q {\n  color: #63c5ce;\n  font-size: 50px;\n  font-weight: 100; }\n\n.Content6A {\n  color: #f7b5c4;\n  font-size: 50px;\n  font-weight: 100; }\n\n/***Content2***/\n/***Content2***/\n.Content7Img {\n  width: 45%;\n  margin-left: calc((100% - 90%) / 3); }\n\n/***Content2***/\n/***Content2***/\n#Content8 {\n  height: auto;\n  background: #FFF; }\n\n.Content8Inputs {\n  width: calc(100% - 20px);\n  height: 100px;\n  background: rgba(99, 197, 206, 0.4);\n  color: #000;\n  margin: 0;\n  margin-top: 50px;\n  margin-bottom: 50px;\n  padding-left: 10px;\n  padding-right: 10px;\n  border: none;\n  font-size: 25px;\n  letter-spacing: 3px; }\n\n#Content8TextArea {\n  width: calc(100% - 20px);\n  height: 500px;\n  background: rgba(99, 197, 206, 0.4);\n  color: #000;\n  margin: 0;\n  margin-top: 50px;\n  padding-left: 10px;\n  padding-right: 10px;\n  border: none;\n  font-size: 25px; }\n\n#Content8SendBtn {\n  width: 100%;\n  height: 100px;\n  margin-top: 50px;\n  margin-bottom: 50px;\n  font-size: 30px;\n  letter-spacing: 3px; }\n\n/***Content2***/\n", ""]);

	// exports


/***/ },
/* 7 */,
/* 8 */
/***/ function(module, exports) {

	module.exports = "data:image/jpg;base64,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"

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(10);
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
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, "/*\n#Sample{\n  @include gradient(#ff00ff, #ff00cc, vertical);\n}\n*/\n.ContentsHeaderTopBorderCenter {\n  background: #f7b5c4;\n  background: -moz-linear-gradient(left, #f7b5c4 0%, #63c5ce 100%);\n  background: -webkit-gradient(linear, left top, right top, color-stop(0%, #f7b5c4), color-stop(100%, #63c5ce));\n  background: -webkit-linear-gradient(left, #f7b5c4 0%, #63c5ce 100%);\n  background: -o-linear-gradient(left, #f7b5c4 0%, #63c5ce 100%);\n  background: -ms-linear-gradient(left, #f7b5c4 0%, #63c5ce 100%);\n  background: linear-gradient(to right, #f7b5c4 0%, #63c5ce 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='$start-color', endColorstr='$end-color',GradientType=1 ); }\n\n.ContentsHeaderTopBorderLeft {\n  background: #f7b5c4;\n  background: -moz-linear-gradient(left, #f7b5c4 0%, #63c5ce 100%);\n  background: -webkit-gradient(linear, left top, right top, color-stop(0%, #f7b5c4), color-stop(100%, #63c5ce));\n  background: -webkit-linear-gradient(left, #f7b5c4 0%, #63c5ce 100%);\n  background: -o-linear-gradient(left, #f7b5c4 0%, #63c5ce 100%);\n  background: -ms-linear-gradient(left, #f7b5c4 0%, #63c5ce 100%);\n  background: linear-gradient(to right, #f7b5c4 0%, #63c5ce 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='$start-color', endColorstr='$end-color',GradientType=1 ); }\n\n#Content1Btn {\n  background: #f7b5c4;\n  background: -moz-linear-gradient(left, #f7b5c4 0%, #63c5ce 100%);\n  background: -webkit-gradient(linear, left top, right top, color-stop(0%, #f7b5c4), color-stop(100%, #63c5ce));\n  background: -webkit-linear-gradient(left, #f7b5c4 0%, #63c5ce 100%);\n  background: -o-linear-gradient(left, #f7b5c4 0%, #63c5ce 100%);\n  background: -ms-linear-gradient(left, #f7b5c4 0%, #63c5ce 100%);\n  background: linear-gradient(to right, #f7b5c4 0%, #63c5ce 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='$start-color', endColorstr='$end-color',GradientType=1 ); }\n\n#Content8SendBtn {\n  background: #f7b5c4;\n  background: -moz-linear-gradient(left, #f7b5c4 0%, #63c5ce 100%);\n  background: -webkit-gradient(linear, left top, right top, color-stop(0%, #f7b5c4), color-stop(100%, #63c5ce));\n  background: -webkit-linear-gradient(left, #f7b5c4 0%, #63c5ce 100%);\n  background: -o-linear-gradient(left, #f7b5c4 0%, #63c5ce 100%);\n  background: -ms-linear-gradient(left, #f7b5c4 0%, #63c5ce 100%);\n  background: linear-gradient(to right, #f7b5c4 0%, #63c5ce 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='$start-color', endColorstr='$end-color',GradientType=1 ); }\n", ""]);

	// exports


/***/ },
/* 11 */
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
/* 12 */
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
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(13)))

/***/ },
/* 13 */
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
/* 14 */
/***/ function(module, exports) {

	

/***/ }
/******/ ]);