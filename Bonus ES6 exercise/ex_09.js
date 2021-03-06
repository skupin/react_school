

// We want to use the channels example, but this time we have a user object, with some setting.So we need to get the NOT premium channels and the PREMIUM CHANNELS whenever we call the methods.

// See example below.

const channels = [
   {name:'HBO',premium:true},
   {name:'LIFE',premium:false},
   {name:'Max',premium:true},
   {name:'Cooking channel',premium:false},
   {name:'WOBI',premium:false}
];
let user = {
   name:'Francis',
   premium:true,
   premiumChannels(){
       return channels.filter((channel) => {
           return channel.premium && this.premium;
       })
   },
   channels(){
       return channels.filter((channel) => {
           return !channel.premium;
       })
   }
}
console.log(user.premiumChannels())
// brings HBO and MAX
console.log(user.channels())
// brings LIFE, COOCKING CHANNEL AND WOBI

