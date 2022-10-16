
// Given an array of numbers, console.log true if any two numbers in the array add to zero, otherwise log false.

// For example:

// [1, 4, 11, 2, 37, -4] should log true because 4 and -4 add to 0.

// [0, 21, 33, 6, 0, -9] should log true because 0 and 0 add to 0.

// [0, 1, 2, 3, 4, 5] should log false because no two numbers add to 0.
// Starting array
let array = [28, 43, -12, 30, 4, 0, 12]

// Write your solution below:

const addToZero = (arr) => {
    let equalsZero = false
    for(i=0; i<arr.length; i++){
        for(j=0; j<arr.length; j++){

            if(arr[i] + arr[j] === 0){
                equalsZero = true
            }
        }
    }
    console.log(equalsZero)
}
addToZero(array)

// const addToZero = (arr) => {
    
//     for(i=0; i<arr.length; i++){
//         for(j=0; j<arr.length; j++){

//             if(arr[i] + arr[j] === 0){
//                 console.log(arr[i], arr[j])
//                 console.log('true')
//                 break;
                
//             }
//         }
//     }

// }
// addToZero(array)
// Sample of breaking early in a forloop- does not exit the forloop, just discontinues the interatation early- this sample of code will yield "true, true, true"