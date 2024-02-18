// const name = "maninder"
// const repoCount = 395

// this syntax is not really good nowdays
//console.log( name + repoCount + " Value")   // output = maninder395 value

//console.log(`hello my name is ${name} and my repo count is ${repoCount} `);


const gameName = new String('hitesh-hc')

//  console.log(gameName[0]);           /// output = m // key value pair access
//  console.log(gameName.__proto__);    /// output  {}    // two underscore before proto and after it 

// console.log(gameName.length);            /// output  =  10
// console.log(gameName.toUpperCase());      /// output =  MANINDER-S
// console.log(gameName.charAt(2));        /// output   =  n
// console.log(gameName.indexOf('i'));     /// output   =  3


const newString = gameName.substring(0, 4 )     
 console.log(newString);                      /// output = hite /// leat value does not include

 
 const anotherString = gameName.slice(-8, 4 )      
 console.log(anotherString);                     /// output = ite

 const newStringOne = "   maninder   "
 console.log(newStringOne);                      /// output
 console.log(newStringOne.trim());              /// output = maninder teim is use for  remove the starting and backspace 


const url ="https:/hitesh.com/hitesh%20cmanider"

console.log(url.replace('%20', '-'));   // output = https:/hitesh.com/hitesh-cmanider // replace use for remove the value 

console.log(url.includes('hitesh'));    // output =  true 
 console.log(url.includes('maninder'));  // output =  false


 console.log(gameName.split('-'));      // output  // 