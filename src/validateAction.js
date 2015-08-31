import first from 'lodash.first';
import difference from 'lodash.difference';
import keys from 'lodash.keys';

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

    unknownProperty = _.first(_.difference(_.keys(action), ['name', 'data', 'metadata']));

    if (unknownProperty) {
        throw new Error('Action definition object must not define unknown properties.');
    }
};
