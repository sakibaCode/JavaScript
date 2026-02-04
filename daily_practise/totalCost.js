const cart = [
  { name: "Pen", price: 10, quantity: 3 },
  { name: "Book", price: 120, quantity: 2 },
  { name: "Bag", price: 500, quantity: 1 }
];

function totalCost(cart) {
  let total = 0;

  for (let item of cart) {
    total += item.price * item.quantity;
  }

  return total;
}

console.log(totalCost(cart));
