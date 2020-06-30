"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NetlifyComments = exports.CommentsContext = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var React = require('react');

var CommentsContext = React.createContext({});
/**
 * Manages the shopping cart, which is persisted in local storage.
 * The cart and related methods are shared through context.
 */

exports.CommentsContext = CommentsContext;

var NetlifyComments = function NetlifyComments(props) {
  _classCallCheck(this, NetlifyComments);

  _defineProperty(this, "apiKey", void 0);

  _defineProperty(this, "siteID", void 0);

  console.log(props);
  this.apiKey = props.apiKey;
  this.siteID = props.siteID;
}; // export const CommentsProvider = ({ options, children }) => {
//   console.log(options, children);
//   const { apiKey, siteID, color } = options;
//   window.Comments = { options };
//   const ctx = {
//     apiKey,
//     siteID,
//     color,
//   };
//   return (
//     <CommentsContext.Provider value={{ ...ctx }}>
//       {children}
//     </CommentsContext.Provider>
//   );
// };


exports.NetlifyComments = NetlifyComments;