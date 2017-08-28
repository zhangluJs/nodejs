/**
 * @file koa
 * @author zhanglu
 */

'use strict';

// 导入koa，和koa1.x不同，在koa2中，我们导入的是一个class，因此用大写的Koa表示
const Koa = require('koa');

// 注意require（'koa-router'）返回的是函数
const router = require('koa-router')();

const bodyParser = require('koa-bodyparser');

// 创建一个Koa对象表示web app本身
const app = new Koa();

app.use(bodyParser());

// log request URL:
app.use(async (ctx, next) => {
    console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
    await next();
});

router.get('/', async (ctx, next) => {
    ctx.response.body = `<h1>Index</h1>
        <form action="/signin" method="post">
            <p>Name: <input name="name" value="koa"></p>
            <p>Password: <input name="password" type="password"></p>
            <p><input type="submit" value="Submit"></p>
        </form>`;
});

router.get('/hello/:name', async (ctx, next) => {
    let name = ctx.params.name;
    ctx.response.body = `<h1>hello, ${name}!</h1>`;
});

router.post('/signin', async (ctx, next) => {
    let name = ctx.request.body.name || '';
    let password = ctx.request.body.password || '';
    console.log(`sigin with name:${name} password:${password}`);
    if (name === 'koa' && password === '123456') {
        ctx.response.body = `<h1>Hello, ${name} !</h1>`;
    } else {
        ctx.response.body = `<h1>Login failed!</h1>
            <p><a href="/">Try again</a></p>`;
    }
});

// add router middleware
app.use(router.routes());

// 监听3002端口
app.listen(3002);
console.log('app started at port 3002...');
