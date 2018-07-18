// A basic 2D array
let arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [10, 11, 12],
  [13, 14, 15]
]



// Nested for loops that go through the 2D array above
for (let row = 0; row < arr.length; row++) {
  for (let col = 0; col < arr[0].length; col++) {
    console.log(arr[row][col]);
  }
}



// Drawing patterns
for (let row = 0; row < 10; row++) {
  let line = "";
  for (let col = 0; col < 10; col++) {
    if (row == col || 9 - row == col) {
      line += "*";
    } else {
      line += "_";
    }
  }
  // console.log(line);
}
