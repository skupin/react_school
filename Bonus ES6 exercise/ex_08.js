

// We have a list of channels and we want to create a new array only with the premium channels.

const channels = [
   {name:'HBO',premium:true},
   {name:'LIFE',premium:false},
   {name:'Cinemax',premium:true},
   {name:'Cooking channel',premium:false},
   {name:'WOBI',premium:false}
];

const select = document.querySelector('.channels');

const filteredChannels = channels.filter(function(channel){
    return channel.premium;
})

filteredChannels.forEach(function(channel){
    select.insertAdjacentHTML('beforeend',`<li>${channel.name}</li>`)
})