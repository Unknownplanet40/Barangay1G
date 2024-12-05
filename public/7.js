(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/_root/pages/Assistance/Assistance.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/_root/pages/Assistance/Assistance.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/api */ "./resources/js/services/api.js");
/* harmony import */ var _AssistanceForm_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AssistanceForm.vue */ "./resources/js/_root/pages/Assistance/AssistanceForm.vue");
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
        var _yield$getAssistants, data;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return Object(_services_api__WEBPACK_IMPORTED_MODULE_0__["getAssistants"])();
            case 2:
              _yield$getAssistants = _context.sent;
              data = _yield$getAssistants.data;
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
        var confirmed;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
              }).then(function (result) {
                return result.isConfirmed;
              });
            case 2:
              confirmed = _context3.sent;
              if (confirmed) {
                _context3.next = 5;
                break;
              }
              return _context3.abrupt("return");
            case 5:
              _this3.$Progress.start();
              _context3.prev = 6;
              _context3.next = 9;
              return Object(_services_api__WEBPACK_IMPORTED_MODULE_0__["deleteAssistant"])(id);
            case 9:
              _this3.items = _this3.items.filter(function (item) {
                return item.id !== id;
              });
              Toast.fire({
                icon: "success",
                title: "Assistant deleted successfully"
              });
              _context3.next = 16;
              break;
            case 13:
              _context3.prev = 13;
              _context3.t0 = _context3["catch"](6);
              Toast.fire({
                icon: "error",
                title: "Failed to delete assistant"
              });
            case 16:
              _context3.prev = 16;
              setTimeout(function () {
                _this3.$Progress.finish();
              }, 500);
              return _context3.finish(16);
            case 19:
            case "end":
              return _context3.stop();
          }
        }, _callee3, null, [[6, 13, 16, 19]]);
      }))();
    },
    truncateDescription: function truncateDescription(description) {
      var maxLength = 100; // Set the maximum length for the description
      if (description.length > maxLength) {
        return description.substring(0, maxLength) + "...";
      }
      return description;
    },
    respondHandler: function respondHandler(assistant, action) {
      var _this4 = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        var confirmed, formData, _yield$respondAssista, data, index;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return Swal.fire({
                title: "Are you sure?",
                text: "You want to respond to this request?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, respond!"
              }).then(function (result) {
                return result.isConfirmed;
              });
            case 2:
              confirmed = _context4.sent;
              if (confirmed) {
                _context4.next = 5;
                break;
              }
              return _context4.abrupt("return");
            case 5:
              _this4.$Progress.start();
              _context4.prev = 6;
              formData = new FormData();
              formData.append("status", action === "respond" ? 1 : 2);
              formData.append("message", action === "respond" ? "An Official is now going to your location to assist you" : "Assistance request completed");
              formData.append("phone_number", "0".concat(assistant.resident.phone_number));
              formData.append("_method", "put");
              _context4.next = 14;
              return Object(_services_api__WEBPACK_IMPORTED_MODULE_0__["respondAssistant"])(assistant.id, formData);
            case 14:
              _yield$respondAssista = _context4.sent;
              data = _yield$respondAssista.data;
              index = _this4.items.findIndex(function (item) {
                return item.id === assistant.id;
              });
              if (index !== -1) {
                _this4.items.splice(index, 1, data.data);
              }
              Toast.fire({
                icon: "success",
                title: "Assistant request responded successfully"
              });
              _this4.getData();
              _context4.next = 25;
              break;
            case 22:
              _context4.prev = 22;
              _context4.t0 = _context4["catch"](6);
              Toast.fire({
                icon: "error",
                title: "Failed to respond to assistant request"
              });
            case 25:
              _context4.prev = 25;
              setTimeout(function () {
                _this4.$Progress.finish();
              }, 500);
              return _context4.finish(25);
            case 28:
            case "end":
              return _context4.stop();
          }
        }, _callee4, null, [[6, 22, 25, 28]]);
      }))();
    }
  },
  created: function created() {
    this.totalRows = this.items.length;
    this.getData();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/_root/pages/Assistance/AssistanceForm.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/_root/pages/Assistance/AssistanceForm.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var leaflet_dist_leaflet_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! leaflet/dist/leaflet.css */ "./node_modules/leaflet/dist/leaflet.css");
/* harmony import */ var leaflet_dist_leaflet_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(leaflet_dist_leaflet_css__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }



// Set default icon paths
delete leaflet__WEBPACK_IMPORTED_MODULE_0___default.a.Icon.Default.prototype._getIconUrl;
leaflet__WEBPACK_IMPORTED_MODULE_0___default.a.Icon.Default.mergeOptions({
  iconRetinaUrl: __webpack_require__(/*! leaflet/dist/images/marker-icon-2x.png */ "./node_modules/leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: __webpack_require__(/*! leaflet/dist/images/marker-icon.png */ "./node_modules/leaflet/dist/images/marker-icon.png"),
  shadowUrl: __webpack_require__(/*! leaflet/dist/images/marker-shadow.png */ "./node_modules/leaflet/dist/images/marker-shadow.png")
});
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    assistant: {
      type: Object,
      "default": function _default() {
        return {
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
      }
    },
    action: {
      type: String,
      required: true
    },
    modalId: {
      type: String,
      required: true
    },
    errors: {
      type: Object,
      "default": function _default() {
        return {};
      }
    }
  },
  data: function data() {
    return {
      form: _objectSpread({}, this.assistant),
      imagePreview: null,
      map: null,
      marker: null,
      assistantTypeOptions: [{
        value: null,
        text: "Please select an option"
      }, {
        value: "Property damage",
        text: "Property damage"
      }, {
        value: "Fire incident",
        text: "Fire incident"
      }, {
        value: "Minor injuries",
        text: "Minor injuries"
      }, {
        value: "Fatalities",
        text: "Fatalities"
      }, {
        value: "Hazards",
        text: "Hazards"
      }, {
        value: "Medical Incident",
        text: "Medical Incident"
      }, {
        value: "Rescue",
        text: "Rescue"
      }, {
        value: "Flood",
        text: "Flood"
      }]
    };
  },
  watch: {
    assistant: function assistant(newAssistant) {
      this.form = _objectSpread({}, newAssistant);
      this.imagePreview = null; // Reset image preview when assistant changes
      if (this.map) {
        this.updateMap();
      }
    }
  },
  methods: {
    handleSubmit: function handleSubmit(event) {
      event.preventDefault();
      var formData = new FormData();
      for (var key in this.form) {
        formData.append(key, this.form[key]);
      }
      this.$emit("submit", formData);
    },
    resetForm: function resetForm() {
      this.form = _objectSpread({}, this.assistant);
      this.imagePreview = null; // Reset image preview when form is reset
      if (this.map) {
        this.updateMap();
      }
    },
    previewImage: function previewImage(event) {
      var _this = this;
      var file = event.target.files[0];
      if (file) {
        var reader = new FileReader();
        reader.onload = function (e) {
          _this.imagePreview = e.target.result;
        };
        reader.readAsDataURL(file);
      } else {
        this.imagePreview = null;
      }
    },
    initMap: function initMap() {
      this.map = leaflet__WEBPACK_IMPORTED_MODULE_0___default.a.map("map").setView([this.assistant.lat, this.assistant.lng], 13); // Default to Manila coordinates
      leaflet__WEBPACK_IMPORTED_MODULE_0___default.a.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(this.map);
      this.map.on("click", this.onMapClick);
      this.updateMap();
    },
    updateMap: function updateMap() {
      if (this.marker) {
        this.map.removeLayer(this.marker);
      }
      if (this.form.lat && this.form.lng) {
        this.marker = leaflet__WEBPACK_IMPORTED_MODULE_0___default.a.marker([this.form.lat, this.form.lng]).addTo(this.map);
        this.map.setView([this.form.lat, this.form.lng], 13);
      }
    },
    onMapClick: function onMapClick(e) {
      this.form.lat = e.latlng.lat;
      this.form.lng = e.latlng.lng;
      this.updateMap();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/_root/pages/Assistance/Assistance.vue?vue&type=template&id=48afacf0":
/*!******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/_root/pages/Assistance/Assistance.vue?vue&type=template&id=48afacf0 ***!
  \******************************************************************************************************************************************************************************************************************************************************/
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
          staticClass: "badge badge-warning"
        }, [_vm._v("Pending")])]) : row.item.status == "1" ? _c("div", [_c("span", {
          staticClass: "badge badge-info"
        }, [_vm._v("Assisting")])]) : _c("div", [_c("span", {
          staticClass: "badge badge-success"
        }, [_vm._v("Completed")])])];
      }
    }, {
      key: "cell(actions)",
      fn: function fn(row) {
        return [row.item.status == "0" ? _c("b-button", {
          attrs: {
            size: "sm",
            variant: "warning"
          },
          on: {
            click: function click($event) {
              return _vm.respondHandler(row.item, "respond");
            }
          }
        }, [_c("i", {
          staticClass: "fa-solid fa-hand-holding-hand"
        })]) : _vm._e(), _vm._v(" "), row.item.status == "1" ? _c("b-button", {
          attrs: {
            size: "sm",
            variant: "success"
          },
          on: {
            click: function click($event) {
              return _vm.respondHandler(row.item, "complete");
            }
          }
        }, [_c("i", {
          staticClass: "fa-solid fa-check"
        })]) : _vm._e(), _vm._v(" "), _c("b-button", {
          attrs: {
            size: "sm",
            variant: "primary"
          },
          on: {
            click: function click($event) {
              return _vm.showUpdateModal(row.item);
            }
          }
        }, [_c("svg", {
          staticClass: "bi bi-pencil-square",
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "currentColor",
            viewBox: "0 0 16 16"
          }
        }, [_c("path", {
          attrs: {
            d: "M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"
          }
        }), _vm._v(" "), _c("path", {
          attrs: {
            "fill-rule": "evenodd",
            d: "M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"
          }
        })])]), _vm._v(" "), _c("b-button", {
          attrs: {
            size: "sm",
            variant: "danger"
          },
          on: {
            click: function click($event) {
              return _vm.deleteAssistant(row.item.id);
            }
          }
        }, [_c("svg", {
          staticClass: "bi bi-trash3",
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "currentColor",
            viewBox: "0 0 16 16"
          }
        }, [_c("path", {
          attrs: {
            d: "M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"
          }
        })])])];
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/_root/pages/Assistance/AssistanceForm.vue?vue&type=template&id=5721a06c&scoped=true":
/*!**********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/_root/pages/Assistance/AssistanceForm.vue?vue&type=template&id=5721a06c&scoped=true ***!
  \**********************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_c("b-modal", {
    attrs: {
      size: "lg",
      id: _vm.modalId,
      title: _vm.action === "add" ? "Add Assistant" : "Update Assistant"
    },
    on: {
      hide: _vm.resetForm,
      shown: _vm.initMap
    },
    scopedSlots: _vm._u([{
      key: "modal-footer",
      fn: function fn() {
        return [_c("b-button", {
          attrs: {
            type: "button",
            variant: "secondary"
          },
          on: {
            click: function click($event) {
              return _vm.$bvModal.hide(_vm.modalId);
            }
          }
        }, [_vm._v("\n                Close\n            ")])];
      },
      proxy: true
    }])
  }, [_c("b-form", {
    on: {
      submit: _vm.handleSubmit
    }
  }, [_c("b-row", [_c("b-col", {
    attrs: {
      cols: "6"
    }
  }, [_c("b-form-group", {
    attrs: {
      label: "Assistant Type"
    }
  }, [_c("b-form-select", {
    "class": _vm.errors.assistant_type ? "is-invalid" : "",
    attrs: {
      options: _vm.assistantTypeOptions
    },
    model: {
      value: _vm.form.assistant_type,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "assistant_type", $$v);
      },
      expression: "form.assistant_type"
    }
  }), _vm._v(" "), _vm.errors.assistant_type ? _c("div", {
    staticClass: "invalid-feedback"
  }, [_vm._v("\n                            " + _vm._s(_vm.errors.assistant_type[0]) + "\n                        ")]) : _vm._e()], 1)], 1), _vm._v(" "), _c("b-col", {
    attrs: {
      cols: "6"
    }
  }, [_c("b-form-group", {
    attrs: {
      label: "Date Request"
    }
  }, [_c("b-form-input", {
    "class": _vm.errors.date_request ? "is-invalid" : "",
    attrs: {
      type: "date"
    },
    model: {
      value: _vm.form.date_request,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "date_request", $$v);
      },
      expression: "form.date_request"
    }
  }), _vm._v(" "), _vm.errors.date_request ? _c("div", {
    staticClass: "invalid-feedback"
  }, [_vm._v("\n                            " + _vm._s(_vm.errors.date_request[0]) + "\n                        ")]) : _vm._e()], 1)], 1)], 1), _vm._v(" "), _c("b-row", [_c("b-col", {
    attrs: {
      cols: "6"
    }
  }, [_c("b-form-group", {
    attrs: {
      label: "Status"
    }
  }, [_c("b-form-select", {
    "class": _vm.errors.status ? "is-invalid" : "",
    attrs: {
      options: [{
        value: 2,
        text: "Completed"
      }, {
        value: 1,
        text: "Assisting"
      }, {
        value: 0,
        text: "pending"
      }]
    },
    model: {
      value: _vm.form.status,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "status", $$v);
      },
      expression: "form.status"
    }
  }), _vm._v(" "), _vm.errors.status ? _c("div", {
    staticClass: "invalid-feedback"
  }, [_vm._v("\n                            " + _vm._s(_vm.errors.status[0]) + "\n                        ")]) : _vm._e()], 1)], 1)], 1), _vm._v(" "), _c("b-row", [_c("b-col", [_c("div", {
    staticStyle: {
      height: "400px"
    },
    attrs: {
      id: "map"
    }
  })])], 1), _vm._v(" "), _c("b-row", [_c("b-col", [_c("b-form-group", {
    attrs: {
      label: "Description"
    }
  }, [_c("b-form-textarea", {
    "class": _vm.errors.description ? "is-invalid" : "",
    attrs: {
      rows: "6",
      "max-rows": "6"
    },
    model: {
      value: _vm.form.description,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "description", $$v);
      },
      expression: "form.description"
    }
  }), _vm._v(" "), _vm.errors.description ? _c("div", {
    staticClass: "invalid-feedback"
  }, [_vm._v("\n                            " + _vm._s(_vm.errors.description[0]) + "\n                        ")]) : _vm._e()], 1)], 1)], 1), _vm._v(" "), _c("b-row", [_c("b-col", [_c("b-form-group", {
    attrs: {
      label: "File"
    }
  }, [_c("b-form-file", {
    "class": _vm.errors.file ? "is-invalid" : "",
    attrs: {
      state: Boolean(_vm.form.file),
      placeholder: "Choose a file...",
      "drop-placeholder": "Drop file here..."
    },
    on: {
      change: _vm.previewImage
    },
    model: {
      value: _vm.form.file,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "file", $$v);
      },
      expression: "form.file"
    }
  }), _vm._v(" "), _vm.errors.file ? _c("div", {
    staticClass: "invalid-feedback"
  }, [_vm._v("\n                            " + _vm._s(_vm.errors.file[0]) + "\n                        ")]) : _vm._e(), _vm._v(" "), _vm.imagePreview ? _c("div", [_c("img", {
    staticClass: "img-thumbnail mt-2",
    attrs: {
      src: _vm.imagePreview,
      alt: "Image Preview"
    }
  })]) : _c("div", [_c("img", {
    staticClass: "img-thumbnail mt-2",
    attrs: {
      src: "/storage/".concat(_vm.form.file_path),
      alt: "Current Image"
    }
  })])], 1)], 1)], 1), _vm._v(" "), _c("b-button", {
    attrs: {
      type: "submit",
      variant: "primary"
    }
  }, [_vm._v("\n                " + _vm._s(_vm.action === "add" ? "Add" : "Update") + "\n            ")])], 1)], 1)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/_root/pages/Assistance/AssistanceForm.vue?vue&type=style&index=0&id=5721a06c&scoped=true&lang=css":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/_root/pages/Assistance/AssistanceForm.vue?vue&type=style&index=0&id=5721a06c&scoped=true&lang=css ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.img-thumbnail[data-v-5721a06c] {\r\n    max-width: 100%;\r\n    height: auto;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/_root/pages/Assistance/AssistanceForm.vue?vue&type=style&index=0&id=5721a06c&scoped=true&lang=css":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/_root/pages/Assistance/AssistanceForm.vue?vue&type=style&index=0&id=5721a06c&scoped=true&lang=css ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./AssistanceForm.vue?vue&type=style&index=0&id=5721a06c&scoped=true&lang=css */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/_root/pages/Assistance/AssistanceForm.vue?vue&type=style&index=0&id=5721a06c&scoped=true&lang=css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./resources/js/_root/pages/Assistance/Assistance.vue":
/*!************************************************************!*\
  !*** ./resources/js/_root/pages/Assistance/Assistance.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Assistance_vue_vue_type_template_id_48afacf0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Assistance.vue?vue&type=template&id=48afacf0 */ "./resources/js/_root/pages/Assistance/Assistance.vue?vue&type=template&id=48afacf0");
/* harmony import */ var _Assistance_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Assistance.vue?vue&type=script&lang=js */ "./resources/js/_root/pages/Assistance/Assistance.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Assistance_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Assistance_vue_vue_type_template_id_48afacf0__WEBPACK_IMPORTED_MODULE_0__["render"],
  _Assistance_vue_vue_type_template_id_48afacf0__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/_root/pages/Assistance/Assistance.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/_root/pages/Assistance/Assistance.vue?vue&type=script&lang=js":
/*!************************************************************************************!*\
  !*** ./resources/js/_root/pages/Assistance/Assistance.vue?vue&type=script&lang=js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Assistance_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Assistance.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/_root/pages/Assistance/Assistance.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Assistance_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/_root/pages/Assistance/Assistance.vue?vue&type=template&id=48afacf0":
/*!******************************************************************************************!*\
  !*** ./resources/js/_root/pages/Assistance/Assistance.vue?vue&type=template&id=48afacf0 ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Assistance_vue_vue_type_template_id_48afacf0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Assistance.vue?vue&type=template&id=48afacf0 */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/_root/pages/Assistance/Assistance.vue?vue&type=template&id=48afacf0");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Assistance_vue_vue_type_template_id_48afacf0__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Assistance_vue_vue_type_template_id_48afacf0__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/_root/pages/Assistance/AssistanceForm.vue":
/*!****************************************************************!*\
  !*** ./resources/js/_root/pages/Assistance/AssistanceForm.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AssistanceForm_vue_vue_type_template_id_5721a06c_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AssistanceForm.vue?vue&type=template&id=5721a06c&scoped=true */ "./resources/js/_root/pages/Assistance/AssistanceForm.vue?vue&type=template&id=5721a06c&scoped=true");
/* harmony import */ var _AssistanceForm_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AssistanceForm.vue?vue&type=script&lang=js */ "./resources/js/_root/pages/Assistance/AssistanceForm.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _AssistanceForm_vue_vue_type_style_index_0_id_5721a06c_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AssistanceForm.vue?vue&type=style&index=0&id=5721a06c&scoped=true&lang=css */ "./resources/js/_root/pages/Assistance/AssistanceForm.vue?vue&type=style&index=0&id=5721a06c&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _AssistanceForm_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _AssistanceForm_vue_vue_type_template_id_5721a06c_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"],
  _AssistanceForm_vue_vue_type_template_id_5721a06c_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "5721a06c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/_root/pages/Assistance/AssistanceForm.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/_root/pages/Assistance/AssistanceForm.vue?vue&type=script&lang=js":
/*!****************************************************************************************!*\
  !*** ./resources/js/_root/pages/Assistance/AssistanceForm.vue?vue&type=script&lang=js ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AssistanceForm_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./AssistanceForm.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/_root/pages/Assistance/AssistanceForm.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AssistanceForm_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/_root/pages/Assistance/AssistanceForm.vue?vue&type=style&index=0&id=5721a06c&scoped=true&lang=css":
/*!************************************************************************************************************************!*\
  !*** ./resources/js/_root/pages/Assistance/AssistanceForm.vue?vue&type=style&index=0&id=5721a06c&scoped=true&lang=css ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AssistanceForm_vue_vue_type_style_index_0_id_5721a06c_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./AssistanceForm.vue?vue&type=style&index=0&id=5721a06c&scoped=true&lang=css */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/_root/pages/Assistance/AssistanceForm.vue?vue&type=style&index=0&id=5721a06c&scoped=true&lang=css");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AssistanceForm_vue_vue_type_style_index_0_id_5721a06c_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AssistanceForm_vue_vue_type_style_index_0_id_5721a06c_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AssistanceForm_vue_vue_type_style_index_0_id_5721a06c_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AssistanceForm_vue_vue_type_style_index_0_id_5721a06c_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/_root/pages/Assistance/AssistanceForm.vue?vue&type=template&id=5721a06c&scoped=true":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/_root/pages/Assistance/AssistanceForm.vue?vue&type=template&id=5721a06c&scoped=true ***!
  \**********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_AssistanceForm_vue_vue_type_template_id_5721a06c_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../node_modules/vue-loader/lib??vue-loader-options!./AssistanceForm.vue?vue&type=template&id=5721a06c&scoped=true */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/_root/pages/Assistance/AssistanceForm.vue?vue&type=template&id=5721a06c&scoped=true");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_AssistanceForm_vue_vue_type_template_id_5721a06c_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_AssistanceForm_vue_vue_type_template_id_5721a06c_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);