"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lazyLoad = require("./lazyLoad");

Object.keys(_lazyLoad).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _lazyLoad[key];
    }
  });
});

var _modal = require("./modal");

Object.keys(_modal).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _modal[key];
    }
  });
});

var _pagination = require("./pagination");

Object.keys(_pagination).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _pagination[key];
    }
  });
});

var _swiper = require("./swiper");

Object.keys(_swiper).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _swiper[key];
    }
  });
});

var _tabBar = require("./tabBar");

Object.keys(_tabBar).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _tabBar[key];
    }
  });
});

var _tabs = require("./tabs");

Object.keys(_tabs).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _tabs[key];
    }
  });
});