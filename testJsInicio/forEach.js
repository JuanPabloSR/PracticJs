let items = [
  { name: "monitor", price: 600 },
  { name: "tv", price: 800 },
  { name: "pc", price: 1000 },
  { name: "mouse", price: 200 },
  { name: "keyboard", price: 300 },
];

items.forEach(function (item) {
  console.log(item);
});

const itemsFilter = items.filter((item) => item.price <= 500);
console.log("🚀 ~ file: forEach.js:14 ~ itemsFilter", itemsFilter);

const itemsMap = items.map((item) => item.name);
console.log("🚀 ~ file: forEach.js:17 ~ itemsMap", itemsMap);

const itemsFind = items.find((item) => item.name == "mouse");
console.log("🚀 ~ file: forEach.js:20 ~ itemsFind", itemsFind)
