// Given the starting code of:

// x = 1
// y = 2
// Write a block of code that will print out the largest value.

// Using the given values as an example, your code should print out 2.

// To verify your code is working properly, try and change the values of x and y.

// As an additional challenge, print out The values are identical. if x and y have the same value.

let x = 1
let y = 2

// const largerNumber = (x,y)=> {
    if (x === y) {
        console.log("The values are identical.")
    }
    if (x > y) {
        console.log(x)
    } else {
        console.log(y)
    }
// }

// largerNumber(5,3)