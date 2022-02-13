const anthem = "amar sonar bangla ami tomai vlobashi";
const words = anthem.split(" ");
console.log(words);
const word = anthem.split("a");
console.log(word);

const small=anthem.slice(5,12);
console.log(small);

const anthemPart=anthem.substr(5,12);
console.log(anthemPart);

const anthemPart2=anthem.substring(5,12);
console.log(anthemPart2);

//concat add kora jai onk name ar ki?  
const first='Nasir';
const sceand='Uddin'
// const fullName=first+sceand;
const fullName=first.concat(sceand).concat(369);
console.log(fullName);

// 
const wordFile=['a','b','c','d'];
const allJoin=wordFile.join(' Nasir.369 ');//" ," space , . ja isca dewa jabe
console.log(allJoin);