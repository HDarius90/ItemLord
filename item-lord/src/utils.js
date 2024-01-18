import allItemsNames from "./items";

export const initPocket = () => [
    { name: allItemsNames[0], qty: 1, price: 3000 },
    { name: allItemsNames[1], qty: 2, price: 100 },
    { name: allItemsNames[2], qty: 1, price: 10 },
    { name: allItemsNames[3], qty: 3, price: 3500 },
    { name: allItemsNames[4], qty: 2, price: 5 },
  ];

  export const generateItemsForSale = () => {
    
    let itemsForSale = [];
    const randomLength = Math.floor(Math.random() * allItemsNames.length) + 5;
  
    for (let i = 0; i < randomLength && i < 15; i++) {
      let randomIndex = Math.floor(Math.random() * allItemsNames.length);
      let randomQty = Math.floor(Math.random() * 10) + 1;
      let randomPrice = Math.floor(Math.random() * 1000) + 1;
  
      itemsForSale.push({
        name: allItemsNames[randomIndex],
        qty: randomQty,
        price: randomPrice,
      });
  
      // Remove selected element from the array to avoid duplicates
      allItemsNames.splice(randomIndex, 1);
    }
  
    return itemsForSale;
  };