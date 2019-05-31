

// We have an empty UL in the HTML

// <ul class="players"></ul> 

// An object with of NBA players.

// const players = [
//    {jersey:56,name:"Djounte Murray",position:"Point guard",PPG:2.6},
//    {jersey:98,name:"Dennis Rodman",position:"Small Forward",PPG:10.8},
//    {jersey:1,name:"Michael Jordan",position:"Small Forward",PPG:345.6},
//    {jersey:2,name:"Lebron James",position:"Shooting Guard",PPG:26.7},
//    {jersey:33,name:"Patrick Ewing",position:"Center",PPG:20.2}
// ]

// Now we need to loop the list , and generate a LI for each and in addition we must round the RPG down.

// For example:

// “56 - Djounte Murray -- Position: Point guard -- RPP: 2”

const content = document.querySelector('.players');

const players = [
   {jersey:56,name:"Djounte Murray",position:"Point guard",PPG:2.6},
   {jersey:98,name:"Dennis Rodman",position:"Small Forward",PPG:10.8},
   {jersey:1,name:"Michael Jordan",position:"Small Forward",PPG:345.6},
   {jersey:2,name:"Lebron James",position:"Shooting Guard",PPG:26.7},
   {jersey:33,name:"Patrick Ewing",position:"Center",PPG:20.2}
]

function addPlayer(){
    let message;
    for (let index = 0; index < players.length; index++) {
        let element = players[index];
        message = `<li>
        ${element.jersey} - ${element.name} -- Position: ${element.position} -- RPP: ${Math.floor(element.PPG)}</li>`;
        content.insertAdjacentHTML("beforeend", message);
    }
    
}

addPlayer();