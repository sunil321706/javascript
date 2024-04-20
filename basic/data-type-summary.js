// primitive

// 7 types : string, number, boolearn, null, undefined, symbol, bigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 645487465985949899498n



// reference (non primitive)

// aray, objects, functions  

const heros = ["shaktiman", "naagraj", "doga"]
let myOb = {
    name: "sunil",
    age: 21,
}

const myFunction = function(){
    console.log("sunil");
}

console.log(typeof anotherId);