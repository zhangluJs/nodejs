/**
 * @file 读取文件
 *
 * @author zhanglu
 */

'use strict';

let fs = require('fs');


/**
 * 异步读取文本文件
 * @return {string} 文本内容
 */
fs.readFile('hello/a.txt', 'utf-8', function (err, data) {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
});

/**
 * 异步读取二进制文件
 * @return {Array} buffer对象
 */
fs.readFile('hello/852.jpg', function (err, data) {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
        console.log(data.length + 'bytes');
        let text = data.toString('utf-8');
        let buf = new Buffer(text, '');
    }
});

/**
 * 同步读取文件 Sync
 */
let data = fs.readFileSync('hello/a.txt', 'utf-8');
console.log(data);


/**
 *  异步写文件
 */
let text = 'Hello world  努力以后去看看';
fs.writeFile('hello/output.txt', text, function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log('ok');
    }
});

/**
 *  同步写文件
 */
let nodeText = 'hello nodejs';
fs.writeFileSync('hello/output', nodeText);

/**
 * 异步查看文件大小，创建信息等
 */
fs.stat('hello/a.txt', function (err, data) {
    if (err) {
        console.log(err);
    } else {
        console.log(data.isFile());
    }
});

/**
 * 同步查看文件大小，创建信息等
 */
let FileData = fs.statSync('hello/a.txt');
console.log(FileData);