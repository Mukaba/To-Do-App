"use strict";
(self["webpackChunkwebpack"] = self["webpackChunkwebpack"] || []).push([["main"],{

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
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n  box-sizing: border-box;\r\n  margin: 0;\r\n  padding: 0;\r\n\r\n  /* border: 1px solid grey; */\r\n  list-style: none;\r\n  outline: none;\r\n  font-family: Verdana, serif;\r\n}\r\n\r\n.container-all {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 1rem;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.container-all > * {\r\n  width: 50vw;\r\n  text-align: center;\r\n}\r\n\r\n.todo-title {\r\n  font-family: 'Segoe Script', serif;\r\n}\r\n\r\n.daily-task-title {\r\n  font-family: Verdana, serif;\r\n}\r\n\r\n.main-form {\r\n  display: flex;\r\n  flex-direction: column;\r\n  text-align: left;\r\n  gap: 1rem;\r\n}\r\n\r\n.today-container {\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n.reset-all {\r\n  align-self: center;\r\n  cursor: pointer;\r\n  transition: 0.5s ease;\r\n}\r\n\r\n.reset-all:hover {\r\n  transform: rotate(360deg);\r\n  transition: 0.3s ease;\r\n}\r\n\r\n.inputBtn {\r\n  display: flex;\r\n  gap: 1rem;\r\n}\r\n\r\n.enter-task {\r\n  flex-grow: 1;\r\n  height: 32px;\r\n  position: relative;\r\n}\r\n\r\n.in-put {\r\n  height: 100%;\r\n  width: 100%;\r\n  padding: 0 0.5rem;\r\n  display: block;\r\n  border: none;\r\n  border-bottom: 1px solid #515151;\r\n  background: transparent;\r\n}\r\n\r\n::placeholder {\r\n  font-style: italic;\r\n  color: darkgrey;\r\n}\r\n\r\n.add-task {\r\n  padding: 0.5rem 1rem;\r\n  border-radius: 5px;\r\n  cursor: pointer;\r\n  background-color: #6363fe;\r\n  border: none;\r\n  color: white;\r\n  transition: 0.3s ease-out;\r\n  font-size: 0.7rem;\r\n  font-weight: 400;\r\n}\r\n\r\n.add-task:hover {\r\n  background-color: #7474ff;\r\n  transition: 0.3s ease-in;\r\n  box-shadow: 0 0 20px -18px;\r\n}\r\n\r\n.clear-btn {\r\n  display: flex;\r\n  justify-content: end;\r\n}\r\n\r\n.clear-all {\r\n  padding: 0.5rem 1rem;\r\n  border-radius: 5px;\r\n  background-color: #6363fe;\r\n  border: none;\r\n  color: white;\r\n  cursor: pointer;\r\n  transition: 0.3s ease-in;\r\n}\r\n\r\n.clear-all:hover {\r\n  cursor: pointer;\r\n  background-color: #ff6464;\r\n  transition: 0.3s ease-out;\r\n  box-shadow: 0 0 20px -18px;\r\n}\r\n\r\nbutton:active {\r\n  transform: scale(0.95);\r\n}\r\n\r\n.input-label {\r\n  color: #999;\r\n  font-size: 18px;\r\n  font-weight: normal;\r\n  position: absolute;\r\n  pointer-events: none;\r\n  left: 9px;\r\n  top: 5px;\r\n  transition: 0.2s ease all;\r\n  -moz-transition: 0.2s ease all;\r\n  -webkit-transition: 0.2s ease all;\r\n}\r\n\r\n.in-put:focus ~ .input-label,\r\n.in-put:not(:placeholder-shown) ~ .input-label {\r\n  top: -12px;\r\n  font-size: 14px;\r\n  color: #5264ae;\r\n}\r\n\r\n.bar {\r\n  position: relative;\r\n  display: block;\r\n  width: 100%;\r\n}\r\n\r\n.bar::before,\r\n.bar::after {\r\n  content: '';\r\n  height: 2px;\r\n  width: 0;\r\n  bottom: 1px;\r\n  position: absolute;\r\n  background: #5264ae;\r\n  transition: 0.2s ease all;\r\n  -moz-transition: 0.2s ease all;\r\n  -webkit-transition: 0.2s ease all;\r\n}\r\n\r\n.bar::before {\r\n  left: 50%;\r\n}\r\n\r\n.bar::after {\r\n  right: 50%;\r\n}\r\n\r\n.in-put:focus ~ .bar::before,\r\n.in-put:focus ~ .bar::after {\r\n  width: 50%;\r\n}\r\n\r\n.highlight {\r\n  position: absolute;\r\n  height: 70%;\r\n  width: 90%;\r\n  top: 25%;\r\n  left: 0;\r\n  pointer-events: none;\r\n  opacity: 0.5;\r\n}\r\n\r\n.in-put:focus ~ .highlight {\r\n  animation: inputHighlighter 0.3s ease;\r\n}\r\n\r\n@keyframes inputHighlighter {\r\n  from {\r\n    background: #5264ae;\r\n  }\r\n\r\n  to {\r\n    width: 0;\r\n    background: transparent;\r\n  }\r\n}\r\n\r\n.tasks-lists {\r\n  background-color: whitesmoke;\r\n  border-radius: 5px;\r\n  padding: 1rem;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.tasks-lists li {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  height: 2rem;\r\n}\r\n\r\n.task-checkbox {\r\n  display: flex;\r\n  gap: 0.8rem;\r\n}\r\n\r\n.edit-delete-btn {\r\n  display: flex;\r\n  gap: 1rem;\r\n}\r\n\r\n.edit-delete-btn > * {\r\n  padding: 0.3rem 1rem;\r\n  cursor: pointer;\r\n  border-radius: 5px;\r\n  border: none;\r\n  color: white;\r\n  transition: 0.3s ease-out;\r\n  font-size: 0.7rem;\r\n  font-weight: 400;\r\n}\r\n\r\n.edit-delete-btn > *:hover {\r\n  box-shadow: 0 0 20px -18px;\r\n  transition: 0.3s ease-in;\r\n}\r\n\r\n.edit-delete-btn > *:active {\r\n  transform: scale(0.95);\r\n}\r\n\r\n.edit-btn {\r\n  background-color: #6363fe;\r\n}\r\n\r\n.edit-btn:hover {\r\n  background-color: #7474ff;\r\n}\r\n\r\n.edit-btn:active {\r\n  background-color: #acacd3;\r\n}\r\n\r\n.delete-btn {\r\n  background-color: #ff6464;\r\n}\r\n\r\n.delete-btn:hover {\r\n  background-color: #fe8484;\r\n}\r\n\r\n.delete-btn:active {\r\n  background-color: #e0c4c4;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["* {\r\n  box-sizing: border-box;\r\n  margin: 0;\r\n  padding: 0;\r\n\r\n  /* border: 1px solid grey; */\r\n  list-style: none;\r\n  outline: none;\r\n  font-family: Verdana, serif;\r\n}\r\n\r\n.container-all {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 1rem;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.container-all > * {\r\n  width: 50vw;\r\n  text-align: center;\r\n}\r\n\r\n.todo-title {\r\n  font-family: 'Segoe Script', serif;\r\n}\r\n\r\n.daily-task-title {\r\n  font-family: Verdana, serif;\r\n}\r\n\r\n.main-form {\r\n  display: flex;\r\n  flex-direction: column;\r\n  text-align: left;\r\n  gap: 1rem;\r\n}\r\n\r\n.today-container {\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n.reset-all {\r\n  align-self: center;\r\n  cursor: pointer;\r\n  transition: 0.5s ease;\r\n}\r\n\r\n.reset-all:hover {\r\n  transform: rotate(360deg);\r\n  transition: 0.3s ease;\r\n}\r\n\r\n.inputBtn {\r\n  display: flex;\r\n  gap: 1rem;\r\n}\r\n\r\n.enter-task {\r\n  flex-grow: 1;\r\n  height: 32px;\r\n  position: relative;\r\n}\r\n\r\n.in-put {\r\n  height: 100%;\r\n  width: 100%;\r\n  padding: 0 0.5rem;\r\n  display: block;\r\n  border: none;\r\n  border-bottom: 1px solid #515151;\r\n  background: transparent;\r\n}\r\n\r\n::placeholder {\r\n  font-style: italic;\r\n  color: darkgrey;\r\n}\r\n\r\n.add-task {\r\n  padding: 0.5rem 1rem;\r\n  border-radius: 5px;\r\n  cursor: pointer;\r\n  background-color: #6363fe;\r\n  border: none;\r\n  color: white;\r\n  transition: 0.3s ease-out;\r\n  font-size: 0.7rem;\r\n  font-weight: 400;\r\n}\r\n\r\n.add-task:hover {\r\n  background-color: #7474ff;\r\n  transition: 0.3s ease-in;\r\n  box-shadow: 0 0 20px -18px;\r\n}\r\n\r\n.clear-btn {\r\n  display: flex;\r\n  justify-content: end;\r\n}\r\n\r\n.clear-all {\r\n  padding: 0.5rem 1rem;\r\n  border-radius: 5px;\r\n  background-color: #6363fe;\r\n  border: none;\r\n  color: white;\r\n  cursor: pointer;\r\n  transition: 0.3s ease-in;\r\n}\r\n\r\n.clear-all:hover {\r\n  cursor: pointer;\r\n  background-color: #ff6464;\r\n  transition: 0.3s ease-out;\r\n  box-shadow: 0 0 20px -18px;\r\n}\r\n\r\nbutton:active {\r\n  transform: scale(0.95);\r\n}\r\n\r\n.input-label {\r\n  color: #999;\r\n  font-size: 18px;\r\n  font-weight: normal;\r\n  position: absolute;\r\n  pointer-events: none;\r\n  left: 9px;\r\n  top: 5px;\r\n  transition: 0.2s ease all;\r\n  -moz-transition: 0.2s ease all;\r\n  -webkit-transition: 0.2s ease all;\r\n}\r\n\r\n.in-put:focus ~ .input-label,\r\n.in-put:not(:placeholder-shown) ~ .input-label {\r\n  top: -12px;\r\n  font-size: 14px;\r\n  color: #5264ae;\r\n}\r\n\r\n.bar {\r\n  position: relative;\r\n  display: block;\r\n  width: 100%;\r\n}\r\n\r\n.bar::before,\r\n.bar::after {\r\n  content: '';\r\n  height: 2px;\r\n  width: 0;\r\n  bottom: 1px;\r\n  position: absolute;\r\n  background: #5264ae;\r\n  transition: 0.2s ease all;\r\n  -moz-transition: 0.2s ease all;\r\n  -webkit-transition: 0.2s ease all;\r\n}\r\n\r\n.bar::before {\r\n  left: 50%;\r\n}\r\n\r\n.bar::after {\r\n  right: 50%;\r\n}\r\n\r\n.in-put:focus ~ .bar::before,\r\n.in-put:focus ~ .bar::after {\r\n  width: 50%;\r\n}\r\n\r\n.highlight {\r\n  position: absolute;\r\n  height: 70%;\r\n  width: 90%;\r\n  top: 25%;\r\n  left: 0;\r\n  pointer-events: none;\r\n  opacity: 0.5;\r\n}\r\n\r\n.in-put:focus ~ .highlight {\r\n  animation: inputHighlighter 0.3s ease;\r\n}\r\n\r\n@keyframes inputHighlighter {\r\n  from {\r\n    background: #5264ae;\r\n  }\r\n\r\n  to {\r\n    width: 0;\r\n    background: transparent;\r\n  }\r\n}\r\n\r\n.tasks-lists {\r\n  background-color: whitesmoke;\r\n  border-radius: 5px;\r\n  padding: 1rem;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.tasks-lists li {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  height: 2rem;\r\n}\r\n\r\n.task-checkbox {\r\n  display: flex;\r\n  gap: 0.8rem;\r\n}\r\n\r\n.edit-delete-btn {\r\n  display: flex;\r\n  gap: 1rem;\r\n}\r\n\r\n.edit-delete-btn > * {\r\n  padding: 0.3rem 1rem;\r\n  cursor: pointer;\r\n  border-radius: 5px;\r\n  border: none;\r\n  color: white;\r\n  transition: 0.3s ease-out;\r\n  font-size: 0.7rem;\r\n  font-weight: 400;\r\n}\r\n\r\n.edit-delete-btn > *:hover {\r\n  box-shadow: 0 0 20px -18px;\r\n  transition: 0.3s ease-in;\r\n}\r\n\r\n.edit-delete-btn > *:active {\r\n  transform: scale(0.95);\r\n}\r\n\r\n.edit-btn {\r\n  background-color: #6363fe;\r\n}\r\n\r\n.edit-btn:hover {\r\n  background-color: #7474ff;\r\n}\r\n\r\n.edit-btn:active {\r\n  background-color: #acacd3;\r\n}\r\n\r\n.delete-btn {\r\n  background-color: #ff6464;\r\n}\r\n\r\n.delete-btn:hover {\r\n  background-color: #fe8484;\r\n}\r\n\r\n.delete-btn:active {\r\n  background-color: #e0c4c4;\r\n}\r\n"],"sourceRoot":""}]);
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
        <button type="button" class='delete-btn'>X</button>
      </div>
    `;

      const checkbox = taskElement.querySelector('input[type=checkbox]');
      checkbox.addEventListener('chang', () => this.toggleTaskStatus(task.id));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQSw2Q0FBNkMsNkJBQTZCLGdCQUFnQixpQkFBaUIscUNBQXFDLHlCQUF5QixvQkFBb0Isa0NBQWtDLEtBQUssd0JBQXdCLG9CQUFvQiw2QkFBNkIsZ0JBQWdCLDhCQUE4QiwwQkFBMEIsS0FBSyw0QkFBNEIsa0JBQWtCLHlCQUF5QixLQUFLLHFCQUFxQix5Q0FBeUMsS0FBSywyQkFBMkIsa0NBQWtDLEtBQUssb0JBQW9CLG9CQUFvQiw2QkFBNkIsdUJBQXVCLGdCQUFnQixLQUFLLDBCQUEwQixvQkFBb0IscUNBQXFDLEtBQUssb0JBQW9CLHlCQUF5QixzQkFBc0IsNEJBQTRCLEtBQUssMEJBQTBCLGdDQUFnQyw0QkFBNEIsS0FBSyxtQkFBbUIsb0JBQW9CLGdCQUFnQixLQUFLLHFCQUFxQixtQkFBbUIsbUJBQW1CLHlCQUF5QixLQUFLLGlCQUFpQixtQkFBbUIsa0JBQWtCLHdCQUF3QixxQkFBcUIsbUJBQW1CLHVDQUF1Qyw4QkFBOEIsS0FBSyx1QkFBdUIseUJBQXlCLHNCQUFzQixLQUFLLG1CQUFtQiwyQkFBMkIseUJBQXlCLHNCQUFzQixnQ0FBZ0MsbUJBQW1CLG1CQUFtQixnQ0FBZ0Msd0JBQXdCLHVCQUF1QixLQUFLLHlCQUF5QixnQ0FBZ0MsK0JBQStCLGlDQUFpQyxLQUFLLG9CQUFvQixvQkFBb0IsMkJBQTJCLEtBQUssb0JBQW9CLDJCQUEyQix5QkFBeUIsZ0NBQWdDLG1CQUFtQixtQkFBbUIsc0JBQXNCLCtCQUErQixLQUFLLDBCQUEwQixzQkFBc0IsZ0NBQWdDLGdDQUFnQyxpQ0FBaUMsS0FBSyx1QkFBdUIsNkJBQTZCLEtBQUssc0JBQXNCLGtCQUFrQixzQkFBc0IsMEJBQTBCLHlCQUF5QiwyQkFBMkIsZ0JBQWdCLGVBQWUsZ0NBQWdDLHFDQUFxQyx3Q0FBd0MsS0FBSyx5RkFBeUYsaUJBQWlCLHNCQUFzQixxQkFBcUIsS0FBSyxjQUFjLHlCQUF5QixxQkFBcUIsa0JBQWtCLEtBQUssc0NBQXNDLGtCQUFrQixrQkFBa0IsZUFBZSxrQkFBa0IseUJBQXlCLDBCQUEwQixnQ0FBZ0MscUNBQXFDLHdDQUF3QyxLQUFLLHNCQUFzQixnQkFBZ0IsS0FBSyxxQkFBcUIsaUJBQWlCLEtBQUssc0VBQXNFLGlCQUFpQixLQUFLLG9CQUFvQix5QkFBeUIsa0JBQWtCLGlCQUFpQixlQUFlLGNBQWMsMkJBQTJCLG1CQUFtQixLQUFLLG9DQUFvQyw0Q0FBNEMsS0FBSyxxQ0FBcUMsWUFBWSw0QkFBNEIsT0FBTyxjQUFjLGlCQUFpQixnQ0FBZ0MsT0FBTyxLQUFLLHNCQUFzQixtQ0FBbUMseUJBQXlCLG9CQUFvQixvQkFBb0IsNkJBQTZCLEtBQUsseUJBQXlCLG9CQUFvQixxQ0FBcUMsMEJBQTBCLG1CQUFtQixLQUFLLHdCQUF3QixvQkFBb0Isa0JBQWtCLEtBQUssMEJBQTBCLG9CQUFvQixnQkFBZ0IsS0FBSyw4QkFBOEIsMkJBQTJCLHNCQUFzQix5QkFBeUIsbUJBQW1CLG1CQUFtQixnQ0FBZ0Msd0JBQXdCLHVCQUF1QixLQUFLLG9DQUFvQyxpQ0FBaUMsK0JBQStCLEtBQUsscUNBQXFDLDZCQUE2QixLQUFLLG1CQUFtQixnQ0FBZ0MsS0FBSyx5QkFBeUIsZ0NBQWdDLEtBQUssMEJBQTBCLGdDQUFnQyxLQUFLLHFCQUFxQixnQ0FBZ0MsS0FBSywyQkFBMkIsZ0NBQWdDLEtBQUssNEJBQTRCLGdDQUFnQyxLQUFLLFdBQVcsZ0ZBQWdGLFlBQVksV0FBVyxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxNQUFNLFVBQVUsVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE1BQU0sTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FB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QUM5RCxnQkFBZ0IsMkRBQTJEO0FBQzNFLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxRQUFROzs7Ozs7Ozs7Ozs7OztBQzVGdkI7QUFDQTtBQUNBLGtCQUFrQix5QkFBeUI7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsVUFBVTs7Ozs7Ozs7Ozs7Ozs7QUNSekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2svLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3dlYnBhY2svLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYnBhY2svLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3dlYnBhY2svLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYnBhY2svLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VicGFjay8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLy4vc3JjL21vZHVsZXMvYWRkVGFzay5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLy4vc3JjL21vZHVsZXMvY2xlYXJUb2dnbGVFZGl0VGFzay5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLy4vc3JjL21vZHVsZXMvaW50ZXJhY3RpdmUuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay8uL3NyYy9tb2R1bGVzL3JlbW92ZVRhc2suanMiLCJ3ZWJwYWNrOi8vd2VicGFjay8uL3NyYy9tb2R1bGVzL3Rhc2suanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcblxcclxcbiAgLyogYm9yZGVyOiAxcHggc29saWQgZ3JleTsgKi9cXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgZm9udC1mYW1pbHk6IFZlcmRhbmEsIHNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFpbmVyLWFsbCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGdhcDogMXJlbTtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lci1hbGwgPiAqIHtcXHJcXG4gIHdpZHRoOiA1MHZ3O1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby10aXRsZSB7XFxyXFxuICBmb250LWZhbWlseTogJ1NlZ29lIFNjcmlwdCcsIHNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG4uZGFpbHktdGFzay10aXRsZSB7XFxyXFxuICBmb250LWZhbWlseTogVmVyZGFuYSwgc2VyaWY7XFxyXFxufVxcclxcblxcclxcbi5tYWluLWZvcm0ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbiAgZ2FwOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kYXktY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxufVxcclxcblxcclxcbi5yZXNldC1hbGwge1xcclxcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgdHJhbnNpdGlvbjogMC41cyBlYXNlO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVzZXQtYWxsOmhvdmVyIHtcXHJcXG4gIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxyXFxuICB0cmFuc2l0aW9uOiAwLjNzIGVhc2U7XFxyXFxufVxcclxcblxcclxcbi5pbnB1dEJ0biB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZ2FwOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZW50ZXItdGFzayB7XFxyXFxuICBmbGV4LWdyb3c6IDE7XFxyXFxuICBoZWlnaHQ6IDMycHg7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcbi5pbi1wdXQge1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBwYWRkaW5nOiAwIDAuNXJlbTtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM1MTUxNTE7XFxyXFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXHJcXG59XFxyXFxuXFxyXFxuOjpwbGFjZWhvbGRlciB7XFxyXFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxyXFxuICBjb2xvcjogZGFya2dyZXk7XFxyXFxufVxcclxcblxcclxcbi5hZGQtdGFzayB7XFxyXFxuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICM2MzYzZmU7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICB0cmFuc2l0aW9uOiAwLjNzIGVhc2Utb3V0O1xcclxcbiAgZm9udC1zaXplOiAwLjdyZW07XFxyXFxuICBmb250LXdlaWdodDogNDAwO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkLXRhc2s6aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzc0NzRmZjtcXHJcXG4gIHRyYW5zaXRpb246IDAuM3MgZWFzZS1pbjtcXHJcXG4gIGJveC1zaGFkb3c6IDAgMCAyMHB4IC0xOHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY2xlYXItYnRuIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcXHJcXG59XFxyXFxuXFxyXFxuLmNsZWFyLWFsbCB7XFxyXFxuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICM2MzYzZmU7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICB0cmFuc2l0aW9uOiAwLjNzIGVhc2UtaW47XFxyXFxufVxcclxcblxcclxcbi5jbGVhci1hbGw6aG92ZXIge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNjQ2NDtcXHJcXG4gIHRyYW5zaXRpb246IDAuM3MgZWFzZS1vdXQ7XFxyXFxuICBib3gtc2hhZG93OiAwIDAgMjBweCAtMThweDtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uOmFjdGl2ZSB7XFxyXFxuICB0cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xcclxcbn1cXHJcXG5cXHJcXG4uaW5wdXQtbGFiZWwge1xcclxcbiAgY29sb3I6ICM5OTk7XFxyXFxuICBmb250LXNpemU6IDE4cHg7XFxyXFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxyXFxuICBsZWZ0OiA5cHg7XFxyXFxuICB0b3A6IDVweDtcXHJcXG4gIHRyYW5zaXRpb246IDAuMnMgZWFzZSBhbGw7XFxyXFxuICAtbW96LXRyYW5zaXRpb246IDAuMnMgZWFzZSBhbGw7XFxyXFxuICAtd2Via2l0LXRyYW5zaXRpb246IDAuMnMgZWFzZSBhbGw7XFxyXFxufVxcclxcblxcclxcbi5pbi1wdXQ6Zm9jdXMgfiAuaW5wdXQtbGFiZWwsXFxyXFxuLmluLXB1dDpub3QoOnBsYWNlaG9sZGVyLXNob3duKSB+IC5pbnB1dC1sYWJlbCB7XFxyXFxuICB0b3A6IC0xMnB4O1xcclxcbiAgZm9udC1zaXplOiAxNHB4O1xcclxcbiAgY29sb3I6ICM1MjY0YWU7XFxyXFxufVxcclxcblxcclxcbi5iYXIge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmJhcjo6YmVmb3JlLFxcclxcbi5iYXI6OmFmdGVyIHtcXHJcXG4gIGNvbnRlbnQ6ICcnO1xcclxcbiAgaGVpZ2h0OiAycHg7XFxyXFxuICB3aWR0aDogMDtcXHJcXG4gIGJvdHRvbTogMXB4O1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgYmFja2dyb3VuZDogIzUyNjRhZTtcXHJcXG4gIHRyYW5zaXRpb246IDAuMnMgZWFzZSBhbGw7XFxyXFxuICAtbW96LXRyYW5zaXRpb246IDAuMnMgZWFzZSBhbGw7XFxyXFxuICAtd2Via2l0LXRyYW5zaXRpb246IDAuMnMgZWFzZSBhbGw7XFxyXFxufVxcclxcblxcclxcbi5iYXI6OmJlZm9yZSB7XFxyXFxuICBsZWZ0OiA1MCU7XFxyXFxufVxcclxcblxcclxcbi5iYXI6OmFmdGVyIHtcXHJcXG4gIHJpZ2h0OiA1MCU7XFxyXFxufVxcclxcblxcclxcbi5pbi1wdXQ6Zm9jdXMgfiAuYmFyOjpiZWZvcmUsXFxyXFxuLmluLXB1dDpmb2N1cyB+IC5iYXI6OmFmdGVyIHtcXHJcXG4gIHdpZHRoOiA1MCU7XFxyXFxufVxcclxcblxcclxcbi5oaWdobGlnaHQge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgaGVpZ2h0OiA3MCU7XFxyXFxuICB3aWR0aDogOTAlO1xcclxcbiAgdG9wOiAyNSU7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxyXFxuICBvcGFjaXR5OiAwLjU7XFxyXFxufVxcclxcblxcclxcbi5pbi1wdXQ6Zm9jdXMgfiAuaGlnaGxpZ2h0IHtcXHJcXG4gIGFuaW1hdGlvbjogaW5wdXRIaWdobGlnaHRlciAwLjNzIGVhc2U7XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgaW5wdXRIaWdobGlnaHRlciB7XFxyXFxuICBmcm9tIHtcXHJcXG4gICAgYmFja2dyb3VuZDogIzUyNjRhZTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIHRvIHtcXHJcXG4gICAgd2lkdGg6IDA7XFxyXFxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4udGFza3MtbGlzdHMge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIHBhZGRpbmc6IDFyZW07XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2tzLWxpc3RzIGxpIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgaGVpZ2h0OiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4udGFzay1jaGVja2JveCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZ2FwOiAwLjhyZW07XFxyXFxufVxcclxcblxcclxcbi5lZGl0LWRlbGV0ZS1idG4ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGdhcDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmVkaXQtZGVsZXRlLWJ0biA+ICoge1xcclxcbiAgcGFkZGluZzogMC4zcmVtIDFyZW07XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICB0cmFuc2l0aW9uOiAwLjNzIGVhc2Utb3V0O1xcclxcbiAgZm9udC1zaXplOiAwLjdyZW07XFxyXFxuICBmb250LXdlaWdodDogNDAwO1xcclxcbn1cXHJcXG5cXHJcXG4uZWRpdC1kZWxldGUtYnRuID4gKjpob3ZlciB7XFxyXFxuICBib3gtc2hhZG93OiAwIDAgMjBweCAtMThweDtcXHJcXG4gIHRyYW5zaXRpb246IDAuM3MgZWFzZS1pbjtcXHJcXG59XFxyXFxuXFxyXFxuLmVkaXQtZGVsZXRlLWJ0biA+ICo6YWN0aXZlIHtcXHJcXG4gIHRyYW5zZm9ybTogc2NhbGUoMC45NSk7XFxyXFxufVxcclxcblxcclxcbi5lZGl0LWJ0biB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjM2M2ZlO1xcclxcbn1cXHJcXG5cXHJcXG4uZWRpdC1idG46aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzc0NzRmZjtcXHJcXG59XFxyXFxuXFxyXFxuLmVkaXQtYnRuOmFjdGl2ZSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWNhY2QzO1xcclxcbn1cXHJcXG5cXHJcXG4uZGVsZXRlLWJ0biB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY2NDY0O1xcclxcbn1cXHJcXG5cXHJcXG4uZGVsZXRlLWJ0bjpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmU4NDg0O1xcclxcbn1cXHJcXG5cXHJcXG4uZGVsZXRlLWJ0bjphY3RpdmUge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UwYzRjNDtcXHJcXG59XFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHNCQUFzQjtFQUN0QixTQUFTO0VBQ1QsVUFBVTs7RUFFViw0QkFBNEI7RUFDNUIsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFD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QUNFLDBCQUEwQjtFQUMxQix3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG5cXHJcXG4gIC8qIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7ICovXFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIGZvbnQtZmFtaWx5OiBWZXJkYW5hLCBzZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lci1hbGwge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBnYXA6IDFyZW07XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXItYWxsID4gKiB7XFxyXFxuICB3aWR0aDogNTB2dztcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8tdGl0bGUge1xcclxcbiAgZm9udC1mYW1pbHk6ICdTZWdvZSBTY3JpcHQnLCBzZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuLmRhaWx5LXRhc2stdGl0bGUge1xcclxcbiAgZm9udC1mYW1pbHk6IFZlcmRhbmEsIHNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbi1mb3JtIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG4gIGdhcDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZGF5LWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVzZXQtYWxsIHtcXHJcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIHRyYW5zaXRpb246IDAuNXMgZWFzZTtcXHJcXG59XFxyXFxuXFxyXFxuLnJlc2V0LWFsbDpob3ZlciB7XFxyXFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcclxcbiAgdHJhbnNpdGlvbjogMC4zcyBlYXNlO1xcclxcbn1cXHJcXG5cXHJcXG4uaW5wdXRCdG4ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGdhcDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmVudGVyLXRhc2sge1xcclxcbiAgZmxleC1ncm93OiAxO1xcclxcbiAgaGVpZ2h0OiAzMnB4O1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG4uaW4tcHV0IHtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgcGFkZGluZzogMCAwLjVyZW07XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNTE1MTUxO1xcclxcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxyXFxufVxcclxcblxcclxcbjo6cGxhY2Vob2xkZXIge1xcclxcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcclxcbiAgY29sb3I6IGRhcmtncmV5O1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkLXRhc2sge1xcclxcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjM2M2ZlO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgdHJhbnNpdGlvbjogMC4zcyBlYXNlLW91dDtcXHJcXG4gIGZvbnQtc2l6ZTogMC43cmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZC10YXNrOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICM3NDc0ZmY7XFxyXFxuICB0cmFuc2l0aW9uOiAwLjNzIGVhc2UtaW47XFxyXFxuICBib3gtc2hhZG93OiAwIDAgMjBweCAtMThweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNsZWFyLWJ0biB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBlbmQ7XFxyXFxufVxcclxcblxcclxcbi5jbGVhci1hbGwge1xcclxcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjM2M2ZlO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgdHJhbnNpdGlvbjogMC4zcyBlYXNlLWluO1xcclxcbn1cXHJcXG5cXHJcXG4uY2xlYXItYWxsOmhvdmVyIHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjY0NjQ7XFxyXFxuICB0cmFuc2l0aW9uOiAwLjNzIGVhc2Utb3V0O1xcclxcbiAgYm94LXNoYWRvdzogMCAwIDIwcHggLTE4cHg7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbjphY3RpdmUge1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcXHJcXG59XFxyXFxuXFxyXFxuLmlucHV0LWxhYmVsIHtcXHJcXG4gIGNvbG9yOiAjOTk5O1xcclxcbiAgZm9udC1zaXplOiAxOHB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcclxcbiAgbGVmdDogOXB4O1xcclxcbiAgdG9wOiA1cHg7XFxyXFxuICB0cmFuc2l0aW9uOiAwLjJzIGVhc2UgYWxsO1xcclxcbiAgLW1vei10cmFuc2l0aW9uOiAwLjJzIGVhc2UgYWxsO1xcclxcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjJzIGVhc2UgYWxsO1xcclxcbn1cXHJcXG5cXHJcXG4uaW4tcHV0OmZvY3VzIH4gLmlucHV0LWxhYmVsLFxcclxcbi5pbi1wdXQ6bm90KDpwbGFjZWhvbGRlci1zaG93bikgfiAuaW5wdXQtbGFiZWwge1xcclxcbiAgdG9wOiAtMTJweDtcXHJcXG4gIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gIGNvbG9yOiAjNTI2NGFlO1xcclxcbn1cXHJcXG5cXHJcXG4uYmFyIHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5iYXI6OmJlZm9yZSxcXHJcXG4uYmFyOjphZnRlciB7XFxyXFxuICBjb250ZW50OiAnJztcXHJcXG4gIGhlaWdodDogMnB4O1xcclxcbiAgd2lkdGg6IDA7XFxyXFxuICBib3R0b206IDFweDtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGJhY2tncm91bmQ6ICM1MjY0YWU7XFxyXFxuICB0cmFuc2l0aW9uOiAwLjJzIGVhc2UgYWxsO1xcclxcbiAgLW1vei10cmFuc2l0aW9uOiAwLjJzIGVhc2UgYWxsO1xcclxcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjJzIGVhc2UgYWxsO1xcclxcbn1cXHJcXG5cXHJcXG4uYmFyOjpiZWZvcmUge1xcclxcbiAgbGVmdDogNTAlO1xcclxcbn1cXHJcXG5cXHJcXG4uYmFyOjphZnRlciB7XFxyXFxuICByaWdodDogNTAlO1xcclxcbn1cXHJcXG5cXHJcXG4uaW4tcHV0OmZvY3VzIH4gLmJhcjo6YmVmb3JlLFxcclxcbi5pbi1wdXQ6Zm9jdXMgfiAuYmFyOjphZnRlciB7XFxyXFxuICB3aWR0aDogNTAlO1xcclxcbn1cXHJcXG5cXHJcXG4uaGlnaGxpZ2h0IHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGhlaWdodDogNzAlO1xcclxcbiAgd2lkdGg6IDkwJTtcXHJcXG4gIHRvcDogMjUlO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcclxcbiAgb3BhY2l0eTogMC41O1xcclxcbn1cXHJcXG5cXHJcXG4uaW4tcHV0OmZvY3VzIH4gLmhpZ2hsaWdodCB7XFxyXFxuICBhbmltYXRpb246IGlucHV0SGlnaGxpZ2h0ZXIgMC4zcyBlYXNlO1xcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIGlucHV0SGlnaGxpZ2h0ZXIge1xcclxcbiAgZnJvbSB7XFxyXFxuICAgIGJhY2tncm91bmQ6ICM1MjY0YWU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICB0byB7XFxyXFxuICAgIHdpZHRoOiAwO1xcclxcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLnRhc2tzLWxpc3RzIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcblxcclxcbi50YXNrcy1saXN0cyBsaSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGhlaWdodDogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2stY2hlY2tib3gge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGdhcDogMC44cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZWRpdC1kZWxldGUtYnRuIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBnYXA6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5lZGl0LWRlbGV0ZS1idG4gPiAqIHtcXHJcXG4gIHBhZGRpbmc6IDAuM3JlbSAxcmVtO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgdHJhbnNpdGlvbjogMC4zcyBlYXNlLW91dDtcXHJcXG4gIGZvbnQtc2l6ZTogMC43cmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG59XFxyXFxuXFxyXFxuLmVkaXQtZGVsZXRlLWJ0biA+ICo6aG92ZXIge1xcclxcbiAgYm94LXNoYWRvdzogMCAwIDIwcHggLTE4cHg7XFxyXFxuICB0cmFuc2l0aW9uOiAwLjNzIGVhc2UtaW47XFxyXFxufVxcclxcblxcclxcbi5lZGl0LWRlbGV0ZS1idG4gPiAqOmFjdGl2ZSB7XFxyXFxuICB0cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xcclxcbn1cXHJcXG5cXHJcXG4uZWRpdC1idG4ge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzYzNjNmZTtcXHJcXG59XFxyXFxuXFxyXFxuLmVkaXQtYnRuOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICM3NDc0ZmY7XFxyXFxufVxcclxcblxcclxcbi5lZGl0LWJ0bjphY3RpdmUge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2FjYWNkMztcXHJcXG59XFxyXFxuXFxyXFxuLmRlbGV0ZS1idG4ge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNjQ2NDtcXHJcXG59XFxyXFxuXFxyXFxuLmRlbGV0ZS1idG46aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZlODQ4NDtcXHJcXG59XFxyXFxuXFxyXFxuLmRlbGV0ZS1idG46YWN0aXZlIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlMGM0YzQ7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBUYXNrTGlzdCBmcm9tICcuL21vZHVsZXMvaW50ZXJhY3RpdmUuanMnO1xuXG5jb25zdCB0YXNrTGlzdCA9IG5ldyBUYXNrTGlzdCgpO1xuXG50YXNrTGlzdC5kaXNwbGF5VGFza3MoKTsiLCJpbXBvcnQgVGFzayBmcm9tICcuL3Rhc2suanMnO1xuXG5mdW5jdGlvbiBhZGRUYXNrKHRhc2tJbnB1dCwgdGFza3MpIHtcbiAgY29uc3QgdGFza05hbWUgPSB0YXNrSW5wdXQudmFsdWUudHJpbSgpO1xuICBjb25zdCBpZCA9IHRhc2tzLmxlbmd0aCArIDE7XG4gIGlmICh0YXNrTmFtZSAhPT0gJycpIHtcbiAgICBjb25zdCB0YXNrID0gbmV3IFRhc2sodGFza05hbWUsIGZhbHNlLCBpZCk7XG4gICAgdGFza3MucHVzaCh0YXNrKTtcbiAgfVxuICByZXR1cm4gdGFza3M7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGFkZFRhc2s7XG4iLCIvLyBjbGVhckNvbXBsZXRlZFRhc2sgZnVuY3Rpb25cbmZ1bmN0aW9uIGNsZWFyQ29tcGxldGVkVGFzayh0YXNrcykge1xuICByZXR1cm4gdGFza3MuZmlsdGVyKCh0YXNrKSA9PiAhdGFzay5zdGF0dXMpO1xufVxuXG4vLyB0b2dnbGVUYXNrU3RhdHVzIGZ1bmN0aW9uXG5mdW5jdGlvbiB0b2dnbGVUYXNrU3RhdHVzKGlkLCB0YXNrcykge1xuICByZXR1cm4gdGFza3MubWFwKCh0YXNrKSA9PiB7XG4gICAgaWYgKHRhc2suaWQgPT09IGlkKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi50YXNrLFxuICAgICAgICBzdGF0dXM6ICF0YXNrLnN0YXR1cyxcbiAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiB0YXNrO1xuICB9KTtcbn1cblxuLy8gZWRpdFRhc2sgZnVuY3Rpb25cbmZ1bmN0aW9uIGVkaXRUYXNrKGlkLCBuZXdOYW1lLCB0YXNrcywgc2F2ZVRhc2tzLCBkaXNwbGF5VGFza3MpIHtcbiAgY29uc3QgdGFza0luZGV4ID0gdGFza3MuZmluZEluZGV4KCh0YXNrKSA9PiB0YXNrLmlkID09PSBpZCk7XG4gIGlmICh0YXNrSW5kZXggIT09IC0xKSB7XG4gICAgdGFza3NbdGFza0luZGV4XS5uYW1lID0gbmV3TmFtZTtcbiAgICBzYXZlVGFza3MoKTtcbiAgICBkaXNwbGF5VGFza3MoKTtcbiAgfVxufVxuXG5leHBvcnQgeyBjbGVhckNvbXBsZXRlZFRhc2ssIHRvZ2dsZVRhc2tTdGF0dXMsIGVkaXRUYXNrIH07IiwiaW1wb3J0IGFkZFRhc2sgZnJvbSAnLi9hZGRUYXNrLmpzJztcbmltcG9ydCByZW1vdmVUYXNrIGZyb20gJy4vcmVtb3ZlVGFzay5qcyc7XG5pbXBvcnQgeyBjbGVhckNvbXBsZXRlZFRhc2ssIHRvZ2dsZVRhc2tTdGF0dXMsIGVkaXRUYXNrIH0gZnJvbSAnLi9jbGVhclRvZ2dsZUVkaXRUYXNrLmpzJztcblxuY2xhc3MgVGFza0xpc3Qge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnRhc2tzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGFza3MnKSkgfHwgW107XG4gICAgdGhpcy50YXNrRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrLWZvcm0nKTtcbiAgICB0aGlzLnRhc2tJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrLWlucHV0Jyk7XG4gICAgdGhpcy50YXNrTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrLWxpc3QnKTtcbiAgICB0aGlzLmNsZWFyQ29tcGxldGVkQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NsZWFyLWNvbXBsZXRlZCcpO1xuICAgIHRoaXMucmVzZXRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzZXQnKTtcbiAgICB0aGlzLnRhc2tGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB0aGlzLnRhc2tzID0gYWRkVGFzayh0aGlzLnRhc2tJbnB1dCwgdGhpcy50YXNrcyk7XG4gICAgICB0aGlzLnNhdmVUYXNrcygpO1xuICAgICAgdGhpcy5kaXNwbGF5VGFza3MoKTtcbiAgICAgIHRoaXMudGFza0lucHV0LnZhbHVlID0gJyc7XG4gICAgfSk7XG4gICAgdGhpcy5jbGVhckNvbXBsZXRlZEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIHRoaXMudGFza3MgPSBjbGVhckNvbXBsZXRlZFRhc2sodGhpcy50YXNrcyk7XG4gICAgICB0aGlzLnNhdmVUYXNrcygpO1xuICAgICAgdGhpcy5kaXNwbGF5VGFza3MoKTtcbiAgICB9KTtcbiAgICB0aGlzLnJlc2V0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgdGhpcy50YXNrcyA9IFtdO1xuICAgICAgdGhpcy5zYXZlVGFza3MoKTtcbiAgICAgIHRoaXMuZGlzcGxheVRhc2tzKCk7XG4gICAgfSk7XG4gICAgdGhpcy5kaXNwbGF5VGFza3MoKTtcbiAgfVxuXG4gIGVkaXRUYXNrKGlkLCBuZXdOYW1lKSB7XG4gICAgZWRpdFRhc2soaWQsIG5ld05hbWUsIHRoaXMudGFza3MsIHRoaXMuc2F2ZVRhc2tzLmJpbmQodGhpcyksIHRoaXMuZGlzcGxheVRhc2tzLmJpbmQodGhpcykpO1xuICB9XG5cbiAgcmVtb3ZlVGFzayhpZCkge1xuICAgIHRoaXMudGFza3MgPSByZW1vdmVUYXNrKGlkLCB0aGlzLnRhc2tzKTtcbiAgICB0aGlzLnNhdmVUYXNrcygpO1xuICAgIHRoaXMuZGlzcGxheVRhc2tzKCk7XG4gIH1cblxuICB0b2dnbGVUYXNrU3RhdHVzKGlkKSB7XG4gICAgdGhpcy50YXNrcyA9IHRvZ2dsZVRhc2tTdGF0dXMoaWQsIHRoaXMudGFza3MpO1xuICAgIHRoaXMuc2F2ZVRhc2tzKCk7XG4gICAgdGhpcy5kaXNwbGF5VGFza3MoKTtcbiAgfVxuXG4gIHJlc2V0VGFza3MoKSB7XG4gICAgdGhpcy50YXNrcyA9IFtdO1xuICAgIHRoaXMuc2F2ZVRhc2tzKCk7XG4gICAgdGhpcy5kaXNwbGF5VGFza3MoKTtcbiAgfVxuXG4gIHNhdmVUYXNrcygpIHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGFza3MnLCBKU09OLnN0cmluZ2lmeSh0aGlzLnRhc2tzKSk7XG4gIH1cblxuICBkaXNwbGF5VGFza3MoKSB7XG4gICAgdGhpcy50YXNrTGlzdC5pbm5lckhUTUwgPSAnJztcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudGFza3MubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGNvbnN0IHRhc2sgPSB0aGlzLnRhc2tzW2ldO1xuICAgICAgY29uc3QgdGFza0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgdGFza0VsZW1lbnQuaW5uZXJIVE1MID0gYFxuICAgICAgPGRpdiBjbGFzcz1cInRhc2stY2hlY2tib3hcIj5cbiAgICAgICAgPGlucHV0IHR5cGU9J2NoZWNrYm94JyAke3Rhc2suc3RhdHVzID8gJ2NoZWNrZWQnIDogJyd9PlxuICAgICAgICA8c3BhbiAke3Rhc2suc3RhdHVzID8gJ3N0eWxlPVwidGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2hcIicgOiAnJ30+XG4gICAgICAgICAgJHt0YXNrLm5hbWV9XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImVkaXQtZGVsZXRlLWJ0blwiPlxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImVkaXQtYnRuXCI+RWRpdDwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz0nZGVsZXRlLWJ0bic+WDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgYDtcblxuICAgICAgY29uc3QgY2hlY2tib3ggPSB0YXNrRWxlbWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFt0eXBlPWNoZWNrYm94XScpO1xuICAgICAgY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcignY2hhbmcnLCAoKSA9PiB0aGlzLnRvZ2dsZVRhc2tTdGF0dXModGFzay5pZCkpO1xuICAgICAgY29uc3QgZWRpdEJ0biA9IHRhc2tFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0LWJ0bicpO1xuICAgICAgZWRpdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc3QgbmV3TmFtZSA9IHByb21wdCgnRW50ZXIgbmV3IHRhc2sgbmFtZTonLCB0YXNrLm5hbWUpO1xuICAgICAgICBpZiAobmV3TmFtZSAhPT0gbnVsbCAmJiBuZXdOYW1lLnRyaW0oKSAhPT0gJycpIHtcbiAgICAgICAgICB0aGlzLmVkaXRUYXNrKHRhc2suaWQsIG5ld05hbWUudHJpbSgpKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBjb25zdCBkZWxldGVCdG4gPSB0YXNrRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuZGVsZXRlLWJ0bicpO1xuICAgICAgZGVsZXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdGhpcy5yZW1vdmVUYXNrKHRhc2suaWQpKTtcbiAgICAgIHRoaXMudGFza0xpc3QuYXBwZW5kQ2hpbGQodGFza0VsZW1lbnQpO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUYXNrTGlzdDsiLCJmdW5jdGlvbiByZW1vdmVUYXNrKGlkLCB0YXNrcykge1xuICBjb25zdCB1cGRhdGVkVGFza3MgPSB0YXNrcy5maWx0ZXIoKHRhc2spID0+IHRhc2suaWQgIT09IGlkKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB1cGRhdGVkVGFza3MubGVuZ3RoOyBpICs9IDEpIHtcbiAgICB1cGRhdGVkVGFza3NbaV0uaWQgPSBpICsgMTtcbiAgfVxuICByZXR1cm4gdXBkYXRlZFRhc2tzO1xufVxuXG5leHBvcnQgZGVmYXVsdCByZW1vdmVUYXNrOyIsImNsYXNzIFRhc2sge1xuICBjb25zdHJ1Y3RvcihuYW1lLCBzdGF0dXMsIGlkKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLnN0YXR1cyA9IHN0YXR1cztcbiAgICB0aGlzLmlkID0gaWQ7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGFzazsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=