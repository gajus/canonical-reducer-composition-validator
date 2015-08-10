import {
    expect
} from 'chai';

import validateActionName from './../src/validateActionName';
import describeThrow from './describeThrow';

describe('validateActionName()', () => {
    describe('when action name', () => {
        let describeValidateActionNameThrow;

        describeValidateActionNameThrow = (when, message, value) => {
            describeThrow(when, message, () => {
                validateActionName(value);
            })
        };

        describeValidateActionNameThrow(
            'does not consist only of uppercase alphabetical characters and underscores',
            'Action definition object "name" property value must consist only of uppercase alphabetical characters and underscores.',
            {
                name: 'lowercase'
            }
        );
    });
});
