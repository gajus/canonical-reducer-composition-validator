import {
    expect
} from 'chai';

import isDomainMap from './../src/isDomainMap';

describe('isDomainMap()', () => {
    context('when subject is a collection of objects', () => {
        it('is true', () => {
            isDomainMap({
                foo: {},
                bar: {}
            });
        })
    });
    context('when subject includes anything that is not a plain object', () => {
        it('is false', () => {
            isDomainMap({
                foo: () => {}
            });
        })
    });
});
