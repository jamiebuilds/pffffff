// @flow
'use strict';

function pffffff(str /*: string */, multiplier /*: number | void */) {
  let rand = Math.max(Math.round(Math.random() * 10 * (multiplier || 1)), 2);
  let ffff = 'f'.repeat(rand);
  return `p${ffff} ${str}`;
}

module.exports = pffffff;
