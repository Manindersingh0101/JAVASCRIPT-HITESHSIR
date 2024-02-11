// console.log( 2 > 1);   //// output   true
// console.log( 2 >= 1);   //// output   true
// console.log( 2 < 1);    //// output   false
// console.log( 2 == 1);    //// output  false
// console.log( 2 != 1); //// output   true

// console.log("2" > 1);//// output   true
// console.log("02" > 1);//// output  true

// avoid thiss type of comparision conversion 
// code shoud be clean

// console.log(null > 0);     //// output   false
// console.log(null == 0);    //// output     false
// console.log(null >= 0);    //// output       true

// console.log(undefined == 0);//// output
// console.log(undefined > 0);//// output
// console.log(undefined < 0);//// output

/**The reason is that an equality check == and comparisons > < >= <= work differently. Comparisons convert null to a number, treating it as 0. That’s why (3) null >= 0 is true and (1) null > 0 is false.

On the other hand, the equality check == for undefined and null is defined such that, without any conversions, they equal each other and don’t equal anything else. That’s why (2) null == 0 is false.

null is treated in a special way by the Equals Operator (==). In a brief, it only coerces to undefined:

null == null; // true
null == undefined; // true
Value such as false, '', '0', and [] are subject to numeric type coercion, all of them coerce to zero.

 */



// // ===

 //console.log("2" === 2);//// output  false