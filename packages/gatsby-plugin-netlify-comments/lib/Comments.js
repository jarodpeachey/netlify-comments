"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Comments = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Comment = _interopRequireDefault(require("./Comment"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function encode(data) {
  return Object.keys(data).map(function (key) {
    return "".concat(encodeURIComponent(key), "=").concat(encodeURIComponent(data[key]));
  }).join('&');
}

var Comments = function Comments(_ref) {
  var data = _ref.data;

  var _React$useState = _react["default"].useState({}),
      _React$useState2 = (0, _slicedToArray2["default"])(_React$useState, 2),
      state = _React$useState2[0],
      setState = _React$useState2[1];

  var _React$useState3 = _react["default"].useState([]),
      _React$useState4 = (0, _slicedToArray2["default"])(_React$useState3, 2),
      stateComments = _React$useState4[0],
      setStateComments = _React$useState4[1];

  (0, _react.useEffect)(function () {
    if (data) {
      var comments = Object.values(data)[0].edges;

      if (stateComments.length === 0 && comments.length > 0) {
        setStateComments(comments);
      }
    }
  }, [data]);

  var _ref2 = typeof window !== 'undefined' ? window.netlifyComments : {
    apiKey: 'test',
    siteId: 'test'
  },
      apiKey = _ref2.apiKey,
      siteId = _ref2.siteId;

  var fetchNewComments = /*#__PURE__*/function () {
    var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
      var newComments;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return fetch("https://api.netlify.com/api/v1/sites/".concat(siteId, "/submissions/?access_token=").concat(apiKey));

            case 2:
              newComments = _context.sent;
              return _context.abrupt("return", newComments);

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function fetchNewComments() {
      return _ref3.apply(this, arguments);
    };
  }();

  (0, _react.useEffect)(function () {
    fetchNewComments().then(function (res) {
      res.json().then(function (json) {
        var insideNewComments = [];
        Object.values(json).forEach(function (submission) {
          if (submission.data.path === window.location.pathname && submission.data.name !== 'placeholder' && submission.data.comment !== 'placeholder') {
            insideNewComments.push(submission);
          }
        });

        if (stateComments !== insideNewComments) {
          setStateComments(insideNewComments);
        }
      });
    });

    if (state.path !== window.location.pathname) {
      setState({
        path: window.location.pathname
      });
    }
  }, []);

  var handleChange = function handleChange(e) {
    var _objectSpread2;

    setState(_objectSpread(_objectSpread({}, state), {}, (_objectSpread2 = {}, (0, _defineProperty2["default"])(_objectSpread2, e.target.name, e.target.value), (0, _defineProperty2["default"])(_objectSpread2, "path", state.path), (0, _defineProperty2["default"])(_objectSpread2, "parentCommentNumber", state.parentCommentNumber), _objectSpread2)));
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

  console.log('All comments: ', stateComments);
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, stateComments.filter(function (comment) {
    return comment.node ? comment.node.data.parentCommentNumber === 'undefined' : comment.data.parentCommentNumber === 'undefined';
  }).sort(function (a, b) {
    return a.node ? a.node.number - b.node.number : a.number - b.number;
  }).length > 0 && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(CommentsSection, null, stateComments.filter(function (comment) {
    return comment.node ? comment.node.data.parentCommentNumber === 'undefined' : comment.data.parentCommentNumber === 'undefined';
  }).sort(function (a, b) {
    return a.node ? a.node.number - b.node.number : a.number - b.number;
  }).map(function (comment) {
    console.log('Comment: ', comment);
    return /*#__PURE__*/_react["default"].createElement(_Comment["default"], {
      comment: comment.node ? comment.node.data : comment.data,
      number: comment.number ? comment.number : comment.node.number,
      replies: stateComments.filter(function (replyComment) {
        return replyComment.node ? replyComment.node.data.parentCommentNumber == (comment.number ? comment.number : comment.node.number) : replyComment.data.parentCommentNumber == (comment.number ? comment.number : comment.node.number);
      }).sort(function (a, b) {
        return a.node ? a.node.number - b.node.number : a.number - b.number;
      })
    });
  }))));
};

exports.Comments = Comments;

var GrayForm = _styledComponents["default"].form.withConfig({
  displayName: "Comments__GrayForm",
  componentId: "sc-159x4qx-0"
})(["background:#f7f7f7;padding:16px;margin-top:12px;"]);

var Label = _styledComponents["default"].label.withConfig({
  displayName: "Comments__Label",
  componentId: "sc-159x4qx-1"
})(["margin-bottom:8px;display:block;font-weight:500;"]);

var Error = _styledComponents["default"].small.withConfig({
  displayName: "Comments__Error",
  componentId: "sc-159x4qx-2"
})(["display:block;margin-top:8px;color:tomato;"]);

var Input = _styledComponents["default"].input.withConfig({
  displayName: "Comments__Input",
  componentId: "sc-159x4qx-3"
})(["padding:14px;border:2px solid white;box-shadow:1px 1px 3px 0px #e7e7e7;font-size:16px;outline:none;width:100%;:focus{border:2px solid #264966;}"]);

var GrayTextArea = _styledComponents["default"].textarea.withConfig({
  displayName: "Comments__GrayTextArea",
  componentId: "sc-159x4qx-4"
})(["padding:14px;background:#f7f7f7;border:2px solid #f7f7f7;font-size:16px;outline:none;width:100%;resize:vertical;min-height:100px;vertical-align:top;:focus{border:2px solid #264966;}"]);

var GrayInput = _styledComponents["default"].input.withConfig({
  displayName: "Comments__GrayInput",
  componentId: "sc-159x4qx-5"
})(["padding:14px;background:#f7f7f7;border:2px solid #f7f7f7;font-size:16px;margin-bottom:4px;outline:none;width:100%;:focus{border:2px solid #264966;}"]);

var HiddenLabel = _styledComponents["default"].label.withConfig({
  displayName: "Comments__HiddenLabel",
  componentId: "sc-159x4qx-6"
})(["height:0px !important;width:0px !important;background:transparent !important;color:transparent !important;border:none !important;outline:none !important;cursor:default !important;padding:0 !important;margin:0 !important;max-height:0px !important;min-height:0px !important;display:float;"]);

var HiddenInput = _styledComponents["default"].input.withConfig({
  displayName: "Comments__HiddenInput",
  componentId: "sc-159x4qx-7"
})(["height:0px !important;width:0px !important;background:transparent !important;color:transparent !important;border:none !important;outline:none !important;cursor:default !important;padding:0 !important;margin:0 !important;max-height:0px !important;min-height:0px !important;display:float;"]);

var TextArea = _styledComponents["default"].textarea.withConfig({
  displayName: "Comments__TextArea",
  componentId: "sc-159x4qx-8"
})(["padding:14px;width:100%;min-height:125px;border:2px solid white;box-shadow:1px 1px 3px 0px #e7e7e7;font-size:16px;outline:none;resize:vertical;:focus{border:2px solid #264966;}"]);

var Button = _styledComponents["default"].button.withConfig({
  displayName: "Comments__Button",
  componentId: "sc-159x4qx-9"
})(["margin:0 !important;margin-left:auto !important;display:block;"]);

var CommentsSection = _styledComponents["default"].div.withConfig({
  displayName: "Comments__CommentsSection",
  componentId: "sc-159x4qx-10"
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
  componentId: "sc-159x4qx-11"
})(["padding:14px;font-size:16px;background:#f7f7f7;outline:none;width:100%;margin:12px 0;:last-child{margin-bottom:0;}"]);

var CommentName = _styledComponents["default"].h3.withConfig({
  displayName: "Comments__CommentName",
  componentId: "sc-159x4qx-12"
})(["margin:0;"]);

var CommentDate = _styledComponents["default"].small.withConfig({
  displayName: "Comments__CommentDate",
  componentId: "sc-159x4qx-13"
})(["display:block;margin-bottom:12px;"]);

var CommentFooter = _styledComponents["default"].div.withConfig({
  displayName: "Comments__CommentFooter",
  componentId: "sc-159x4qx-14"
})(["font-size:14px;color:#666;"]);