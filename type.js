// Q 1
// for (let i = 0; i < 5; i++) {
//     document.write("Hello World" + "<br>");
// }
// // Q 2

// for (let i = 1; i < 6; i++) {
//     document.write(i + "<br>");
// }
// // Q 3
//   let a = [4 ,3,2,11,6,9];

// function printEven(a){
//   let i;
//   for(i=0;i<a.length;i++){
//     if(i%2 == 0){
//       console.log(a[i]);
//     }
//   }  
// }
const numbers = [1, 2, 3];

const index = numbers.indexOf(3);
if (index > -1) {
  numbers.splice(index, 1);
}

console.log(numbers); 
// printEven(a);
//  Q 5 

// const numbers = [1, 2, 3,5,7,8,9];

// const ind = numbers.indexOf(3);
// if (ind > -1) {
//   numbers.splice(ind, 1);
// }

// console.log(numbers);
// // Q 7

//   var array = [1, 2, 3, 4, 5]
//   for(let i = 0; i < array.length; i++) {
//     setTimeout(() => {
//       console.log(array[i])
//     }, 1000);
//   }
// // Q 8
// function powernum(num1 ,num2){
//     res = 1
//     for (let i =0 ;i<num2 ; i++){
//         res = res* num1;
//     }
//     return res;
// }
// console.log(powernum(2,4))
// // Q 8
// for (var i =0 ;i <= 8 ; i++){
//     for(let ex =0 ; ex<= i;ex++){
//         document.write(ex + "<br/>");
//     }
//     document.write("<br/>")
// }
// // Q 9
function disCount(number){
    let count =0 
    while (number>0){
        number=Math.floor(number/10);count++ 
    }
    return count;
}
console.log (disCount(1234567))


var arr = [3, 6, 2, 56, 32, 5, 89, 32];
var largest = 0

for (var i = 0; i < arr.length; i++) {
    if (largest < arr[i] ) {
        largest = arr[i];
    }
}
console.log(largest);