let a = [1,2,3];
let b = new Array(1,2,3);
let c = new Array(3); // tricky

console.log(typeof(a));
console.log(typeof(b));
console.log(typeof(c));

let nested = [1, [2, 3], [4, [5]]];
let flat1 = nested.flat(); // One level
console.log(flat1); // Output: [1, 2, 3, 4, [5]]
let flat2 = nested.flat(Infinity); // All levels
console.log(flat2); // Output: [1, 2, 3, 4, 5]

let fruits = ['apple', 'banana', 'cherry', 'coconut'];
let someFruits = fruits.slice(1, 3);
fruits.splice(1, 1, 'mango', 'grape'); // Remove 1 item at index 1, add 'mango' and 'grape'
console.log(someFruits); // Output: ['banana', 'cherry']
console.log(fruits); // Output: ['apple', 'mango', 'grape', 'cherry']
console.log(rotateArray([1,2,3,4,5],2)); // Output: [4,5,1,2,3]

function rotateArray(arr:number[],k:number):number[]{
    let newArr = arr.slice(0, arr.length - k);
    let rotatedArr = arr.slice(-k).concat(newArr);
    return rotatedArr;
}