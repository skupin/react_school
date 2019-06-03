

// We have an object with computers. And what we want to know, HOW many computer we have with MAC and how many with WINDOWS.

const computers = [
   {type:'Laptop',price:124, os:'Windows'},
   {type:'Desk',price:124, os:'Mac'},
   {type:'Desk',price:124, os:'Windows'},
   {type:'Laptop',price:124, os:'Mac'},
   {type:'Laptop',price:124, os:'Windows'},
];

let osResults = computers.reduce(function(start,computer){
    return computer.os === 'Mac' ? {mac:start.mac + 1, pc:start.windows}:
    {mac:start.mac, pc:start.windows + 1}
},{mac:0,pc:0})

console.log(osResults);