"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formatDate = void 0;

/* eslint-disable import/prefer-default-export */
var formatDate = function formatDate(date) {
  var newDate = new Date(date);
  var formattedDate = "".concat(newDate.getMonth() > 8 ? newDate.getMonth() + 1 : "0".concat(newDate.getMonth() + 1), "/").concat(newDate.getDate() > 9 ? newDate.getDate() : "0".concat(newDate.getDate()), "/").concat(newDate.getFullYear());
  return formattedDate;
};

exports.formatDate = formatDate;