// Here is an example of another way to check if a key is already in an object

let pizza = {
  price: 10,
  crust: "thin",
  size: "large"
}

// This will print the first thing, since it does have a price
if ("price" in pizza) {
  console.log("Pizza has a price");
} else {
  console.log("Pizza does not have a price");
}

// This will print the second thing, since it does NOY have toppings
if ("toppings" in pizza) {
  console.log("Pizza has toppings");
} else {
  console.log("Pizza does not have toppings");
}
