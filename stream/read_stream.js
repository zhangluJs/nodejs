/**
 * @file node流练习
 *
 * @author zhanglu
 */


'use strict';

let fs = require('fs');

let rs = fs.createReadStream('sample.txt', 'utf-8');

rs.on('data', function (chunk) {
    console.log('DATA');
    console.log(chunk);
});

rs.on('end', function () {
    console.log('end');
});

rs.on('error', function (err) {
    console.log(err);
});
console.log(123);