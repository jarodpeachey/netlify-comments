"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _formatDate = require("./utils/formatDate");

var _gatsby = require("gatsby");

var _reactHooks = require("@apollo/react-hooks");

var _apolloBoost = require("apollo-boost");

var _Reply = _interopRequireDefault(require("./Reply"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  {\n    allStaticboxStyles {\n      edges {\n        node {\n          data {\n            button {\n              customCSS\n            }\n            color {\n              primary\n              secondary\n              text\n            }\n            input {\n              customCSS\n              fontSize\n              paddingX\n              paddingY\n            }\n            label {\n              customCSS\n              fontSize\n            }\n          }\n        }\n      }\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function encode(data) {
  return Object.keys(data).map(function (key) {
    return "".concat(encodeURIComponent(key), "=").concat(encodeURIComponent(data[key]));
  }).join('&');
}

var QUERY = (0, _apolloBoost.gql)(_templateObject());

var Comment = function Comment(_ref) {
  var comment = _ref.comment,
      children = _ref.children,
      replies = _ref.replies;

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      formOpen = _useState2[0],
      setFormOpen = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      showReplies = _useState4[0],
      setShowReplies = _useState4[1];

  var _useState5 = (0, _react.useState)(''),
      _useState6 = _slicedToArray(_useState5, 2),
      name = _useState6[0],
      setName = _useState6[1];

  var _useState7 = (0, _react.useState)(''),
      _useState8 = _slicedToArray(_useState7, 2),
      reply = _useState8[0],
      setReply = _useState8[1];

  var _useQuery = (0, _reactHooks.useQuery)(QUERY),
      loading = _useQuery.loading,
      error = _useQuery.error,
      data = _useQuery.data;

  console.log(loading, error, data);

  var _useState9 = (0, _react.useState)({
    primary: '#fbbe76',
    secondary: '#aacd67'
  }),
      _useState10 = _slicedToArray(_useState9, 2),
      colors = _useState10[0],
      setColors = _useState10[1];

  var _useState11 = (0, _react.useState)({
    fontSize: 16,
    customCSS: 'margin: 0;'
  }),
      _useState12 = _slicedToArray(_useState11, 2),
      labelStyles = _useState12[0],
      setLabelStyles = _useState12[1];

  var _useState13 = (0, _react.useState)({
    fontSize: 16,
    customCSS: 'margin: 0;',
    paddingX: 16,
    paddingY: 16
  }),
      _useState14 = _slicedToArray(_useState13, 2),
      inputStyles = _useState14[0],
      setInputStyles = _useState14[1];

  var _useState15 = (0, _react.useState)({
    customCSS: 'margin: 0;'
  }),
      _useState16 = _slicedToArray(_useState15, 2),
      buttonStyles = _useState16[0],
      setButtonStyles = _useState16[1];

  (0, _react.useEffect)(function () {
    if (data) {
      console.log('Styles: ', data.allStaticboxStyles);
      setColors(_objectSpread({}, data.allStaticboxStyles.edges[0].node.data.color));
      setLabelStyles(_objectSpread({}, data.allStaticboxStyles.edges[0].node.data.label));
      setInputStyles(_objectSpread({}, data.allStaticboxStyles.edges[0].node.data.input));
      setButtonStyles(_objectSpread({}, data.allStaticboxStyles.edges[0].node.data.button));
    }
  }, [data]);
  console.log(replies);
  var path = typeof window !== 'undefined' ? window.location.pathname : '/';

  var handleNameChange = function handleNameChange(e) {
    setName(e.target.value);
  };

  var handleReplyChange = function handleReplyChange(e) {
    setReply(e.target.value);
  };

  var handleReplyOpen = function handleReplyOpen(e) {
    setFormOpen(!formOpen);
  };

  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
  };

  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(Wrapper, null, /*#__PURE__*/_react["default"].createElement(CommentTitle, null, comment.node.data.name), /*#__PURE__*/_react["default"].createElement(CommentDate, null, (0, _formatDate.formatDate)(comment.node.data.date)), /*#__PURE__*/_react["default"].createElement(CommentBody, null, comment.node.data.comment), /*#__PURE__*/_react["default"].createElement(CommentFooter, null, /*#__PURE__*/_react["default"].createElement(FooterLink, {
    color: colors.primary,
    onClick: function onClick() {
      return setShowReplies(!showReplies);
    }
  }, showReplies ? 'Collapse' : "(+".concat(replies.length, ") Expand")), /*#__PURE__*/_react["default"].createElement(FooterLink, {
    color: colors.primary,
    onClick: handleReplyOpen
  }, formOpen ? 'Cancel' : 'Reply')), formOpen && /*#__PURE__*/_react["default"].createElement("form", {
    method: "post",
    id: "form",
    onSubmit: handleSubmit,
    style: {
      marginTop: 12,
      padding: 16,
      background: '#dfdfdf'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "custom-row"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "custom-col custom-col-12"
  }, /*#__PURE__*/_react["default"].createElement(Input, {
    customCSS: inputStyles.customCSS,
    fontSize: inputStyles.fontSize,
    color: colors.primary,
    padding: {
      vertical: inputStyles.paddingY,
      horizontal: inputStyles.paddingX
    },
    onChange: handleNameChange,
    type: "text",
    name: "name",
    id: "name",
    placeholder: "Name",
    value: name
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "custom-col custom-col-12"
  }, /*#__PURE__*/_react["default"].createElement(TextArea, {
    customCSS: inputStyles.customCSS,
    fontSize: inputStyles.fontSize,
    color: colors.primary,
    padding: {
      vertical: inputStyles.paddingY,
      horizontal: inputStyles.paddingX
    },
    onChange: handleReplyChange,
    name: "comment",
    id: "comment",
    placeholder: "Comment",
    value: reply
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "custom-col custom-col-12"
  }, /*#__PURE__*/_react["default"].createElement(Button, {
    customCSS: buttonStyles.customCSS,
    background: colors.primary,
    name: "button"
  }, "Reply"))))), replies && replies.length > 0 && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, showReplies && /*#__PURE__*/_react["default"].createElement(RepliesWrapper, {
    color: "".concat(colors.primary, "30")
  }, replies.map(function (replyComment) {
    return /*#__PURE__*/_react["default"].createElement(_Reply["default"], {
      colors: colors,
      buttonStyles: buttonStyles,
      inputStyles: inputStyles,
      comment: replyComment
    });
  }))));
};

var _default = Comment;
exports["default"] = _default;

var Wrapper = _styledComponents["default"].div.withConfig({
  displayName: "Comment__Wrapper",
  componentId: "sc-1i7nagk-0"
})(["padding:14px;border:1px solid #dfdfdf;border-radius:3px;font-size:16px;background:white;outline:none;width:100%;margin:12px 0;background:", ";"], function (props) {
  return props.gray ? '#dfdfdf' : 'white';
});

var CommentTitle = _styledComponents["default"].h3.withConfig({
  displayName: "Comment__CommentTitle",
  componentId: "sc-1i7nagk-1"
})(["margin:0;"]);

var CommentDate = _styledComponents["default"].small.withConfig({
  displayName: "Comment__CommentDate",
  componentId: "sc-1i7nagk-2"
})(["display:block;margin-bottom:12px;"]);

var CommentBody = _styledComponents["default"].p.withConfig({
  displayName: "Comment__CommentBody",
  componentId: "sc-1i7nagk-3"
})([""]);

var CommentFooter = _styledComponents["default"].div.withConfig({
  displayName: "Comment__CommentFooter",
  componentId: "sc-1i7nagk-4"
})(["font-size:16px;display:flex;justify-content:space-between;"]);

var FooterLink = _styledComponents["default"].span.withConfig({
  displayName: "Comment__FooterLink",
  componentId: "sc-1i7nagk-5"
})([":hover{color:", ";cursor:pointer;}"], function (props) {
  return props.color;
});

var Label = _styledComponents["default"].label.withConfig({
  displayName: "Comment__Label",
  componentId: "sc-1i7nagk-6"
})(["margin-bottom:8px;display:block;font-size:", "px !important;", ""], function (props) {
  return props.fontSize;
}, function (props) {
  return props.customCSS && (0, _styledComponents.css)(["", ""], props.customCSS);
});

var Input = _styledComponents["default"].input.withConfig({
  displayName: "Comment__Input",
  componentId: "sc-1i7nagk-7"
})(["padding-top:", "px;padding-right:", "px;padding-left:", "px;padding-bottom:", "px;margin:0;width:100%;border:1px solid #e8e8e8;border-radius:5px;:focus{outline:1px ", " auto;}font-size:", "px !important;", ""], function (props) {
  return props.padding.vertical;
}, function (props) {
  return props.padding.horizontal;
}, function (props) {
  return props.padding.horizontal;
}, function (props) {
  return props.padding.vertical;
}, function (props) {
  return props.color;
}, function (props) {
  return props.fontSize;
}, function (props) {
  return props.customCSS && (0, _styledComponents.css)(["", ""], props.customCSS);
});

var TextArea = _styledComponents["default"].textarea.withConfig({
  displayName: "Comment__TextArea",
  componentId: "sc-1i7nagk-8"
})(["padding-top:", "px;padding-right:", "px;padding-left:", "px;padding-bottom:", "px;width:100%;font-size:", "px !important;margin:0;border:1px solid #e8e8e8;border-radius:5px;min-height:150px;resize:vertical;:focus{outline:1px ", " auto;}", ""], function (props) {
  return props.padding.vertical;
}, function (props) {
  return props.padding.horizontal;
}, function (props) {
  return props.padding.horizontal;
}, function (props) {
  return props.padding.vertical;
}, function (props) {
  return props.fontSize;
}, function (props) {
  return props.color;
}, function (props) {
  return props.customCSS && (0, _styledComponents.css)(["", ""], props.customCSS);
});

var Button = _styledComponents["default"].button.withConfig({
  displayName: "Comment__Button",
  componentId: "sc-1i7nagk-9"
})(["padding:12px;background:", ";color:white;border:none;outline:none;cursor:pointer;border-radius:5px;margin-left:auto;", ""], function (props) {
  return props.background;
}, function (props) {
  return props.customCSS && (0, _styledComponents.css)(["", ""], props.customCSS);
});

var RepliesWrapper = _styledComponents["default"].div.withConfig({
  displayName: "Comment__RepliesWrapper",
  componentId: "sc-1i7nagk-10"
})(["border-left:2px solid ", ";margin-left:32px;padding-left:32px;width:calc(100% - 64px);"], function (props) {
  return props.color;
});