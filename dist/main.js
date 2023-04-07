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
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n  box-sizing: border-box;\r\n  margin: 0;\r\n  padding: 0;\r\n  /* border: 1px solid grey; */\r\n  list-style: none;\r\n  outline: none;\r\n  font-family: Verdana;\r\n}\r\n\r\n.container-all {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 1rem;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.container-all > * {\r\n  width: 50vw;\r\n  text-align: center;\r\n}\r\n\r\n.todo-title {\r\n  font-family: 'Segoe Script';\r\n}\r\n\r\n.daily-task-title {\r\n  font-family: Verdana;\r\n}\r\n\r\n.main-form {\r\n  display: flex;\r\n  flex-direction: column;\r\n  text-align: left;\r\n  gap: 1rem;\r\n}\r\n\r\n.today-container {\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n.reset-all {\r\n  align-self: center;\r\n  cursor: pointer;\r\n  transition: .5s ease;\r\n}\r\n\r\n.reset-all:hover {\r\n  transform: rotate(360deg);\r\n  transition: .3s ease;\r\n}\r\n\r\n.inputBtn {\r\n  display: flex;\r\n  gap: 1rem;\r\n}\r\n\r\n.enter-task {\r\n  flex-grow: 1;\r\n  height: 32px;\r\n}\r\n\r\n.in-put {\r\n  height: 100%;\r\n  width: 100%;\r\n  padding: 0 .5rem;\r\n}\r\n\r\n::placeholder {\r\n  font-style: italic;\r\n  color: darkgrey;\r\n}\r\n\r\n.add-task {\r\n  padding: .5rem 1rem;\r\n  border-radius: 5px;\r\n  cursor: pointer;\r\n  background-color: #6363fe;\r\n  border: none;\r\n  color: white;\r\n  transition: .3s ease-out;\r\n  font-size: .7rem;\r\n  font-weight: 400;\r\n}\r\n\r\n.add-task:hover {\r\n  background-color: #7474ff;\r\n  transition: .3s ease-in;\r\n  box-shadow: 0px 0px 20px -18px;\r\n}\r\n\r\n.clear-btn {\r\n  display: flex;\r\n  justify-content: end;\r\n}\r\n\r\n.clear-all {\r\n  padding: .5rem 1rem;\r\n  border-radius: 5px;\r\n  background-color: #6363fe;\r\n  border: none;\r\n  color: white;\r\n  cursor: pointer;\r\n  transition: .3s ease-in;\r\n}\r\n\r\n.clear-all:hover {\r\n  cursor: pointer;\r\n  background-color: #ff6464;\r\n  transition: .3s ease-out;\r\n  box-shadow: 0px 0px 20px -18px;\r\n}\r\n\r\nbutton:active {\r\n  transform: scale(0.95);\r\n}\r\n\r\n\r\n.enter-task {\r\n  position: relative;\r\n }\r\n \r\n .in-put {\r\n  display: block;\r\n  border: none;\r\n  border-bottom: 1px solid #515151;\r\n  background: transparent;\r\n }\r\n \r\n .input-label {\r\n  color: #999;\r\n  font-size: 18px;\r\n  font-weight: normal;\r\n  position: absolute;\r\n  pointer-events: none;\r\n  left: 9px;\r\n  top: 5px;\r\n  transition: 0.2s ease all;\r\n  -moz-transition: 0.2s ease all;\r\n  -webkit-transition: 0.2s ease all;\r\n }\r\n \r\n .in-put:focus ~ .input-label,\r\n .in-put:not(:placeholder-shown) ~ .input-label {\r\n  top: -12px;\r\n  font-size: 14px;\r\n  color: #5264AE;\r\n }\r\n \r\n .bar {\r\n  position: relative;\r\n  display: block;\r\n  width: 100%;\r\n }\r\n \r\n .bar:before,\r\n .bar:after {\r\n  content: '';\r\n  height: 2px;\r\n  width: 0;\r\n  bottom: 1px;\r\n  position: absolute;\r\n  background: #5264AE;\r\n  transition: 0.2s ease all;\r\n  -moz-transition: 0.2s ease all;\r\n  -webkit-transition: 0.2s ease all;\r\n }\r\n \r\n .bar:before {\r\n  left: 50%;\r\n }\r\n \r\n .bar:after {\r\n  right: 50%;\r\n }\r\n \r\n .in-put:focus ~ .bar:before,\r\n .in-put:focus ~ .bar:after {\r\n  width: 50%;\r\n }\r\n \r\n .highlight {\r\n  position: absolute;\r\n  height: 70%;\r\n  width: 90%;\r\n  top: 25%;\r\n  left: 0;\r\n  pointer-events: none;\r\n  opacity: 0.5;\r\n }\r\n \r\n .in-put:focus ~ .highlight {\r\n  animation: inputHighlighter 0.3s ease;\r\n }\r\n \r\n @keyframes inputHighlighter {\r\n  from {\r\n   background: #5264AE;\r\n  }\r\n \r\n  to {\r\n   width: 0;\r\n   background: transparent;\r\n  }\r\n }\r\n\r\n.tasks-lists {\r\n  background-color: whitesmoke;\r\n  border-radius: 5px;\r\n  padding: 1rem;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.tasks-lists li {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  height: 2rem;\r\n}\r\n\r\n.task-checkbox {\r\n  display: flex;\r\n  gap: .8rem;\r\n}\r\n\r\n.edit-delete-btn {\r\n  display: flex;\r\n  gap: 1rem;\r\n}\r\n\r\n.edit-delete-btn > * {\r\n  padding: .3rem 1rem;\r\n  cursor: pointer;\r\n  border-radius: 5px;\r\n  border: none;\r\n  color: white;\r\n  transition: .3s ease-out;\r\n  font-size: .7rem;\r\n  font-weight: 400;\r\n}\r\n\r\n.edit-delete-btn > *:hover {\r\n  box-shadow: 0px 0px 20px -18px;\r\n  transition: .3s ease-in;\r\n}\r\n\r\n.edit-delete-btn > *:active {\r\n  transform: scale(0.95);\r\n}\r\n\r\n.edit-btn {\r\n  background-color: #6363fe;\r\n}\r\n\r\n.edit-btn:hover {\r\n  background-color: #7474ff;\r\n}\r\n\r\n.edit-btn:active {\r\n  background-color: #acacd3;\r\n}\r\n\r\n.delete-btn {\r\n  background-color: #ff6464;\r\n}\r\n\r\n.delete-btn:hover {\r\n  background-color: #fe8484;\r\n}\r\n\r\n.delete-btn:active {\r\n  background-color: #e0c4c4;\r\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["* {\r\n  box-sizing: border-box;\r\n  margin: 0;\r\n  padding: 0;\r\n  /* border: 1px solid grey; */\r\n  list-style: none;\r\n  outline: none;\r\n  font-family: Verdana;\r\n}\r\n\r\n.container-all {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 1rem;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.container-all > * {\r\n  width: 50vw;\r\n  text-align: center;\r\n}\r\n\r\n.todo-title {\r\n  font-family: 'Segoe Script';\r\n}\r\n\r\n.daily-task-title {\r\n  font-family: Verdana;\r\n}\r\n\r\n.main-form {\r\n  display: flex;\r\n  flex-direction: column;\r\n  text-align: left;\r\n  gap: 1rem;\r\n}\r\n\r\n.today-container {\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n.reset-all {\r\n  align-self: center;\r\n  cursor: pointer;\r\n  transition: .5s ease;\r\n}\r\n\r\n.reset-all:hover {\r\n  transform: rotate(360deg);\r\n  transition: .3s ease;\r\n}\r\n\r\n.inputBtn {\r\n  display: flex;\r\n  gap: 1rem;\r\n}\r\n\r\n.enter-task {\r\n  flex-grow: 1;\r\n  height: 32px;\r\n}\r\n\r\n.in-put {\r\n  height: 100%;\r\n  width: 100%;\r\n  padding: 0 .5rem;\r\n}\r\n\r\n::placeholder {\r\n  font-style: italic;\r\n  color: darkgrey;\r\n}\r\n\r\n.add-task {\r\n  padding: .5rem 1rem;\r\n  border-radius: 5px;\r\n  cursor: pointer;\r\n  background-color: #6363fe;\r\n  border: none;\r\n  color: white;\r\n  transition: .3s ease-out;\r\n  font-size: .7rem;\r\n  font-weight: 400;\r\n}\r\n\r\n.add-task:hover {\r\n  background-color: #7474ff;\r\n  transition: .3s ease-in;\r\n  box-shadow: 0px 0px 20px -18px;\r\n}\r\n\r\n.clear-btn {\r\n  display: flex;\r\n  justify-content: end;\r\n}\r\n\r\n.clear-all {\r\n  padding: .5rem 1rem;\r\n  border-radius: 5px;\r\n  background-color: #6363fe;\r\n  border: none;\r\n  color: white;\r\n  cursor: pointer;\r\n  transition: .3s ease-in;\r\n}\r\n\r\n.clear-all:hover {\r\n  cursor: pointer;\r\n  background-color: #ff6464;\r\n  transition: .3s ease-out;\r\n  box-shadow: 0px 0px 20px -18px;\r\n}\r\n\r\nbutton:active {\r\n  transform: scale(0.95);\r\n}\r\n\r\n\r\n.enter-task {\r\n  position: relative;\r\n }\r\n \r\n .in-put {\r\n  display: block;\r\n  border: none;\r\n  border-bottom: 1px solid #515151;\r\n  background: transparent;\r\n }\r\n \r\n .input-label {\r\n  color: #999;\r\n  font-size: 18px;\r\n  font-weight: normal;\r\n  position: absolute;\r\n  pointer-events: none;\r\n  left: 9px;\r\n  top: 5px;\r\n  transition: 0.2s ease all;\r\n  -moz-transition: 0.2s ease all;\r\n  -webkit-transition: 0.2s ease all;\r\n }\r\n \r\n .in-put:focus ~ .input-label,\r\n .in-put:not(:placeholder-shown) ~ .input-label {\r\n  top: -12px;\r\n  font-size: 14px;\r\n  color: #5264AE;\r\n }\r\n \r\n .bar {\r\n  position: relative;\r\n  display: block;\r\n  width: 100%;\r\n }\r\n \r\n .bar:before,\r\n .bar:after {\r\n  content: '';\r\n  height: 2px;\r\n  width: 0;\r\n  bottom: 1px;\r\n  position: absolute;\r\n  background: #5264AE;\r\n  transition: 0.2s ease all;\r\n  -moz-transition: 0.2s ease all;\r\n  -webkit-transition: 0.2s ease all;\r\n }\r\n \r\n .bar:before {\r\n  left: 50%;\r\n }\r\n \r\n .bar:after {\r\n  right: 50%;\r\n }\r\n \r\n .in-put:focus ~ .bar:before,\r\n .in-put:focus ~ .bar:after {\r\n  width: 50%;\r\n }\r\n \r\n .highlight {\r\n  position: absolute;\r\n  height: 70%;\r\n  width: 90%;\r\n  top: 25%;\r\n  left: 0;\r\n  pointer-events: none;\r\n  opacity: 0.5;\r\n }\r\n \r\n .in-put:focus ~ .highlight {\r\n  animation: inputHighlighter 0.3s ease;\r\n }\r\n \r\n @keyframes inputHighlighter {\r\n  from {\r\n   background: #5264AE;\r\n  }\r\n \r\n  to {\r\n   width: 0;\r\n   background: transparent;\r\n  }\r\n }\r\n\r\n.tasks-lists {\r\n  background-color: whitesmoke;\r\n  border-radius: 5px;\r\n  padding: 1rem;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.tasks-lists li {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  height: 2rem;\r\n}\r\n\r\n.task-checkbox {\r\n  display: flex;\r\n  gap: .8rem;\r\n}\r\n\r\n.edit-delete-btn {\r\n  display: flex;\r\n  gap: 1rem;\r\n}\r\n\r\n.edit-delete-btn > * {\r\n  padding: .3rem 1rem;\r\n  cursor: pointer;\r\n  border-radius: 5px;\r\n  border: none;\r\n  color: white;\r\n  transition: .3s ease-out;\r\n  font-size: .7rem;\r\n  font-weight: 400;\r\n}\r\n\r\n.edit-delete-btn > *:hover {\r\n  box-shadow: 0px 0px 20px -18px;\r\n  transition: .3s ease-in;\r\n}\r\n\r\n.edit-delete-btn > *:active {\r\n  transform: scale(0.95);\r\n}\r\n\r\n.edit-btn {\r\n  background-color: #6363fe;\r\n}\r\n\r\n.edit-btn:hover {\r\n  background-color: #7474ff;\r\n}\r\n\r\n.edit-btn:active {\r\n  background-color: #acacd3;\r\n}\r\n\r\n.delete-btn {\r\n  background-color: #ff6464;\r\n}\r\n\r\n.delete-btn:hover {\r\n  background-color: #fe8484;\r\n}\r\n\r\n.delete-btn:active {\r\n  background-color: #e0c4c4;\r\n}"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFFBQVEsS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sTUFBTSxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxNQUFNLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSw2QkFBNkIsNkJBQTZCLGdCQUFnQixpQkFBaUIsaUNBQWlDLHlCQUF5QixvQkFBb0IsMkJBQTJCLEtBQUssd0JBQXdCLG9CQUFvQiw2QkFBNkIsZ0JBQWdCLDhCQUE4QiwwQkFBMEIsS0FBSyw0QkFBNEIsa0JBQWtCLHlCQUF5QixLQUFLLHFCQUFxQixrQ0FBa0MsS0FBSywyQkFBMkIsMkJBQTJCLEtBQUssb0JBQW9CLG9CQUFvQiw2QkFBNkIsdUJBQXVCLGdCQUFnQixLQUFLLDBCQUEwQixvQkFBb0IscUNBQXFDLEtBQUssb0JBQW9CLHlCQUF5QixzQkFBc0IsMkJBQTJCLEtBQUssMEJBQTBCLGdDQUFnQywyQkFBMkIsS0FBSyxtQkFBbUIsb0JBQW9CLGdCQUFnQixLQUFLLHFCQUFxQixtQkFBbUIsbUJBQW1CLEtBQUssaUJBQWlCLG1CQUFtQixrQkFBa0IsdUJBQXVCLEtBQUssdUJBQXVCLHlCQUF5QixzQkFBc0IsS0FBSyxtQkFBbUIsMEJBQTBCLHlCQUF5QixzQkFBc0IsZ0NBQWdDLG1CQUFtQixtQkFBbUIsK0JBQStCLHVCQUF1Qix1QkFBdUIsS0FBSyx5QkFBeUIsZ0NBQWdDLDhCQUE4QixxQ0FBcUMsS0FBSyxvQkFBb0Isb0JBQW9CLDJCQUEyQixLQUFLLG9CQUFvQiwwQkFBMEIseUJBQXlCLGdDQUFnQyxtQkFBbUIsbUJBQW1CLHNCQUFzQiw4QkFBOEIsS0FBSywwQkFBMEIsc0JBQXNCLGdDQUFnQywrQkFBK0IscUNBQXFDLEtBQUssdUJBQXVCLDZCQUE2QixLQUFLLHlCQUF5Qix5QkFBeUIsTUFBTSxtQkFBbUIscUJBQXFCLG1CQUFtQix1Q0FBdUMsOEJBQThCLE1BQU0sd0JBQXdCLGtCQUFrQixzQkFBc0IsMEJBQTBCLHlCQUF5QiwyQkFBMkIsZ0JBQWdCLGVBQWUsZ0NBQWdDLHFDQUFxQyx3Q0FBd0MsTUFBTSw0RkFBNEYsaUJBQWlCLHNCQUFzQixxQkFBcUIsTUFBTSxnQkFBZ0IseUJBQXlCLHFCQUFxQixrQkFBa0IsTUFBTSx1Q0FBdUMsa0JBQWtCLGtCQUFrQixlQUFlLGtCQUFrQix5QkFBeUIsMEJBQTBCLGdDQUFnQyxxQ0FBcUMsd0NBQXdDLE1BQU0sdUJBQXVCLGdCQUFnQixNQUFNLHNCQUFzQixpQkFBaUIsTUFBTSx1RUFBdUUsaUJBQWlCLE1BQU0sc0JBQXNCLHlCQUF5QixrQkFBa0IsaUJBQWlCLGVBQWUsY0FBYywyQkFBMkIsbUJBQW1CLE1BQU0sc0NBQXNDLDRDQUE0QyxNQUFNLHVDQUF1QyxZQUFZLDJCQUEyQixPQUFPLGVBQWUsZ0JBQWdCLCtCQUErQixPQUFPLE1BQU0sc0JBQXNCLG1DQUFtQyx5QkFBeUIsb0JBQW9CLG9CQUFvQiw2QkFBNkIsS0FBSyx5QkFBeUIsb0JBQW9CLHFDQUFxQywwQkFBMEIsbUJBQW1CLEtBQUssd0JBQXdCLG9CQUFvQixpQkFBaUIsS0FBSywwQkFBMEIsb0JBQW9CLGdCQUFnQixLQUFLLDhCQUE4QiwwQkFBMEIsc0JBQXNCLHlCQUF5QixtQkFBbUIsbUJBQW1CLCtCQUErQix1QkFBdUIsdUJBQXVCLEtBQUssb0NBQW9DLHFDQUFxQyw4QkFBOEIsS0FBSyxxQ0FBcUMsNkJBQTZCLEtBQUssbUJBQW1CLGdDQUFnQyxLQUFLLHlCQUF5QixnQ0FBZ0MsS0FBSywwQkFBMEIsZ0NBQWdDLEtBQUsscUJBQXFCLGdDQUFnQyxLQUFLLDJCQUEyQixnQ0FBZ0MsS0FBSyw0QkFBNEIsZ0NBQWdDLEtBQUssbUJBQW1CO0FBQ3hvWDtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7OztBQ1AxQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFEO0FBQ3JEO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBLHFGQUFxRjtBQUNyRjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixxQkFBcUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0ZBQXNGLHFCQUFxQjtBQUMzRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsaURBQWlELHFCQUFxQjtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0RBQXNELHFCQUFxQjtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDcEZhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEEsTUFBK0Y7QUFDL0YsTUFBcUY7QUFDckYsTUFBNEY7QUFDNUYsTUFBK0c7QUFDL0csTUFBd0c7QUFDeEcsTUFBd0c7QUFDeEcsTUFBbUc7QUFDbkc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxzRkFBTzs7OztBQUk2QztBQUNyRSxPQUFPLGlFQUFlLHNGQUFPLElBQUksNkZBQWMsR0FBRyw2RkFBYyxZQUFZLEVBQUM7Ozs7Ozs7Ozs7O0FDMUJoRTs7QUFFYjtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDZCQUE2QjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ25GYTs7QUFFYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNqQ2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTtBQUNqRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0Q7QUFDbEQ7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQSxpRkFBaUY7QUFDakY7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUM1RGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNicUI7QUFDMkI7O0FBRWhELHFCQUFxQiwrREFBUTs7QUFFN0I7Ozs7Ozs7Ozs7Ozs7OztBQ0w2Qjs7QUFFN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsZ0RBQUk7QUFDekI7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsT0FBTyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ1p2QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQm1DO0FBQ007QUFDaUQ7O0FBRTFGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLHVEQUFPO0FBQzFCO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLG1CQUFtQiwyRUFBa0I7QUFDckM7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0EsSUFBSSxpRUFBUTtBQUNaOztBQUVBO0FBQ0EsaUJBQWlCLDBEQUFVO0FBQzNCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQix5RUFBZ0I7QUFDakM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxvQkFBb0IsdUJBQXVCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLDZCQUE2QjtBQUM5RCxnQkFBZ0IsMkRBQTJEO0FBQzNFLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxRQUFROzs7Ozs7Ozs7Ozs7OztBQzVGdkI7QUFDQTtBQUNBLGtCQUFrQix5QkFBeUI7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsVUFBVTs7Ozs7Ozs7Ozs7Ozs7QUNSekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2svLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3dlYnBhY2svLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYnBhY2svLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3dlYnBhY2svLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYnBhY2svLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VicGFjay8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLy4vc3JjL21vZHVsZXMvYWRkVGFzay5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLy4vc3JjL21vZHVsZXMvY2xlYXJUb2dnbGVFZGl0VGFzay5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLy4vc3JjL21vZHVsZXMvaW50ZXJhY3RpdmUuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay8uL3NyYy9tb2R1bGVzL3JlbW92ZVRhc2suanMiLCJ3ZWJwYWNrOi8vd2VicGFjay8uL3NyYy9tb2R1bGVzL3Rhc2suanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgLyogYm9yZGVyOiAxcHggc29saWQgZ3JleTsgKi9cXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgZm9udC1mYW1pbHk6IFZlcmRhbmE7XFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXItYWxsIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZ2FwOiAxcmVtO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFpbmVyLWFsbCA+ICoge1xcclxcbiAgd2lkdGg6IDUwdnc7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi50b2RvLXRpdGxlIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnU2Vnb2UgU2NyaXB0JztcXHJcXG59XFxyXFxuXFxyXFxuLmRhaWx5LXRhc2stdGl0bGUge1xcclxcbiAgZm9udC1mYW1pbHk6IFZlcmRhbmE7XFxyXFxufVxcclxcblxcclxcbi5tYWluLWZvcm0ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbiAgZ2FwOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kYXktY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxufVxcclxcblxcclxcbi5yZXNldC1hbGwge1xcclxcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgdHJhbnNpdGlvbjogLjVzIGVhc2U7XFxyXFxufVxcclxcblxcclxcbi5yZXNldC1hbGw6aG92ZXIge1xcclxcbiAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXHJcXG4gIHRyYW5zaXRpb246IC4zcyBlYXNlO1xcclxcbn1cXHJcXG5cXHJcXG4uaW5wdXRCdG4ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGdhcDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmVudGVyLXRhc2sge1xcclxcbiAgZmxleC1ncm93OiAxO1xcclxcbiAgaGVpZ2h0OiAzMnB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaW4tcHV0IHtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgcGFkZGluZzogMCAuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuOjpwbGFjZWhvbGRlciB7XFxyXFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxyXFxuICBjb2xvcjogZGFya2dyZXk7XFxyXFxufVxcclxcblxcclxcbi5hZGQtdGFzayB7XFxyXFxuICBwYWRkaW5nOiAuNXJlbSAxcmVtO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzYzNjNmZTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIHRyYW5zaXRpb246IC4zcyBlYXNlLW91dDtcXHJcXG4gIGZvbnQtc2l6ZTogLjdyZW07XFxyXFxuICBmb250LXdlaWdodDogNDAwO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkLXRhc2s6aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzc0NzRmZjtcXHJcXG4gIHRyYW5zaXRpb246IC4zcyBlYXNlLWluO1xcclxcbiAgYm94LXNoYWRvdzogMHB4IDBweCAyMHB4IC0xOHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY2xlYXItYnRuIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcXHJcXG59XFxyXFxuXFxyXFxuLmNsZWFyLWFsbCB7XFxyXFxuICBwYWRkaW5nOiAuNXJlbSAxcmVtO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzYzNjNmZTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIHRyYW5zaXRpb246IC4zcyBlYXNlLWluO1xcclxcbn1cXHJcXG5cXHJcXG4uY2xlYXItYWxsOmhvdmVyIHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjY0NjQ7XFxyXFxuICB0cmFuc2l0aW9uOiAuM3MgZWFzZS1vdXQ7XFxyXFxuICBib3gtc2hhZG93OiAwcHggMHB4IDIwcHggLTE4cHg7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbjphY3RpdmUge1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLmVudGVyLXRhc2sge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiB9XFxyXFxuIFxcclxcbiAuaW4tcHV0IHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM1MTUxNTE7XFxyXFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXHJcXG4gfVxcclxcbiBcXHJcXG4gLmlucHV0LWxhYmVsIHtcXHJcXG4gIGNvbG9yOiAjOTk5O1xcclxcbiAgZm9udC1zaXplOiAxOHB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcclxcbiAgbGVmdDogOXB4O1xcclxcbiAgdG9wOiA1cHg7XFxyXFxuICB0cmFuc2l0aW9uOiAwLjJzIGVhc2UgYWxsO1xcclxcbiAgLW1vei10cmFuc2l0aW9uOiAwLjJzIGVhc2UgYWxsO1xcclxcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjJzIGVhc2UgYWxsO1xcclxcbiB9XFxyXFxuIFxcclxcbiAuaW4tcHV0OmZvY3VzIH4gLmlucHV0LWxhYmVsLFxcclxcbiAuaW4tcHV0Om5vdCg6cGxhY2Vob2xkZXItc2hvd24pIH4gLmlucHV0LWxhYmVsIHtcXHJcXG4gIHRvcDogLTEycHg7XFxyXFxuICBmb250LXNpemU6IDE0cHg7XFxyXFxuICBjb2xvcjogIzUyNjRBRTtcXHJcXG4gfVxcclxcbiBcXHJcXG4gLmJhciB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiB9XFxyXFxuIFxcclxcbiAuYmFyOmJlZm9yZSxcXHJcXG4gLmJhcjphZnRlciB7XFxyXFxuICBjb250ZW50OiAnJztcXHJcXG4gIGhlaWdodDogMnB4O1xcclxcbiAgd2lkdGg6IDA7XFxyXFxuICBib3R0b206IDFweDtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGJhY2tncm91bmQ6ICM1MjY0QUU7XFxyXFxuICB0cmFuc2l0aW9uOiAwLjJzIGVhc2UgYWxsO1xcclxcbiAgLW1vei10cmFuc2l0aW9uOiAwLjJzIGVhc2UgYWxsO1xcclxcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjJzIGVhc2UgYWxsO1xcclxcbiB9XFxyXFxuIFxcclxcbiAuYmFyOmJlZm9yZSB7XFxyXFxuICBsZWZ0OiA1MCU7XFxyXFxuIH1cXHJcXG4gXFxyXFxuIC5iYXI6YWZ0ZXIge1xcclxcbiAgcmlnaHQ6IDUwJTtcXHJcXG4gfVxcclxcbiBcXHJcXG4gLmluLXB1dDpmb2N1cyB+IC5iYXI6YmVmb3JlLFxcclxcbiAuaW4tcHV0OmZvY3VzIH4gLmJhcjphZnRlciB7XFxyXFxuICB3aWR0aDogNTAlO1xcclxcbiB9XFxyXFxuIFxcclxcbiAuaGlnaGxpZ2h0IHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGhlaWdodDogNzAlO1xcclxcbiAgd2lkdGg6IDkwJTtcXHJcXG4gIHRvcDogMjUlO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcclxcbiAgb3BhY2l0eTogMC41O1xcclxcbiB9XFxyXFxuIFxcclxcbiAuaW4tcHV0OmZvY3VzIH4gLmhpZ2hsaWdodCB7XFxyXFxuICBhbmltYXRpb246IGlucHV0SGlnaGxpZ2h0ZXIgMC4zcyBlYXNlO1xcclxcbiB9XFxyXFxuIFxcclxcbiBAa2V5ZnJhbWVzIGlucHV0SGlnaGxpZ2h0ZXIge1xcclxcbiAgZnJvbSB7XFxyXFxuICAgYmFja2dyb3VuZDogIzUyNjRBRTtcXHJcXG4gIH1cXHJcXG4gXFxyXFxuICB0byB7XFxyXFxuICAgd2lkdGg6IDA7XFxyXFxuICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxyXFxuICB9XFxyXFxuIH1cXHJcXG5cXHJcXG4udGFza3MtbGlzdHMge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIHBhZGRpbmc6IDFyZW07XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2tzLWxpc3RzIGxpIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgaGVpZ2h0OiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4udGFzay1jaGVja2JveCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZ2FwOiAuOHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmVkaXQtZGVsZXRlLWJ0biB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZ2FwOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZWRpdC1kZWxldGUtYnRuID4gKiB7XFxyXFxuICBwYWRkaW5nOiAuM3JlbSAxcmVtO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgdHJhbnNpdGlvbjogLjNzIGVhc2Utb3V0O1xcclxcbiAgZm9udC1zaXplOiAuN3JlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxufVxcclxcblxcclxcbi5lZGl0LWRlbGV0ZS1idG4gPiAqOmhvdmVyIHtcXHJcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMjBweCAtMThweDtcXHJcXG4gIHRyYW5zaXRpb246IC4zcyBlYXNlLWluO1xcclxcbn1cXHJcXG5cXHJcXG4uZWRpdC1kZWxldGUtYnRuID4gKjphY3RpdmUge1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcXHJcXG59XFxyXFxuXFxyXFxuLmVkaXQtYnRuIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICM2MzYzZmU7XFxyXFxufVxcclxcblxcclxcbi5lZGl0LWJ0bjpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzQ3NGZmO1xcclxcbn1cXHJcXG5cXHJcXG4uZWRpdC1idG46YWN0aXZlIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNhY2FjZDM7XFxyXFxufVxcclxcblxcclxcbi5kZWxldGUtYnRuIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjY0NjQ7XFxyXFxufVxcclxcblxcclxcbi5kZWxldGUtYnRuOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZTg0ODQ7XFxyXFxufVxcclxcblxcclxcbi5kZWxldGUtYnRuOmFjdGl2ZSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBjNGM0O1xcclxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJw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QVU7QUFDWjs7QUFFQTtFQUNFLGFBQWE7RUFDYixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osWUFBWTtFQUNaLHdCQUF3QjtFQUN4QixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsOEJBQThCO0VBQzlCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgLyogYm9yZGVyOiAxcHggc29saWQgZ3JleTsgKi9cXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgZm9udC1mYW1pbHk6IFZlcmRhbmE7XFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXItYWxsIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZ2FwOiAxcmVtO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFpbmVyLWFsbCA+ICoge1xcclxcbiAgd2lkdGg6IDUwdnc7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi50b2RvLXRpdGxlIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnU2Vnb2UgU2NyaXB0JztcXHJcXG59XFxyXFxuXFxyXFxuLmRhaWx5LXRhc2stdGl0bGUge1xcclxcbiAgZm9udC1mYW1pbHk6IFZlcmRhbmE7XFxyXFxufVxcclxcblxcclxcbi5tYWluLWZvcm0ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbiAgZ2FwOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kYXktY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxufVxcclxcblxcclxcbi5yZXNldC1hbGwge1xcclxcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgdHJhbnNpdGlvbjogLjVzIGVhc2U7XFxyXFxufVxcclxcblxcclxcbi5yZXNldC1hbGw6aG92ZXIge1xcclxcbiAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXHJcXG4gIHRyYW5zaXRpb246IC4zcyBlYXNlO1xcclxcbn1cXHJcXG5cXHJcXG4uaW5wdXRCdG4ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGdhcDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmVudGVyLXRhc2sge1xcclxcbiAgZmxleC1ncm93OiAxO1xcclxcbiAgaGVpZ2h0OiAzMnB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaW4tcHV0IHtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgcGFkZGluZzogMCAuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuOjpwbGFjZWhvbGRlciB7XFxyXFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxyXFxuICBjb2xvcjogZGFya2dyZXk7XFxyXFxufVxcclxcblxcclxcbi5hZGQtdGFzayB7XFxyXFxuICBwYWRkaW5nOiAuNXJlbSAxcmVtO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzYzNjNmZTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIHRyYW5zaXRpb246IC4zcyBlYXNlLW91dDtcXHJcXG4gIGZvbnQtc2l6ZTogLjdyZW07XFxyXFxuICBmb250LXdlaWdodDogNDAwO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkLXRhc2s6aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzc0NzRmZjtcXHJcXG4gIHRyYW5zaXRpb246IC4zcyBlYXNlLWluO1xcclxcbiAgYm94LXNoYWRvdzogMHB4IDBweCAyMHB4IC0xOHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY2xlYXItYnRuIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcXHJcXG59XFxyXFxuXFxyXFxuLmNsZWFyLWFsbCB7XFxyXFxuICBwYWRkaW5nOiAuNXJlbSAxcmVtO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzYzNjNmZTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIHRyYW5zaXRpb246IC4zcyBlYXNlLWluO1xcclxcbn1cXHJcXG5cXHJcXG4uY2xlYXItYWxsOmhvdmVyIHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjY0NjQ7XFxyXFxuICB0cmFuc2l0aW9uOiAuM3MgZWFzZS1vdXQ7XFxyXFxuICBib3gtc2hhZG93OiAwcHggMHB4IDIwcHggLTE4cHg7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbjphY3RpdmUge1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLmVudGVyLXRhc2sge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiB9XFxyXFxuIFxcclxcbiAuaW4tcHV0IHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM1MTUxNTE7XFxyXFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXHJcXG4gfVxcclxcbiBcXHJcXG4gLmlucHV0LWxhYmVsIHtcXHJcXG4gIGNvbG9yOiAjOTk5O1xcclxcbiAgZm9udC1zaXplOiAxOHB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcclxcbiAgbGVmdDogOXB4O1xcclxcbiAgdG9wOiA1cHg7XFxyXFxuICB0cmFuc2l0aW9uOiAwLjJzIGVhc2UgYWxsO1xcclxcbiAgLW1vei10cmFuc2l0aW9uOiAwLjJzIGVhc2UgYWxsO1xcclxcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjJzIGVhc2UgYWxsO1xcclxcbiB9XFxyXFxuIFxcclxcbiAuaW4tcHV0OmZvY3VzIH4gLmlucHV0LWxhYmVsLFxcclxcbiAuaW4tcHV0Om5vdCg6cGxhY2Vob2xkZXItc2hvd24pIH4gLmlucHV0LWxhYmVsIHtcXHJcXG4gIHRvcDogLTEycHg7XFxyXFxuICBmb250LXNpemU6IDE0cHg7XFxyXFxuICBjb2xvcjogIzUyNjRBRTtcXHJcXG4gfVxcclxcbiBcXHJcXG4gLmJhciB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiB9XFxyXFxuIFxcclxcbiAuYmFyOmJlZm9yZSxcXHJcXG4gLmJhcjphZnRlciB7XFxyXFxuICBjb250ZW50OiAnJztcXHJcXG4gIGhlaWdodDogMnB4O1xcclxcbiAgd2lkdGg6IDA7XFxyXFxuICBib3R0b206IDFweDtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGJhY2tncm91bmQ6ICM1MjY0QUU7XFxyXFxuICB0cmFuc2l0aW9uOiAwLjJzIGVhc2UgYWxsO1xcclxcbiAgLW1vei10cmFuc2l0aW9uOiAwLjJzIGVhc2UgYWxsO1xcclxcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjJzIGVhc2UgYWxsO1xcclxcbiB9XFxyXFxuIFxcclxcbiAuYmFyOmJlZm9yZSB7XFxyXFxuICBsZWZ0OiA1MCU7XFxyXFxuIH1cXHJcXG4gXFxyXFxuIC5iYXI6YWZ0ZXIge1xcclxcbiAgcmlnaHQ6IDUwJTtcXHJcXG4gfVxcclxcbiBcXHJcXG4gLmluLXB1dDpmb2N1cyB+IC5iYXI6YmVmb3JlLFxcclxcbiAuaW4tcHV0OmZvY3VzIH4gLmJhcjphZnRlciB7XFxyXFxuICB3aWR0aDogNTAlO1xcclxcbiB9XFxyXFxuIFxcclxcbiAuaGlnaGxpZ2h0IHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGhlaWdodDogNzAlO1xcclxcbiAgd2lkdGg6IDkwJTtcXHJcXG4gIHRvcDogMjUlO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcclxcbiAgb3BhY2l0eTogMC41O1xcclxcbiB9XFxyXFxuIFxcclxcbiAuaW4tcHV0OmZvY3VzIH4gLmhpZ2hsaWdodCB7XFxyXFxuICBhbmltYXRpb246IGlucHV0SGlnaGxpZ2h0ZXIgMC4zcyBlYXNlO1xcclxcbiB9XFxyXFxuIFxcclxcbiBAa2V5ZnJhbWVzIGlucHV0SGlnaGxpZ2h0ZXIge1xcclxcbiAgZnJvbSB7XFxyXFxuICAgYmFja2dyb3VuZDogIzUyNjRBRTtcXHJcXG4gIH1cXHJcXG4gXFxyXFxuICB0byB7XFxyXFxuICAgd2lkdGg6IDA7XFxyXFxuICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxyXFxuICB9XFxyXFxuIH1cXHJcXG5cXHJcXG4udGFza3MtbGlzdHMge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIHBhZGRpbmc6IDFyZW07XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2tzLWxpc3RzIGxpIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgaGVpZ2h0OiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4udGFzay1jaGVja2JveCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZ2FwOiAuOHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmVkaXQtZGVsZXRlLWJ0biB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZ2FwOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZWRpdC1kZWxldGUtYnRuID4gKiB7XFxyXFxuICBwYWRkaW5nOiAuM3JlbSAxcmVtO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgdHJhbnNpdGlvbjogLjNzIGVhc2Utb3V0O1xcclxcbiAgZm9udC1zaXplOiAuN3JlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxufVxcclxcblxcclxcbi5lZGl0LWRlbGV0ZS1idG4gPiAqOmhvdmVyIHtcXHJcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMjBweCAtMThweDtcXHJcXG4gIHRyYW5zaXRpb246IC4zcyBlYXNlLWluO1xcclxcbn1cXHJcXG5cXHJcXG4uZWRpdC1kZWxldGUtYnRuID4gKjphY3RpdmUge1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcXHJcXG59XFxyXFxuXFxyXFxuLmVkaXQtYnRuIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICM2MzYzZmU7XFxyXFxufVxcclxcblxcclxcbi5lZGl0LWJ0bjpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzQ3NGZmO1xcclxcbn1cXHJcXG5cXHJcXG4uZWRpdC1idG46YWN0aXZlIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNhY2FjZDM7XFxyXFxufVxcclxcblxcclxcbi5kZWxldGUtYnRuIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjY0NjQ7XFxyXFxufVxcclxcblxcclxcbi5kZWxldGUtYnRuOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZTg0ODQ7XFxyXFxufVxcclxcblxcclxcbi5kZWxldGUtYnRuOmFjdGl2ZSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBjNGM0O1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgVGFza0xpc3QgZnJvbSAnLi9tb2R1bGVzL2ludGVyYWN0aXZlLmpzJztcblxuY29uc3QgdGFza0xpc3QgPSBuZXcgVGFza0xpc3QoKTtcblxudGFza0xpc3QuZGlzcGxheVRhc2tzKCk7IiwiaW1wb3J0IFRhc2sgZnJvbSAnLi90YXNrLmpzJztcblxuZnVuY3Rpb24gYWRkVGFzayh0YXNrSW5wdXQsIHRhc2tzKSB7XG4gIGNvbnN0IHRhc2tOYW1lID0gdGFza0lucHV0LnZhbHVlLnRyaW0oKTtcbiAgY29uc3QgaWQgPSB0YXNrcy5sZW5ndGggKyAxO1xuICBpZiAodGFza05hbWUgIT09ICcnKSB7XG4gICAgY29uc3QgdGFzayA9IG5ldyBUYXNrKHRhc2tOYW1lLCBmYWxzZSwgaWQpO1xuICAgIHRhc2tzLnB1c2godGFzayk7XG4gIH1cbiAgcmV0dXJuIHRhc2tzO1xufVxuXG5leHBvcnQgZGVmYXVsdCBhZGRUYXNrO1xuIiwiLy8gY2xlYXJDb21wbGV0ZWRUYXNrIGZ1bmN0aW9uXG5mdW5jdGlvbiBjbGVhckNvbXBsZXRlZFRhc2sodGFza3MpIHtcbiAgcmV0dXJuIHRhc2tzLmZpbHRlcigodGFzaykgPT4gIXRhc2suc3RhdHVzKTtcbn1cblxuLy8gdG9nZ2xlVGFza1N0YXR1cyBmdW5jdGlvblxuZnVuY3Rpb24gdG9nZ2xlVGFza1N0YXR1cyhpZCwgdGFza3MpIHtcbiAgcmV0dXJuIHRhc2tzLm1hcCgodGFzaykgPT4ge1xuICAgIGlmICh0YXNrLmlkID09PSBpZCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4udGFzayxcbiAgICAgICAgc3RhdHVzOiAhdGFzay5zdGF0dXMsXG4gICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4gdGFzaztcbiAgfSk7XG59XG5cbi8vIGVkaXRUYXNrIGZ1bmN0aW9uXG5mdW5jdGlvbiBlZGl0VGFzayhpZCwgbmV3TmFtZSwgdGFza3MsIHNhdmVUYXNrcywgZGlzcGxheVRhc2tzKSB7XG4gIGNvbnN0IHRhc2tJbmRleCA9IHRhc2tzLmZpbmRJbmRleCgodGFzaykgPT4gdGFzay5pZCA9PT0gaWQpO1xuICBpZiAodGFza0luZGV4ICE9PSAtMSkge1xuICAgIHRhc2tzW3Rhc2tJbmRleF0ubmFtZSA9IG5ld05hbWU7XG4gICAgc2F2ZVRhc2tzKCk7XG4gICAgZGlzcGxheVRhc2tzKCk7XG4gIH1cbn1cblxuZXhwb3J0IHsgY2xlYXJDb21wbGV0ZWRUYXNrLCB0b2dnbGVUYXNrU3RhdHVzLCBlZGl0VGFzayB9OyIsImltcG9ydCBhZGRUYXNrIGZyb20gJy4vYWRkVGFzay5qcyc7XG5pbXBvcnQgcmVtb3ZlVGFzayBmcm9tICcuL3JlbW92ZVRhc2suanMnO1xuaW1wb3J0IHsgY2xlYXJDb21wbGV0ZWRUYXNrLCB0b2dnbGVUYXNrU3RhdHVzLCBlZGl0VGFzayB9IGZyb20gJy4vY2xlYXJUb2dnbGVFZGl0VGFzay5qcyc7XG5cbmNsYXNzIFRhc2tMaXN0IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy50YXNrcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rhc2tzJykpIHx8IFtdO1xuICAgIHRoaXMudGFza0Zvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFzay1mb3JtJyk7XG4gICAgdGhpcy50YXNrSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFzay1pbnB1dCcpO1xuICAgIHRoaXMudGFza0xpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFzay1saXN0Jyk7XG4gICAgdGhpcy5jbGVhckNvbXBsZXRlZEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbGVhci1jb21wbGV0ZWQnKTtcbiAgICB0aGlzLnJlc2V0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc2V0Jyk7XG4gICAgdGhpcy50YXNrRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgdGhpcy50YXNrcyA9IGFkZFRhc2sodGhpcy50YXNrSW5wdXQsIHRoaXMudGFza3MpO1xuICAgICAgdGhpcy5zYXZlVGFza3MoKTtcbiAgICAgIHRoaXMuZGlzcGxheVRhc2tzKCk7XG4gICAgICB0aGlzLnRhc2tJbnB1dC52YWx1ZSA9ICcnO1xuICAgIH0pO1xuICAgIHRoaXMuY2xlYXJDb21wbGV0ZWRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICB0aGlzLnRhc2tzID0gY2xlYXJDb21wbGV0ZWRUYXNrKHRoaXMudGFza3MpO1xuICAgICAgdGhpcy5zYXZlVGFza3MoKTtcbiAgICAgIHRoaXMuZGlzcGxheVRhc2tzKCk7XG4gICAgfSk7XG4gICAgdGhpcy5yZXNldEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIHRoaXMudGFza3MgPSBbXTtcbiAgICAgIHRoaXMuc2F2ZVRhc2tzKCk7XG4gICAgICB0aGlzLmRpc3BsYXlUYXNrcygpO1xuICAgIH0pO1xuICAgIHRoaXMuZGlzcGxheVRhc2tzKCk7XG4gIH1cblxuICBlZGl0VGFzayhpZCwgbmV3TmFtZSkge1xuICAgIGVkaXRUYXNrKGlkLCBuZXdOYW1lLCB0aGlzLnRhc2tzLCB0aGlzLnNhdmVUYXNrcy5iaW5kKHRoaXMpLCB0aGlzLmRpc3BsYXlUYXNrcy5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIHJlbW92ZVRhc2soaWQpIHtcbiAgICB0aGlzLnRhc2tzID0gcmVtb3ZlVGFzayhpZCwgdGhpcy50YXNrcyk7XG4gICAgdGhpcy5zYXZlVGFza3MoKTtcbiAgICB0aGlzLmRpc3BsYXlUYXNrcygpO1xuICB9XG5cbiAgdG9nZ2xlVGFza1N0YXR1cyhpZCkge1xuICAgIHRoaXMudGFza3MgPSB0b2dnbGVUYXNrU3RhdHVzKGlkLCB0aGlzLnRhc2tzKTtcbiAgICB0aGlzLnNhdmVUYXNrcygpO1xuICAgIHRoaXMuZGlzcGxheVRhc2tzKCk7XG4gIH1cblxuICByZXNldFRhc2tzKCkge1xuICAgIHRoaXMudGFza3MgPSBbXTtcbiAgICB0aGlzLnNhdmVUYXNrcygpO1xuICAgIHRoaXMuZGlzcGxheVRhc2tzKCk7XG4gIH1cblxuICBzYXZlVGFza3MoKSB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rhc2tzJywgSlNPTi5zdHJpbmdpZnkodGhpcy50YXNrcykpO1xuICB9XG5cbiAgZGlzcGxheVRhc2tzKCkge1xuICAgIHRoaXMudGFza0xpc3QuaW5uZXJIVE1MID0gJyc7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnRhc2tzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBjb25zdCB0YXNrID0gdGhpcy50YXNrc1tpXTtcbiAgICAgIGNvbnN0IHRhc2tFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgIHRhc2tFbGVtZW50LmlubmVySFRNTCA9IGBcbiAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrLWNoZWNrYm94XCI+XG4gICAgICAgIDxpbnB1dCB0eXBlPSdjaGVja2JveCcgJHt0YXNrLnN0YXR1cyA/ICdjaGVja2VkJyA6ICcnfT5cbiAgICAgICAgPHNwYW4gJHt0YXNrLnN0YXR1cyA/ICdzdHlsZT1cInRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoXCInIDogJyd9PlxuICAgICAgICAgICR7dGFzay5uYW1lfVxuICAgICAgICA8L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJlZGl0LWRlbGV0ZS1idG5cIj5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJlZGl0LWJ0blwiPkVkaXQ8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9J2RlbGV0ZS1idG4nPlg8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIGA7XG5cbiAgICAgIGNvbnN0IGNoZWNrYm94ID0gdGFza0VsZW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbdHlwZT1jaGVja2JveF0nKTtcbiAgICAgIGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHRoaXMudG9nZ2xlVGFza1N0YXR1cyh0YXNrLmlkKSk7XG4gICAgICBjb25zdCBlZGl0QnRuID0gdGFza0VsZW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXQtYnRuJyk7XG4gICAgICBlZGl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zdCBuZXdOYW1lID0gcHJvbXB0KCdFbnRlciBuZXcgdGFzayBuYW1lOicsIHRhc2submFtZSk7XG4gICAgICAgIGlmIChuZXdOYW1lICE9PSBudWxsICYmIG5ld05hbWUudHJpbSgpICE9PSAnJykge1xuICAgICAgICAgIHRoaXMuZWRpdFRhc2sodGFzay5pZCwgbmV3TmFtZS50cmltKCkpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGNvbnN0IGRlbGV0ZUJ0biA9IHRhc2tFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZWxldGUtYnRuJyk7XG4gICAgICBkZWxldGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB0aGlzLnJlbW92ZVRhc2sodGFzay5pZCkpO1xuICAgICAgdGhpcy50YXNrTGlzdC5hcHBlbmRDaGlsZCh0YXNrRWxlbWVudCk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRhc2tMaXN0OyIsImZ1bmN0aW9uIHJlbW92ZVRhc2soaWQsIHRhc2tzKSB7XG4gIGNvbnN0IHVwZGF0ZWRUYXNrcyA9IHRhc2tzLmZpbHRlcigodGFzaykgPT4gdGFzay5pZCAhPT0gaWQpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHVwZGF0ZWRUYXNrcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIHVwZGF0ZWRUYXNrc1tpXS5pZCA9IGkgKyAxO1xuICB9XG4gIHJldHVybiB1cGRhdGVkVGFza3M7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHJlbW92ZVRhc2s7IiwiY2xhc3MgVGFzayB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIHN0YXR1cywgaWQpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuc3RhdHVzID0gc3RhdHVzO1xuICAgIHRoaXMuaWQgPSBpZDtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUYXNrOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==