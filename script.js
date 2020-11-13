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


document.addEventListener("DOMContentLoaded", () => {
    let parentContainer = document.getElementById("pizza");
    
    let leftSide = document.createElement("div");
    leftSide.classList.add("leftSide");
    
    for(prebuiltPizza of pizzaData.prebuilt) {
        leftSide.appendChild(createOptionBtn(prebuiltPizza.name));
    }
    leftSide.appendChild(createOptionBtn("Custom Pizza"));
    parentContainer.appendChild(leftSide);

    let rightSide = document.createElement("div");
    rightSide.classList.add("rightSide");
    
    let pizzaDisplay = document.createElement("div");
    pizzaDisplay.classList.add("pizza");
    let order = document.createElement("div");
    order.classList.add("order");
    let total = document.createElement("div");
    total.classList.add("total");
    total.innerHTML = "Total: $0";
    let orderBtn = document.createElement("button");
    orderBtn.classList.add("orderButton");

    rightSide.appendChild(pizzaDisplay);
    rightSide.appendChild(order);
    rightSide.appendChild(total);
    rightSide.appendChild(orderBtn);

    parentContainer.appendChild(rightSide);

});


const createOptionBtn = name => {
    let container = document.createElement("button");
        container.classList.add("btn");
        container.classList.add("btn-lg");
        container.classList.add("btn-block");
        container.innerHTML = name;
        return container;
}
