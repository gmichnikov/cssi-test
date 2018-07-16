let result = 1;
for (let i = 0; i <= 35; i++) {
  result *= (365 - i) / 365;
}

console.log(result);
