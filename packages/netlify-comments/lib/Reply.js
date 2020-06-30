"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _formatDate = require("./utils/formatDate");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var Reply = function Reply(_ref) {
  var comment = _ref.comment,
      buttonStyles = _ref.buttonStyles,
      inputStyles = _ref.inputStyles,
      colors = _ref.colors;

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      formOpen = _useState2[0],
      setFormOpen = _useState2[1];

  var _useState3 = (0, _react.useState)(''),
      _useState4 = _slicedToArray(_useState3, 2),
      name = _useState4[0],
      setName = _useState4[1];

  var _useState5 = (0, _react.useState)(''),
      _useState6 = _slicedToArray(_useState5, 2),
      reply = _useState6[0],
      setReply = _useState6[1];

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
    console.log('Triangle: ', window.triangle);
  };

  return /*#__PURE__*/_react["default"].createElement(Container, null, /*#__PURE__*/_react["default"].createElement(Wrapper, {
    gray: true
  }, /*#__PURE__*/_react["default"].createElement(CommentTitle, null, comment.node.data.name), /*#__PURE__*/_react["default"].createElement(CommentDate, null, (0, _formatDate.formatDate)(comment.node.data.date)), /*#__PURE__*/_react["default"].createElement(CommentBody, null, comment.node.data.comment), /*#__PURE__*/_react["default"].createElement(CommentFooter, null, /*#__PURE__*/_react["default"].createElement("span", {
    style: {
      cursor: 'pointer'
    },
    onClick: handleReplyOpen
  }, formOpen ? 'Reply' : 'Reply')), formOpen && /*#__PURE__*/_react["default"].createElement("form", {
    style: {
      margin: 0
    },
    method: "post",
    id: "form",
    onSubmit: handleSubmit
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
  }, "Reply"))))));
};

var Container = _styledComponents["default"].div.withConfig({
  displayName: "Reply__Container",
  componentId: "sc-1r145mj-0"
})([""]);

var Wrapper = _styledComponents["default"].div.withConfig({
  displayName: "Reply__Wrapper",
  componentId: "sc-1r145mj-1"
})(["padding:14px;border:1px solid #dfdfdf;border-radius:3px;font-size:16px;background:white;outline:none;width:100%;margin:12px 0;background:", ";"], function (props) {
  return props.gray ? 'white' : 'white';
});

var CommentTitle = _styledComponents["default"].h3.withConfig({
  displayName: "Reply__CommentTitle",
  componentId: "sc-1r145mj-2"
})(["margin:0;"]);

var CommentDate = _styledComponents["default"].small.withConfig({
  displayName: "Reply__CommentDate",
  componentId: "sc-1r145mj-3"
})(["display:block;margin-bottom:12px;"]);

var CommentBody = _styledComponents["default"].p.withConfig({
  displayName: "Reply__CommentBody",
  componentId: "sc-1r145mj-4"
})([""]);

var CommentFooter = _styledComponents["default"].div.withConfig({
  displayName: "Reply__CommentFooter",
  componentId: "sc-1r145mj-5"
})(["font-size:14px;"]);

var Label = _styledComponents["default"].label.withConfig({
  displayName: "Reply__Label",
  componentId: "sc-1r145mj-6"
})(["margin-bottom:8px;display:block;font-size:", "px !important;", ""], function (props) {
  return props.fontSize;
}, function (props) {
  return props.customCSS && (0, _styledComponents.css)(["", ""], props.customCSS);
});

var Input = _styledComponents["default"].input.withConfig({
  displayName: "Reply__Input",
  componentId: "sc-1r145mj-7"
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
  displayName: "Reply__TextArea",
  componentId: "sc-1r145mj-8"
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
  displayName: "Reply__Button",
  componentId: "sc-1r145mj-9"
})(["padding:12px;background:", ";color:white;border:none;outline:none;cursor:pointer;border-radius:5px;margin-left:auto;", ""], function (props) {
  return props.background;
}, function (props) {
  return props.customCSS && (0, _styledComponents.css)(["", ""], props.customCSS);
});

var _default = Reply;
exports["default"] = _default;