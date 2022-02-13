const numbers = [6, 4, 7, 1, 3, 9, 2, 8, 5];
// const sortNumber = numbers.sort();
// console.log(sortNumber);

const friends=['kabli','jomim','rajjak','fark','dipjol','alo'];
// const sortFriend=friends.sort();
// console.log(sortFriend);

const reverses=friends.sort().reverse();
// console.log(reverses);

const numberse = [6, 4, 7, 55,111,222,888,1, 3, 9, 2, 8, 5];
const soNumber=numberse.sort(function(a,b){
    return a-b;
});
console.log(soNumber);