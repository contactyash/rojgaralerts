webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_components_VisiblePosts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/components/VisiblePosts */ "./src/components/VisiblePosts.js");
/* harmony import */ var _src_components_Filters__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/components/Filters */ "./src/components/Filters.js");
/* harmony import */ var _src_components_ShareHeader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/components/ShareHeader */ "./src/components/ShareHeader.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _src_firebase_firebase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/firebase/firebase */ "./src/firebase/firebase.js");
/* harmony import */ var _src_components_DetailView__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../src/components/DetailView */ "./src/components/DetailView.js");
/* harmony import */ var _src_components_SetDocumentTitle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../src/components/SetDocumentTitle */ "./src/components/SetDocumentTitle.js");

var _jsxFileName = "C:\\Users\\RJ10\\Documents\\projects\\a\\rojgaaralerts-with-nextjs\\pages\\index.js";


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








 //we are fetching all latest posts from firebase
//and sending all data  for index page
//when somebody clicks on post for  detail view we are again making request to same index page but
//this time we only sending queried data
//we are using nextjs' shallow routing feature
//bcoz of which getinitialprops function is not called everytime

var Index =
/*#__PURE__*/
function (_Component) {
  _inherits(Index, _Component);

  function Index() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Index)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      filterString: "",
      stateFilterString: ""
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleFilter", function (filterText, isActive) {
      if (isActive) {
        _this.setState(function () {
          return {
            filterString: filterText
          };
        });
      } else {
        _this.setState(function () {
          return {
            filterString: "",
            stateFilterString: ""
          };
        });
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleStateFilter", function (filterObj, isActive) {
      if (isActive) {
        _this.setState(function () {
          return filterObj;
        });
      } else {
        _this.setState(function () {
          return {
            filterString: "",
            stateFilterString: ""
          };
        });
      }
    });

    return _this;
  }

  _createClass(Index, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_src_components_ShareHeader__WEBPACK_IMPORTED_MODULE_4__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_src_components_Filters__WEBPACK_IMPORTED_MODULE_3__["default"], {
        handleFilter: this.handleFilter,
        handleStateFilter: this.handleStateFilter,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_src_components_VisiblePosts__WEBPACK_IMPORTED_MODULE_2__["default"], {
        visiblePosts: this.props.latestPosts,
        filterString: this.state.filterString,
        stateFilterString: this.state.stateFilterString,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]); //below component returns queried data wrapped in detailview component or index compo


var Page = function Page(props) {
  var _props$router = props.router,
      pathname = _props$router.pathname,
      query = _props$router.query;
  var latestPosts = props.latestPosts;
  var detailsOf = [];
  detailsOf = latestPosts.filter(function (post) {
    return query.id === post.key ? post : false;
  });
  return pathname === "/" && !Object.keys(query).length ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Index, {
    latestPosts: latestPosts,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }) : detailsOf[0] ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_src_components_SetDocumentTitle__WEBPACK_IMPORTED_MODULE_8__["default"], {
    title: "".concat(detailsOf[0].dept, ",").concat(detailsOf[0].postName),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_src_components_DetailView__WEBPACK_IMPORTED_MODULE_7__["default"], _extends({}, detailsOf[0], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }))) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, "I have no Idea what is going on");
};

Page.getInitialProps =
/*#__PURE__*/
_asyncToGenerator(
/*#__PURE__*/
_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return Object(_src_firebase_firebase__WEBPACK_IMPORTED_MODULE_6__["getData"])("latestPosts");

        case 2:
          return _context.abrupt("return", _context.sent);

        case 3:
        case "end":
          return _context.stop();
      }
    }
  }, _callee, this);
}));
/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_5__["withRouter"])(Page));
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=index.js.a6ca7ad5e1b42814b637.hot-update.js.map