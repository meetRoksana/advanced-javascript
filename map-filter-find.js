const numbers = [2, 3, 4, 5, 6, 7];
const output = [];

// for(let i = 0; i < numbers.length; i++){
//     const element = numbers[i];
//     const result = element * element;
//     output.push(result);
 
// } 

// console.log(output);



// function square (){
//     return element * element;
// }
// numbers.map(square);


// function square (){
//     return element * element;
// }

// const square = element => element * element;
// const square = x => x * x;


// numbers.map(function(element, index, array){
//     console.log(element, index, array);
// })


// const result = numbers.map(function(element){
//     return element * element;;
// })

// const result = numbers.map(x => x * x);
// console.log(result);


const bigger = numbers.filter(x => x < 5);
console.log(bigger);


const isThere = numbers.find(x => x < 3);
console.log(isThere);