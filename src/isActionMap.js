import _ from './utils';

/**
 * @param {Object.<string, Function>} map
 * @return {Boolean} If every object property value is a function.
 */
export default (map) => {
    return _.every(map, _.isFunction);
};
