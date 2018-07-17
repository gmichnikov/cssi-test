var fs = require('fs');
var array = fs.readFileSync('words.txt').toString().split("\n");
console.log(array.length);
console.log(array[0], array[array.length - 1].length);
