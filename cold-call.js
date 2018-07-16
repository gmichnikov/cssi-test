console.clear();
let randomInt = require("random-int");

let names = ["PG", "MA", "AG", "JW", "UO", "KC", "YS", "FA", "NC", "KP", "JL", "JB", "HS", "KT", "GT", "JY", "MO", "JC", "OA", "KH"];

let index = randomInt(names.length - 1);
let name = names[index];
console.log(name);
