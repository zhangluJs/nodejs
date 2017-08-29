/**
 * @file url
 * @author zhanglu
 */

'use strict';

module.exports = {
    'GET /': async (ctx, next) => {
        ctx.render('index.html', {
            title: 'WelCome'
        });
    }
};
