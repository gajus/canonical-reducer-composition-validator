import _ from './utils';

import validateActionName from './validateActionName';

export default (action) => {
    let unknownProperty;

    if (!_.isPlainObject(action)) {
        throw new Error('Action definition must be a plain object.');
    }

    if (_.isUndefined(action.name)) {
        throw new Error('Action definition object must define "name" property.');
    }

    try {
        validateActionName(action.name);
    } catch (e) {
        throw new Error('Action definition object "name" property value must be a valid action name.');
    }

    if (!_.isUndefined(action.data) && !_.isPlainObject(action.data)) {
        throw new Error('Action definition object "data" property value must be a plain object.');
    }

    if (!_.isUndefined(action.metadata) && !_.isPlainObject(action.metadata)) {
        throw new Error('Action definition object "metadata" property value must be a plain object.');
    }

    if (!_.isUndefined(action.error)) {
        if (!_.isObject(action.error)) {
            throw new Error('Action definition object "error" property value must be an object.');
        }

        if (!_.has(action.error, 'message')) {
            throw new Error('"error" object must have "message" property.');
        }

        if (!_.isString(action.error, 'message')) {
            throw new Error('"error" object "message" property value must be a string.');
        }
    }

    unknownProperty = _.first(_.difference(_.keys(action), ['name', 'data', 'metadata', 'error']));

    if (unknownProperty) {
        throw new Error('Action definition object must not define unknown properties. "' + unknownProperty + '" is an unknown property.');
    }
};
