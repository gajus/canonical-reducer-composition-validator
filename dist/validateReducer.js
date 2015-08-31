'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _utils = require('./utils');

var _utils2 = _interopRequireDefault(_utils);

var _validateActionName = require('./validateActionName');

var _validateActionName2 = _interopRequireDefault(_validateActionName);

var isDomainMap = undefined,
    isActionMap = undefined;

/**
 * @param {Object.<string, Object>} map
 * @return {Boolean} If every object property value is a plain object.
 */
isDomainMap = function (map) {
    return _utils2['default'].every(map, _utils2['default'].isPlainObject);
};

/**
 * @param {Object.<string, Function>} map
 * @return {Boolean} If every object property value is a function.
 */
isActionMap = function (map) {
    return _utils2['default'].every(map, _utils2['default'].isFunction);
};

exports['default'] = function (reducer) {
    var iterator = undefined,
        actionIndex = [];

    if (!isDomainMap(reducer) && _utils2['default'].values(reducer).length) {
        throw new Error('Reducer definition object must begin with a domain definition.');
    }

    /**
     * @param {Object} branch
     */
    iterator = function (branch) {
        _utils2['default'].forEach(branch, function (value, domainName) {
            if (isActionMap(value)) {
                _utils2['default'].forEach(value, function (action, name) {
                    try {
                        (0, _validateActionName2['default'])(name);
                    } catch (e) {
                        throw new Error('Reducer definition object action handler names must be valid action names.');
                    }

                    if (_utils2['default'].indexOf(actionIndex, name) !== -1) {
                        throw new Error('Reducer definition object action handler names must be unique.');
                    }

                    if (name !== 'CONSTRUCT') {
                        actionIndex.push(name);
                    }
                });
            } else if (isDomainMap(value)) {
                iterator(branch[domainName]);
            } else {
                throw new Error('Reducer definition object value object all values must correspond to a function (action map) or an object (domain).');
            }
        });
    };

    iterator(reducer);
};

module.exports = exports['default'];
//# sourceMappingURL=validateReducer.js.map