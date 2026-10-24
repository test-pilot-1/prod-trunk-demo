const { withTax } = require('./tax');
test('adds tax', () => { expect(withTax(100, 0.2)).toBe(120); });
