/**
 * @file 处理本地文件目录  node学习
 *
 * @author zhanglu
 */

'use strict';

// 引入path模块
let path = require('path');

// 解析当前目录
let workDir = path.resolve('.');
console.log(workDir);

// 组合完整的文件路劲，当前目录+'pub'+'index.html'
let filePath = path.join(workDir, 'pub', 'index.html');
console.log(filePath);