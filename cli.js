#!/usr/bin/env node
// @flow
'use strict';
const meow = require('meow');
const path = require('path');
const pffffff = require('./');

let cli = meow({
  help: `
    Usage
      $ pff <thing>
      $ pfff <thing>
      $ pffff <thing>
      $ pfffff <thing>
      $ pffffff <thing>
  `
});

let cmd = path.basename(process.argv[1]);
let ffs = cmd.match(/f/g);
let multiplier = ffs ? ffs.length : 2;

console.log(pffffff(cli.input[0], multiplier));
