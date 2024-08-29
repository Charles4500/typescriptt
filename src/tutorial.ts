//Functions
const names:string[]=['Charles','Guido','Python']
function nameInList(name:string):boolean{
  return (names.includes(name));
  
}
let nameToCheck = 'Charles'
//This has to be true for this program to execute
if(nameInList(nameToCheck)){
console.log(`The name ${nameToCheck} is there in the array`);

}
//If the first checks do not pass it then comes to the next line of code
else if (!nameInList(nameToCheck)){
console.log('There is no name');

}
else{
  console.log('Maybe you just add the name');
  
}