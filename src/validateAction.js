import first from 'lodash.first';
import difference from 'lodash.difference';
import keys from 'lodash.keys';
import isPlainObject from 'lodash.isplainobject';
import isUndefined from 'lodash.isundefined';

import validateActionName from './validateActionName';

export default (action) => {
    let unknownProperty;

    if (!isPlainObject(action)) {
        throw new Error('Action definition must be a plain object.');
    }

    if (isUndefined(action.name)) {
        throw new Error('Action definition object must define "name" property.');
    }

    try {
        validateActionName(action.name);
    } catch (e) {
        throw new Error('Action definition object "name" property value must be a valid action name.');
    }

    if (!isUndefined(action.data) && !isPlainObject(action.data)) {
        throw new Error('Action definition object "data" property value must be a plain object.');
    }

    if (!isUndefined(action.metadata) && !isPlainObject(action.metadata)) {
        throw new Error('Action definition object "metadata" property value must be a plain object.');
    }

    unknownProperty = first(difference(keys(action), ['name', 'data', 'metadata']));

    if (unknownProperty) {
        throw new Error('Action definition object must not define unknown properties.');
    }
};
