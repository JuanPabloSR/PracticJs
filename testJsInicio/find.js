let items = [
    { name: "monitor", price: 600 },
    { name: "tv", price: 800 },
    { name: "pc", price: 1000 },
    { name: "mouse", price: 200 },
    { name: "keyboard", price: 300 },
  ];
  
 let itemName = items.find(function(item){
    return(items.name = "tv")
 })

 console.log(itemName)