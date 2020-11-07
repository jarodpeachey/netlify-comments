"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function encode(data) {
  return Object.keys(data).map(function (key) {
    return "".concat(encodeURIComponent(key), "=").concat(encodeURIComponent(data[key]));
  }).join('&');
}

var Reply = function Reply(_ref) {
  var comment = _ref.comment;

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      formOpen = _useState2[0],
      setFormOpen = _useState2[1];

  var _useState3 = (0, _react.useState)({
    path: typeof window !== 'undefined' && window.location.pathname,
    name: '',
    email: 'test@mail.com',
    comment: '',
    parentCommentNumber: comment.parentCommentNumber
  }),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      state = _useState4[0],
      setState = _useState4[1];

  var handleChange = function handleChange(e) {
    var _objectSpread2;

    setState(_objectSpread(_objectSpread({}, state), {}, (_objectSpread2 = {}, (0, _defineProperty2["default"])(_objectSpread2, e.target.name, e.target.value), (0, _defineProperty2["default"])(_objectSpread2, "path", state.path), (0, _defineProperty2["default"])(_objectSpread2, "parentCommentNumber", state.parentCommentNumber), _objectSpread2)));
  };

  var formName = 'Comments';

  var handleReplyOpen = function handleReplyOpen(e) {
    setFormOpen(!formOpen);
  };

  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    var form = document.getElementById('form');
    fetch('/ ', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: encode(_objectSpread({
        'form-name': form.getAttribute('name')
      }, state))
    }).then(function (res) {
      setState(_objectSpread(_objectSpread({}, state), {}, {
        name: '',
        email: '',
        comment: '',
        path: state.path,
        parentCommentNumber: state.parentCommentNumber
      }));
    })["catch"](function (error) {
      return alert(error);
    });
  };

  return /*#__PURE__*/_react["default"].createElement(Container, null, /*#__PURE__*/_react["default"].createElement(Wrapper, {
    gray: true
  }, /*#__PURE__*/_react["default"].createElement(CommentTitle, null, comment.name), /*#__PURE__*/_react["default"].createElement(CommentBody, null, comment.comment), /*#__PURE__*/_react["default"].createElement(CommentFooter, null, /*#__PURE__*/_react["default"].createElement(FooterLink, {
    onClick: handleReplyOpen
  }, formOpen ? 'Cancel' : 'Reply')), formOpen && /*#__PURE__*/_react["default"].createElement("form", {
    name: formName,
    method: "post",
    id: "form",
    "data-netlify": "true",
    onSubmit: handleSubmit,
    style: {
      background: '#f7f7f7',
      borderRadius: 6,
      padding: 12,
      marginTop: 12
    }
  }, /*#__PURE__*/_react["default"].createElement("input", {
    type: "hidden",
    name: "form-name",
    value: formName
  }), /*#__PURE__*/_react["default"].createElement(Row, null, /*#__PURE__*/_react["default"].createElement(ColumnSix, {
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
  }), /*#__PURE__*/_react["default"].createElement(Label, {
    htmlFor: "name"
  }, "Name"), /*#__PURE__*/_react["default"].createElement(Input, {
    onChange: handleChange,
    type: "text",
    name: "name",
    id: "name",
    value: state.name
  })), /*#__PURE__*/_react["default"].createElement(ColumnSix, {
    className: "col col-6"
  }, /*#__PURE__*/_react["default"].createElement(Label, {
    htmlFor: "email"
  }, "Email"), /*#__PURE__*/_react["default"].createElement(Input, {
    onChange: handleChange,
    type: "email",
    name: "email",
    id: "email",
    value: state.email
  })), /*#__PURE__*/_react["default"].createElement(ColumnTwelve, {
    className: "col col-12"
  }, /*#__PURE__*/_react["default"].createElement(Label, {
    htmlFor: "comment"
  }, "Comment"), /*#__PURE__*/_react["default"].createElement(TextArea, {
    onChange: handleChange,
    name: "comment",
    id: "comment",
    value: state.comment
  })), /*#__PURE__*/_react["default"].createElement(ColumnTwelve, {
    className: "col col-12"
  }, /*#__PURE__*/_react["default"].createElement(Button, {
    name: "button",
    type: "submit"
  }, "Reply"))))));
};

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

var CommentBody = _styledComponents["default"].p.withConfig({
  displayName: "Reply__CommentBody",
  componentId: "sc-150to4y-3"
})(["font-size:1rem;"]);

var CommentFooter = _styledComponents["default"].div.withConfig({
  displayName: "Reply__CommentFooter",
  componentId: "sc-150to4y-4"
})(["font-size:14px;color:#4c5267cc;display:flex;justify-content:space-between;"]);

var FooterLink = _styledComponents["default"].span.withConfig({
  displayName: "Reply__FooterLink",
  componentId: "sc-150to4y-5"
})([":hover{color:#4c8bf5;cursor:pointer;}"]);

var Label = _styledComponents["default"].label.withConfig({
  displayName: "Reply__Label",
  componentId: "sc-150to4y-6"
})(["margin-bottom:8px;display:block;font-size:16px !important;"]);

var Input = _styledComponents["default"].input.withConfig({
  displayName: "Reply__Input",
  componentId: "sc-150to4y-7"
})(["font-family:sans-serif;font-size:15px;color:#444;padding:6px 8px;margin:0;width:100%;border:1px solid #e8e8e8;border-radius:5px;:focus{outline:1px #fbbe76 auto;}font-size:16px !important;"]);

var TextArea = _styledComponents["default"].textarea.withConfig({
  displayName: "Reply__TextArea",
  componentId: "sc-150to4y-8"
})(["font-family:sans-serif;font-size:15px;color:#444;padding:6px 8px;width:100%;font-size:16px !important;margin:0;border:1px solid #e8e8e8;border-radius:5px;min-height:150px;resize:vertical;:focus{outline:1px #fbbe76 auto;}"]);

var HiddenLabel = _styledComponents["default"].label.withConfig({
  displayName: "Reply__HiddenLabel",
  componentId: "sc-150to4y-9"
})(["height:0px;width:0px;background:transparent;color:transparent;border:none;outline:none;cursor:default;padding:0;margin:0;max-height:0px;min-height:0px;display:float;box-sizing:border-box;"]);

var HiddenInput = _styledComponents["default"].input.withConfig({
  displayName: "Reply__HiddenInput",
  componentId: "sc-150to4y-10"
})(["height:0px;width:0px;background:transparent;color:transparent;border:none;outline:none;cursor:default;padding:0;margin:0;max-height:0px;min-height:0px;display:float;box-sizing:border-box;"]);

var Button = _styledComponents["default"].button.withConfig({
  displayName: "Reply__Button",
  componentId: "sc-150to4y-11"
})(["padding:12px;background:#fbbe76;color:white;border:none;outline:none;cursor:pointer;border-radius:5px;margin-left:auto;"]);

var Row = _styledComponents["default"].div.withConfig({
  displayName: "Reply__Row",
  componentId: "sc-150to4y-12"
})(["margin:0 -12px 0 -12px !important;@media (min-width:769px){display:flex !important;flex-wrap:wrap !important;}"]);

var ColumnSix = _styledComponents["default"].div.withConfig({
  displayName: "Reply__ColumnSix",
  componentId: "sc-150to4y-13"
})(["padding:12px !important;margin:0 !important;display:block !important;padding:12px;@media (min-width:769px){flex:none;width:50%;}"]);

var ColumnTwelve = _styledComponents["default"].div.withConfig({
  displayName: "Reply__ColumnTwelve",
  componentId: "sc-150to4y-14"
})(["padding:12px !important;margin:0 !important;display:block !important;padding:12px;@media (min-width:769px){flex:none;width:100%;}"]);

var _default = Reply;
exports["default"] = _default;