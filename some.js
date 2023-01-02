let items = [
    { name: "monitor", price: 600 },
    { name: "tv", price: 800 },
    { name: "pc", price: 1000 },
    { name: "mouse", price: 200 },
    { name: "keyboard", price: 300 },
  ];


let sameItem = items.some(function(item){
    return item.price <= 200
})

console.log(sameItem)
