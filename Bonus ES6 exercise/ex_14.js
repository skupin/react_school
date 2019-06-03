

// We want to run a function that greets the user by his name, but if the name is not provided we want to show a default name.

// Old ES5 code:

// function greeting(name){
//   if(name === undefined){
//       name = 'user'
//   }
//   return 'Hello '+ name;
// }
// console.log(greeting())

greeting = (name = 'user') => `Hello ${name}`

console.log(greeting('John'))