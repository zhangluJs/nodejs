/**
 * @file template 模板引擎学习
 * @author zhanglu
 */

'use strict';

const nunjucks = require('nunjucks');

function createEnv(path, opts) {
    let autoescape = opts.autoescape === undefined ? true : opts.autoescape;
    let noCache = opts.noCache || false;
    let watch = opts.watch || false;
    let throwOnUndefined = opts.throwOnUndefined || false;
    let env = new nunjucks.Environment(
        new nunjucks.FileSystemLoader('views', {
            noCache: noCache,
            watch: watch
        }), {
            autoescape: autoescape,
            throwOnUndefined: throwOnUndefined
        }
    );
    if (opts.filters) {
        for (let f in opts.filters) {
            env.addFilter(f, opts.filters[f]);
        }
    }
    return env;
}

let env = createEnv('views', {
    watch: true,
    filters: {
        hex: function (n) {
            return '0x' + n.toString(16);
        }
    }
});

var s = env.render('hello.html',
    {fruits: ['苹果', '香蕉', '西瓜', '葡萄']}
);
// console.log(s);

console.log(env.render('extend.html', {
    header: 'Hello',
    body: 'bla bla bla...'
}));