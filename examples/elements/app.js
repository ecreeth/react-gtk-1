"use strict";

var _react = _interopRequireWildcard(require("react"));

var _binding = require("@react-gtk/binding");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

class Example extends _react.Component {
  constructor(props) {
    super(props);
    this.root = (0, _react.createRef)();
  }

  render() {
    return _react.default.createElement(_binding.Box, {
      ref: this.root
    }, _react.default.createElement(_binding.Button, {
      label: "One"
    }), _react.default.createElement(_binding.Button, {
      label: "Two",
      clicked: () => console.log('asdfasdf')
    }));
  }

}

(0, _binding.render)(_react.default.createElement(Example, null), 'Button');
