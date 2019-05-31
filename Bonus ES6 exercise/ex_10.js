// We need to calculate how many Km or Miles the user traveled.

const initialDistance = 0;
const trips = [
   {to:'Brazil',distance:1000},
   {to:'Chine',distance: 2500},
   {to:'India',distance: 3000}
]

let totalDistance = trips.reduce(function(sum, trip){
    return sum + trip.distance
}, initialDistance)

console.log(totalDistance)