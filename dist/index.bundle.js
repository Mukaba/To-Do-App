"use strict";
(self["webpackChunkwebpack"] = self["webpackChunkwebpack"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n  box-sizing: border-box;\r\n  margin: 0;\r\n  padding: 0;\r\n  list-style: none;\r\n  outline: none;\r\n  font-family: Verdana, serif;\r\n}\r\n\r\n.container-all {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 1rem;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.container-all > * {\r\n  width: 50vw;\r\n  text-align: center;\r\n}\r\n\r\n.todo-title {\r\n  font-family: 'Segoe Script', serif;\r\n}\r\n\r\n.daily-task-title {\r\n  font-family: Verdana, serif;\r\n}\r\n\r\n.main-form {\r\n  display: flex;\r\n  flex-direction: column;\r\n  text-align: left;\r\n  gap: 1rem;\r\n}\r\n\r\n.today-container {\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n.reset-all {\r\n  align-self: center;\r\n  cursor: pointer;\r\n  transition: 0.5s ease;\r\n}\r\n\r\n.reset-all:hover {\r\n  transform: rotate(360deg);\r\n  transition: 0.3s ease;\r\n}\r\n\r\n.inputBtn {\r\n  display: flex;\r\n  gap: 1rem;\r\n}\r\n\r\n.enter-task {\r\n  flex-grow: 1;\r\n  height: 32px;\r\n  position: relative;\r\n}\r\n\r\n.in-put {\r\n  height: 100%;\r\n  width: 100%;\r\n  padding: 0 0.5rem;\r\n  display: block;\r\n  border: none;\r\n  border-bottom: 1px solid hsl(0, 0%, 32%);\r\n  background: transparent;\r\n}\r\n\r\n::placeholder {\r\n  font-style: italic;\r\n  color: darkgrey;\r\n}\r\n\r\n.add-task {\r\n  padding: 0.5rem 1rem;\r\n  border-radius: 5px;\r\n  cursor: pointer;\r\n  background-color: hsl(240, 99%, 69%);\r\n  border: none;\r\n  color: white;\r\n  transition: 0.3s ease-out;\r\n  font-size: 0.7rem;\r\n  font-weight: 400;\r\n}\r\n\r\n.add-task:hover {\r\n  background-color: hsl(240, 100%, 73%);\r\n  transition: 0.3s ease-in;\r\n  box-shadow: 0 0 20px -18px;\r\n}\r\n\r\n.clear-btn {\r\n  display: flex;\r\n  justify-content: end;\r\n}\r\n\r\n.clear-all {\r\n  padding: 0.5rem 1rem;\r\n  border-radius: 5px;\r\n  background-color: hsl(240, 99%, 69%);\r\n  border: none;\r\n  color: #fff;\r\n  cursor: pointer;\r\n  transition: 0.3s ease-in;\r\n}\r\n\r\n.clear-all:hover {\r\n  cursor: pointer;\r\n  background-color: hsl(0, 100%, 70%);\r\n  transition: 0.3s ease-out;\r\n  box-shadow: 0 0 20px -18px;\r\n}\r\n\r\nbutton:active {\r\n  transform: scale(0.95);\r\n}\r\n\r\n.input-label {\r\n  color: hsl(0, 0%, 60%);\r\n  font-size: 18px;\r\n  font-weight: normal;\r\n  position: absolute;\r\n  pointer-events: none;\r\n  left: 9px;\r\n  top: 5px;\r\n  transition: 0.2s ease all;\r\n  -moz-transition: 0.2s ease all;\r\n  -webkit-transition: 0.2s ease all;\r\n}\r\n\r\n.in-put:focus ~ .input-label,\r\n.in-put:not(:placeholder-shown) ~ .input-label {\r\n  top: -12px;\r\n  font-size: 14px;\r\n  color: hsl(228, 36%, 50%);\r\n}\r\n\r\n.bar {\r\n  position: relative;\r\n  display: block;\r\n  width: 100%;\r\n}\r\n\r\n.bar::before,\r\n.bar::after {\r\n  content: '';\r\n  height: 2px;\r\n  width: 0;\r\n  bottom: 1px;\r\n  position: absolute;\r\n  background: hsl(228, 36%, 50%);\r\n  transition: 0.2s ease all;\r\n  -moz-transition: 0.2s ease all;\r\n  -webkit-transition: 0.2s ease all;\r\n}\r\n\r\n.bar::before {\r\n  left: 50%;\r\n}\r\n\r\n.bar::after {\r\n  right: 50%;\r\n}\r\n\r\n.in-put:focus ~ .bar::before,\r\n.in-put:focus ~ .bar::after {\r\n  width: 50%;\r\n}\r\n\r\n.highlight {\r\n  position: absolute;\r\n  height: 70%;\r\n  width: 90%;\r\n  top: 25%;\r\n  left: 0;\r\n  pointer-events: none;\r\n  opacity: 0.5;\r\n}\r\n\r\n.in-put:focus ~ .highlight {\r\n  animation: inputHighlighter 0.3s ease;\r\n}\r\n\r\n@keyframes inputHighlighter {\r\n  from {\r\n    background: #5264ae;\r\n  }\r\n\r\n  to {\r\n    width: 0;\r\n    background: transparent;\r\n  }\r\n}\r\n\r\n.tasks-lists {\r\n  background-color: #f5f5f5;\r\n  border-radius: 5px;\r\n  padding: 1rem;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.tasks-lists li {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  height: 2rem;\r\n}\r\n\r\n.task-checkbox {\r\n  display: flex;\r\n  gap: 0.8rem;\r\n}\r\n\r\n.edit-delete-btn {\r\n  display: flex;\r\n  gap: 1rem;\r\n}\r\n\r\n.edit-delete-btn > * {\r\n  padding: 0.3rem 1rem;\r\n  cursor: pointer;\r\n  border-radius: 5px;\r\n  border: none;\r\n  color: white;\r\n  transition: 0.3s ease-out;\r\n  font-size: 0.7rem;\r\n  font-weight: 400;\r\n}\r\n\r\n.edit-delete-btn > *:hover {\r\n  box-shadow: 0 0 20px -18px;\r\n  transition: 0.3s ease-in;\r\n}\r\n\r\n.edit-delete-btn > *:active {\r\n  transform: scale(0.95);\r\n}\r\n\r\n.edit-btn {\r\n  background-color: hsl(240, 99%, 69%);\r\n}\r\n\r\n.edit-btn:hover {\r\n  background-color: hsl(240, 100%, 73%);\r\n}\r\n\r\n.edit-btn:active {\r\n  background-color: hsl(240, 31%, 75%);\r\n}\r\n\r\n.delete-btn {\r\n  background-color: hsl(0, 100%, 70%);\r\n}\r\n\r\n.delete-btn:hover {\r\n  background-color: hsl(0, 98%, 76%);\r\n}\r\n\r\n.delete-btn:active {\r\n  background-color: hsl(0, 31%, 82%);\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["* {\r\n  box-sizing: border-box;\r\n  margin: 0;\r\n  padding: 0;\r\n  list-style: none;\r\n  outline: none;\r\n  font-family: Verdana, serif;\r\n}\r\n\r\n.container-all {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 1rem;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.container-all > * {\r\n  width: 50vw;\r\n  text-align: center;\r\n}\r\n\r\n.todo-title {\r\n  font-family: 'Segoe Script', serif;\r\n}\r\n\r\n.daily-task-title {\r\n  font-family: Verdana, serif;\r\n}\r\n\r\n.main-form {\r\n  display: flex;\r\n  flex-direction: column;\r\n  text-align: left;\r\n  gap: 1rem;\r\n}\r\n\r\n.today-container {\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n.reset-all {\r\n  align-self: center;\r\n  cursor: pointer;\r\n  transition: 0.5s ease;\r\n}\r\n\r\n.reset-all:hover {\r\n  transform: rotate(360deg);\r\n  transition: 0.3s ease;\r\n}\r\n\r\n.inputBtn {\r\n  display: flex;\r\n  gap: 1rem;\r\n}\r\n\r\n.enter-task {\r\n  flex-grow: 1;\r\n  height: 32px;\r\n  position: relative;\r\n}\r\n\r\n.in-put {\r\n  height: 100%;\r\n  width: 100%;\r\n  padding: 0 0.5rem;\r\n  display: block;\r\n  border: none;\r\n  border-bottom: 1px solid hsl(0, 0%, 32%);\r\n  background: transparent;\r\n}\r\n\r\n::placeholder {\r\n  font-style: italic;\r\n  color: darkgrey;\r\n}\r\n\r\n.add-task {\r\n  padding: 0.5rem 1rem;\r\n  border-radius: 5px;\r\n  cursor: pointer;\r\n  background-color: hsl(240, 99%, 69%);\r\n  border: none;\r\n  color: white;\r\n  transition: 0.3s ease-out;\r\n  font-size: 0.7rem;\r\n  font-weight: 400;\r\n}\r\n\r\n.add-task:hover {\r\n  background-color: hsl(240, 100%, 73%);\r\n  transition: 0.3s ease-in;\r\n  box-shadow: 0 0 20px -18px;\r\n}\r\n\r\n.clear-btn {\r\n  display: flex;\r\n  justify-content: end;\r\n}\r\n\r\n.clear-all {\r\n  padding: 0.5rem 1rem;\r\n  border-radius: 5px;\r\n  background-color: hsl(240, 99%, 69%);\r\n  border: none;\r\n  color: #fff;\r\n  cursor: pointer;\r\n  transition: 0.3s ease-in;\r\n}\r\n\r\n.clear-all:hover {\r\n  cursor: pointer;\r\n  background-color: hsl(0, 100%, 70%);\r\n  transition: 0.3s ease-out;\r\n  box-shadow: 0 0 20px -18px;\r\n}\r\n\r\nbutton:active {\r\n  transform: scale(0.95);\r\n}\r\n\r\n.input-label {\r\n  color: hsl(0, 0%, 60%);\r\n  font-size: 18px;\r\n  font-weight: normal;\r\n  position: absolute;\r\n  pointer-events: none;\r\n  left: 9px;\r\n  top: 5px;\r\n  transition: 0.2s ease all;\r\n  -moz-transition: 0.2s ease all;\r\n  -webkit-transition: 0.2s ease all;\r\n}\r\n\r\n.in-put:focus ~ .input-label,\r\n.in-put:not(:placeholder-shown) ~ .input-label {\r\n  top: -12px;\r\n  font-size: 14px;\r\n  color: hsl(228, 36%, 50%);\r\n}\r\n\r\n.bar {\r\n  position: relative;\r\n  display: block;\r\n  width: 100%;\r\n}\r\n\r\n.bar::before,\r\n.bar::after {\r\n  content: '';\r\n  height: 2px;\r\n  width: 0;\r\n  bottom: 1px;\r\n  position: absolute;\r\n  background: hsl(228, 36%, 50%);\r\n  transition: 0.2s ease all;\r\n  -moz-transition: 0.2s ease all;\r\n  -webkit-transition: 0.2s ease all;\r\n}\r\n\r\n.bar::before {\r\n  left: 50%;\r\n}\r\n\r\n.bar::after {\r\n  right: 50%;\r\n}\r\n\r\n.in-put:focus ~ .bar::before,\r\n.in-put:focus ~ .bar::after {\r\n  width: 50%;\r\n}\r\n\r\n.highlight {\r\n  position: absolute;\r\n  height: 70%;\r\n  width: 90%;\r\n  top: 25%;\r\n  left: 0;\r\n  pointer-events: none;\r\n  opacity: 0.5;\r\n}\r\n\r\n.in-put:focus ~ .highlight {\r\n  animation: inputHighlighter 0.3s ease;\r\n}\r\n\r\n@keyframes inputHighlighter {\r\n  from {\r\n    background: #5264ae;\r\n  }\r\n\r\n  to {\r\n    width: 0;\r\n    background: transparent;\r\n  }\r\n}\r\n\r\n.tasks-lists {\r\n  background-color: #f5f5f5;\r\n  border-radius: 5px;\r\n  padding: 1rem;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.tasks-lists li {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  height: 2rem;\r\n}\r\n\r\n.task-checkbox {\r\n  display: flex;\r\n  gap: 0.8rem;\r\n}\r\n\r\n.edit-delete-btn {\r\n  display: flex;\r\n  gap: 1rem;\r\n}\r\n\r\n.edit-delete-btn > * {\r\n  padding: 0.3rem 1rem;\r\n  cursor: pointer;\r\n  border-radius: 5px;\r\n  border: none;\r\n  color: white;\r\n  transition: 0.3s ease-out;\r\n  font-size: 0.7rem;\r\n  font-weight: 400;\r\n}\r\n\r\n.edit-delete-btn > *:hover {\r\n  box-shadow: 0 0 20px -18px;\r\n  transition: 0.3s ease-in;\r\n}\r\n\r\n.edit-delete-btn > *:active {\r\n  transform: scale(0.95);\r\n}\r\n\r\n.edit-btn {\r\n  background-color: hsl(240, 99%, 69%);\r\n}\r\n\r\n.edit-btn:hover {\r\n  background-color: hsl(240, 100%, 73%);\r\n}\r\n\r\n.edit-btn:active {\r\n  background-color: hsl(240, 31%, 75%);\r\n}\r\n\r\n.delete-btn {\r\n  background-color: hsl(0, 100%, 70%);\r\n}\r\n\r\n.delete-btn:hover {\r\n  background-color: hsl(0, 98%, 76%);\r\n}\r\n\r\n.delete-btn:active {\r\n  background-color: hsl(0, 31%, 82%);\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _modules_interactive_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/interactive.js */ "./src/modules/interactive.js");



const taskList = new _modules_interactive_js__WEBPACK_IMPORTED_MODULE_1__["default"]();

taskList.displayTasks();

/***/ }),

/***/ "./src/modules/addTask.js":
/*!********************************!*\
  !*** ./src/modules/addTask.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task.js */ "./src/modules/task.js");


function addTask(taskInput, tasks) {
  const taskName = taskInput.value.trim();
  const id = tasks.length + 1;
  if (taskName !== '') {
    const task = new _task_js__WEBPACK_IMPORTED_MODULE_0__["default"](taskName, false, id);
    tasks.push(task);
  }
  return tasks;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addTask);


/***/ }),

/***/ "./src/modules/clearToggleEditTask.js":
/*!********************************************!*\
  !*** ./src/modules/clearToggleEditTask.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "clearCompletedTask": () => (/* binding */ clearCompletedTask),
/* harmony export */   "editTask": () => (/* binding */ editTask),
/* harmony export */   "toggleTaskStatus": () => (/* binding */ toggleTaskStatus)
/* harmony export */ });
// clearCompletedTask function
function clearCompletedTask(tasks) {
  return tasks.filter((task) => !task.status);
}

// toggleTaskStatus function
function toggleTaskStatus(id, tasks) {
  return tasks.map((task) => {
    if (task.id === id) {
      return {
        ...task,
        status: !task.status,
      };
    }
    return task;
  });
}

// editTask function
function editTask(id, newName, tasks, saveTasks, displayTasks) {
  const taskIndex = tasks.findIndex((task) => task.id === id);
  if (taskIndex !== -1) {
    tasks[taskIndex].name = newName;
    saveTasks();
    displayTasks();
  }
}



/***/ }),

/***/ "./src/modules/interactive.js":
/*!************************************!*\
  !*** ./src/modules/interactive.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _addTask_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addTask.js */ "./src/modules/addTask.js");
/* harmony import */ var _removeTask_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./removeTask.js */ "./src/modules/removeTask.js");
/* harmony import */ var _clearToggleEditTask_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./clearToggleEditTask.js */ "./src/modules/clearToggleEditTask.js");




class TaskList {
  constructor() {
    this.tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    this.taskForm = document.getElementById('task-form');
    this.taskInput = document.getElementById('task-input');
    this.taskList = document.getElementById('task-list');
    this.clearCompletedBtn = document.getElementById('clear-completed');
    this.resetBtn = document.getElementById('reset');
    this.taskForm.addEventListener('submit', (e) => {
      e.preventDefault();
      this.tasks = (0,_addTask_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this.taskInput, this.tasks);
      this.saveTasks();
      this.displayTasks();
      this.taskInput.value = '';
    });
    this.clearCompletedBtn.addEventListener('click', () => {
      this.tasks = (0,_clearToggleEditTask_js__WEBPACK_IMPORTED_MODULE_2__.clearCompletedTask)(this.tasks);
      this.saveTasks();
      this.displayTasks();
    });
    this.resetBtn.addEventListener('click', () => {
      this.tasks = [];
      this.saveTasks();
      this.displayTasks();
    });
    this.displayTasks();
  }

  editTask(id, newName) {
    (0,_clearToggleEditTask_js__WEBPACK_IMPORTED_MODULE_2__.editTask)(id, newName, this.tasks, this.saveTasks.bind(this), this.displayTasks.bind(this));
  }

  removeTask(id) {
    this.tasks = (0,_removeTask_js__WEBPACK_IMPORTED_MODULE_1__["default"])(id, this.tasks);
    this.saveTasks();
    this.displayTasks();
  }

  toggleTaskStatus(id) {
    this.tasks = (0,_clearToggleEditTask_js__WEBPACK_IMPORTED_MODULE_2__.toggleTaskStatus)(id, this.tasks);
    this.saveTasks();
    this.displayTasks();
  }

  resetTasks() {
    this.tasks = [];
    this.saveTasks();
    this.displayTasks();
  }

  saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  displayTasks() {
    this.taskList.innerHTML = '';
    for (let i = 0; i < this.tasks.length; i += 1) {
      const task = this.tasks[i];
      const taskElement = document.createElement('li');
      taskElement.innerHTML = `
      <div class="task-checkbox">
        <input type='checkbox' ${task.status ? 'checked' : ''}>
        <span ${task.status ? 'style="text-decoration: line-through"' : ''}>
          ${task.name}
        </span>
      </div>
      <div class="edit-delete-btn">
        <button type="button" class="edit-btn">Edit</button>
        <button type="button" class="delete-btn">X</button>
      </div>
    `;
      const checkbox = taskElement.querySelector('input[type=checkbox]');
      checkbox.addEventListener('change', () => this.toggleTaskStatus(task.id));
      const editBtn = taskElement.querySelector('.edit-btn');
      editBtn.addEventListener('click', () => {
        const newName = prompt('Enter new task name:', task.name);
        if (newName !== null && newName.trim() !== '') {
          this.editTask(task.id, newName.trim());
        }
      });
      const deleteBtn = taskElement.querySelector('.delete-btn');
      deleteBtn.addEventListener('click', () => this.removeTask(task.id));
      this.taskList.appendChild(taskElement);
    }
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TaskList);

/***/ }),

/***/ "./src/modules/removeTask.js":
/*!***********************************!*\
  !*** ./src/modules/removeTask.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function removeTask(id, tasks) {
  const updatedTasks = tasks.filter((task) => task.id !== id);
  for (let i = 0; i < updatedTasks.length; i += 1) {
    updatedTasks[i].id = i + 1;
  }
  return updatedTasks;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (removeTask);

/***/ }),

/***/ "./src/modules/task.js":
/*!*****************************!*\
  !*** ./src/modules/task.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Task {
  constructor(name, status, id) {
    this.name = name;
    this.status = status;
    this.id = id;
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Task);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLE1BQU0sVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksTUFBTSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlB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LDJEQUEyRDtBQUMzRSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxRQUFROzs7Ozs7Ozs7Ozs7OztBQzNGdkI7QUFDQTtBQUNBLGtCQUFrQix5QkFBeUI7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsVUFBVTs7Ozs7Ozs7Ozs7Ozs7QUNSekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2svLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3dlYnBhY2svLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYnBhY2svLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3dlYnBhY2svLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYnBhY2svLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VicGFjay8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLy4vc3JjL21vZHVsZXMvYWRkVGFzay5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLy4vc3JjL21vZHVsZXMvY2xlYXJUb2dnbGVFZGl0VGFzay5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLy4vc3JjL21vZHVsZXMvaW50ZXJhY3RpdmUuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay8uL3NyYy9tb2R1bGVzL3JlbW92ZVRhc2suanMiLCJ3ZWJwYWNrOi8vd2VicGFjay8uL3NyYy9tb2R1bGVzL3Rhc2suanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICBmb250LWZhbWlseTogVmVyZGFuYSwgc2VyaWY7XFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXItYWxsIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZ2FwOiAxcmVtO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFpbmVyLWFsbCA+ICoge1xcclxcbiAgd2lkdGg6IDUwdnc7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi50b2RvLXRpdGxlIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnU2Vnb2UgU2NyaXB0Jywgc2VyaWY7XFxyXFxufVxcclxcblxcclxcbi5kYWlseS10YXNrLXRpdGxlIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBWZXJkYW5hLCBzZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuLm1haW4tZm9ybSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxuICBnYXA6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi50b2RheS1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG59XFxyXFxuXFxyXFxuLnJlc2V0LWFsbCB7XFxyXFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICB0cmFuc2l0aW9uOiAwLjVzIGVhc2U7XFxyXFxufVxcclxcblxcclxcbi5yZXNldC1hbGw6aG92ZXIge1xcclxcbiAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXHJcXG4gIHRyYW5zaXRpb246IDAuM3MgZWFzZTtcXHJcXG59XFxyXFxuXFxyXFxuLmlucHV0QnRuIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBnYXA6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5lbnRlci10YXNrIHtcXHJcXG4gIGZsZXgtZ3JvdzogMTtcXHJcXG4gIGhlaWdodDogMzJweDtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmluLXB1dCB7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHBhZGRpbmc6IDAgMC41cmVtO1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgaHNsKDAsIDAlLCAzMiUpO1xcclxcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxyXFxufVxcclxcblxcclxcbjo6cGxhY2Vob2xkZXIge1xcclxcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcclxcbiAgY29sb3I6IGRhcmtncmV5O1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkLXRhc2sge1xcclxcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMjQwLCA5OSUsIDY5JSk7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICB0cmFuc2l0aW9uOiAwLjNzIGVhc2Utb3V0O1xcclxcbiAgZm9udC1zaXplOiAwLjdyZW07XFxyXFxuICBmb250LXdlaWdodDogNDAwO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkLXRhc2s6aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDI0MCwgMTAwJSwgNzMlKTtcXHJcXG4gIHRyYW5zaXRpb246IDAuM3MgZWFzZS1pbjtcXHJcXG4gIGJveC1zaGFkb3c6IDAgMCAyMHB4IC0xOHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY2xlYXItYnRuIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcXHJcXG59XFxyXFxuXFxyXFxuLmNsZWFyLWFsbCB7XFxyXFxuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCgyNDAsIDk5JSwgNjklKTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgdHJhbnNpdGlvbjogMC4zcyBlYXNlLWluO1xcclxcbn1cXHJcXG5cXHJcXG4uY2xlYXItYWxsOmhvdmVyIHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCgwLCAxMDAlLCA3MCUpO1xcclxcbiAgdHJhbnNpdGlvbjogMC4zcyBlYXNlLW91dDtcXHJcXG4gIGJveC1zaGFkb3c6IDAgMCAyMHB4IC0xOHB4O1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b246YWN0aXZlIHtcXHJcXG4gIHRyYW5zZm9ybTogc2NhbGUoMC45NSk7XFxyXFxufVxcclxcblxcclxcbi5pbnB1dC1sYWJlbCB7XFxyXFxuICBjb2xvcjogaHNsKDAsIDAlLCA2MCUpO1xcclxcbiAgZm9udC1zaXplOiAxOHB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcclxcbiAgbGVmdDogOXB4O1xcclxcbiAgdG9wOiA1cHg7XFxyXFxuICB0cmFuc2l0aW9uOiAwLjJzIGVhc2UgYWxsO1xcclxcbiAgLW1vei10cmFuc2l0aW9uOiAwLjJzIGVhc2UgYWxsO1xcclxcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjJzIGVhc2UgYWxsO1xcclxcbn1cXHJcXG5cXHJcXG4uaW4tcHV0OmZvY3VzIH4gLmlucHV0LWxhYmVsLFxcclxcbi5pbi1wdXQ6bm90KDpwbGFjZWhvbGRlci1zaG93bikgfiAuaW5wdXQtbGFiZWwge1xcclxcbiAgdG9wOiAtMTJweDtcXHJcXG4gIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gIGNvbG9yOiBoc2woMjI4LCAzNiUsIDUwJSk7XFxyXFxufVxcclxcblxcclxcbi5iYXIge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmJhcjo6YmVmb3JlLFxcclxcbi5iYXI6OmFmdGVyIHtcXHJcXG4gIGNvbnRlbnQ6ICcnO1xcclxcbiAgaGVpZ2h0OiAycHg7XFxyXFxuICB3aWR0aDogMDtcXHJcXG4gIGJvdHRvbTogMXB4O1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgYmFja2dyb3VuZDogaHNsKDIyOCwgMzYlLCA1MCUpO1xcclxcbiAgdHJhbnNpdGlvbjogMC4ycyBlYXNlIGFsbDtcXHJcXG4gIC1tb3otdHJhbnNpdGlvbjogMC4ycyBlYXNlIGFsbDtcXHJcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC4ycyBlYXNlIGFsbDtcXHJcXG59XFxyXFxuXFxyXFxuLmJhcjo6YmVmb3JlIHtcXHJcXG4gIGxlZnQ6IDUwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmJhcjo6YWZ0ZXIge1xcclxcbiAgcmlnaHQ6IDUwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmluLXB1dDpmb2N1cyB+IC5iYXI6OmJlZm9yZSxcXHJcXG4uaW4tcHV0OmZvY3VzIH4gLmJhcjo6YWZ0ZXIge1xcclxcbiAgd2lkdGg6IDUwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmhpZ2hsaWdodCB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBoZWlnaHQ6IDcwJTtcXHJcXG4gIHdpZHRoOiA5MCU7XFxyXFxuICB0b3A6IDI1JTtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXHJcXG4gIG9wYWNpdHk6IDAuNTtcXHJcXG59XFxyXFxuXFxyXFxuLmluLXB1dDpmb2N1cyB+IC5oaWdobGlnaHQge1xcclxcbiAgYW5pbWF0aW9uOiBpbnB1dEhpZ2hsaWdodGVyIDAuM3MgZWFzZTtcXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBpbnB1dEhpZ2hsaWdodGVyIHtcXHJcXG4gIGZyb20ge1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjNTI2NGFlO1xcclxcbiAgfVxcclxcblxcclxcbiAgdG8ge1xcclxcbiAgICB3aWR0aDogMDtcXHJcXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi50YXNrcy1saXN0cyB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgcGFkZGluZzogMXJlbTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG4udGFza3MtbGlzdHMgbGkge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBoZWlnaHQ6IDJyZW07XFxyXFxufVxcclxcblxcclxcbi50YXNrLWNoZWNrYm94IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBnYXA6IDAuOHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmVkaXQtZGVsZXRlLWJ0biB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZ2FwOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZWRpdC1kZWxldGUtYnRuID4gKiB7XFxyXFxuICBwYWRkaW5nOiAwLjNyZW0gMXJlbTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIHRyYW5zaXRpb246IDAuM3MgZWFzZS1vdXQ7XFxyXFxuICBmb250LXNpemU6IDAuN3JlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxufVxcclxcblxcclxcbi5lZGl0LWRlbGV0ZS1idG4gPiAqOmhvdmVyIHtcXHJcXG4gIGJveC1zaGFkb3c6IDAgMCAyMHB4IC0xOHB4O1xcclxcbiAgdHJhbnNpdGlvbjogMC4zcyBlYXNlLWluO1xcclxcbn1cXHJcXG5cXHJcXG4uZWRpdC1kZWxldGUtYnRuID4gKjphY3RpdmUge1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcXHJcXG59XFxyXFxuXFxyXFxuLmVkaXQtYnRuIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCgyNDAsIDk5JSwgNjklKTtcXHJcXG59XFxyXFxuXFxyXFxuLmVkaXQtYnRuOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCgyNDAsIDEwMCUsIDczJSk7XFxyXFxufVxcclxcblxcclxcbi5lZGl0LWJ0bjphY3RpdmUge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDI0MCwgMzElLCA3NSUpO1xcclxcbn1cXHJcXG5cXHJcXG4uZGVsZXRlLWJ0biB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMCwgMTAwJSwgNzAlKTtcXHJcXG59XFxyXFxuXFxyXFxuLmRlbGV0ZS1idG46aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDAsIDk4JSwgNzYlKTtcXHJcXG59XFxyXFxuXFxyXFxuLmRlbGV0ZS1idG46YWN0aXZlIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCgwLCAzMSUsIDgyJSk7XFxyXFxufVxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFw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a0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSwwQkFBMEI7RUFDMUIsd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0Usb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UscUNBQXFDO0FBQ3ZDOztBQUVBO0VBQ0Usb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UsbUNBQW1DO0FBQ3JDOztBQUVBO0VBQ0Usa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0Usa0NBQWtDO0FBQ3BDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIGZvbnQtZmFtaWx5OiBWZXJkYW5hLCBzZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lci1hbGwge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBnYXA6IDFyZW07XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXItYWxsID4gKiB7XFxyXFxuICB3aWR0aDogNTB2dztcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8tdGl0bGUge1xcclxcbiAgZm9udC1mYW1pbHk6ICdTZWdvZSBTY3JpcHQnLCBzZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuLmRhaWx5LXRhc2stdGl0bGUge1xcclxcbiAgZm9udC1mYW1pbHk6IFZlcmRhbmEsIHNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbi1mb3JtIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG4gIGdhcDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZGF5LWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVzZXQtYWxsIHtcXHJcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIHRyYW5zaXRpb246IDAuNXMgZWFzZTtcXHJcXG59XFxyXFxuXFxyXFxuLnJlc2V0LWFsbDpob3ZlciB7XFxyXFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcclxcbiAgdHJhbnNpdGlvbjogMC4zcyBlYXNlO1xcclxcbn1cXHJcXG5cXHJcXG4uaW5wdXRCdG4ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGdhcDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmVudGVyLXRhc2sge1xcclxcbiAgZmxleC1ncm93OiAxO1xcclxcbiAgaGVpZ2h0OiAzMnB4O1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG4uaW4tcHV0IHtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgcGFkZGluZzogMCAwLjVyZW07XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBoc2woMCwgMCUsIDMyJSk7XFxyXFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXHJcXG59XFxyXFxuXFxyXFxuOjpwbGFjZWhvbGRlciB7XFxyXFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxyXFxuICBjb2xvcjogZGFya2dyZXk7XFxyXFxufVxcclxcblxcclxcbi5hZGQtdGFzayB7XFxyXFxuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCgyNDAsIDk5JSwgNjklKTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIHRyYW5zaXRpb246IDAuM3MgZWFzZS1vdXQ7XFxyXFxuICBmb250LXNpemU6IDAuN3JlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxufVxcclxcblxcclxcbi5hZGQtdGFzazpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMjQwLCAxMDAlLCA3MyUpO1xcclxcbiAgdHJhbnNpdGlvbjogMC4zcyBlYXNlLWluO1xcclxcbiAgYm94LXNoYWRvdzogMCAwIDIwcHggLTE4cHg7XFxyXFxufVxcclxcblxcclxcbi5jbGVhci1idG4ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogZW5kO1xcclxcbn1cXHJcXG5cXHJcXG4uY2xlYXItYWxsIHtcXHJcXG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDI0MCwgOTklLCA2OSUpO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICB0cmFuc2l0aW9uOiAwLjNzIGVhc2UtaW47XFxyXFxufVxcclxcblxcclxcbi5jbGVhci1hbGw6aG92ZXIge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDAsIDEwMCUsIDcwJSk7XFxyXFxuICB0cmFuc2l0aW9uOiAwLjNzIGVhc2Utb3V0O1xcclxcbiAgYm94LXNoYWRvdzogMCAwIDIwcHggLTE4cHg7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbjphY3RpdmUge1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcXHJcXG59XFxyXFxuXFxyXFxuLmlucHV0LWxhYmVsIHtcXHJcXG4gIGNvbG9yOiBoc2woMCwgMCUsIDYwJSk7XFxyXFxuICBmb250LXNpemU6IDE4cHg7XFxyXFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxyXFxuICBsZWZ0OiA5cHg7XFxyXFxuICB0b3A6IDVweDtcXHJcXG4gIHRyYW5zaXRpb246IDAuMnMgZWFzZSBhbGw7XFxyXFxuICAtbW96LXRyYW5zaXRpb246IDAuMnMgZWFzZSBhbGw7XFxyXFxuICAtd2Via2l0LXRyYW5zaXRpb246IDAuMnMgZWFzZSBhbGw7XFxyXFxufVxcclxcblxcclxcbi5pbi1wdXQ6Zm9jdXMgfiAuaW5wdXQtbGFiZWwsXFxyXFxuLmluLXB1dDpub3QoOnBsYWNlaG9sZGVyLXNob3duKSB+IC5pbnB1dC1sYWJlbCB7XFxyXFxuICB0b3A6IC0xMnB4O1xcclxcbiAgZm9udC1zaXplOiAxNHB4O1xcclxcbiAgY29sb3I6IGhzbCgyMjgsIDM2JSwgNTAlKTtcXHJcXG59XFxyXFxuXFxyXFxuLmJhciB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4uYmFyOjpiZWZvcmUsXFxyXFxuLmJhcjo6YWZ0ZXIge1xcclxcbiAgY29udGVudDogJyc7XFxyXFxuICBoZWlnaHQ6IDJweDtcXHJcXG4gIHdpZHRoOiAwO1xcclxcbiAgYm90dG9tOiAxcHg7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBiYWNrZ3JvdW5kOiBoc2woMjI4LCAzNiUsIDUwJSk7XFxyXFxuICB0cmFuc2l0aW9uOiAwLjJzIGVhc2UgYWxsO1xcclxcbiAgLW1vei10cmFuc2l0aW9uOiAwLjJzIGVhc2UgYWxsO1xcclxcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjJzIGVhc2UgYWxsO1xcclxcbn1cXHJcXG5cXHJcXG4uYmFyOjpiZWZvcmUge1xcclxcbiAgbGVmdDogNTAlO1xcclxcbn1cXHJcXG5cXHJcXG4uYmFyOjphZnRlciB7XFxyXFxuICByaWdodDogNTAlO1xcclxcbn1cXHJcXG5cXHJcXG4uaW4tcHV0OmZvY3VzIH4gLmJhcjo6YmVmb3JlLFxcclxcbi5pbi1wdXQ6Zm9jdXMgfiAuYmFyOjphZnRlciB7XFxyXFxuICB3aWR0aDogNTAlO1xcclxcbn1cXHJcXG5cXHJcXG4uaGlnaGxpZ2h0IHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGhlaWdodDogNzAlO1xcclxcbiAgd2lkdGg6IDkwJTtcXHJcXG4gIHRvcDogMjUlO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcclxcbiAgb3BhY2l0eTogMC41O1xcclxcbn1cXHJcXG5cXHJcXG4uaW4tcHV0OmZvY3VzIH4gLmhpZ2hsaWdodCB7XFxyXFxuICBhbmltYXRpb246IGlucHV0SGlnaGxpZ2h0ZXIgMC4zcyBlYXNlO1xcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIGlucHV0SGlnaGxpZ2h0ZXIge1xcclxcbiAgZnJvbSB7XFxyXFxuICAgIGJhY2tncm91bmQ6ICM1MjY0YWU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICB0byB7XFxyXFxuICAgIHdpZHRoOiAwO1xcclxcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLnRhc2tzLWxpc3RzIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcblxcclxcbi50YXNrcy1saXN0cyBsaSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGhlaWdodDogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2stY2hlY2tib3gge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGdhcDogMC44cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZWRpdC1kZWxldGUtYnRuIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBnYXA6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5lZGl0LWRlbGV0ZS1idG4gPiAqIHtcXHJcXG4gIHBhZGRpbmc6IDAuM3JlbSAxcmVtO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgdHJhbnNpdGlvbjogMC4zcyBlYXNlLW91dDtcXHJcXG4gIGZvbnQtc2l6ZTogMC43cmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG59XFxyXFxuXFxyXFxuLmVkaXQtZGVsZXRlLWJ0biA+ICo6aG92ZXIge1xcclxcbiAgYm94LXNoYWRvdzogMCAwIDIwcHggLTE4cHg7XFxyXFxuICB0cmFuc2l0aW9uOiAwLjNzIGVhc2UtaW47XFxyXFxufVxcclxcblxcclxcbi5lZGl0LWRlbGV0ZS1idG4gPiAqOmFjdGl2ZSB7XFxyXFxuICB0cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xcclxcbn1cXHJcXG5cXHJcXG4uZWRpdC1idG4ge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDI0MCwgOTklLCA2OSUpO1xcclxcbn1cXHJcXG5cXHJcXG4uZWRpdC1idG46aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDI0MCwgMTAwJSwgNzMlKTtcXHJcXG59XFxyXFxuXFxyXFxuLmVkaXQtYnRuOmFjdGl2ZSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMjQwLCAzMSUsIDc1JSk7XFxyXFxufVxcclxcblxcclxcbi5kZWxldGUtYnRuIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCgwLCAxMDAlLCA3MCUpO1xcclxcbn1cXHJcXG5cXHJcXG4uZGVsZXRlLWJ0bjpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMCwgOTglLCA3NiUpO1xcclxcbn1cXHJcXG5cXHJcXG4uZGVsZXRlLWJ0bjphY3RpdmUge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDAsIDMxJSwgODIlKTtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IFRhc2tMaXN0IGZyb20gJy4vbW9kdWxlcy9pbnRlcmFjdGl2ZS5qcyc7XG5cbmNvbnN0IHRhc2tMaXN0ID0gbmV3IFRhc2tMaXN0KCk7XG5cbnRhc2tMaXN0LmRpc3BsYXlUYXNrcygpOyIsImltcG9ydCBUYXNrIGZyb20gJy4vdGFzay5qcyc7XG5cbmZ1bmN0aW9uIGFkZFRhc2sodGFza0lucHV0LCB0YXNrcykge1xuICBjb25zdCB0YXNrTmFtZSA9IHRhc2tJbnB1dC52YWx1ZS50cmltKCk7XG4gIGNvbnN0IGlkID0gdGFza3MubGVuZ3RoICsgMTtcbiAgaWYgKHRhc2tOYW1lICE9PSAnJykge1xuICAgIGNvbnN0IHRhc2sgPSBuZXcgVGFzayh0YXNrTmFtZSwgZmFsc2UsIGlkKTtcbiAgICB0YXNrcy5wdXNoKHRhc2spO1xuICB9XG4gIHJldHVybiB0YXNrcztcbn1cblxuZXhwb3J0IGRlZmF1bHQgYWRkVGFzaztcbiIsIi8vIGNsZWFyQ29tcGxldGVkVGFzayBmdW5jdGlvblxuZnVuY3Rpb24gY2xlYXJDb21wbGV0ZWRUYXNrKHRhc2tzKSB7XG4gIHJldHVybiB0YXNrcy5maWx0ZXIoKHRhc2spID0+ICF0YXNrLnN0YXR1cyk7XG59XG5cbi8vIHRvZ2dsZVRhc2tTdGF0dXMgZnVuY3Rpb25cbmZ1bmN0aW9uIHRvZ2dsZVRhc2tTdGF0dXMoaWQsIHRhc2tzKSB7XG4gIHJldHVybiB0YXNrcy5tYXAoKHRhc2spID0+IHtcbiAgICBpZiAodGFzay5pZCA9PT0gaWQpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnRhc2ssXG4gICAgICAgIHN0YXR1czogIXRhc2suc3RhdHVzLFxuICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIHRhc2s7XG4gIH0pO1xufVxuXG4vLyBlZGl0VGFzayBmdW5jdGlvblxuZnVuY3Rpb24gZWRpdFRhc2soaWQsIG5ld05hbWUsIHRhc2tzLCBzYXZlVGFza3MsIGRpc3BsYXlUYXNrcykge1xuICBjb25zdCB0YXNrSW5kZXggPSB0YXNrcy5maW5kSW5kZXgoKHRhc2spID0+IHRhc2suaWQgPT09IGlkKTtcbiAgaWYgKHRhc2tJbmRleCAhPT0gLTEpIHtcbiAgICB0YXNrc1t0YXNrSW5kZXhdLm5hbWUgPSBuZXdOYW1lO1xuICAgIHNhdmVUYXNrcygpO1xuICAgIGRpc3BsYXlUYXNrcygpO1xuICB9XG59XG5cbmV4cG9ydCB7IGNsZWFyQ29tcGxldGVkVGFzaywgdG9nZ2xlVGFza1N0YXR1cywgZWRpdFRhc2sgfTsiLCJpbXBvcnQgYWRkVGFzayBmcm9tICcuL2FkZFRhc2suanMnO1xuaW1wb3J0IHJlbW92ZVRhc2sgZnJvbSAnLi9yZW1vdmVUYXNrLmpzJztcbmltcG9ydCB7IGNsZWFyQ29tcGxldGVkVGFzaywgdG9nZ2xlVGFza1N0YXR1cywgZWRpdFRhc2sgfSBmcm9tICcuL2NsZWFyVG9nZ2xlRWRpdFRhc2suanMnO1xuXG5jbGFzcyBUYXNrTGlzdCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMudGFza3MgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0YXNrcycpKSB8fCBbXTtcbiAgICB0aGlzLnRhc2tGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2stZm9ybScpO1xuICAgIHRoaXMudGFza0lucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2staW5wdXQnKTtcbiAgICB0aGlzLnRhc2tMaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2stbGlzdCcpO1xuICAgIHRoaXMuY2xlYXJDb21wbGV0ZWRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2xlYXItY29tcGxldGVkJyk7XG4gICAgdGhpcy5yZXNldEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXNldCcpO1xuICAgIHRoaXMudGFza0Zvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHRoaXMudGFza3MgPSBhZGRUYXNrKHRoaXMudGFza0lucHV0LCB0aGlzLnRhc2tzKTtcbiAgICAgIHRoaXMuc2F2ZVRhc2tzKCk7XG4gICAgICB0aGlzLmRpc3BsYXlUYXNrcygpO1xuICAgICAgdGhpcy50YXNrSW5wdXQudmFsdWUgPSAnJztcbiAgICB9KTtcbiAgICB0aGlzLmNsZWFyQ29tcGxldGVkQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgdGhpcy50YXNrcyA9IGNsZWFyQ29tcGxldGVkVGFzayh0aGlzLnRhc2tzKTtcbiAgICAgIHRoaXMuc2F2ZVRhc2tzKCk7XG4gICAgICB0aGlzLmRpc3BsYXlUYXNrcygpO1xuICAgIH0pO1xuICAgIHRoaXMucmVzZXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICB0aGlzLnRhc2tzID0gW107XG4gICAgICB0aGlzLnNhdmVUYXNrcygpO1xuICAgICAgdGhpcy5kaXNwbGF5VGFza3MoKTtcbiAgICB9KTtcbiAgICB0aGlzLmRpc3BsYXlUYXNrcygpO1xuICB9XG5cbiAgZWRpdFRhc2soaWQsIG5ld05hbWUpIHtcbiAgICBlZGl0VGFzayhpZCwgbmV3TmFtZSwgdGhpcy50YXNrcywgdGhpcy5zYXZlVGFza3MuYmluZCh0aGlzKSwgdGhpcy5kaXNwbGF5VGFza3MuYmluZCh0aGlzKSk7XG4gIH1cblxuICByZW1vdmVUYXNrKGlkKSB7XG4gICAgdGhpcy50YXNrcyA9IHJlbW92ZVRhc2soaWQsIHRoaXMudGFza3MpO1xuICAgIHRoaXMuc2F2ZVRhc2tzKCk7XG4gICAgdGhpcy5kaXNwbGF5VGFza3MoKTtcbiAgfVxuXG4gIHRvZ2dsZVRhc2tTdGF0dXMoaWQpIHtcbiAgICB0aGlzLnRhc2tzID0gdG9nZ2xlVGFza1N0YXR1cyhpZCwgdGhpcy50YXNrcyk7XG4gICAgdGhpcy5zYXZlVGFza3MoKTtcbiAgICB0aGlzLmRpc3BsYXlUYXNrcygpO1xuICB9XG5cbiAgcmVzZXRUYXNrcygpIHtcbiAgICB0aGlzLnRhc2tzID0gW107XG4gICAgdGhpcy5zYXZlVGFza3MoKTtcbiAgICB0aGlzLmRpc3BsYXlUYXNrcygpO1xuICB9XG5cbiAgc2F2ZVRhc2tzKCkge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0YXNrcycsIEpTT04uc3RyaW5naWZ5KHRoaXMudGFza3MpKTtcbiAgfVxuXG4gIGRpc3BsYXlUYXNrcygpIHtcbiAgICB0aGlzLnRhc2tMaXN0LmlubmVySFRNTCA9ICcnO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy50YXNrcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgY29uc3QgdGFzayA9IHRoaXMudGFza3NbaV07XG4gICAgICBjb25zdCB0YXNrRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICB0YXNrRWxlbWVudC5pbm5lckhUTUwgPSBgXG4gICAgICA8ZGl2IGNsYXNzPVwidGFzay1jaGVja2JveFwiPlxuICAgICAgICA8aW5wdXQgdHlwZT0nY2hlY2tib3gnICR7dGFzay5zdGF0dXMgPyAnY2hlY2tlZCcgOiAnJ30+XG4gICAgICAgIDxzcGFuICR7dGFzay5zdGF0dXMgPyAnc3R5bGU9XCJ0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaFwiJyA6ICcnfT5cbiAgICAgICAgICAke3Rhc2submFtZX1cbiAgICAgICAgPC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiZWRpdC1kZWxldGUtYnRuXCI+XG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiZWRpdC1idG5cIj5FZGl0PC9idXR0b24+XG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiZGVsZXRlLWJ0blwiPlg8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIGA7XG4gICAgICBjb25zdCBjaGVja2JveCA9IHRhc2tFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W3R5cGU9Y2hlY2tib3hdJyk7XG4gICAgICBjaGVja2JveC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB0aGlzLnRvZ2dsZVRhc2tTdGF0dXModGFzay5pZCkpO1xuICAgICAgY29uc3QgZWRpdEJ0biA9IHRhc2tFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0LWJ0bicpO1xuICAgICAgZWRpdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc3QgbmV3TmFtZSA9IHByb21wdCgnRW50ZXIgbmV3IHRhc2sgbmFtZTonLCB0YXNrLm5hbWUpO1xuICAgICAgICBpZiAobmV3TmFtZSAhPT0gbnVsbCAmJiBuZXdOYW1lLnRyaW0oKSAhPT0gJycpIHtcbiAgICAgICAgICB0aGlzLmVkaXRUYXNrKHRhc2suaWQsIG5ld05hbWUudHJpbSgpKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBjb25zdCBkZWxldGVCdG4gPSB0YXNrRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuZGVsZXRlLWJ0bicpO1xuICAgICAgZGVsZXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdGhpcy5yZW1vdmVUYXNrKHRhc2suaWQpKTtcbiAgICAgIHRoaXMudGFza0xpc3QuYXBwZW5kQ2hpbGQodGFza0VsZW1lbnQpO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUYXNrTGlzdDsiLCJmdW5jdGlvbiByZW1vdmVUYXNrKGlkLCB0YXNrcykge1xuICBjb25zdCB1cGRhdGVkVGFza3MgPSB0YXNrcy5maWx0ZXIoKHRhc2spID0+IHRhc2suaWQgIT09IGlkKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB1cGRhdGVkVGFza3MubGVuZ3RoOyBpICs9IDEpIHtcbiAgICB1cGRhdGVkVGFza3NbaV0uaWQgPSBpICsgMTtcbiAgfVxuICByZXR1cm4gdXBkYXRlZFRhc2tzO1xufVxuXG5leHBvcnQgZGVmYXVsdCByZW1vdmVUYXNrOyIsImNsYXNzIFRhc2sge1xuICBjb25zdHJ1Y3RvcihuYW1lLCBzdGF0dXMsIGlkKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLnN0YXR1cyA9IHN0YXR1cztcbiAgICB0aGlzLmlkID0gaWQ7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGFzazsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=