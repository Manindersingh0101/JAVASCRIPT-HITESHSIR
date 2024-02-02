// Primitive datatype
// they are call by value
// 7 types: String, Number, Boolearn, null, undefined, symbol, BigInt

const score = 100
const scorValue = 100.3

const isLoggedIn = false
const outsidetemp = null
let userEmmail;

const id = Symbol('123')
const anotherid = Symbol('123')

console.log(id === anotherid);


//const bigNumber = 31245453456464562165n

// reference(Non Primitive)

// Array, Objects, function

const heros = ["man", "ram"] // array
//object
let myObj = {
    name: "maninder",
    age: 20,
}

const myfunction = function(){
    console.log("hello world");
} 

console.log(typeof heros);