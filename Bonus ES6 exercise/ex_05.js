

// We have an array with products, and each product has a name and a price.

const products = [
   {name:'Iphone',price:200},
   {name:'Motorola',price:70},
   {name:'Samsung',price:150},
   {name:'Sony',price:98},
   {name:'Windows pone',price:10}
];

// We want to loop the array and print a div with the name and price, and if it is less than 100 bucks, we want to show an ON SALE.

// Here is the HTML and css if you felling lazy :)

// <div class="product">
//    <h1>Name</h1>
//    <strong>Price: $ xxxx </strong>
//    <span>On sale !!</span>
// </div> 

let template = "";

products.forEach(function(product){
    function onSale(){
        if(product.price < 100){
            return `<span>On sale !!</span>`
        } else {
            return '';
        }
    };
    template += `
        <div class="product">
        <h1>${product.name}</h1>
        <strong>Price: $ ${product.price} </strong>
        ${onSale()}
        </div>`
});

document.querySelector('body').insertAdjacentHTML("beforebegin",template);