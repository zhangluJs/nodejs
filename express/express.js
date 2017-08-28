/**
 * @file express
 *
 * @author zhanglu
 */

'use strict';

let express = require('express');
let app = express();

app.get('/', function (req, res) {
    res.send('hello world');
});

app.listen(3000, function () {
    console.log('Express app listening on port 3000');
});