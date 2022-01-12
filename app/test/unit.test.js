const assert = require('assert');
const { sub, mul, add, div } = require("../functions");
describe('Tests unitaire', () => {
    it('should return -3', () => {
        assert.equal(sub(2, 5), '-3');
    });
    it('should return 7', () => {
        assert.equal(add(2, 5), '7');
    });
    it('should return 12', () => {
        assert.equal(mul(6, 2), '12');
    });
    it('should return 6', () => {
        assert.equal(div(12, 2), '6');
    });
    it('should return NaN', () => {
        assert.equal(div(6, 0), 'NaN');
    });
});