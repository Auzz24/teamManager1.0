

// const myShoe = {
//     size: 5,
//     color: "blue",
//     brand: "Nike",
//     price: 100,
//     onSale: function() {
//         return this.price / 2;
//     }
// }

const { expect } = require("@jest/globals");
const inquirer = require("inquirer");
const { test } = require("picomatch");

// console.log(myShoe.price);
// console.log(myShoe.onSale())



class Shoe {
    // properties
    constructor(size, color, brand, price) {
        this.size = size;
        this.color = color;
        this.brand = brand;
        this.price = price;
    }

    // methods
    onSale() {
        return this.price / 2;
    }

}

module.exports = Shoe;



// inquirer.prompt([{
//         type: "input",
//         message: "What is the size of your shoe?",
//         name: "size"
//     },
//     {
//         type: "input",
//         message: "What is the color of your shoe?",
//         name: "color"
//     }
// ])
//     .then(answers => {
//         const myShoe = new Shoe(answers.size, answers.color, "Nike", 90);

//         console.log(myShoe)
//     })