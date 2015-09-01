import {
    expect
} from 'chai';

import isActionMap from './../src/isActionMap';

describe('isActionMap()', () => {
    context('when subject is a collection of functions', () => {
        it('is true', () => {
            isActionMap({
                foo: () => {},
                bar: () => {}
            });
        })
    });
    context('when subject includes anything that is not a function', () => {
        it('is false', () => {
            isActionMap({
                foo: {}
            });
        })
    });
});
