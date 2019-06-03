

// Refactor the code, make it really slim :)

// var name = "Francis";
// var lastname = "Jones"
// var age = 23;
// var obj
// function createObject(name,lastname,age){
//    obj = {
//        name:name,
//        lastname:lastname,
//        age:age,
//    }
//    return obj;
// }
// console.log(createObject(name,lastname,age))


const name = "Francis";
const lastname = "Jones"
const age = 23;
let createObject = (name,lastname,age) => {
    return {name,lastname,age}
}
console.log(createObject(name,lastname,age))

