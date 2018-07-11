var tools = require('./tools');
console.log(typeof tools.foo); // => 'function'
console.log(typeof tools.bar); // => 'function'
console.log(typeof tools.zemba); // => undefined

console.log(tools.foo(7)); // => 'function'

var obj = {c: 2, b:4};
console.log(obj);
