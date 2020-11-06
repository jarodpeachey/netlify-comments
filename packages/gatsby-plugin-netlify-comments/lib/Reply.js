"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Reply = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _formatDate = require("./utils/formatDate");

var Reply = function Reply(_ref) {
  var comment = _ref.comment,
      buttonStyles = _ref.buttonStyles,
      inputStyles = _ref.inputStyles,
      colors = _ref.colors;

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      formOpen = _useState2[0],
      setFormOpen = _useState2[1];

  var _useState3 = (0, _react.useState)(''),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      name = _useState4[0],
      setName = _useState4[1];

  var _useState5 = (0, _react.useState)(''),
      _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
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

exports.Reply = Reply;

var Container = _styledComponents["default"].div.withConfig({
  displayName: "Reply__Container",
  componentId: "sc-150to4y-0"
})([""]);

var Wrapper = _styledComponents["default"].div.withConfig({
  displayName: "Reply__Wrapper",
  componentId: "sc-150to4y-1"
})(["padding:14px;border:1px solid #dfdfdf;border-radius:3px;font-size:16px;background:white;outline:none;width:100%;margin:12px 0;background:", ";"], function (props) {
  return props.gray ? 'white' : 'white';
});

var CommentTitle = _styledComponents["default"].h3.withConfig({
  displayName: "Reply__CommentTitle",
  componentId: "sc-150to4y-2"
})(["margin:0;"]);

var CommentDate = _styledComponents["default"].small.withConfig({
  displayName: "Reply__CommentDate",
  componentId: "sc-150to4y-3"
})(["display:block;margin-bottom:12px;"]);

var CommentBody = _styledComponents["default"].p.withConfig({
  displayName: "Reply__CommentBody",
  componentId: "sc-150to4y-4"
})([""]);

var CommentFooter = _styledComponents["default"].div.withConfig({
  displayName: "Reply__CommentFooter",
  componentId: "sc-150to4y-5"
})(["font-size:14px;"]);

var Label = _styledComponents["default"].label.withConfig({
  displayName: "Reply__Label",
  componentId: "sc-150to4y-6"
})(["margin-bottom:8px;display:block;font-size:", "px !important;", ""], function (props) {
  return props.fontSize;
}, function (props) {
  return props.customCSS && (0, _styledComponents.css)(["", ""], props.customCSS);
});

var Input = _styledComponents["default"].input.withConfig({
  displayName: "Reply__Input",
  componentId: "sc-150to4y-7"
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
  componentId: "sc-150to4y-8"
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
  componentId: "sc-150to4y-9"
})(["padding:12px;background:", ";color:white;border:none;outline:none;cursor:pointer;border-radius:5px;margin-left:auto;", ""], function (props) {
  return props.background;
}, function (props) {
  return props.customCSS && (0, _styledComponents.css)(["", ""], props.customCSS);
});