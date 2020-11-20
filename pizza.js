// Object holding toppings, prices, and pre-built pizzas 
const pizzaData = {
    toppings: [
        {name: "pepperoni",   display: {reg:  70, dbl: 70, sizePct:   5, spacing: 0.15, imgSrc:"img/pep.png"      }},
        {name: "olive",       display: {reg:  70, dbl: 70, sizePct:   3, spacing: 0.10, imgSrc:"img/olive.png"    }},
        {name: "sausage",     display: {reg:  20, dbl: 20, sizePct:   5, spacing: 0.20, imgSrc:"img/sosig.png"    }},
        {name: "mushroom",    display: {reg:  20, dbl: 20, sizePct:   7, spacing: 0.15, imgSrc:"img/shroom.png"   }},
        {name: "ham",         display: {reg:  10, dbl:  7, sizePct:  10, spacing: 0.45, imgSrc:"img/ham.png"      }},
        {name: "jalapeno",    display: {reg:  25, dbl: 15, sizePct:   6, spacing: 0.25, imgSrc:"img/pepper.png"   }},
        {name: "marshmallow", display: {reg:  20, dbl: 15, sizePct:   7, spacing: 0.30, imgSrc:"img/shmel.png"    }},
        {name: "pizza roll",  display: {reg:  20, dbl: 15, sizePct:   7, spacing: 0.25, imgSrc:"img/piza.png"     }},
        {name: "cinnamon",    display: {reg:  12, dbl: 12, sizePct:  16, spacing: 0.45, imgSrc:"img/cimnon.png"   }},
        {name: "avocado",     display: {reg:  10, dbl: 15, sizePct:  14, spacing: 0.40, imgSrc:"img/avogadro.png" }}
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
                {name: "jalapeno", position: "all", quantity:"reg"},
                {name: "cinnamon", position: "all", quantity:"reg"},
                {name: "avocado", position: "all", quantity:"reg"}
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
