/**
 * @file koa
 * @author zhanglu
 */

'use strict';

const Koa = require('koa');

const bodyParser = require('koa-bodyparser');

const controller = require('./controller');

const app = new Koa();


app.use(async (ctx, next) => {
    await next();
});

app.use(bodyParser());

app.use(controller());

app.listen(3002);
console.log('app started at port 3000...');