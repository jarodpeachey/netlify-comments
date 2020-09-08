"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.client = void 0;

var _apolloBoost = _interopRequireDefault(require("apollo-boost"));

var _isomorphicFetch = _interopRequireDefault(require("isomorphic-fetch"));

var client = new _apolloBoost["default"]({
  uri: '/___graphql',
  fetch: _isomorphicFetch["default"]
});
exports.client = client;