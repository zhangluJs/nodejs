/**
 * @file url
 * @author zhanglu
 */

'use strict';

const fs = require('fs');

function addMapping(router, mapping) {
    for (let url in mapping) {
        if (url.startsWith('GET')) {
            let path = url.substring(4);
            router.get(path, mapping[url]);
        } else if (url.startsWith('POST')) {
            let path = url.substring(5);
            router.post(path, mapping[url]);
        } else {
            console.log(`invalid URL: ${url}`);
        }
    }
}

function addController(router, dir) {
    let files = fs.readdirSync(__dirname + '/controllers');

    let jsFiles = files.filter(f => {
        return f.endsWith('.js');
    });

    for (let f of jsFiles) {
        let mapping = require(__dirname + '/' + dir + '/' + f);
        addMapping(router, mapping);
    }
}

function foo(dir) {
    let controllersDir = dir || 'controllers';
    let router = require('koa-router')();
    addController(router, controllersDir);
    return router.routes();
}

module.exports = foo;
