/**
 * @file http学习
 *
 * @author zhanglu
 */

'use strict';

// 引入url模块，它可以解析用来解析url
let url = require('url');

// 可以通过parse将一个字符串解析为一个url对象
console.log(url.parse('http://user:pass@host.com:8080/path/to/file?query=string#hash'));

