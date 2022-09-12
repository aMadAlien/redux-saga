"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.todoWorker = todoWorker;
exports.todoWatcher = todoWatcher;

var _effects = require("redux-saga/effects");

var _marked =
/*#__PURE__*/
regeneratorRuntime.mark(todoWorker),
    _marked2 =
/*#__PURE__*/
regeneratorRuntime.mark(todoWatcher);

var myAction = function myAction(data) {
  return {
    type: "FETCH_TODOS",
    payload: data
  };
};

var fetchTodos = function fetchTodos() {
  return fetch('https://jsonplaceholder.typicode.com/todos/1').then(function (response) {
    return response.json();
  });
};

function todoWorker() {
  var data;
  return regeneratorRuntime.wrap(function todoWorker$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return (0, _effects.call)(fetchTodos);

        case 2:
          data = _context.sent;
          _context.next = 5;
          return (0, _effects.put)(myAction(data));

        case 5:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}

function todoWatcher() {
  return regeneratorRuntime.wrap(function todoWatcher$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return (0, _effects.takeLatest)("INVOKE_DATA", todoWorker);

        case 2:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2);
}