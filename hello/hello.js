/**
 * @file nodejs 学习
 *
 * @author zhanglu
 */

let s = 'Hello';

function greet(name) {
    console.log(s + ',' + name + '!');
}

module.exports = {
    greet: greet
};
