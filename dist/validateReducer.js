'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _validateActionName = require('./validateActionName');

var _validateActionName2 = _interopRequireDefault(_validateActionName);

var isDomainMap = undefined,
    isActionMap = undefined;

/**
 * @param {Object.<string, Object>} map
 * @return {Boolean} If every object property value is a plain object.
 */
isDomainMap = function (map) {
    return _lodash2['default'].every(map, _lodash2['default'].isPlainObject);
};

/**
 * @param {Object.<string, Function>} map
 * @return {Boolean} If every object property value is a function.
 */
isActionMap = function (map) {
    return _lodash2['default'].every(map, _lodash2['default'].isFunction);
};

exports['default'] = function (reducer) {
    var iterator = undefined,
        actionIndex = [];

    /**
     * @param {Object} branch
     */
    iterator = function (branch) {
        _lodash2['default'].forEach(branch, function (value, domainName) {
            if (isActionMap(value)) {
                _lodash2['default'].forEach(value, function (action, name) {
                    try {
                        (0, _validateActionName2['default'])(name);
                    } catch (e) {
                        throw new Error('Reducer definition object action handler names must be valid action names.');
                    }

                    if (_lodash2['default'].indexOf(actionIndex, name) !== -1) {
                        throw new Error('Reducer definition object action handler names must be unique.');
                    }

                    actionIndex.push(name);
                });
            } else if (isDomainMap(value)) {
                iterator(branch[domainName]);
            } else {
                throw new Error('Reducer definition object value object all values must correspond to a function (action map) or an object (domain map).');
            }
        });
    };

    // _.values(reducers).length is used to ignore empty reducer definition.
    if (isActionMap(reducer) && _lodash2['default'].values(reducer).length) {
        throw new Error('Reducer definition object must begin with a domain map definition.');
    }

    iterator(reducer);
};

module.exports = exports['default'];