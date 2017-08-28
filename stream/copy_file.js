/**
 * @file node读写文件练习 pipe
 *
 * @author zhanglu
 */

'use strict';

let fs = require('fs');

// 读文件
let rs = fs.createReadStream('sample.txt');

// 写文件
let ws = fs.createWriteStream('pipe.txt');

rs.pipe(ws);