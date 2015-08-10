'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _validateActionName = require('./validateActionName');

var _validateActionName2 = _interopRequireDefault(_validateActionName);

exports['default'] = function (action) {
    var unknownProperty = undefined;

    if (!_lodash2['default'].isPlainObject(action)) {
        throw new Error('Action definition must be a plain object.');
    }

    if (_lodash2['default'].isUndefined(action.name)) {
        throw new Error('Action definition object must define "name" property.');
    }

    try {
        (0, _validateActionName2['default'])(action.name);
    } catch (e) {
        throw new Error('Action definition object "name" property value must be a valid action name.');
    }

    if (!_lodash2['default'].isUndefined(action.data) && !_lodash2['default'].isPlainObject(action.data)) {
        throw new Error('Action definition object "data" property value must be a plain object.');
    }

    if (!_lodash2['default'].isUndefined(action.metadata) && !_lodash2['default'].isPlainObject(action.metadata)) {
        throw new Error('Action definition object "metadata" property value must be a plain object.');
    }

    unknownProperty = _lodash2['default'].first(_lodash2['default'].difference(_lodash2['default'].keys(action), ['name', 'data', 'metadata']));

    if (unknownProperty) {
        throw new Error('Action definition object must not define unknown properties.');
    }
};

module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZhbGlkYXRlQWN0aW9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O3NCQUFjLFFBQVE7Ozs7a0NBRVMsc0JBQXNCOzs7O3FCQUV0QyxVQUFDLE1BQU0sRUFBSztBQUN2QixRQUFJLGVBQWUsWUFBQSxDQUFDOztBQUVwQixRQUFJLENBQUMsb0JBQUUsYUFBYSxDQUFDLE1BQU0sQ0FBQyxFQUFFO0FBQzFCLGNBQU0sSUFBSSxLQUFLLENBQUMsMkNBQTJDLENBQUMsQ0FBQztLQUNoRTs7QUFFRCxRQUFJLG9CQUFFLFdBQVcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUU7QUFDNUIsY0FBTSxJQUFJLEtBQUssQ0FBQyx1REFBdUQsQ0FBQyxDQUFDO0tBQzVFOztBQUVELFFBQUk7QUFDQSw2Q0FBbUIsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ25DLENBQUMsT0FBTyxDQUFDLEVBQUU7QUFDUixjQUFNLElBQUksS0FBSyxDQUFDLDZFQUE2RSxDQUFDLENBQUM7S0FDbEc7O0FBRUQsUUFBSSxDQUFDLG9CQUFFLFdBQVcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxvQkFBRSxhQUFhLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFO0FBQzlELGNBQU0sSUFBSSxLQUFLLENBQUMsd0VBQXdFLENBQUMsQ0FBQztLQUM3Rjs7QUFFRCxRQUFJLENBQUMsb0JBQUUsV0FBVyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLG9CQUFFLGFBQWEsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEVBQUU7QUFDdEUsY0FBTSxJQUFJLEtBQUssQ0FBQyw0RUFBNEUsQ0FBQyxDQUFDO0tBQ2pHOztBQUVELG1CQUFlLEdBQUcsb0JBQUUsS0FBSyxDQUFDLG9CQUFFLFVBQVUsQ0FBQyxvQkFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7QUFFdEYsUUFBSSxlQUFlLEVBQUU7QUFDakIsY0FBTSxJQUFJLEtBQUssQ0FBQyw4REFBOEQsQ0FBQyxDQUFDO0tBQ25GO0NBQ0oiLCJmaWxlIjoidmFsaWRhdGVBY3Rpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuXG5pbXBvcnQgdmFsaWRhdGVBY3Rpb25OYW1lIGZyb20gJy4vdmFsaWRhdGVBY3Rpb25OYW1lJztcblxuZXhwb3J0IGRlZmF1bHQgKGFjdGlvbikgPT4ge1xuICAgIGxldCB1bmtub3duUHJvcGVydHk7XG5cbiAgICBpZiAoIV8uaXNQbGFpbk9iamVjdChhY3Rpb24pKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignQWN0aW9uIGRlZmluaXRpb24gbXVzdCBiZSBhIHBsYWluIG9iamVjdC4nKTtcbiAgICB9XG5cbiAgICBpZiAoXy5pc1VuZGVmaW5lZChhY3Rpb24ubmFtZSkpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdBY3Rpb24gZGVmaW5pdGlvbiBvYmplY3QgbXVzdCBkZWZpbmUgXCJuYW1lXCIgcHJvcGVydHkuJyk7XG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgICAgdmFsaWRhdGVBY3Rpb25OYW1lKGFjdGlvbi5uYW1lKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignQWN0aW9uIGRlZmluaXRpb24gb2JqZWN0IFwibmFtZVwiIHByb3BlcnR5IHZhbHVlIG11c3QgYmUgYSB2YWxpZCBhY3Rpb24gbmFtZS4nKTtcbiAgICB9XG5cbiAgICBpZiAoIV8uaXNVbmRlZmluZWQoYWN0aW9uLmRhdGEpICYmICFfLmlzUGxhaW5PYmplY3QoYWN0aW9uLmRhdGEpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignQWN0aW9uIGRlZmluaXRpb24gb2JqZWN0IFwiZGF0YVwiIHByb3BlcnR5IHZhbHVlIG11c3QgYmUgYSBwbGFpbiBvYmplY3QuJyk7XG4gICAgfVxuXG4gICAgaWYgKCFfLmlzVW5kZWZpbmVkKGFjdGlvbi5tZXRhZGF0YSkgJiYgIV8uaXNQbGFpbk9iamVjdChhY3Rpb24ubWV0YWRhdGEpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignQWN0aW9uIGRlZmluaXRpb24gb2JqZWN0IFwibWV0YWRhdGFcIiBwcm9wZXJ0eSB2YWx1ZSBtdXN0IGJlIGEgcGxhaW4gb2JqZWN0LicpO1xuICAgIH1cblxuICAgIHVua25vd25Qcm9wZXJ0eSA9IF8uZmlyc3QoXy5kaWZmZXJlbmNlKF8ua2V5cyhhY3Rpb24pLCBbJ25hbWUnLCAnZGF0YScsICdtZXRhZGF0YSddKSk7XG5cbiAgICBpZiAodW5rbm93blByb3BlcnR5KSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignQWN0aW9uIGRlZmluaXRpb24gb2JqZWN0IG11c3Qgbm90IGRlZmluZSB1bmtub3duIHByb3BlcnRpZXMuJyk7XG4gICAgfVxufTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==