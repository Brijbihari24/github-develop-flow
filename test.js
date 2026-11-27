const { total } = require('./price');
const result = total([{ price: 100, qty: 2 }, { price: 50, qty: 1 }]);
if (result !== 250) { console.error('FAIL: expected 250, got ' + result); process.exit(1); }
console.log('PASS');
