'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

exports['default'] = function (name) {
    if (!/^[A-Z\_]+$/.test(name)) {
        throw new Error('Action definition object "name" property value must consist only of uppercase alphabetical characters and underscores.');
    }
};

module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZhbGlkYXRlQWN0aW9uTmFtZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztzQkFBYyxRQUFROzs7O3FCQUVQLFVBQUMsSUFBSSxFQUFLO0FBQ3JCLFFBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO0FBQzFCLGNBQU0sSUFBSSxLQUFLLENBQUMsd0hBQXdILENBQUMsQ0FBQztLQUM3STtDQUNKIiwiZmlsZSI6InZhbGlkYXRlQWN0aW9uTmFtZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5cbmV4cG9ydCBkZWZhdWx0IChuYW1lKSA9PiB7XG4gICAgaWYgKCEvXltBLVpcXF9dKyQvLnRlc3QobmFtZSkpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdBY3Rpb24gZGVmaW5pdGlvbiBvYmplY3QgXCJuYW1lXCIgcHJvcGVydHkgdmFsdWUgbXVzdCBjb25zaXN0IG9ubHkgb2YgdXBwZXJjYXNlIGFscGhhYmV0aWNhbCBjaGFyYWN0ZXJzIGFuZCB1bmRlcnNjb3Jlcy4nKTtcbiAgICB9XG59O1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9