#!/usr/bin/env node

require('dotenv').config({ path: __dirname + '/../.env' });

require = require('esm')(module /*, options*/);
module.exports = require('./cli.js');
