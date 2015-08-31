import every from 'lodash.every';
import isPlainObject from 'lodash.isplainobject';
import forEach from 'lodash.foreach';
import indexOf from 'lodash.indexof';
import values from 'lodash.values';

import validateActionName from './validateActionName';

let isDomainMap,
    isActionMap;

/**
 * @param {Object.<string, Object>} map
 * @return {Boolean} If every object property value is a plain object.
 */
isDomainMap = (map) => {
    return _.every(map, _.isPlainObject);
};

/**
 * @param {Object.<string, Function>} map
 * @return {Boolean} If every object property value is a function.
 */
isActionMap = (map) => {
    return _.every(map, _.isFunction);
};

export default (reducer) => {
    let iterator,
        actionIndex = [];

    /**
     * @param {Object} branch
     */
    iterator = (branch) => {
        _.forEach(branch, (value, domainName) => {
            if (isActionMap(value)) {
                _.forEach(value, (action, name) => {
                    try {
                        validateActionName(name);
                    } catch (e) {
                        throw new Error('Reducer definition object action handler names must be valid action names.');
                    }

                    if (_.indexOf(actionIndex, name) !== -1) {
                        throw new Error('Reducer definition object action handler names must be unique.');
                    }

                    actionIndex.push(name);
                });
            } else if (isDomainMap(value)) {
                iterator(branch[domainName]);
            } else {
                throw new Error('Reducer definition object value object all values must correspond to a function (action map) or an object (domain).');
            }
        });
    };

    // _.values(reducers).length is used to ignore empty reducer definition.
    if (isActionMap(reducer) && _.values(reducer).length) {
        throw new Error('Reducer definition object must begin with a domain definition.');
    }

    iterator(reducer);
};
