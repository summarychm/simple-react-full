const { pathToRegexp } = require('path-to-regexp');
// console.log('============ pathToRegExp begin ====================');
// console.log(pathToRegexp);
// console.log('============ pathToRegExp end ======================');
// const regx2 = pathToRegexp('/home', [], { end: false });
// console.log(regx2); //   /^\/home\/?(?=\/|$)/i
// console.log(regx2.test('/home'));
// console.log(regx2.test('/home/'));
// console.log(regx2.test('/home//'));
// console.log(regx2.test('/home/2'));

const params = [];
const regx3 = pathToRegexp('/user/:id', params, { end: true });
console.log(regx3, params);
const url = '/user/12/';
const result = url.match(regx3);
console.log('result', result, result.length);
console.log('params', params);
