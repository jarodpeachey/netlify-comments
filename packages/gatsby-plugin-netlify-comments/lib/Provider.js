"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CommentsProvider = exports.CommentsConstructor = exports.CommentsContext = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var CommentsContext = /*#__PURE__*/_react["default"].createContext({});

exports.CommentsContext = CommentsContext;

var CommentsConstructor = function CommentsConstructor(props) {
  (0, _classCallCheck2["default"])(this, CommentsConstructor);
  (0, _defineProperty2["default"])(this, "apiKey", '');
  (0, _defineProperty2["default"])(this, "siteId", '');
  this.apiKey = props.apiKey;
  this.siteId = props.siteId;
};

exports.CommentsConstructor = CommentsConstructor;

var CommentsProvider = function CommentsProvider(_ref) {
  var options = _ref.options,
      children = _ref.children;
  var apiKey = options.apiKey,
      siteId = options.siteId;

  if (typeof window !== 'undefined') {
    window.netlifyComments = new CommentsConstructor({
      apiKey: apiKey,
      siteId: siteId
    });
  }

  var ctx = {
    apiKey: apiKey,
    siteId: siteId
  };
  return /*#__PURE__*/_react["default"].createElement(CommentsContext.Provider, {
    value: _objectSpread({}, ctx)
  }, children);
};

exports.CommentsProvider = CommentsProvider;