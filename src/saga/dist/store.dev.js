"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.initialState = void 0;

var _redux = require("redux");

var _reduxLogger = _interopRequireDefault(require("redux-logger"));

var _core = _interopRequireDefault(require("@redux-saga/core"));

var _saga = require("./saga");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var sagaMiddleware = (0, _core["default"])();
var initialState = {
  titles: {
    first: "first",
    second: "second"
  },
  data: {}
};
exports.initialState = initialState;

var rootReducer = function rootReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "FETCH_TODOS":
      // console.log(state.data.title);
      return _objectSpread({}, state, {
        data: action.payload
      });

    default:
      return state;
  }
};

var store = (0, _redux.createStore)(rootReducer, (0, _redux.applyMiddleware)(_reduxLogger["default"], sagaMiddleware));
sagaMiddleware.run(_saga.todoWatcher);
var _default = store;
exports["default"] = _default;