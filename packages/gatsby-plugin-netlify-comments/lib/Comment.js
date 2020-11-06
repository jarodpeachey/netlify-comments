"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Comment = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Reply = require("./Reply");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var Comment = function Comment(_ref) {
  var comment = _ref.comment,
      children = _ref.children,
      _ref$replies = _ref.replies,
      replies = _ref$replies === void 0 ? [] : _ref$replies;

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      formOpen = _useState2[0],
      setFormOpen = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      showReplies = _useState4[0],
      setShowReplies = _useState4[1];

  var _useState5 = (0, _react.useState)(''),
      _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
      name = _useState6[0],
      setName = _useState6[1];

  var _useState7 = (0, _react.useState)(''),
      _useState8 = (0, _slicedToArray2["default"])(_useState7, 2),
      reply = _useState8[0],
      setReply = _useState8[1];

  var _useState9 = (0, _react.useState)({
    primary: '#fbbe76',
    secondary: '#aacd67'
  }),
      _useState10 = (0, _slicedToArray2["default"])(_useState9, 2),
      colors = _useState10[0],
      setColors = _useState10[1];

  var _useState11 = (0, _react.useState)({
    fontSize: 16,
    customCSS: 'margin: 0;'
  }),
      _useState12 = (0, _slicedToArray2["default"])(_useState11, 2),
      labelStyles = _useState12[0],
      setLabelStyles = _useState12[1];

  var _useState13 = (0, _react.useState)({
    fontSize: 16,
    customCSS: 'margin: 0;',
    paddingX: 16,
    paddingY: 16
  }),
      _useState14 = (0, _slicedToArray2["default"])(_useState13, 2),
      inputStyles = _useState14[0],
      setInputStyles = _useState14[1];

  var _useState15 = (0, _react.useState)({
    customCSS: 'margin: 0;'
  }),
      _useState16 = (0, _slicedToArray2["default"])(_useState15, 2),
      buttonStyles = _useState16[0],
      setButtonStyles = _useState16[1];

  console.log('COMMENT: ', comment);
  console.log(replies);
  var path = typeof window !== 'undefined' ? window.location.pathname : '/';

  var _useState17 = (0, _react.useState)({}),
      _useState18 = (0, _slicedToArray2["default"])(_useState17, 2),
      state = _useState18[0],
      setState = _useState18[1];

  var handleChange = function handleChange(e) {
    var _objectSpread2;

    setState(_objectSpread(_objectSpread({}, state), {}, (_objectSpread2 = {}, (0, _defineProperty2["default"])(_objectSpread2, e.target.name, e.target.value), (0, _defineProperty2["default"])(_objectSpread2, "path", state.path), (0, _defineProperty2["default"])(_objectSpread2, "parentCommentNumber", state.parentCommentNumber), _objectSpread2)));
  };

  var handleReplyOpen = function handleReplyOpen(e) {
    setFormOpen(!formOpen);
  };

  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
  };

  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(Wrapper, null, /*#__PURE__*/_react["default"].createElement(CommentTitle, null, comment.name), /*#__PURE__*/_react["default"].createElement(CommentBody, null, comment.comment), /*#__PURE__*/_react["default"].createElement(CommentFooter, null, /*#__PURE__*/_react["default"].createElement(FooterLink, {
    color: colors.primary,
    onClick: function onClick() {
      return setShowReplies(!showReplies);
    }
  }, showReplies && replies ? 'Collapse' : "(+".concat(replies.length, ") Expand")), /*#__PURE__*/_react["default"].createElement(FooterLink, {
    color: colors.primary,
    onClick: handleReplyOpen
  }, formOpen ? 'Cancel' : 'Reply')), formOpen && /*#__PURE__*/_react["default"].createElement("form", {
    method: "post",
    id: "form",
    onSubmit: handleSubmit,
    style: {
      marginTop: 12,
      padding: 16,
      background: '#f2f4f9'
    }
  }, /*#__PURE__*/_react["default"].createElement(Row, null, /*#__PURE__*/_react["default"].createElement(ColumnSix, {
    className: "col col-6"
  }, /*#__PURE__*/_react["default"].createElement(HiddenLabel, {
    htmlFor: "path"
  }, "Path"), /*#__PURE__*/_react["default"].createElement(HiddenInput, {
    name: "path",
    id: "path",
    type: "text",
    value: state.path
  }), /*#__PURE__*/_react["default"].createElement(HiddenLabel, {
    htmlFor: "parentCommentNumber"
  }, "Parent Comment Number"), /*#__PURE__*/_react["default"].createElement(HiddenInput, {
    name: "parentCommentNumber",
    id: "parentCommentNumber",
    type: "text",
    value: 0
  }), /*#__PURE__*/_react["default"].createElement(HiddenLabel, {
    htmlFor: "name"
  }, "Name"), /*#__PURE__*/_react["default"].createElement(Input, {
    onChange: handleChange,
    type: "text",
    placeholder: "Name",
    name: "name",
    id: "name",
    customStyles: inputStyles
  })), /*#__PURE__*/_react["default"].createElement(ColumnSix, {
    className: "col col-6"
  }, /*#__PURE__*/_react["default"].createElement(HiddenLabel, {
    htmlFor: "email"
  }, "Email"), /*#__PURE__*/_react["default"].createElement(Input, {
    placeholder: "Email",
    onChange: handleChange,
    type: "email",
    name: "email",
    id: "email",
    customStyles: inputStyles
  })), /*#__PURE__*/_react["default"].createElement(ColumnTwelve, {
    className: "col col-12"
  }, /*#__PURE__*/_react["default"].createElement(HiddenLabel, {
    htmlFor: "comment"
  }, "Comment"), /*#__PURE__*/_react["default"].createElement(TextArea, {
    placeholder: "Comment",
    onChange: handleChange,
    name: "comment",
    id: "comment",
    customStyles: inputStyles
  })), /*#__PURE__*/_react["default"].createElement(ColumnTwelve, {
    className: "col col-12"
  }, /*#__PURE__*/_react["default"].createElement(Button, {
    customStyles: buttonStyles,
    name: "button",
    type: "submit"
  }, "Reply"))))), replies && replies.length > 0 && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, showReplies && /*#__PURE__*/_react["default"].createElement(RepliesWrapper, {
    color: "".concat(colors.primary, "30")
  }, replies.map(function (replyComment) {
    return /*#__PURE__*/_react["default"].createElement(_Reply.Reply, {
      colors: colors,
      buttonStyles: buttonStyles,
      inputStyles: inputStyles,
      comment: replyComment
    });
  }))));
};

exports.Comment = Comment;

var Wrapper = _styledComponents["default"].div.withConfig({
  displayName: "Comment__Wrapper",
  componentId: "sc-1si8ait-0"
})(["margin:12px 0;padding:14px;border:1px solid #dfdfdf;border-radius:3px;font-size:16px;width:100%;"]);

var CommentTitle = _styledComponents["default"].h3.withConfig({
  displayName: "Comment__CommentTitle",
  componentId: "sc-1si8ait-1"
})(["color:#2c2f3b;margin:0;"]);

var CommentDate = _styledComponents["default"].small.withConfig({
  displayName: "Comment__CommentDate",
  componentId: "sc-1si8ait-2"
})(["display:block;margin-bottom:12px;color:#4c5267;"]);

var CommentBody = _styledComponents["default"].p.withConfig({
  displayName: "Comment__CommentBody",
  componentId: "sc-1si8ait-3"
})(["color:#4c5267;"]);

var CommentFooter = _styledComponents["default"].div.withConfig({
  displayName: "Comment__CommentFooter",
  componentId: "sc-1si8ait-4"
})(["font-size:14px;color:#4c5267cc;display:flex;justify-content:space-between;"]);

var FooterLink = _styledComponents["default"].span.withConfig({
  displayName: "Comment__FooterLink",
  componentId: "sc-1si8ait-5"
})([":hover{color:#4c8bf5;cursor:pointer;}"]);

var Label = _styledComponents["default"].label.withConfig({
  displayName: "Comment__Label",
  componentId: "sc-1si8ait-6"
})(["margin-bottom:8px;display:block;"]);

var Input = _styledComponents["default"].input.withConfig({
  displayName: "Comment__Input",
  componentId: "sc-1si8ait-7"
})(["padding:14px;border:1px solid #dfdfdf;border-radius:3px;font-size:16px;width:100%;outline:none;:hover{border:1px solid #4c8bf5;}:focus{border:1px solid #4c8bf5;outline:1px #4c8bf5 auto;}transition:0.15s;box-sizing:border-box;", ""], function (props) {
  return props.customStyles;
});

var TextArea = _styledComponents["default"].textarea.withConfig({
  displayName: "Comment__TextArea",
  componentId: "sc-1si8ait-8"
})(["padding:14px;border:1px solid #dfdfdf;border-radius:3px;font-size:16px;width:100%;outline:none;:hover{border:1px solid #4c8bf5;}:focus{border:1px solid #4c8bf5;outline:1px #4c8bf5 auto;}transition:0.15s;box-sizing:border-box;min-height:150px;resize:vertical;font-family:inherit !important;", ""], function (props) {
  return props.customStyles;
});

var Button = _styledComponents["default"].button.withConfig({
  displayName: "Comment__Button",
  componentId: "sc-1si8ait-9"
})(["padding:14px;margin-left:auto;display:block;border-radius:6px;background:#4c8bf5;border:1px solid #4c8bf5;cursor:pointer;text-transform:uppercase;color:white;font-size:14px;box-shadow:2px 2px 8px -4px #447ee0;transition:0.15s;:hover{background:#447ee0;border:1px solid #447ee0;box-shadow:3px 3px 20px -8px #447ee0;}", " box-sizing:border-box;"], function (props) {
  return props.customStyles;
});

var HiddenLabel = _styledComponents["default"].label.withConfig({
  displayName: "Comment__HiddenLabel",
  componentId: "sc-1si8ait-10"
})(["height:0px;width:0px;background:transparent;color:transparent;border:none;outline:none;cursor:default;padding:0;margin:0;max-height:0px;min-height:0px;display:float;box-sizing:border-box;"]);

var HiddenInput = _styledComponents["default"].input.withConfig({
  displayName: "Comment__HiddenInput",
  componentId: "sc-1si8ait-11"
})(["height:0px;width:0px;background:transparent;color:transparent;border:none;outline:none;cursor:default;padding:0;margin:0;max-height:0px;min-height:0px;display:float;box-sizing:border-box;"]);

var RepliesWrapper = _styledComponents["default"].div.withConfig({
  displayName: "Comment__RepliesWrapper",
  componentId: "sc-1si8ait-12"
})(["border-left:2px solid ", ";margin-left:32px;padding-left:32px;width:calc(100% - 64px);"], function (props) {
  return props.color;
});

var Row = _styledComponents["default"].div.withConfig({
  displayName: "Comment__Row",
  componentId: "sc-1si8ait-13"
})(["@media (min-width:769px){display:flex !important;flex-wrap:wrap !important;margin:0 -12px 0 -12px !important;width:calc(100% + 24px) !important;}"]);

var ColumnSix = _styledComponents["default"].div.withConfig({
  displayName: "Comment__ColumnSix",
  componentId: "sc-1si8ait-14"
})(["padding:12px !important;margin:0 !important;display:block !important;padding:12px;@media (min-width:769px){flex:none;width:50%;}"]);

var ColumnTwelve = _styledComponents["default"].div.withConfig({
  displayName: "Comment__ColumnTwelve",
  componentId: "sc-1si8ait-15"
})(["padding:12px !important;margin:0 !important;display:block !important;padding:12px;@media (min-width:769px){flex:none;width:100%;}"]);