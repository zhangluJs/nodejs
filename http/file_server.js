/**
 * @file 实现一个文件服务器
 *
 * @author zhanglu
 */

'use strict';

let fs   = require('fs');
let url  = require('url');
let http = require('http');
let path = require('path');

let root = path.resolve(process.argv[2] || '.');
console.log('Static root dir      ' + root);

let server = http.createServer(function (request, response) {
    let pathname = url.parse(request.url).pathname;

    let filePath = path.join(root, pathname);
    fs.stat(filePath, function (err, stats) {
        if (!err && stats.isFile()) {
            fnresponse(request, response, filePath);
        } else if (!err && stats.isDirectory()) {
            fs.readdir(filePath, function (err, files) {
                if (err) {
                    console.log('404' + request.url);

                    response.writeHead(400);

                    response.end();
                } else {
                    if (files.includes('default.html')) {
                        filePath = path.join(filePath, 'default.html');
                        fnresponse(request, response, filePath);
                    } else {
                        filePath = path.join(filePath, 'index.html');
                        fnresponse(request, response, filePath);
                    }
                }
            });
        } else {

            console.log('404' + request.url);

            response.writeHead(400);

            response.end();
        }
    });
});

function fnresponse(req, res, path) {
    console.log('200' + req.url);
    res.writeHead(200);
    fs.createReadStream(path).pipe(res);
}
server.listen(8080);

console.log('Server is running at http://127.0.0.1:8080/');