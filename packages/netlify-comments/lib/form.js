"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Form = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

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

function encode(data) {
  return Object.keys(data).map(function (key) {
    return "".concat(encodeURIComponent(key), "=").concat(encodeURIComponent(data[key]));
  }).join('&');
}

var Form = function Form(_ref) {
  var buttonStyles = _ref.buttonStyles,
      inputStyles = _ref.inputStyles;
  console.log(typeof window !== 'undefined' && window.triangle);
  var color = 'tomato';

  var _useState = (0, _react.useState)({}),
      _useState2 = _slicedToArray(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  var handleChange = function handleChange(e) {
    var _objectSpread2;

    setState(_objectSpread(_objectSpread({}, state), {}, (_objectSpread2 = {}, _defineProperty(_objectSpread2, e.target.name, e.target.value), _defineProperty(_objectSpread2, "path", state.path), _defineProperty(_objectSpread2, "parentCommentNumber", state.parentCommentNumber), _objectSpread2)));
  };

  var formName = 'Comments'; // const [emailError, setEmailError] = useState(false);
  // const onEmailInputChange = (e) => {
  //   setEmail(e.target.value);
  //   const regex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
  //   if (regex.test(e.target.value)) {
  //     setEmailError(false);
  //   } else {
  //     setEmailError(true);
  //   }
  // };

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
      return console.log('Done:  ', res);
    })["catch"](function (error) {
      return alert(error);
    });
  };

  return /*#__PURE__*/_react["default"].createElement(Wrapper, null, /*#__PURE__*/_react["default"].createElement("br", null), /*#__PURE__*/_react["default"].createElement("br", null), /*#__PURE__*/_react["default"].createElement("h2", null, "Add A Comment"), /*#__PURE__*/_react["default"].createElement("form", {
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
    color: color,
    onChange: handleChange,
    type: "text",
    name: "name",
    id: "name",
    customStyles: inputStyles
  })), /*#__PURE__*/_react["default"].createElement(ColumnSix, {
    className: "col col-6"
  }, /*#__PURE__*/_react["default"].createElement(Label, {
    htmlFor: "email"
  }, "Email"), /*#__PURE__*/_react["default"].createElement(Input, {
    color: color,
    onChange: handleChange,
    type: "email",
    name: "email",
    id: "email",
    customStyles: inputStyles
  })), /*#__PURE__*/_react["default"].createElement(ColumnTwelve, {
    className: "col col-12"
  }, /*#__PURE__*/_react["default"].createElement(Label, {
    htmlFor: "comment"
  }, "Comment"), /*#__PURE__*/_react["default"].createElement(TextArea, {
    color: color,
    onChange: handleChange,
    name: "comment",
    id: "comment",
    customStyles: inputStyles
  })), /*#__PURE__*/_react["default"].createElement(ColumnTwelve, {
    className: "col col-12"
  }, /*#__PURE__*/_react["default"].createElement(Button, {
    color: color,
    customStyles: buttonStyles,
    name: "button",
    type: "submit"
  }, "Post your comment")))));
};

exports.Form = Form;

var Wrapper = _styledComponents["default"].div.withConfig({
  displayName: "form__Wrapper",
  componentId: "vyfr1o-0"
})(["*{box-sizing:border-box;}"]);

var Label = _styledComponents["default"].label.withConfig({
  displayName: "form__Label",
  componentId: "vyfr1o-1"
})(["margin-bottom:8px;display:block;font-weight:500;box-sizing:border-box;"]);

var HiddenLabel = _styledComponents["default"].label.withConfig({
  displayName: "form__HiddenLabel",
  componentId: "vyfr1o-2"
})(["height:0px;width:0px;background:transparent;color:transparent;border:none;outline:none;cursor:default;padding:0;margin:0;max-height:0px;min-height:0px;display:float;box-sizing:border-box;"]);

var Input = _styledComponents["default"].input.withConfig({
  displayName: "form__Input",
  componentId: "vyfr1o-3"
})(["padding:14px;border:1px solid #e8e8e8;border-radius:3px;font-size:16px;width:100%;outline:none;:hover{border:1px solid #4c8bf5;}:focus{border:1px solid #4c8bf5;outline:1px #4c8bf5 auto;}transition:0.15s;box-sizing:border-box;", ""], function (props) {
  return props.customStyles;
});

var HiddenInput = _styledComponents["default"].input.withConfig({
  displayName: "form__HiddenInput",
  componentId: "vyfr1o-4"
})(["height:0px;width:0px;background:transparent;color:transparent;border:none;outline:none;cursor:default;padding:0;margin:0;max-height:0px;min-height:0px;display:float;box-sizing:border-box;"]);

var TextArea = _styledComponents["default"].textarea.withConfig({
  displayName: "form__TextArea",
  componentId: "vyfr1o-5"
})(["padding:14px;border:1px solid #e8e8e8;border-radius:3px;font-size:16px;width:100%;outline:none;:hover{border:1px solid #4c8bf5;}:focus{border:1px solid #4c8bf5;outline:1px #4c8bf5 auto;}transition:0.15s;box-sizing:border-box;min-height:125px;resize:vertical;", " box-sizing:border-box;"], function (props) {
  return props.customStyles;
});

var Button = _styledComponents["default"].button.withConfig({
  displayName: "form__Button",
  componentId: "vyfr1o-6"
})(["padding:14px;margin-left:auto;display:block;border-radius:6px;background:#4c8bf5;border:1px solid #4c8bf5;cursor:pointer;text-transform:uppercase;color:white;font-size:14px;box-shadow:2px 2px 8px -4px #447ee0;transition:0.15s;:hover{background:#447ee0;border:1px solid #447ee0;box-shadow:3px 3px 20px -8px #447ee0;}", " box-sizing:border-box;"], function (props) {
  return props.customStyles;
});

var Row = _styledComponents["default"].div.withConfig({
  displayName: "form__Row",
  componentId: "vyfr1o-7"
})(["@media (min-width:769px){display:flex !important;flex-wrap:wrap !important;margin:0 -12px 0 -12px !important;width:calc(100% + 24px) !important;}"]);

var ColumnSix = _styledComponents["default"].div.withConfig({
  displayName: "form__ColumnSix",
  componentId: "vyfr1o-8"
})(["padding:12px !important;margin:0 !important;display:block !important;padding:12px;@media (min-width:769px){flex:none;width:50%;}"]);

var ColumnTwelve = _styledComponents["default"].div.withConfig({
  displayName: "form__ColumnTwelve",
  componentId: "vyfr1o-9"
})(["padding:12px !important;margin:0 !important;display:block !important;padding:12px;@media (min-width:769px){flex:none;width:100%;}"]);