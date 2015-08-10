# Canonical

[![Travis build status](http://img.shields.io/travis/gajus/canonical/master.svg?style=flat-square)](https://travis-ci.org/gajus/canonical)
[![NPM version](http://img.shields.io/npm/v/canonical.svg?style=flat-square)](https://www.npmjs.org/package/canonical)

[Canonical Reducer Composition](https://github.com/gajus/canonical-reducer-composition) pattern component validator.

```js
import {
    validateReducer,
    validateAction,
    validateActionName
} from 'canonical';

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
