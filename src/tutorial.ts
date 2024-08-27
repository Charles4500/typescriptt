//Functions
let arrayNames:string[]= ['Charles','Guido']

function checkName(name:string):boolean{
  return arrayNames.includes(name);
  
}
 let nameExists = 'Guido'
 if(checkName(nameExists)){
  console.log(`The name is ${nameExists} exists`);
 }else{
  console.log(`The name not ${nameExists}`);
 }

