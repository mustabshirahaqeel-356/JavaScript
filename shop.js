const products = [
  { id: 1, name: "Notebook", category: "Stationery", price: 250 },
  { id: 2, name: "Pen Pack", category: "Stationery", price: 120 },
  { id: 3, name: "Backpack", category: "Bags", price: 3200 },
  { id: 4, name: "Lunch Box", category: "Bags", price: 900 },
  { id: 5, name: "Calculator", category: "Electronics", price: 1800 },
  { id: 6, name: "USB Drive", category: "Electronics", price: 1100 }
];

console.log("All Products:", products[0].name, products[5].name);   
products.map(product => {
  console.log(`Name: ${product.name}`);
});
const filtered = products.filter(product => product.price < 1000);
filtered.forEach(product => {
  console.log(`Product: ${product.name} - Price: ${product.price}`); 
});
console.log(`Total Products: ${filtered.length}`);
products.find(product => {
  if (product.id === 5) {
    console.log(`Product: ${product.name} - Price: ${product.price}`);
  }
});
let totalPrice = 0;
for(let i = 0; i < products.length; i++) {
  totalPrice += products[i].price;
}
console.log(`Total Price: ${totalPrice}`);
const productsByPrice = [...products];
productsByPrice.sort((a, b) => a.price - b.price);
console.log("Products by price:");
productsByPrice.forEach(product => {
  console.log(product.name, product.price);
});
console.log(`Original first product: ${products[0].name} - Price: ${products[0].price}`);
products
  .filter(product => product.category === "Bags" || product.category === "Electronics")
  .filter(product => product.price > 1000)
  .map(product => ({ name: product.name, price: product.price }))
  .forEach(({ name, price }) => console.log(name, price));