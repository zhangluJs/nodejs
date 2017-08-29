/**
 * @file url
 * @author zhanglu
 */

'use strict';

module.exports = {
    'POST /signin': async (ctx, next) => {
        let email = ctx.request.body.email || '';
        let password = ctx.request.body.password || '';
        if (email === 'admin@example.com' && password === '123456') {
            ctx.render('signin-ok.html', {
                title: 'Sign In OK',
                name: 'Mr Node'
            });
        } else {
            ctx.render('signin-failed.html', {
                title: 'Sign In Failed'
            });
        }
    }
};
