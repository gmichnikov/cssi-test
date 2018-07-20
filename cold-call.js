console.clear();
let randomInt = require("random-int");

let names = ['AG', 'Alex',
  'FA',
  'GT',
  'HS',
  'JB',
  'JC',
  'JL',
  'JW',
  'JY',
  'KC',
  'KH',
  'KP',
  'KT',
  'MA',
  'MO', 'Myles',
  'NC',
  'OA',
  'PG (Paul)',
  'UO',
  'YS'
];

let index = randomInt(names.length - 1);
let name = names[index];
console.log(name);
