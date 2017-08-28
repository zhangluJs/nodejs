/**
 * @file babel
 * @author zhanglu
 */

'use strict';

let register = require('babel-core/register');

register({
    presets: ['stage-3']
});

require('./app.js');