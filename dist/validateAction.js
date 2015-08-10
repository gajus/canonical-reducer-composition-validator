'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _validateActionName = require('./validateActionName');

var _validateActionName2 = _interopRequireDefault(_validateActionName);

exports['default'] = function (action) {
    var unknownProperty = undefined;

    if (!_lodash2['default'].isPlainObject(action)) {
        throw new Error('Action definition must be a plain object.');
    }

    if (_lodash2['default'].isUndefined(action.name)) {
        throw new Error('Action definition object must define "name" property.');
    }

    try {
        (0, _validateActionName2['default'])(action.name);
    } catch (e) {
        throw new Error('Action definition object "name" property value must be a valid action name.');
    }

    if (!_lodash2['default'].isUndefined(action.data) && !_lodash2['default'].isPlainObject(action.data)) {
        throw new Error('Action definition object "data" property value must be a plain object.');
    }

    if (!_lodash2['default'].isUndefined(action.metadata) && !_lodash2['default'].isPlainObject(action.metadata)) {
        throw new Error('Action definition object "metadata" property value must be a plain object.');
    }

    unknownProperty = _lodash2['default'].first(_lodash2['default'].difference(_lodash2['default'].keys(action), ['name', 'data', 'metadata']));

    if (unknownProperty) {
        throw new Error('Action definition object must not define unknown properties.');
    }
};

module.exports = exports['default'];