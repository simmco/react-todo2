// function add (a, b) {
//   return a+b;
// }
//
// console.log(add(3,1));
//
//
// var toAdd = [9, 5];
//
// console.log(add(...toAdd));

var person = ['Michael', 24];
var personTwo = ['Jen', 29];

var names = ['Mike', 'Ben'];
var final = ['Michael', ...names];

final.forEach((name) => {
  console.log(`Hi ${name}`);
});
