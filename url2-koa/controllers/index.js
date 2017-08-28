/**
 * @file url
 * @author zhanglu
 */

'use strict';

let fnIndex = async (ctx, next) => {
    ctx.response.body = `<h1>Index</h1>
        <form action="/signin" method="post">
            <p>Name: <input name="name" value="koa"></p>
            <p>Password: <input name="password" type="password"></p>
            <p><input type="submit" value="Submit"></p>
        </form>`;
};

let fnSignin = async (ctx, next) => {
    let name = ctx.request.body.name || '';
    let password = ctx.request.body.password || '';
    if (name === 'koa' && password === '12345') {
        ctx.response.body = `<h1>Hello, ${name}</h1>`;
    } else {
        ctx.response.body = `<h1>Login failed</h1>
            <p><a href="/">Try again</a></p>`;
    }
};

module.exports = {
    'GET /': fnIndex,
    'POST /signin': fnSignin
};
