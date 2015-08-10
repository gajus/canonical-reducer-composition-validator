'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

exports['default'] = function (name) {
    if (!/^[A-Z\_]+$/.test(name)) {
        throw new Error('Action definition object "name" property value must consist only of uppercase alphabetical characters and underscores.');
    }
};

module.exports = exports['default'];