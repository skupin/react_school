// We have an array of paintings, we need to loop the array and create a new array with messages like:
// “The Mona lisa is 200 x 200”

const paintings = [
  {name:'Mona lisa',width:200,height:200},
  {name:'The scream',width:400,height:600},
  {name:'The last supper',width:600,height:700}
]

let results = paintings.map(function(painting){
    return `
    <div>
        The ${painting.name} is ${painting.width} x ${painting.height}
    </div>
    `;
})

results.forEach(function(result){
    document.querySelector('body').insertAdjacentHTML('beforeend',result);
})

