let items = [
  { name: "monitor", price: 600 },
  { name: "tv", price: 800 },
  { name: "pc", price: 1000 },
  { name: "mouse", price: 200 },
  { name: "keyboard", price: 300 },
];

var itemsFilter = items.filter(function (item) {
  return item.price <= 500;
});

let nameItems = items.map(function(item){
    return item.name
})

console.log(nameItems)