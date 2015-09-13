'use strict';
var assert = require('assert');
var sp = require('../');
var π = Math.PI;

describe('stringify-pi', function () {
  it('must be equal', function () {
    assert.strictEqual(sp(2 * π / 3), '2π/3');
    assert.strictEqual(sp(π / 3), 'π/3');
    assert.strictEqual(sp(-π / 3), '-π/3');
    assert.strictEqual(sp(4 * π / 3), '4π/3');
    assert.strictEqual(sp(523 * π / 100), '523π/100');
    assert.strictEqual(sp(5023 * π / 100), '5023π/100');
    assert.strictEqual(sp(5023 * π / 1000), '5023π/1000');
    assert.strictEqual(sp(50237 * π / 1000), '50237π/1000');
    assert.strictEqual(sp(50237 * π / 10000), '50237π/10000');
    assert.strictEqual(sp(502379 * π / 10000), '502379π/10000');
    assert.strictEqual(sp(502379 * π / 100000), '502379π/100000');
    assert.strictEqual(sp(502379 * π / 1000000), '502379π/1000000');

    assert.strictEqual(sp(3 * π), '3π');
  });
});
