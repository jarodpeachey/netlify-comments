"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Comments = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _gatsby = require("gatsby");

var _reactHooks = require("@apollo/react-hooks");

var _apolloBoost = require("apollo-boost");

var _Comment = _interopRequireDefault(require("./Comment"));

var _formatDate = require("./utils/formatDate");

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
  var data = _taggedTemplateLiteral(["\n  {\n    allNetlifySubmissions {\n      edges {\n        node {\n          data {\n            comment\n            email\n            name\n            parentCommentNumber\n            path\n          }\n        }\n      }\n    }\n  }\n"]);

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

var Comments = function Comments() {
  var _useQuery = (0, _reactHooks.useQuery)(QUERY),
      loading = _useQuery.loading,
      error = _useQuery.error,
      data = _useQuery.data;

  console.log(loading, error, data);

  var _React$useState = _react["default"].useState({}),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      state = _React$useState2[0],
      setState = _React$useState2[1];

  var _React$useState3 = _react["default"].useState(loading ? [] : data && data.length ? Object.values(data)[0].edges : []),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      stateComments = _React$useState4[0],
      setStateComments = _React$useState4[1]; // useEffect(() => {
  //   const newComments = fetchNewComments().then((res) => {
  //     res.json().then((json) => {
  //       console.log('Sucess getting new comments: ', json);
  //       const insideNewComments = [];
  //       Object.values(json).forEach((submission) => {
  //         if (
  //           submission.data.path === window.location.pathname &&
  //           submission.data.name !== 'placeholder' &&
  //           submission.data.comment !== 'placeholder'
  //         ) {
  //           insideNewComments.push(submission);
  //         }
  //       });
  //       if (stateComments !== insideNewComments) {
  //         setStateComments(insideNewComments);
  //       }
  //     });
  //   });
  //   if (state.path !== window.location.pathname) {
  //     setState({ path: window.location.pathname });
  //   }
  // }, []);


  (0, _react.useEffect)(function () {
    if (data) {
      var comments = Object.values(data)[0].edges;

      if (stateComments.length === 0 && comments.length > 0) {
        console.log(Object.values(data)[0]);
        setStateComments(comments);
      } // console.log(data.allStaticboxComments);

    }
  }, [data]);
  console.log('First level comments: ', stateComments.filter(function (comment) {
    return comment.node ? comment.node.data.parentCommentNumber == 'undefined' : comment.data.parentCommentNumber == 'undefined';
  }).sort(function (a, b) {
    return a.node ? a.node.number - b.node.number : a.number - b.number;
  }));
  console.log('Replies: ', stateComments.filter(function (comment) {
    return comment.node ? comment.node.data.parentCommentNumber !== 'undefined' : comment.data.parentCommentNumber !== 'undefined';
  }).sort(function (a, b) {
    return a.node ? a.node.number - b.node.number : a.number - b.number;
  }));

  var handleChange = function handleChange(e) {
    var _objectSpread2;

    setState(_objectSpread(_objectSpread({}, state), {}, (_objectSpread2 = {}, _defineProperty(_objectSpread2, e.target.name, e.target.value), _defineProperty(_objectSpread2, "path", state.path), _defineProperty(_objectSpread2, "parentCommentNumber", state.parentCommentNumber), _objectSpread2)));
  }; // const [emailError, setEmailError] = useState(false);
  // const onEmailInputChange = (e) => {
  //   setEmail(e.target.value);
  //   const regex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
  //   if (regex.test(e.target.value)) {
  //     setEmailError(false);
  //   } else {
  //     setEmailError(true);
  //   }
  // };


  var handleReplyOpen = function handleReplyOpen(e) {
    var number = e.target.getAttribute('number');
    setState(_objectSpread(_objectSpread({}, state), {}, {
      parentCommentNumber: number
    }));
    var newElement = document.createElement('div');
    newElement.innerHTML = "        <form\n          class=".concat(GrayForm.__linaria.className, "\n          name='Comments Awaiting Approval'\n          method='post'\n          id='form'\n          // action='/thanks/'\n          data-netlify='true'\n          onSubmit={handleSubmit}\n        >\n          <input\n            type='hidden'\n            name='form-name'\n            value='Comments Awaiting Approval'\n          />\n          <div class='row mobile-lg'>\n            <div class='col col-6'>\n              <label class=").concat(HiddenLabel.__linaria.className, " for='path'>Path</label>\n              <input\n                class=").concat(HiddenInput.__linaria.className, "\n                name='path'\n                id='path'\n                type='text'\n                value=").concat(state.path, "\n              />\n              <label class=").concat(HiddenLabel.__linaria.className, " for='parentCommentNumber'>Parent Comment Number</label>\n              <input\n                class=").concat(HiddenInput.__linaria.className, "\n                name='parentCommentNumber'\n                id='parentCommentNumber'\n                type='text'\n                value=").concat(number, "\n              />\n              <label class=").concat(HiddenLabel.__linaria.className, "  for='name'>Name</label>\n              <input class=").concat(Input.__linaria.className, "\n                onChange={handleChange}\n                placeholder=\"Name\"\n                type='text'\n                name='name'\n                id='name'\n              />\n            </div>\n            <div class='col col-6'>\n              <label class=").concat(HiddenLabel.__linaria.className, "  for='email'>Email</label>\n              <input class=").concat(Input.__linaria.className, "\n                onChange={handleChange}\n                type='email'\n                name='email'\n                id='email'\n                placeholder=\"Email\"\n              />\n            </div>\n            <div class='col col-12'>\n              <label class=").concat(HiddenLabel.__linaria.className, "  for='comment'>Comment</label>\n              <textarea\n                class=").concat(TextArea.__linaria.className, "\n                onChange={handleChange}\n                name='comment'\n                id='comment'\n                placeholder=\"Comment here...\"\n              ></textarea>\n            </div>\n            <div class='col col-12'>\n              <button class='primary ").concat(Button.__linaria.className, "' type='submit'>\n                Reply\n              </button>\n            </div>\n          </div>\n        </form>");
    e.target.parentElement.appendChild(newElement);
  };

  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    var form = document.getElementById('form');
    fetch('/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: encode(_objectSpread({
        'form-name': form.getAttribute('name')
      }, state))
    }).then(function (res) {
      return console.log('Done: ', res);
    })["catch"](function (error) {
      return alert(error);
    });
  };

  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, stateComments.filter(function (comment) {
    return comment.node ? comment.node.data.parentCommentNumber === 'undefined' : comment.data.parentCommentNumber === 'undefined';
  }).sort(function (a, b) {
    return a.node ? a.node.number - b.node.number : a.number - b.number;
  }).length > 0 && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("h2", {
    className: "title center-text"
  }, "Comments"), /*#__PURE__*/_react["default"].createElement(CommentsSection, null, stateComments.filter(function (comment) {
    return comment.node ? comment.node.data.parentCommentNumber === 'undefined' : comment.data.parentCommentNumber === 'undefined';
  }).sort(function (a, b) {
    return a.node ? a.node.number - b.node.number : a.number - b.number;
  }).map(function (comment) {
    return /*#__PURE__*/_react["default"].createElement(_Comment["default"], {
      comment: comment.node.data // replies={stateComments
      //   .filter(
      //     (replyComment) =>
      //       replyComment.node.data.parentComment ===
      //       comment.node.data.id
      //   )
      //   .sort((a, b) =>
      //     a.node ? a.node.id - b.node.id : a.id - b.id
      //   )}

    });
  }))));
};

exports.Comments = Comments;

var GrayForm = _styledComponents["default"].form.withConfig({
  displayName: "Comments__GrayForm",
  componentId: "sc-2u4f5b-0"
})(["background:#f7f7f7;padding:16px;margin-top:12px;"]);

var Label = _styledComponents["default"].label.withConfig({
  displayName: "Comments__Label",
  componentId: "sc-2u4f5b-1"
})(["margin-bottom:8px;display:block;font-weight:500;"]);

var Error = _styledComponents["default"].small.withConfig({
  displayName: "Comments__Error",
  componentId: "sc-2u4f5b-2"
})(["display:block;margin-top:8px;color:tomato;"]);

var Input = _styledComponents["default"].input.withConfig({
  displayName: "Comments__Input",
  componentId: "sc-2u4f5b-3"
})(["padding:14px;border:2px solid white;box-shadow:1px 1px 3px 0px #e7e7e7;font-size:16px;outline:none;width:100%;:focus{border:2px solid #264966;}"]);

var GrayTextArea = _styledComponents["default"].textarea.withConfig({
  displayName: "Comments__GrayTextArea",
  componentId: "sc-2u4f5b-4"
})(["padding:14px;background:#f7f7f7;border:2px solid #f7f7f7;font-size:16px;outline:none;width:100%;resize:vertical;min-height:100px;vertical-align:top;:focus{border:2px solid #264966;}"]);

var GrayInput = _styledComponents["default"].input.withConfig({
  displayName: "Comments__GrayInput",
  componentId: "sc-2u4f5b-5"
})(["padding:14px;background:#f7f7f7;border:2px solid #f7f7f7;font-size:16px;margin-bottom:4px;outline:none;width:100%;:focus{border:2px solid #264966;}"]);

var HiddenLabel = _styledComponents["default"].label.withConfig({
  displayName: "Comments__HiddenLabel",
  componentId: "sc-2u4f5b-6"
})(["height:0px !important;width:0px !important;background:transparent !important;color:transparent !important;border:none !important;outline:none !important;cursor:default !important;padding:0 !important;margin:0 !important;max-height:0px !important;min-height:0px !important;display:float;"]);

var HiddenInput = _styledComponents["default"].input.withConfig({
  displayName: "Comments__HiddenInput",
  componentId: "sc-2u4f5b-7"
})(["height:0px !important;width:0px !important;background:transparent !important;color:transparent !important;border:none !important;outline:none !important;cursor:default !important;padding:0 !important;margin:0 !important;max-height:0px !important;min-height:0px !important;display:float;"]);

var TextArea = _styledComponents["default"].textarea.withConfig({
  displayName: "Comments__TextArea",
  componentId: "sc-2u4f5b-8"
})(["padding:14px;width:100%;min-height:125px;border:2px solid white;box-shadow:1px 1px 3px 0px #e7e7e7;font-size:16px;outline:none;resize:vertical;:focus{border:2px solid #264966;}"]);

var Button = _styledComponents["default"].button.withConfig({
  displayName: "Comments__Button",
  componentId: "sc-2u4f5b-9"
})(["margin:0 !important;margin-left:auto !important;display:block;"]);

var CommentsSection = _styledComponents["default"].div.withConfig({
  displayName: "Comments__CommentsSection",
  componentId: "sc-2u4f5b-10"
})([""]); // const Comment = styled.div`
//   padding: 14px;
//   box-shadow: 1px 1px 3px 0px #e7e7e7;
//   font-size: 16px;
//   background: white;
//   outline: none;
//   width: 100%;
//   margin: 12px 0;
// `;


var GrayComment = _styledComponents["default"].div.withConfig({
  displayName: "Comments__GrayComment",
  componentId: "sc-2u4f5b-11"
})(["padding:14px;font-size:16px;background:#f7f7f7;outline:none;width:100%;margin:12px 0;:last-child{margin-bottom:0;}"]);

var CommentName = _styledComponents["default"].h3.withConfig({
  displayName: "Comments__CommentName",
  componentId: "sc-2u4f5b-12"
})(["margin:0;"]);

var CommentDate = _styledComponents["default"].small.withConfig({
  displayName: "Comments__CommentDate",
  componentId: "sc-2u4f5b-13"
})(["display:block;margin-bottom:12px;"]);

var CommentFooter = _styledComponents["default"].div.withConfig({
  displayName: "Comments__CommentFooter",
  componentId: "sc-2u4f5b-14"
})(["font-size:14px;color:#666;"]);