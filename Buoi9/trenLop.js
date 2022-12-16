
/**
 * var let const => scope
 *
 *  câu lệnh đk
 *  toán tử
 *  vòng lặp
 *  function
 *  Thao array, string
 *  
 */

//Câu lệnh đk
// if (dk) {
//     code
// } else {

// }

// if (dk1) {

// } else if (đk2) {
//     dfgdf
// } else {

// }

// let a = dk ? kq1 : kq2;

// switch case
// let a = 3;

// switch (a) {
//   case 3:
//     alert("Too small");
//     break;
//   case 4:
//     alert("Exactly!");
//     break;
//   case 5:
//     alert("Too big");
//     break;
//   default:
//     alert("I don't know such values");
// }

// alert
// prompt // có thể gán biến
// confirm

// toán tử số học + - * / % **
// ++ --
// += -= *= /=

//// so sanh == vs ===

// ==: so sanh tương đối
// ===: so sánh tuyệt đối (so sánh thêm cả kiểu liệu)

// console.log(1 === '1');

// OR: || , AND: &&, NOT: !
// let a = 2,
//   b = 3;
// if (a == 2 && b == 5) {
//   return true;
// } else {
//   console.log(false);
// }

// console.log(a == 2 && b == 5);

// return a == 2 && b == 5;
// Toán tử kết hợp :   ??   ||

// let user = "Hưng";
// console.log(user);
// console.log(user ?? "Anonymous"); // Anonymous (user is undefined)
// user ?? "Anonymous"
//         ||
// if (user != undefined) {
//     return user
// } else {
//     return "Anonymous";
// }

// let a = null, undefined, 0, '';
// console.log(Boolean(a));

///Vòng lặp

// let array = [1, 2, 3];

// console.log(array.length);

// for (let i = 0; i < array.length; i++) {
//   const element = array[i];
//   console.log(element);
// }

//for in
// let obj = {
//   name: "A",
//   class: "U",
//   address: "HN",
// };

// // for (const key in obj) {
// //   console.log(obj[key]);
// // }

//for of
// let arr = [1, 2, 3]

// for (const s of arr) {
//     console.log(s);
// }

// for (const key in arr) {
//     console.log(key+': ' + arr[key]);
// }

// => for, for in, for of

function say(name) {
  console.log(name + " nói cái gì đê");
}

say("abc");

//3 cách viết 1 function
//Function Declaration
function tinhtong1(a, b) {
  return a + b;
}
//Function Expression
const tinhtong2 = function (a, b) {
  return a + b;
}

// console.log(tinhtong2(2, 3));

//Arrow function
// const tinhtong3 = (a, b) => a + b;  //code trên 1 
const tinhtong31 = (a, b) => {
  return a + b;
};
// const tinhtong3 = (a, b) => console.log(a + b);
const tinhtong32 = (a, b) => {
  console.log(a + b);
};

const great = (a, b) => {
  if (a > b)
      return "a is greater";
  else
      return "b is greater";
}

// console.log(great(7,5));
// Footer
// © 2022 GitHub, Inc.
// Footer navigation
// Terms
// Privacy
// Security
// Status
// Docs
// Contact GitHub
// Pricing
// API
// Training
// Blog
// About
// 1