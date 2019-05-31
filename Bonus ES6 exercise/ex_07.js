

// We have a list of cars with a brand and a price, and need to create a new array, convert the price to a different currency, and return a string like “Ford is 40000 rupies”.

const cars = [
   {name:'Ford',price:200},
   {name:'Nissan',price:400},
   {name:'Mercedes',price:600}
]

const selection = document.querySelector('.priceList');
const currencyExange = 50;

function convertPrice(price){
    return price * currencyExange;
}

const priceList = cars.map(function(car){
    return `${car.name} is ${convertPrice(car.price)}$RD`;
});

priceList.forEach(function(item){
    selection.insertAdjacentHTML('beforeend',`<li>${item}</li>`);
})