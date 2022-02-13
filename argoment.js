function addNumber(num1,num2){
    // console.log(arguments[1]);
    let result=0;
    for(const num of arguments){
        result=result+num;
    }
    // const result=num1+num2;
    return result;
}
const sum=addNumber(10,10,10,100,200);
console.log(sum);

//...................arry name........................
function getFullName(firstName,lastName){
    // const fullName=firstName+' '+lastName;
    let fullName='';
    for(const names of arguments){
        fullName=fullName+names +' ';
    }
    return fullName;
}
const names=getFullName('nasir', 'pallob', 'redu', 'arif','jalto','kalto');
console.log(names);