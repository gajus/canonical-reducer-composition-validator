import {
    expect
} from 'chai';

import validateAction from './../src/validateAction';
import describeThrow from './describeThrow';

describe('validateAction()', () => {
    context('when action is not an object', () => {
        it('throws an error', () => {
            expect(() => {
                validateAction(null)
            }).to.throw(Error, 'Action definition must be a plain object.');
        });
    });
    context('when action definition object', () => {
        let describeValidateActionThrow;

        describeValidateActionThrow = (when, message, value) => {
            describeThrow(when, message, () => {
                validateAction(value);
            })
        };

        describeValidateActionThrow(
            'does not define "name" property',
            'Action definition object must define "name" property.',
            {}
        );

        describeValidateActionThrow(
            '"name" property value does not consist only of uppercase alphabetical characters and underscores',
            'Action definition object "name" property value must be a valid action name.',
            {
                name: 'lowercase'
            }
        );

        describeValidateActionThrow(
            '"data" property is present and it is not a plain object',
            'Action definition object "data" property value must be a plain object.',
            {
                name: 'FOO',
                data: 'not object'
            }
        );

        describeValidateActionThrow(
            '"metadata" property is present and it is not a plain object',
            'Action definition object "metadata" property value must be a plain object.',
            {
                name: 'FOO',
                metadata: 'not object'
            }
        );

        describeValidateActionThrow(
            '"error" property is present and it is not an object',
            'Action definition object "error" property value must be an object.',
            {
                name: 'FOO',
                error: null
            }
        );

        describeValidateActionThrow(
            '"error" object does not define "message" property',
            '"error" object must have "message" property.',
            {
                name: 'FOO',
                error: {}
            }
        );

        describeValidateActionThrow(
            '"error" object "message" property value is not a string',
            '"error" object "message" property value must be a string.',
            {
                name: 'FOO',
                error: {
                    message: null
                }
            }
        );

        describeValidateActionThrow(
            'defines unknown properties',
            'Action definition object must not define unknown properties. "foo" is an unknown property.',
            {
                name: 'FOO',
                foo: 'bar'
            }
        );
    });
});
