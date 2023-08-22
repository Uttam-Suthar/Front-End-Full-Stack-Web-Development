
    const goods = {
    apple: { price: 150, quantity: 2 },
    banana: { price: 75, quantity: 3 },
    orange: { price: 125, quantity: 1 }
    };

    function calculatePrice(goods) {
    let totalPrice = 0;
    for (let item in goods) {
    const { price, quantity } = goods[item];
    const itemTotalPrice = price * quantity;
    totalPrice += itemTotalPrice;
    }
    return totalPrice;
    }


    //     function calculatePrice(goods){
//         //Implement your function here
        
//           let totalPrice = 0;

//   for (let item in goods) {
//     if (goods.hasOwnProperty(item)) {
//       let { price, quantity } = goods[item];
//       totalPrice += price * quantity;
//     }
//   }
        
//   return totalPrice;
//     }