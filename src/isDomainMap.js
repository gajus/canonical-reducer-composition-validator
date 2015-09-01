import _ from './utils';

/**
 * @param {Object.<string, Object>} map
 * @return {Boolean} If every object property value is a plain object.
 */
export default (map) => {
    return _.every(map, _.isPlainObject);
};
