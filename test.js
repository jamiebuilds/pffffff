// @flow
'use strict';
const test = require('ava');
const pffffff = require('./');

const unsafeMath /*: any & typeof Math */ = Math;
const prevRandom = unsafeMath.random;

test.beforeEach(() => {
  unsafeMath.random = () => 0.5;
});

test.afterEach(() => {
  unsafeMath.random = prevRandom;
});

test('pffffff()', t => {
  t.is(pffffff('easy'), 'pfffff easy')
});

test('pffffff()', t => {
  t.is(pffffff('easy', 2), 'pffffffffff easy')
});
