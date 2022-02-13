function myFriend(friend){
    if(Array.isArray(friend)==false){
        return 'this is a rong'
    }
let meg=friend[0];
for(const friends of friend){
    if(friends.length>meg.length){
        meg=friends;
    }
}
return meg;
}

const friends =['nasir','pallob','redu','arif','kodu'];
const result=myFriend(friends);
console.log(result);
//................index..............................
if(friends.indexOf('fox')!=-1){
    console.log('done');
}
else{
    console.log('Tor name thik hoi nai');
}
//..........................includes....................
if(friends.includes('nasir')){
    console.log('done two');
}

//...............concat....................

