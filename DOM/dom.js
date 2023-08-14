// how to select element 

// method 01 select element by ID
const box1= document.getElementById('tomato_box');
console.log(box1);

// method01
// const box1= document.querySelector('#tomato_box');
// console.log(box1);

// const box1= document.querySelectorAll('#tomato_box');
// // we get output NodeList
// console.log(box1);

// Method02 select element by className
const box2 = document.getElementsByClassName('box-2');
//we get output HTMLCollection
console.log(box2);

// const box2 = document.querySelector('.box-2');
// console.log(box2);

// const box2 = document.querySelectorAll('.box-2');
// //we get output NodeList
// console.log(box2);


// Method 03 select tag
// const box3 = document.getElementsByTagName('h3');
// //we get output HTMLCollection
// console.log(box3);

// const box3 = document.querySelector('h3');
// console.log(box3);

const box3 = document.querySelectorAll('h3, p');
//we get output NodeList
console.log(box3);