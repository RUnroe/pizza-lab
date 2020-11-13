//General script file


let currPizza = {
    size: "lg",
    toppings: []
}





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



//On window load
document.addEventListener("DOMContentLoaded", () => {
    createLayout();


});

const createLayout = () => {
    //Make parent container
    let parentContainer = document.getElementById("pizza");
    
    //Make left side div
    let leftSide = document.createElement("div");
    leftSide.classList.add("leftSide");
    
    //Populate left side with prebuilt pizzas
    for(prebuiltPizza of pizzaData.prebuilt) {
        leftSide.appendChild(createOptionBtn(prebuiltPizza.name));
    }
    //Also add create custom pizza option
    leftSide.appendChild(createOptionBtn("Custom Pizza"));

    //Make and append pizza config menu
    leftSide.appendChild(createPizzaConfigMenu());

    parentContainer.appendChild(leftSide);
    //End left side

    //Make left side div
    let rightSide = document.createElement("div");
    rightSide.classList.add("rightSide");
    
    //Make pizza display, order, and total divs
    let pizzaDisplay = document.createElement("div");
    pizzaDisplay.classList.add("pizza");
    let order = document.createElement("div");
    order.classList.add("order");
    let total = document.createElement("div");
    total.classList.add("total");
    total.innerHTML = "Total: $0";
    //make order button
    let orderBtn = document.createElement("button");
    orderBtn.innerHTML = "Order";
    orderBtn.classList.add("orderButton");

    //Nest all elements
    rightSide.appendChild(pizzaDisplay);
    rightSide.appendChild(order);
    rightSide.appendChild(total);
    rightSide.appendChild(orderBtn);

    parentContainer.appendChild(rightSide);
    //End right side

    
}


//Helper method to make pizza btn options displayed on the left side of the screen
const createOptionBtn = name => {
    let container = document.createElement("button");
        container.classList.add("btn");
        container.classList.add("btn-lg");
        container.classList.add("btn-block");
        container.innerHTML = name;
        return container;
}



//Create the pizza config menu
const createPizzaConfigMenu = () => {
    let pizzaConfigMenu = document.createElement("div");
    pizzaConfigMenu.classList.add("configMenu");
    
    //Size choice
    let size = document.createElement("div");
    size.classList.add("config-row");
    //row title
    let rowTitle = document.createElement("p");
    rowTitle.innerHTML = "Size";
    size.appendChild(rowTitle);
    //radio button container. Radio buttons go in this container
    let radioBtnContainer = document.createElement("div");
    radioBtnContainer.classList.add("config-radio-container");
    let radioGroup = document.createElement("div");
    radioGroup.classList.add("config-radio-group");
    radioGroup.appendChild(createRadioDiv("sm", "size"));
    radioGroup.appendChild(createRadioDiv("md", "size"));
    radioGroup.appendChild(createRadioDiv("lg", "size", true));
    radioGroup.appendChild(createRadioDiv("xl", "size"));
    radioBtnContainer.appendChild(radioGroup);
    size.appendChild(radioBtnContainer);
    pizzaConfigMenu.appendChild(size);

    for(let i = 0; i < pizzaData.toppings.length; i++) {
        pizzaConfigMenu.appendChild(createConfigToppingRow(i, pizzaData.toppings[i]));
    }


    return pizzaConfigMenu;
}


const createConfigToppingRow = (index, topping) => {
    let toppingRow = document.createElement("div");
    toppingRow.classList.add("config-row");
    //row title
    let rowTitle = document.createElement("p");
    rowTitle.innerHTML = topping.name;
    toppingRow.appendChild(rowTitle);

    //Made radio button group for quantity of topping
    let radioBtnContainer = document.createElement("div");
    radioBtnContainer.classList.add("config-radio-container");
    let radioGroup = document.createElement("div");
    radioGroup.classList.add("config-radio-group");
    radioGroup.appendChild(createRadioDiv("Reg", ("amount" + index)));
    radioGroup.appendChild(createRadioDiv("Dbl", ("amount" + index)));
    radioGroup.appendChild(createRadioDiv("None", ("amount" + index)));
    radioBtnContainer.appendChild(radioGroup);
    
    //Made radio button group for position of topping
    radioGroup = document.createElement("div");
    radioGroup.classList.add("config-radio-group");
    radioGroup.appendChild(createRadioDiv("Left", ("position" + index)));
    radioGroup.appendChild(createRadioDiv("All", ("position" + index)));
    radioGroup.appendChild(createRadioDiv("Right", ("position" + index)));
    radioBtnContainer.appendChild(radioGroup);
    toppingRow.appendChild(radioBtnContainer);
    return toppingRow;
}



const createRadioDiv = (labelName, groupName, isChecked) => {
    let radioDiv = document.createElement("div");
    radioDiv.classList.add("config-radio-div");
    //make label. set label for  and label text equal to the name of the label 
    let label = document.createElement("label");
    label.htmlFor = labelName;
    label.innerHTML = labelName;
    //Create radio button and give it its proper group
    let radioBtn = document.createElement("input");
    radioBtn.setAttribute("type", "radio");
    radioBtn.id = labelName;
    radioBtn.setAttribute("name", groupName);
    radioBtn.setAttribute("value", labelName);

    //Set default checked
    if(isChecked) radioBtn.checked = true;
    //Append label and btn to container
    radioDiv.appendChild(label);
    radioDiv.appendChild(radioBtn);
    //Return container div
    return radioDiv;

}