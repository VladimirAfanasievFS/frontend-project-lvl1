#!/usr/bin/env node

import greeting from '../src/cli.js';

const [getName] = greeting();
console.log(`Hello, ${getName}!`);
