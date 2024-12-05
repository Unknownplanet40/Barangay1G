(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[31],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/_resident/pages/Assistance/Assistance.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/_resident/pages/Assistance/Assistance.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/api */ "./resources/js/services/api.js");
/* harmony import */ var _AssistanceForm_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AssistanceForm.vue */ "./resources/js/_resident/pages/Assistance/AssistanceForm.vue");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Assistants",
  components: {
    AssistantForm: _AssistanceForm_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      breadcrumb: [{
        text: "Dashboard",
        href: "/admin"
      }, {
        text: "Assistants",
        active: true
      }],
      items: [],
      fields: [{
        key: "id",
        label: "ID",
        sortable: true
      }, {
        key: "resident_name",
        label: "Resident name",
        sortable: true
      }, {
        key: "assistant_type",
        label: "Assistant Type",
        sortable: true
      }, {
        key: "description",
        label: "Description",
        sortable: true
      }, {
        key: "date_request",
        label: "Date Request",
        sortable: true
      }, {
        key: "lat",
        label: "Latitude",
        sortable: true
      }, {
        key: "lng",
        label: "Longitude",
        sortable: true
      }, {
        key: "status",
        label: "Status",
        sortable: true
      }, {
        key: "actions",
        label: "Actions"
      }],
      totalRows: 1,
      currentPage: 1,
      perPage: 10,
      selectedAssistant: {},
      formAction: "",
      errors: {},
      filter: null,
      filterOn: []
    };
  },
  methods: {
    onFiltered: function onFiltered(filteredItems) {
      this.totalRows = filteredItems.length;
      this.currentPage = 1;
    },
    getData: function getData() {
      var _this = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var _yield$getResidentAss, data;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return Object(_services_api__WEBPACK_IMPORTED_MODULE_0__["getResidentAssistances"])();
            case 2:
              _yield$getResidentAss = _context.sent;
              data = _yield$getResidentAss.data;
              _this.items = data.data;
              _this.totalRows = data.total;
            case 6:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }))();
    },
    showAddModal: function showAddModal() {
      this.selectedAssistant = {
        resident_id: "",
        assistant_type: "",
        description: "",
        date_request: "",
        lat: "",
        lng: "",
        file_type: "",
        file_path: "",
        status: 0,
        file: null
      };
      this.formAction = "add";
      this.$bvModal.show("assistant-form-modal");
    },
    showUpdateModal: function showUpdateModal(assistant) {
      this.selectedAssistant = _objectSpread({}, assistant);
      this.formAction = "update";
      this.$bvModal.show("assistant-form-modal");
    },
    handleFormSubmit: function handleFormSubmit(formData) {
      var _this2 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var _yield$addAssistant, data, _yield$updateAssistan, _data, index;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _this2.$Progress.start();
              _context2.prev = 1;
              if (!(_this2.formAction === "add")) {
                _context2.next = 10;
                break;
              }
              _context2.next = 5;
              return Object(_services_api__WEBPACK_IMPORTED_MODULE_0__["addAssistant"])(formData);
            case 5:
              _yield$addAssistant = _context2.sent;
              data = _yield$addAssistant.data;
              _this2.items.unshift(data.data);
              _context2.next = 18;
              break;
            case 10:
              if (!(_this2.formAction === "update")) {
                _context2.next = 18;
                break;
              }
              formData.append("_method", "put");
              _context2.next = 14;
              return Object(_services_api__WEBPACK_IMPORTED_MODULE_0__["updateAssistant"])(_this2.selectedAssistant.id, formData);
            case 14:
              _yield$updateAssistan = _context2.sent;
              _data = _yield$updateAssistan.data;
              index = _this2.items.findIndex(function (item) {
                return item.id === _this2.selectedAssistant.id;
              });
              if (index !== -1) {
                _this2.items.splice(index, 1, _data.data);
              }
            case 18:
              _this2.$bvModal.hide("assistant-form-modal");
              _this2.$refs.assistantForm.$emit("reset-form"); // Emit reset-form event
              _context2.next = 33;
              break;
            case 22:
              _context2.prev = 22;
              _context2.t0 = _context2["catch"](1);
              _context2.t1 = _context2.t0.response.status;
              _context2.next = _context2.t1 === 422 ? 27 : 30;
              break;
            case 27:
              _this2.errors = _context2.t0.response.data.errors;
              Toast.fire({
                icon: "error",
                title: _context2.t0.response.data.message
              });
              return _context2.abrupt("break", 33);
            case 30:
              _this2.errors = _context2.t0.response.data.errors;
              Toast.fire({
                icon: "error",
                title: "Server error, Please try again!"
              });
              return _context2.abrupt("break", 33);
            case 33:
              _context2.prev = 33;
              setTimeout(function () {
                _this2.getData();
                _this2.$Progress.finish();
              }, 500);
              return _context2.finish(33);
            case 36:
            case "end":
              return _context2.stop();
          }
        }, _callee2, null, [[1, 22, 33, 36]]);
      }))();
    },
    deleteAssistant: function deleteAssistant(id) {
      var _this3 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              _context3.next = 3;
              return Object(_services_api__WEBPACK_IMPORTED_MODULE_0__["deleteAssistant"])(id);
            case 3:
              _this3.items = _this3.items.filter(function (item) {
                return item.id !== id;
              });
              Toast.fire({
                icon: "success",
                title: "Assistant deleted successfully"
              });
              _context3.next = 10;
              break;
            case 7:
              _context3.prev = 7;
              _context3.t0 = _context3["catch"](0);
              Toast.fire({
                icon: "error",
                title: "Failed to delete assistant"
              });
            case 10:
            case "end":
              return _context3.stop();
          }
        }, _callee3, null, [[0, 7]]);
      }))();
    },
    truncateDescription: function truncateDescription(description) {
      var maxLength = 100; // Set the maximum length for the description
      if (description.length > maxLength) {
        return description.substring(0, maxLength) + "...";
      }
      return description;
    }
  },
  created: function created() {
    this.totalRows = this.items.length;
    this.getData();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/_resident/pages/Assistance/Assistance.vue?vue&type=template&id=553a3976":
/*!**********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/_resident/pages/Assistance/Assistance.vue?vue&type=template&id=553a3976 ***!
  \**********************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "content-wrapper"
  }, [_c("div", {
    staticClass: "content-header"
  }, [_c("div", {
    staticClass: "grey-bg container-fluid"
  }, [_c("div", {
    staticClass: "row mb-2"
  }, [_vm._m(0), _vm._v(" "), _c("div", {
    staticClass: "col-sm-6"
  }, [_c("ol", {
    staticClass: "breadcrumb float-sm-right"
  }, [_c("b-breadcrumb", {
    staticClass: "breadcrumb-item",
    attrs: {
      items: _vm.breadcrumb
    }
  })], 1)])])])]), _vm._v(" "), _c("section", {
    staticClass: "content"
  }, [_c("div", {
    staticClass: "container-fluid"
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12"
  }, [_c("div", {
    staticClass: "card"
  }, [_c("div", {
    staticClass: "card-header"
  }, [_c("b-row", [_c("b-col", {
    staticClass: "my-1",
    attrs: {
      lg: "6"
    }
  }), _vm._v(" "), _c("b-col", {
    staticClass: "my-1",
    attrs: {
      lg: "6"
    }
  }, [_c("b-form-group", {
    staticClass: "mb-0",
    attrs: {
      label: "Filter",
      "label-for": "filter-input",
      "label-cols-sm": "3",
      "label-align-sm": "right",
      "label-size": "sm"
    }
  }, [_c("b-input-group", {
    attrs: {
      size: "sm"
    }
  }, [_c("b-form-input", {
    attrs: {
      id: "filter-input",
      type: "search",
      placeholder: "Type to Search"
    },
    model: {
      value: _vm.filter,
      callback: function callback($$v) {
        _vm.filter = $$v;
      },
      expression: "filter"
    }
  }), _vm._v(" "), _c("b-input-group-append", [_c("b-button", {
    attrs: {
      disabled: !_vm.filter
    },
    on: {
      click: function click($event) {
        _vm.filter = "";
      }
    }
  }, [_vm._v("Clear")])], 1)], 1)], 1)], 1)], 1)], 1), _vm._v(" "), _c("div", {
    staticClass: "card-body table-responsive"
  }, [_c("b-table", {
    attrs: {
      items: _vm.items,
      fields: _vm.fields,
      "current-page": _vm.currentPage,
      "per-page": _vm.perPage,
      filter: _vm.filter,
      "filter-included-fields": _vm.filterOn,
      stacked: "md",
      hover: ""
    },
    on: {
      filtered: _vm.onFiltered
    },
    scopedSlots: _vm._u([{
      key: "cell(resident_name)",
      fn: function fn(row) {
        return [_vm._v("\n                                    " + _vm._s(row.item.resident.first_name + " " + row.item.resident.last_name) + "\n                                ")];
      }
    }, {
      key: "cell(date_request)",
      fn: function fn(row) {
        return [_vm._v("\n                                    " + _vm._s(_vm._f("date")(row.item.date_request)) + "\n                                ")];
      }
    }, {
      key: "cell(description)",
      fn: function fn(row) {
        return [_vm._v("\n                                    " + _vm._s(_vm.truncateDescription(row.item.description)) + "\n                                ")];
      }
    }, {
      key: "cell(status)",
      fn: function fn(row) {
        return [row.item.status == "0" ? _c("div", [_c("span", {
          staticClass: "badge badge-danger"
        }, [_vm._v("Pending")])]) : row.item.status == "1" ? _c("div", [_c("span", {
          staticClass: "badge badge-success"
        }, [_vm._v("Assisting")])]) : _c("div", [_c("span", {
          staticClass: "badge badge-primary"
        }, [_vm._v("Completed")])])];
      }
    }, {
      key: "cell(actions)",
      fn: function fn(row) {
        return [_c("b-button", {
          attrs: {
            size: "sm",
            variant: "primary"
          },
          on: {
            click: function click($event) {
              return _vm.showUpdateModal(row.item);
            }
          }
        }, [_vm._v("\n                                        Update\n                                    ")]), _vm._v(" "), _c("b-button", {
          attrs: {
            size: "sm",
            variant: "danger"
          },
          on: {
            click: function click($event) {
              return _vm.deleteAssistant(row.item.id);
            }
          }
        }, [_vm._v("\n                                        Delete\n                                    ")])];
      }
    }, {
      key: "row-details",
      fn: function fn(row) {
        return [_c("b-card", [_c("ul", _vm._l(row.item, function (value, key) {
          return _c("li", {
            key: key
          }, [_vm._v("\n                                                " + _vm._s(key) + ": " + _vm._s(value) + "\n                                            ")]);
        }), 0)])];
      }
    }])
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "card-footer"
  }, [_c("b-row", {
    staticClass: "justify-content-md-center"
  }, [_c("b-col", {
    staticClass: "my-1",
    attrs: {
      sm: "7",
      md: "6"
    }
  }, [_c("b-pagination", {
    staticClass: "my-0",
    attrs: {
      "total-rows": _vm.totalRows,
      "per-page": _vm.perPage,
      align: "fill",
      size: "sm"
    },
    model: {
      value: _vm.currentPage,
      callback: function callback($$v) {
        _vm.currentPage = $$v;
      },
      expression: "currentPage"
    }
  })], 1)], 1)], 1)])])])])]), _vm._v(" "), _c("AssistantForm", {
    attrs: {
      assistant: _vm.selectedAssistant,
      action: _vm.formAction,
      "modal-id": "assistant-form-modal",
      errors: _vm.errors
    },
    on: {
      submit: _vm.handleFormSubmit
    }
  })], 1);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "col-sm-6"
  }, [_c("h1", {}, [_vm._v("Assistants")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/_resident/pages/Assistance/Assistance.vue":
/*!****************************************************************!*\
  !*** ./resources/js/_resident/pages/Assistance/Assistance.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Assistance_vue_vue_type_template_id_553a3976__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Assistance.vue?vue&type=template&id=553a3976 */ "./resources/js/_resident/pages/Assistance/Assistance.vue?vue&type=template&id=553a3976");
/* harmony import */ var _Assistance_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Assistance.vue?vue&type=script&lang=js */ "./resources/js/_resident/pages/Assistance/Assistance.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Assistance_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Assistance_vue_vue_type_template_id_553a3976__WEBPACK_IMPORTED_MODULE_0__["render"],
  _Assistance_vue_vue_type_template_id_553a3976__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/_resident/pages/Assistance/Assistance.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/_resident/pages/Assistance/Assistance.vue?vue&type=script&lang=js":
/*!****************************************************************************************!*\
  !*** ./resources/js/_resident/pages/Assistance/Assistance.vue?vue&type=script&lang=js ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Assistance_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Assistance.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/_resident/pages/Assistance/Assistance.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Assistance_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/_resident/pages/Assistance/Assistance.vue?vue&type=template&id=553a3976":
/*!**********************************************************************************************!*\
  !*** ./resources/js/_resident/pages/Assistance/Assistance.vue?vue&type=template&id=553a3976 ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Assistance_vue_vue_type_template_id_553a3976__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Assistance.vue?vue&type=template&id=553a3976 */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/_resident/pages/Assistance/Assistance.vue?vue&type=template&id=553a3976");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Assistance_vue_vue_type_template_id_553a3976__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Assistance_vue_vue_type_template_id_553a3976__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/_resident/pages/Assistance/AssistanceForm.vue":
/*!********************************************************************!*\
  !*** ./resources/js/_resident/pages/Assistance/AssistanceForm.vue ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
var render, staticRenderFns
var script = {}


/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_0__["default"])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

component.options.__file = "resources/js/_resident/pages/Assistance/AssistanceForm.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/services/api.js":
/*!**************************************!*\
  !*** ./resources/js/services/api.js ***!
  \**************************************/
/*! exports provided: getOfficials, addOfficial, updateOfficial, deleteOfficial, getResidents, addResident, updateResident, deleteResident, getDisasters, addDisaster, updateDisaster, deleteDisaster, getCategories, getServices, addService, updateService, deleteService, getResources, addResource, updateResource, deleteResource, getAlerts, addAlert, updateAlert, deleteAlert, getAssistants, addAssistant, updateAssistant, deleteAssistant, getResidentDisasters, getResidentDisasterPerPage, getResidentResources, getResidentServices, getResidentAssistances */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: C:\\xampp\\htdocs\\dms\\resources\\js\\services\\api.js: Unterminated string constant. (279:26)\n\n\u001b[0m \u001b[90m 277 |\u001b[39m \u001b[36mexport\u001b[39m \u001b[36mfunction\u001b[39m getResidentAssistances() {\n \u001b[90m 278 |\u001b[39m     \u001b[36mtry\u001b[39m {\n\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 279 |\u001b[39m         \u001b[36mreturn\u001b[39m http()\u001b[33m.\u001b[39m\u001b[36mget\u001b[39m(\u001b[32m\"/resident-assistances);\u001b[39m\n \u001b[90m     |\u001b[39m                           \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\n \u001b[90m 280 |\u001b[39m     } \u001b[36mcatch\u001b[39m (e) {\n \u001b[90m 281 |\u001b[39m         console\u001b[33m.\u001b[39mlog(e)\u001b[33m;\u001b[39m\n \u001b[90m 282 |\u001b[39m     }\u001b[0m\n    at constructor (C:\\xampp\\htdocs\\dms\\node_modules\\@babel\\parser\\lib\\index.js:359:19)\n    at Parser.raise (C:\\xampp\\htdocs\\dms\\node_modules\\@babel\\parser\\lib\\index.js:3266:19)\n    at Object.unterminated (C:\\xampp\\htdocs\\dms\\node_modules\\@babel\\parser\\lib\\index.js:2334:20)\n    at readStringContents (C:\\xampp\\htdocs\\dms\\node_modules\\@babel\\parser\\lib\\index.js:2076:16)\n    at Parser.readString (C:\\xampp\\htdocs\\dms\\node_modules\\@babel\\parser\\lib\\index.js:3165:9)\n    at Parser.getTokenFromCode (C:\\xampp\\htdocs\\dms\\node_modules\\@babel\\parser\\lib\\index.js:2925:14)\n    at Parser.nextToken (C:\\xampp\\htdocs\\dms\\node_modules\\@babel\\parser\\lib\\index.js:2449:10)\n    at Parser.next (C:\\xampp\\htdocs\\dms\\node_modules\\@babel\\parser\\lib\\index.js:2362:10)\n    at Parser.parseCoverCallAndAsyncArrowHead (C:\\xampp\\htdocs\\dms\\node_modules\\@babel\\parser\\lib\\index.js:10701:10)\n    at Parser.parseSubscript (C:\\xampp\\htdocs\\dms\\node_modules\\@babel\\parser\\lib\\index.js:10655:19)\n    at Parser.parseSubscripts (C:\\xampp\\htdocs\\dms\\node_modules\\@babel\\parser\\lib\\index.js:10628:19)\n    at Parser.parseExprSubscripts (C:\\xampp\\htdocs\\dms\\node_modules\\@babel\\parser\\lib\\index.js:10619:17)\n    at Parser.parseUpdate (C:\\xampp\\htdocs\\dms\\node_modules\\@babel\\parser\\lib\\index.js:10600:21)\n    at Parser.parseMaybeUnary (C:\\xampp\\htdocs\\dms\\node_modules\\@babel\\parser\\lib\\index.js:10580:23)\n    at Parser.parseMaybeUnaryOrPrivate (C:\\xampp\\htdocs\\dms\\node_modules\\@babel\\parser\\lib\\index.js:10434:61)\n    at Parser.parseExprOps (C:\\xampp\\htdocs\\dms\\node_modules\\@babel\\parser\\lib\\index.js:10439:23)\n    at Parser.parseMaybeConditional (C:\\xampp\\htdocs\\dms\\node_modules\\@babel\\parser\\lib\\index.js:10416:23)\n    at Parser.parseMaybeAssign (C:\\xampp\\htdocs\\dms\\node_modules\\@babel\\parser\\lib\\index.js:10379:21)\n    at Parser.parseExpressionBase (C:\\xampp\\htdocs\\dms\\node_modules\\@babel\\parser\\lib\\index.js:10333:23)\n    at C:\\xampp\\htdocs\\dms\\node_modules\\@babel\\parser\\lib\\index.js:10329:39\n    at Parser.allowInAnd (C:\\xampp\\htdocs\\dms\\node_modules\\@babel\\parser\\lib\\index.js:11946:16)\n    at Parser.parseExpression (C:\\xampp\\htdocs\\dms\\node_modules\\@babel\\parser\\lib\\index.js:10329:17)\n    at Parser.parseReturnStatement (C:\\xampp\\htdocs\\dms\\node_modules\\@babel\\parser\\lib\\index.js:12636:28)\n    at Parser.parseStatementContent (C:\\xampp\\htdocs\\dms\\node_modules\\@babel\\parser\\lib\\index.js:12288:21)\n    at Parser.parseStatementLike (C:\\xampp\\htdocs\\dms\\node_modules\\@babel\\parser\\lib\\index.js:12257:17)\n    at Parser.parseStatementListItem (C:\\xampp\\htdocs\\dms\\node_modules\\@babel\\parser\\lib\\index.js:12237:17)\n    at Parser.parseBlockOrModuleBlockBody (C:\\xampp\\htdocs\\dms\\node_modules\\@babel\\parser\\lib\\index.js:12810:61)\n    at Parser.parseBlockBody (C:\\xampp\\htdocs\\dms\\node_modules\\@babel\\parser\\lib\\index.js:12803:10)\n    at Parser.parseBlock (C:\\xampp\\htdocs\\dms\\node_modules\\@babel\\parser\\lib\\index.js:12791:10)\n    at Parser.parseTryStatement (C:\\xampp\\htdocs\\dms\\node_modules\\@babel\\parser\\lib\\index.js:12699:23)\n    at Parser.parseStatementContent (C:\\xampp\\htdocs\\dms\\node_modules\\@babel\\parser\\lib\\index.js:12294:21)\n    at Parser.parseStatementLike (C:\\xampp\\htdocs\\dms\\node_modules\\@babel\\parser\\lib\\index.js:12257:17)\n    at Parser.parseStatementListItem (C:\\xampp\\htdocs\\dms\\node_modules\\@babel\\parser\\lib\\index.js:12237:17)\n    at Parser.parseBlockOrModuleBlockBody (C:\\xampp\\htdocs\\dms\\node_modules\\@babel\\parser\\lib\\index.js:12810:61)\n    at Parser.parseBlockBody (C:\\xampp\\htdocs\\dms\\node_modules\\@babel\\parser\\lib\\index.js:12803:10)\n    at Parser.parseBlock (C:\\xampp\\htdocs\\dms\\node_modules\\@babel\\parser\\lib\\index.js:12791:10)\n    at Parser.parseFunctionBody (C:\\xampp\\htdocs\\dms\\node_modules\\@babel\\parser\\lib\\index.js:11634:24)\n    at Parser.parseFunctionBodyAndFinish (C:\\xampp\\htdocs\\dms\\node_modules\\@babel\\parser\\lib\\index.js:11620:10)\n    at C:\\xampp\\htdocs\\dms\\node_modules\\@babel\\parser\\lib\\index.js:12935:12\n    at Parser.withSmartMixTopicForbiddingContext (C:\\xampp\\htdocs\\dms\\node_modules\\@babel\\parser\\lib\\index.js:11928:14)\n    at Parser.parseFunction (C:\\xampp\\htdocs\\dms\\node_modules\\@babel\\parser\\lib\\index.js:12934:10)\n    at Parser.parseFunctionStatement (C:\\xampp\\htdocs\\dms\\node_modules\\@babel\\parser\\lib\\index.js:12619:17)\n    at Parser.parseStatementContent (C:\\xampp\\htdocs\\dms\\node_modules\\@babel\\parser\\lib\\index.js:12281:21)\n    at Parser.parseStatementLike (C:\\xampp\\htdocs\\dms\\node_modules\\@babel\\parser\\lib\\index.js:12257:17)\n    at Parser.parseStatementListItem (C:\\xampp\\htdocs\\dms\\node_modules\\@babel\\parser\\lib\\index.js:12237:17)\n    at Parser.parseExportDeclaration (C:\\xampp\\htdocs\\dms\\node_modules\\@babel\\parser\\lib\\index.js:13416:17)\n    at Parser.maybeParseExportDeclaration (C:\\xampp\\htdocs\\dms\\node_modules\\@babel\\parser\\lib\\index.js:13375:31)\n    at Parser.parseExport (C:\\xampp\\htdocs\\dms\\node_modules\\@babel\\parser\\lib\\index.js:13300:29)\n    at Parser.parseStatementContent (C:\\xampp\\htdocs\\dms\\node_modules\\@babel\\parser\\lib\\index.js:12370:27)\n    at Parser.parseStatementLike (C:\\xampp\\htdocs\\dms\\node_modules\\@babel\\parser\\lib\\index.js:12257:17)");

/***/ })

}]);