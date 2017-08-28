/**
 * @file MD5
 * @author zhanglu
 */

'use strict';

const CRYPTO = require('crypto');

const HASH = CRYPTO.createHash('md5');

HASH.update('Hello, world');
HASH.update('Hello, nodejs');

console.log(HASH.digest('hex'));