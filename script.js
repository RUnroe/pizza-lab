//General script file

//Pass in pizza object (see pizza.js for example model) and this method will return the price.
const calculatePrice = pizzaObject => {
    //Base price based on size
    let price = pizzaData.prices[pizzaObject.size];
    //For each topping listed: Add 1 to price if quantity == "full", 2 if quantity == "double"
    for(topping of pizzaObject.toppings) {
        if(topping.quantity == "full") price += 1;
        else if(topping.quantity == "double") price += 2;
    }
    return price;

}

//Test code to verify price calculation works
// let objectName = {
//     size: "sm",
//     toppings: [
//         {name: "pepperoni", position: "left", quantity:"full"}, 
//         {name: "olives", position: "all", quantity:"double"} 
//     ]
// }

// console.log(calculatePrice(objectName));