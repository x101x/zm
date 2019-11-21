const crypto = require('crypto')
//api 请求 携带 token localstorage独立

//sha256 === md5
let abc = 'helloWorld'
const sing = crypto.createHmac('sha256','abc').update(abc).digest('base64')
console.log(sing);
