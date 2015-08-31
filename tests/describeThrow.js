import {
    expect
} from 'chai';

export default (when, message, fn) => {
    context(when, () => {
        it('throws an error', () => {
            expect(fn).to.throw(Error, message);
        });
    });
};
