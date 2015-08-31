'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _utils = require('./utils');

var _utils2 = _interopRequireDefault(_utils);

var _validateActionName = require('./validateActionName');

var _validateActionName2 = _interopRequireDefault(_validateActionName);

exports['default'] = function (action) {
    var unknownProperty = undefined;

    if (!_utils2['default'].isPlainObject(action)) {
        throw new Error('Action definition must be a plain object.');
    }

    if (_utils2['default'].isUndefined(action.name)) {
        throw new Error('Action definition object must define "name" property.');
    }

    try {
        (0, _validateActionName2['default'])(action.name);
    } catch (e) {
        throw new Error('Action definition object "name" property value must be a valid action name.');
    }

    if (!_utils2['default'].isUndefined(action.data) && !_utils2['default'].isPlainObject(action.data)) {
        throw new Error('Action definition object "data" property value must be a plain object.');
    }

    if (!_utils2['default'].isUndefined(action.metadata) && !_utils2['default'].isPlainObject(action.metadata)) {
        throw new Error('Action definition object "metadata" property value must be a plain object.');
    }

    unknownProperty = _utils2['default'].first(_utils2['default'].difference(_utils2['default'].keys(action), ['name', 'data', 'metadata']));

    if (unknownProperty) {
        throw new Error('Action definition object must not define unknown properties. "' + unknownProperty + '" is an unknown property.');
    }
};

module.exports = exports['default'];
//# sourceMappingURL=validateAction.js.map