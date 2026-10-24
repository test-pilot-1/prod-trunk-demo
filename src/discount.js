function discounted(amount, percent) { return Math.round(amount * (100 - percent)) / 100; }
module.exports = { discounted };
