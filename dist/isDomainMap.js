'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _utils = require('./utils');

var _utils2 = _interopRequireDefault(_utils);

/**
 * @param {Object.<string, Object>} map
 * @return {Boolean} If every object property value is a plain object.
 */

exports['default'] = function (map) {
  return _utils2['default'].every(map, _utils2['default'].isPlainObject);
};

module.exports = exports['default'];
//# sourceMappingURL=isDomainMap.js.map