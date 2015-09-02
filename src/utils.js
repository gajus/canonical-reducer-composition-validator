import isUndefined from 'lodash/lang/isUndefined';
import isObject from 'lodash/lang/isObject';
import isPlainObject from 'lodash/lang/isPlainObject';
import isString from 'lodash/lang/isString';
import isFunction from 'lodash/lang/isFunction';
import keys from 'lodash/object/keys';
import values from 'lodash/object/values';
import difference from 'lodash/array/difference';
import first from 'lodash/array/first';
import indexOf from 'lodash/array/indexOf';
import every from 'lodash/collection/every';
import forEach from 'lodash/collection/forEach';
import has from 'lodash/object/has';

export default {
    isUndefined,
    isObject,
    isPlainObject,
    isString,
    isFunction,
    keys,
    values,
    difference,
    first,
    every,
    indexOf,
    forEach,
    has
};
