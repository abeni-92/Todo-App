/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `*, *::after, *::before {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n  color: #392c4e;\n  background-color: #2b6d8b;\n}\n\nh2 {\n  font-size: 2rem;\n  margin: 0;\n}\n\nh1 {\n  font-size: 4rem;\n  margin: 0;\n}\n\nbutton {\n  font-size: 1.2rem;\n  padding: 4px 6px;\n  border-radius: 4px;\n  border: 1px solid #96494b;\n  background-color: #c95759;\n  color: #89cff0;\n}\n\nbutton:hover {\n  background-color: transparent;\n  color: #f2f1f0;\n}\n\n.login-btn {\n  padding: 6px 14px;\n  color: #89cff0;\n  background-color: #2b6d8b;\n  border: 1px solid #2b6d8b;\n  border-radius: 4px;\n  box-shadow: 1px solid #2e7292;\n  cursor: pointer;\n}\n\n.login-btn:hover {\n  color: #c95759;\n  text-decoration: none;\n}\n\n.main {\n  padding: 80px 100px;\n  animation: 1s fadeIn ease-in;\n}\n\n.nav {\n  background-color: #c95759;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 20px;\n}\n\n.body {\n  position: relative;\n  display: flex;\n  align-items: flex-start;\n  background-color: rgb(99, 149, 192);\n  position: relative;\n}\n\n.sidebar {\n  padding: 20px;\n  width: 15vw;\n}\n\n#add-icon {\n  position: absolute;\n  left: 40px;\n  bottom: 20px;\n  font-size: 3rem;\n}\n\n.content {\n  padding: 20px 40px;\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  font-size: 1.2rem;\n  color: #89cff0;\n  border-left: 6px solid #2b6d8b;\n}\n\n.modal {\n  display: block; /* Hidden by default */\n  position: fixed; /* Stay in place */\n  z-index: 1; /* Sit on top */\n  left: 0;\n  top: 0;\n  width: 100%; /* Full width */\n  height: 100%; /* Full height */\n  overflow: auto; /* Enable scroll if needed */\n  background-color: rgb(0, 0, 0); /* Fallback color */\n  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */\n  backdrop-filter: blur(3px);\n}\n\n.modal-content {\n  position: relative;\n  color: #b1d5e6;\n  background-color: #2e7292;\n  margin: 20% auto; /* 15% from the top and centered */\n  padding: 20px;\n  border: 1px solid #888;\n  width: 500px; /* Could be more or less, depending on screen size */\n  display: flex;\n  flex-direction: column;\n  align-items: start;\n  justify-content: baseline;\n  border-radius: 10px;\n  animation: 0.3s fadeIn ease-in;\n}\n.modal-content i {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  font-size: 1.5rem;\n}\n.modal-content i:hover {\n  background-color: transparent;\n  color: #f0595b;\n}\n\n.show-modal {\n  display: block;\n}\n\n.row {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background-color: rgb(60, 110, 153);\n  padding: 10px;\n  margin: 10px 0;\n}\n\n.left {\n  display: flex;\n  align-items: baseline;\n  justify-content: start;\n  gap: 20px;\n}\n.left input[type=checkbox] {\n  transform: scale(1.2);\n}\n\n.right {\n  display: flex;\n  align-items: baseline;\n  justify-content: start;\n  gap: 20px;\n}\n\n.header {\n  color: #392c4e;\n  font-size: 2rem;\n  text-decoration: none;\n  background-color: #3fa6d6;\n  padding: 8px 16px;\n  border-radius: 4px;\n}\n\n.header:hover {\n  background-color: #268ebe;\n  color: #c95759;\n}\n\nul {\n  list-style: none;\n  margin: 0;\n  padding: 0px 10px;\n}\n\n#projects {\n  font-size: 2rem;\n}\n\na {\n  color: #914614;\n  text-decoration: none;\n  font-size: 1.6rem;\n}\n\na:visited {\n  color: #502f04;\n}\n\na:hover,\n.active {\n  color: #975c0d;\n  text-decoration: underline;\n}\n\n#add {\n  font-size: 3rem;\n  position: absolute;\n  bottom: 20px;\n  left: 50px;\n}\n\n.todo-modal {\n  display: none; /* Hidden by default */\n  position: fixed; /* Stay in place */\n  z-index: 1; /* Sit on top */\n  left: 0;\n  top: 0;\n  width: 100%; /* Full width */\n  height: 100%; /* Full height */\n  overflow: auto; /* Enable scroll if needed */\n  background-color: rgb(0, 0, 0); /* Fallback color */\n  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */\n  backdrop-filter: blur(3px);\n}\n\n.todo-modal-content {\n  position: relative;\n  color: #98c9e0;\n  background-color: #337797;\n  margin: 10% auto; /* 15% from the top and centered */\n  border: 1px solid #888;\n  width: 60%; /* Could be more or less, depending on screen size */\n  display: flex;\n  flex-direction: column;\n  align-items: start;\n  justify-content: baseline;\n  animation: 0.5s fadeIn ease-in;\n}\n\n.todo-header {\n  background-color: #12886a;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 20px;\n}\n.todo-header i {\n  font-size: 2rem;\n}\n.todo-header i:hover {\n  color: red;\n}\n\n.todo-content {\n  width: 100%;\n  padding: 20px;\n  display: flex;\n  align-items: start;\n  justify-content: space-around;\n  color: #98c9e0;\n}\n\n.todo-side {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n\n.todo-body {\n  animation: 0.3s fadeIn ease-in;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: baseline;\n  justify-content: baseline;\n  gap: 15px;\n  padding: 10px;\n  margin-left: 10px;\n  width: 100%;\n  height: 400px;\n  border-left: 6px solid #00a27a;\n}\n.todo-body input {\n  width: 100%;\n  padding: 10px;\n  outline: none;\n}\n.todo-body textarea {\n  padding: 10px;\n  width: 100%;\n}\n.todo-body select {\n  padding: 10px;\n  width: 50%;\n}\n\n.hidden {\n  display: none;\n}\n\n.add-btn-todo {\n  position: absolute;\n  bottom: 10px;\n  left: 10px;\n  background-color: #12886a;\n  color: #f1f2f3;\n  border: 1px solid #00a27a;\n  width: 30%;\n}\n\n.add-btn-todo:hover {\n  background-color: transparent;\n}\n\n.todo-show-modal {\n  display: block;\n}\n\n@keyframes fadeIn {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://js-todo/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://js-todo/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://js-todo/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://js-todo/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://js-todo/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://js-todo/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://js-todo/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://js-todo/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://js-todo/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://js-todo/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/helper.js":
/*!***********************!*\
  !*** ./src/helper.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createSideBarLink: () => (/* binding */ createSideBarLink),\n/* harmony export */   newElement: () => (/* binding */ newElement),\n/* harmony export */   newElementWithClass: () => (/* binding */ newElementWithClass)\n/* harmony export */ });\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\r\n\r\nfunction createSideBarLink(link, href) {\r\n\tconst li = newElement('li', '');\r\n\tconst a = newElement('a', link);\r\n\r\n\t// a.textContent = link;\r\n\ta.href = href;\r\n\ta.classList.add('link');\r\n\tli.append(a);\r\n\r\n\treturn li;\r\n}\r\n\r\nfunction newElement(tag, value) {\r\n\tconst elt = document.createElement(tag);\r\n\telt.textContent = value;\r\n\r\n\treturn elt;\r\n}\r\n\r\nfunction newElementWithClass(tag, classname){\r\n\tconst elt = document.createElement(tag);\r\n\telt.classList.add(...classname);\r\n\r\n\treturn elt\r\n}\r\n\r\n\n\n//# sourceURL=webpack://js-todo/./src/helper.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createBody: () => (/* binding */ createBody),\n/* harmony export */   createNav: () => (/* binding */ createNav),\n/* harmony export */   createTodo: () => (/* binding */ createTodo),\n/* harmony export */   detailsModal: () => (/* binding */ detailsModal)\n/* harmony export */ });\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helper */ \"./src/helper.js\");\n/* harmony import */ var _script__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./script */ \"./src/script.js\");\n\r\n\r\n\r\n\r\n\r\nfunction createNav() {\r\n\tconst nav = (0,_helper__WEBPACK_IMPORTED_MODULE_1__.newElementWithClass)('div', ['nav']);\r\n\tconst h1 = (0,_helper__WEBPACK_IMPORTED_MODULE_1__.newElement)('h1', 'TODO');\r\n\tconst login = (0,_helper__WEBPACK_IMPORTED_MODULE_1__.newElement)('a', 'Login');\r\n\tlogin.classList.add('login-btn');\r\n\r\n\tnav.append(h1, login);\r\n\r\n\treturn nav;\r\n}\r\n\r\nfunction createSideBar() {\r\n\tconst sideBar = (0,_helper__WEBPACK_IMPORTED_MODULE_1__.newElementWithClass)('div', ['sidebar']);\r\n\r\n\tconst ul = (0,_helper__WEBPACK_IMPORTED_MODULE_1__.newElement)('ul', '');\r\n\r\n\tconst home = (0,_helper__WEBPACK_IMPORTED_MODULE_1__.createSideBarLink)('Home', '#');\r\n\tconst today = (0,_helper__WEBPACK_IMPORTED_MODULE_1__.createSideBarLink)('Today', '#');\r\n\tconst week = (0,_helper__WEBPACK_IMPORTED_MODULE_1__.createSideBarLink)('Week', '#');\r\n\r\n\tconst projects = (0,_helper__WEBPACK_IMPORTED_MODULE_1__.newElement)('li', '');\r\n\tprojects.setAttribute(\"id\", \"projects\")\r\n\tconst span = (0,_helper__WEBPACK_IMPORTED_MODULE_1__.newElement)('span', 'Projects')\r\n\tprojects.append(span);\r\n\t\r\n\tconst ul2 = (0,_helper__WEBPACK_IMPORTED_MODULE_1__.newElement)('ul', '');\r\n\tconst gym = (0,_helper__WEBPACK_IMPORTED_MODULE_1__.createSideBarLink)('Gym', '#');\r\n\tconst study = (0,_helper__WEBPACK_IMPORTED_MODULE_1__.createSideBarLink)('Study', '#');\r\n\tul2.append(gym, study);\r\n\r\n\tconst notes = (0,_helper__WEBPACK_IMPORTED_MODULE_1__.createSideBarLink)('Notes', '#');\r\n\r\n\t// add button to add todolist\r\n\tconst add = (0,_helper__WEBPACK_IMPORTED_MODULE_1__.newElement)('li', '');\r\n\tconst a = (0,_helper__WEBPACK_IMPORTED_MODULE_1__.newElement)('a','');\r\n\tconst i = (0,_helper__WEBPACK_IMPORTED_MODULE_1__.newElementWithClass)('i', ['fa-circle-plus', 'fa-solid']);\r\n\t\r\n\ti.setAttribute(\"id\", \"add-icon\");\r\n\ta.append(i);\r\n\tadd.append(a);\r\n\r\n\t// opens modal to add Todo\r\n\tadd.addEventListener(\"click\", _script__WEBPACK_IMPORTED_MODULE_2__.addTodo);\r\n\r\n\tul.append(home, today, week, projects, ul2, notes, add);\r\n\tsideBar.append(ul);\r\n\r\n\treturn sideBar;\r\n} \r\n\r\nfunction createContent(){\r\n\tconst content = (0,_helper__WEBPACK_IMPORTED_MODULE_1__.newElementWithClass)('div', ['content']);\r\n\t\r\n\tconst row1 = createRow('Play guitar', '16th june');\r\n\tconst row2 = createRow('Study', 'june 17th');\r\n\tconst row3 = createRow('Play guitar', '16th june');\r\n\tconst row4 = createRow('Study', 'june 17th');\r\n\tconst row5 = createRow('buy grocery', '20th june');\r\n\tconst row6 = createRow('listen podcast', 'june 22nd');\r\n\r\n\tcontent.append(row1, row2, row3, row4, row5, row6);\r\n\t// content.append(row2);\r\n\t// content.append(row3);\r\n\t// content.append(row4);\r\n\t// content.append(row5);\r\n\t// content.append(row6);\r\n\r\n\treturn content;\r\n}\r\n\r\nfunction createRow(tk, dt) {\r\n\tconst row = (0,_helper__WEBPACK_IMPORTED_MODULE_1__.newElementWithClass)('div', ['row']);\r\n\tconst left =(0,_helper__WEBPACK_IMPORTED_MODULE_1__.newElementWithClass)('div', ['left']);\r\n\tconst right = (0,_helper__WEBPACK_IMPORTED_MODULE_1__.newElementWithClass)('div', ['right'])\r\n\r\n\tconst checkbox = document.createElement('input');\r\n\tcheckbox.setAttribute(\"type\", \"checkbox\");\r\n\tconst task = (0,_helper__WEBPACK_IMPORTED_MODULE_1__.newElement)('p', tk);\r\n\r\n\tleft.append(checkbox, task);\r\n\r\n\tconst details = (0,_helper__WEBPACK_IMPORTED_MODULE_1__.newElement)('button', 'details');\r\n\tdetails.addEventListener(\"click\",  _script__WEBPACK_IMPORTED_MODULE_2__.showDetails);\r\n\t\r\n\tconst date = (0,_helper__WEBPACK_IMPORTED_MODULE_1__.newElement)('p', dt);\r\n\r\n\tconst edit = (0,_helper__WEBPACK_IMPORTED_MODULE_1__.newElementWithClass)('i',  ['fa-pen-to-square', 'fa-solid']);\r\n\tconst del = (0,_helper__WEBPACK_IMPORTED_MODULE_1__.newElementWithClass)('i',  ['fa-solid', 'fa-trash-can'])\r\n\r\n\tright.append(details, date, edit, del);\r\n\trow.append(left, right);\r\n\r\n\treturn row;\r\n}\r\n\r\nfunction detailsModal() {\r\n\tconst modal =(0,_helper__WEBPACK_IMPORTED_MODULE_1__.newElementWithClass)('div', ['modal']);\r\n\tconst modalContent = (0,_helper__WEBPACK_IMPORTED_MODULE_1__.newElementWithClass)('div', ['modal-content']);\r\n\r\n\tconst close = (0,_helper__WEBPACK_IMPORTED_MODULE_1__.newElementWithClass)('i', ['fa-solid', 'fa-x']);\r\n\tclose.addEventListener(\"click\", () =>{\r\n\t\t modal.classList.remove(\"modal\");\r\n\t\t modal.remove();\r\n\t});\r\n\r\n\tconst title = (0,_helper__WEBPACK_IMPORTED_MODULE_1__.newElement)('h2', 'Some title');\r\n\tconst project = (0,_helper__WEBPACK_IMPORTED_MODULE_1__.newElement)('h4', 'Project: ')\r\n\tconst priority = (0,_helper__WEBPACK_IMPORTED_MODULE_1__.newElement)('h4', 'Priority: ');\r\n\tconst dueDate = (0,_helper__WEBPACK_IMPORTED_MODULE_1__.newElement)('h4', 'Due date: ');\r\n\tconst details = (0,_helper__WEBPACK_IMPORTED_MODULE_1__.newElement)('h4', 'Details: ');\r\n\t\r\n\tconst span1 = (0,_helper__WEBPACK_IMPORTED_MODULE_1__.newElement)('span', 'Today');\r\n\tconst span2 = (0,_helper__WEBPACK_IMPORTED_MODULE_1__.newElement)('span', 'Medium');\r\n\tconst span3 = (0,_helper__WEBPACK_IMPORTED_MODULE_1__.newElement)('span', 'june 16th, 2023');\r\n\tconst span4 = (0,_helper__WEBPACK_IMPORTED_MODULE_1__.newElement)('span', 'some details');\r\n\r\n\tproject.append(span1);\r\n\tpriority.append(span2);\r\n\tdueDate.append(span3);\r\n\tdetails.append(span4);\r\n\t\r\n\tmodalContent.append(close, title, project, priority, dueDate, details);\r\n\tmodal.append(modalContent);\r\n\r\n\treturn  modal;\r\n}\r\n\r\nfunction addTodoModal(){\r\n\r\n\tconst todoModal = (0,_helper__WEBPACK_IMPORTED_MODULE_1__.newElementWithClass)('div', ['todo-modal']);\r\n\tconst todoModalContent = (0,_helper__WEBPACK_IMPORTED_MODULE_1__.newElementWithClass)('div', ['todo-modal-content']);\r\n\tconst todoHeader = (0,_helper__WEBPACK_IMPORTED_MODULE_1__.newElementWithClass)('div', ['todo-header']);\r\n\r\n\tconst h2 = (0,_helper__WEBPACK_IMPORTED_MODULE_1__.newElement)('h2', 'Create New Todo');\r\n\tconst close = (0,_helper__WEBPACK_IMPORTED_MODULE_1__.newElementWithClass)('i', ['fa-solid', 'fa-x']);\r\n\r\n\tconst todoContent = (0,_helper__WEBPACK_IMPORTED_MODULE_1__.newElementWithClass)('div', 'todo-content');\r\n\r\n\tconst todoSide = (0,_helper__WEBPACK_IMPORTED_MODULE_1__.newElementWithClass)('ul', ['todo-side']);\r\n\t\r\n\r\n\t// <div class=\"todo-modal\">\r\n\t// \t\t\t\t<div class=\"todo-modal-content\">\r\n\t// \t\t\t\t\t<div class=\"todo-header\">\r\n\t// \t\t\t\t\t\t<h2>Create new todo</h2>\r\n\t// \t\t\t\t\t\t<a href=\"#\"><i class=\"fa-solid fa-x\"></i></a>\r\n\t// \t\t\t\t\t</div>\r\n\t// \t\t\t\t\t<div class=\"todo-content\">\r\n\t// \t\t\t\t\t\t<ul class=\"todo-side\">\r\n\t// \t\t\t\t\t\t\t<li><a href=\"#\" class=\"link active\" data-name=\"Todo\">Todo</a></li>\r\n\t// \t\t\t\t\t\t\t<li><a href=\"#\" class=\"link\" data-name=\"Project\">Project</a></li>\r\n\t// \t\t\t\t\t\t\t<li><a href=\"#\" class=\"link\" data-name=\"Note\">Note</a></li>\r\n\t// \t\t\t\t\t\t</ul>\r\n\t// \t\t\t\t\t\t<div class=\"border\"></div>\r\n\t// \t\t\t\t\t\t<div class=\"todo-body\">\r\n\t// \t\t\t\t\t\t\t<input type=\"text\" name=\"title\" id=\"title\" placeholder=\"Title: Study\" required>\r\n\t// \t\t\t\t\t\t\t<textarea name=\"details\" id=\"details\" class=\"input\" cols=\"40\" rows=\"10\" placeholder=\"Details: eg AI,Cyber.. \" required></textarea>\r\n\t// \t\t\t\t\t\t\t<input type=\"date\" name=\"date\" class=\"input\" minDate=\"0\" id=\"date\">\t\t\r\n\t// \t\t\t\t\t\t\t<select name=\"pro\" id=\"pro\">\r\n\t// \t\t\t\t\t\t\t\t<option value=\"\" disabled selected>select project</option>\r\n\t// \t\t\t\t\t\t\t\t<option value=\"1\">gym</option>\r\n\t// \t\t\t\t\t\t\t\t<option value=\"2\">study</option>\r\n\t// \t\t\t\t\t\t\t</select>\t\t\t\t\t\r\n\t// \t\t\t\t\t\t\t<button class=\"add-btn-todo\" id=\"create-todo\">Create <span id=\"task-btn\">Todo</span></button>\r\n\t// \t\t\t\t\t\t</div>\r\n\t// \t\t\t\t\t\t<div class=\"todo-body project hidden\">\r\n\t// \t\t\t\t\t\t\t<input type=\"text\" name=\"project\" id=\"project\" placeholder=\"Title: Building\" required>\t\r\n\t// \t\t\t\t\t\t\t<button class=\"add-btn-todo\" id=\"create-project\">Create <span id=\"task-btn\">Project</span></button>\r\n\t// \t\t\t\t\t\t</div>\r\n\t// \t\t\t\t\t\t<div class=\"todo-body note hidden\">\r\n\t// \t\t\t\t\t\t\t<input type=\"text\" name=\"note\" id=\"note\" placeholder=\"Title:\" required>\t\r\n\t// \t\t\t\t\t\t\t<textarea name=\"details\" id=\"note-details\" cols=\"40\" rows=\"10\" placeholder=\"Details:\" required></textarea>\r\n\t// \t\t\t\t\t\t\t<button class=\"add-btn-todo\" id=\"create-note\">Create <span id=\"task-btn\">Note</span></button>\r\n\t// \t\t\t\t\t\t</div>\r\n\t// \t\t\t\t\t</div>\r\n\t// \t\t\t\t</div>\r\n\t// \t\t\t</div>\r\n}\r\n\r\nfunction createBody() {\r\n\tconst body = (0,_helper__WEBPACK_IMPORTED_MODULE_1__.newElementWithClass)('div', ['body']);\r\n\t\r\n\tbody.append(createSideBar(), createContent());\r\n\r\n\treturn body;\r\n}\r\n\r\n\r\nfunction createTodo() {\r\n\tconst todo = (0,_helper__WEBPACK_IMPORTED_MODULE_1__.newElement)('div', '');\r\n\ttodo.classList.add('modal');\r\n\r\n\tconst header = (0,_helper__WEBPACK_IMPORTED_MODULE_1__.newElement)('div', '');\r\n\tconst htext = (0,_helper__WEBPACK_IMPORTED_MODULE_1__.newElement)('p', 'Create new Todo..');\r\n\tconst deleteClass  = ['fa-regular', 'fa-circle-xmark'];\r\n\tconst del = document.createElement('i');\r\n\tdel.classList.add(...deleteClass);\r\n\tdel.style.fontSize = '1.5rem';\r\n\r\n\theader.classList.add('todo-header');\r\n\theader.append(htext, del);\r\n\t\r\n\tconst sideTodo = (0,_helper__WEBPACK_IMPORTED_MODULE_1__.newElement)('div', '');\r\n\tsideTodo.classList.add('sideTodo');\r\n\tconst rightTodo = (0,_helper__WEBPACK_IMPORTED_MODULE_1__.newElement)('div', '');\r\n\trightTodo.classList.add('rightTodo');\r\n\t\r\n\tconst title = (0,_helper__WEBPACK_IMPORTED_MODULE_1__.newElement)('input', '');\r\n\ttitle.setAttribute(\"placeholder\", \"title\")\r\n\tconst details = (0,_helper__WEBPACK_IMPORTED_MODULE_1__.newElement)('textarea', '');\r\n\tdetails.setAttribute(\"placeholder\", \"details:\")\r\n\tconst dt = (0,_helper__WEBPACK_IMPORTED_MODULE_1__.newElement)('input', '');\r\n\tdt.setAttribute('type', 'date');\r\n\t// const priority\r\n\t\r\n\tconst TODO = (0,_helper__WEBPACK_IMPORTED_MODULE_1__.createSideBarLink)('To Do', '#');\r\n\tconst project = (0,_helper__WEBPACK_IMPORTED_MODULE_1__.createSideBarLink)('Project', '#');\r\n\tconst note = (0,_helper__WEBPACK_IMPORTED_MODULE_1__.createSideBarLink)('Note', '#');\r\n\t\r\n\tsideTodo.append(TODO, project, note);\r\n\trightTodo.append(title, details, dt);\r\n\t\r\n\tconst todoContent = (0,_helper__WEBPACK_IMPORTED_MODULE_1__.newElement)('div', '')\r\n\ttodoContent.classList.add('todo-content');\r\n\ttodoContent.append(sideTodo, rightTodo);\r\n\r\n\tconst allContent = (0,_helper__WEBPACK_IMPORTED_MODULE_1__.newElement)('div', '');\r\n\tallContent.append(header, todoContent);\r\n\tallContent.classList.add('modal-content');\r\n\r\n\ttodo.append(allContent);\r\n\t\r\n\treturn todo;\r\n}\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://js-todo/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n\r\n\r\n\r\n\r\nconst main = document.getElementById(\"main\");\r\nmain.classList.add(\"main\");\r\n// main.textContent = \"hello\";\t\r\nmain.append((0,_home__WEBPACK_IMPORTED_MODULE_1__.createNav)(), (0,_home__WEBPACK_IMPORTED_MODULE_1__.createBody)());\n\n//# sourceURL=webpack://js-todo/./src/index.js?");

/***/ }),

/***/ "./src/script.js":
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addTodo: () => (/* binding */ addTodo),\n/* harmony export */   showDetails: () => (/* binding */ showDetails)\n/* harmony export */ });\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n\r\n\r\n\r\n\r\nconst main = document.getElementById('main');\r\n\r\nfunction addTodo(e) {\r\n\tmain.append((0,_home__WEBPACK_IMPORTED_MODULE_1__.createTodo)());\r\n}\r\n\r\nfunction showDetails(e) {\r\n\tmain.append((0,_home__WEBPACK_IMPORTED_MODULE_1__.detailsModal)())\r\n}\r\n\r\n\n\n//# sourceURL=webpack://js-todo/./src/script.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;