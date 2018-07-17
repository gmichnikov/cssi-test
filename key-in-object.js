// Here is an example of another way to check if a key is already in an object

let pizza = {
  price: 10,
  crust: "thin",
  size: "large"
}

if ("price" in pizza) {
  console.log("Pizza has a price");
} else {
  console.log("Pizza does not have a price");
}

if ("toppings" in pizza) {
  console.log("Pizza has toppings");
} else {
  console.log("Pizza does not have toppings");
}
