"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Form = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function encode(data) {
  return Object.keys(data).map(function (key) {
    return "".concat(encodeURIComponent(key), "=").concat(encodeURIComponent(data[key]));
  }).join('&');
}

var Form = function Form() {
  var _useState = (0, _react.useState)({
    path: typeof window !== 'undefined' && window.location.pathname,
    name: '',
    email: 'test@mail.com',
    comment: ''
  }),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  var handleChange = function handleChange(e) {
    var _objectSpread2;

    setState(_objectSpread(_objectSpread({}, state), {}, (_objectSpread2 = {}, (0, _defineProperty2["default"])(_objectSpread2, e.target.name, e.target.value), (0, _defineProperty2["default"])(_objectSpread2, "path", state.path), (0, _defineProperty2["default"])(_objectSpread2, "parentCommentNumber", state.parentCommentNumber), _objectSpread2)));
  };

  var formName = 'Comments';

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

  return /*#__PURE__*/_react["default"].createElement(Wrapper, null, /*#__PURE__*/_react["default"].createElement("form", {
    name: formName,
    method: "post",
    id: "form" // action='/thanks/'
    ,
    "data-netlify": "true",
    onSubmit: handleSubmit
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
  }, "Post your comment")))));
};

exports.Form = Form;

var Wrapper = _styledComponents["default"].div.withConfig({
  displayName: "Form__Wrapper",
  componentId: "sc-11z001g-0"
})(["*{box-sizing:border-box;}"]);

var Label = _styledComponents["default"].label.withConfig({
  displayName: "Form__Label",
  componentId: "sc-11z001g-1"
})(["margin-bottom:8px;display:block;box-sizing:border-box;color:#444;font-weight:bold;"]);

var Input = _styledComponents["default"].input.withConfig({
  displayName: "Form__Input",
  componentId: "sc-11z001g-2"
})(["padding:14px;border:1px solid #dfdfdf;border-radius:5px;font-size:16px;width:100%;outline:none;:hover{border:1px solid #4c8bf5;}:focus{border:1px solid #4c8bf5;outline:1px #4c8bf5 auto;}transition:0.15s;box-sizing:border-box;"]);

var HiddenLabel = _styledComponents["default"].label.withConfig({
  displayName: "Form__HiddenLabel",
  componentId: "sc-11z001g-3"
})(["height:0px;width:0px;background:transparent;color:transparent;border:none;outline:none;cursor:default;padding:0;margin:0;max-height:0px;min-height:0px;display:float;box-sizing:border-box;"]);

var HiddenInput = _styledComponents["default"].input.withConfig({
  displayName: "Form__HiddenInput",
  componentId: "sc-11z001g-4"
})(["height:0px;width:0px;background:transparent;color:transparent;border:none;outline:none;cursor:default;padding:0;margin:0;max-height:0px;min-height:0px;display:float;box-sizing:border-box;"]);

var TextArea = _styledComponents["default"].textarea.withConfig({
  displayName: "Form__TextArea",
  componentId: "sc-11z001g-5"
})(["padding:14px;border:1px solid #dfdfdf;border-radius:5px;font-size:16px;width:100%;outline:none;:hover{border:1px solid #4c8bf5;}:focus{border:1px solid #4c8bf5;outline:1px #4c8bf5 auto;}transition:0.15s;box-sizing:border-box;min-height:125px;resize:vertical;box-sizing:border-box;"]);

var Button = _styledComponents["default"].button.withConfig({
  displayName: "Form__Button",
  componentId: "sc-11z001g-6"
})(["padding:14px;margin-left:auto;display:block;border-radius:5px;background:#4c8bf5;border:1px solid #4c8bf5;cursor:pointer;text-transform:uppercase;color:white;font-size:14px;box-shadow:2px 2px 8px -4px #447ee0;transition:0.15s;:hover{background:#447ee0;border:1px solid #447ee0;box-shadow:3px 3px 20px -8px #447ee0;}box-sizing:border-box;"]);

var Row = _styledComponents["default"].div.withConfig({
  displayName: "Form__Row",
  componentId: "sc-11z001g-7"
})(["margin:0 -12px 0 -12px !important;@media (min-width:769px){display:flex !important;flex-wrap:wrap !important;}"]);

var ColumnSix = _styledComponents["default"].div.withConfig({
  displayName: "Form__ColumnSix",
  componentId: "sc-11z001g-8"
})(["padding:12px !important;margin:0 !important;display:block !important;padding:12px;@media (min-width:769px){flex:none;width:50%;}"]);

var ColumnTwelve = _styledComponents["default"].div.withConfig({
  displayName: "Form__ColumnTwelve",
  componentId: "sc-11z001g-9"
})(["padding:12px !important;margin:0 !important;display:block !important;padding:12px;@media (min-width:769px){flex:none;width:100%;}"]);