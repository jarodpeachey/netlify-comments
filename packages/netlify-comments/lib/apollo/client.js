"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.client = void 0;

var _apolloBoost = _interopRequireDefault(require("apollo-boost"));

var _isomorphicFetch = _interopRequireDefault(require("isomorphic-fetch"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var client = new _apolloBoost["default"]({
  uri: '/___graphql',
  fetch: _isomorphicFetch["default"]
});
exports.client = client;