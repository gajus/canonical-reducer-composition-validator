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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZhbGlkYXRlUmVkdWNlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztzQkFBYyxRQUFROzs7O2tDQUVTLHNCQUFzQjs7OztBQUVyRCxJQUFJLFdBQVcsWUFBQTtJQUNYLFdBQVcsWUFBQSxDQUFDOzs7Ozs7QUFNaEIsV0FBVyxHQUFHLFVBQUMsR0FBRyxFQUFLO0FBQ25CLFdBQU8sb0JBQUUsS0FBSyxDQUFDLEdBQUcsRUFBRSxvQkFBRSxhQUFhLENBQUMsQ0FBQztDQUN4QyxDQUFDOzs7Ozs7QUFNRixXQUFXLEdBQUcsVUFBQyxHQUFHLEVBQUs7QUFDbkIsV0FBTyxvQkFBRSxLQUFLLENBQUMsR0FBRyxFQUFFLG9CQUFFLFVBQVUsQ0FBQyxDQUFDO0NBQ3JDLENBQUM7O3FCQUVhLFVBQUMsT0FBTyxFQUFLO0FBQ3hCLFFBQUksUUFBUSxZQUFBO1FBQ1IsV0FBVyxHQUFHLEVBQUUsQ0FBQzs7Ozs7QUFLckIsWUFBUSxHQUFHLFVBQUMsTUFBTSxFQUFLO0FBQ25CLDRCQUFFLE9BQU8sQ0FBQyxNQUFNLEVBQUUsVUFBQyxLQUFLLEVBQUUsVUFBVSxFQUFLO0FBQ3JDLGdCQUFJLFdBQVcsQ0FBQyxLQUFLLENBQUMsRUFBRTtBQUNwQixvQ0FBRSxPQUFPLENBQUMsS0FBSyxFQUFFLFVBQUMsTUFBTSxFQUFFLElBQUksRUFBSztBQUMvQix3QkFBSTtBQUNBLDZEQUFtQixJQUFJLENBQUMsQ0FBQztxQkFDNUIsQ0FBQyxPQUFPLENBQUMsRUFBRTtBQUNSLDhCQUFNLElBQUksS0FBSyxDQUFDLDRFQUE0RSxDQUFDLENBQUM7cUJBQ2pHOztBQUVELHdCQUFJLG9CQUFFLE9BQU8sQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUU7QUFDckMsOEJBQU0sSUFBSSxLQUFLLENBQUMsZ0VBQWdFLENBQUMsQ0FBQztxQkFDckY7O0FBRUQsK0JBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7aUJBQzFCLENBQUMsQ0FBQzthQUNOLE1BQU0sSUFBSSxXQUFXLENBQUMsS0FBSyxDQUFDLEVBQUU7QUFDM0Isd0JBQVEsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQzthQUNoQyxNQUFNO0FBQ0gsc0JBQU0sSUFBSSxLQUFLLENBQUMseUhBQXlILENBQUMsQ0FBQzthQUM5STtTQUNKLENBQUMsQ0FBQztLQUNOLENBQUM7OztBQUdGLFFBQUksV0FBVyxDQUFDLE9BQU8sQ0FBQyxJQUFJLG9CQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLEVBQUU7QUFDbEQsY0FBTSxJQUFJLEtBQUssQ0FBQyxvRUFBb0UsQ0FBQyxDQUFDO0tBQ3pGOztBQUVELFlBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztDQUNyQiIsImZpbGUiOiJ2YWxpZGF0ZVJlZHVjZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuXG5pbXBvcnQgdmFsaWRhdGVBY3Rpb25OYW1lIGZyb20gJy4vdmFsaWRhdGVBY3Rpb25OYW1lJztcblxubGV0IGlzRG9tYWluTWFwLFxuICAgIGlzQWN0aW9uTWFwO1xuXG4vKipcbiAqIEBwYXJhbSB7T2JqZWN0LjxzdHJpbmcsIE9iamVjdD59IG1hcFxuICogQHJldHVybiB7Qm9vbGVhbn0gSWYgZXZlcnkgb2JqZWN0IHByb3BlcnR5IHZhbHVlIGlzIGEgcGxhaW4gb2JqZWN0LlxuICovXG5pc0RvbWFpbk1hcCA9IChtYXApID0+IHtcbiAgICByZXR1cm4gXy5ldmVyeShtYXAsIF8uaXNQbGFpbk9iamVjdCk7XG59O1xuXG4vKipcbiAqIEBwYXJhbSB7T2JqZWN0LjxzdHJpbmcsIEZ1bmN0aW9uPn0gbWFwXG4gKiBAcmV0dXJuIHtCb29sZWFufSBJZiBldmVyeSBvYmplY3QgcHJvcGVydHkgdmFsdWUgaXMgYSBmdW5jdGlvbi5cbiAqL1xuaXNBY3Rpb25NYXAgPSAobWFwKSA9PiB7XG4gICAgcmV0dXJuIF8uZXZlcnkobWFwLCBfLmlzRnVuY3Rpb24pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgKHJlZHVjZXIpID0+IHtcbiAgICBsZXQgaXRlcmF0b3IsXG4gICAgICAgIGFjdGlvbkluZGV4ID0gW107XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gYnJhbmNoXG4gICAgICovXG4gICAgaXRlcmF0b3IgPSAoYnJhbmNoKSA9PiB7XG4gICAgICAgIF8uZm9yRWFjaChicmFuY2gsICh2YWx1ZSwgZG9tYWluTmFtZSkgPT4ge1xuICAgICAgICAgICAgaWYgKGlzQWN0aW9uTWFwKHZhbHVlKSkge1xuICAgICAgICAgICAgICAgIF8uZm9yRWFjaCh2YWx1ZSwgKGFjdGlvbiwgbmFtZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGVBY3Rpb25OYW1lKG5hbWUpO1xuICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1JlZHVjZXIgZGVmaW5pdGlvbiBvYmplY3QgYWN0aW9uIGhhbmRsZXIgbmFtZXMgbXVzdCBiZSB2YWxpZCBhY3Rpb24gbmFtZXMuJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAoXy5pbmRleE9mKGFjdGlvbkluZGV4LCBuYW1lKSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignUmVkdWNlciBkZWZpbml0aW9uIG9iamVjdCBhY3Rpb24gaGFuZGxlciBuYW1lcyBtdXN0IGJlIHVuaXF1ZS4nKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbkluZGV4LnB1c2gobmFtZSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGlzRG9tYWluTWFwKHZhbHVlKSkge1xuICAgICAgICAgICAgICAgIGl0ZXJhdG9yKGJyYW5jaFtkb21haW5OYW1lXSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignUmVkdWNlciBkZWZpbml0aW9uIG9iamVjdCB2YWx1ZSBvYmplY3QgYWxsIHZhbHVlcyBtdXN0IGNvcnJlc3BvbmQgdG8gYSBmdW5jdGlvbiAoYWN0aW9uIG1hcCkgb3IgYW4gb2JqZWN0IChkb21haW4gbWFwKS4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIC8vIF8udmFsdWVzKHJlZHVjZXJzKS5sZW5ndGggaXMgdXNlZCB0byBpZ25vcmUgZW1wdHkgcmVkdWNlciBkZWZpbml0aW9uLlxuICAgIGlmIChpc0FjdGlvbk1hcChyZWR1Y2VyKSAmJiBfLnZhbHVlcyhyZWR1Y2VyKS5sZW5ndGgpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdSZWR1Y2VyIGRlZmluaXRpb24gb2JqZWN0IG11c3QgYmVnaW4gd2l0aCBhIGRvbWFpbiBtYXAgZGVmaW5pdGlvbi4nKTtcbiAgICB9XG5cbiAgICBpdGVyYXRvcihyZWR1Y2VyKTtcbn07XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=