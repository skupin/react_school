// Refactor the code using ES6 and the rest operator.

// function totalDistance(distance1,distance2,distance3){
//    var distances = [distance1,distance2,distance3]
//    var total = 0;
//    for(var i = 0; i < distances.length;i++){
//        total += distances[i]
//    }
//    return total;
// }
// console.log(totalDistance(200,100,200))


totalDistance = (...args) => {
   return args.reduce(function(total, arg){
       return total + arg
   }, 0)
}
console.log(totalDistance(200,100,200))

