# Canonical Reducer Composition Validator

[![Travis build status](http://img.shields.io/travis/gajus/canonical-reducer-composition-validator/master.svg?style=flat-square)](https://travis-ci.org/gajus/canonical-reducer-composition-validator)
[![NPM version](http://img.shields.io/npm/v/canonical-reducer-composition-validator.svg?style=flat-square)](https://www.npmjs.org/package/canonical-reducer-composition-validator)

[Canonical Reducer Composition](https://github.com/gajus/canonical-reducer-composition) pattern component validator.

```js
import {
    validateReducer,
    validateAction,
    validateActionName
} from 'canonical-reducer-composition-validator';

/**
 * @throws Error if input reducerDefinition is not compliant with the spec.
 */
validateReducer(reducerDefinition);

/**
 * @throws Error if action is not compliant with the spec.
 */
validateAction(action);

/**
 * @throws Error if action name is not compliant with the spec.
 */
validateActionName(actionName);
```

## Using gulp

`gulpfile.js` is written using ES6. Therefore, it needs to be executed using `babel-node`.

```
babel-node ./node_modules/.bin/gulp build
```
