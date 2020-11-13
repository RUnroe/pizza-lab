// Object holding toppings, prices, and pre-built pizzas 
const pizzaData = {
    toppings: [
        {name: "pepperoni", imgSrc:""},
        {name: "olive", imgSrc:""},
        {name: "sausage", imgSrc:""},
        {name: "mushroom", imgSrc:""},
        {name: "ham", imgSrc:""},
        {name: "jalapeno", imgSrc:""},
        {name: "marshmallow", imgSrc:""},
        {name: "pizza roll", imgSrc:""},
        {name: "cinnamon", imgSrc:""},
        {name: "avocado", imgSrc:""}
    ],
    prices:{
        "sm": 6.99,
        "md": 9.99,
        "lg": 12.99,
        "xl": 16.99
    },
    prebuilt:[
        {
            name: "Pepperoni Pizza",
            toppings: [
                {name: "pepperoni", position: "all", quantity:"reg"}
            ]
        },
        {
            name: "Cowboy Pizza",
            toppings: [
                {name: "pepperoni", position: "all", quantity:"reg"},
                {name: "sausage", position: "all", quantity:"reg"},
                {name: "olive", position: "all", quantity:"reg"},
                {name: "mushroom", position: "all", quantity:"reg"}
            ]
        },
        {
            name: "Vowel Pizza",
            toppings: [
                {name: "avocado", position: "all", quantity:"reg"},
                {name: "olive", position: "all", quantity:"reg"}
            ]
        },
        {
            name: "All Meat Treat Pizza",
            toppings: [
                {name: "pepperoni", position: "all", quantity:"reg"},
                {name: "sausage", position: "all", quantity:"reg"},
                {name: "ham", position: "all", quantity:"reg"},
                {name: "marshmallow", position: "all", quantity:"reg"}
            ]
        },
        {
            name: "Spooky Pizza",
            toppings: [
                {name: "cinnamon", position: "all", quantity:"reg"},
                {name: "avocado", position: "all", quantity:"reg"},
                {name: "jalapeno", position: "all", quantity:"reg"}
            ]
        }
    ]
}



//Model of built pizza
// let objectName = {
//     size: "sm",
//     toppings: [
//         {name: "pepperoni", position: "left", quantity:"reg"}, 
//         {name: "olives", position: "all", quantity:"dbl"} 
//     ]
// }