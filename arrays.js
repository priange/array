// Given an array of strings, use a function to reverse all the elements in the string 
// // in ascending order and the specific elements in descending order

// function sorted_in_descending_order(string){
//     return string.split('').reverse().join()
// }
// let string=["Omara","Emma","Anabo","Jane"]
// console.log(sorted_in_descending_order(string))
// // Given an array of objects, each object representing a person with a name 
// // and age property, write a function that returns the sum of all people who are less than 18 years.
// const peoples = [
//   { name: 'Alice', age: 17 },
//   { name: 'Eunice', age: 22 },
//   { name: 'Charlie', age: 14 },
//   { name: 'Max', age: 19 },
// ];
// function ages(age){
//     let sum=0;
// const summed=age.reduce((person,object)=>{
//     return person +object.age;
    
// });
//     if (age<18){
//     sum+=age
//     return sum
// }
// }
// console.log({summed})






// // Using JS functions and an array of numbers, return positive if an element 
// // within the array is positive, negative if an element is negative, else zero
function returnNumbers(numbers){
    for(i in numbers){
    for(let i=0;i<numbers.length;i++){
        if(i < 0){
            return i+ "is negative"
        }
        else if(i >= 0){
            return i + "is positive"
        }
        else{
            return i 
        }
    }
}
}
let numbers=[2,5,1,8,0]
console.log(returnNumbers(numbers))
// // Given an array of objects, where each object represents an employee with an id,
// //  name, and salary property, write a function that returns a new array of employee 
// // objects sorted by their salary in ascending order.
