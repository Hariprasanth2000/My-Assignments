const browserName="Chrome";
function getBrowserName(){
 if (browserName=="Chrome"){
 //var browserName="Edge"; //Var is function scope and its redeclared
 let browserName="Edge"; //Let is Block scope and its does not redeclare

 }
 console.log("Inside Data:"+browserName);

}
getBrowserName();

let gendertype="Female";
function printGender (){
 let color="Brown"
 if (gendertype==="Female"){
 var age=30;
 let color="pink";
 console.log("Inside the Block-Color " + color);

 }
 console.log("----------- "+color);
 console.log("Outside the Block-Color "+age);

}
printGender();
console.log("Global Gender "+gendertype);
gendertype = "Male";
console.log("After changing genderType to male");
printGender();
console.log("Global Gender "+gendertype);