const { discounted } = require('./discount');
test('applies a percentage discount', () => { expect(discounted(200, 10)).toBe(180); });
