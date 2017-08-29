/**
 * @file koa
 * @author zhanglu
 */

'use strict';

const Koa = require('koa');

const bodyParser = require('koa-bodyparser');

const controller = require('./controller');

const templating = require('./templating');

const isProduction = process.env.NODE_ENV === 'production';

const app = new Koa();

app.use(async (ctx, next) => {
    console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
    let start = new Date().getTime();
    let execTime;
    await next();
    execTime = new Date().getTime() - start;
    ctx.response.set('X-Response-Time', `${execTime}ms`);
});

if (! isProduction) {
    let staticFiles = require('./static-files');
    app.use(staticFiles('/static/', __dirname + '/static'));
}

app.use(bodyParser());

app.use(templating('view', {
    noCache: !isProduction,
    watch: !isProduction
}));

app.use(controller());

app.listen(3002);
console.log('app started at port 3000...');