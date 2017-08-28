/**
 * @file node流练习
 *
 * @author zhanglu
 */


'use strict';

let fs = require('fs');


let ws1 = fs.createWriteStream('output1.txt', 'utf-8');
ws1.write('使用strean写入数据1231231231.....\n');
ws1.write('END');
ws1.end();

let ws2 = fs.createWriteStream('output2.txt');
ws2.write('使用stream写进二进制数据.....\n', 'utf-8');
ws2.write('END');
ws2.end();