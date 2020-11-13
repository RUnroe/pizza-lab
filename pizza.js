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
                {name: "pepperoni", position: "all", quantity:"full"}
            ]
        },
        {
            name: "Cowboy Pizza",
            toppings: [
                {name: "pepperoni", position: "all", quantity:"full"},
                {name: "sausage", position: "all", quantity:"full"},
                {name: "olive", position: "all", quantity:"full"},
                {name: "mushroom", position: "all", quantity:"full"}
            ]
        },
        {
            name: "Vowel Pizza",
            toppings: [
                {name: "avocado", position: "all", quantity:"full"},
                {name: "olives", position: "all", quantity:"full"}
            ]
        },
        {
            name: "All Meat Treat Pizza",
            toppings: [
                {name: "pepperoni", position: "all", quantity:"full"},
                {name: "sausage", position: "all", quantity:"full"},
                {name: "ham", position: "all", quantity:"full"},
                {name: "marshmallow", position: "all", quantity:"full"}
            ]
        },
        {
            name: "Spooky Pizza",
            toppings: [
                {name: "cinnamon", position: "all", quantity:"full"},
                {name: "avocado", position: "all", quantity:"full"},
                {name: "jalapeno", position: "all", quantity:"full"}
            ]
        }
    ]
}



//Model of built pizza
// let objectName = {
//     size: "sm",
//     toppings: [
//         {name: "pepperoni", position: "left", quantity:"full"}, 
//         {name: "olives", position: "all", quantity:"double"} 
//     ]
// }