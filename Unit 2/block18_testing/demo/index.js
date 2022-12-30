const assert = require('assert');

function add(a, b) {
  return a + b;
}

const result = add(1, 2);

assert.equal(result, 3);