// Object holding toppings, prices, and pre-built pizzas 
const pizzaData = {
    toppings: [
        {name: "pepperoni",   display: {reg: 70, dbl: 70, sizePct: 5, spacing: 0.15, imgSrc:"img/pep.png"  }},
        {name: "olive",       display: {reg: 70, dbl: 70, sizePct: 3, spacing: 0.10, imgSrc:"img/olive.png"}},
        {name: "sausage",     display: {reg: 20, dbl: 20, sizePct: 4, spacing: 0.20, imgSrc:"img/sosig.png"}},
        {name: "mushroom",    display: {reg: 10, dbl: 15, sizePct: 5, spacing: 0.15, imgSrc:""             }},
        {name: "ham",         display: {reg: 10, dbl: 15, sizePct: 5, spacing: 0.15, imgSrc:""             }},
        {name: "jalapeno",    display: {reg: 10, dbl: 15, sizePct: 5, spacing: 0.15, imgSrc:""             }},
        {name: "marshmallow", display: {reg: 10, dbl: 15, sizePct: 5, spacing: 0.15, imgSrc:""             }},
        {name: "pizza roll",  display: {reg: 10, dbl: 15, sizePct: 5, spacing: 0.15, imgSrc:""             }},
        {name: "cinnamon",    display: {reg: 10, dbl: 15, sizePct: 5, spacing: 0.15, imgSrc:""             }},
        {name: "avocado",     display: {reg: 10, dbl: 15, sizePct: 5, spacing: 0.15, imgSrc:""             }}
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
    ],
	assets: {
		base: 'img/base.png',
	}
}



//Model of built pizza
// let objectName = {
//     size: "sm",
//     toppings: [
//         {name: "pepperoni", position: "left", quantity:"reg"}, 
//         {name: "olives", position: "all", quantity:"dbl"} 
//     ]
// }
