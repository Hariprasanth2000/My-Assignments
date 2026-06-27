//1--Reverse the Parameter and check isPalinrome
function input(data){
 let char=data.split("");
 let test="";
 for (let i=char.length-1;i>=0;i--){
 test=test+char[i];// reversing
 }
 return test;
}
function IsPalinrome(data){
 let Palinrome=input(data);
 if (data===Palinrome){
 console.log(data + " is Palinrome");
 return true;
 }
 else{
 console.log(data + " is not Palinrome");
 return false;
 }}

 let New = "Prasanth"
 console.log(input(New));
 console.log(IsPalinrome(New));

//2-- To check the positive Value,negative Value, null Value
function checkingnumbers (numbers){
 if (numbers>0){
 console.log(numbers+" is Positive Value"); 
 }
 else if (numbers<0){
 console.log(numbers+" is Negative Value");

 }
 else {
 console.log(numbers+" is Null Value");

 }
}
checkingnumbers(22);
checkingnumbers(-89);
checkingnumbers(0);

//3--To Lanch the Chrome Browser
function launchbrowser (browsername){
if (browsername=="chrome"){
 console.log("Chrome Browser will open");

}
else {
console.log("Someother browser will open");
}
}
launchbrowser("chrome");

//3--Run Type Testing using Switch Statement
function runtype (testType){
 switch (testType){
 case ("Sanity"):
 console.log("Sanity Testing is under progress");
 break;

 case ("Smoke"):
 console.log("Smoke Testing is under progress");
 break;

 case ("Regression"):
 console.log("Regression Testing is under progress");
 break;
 default :
 console.log("Smoke Testing is under progress");

 }
 }
 runtype("Regression");

//5-- Evaluate the student score based on Grade

function Grade (studentscore){
 switch(true){
 case (studentscore>=81):
 console.log("A Grade should be achieved by the student");
 break;
 case (studentscore>=71):
 console.log("B Grade should be achieved by the student");
 break;
 case (studentscore>=61):
 console.log("C Grade should be achieved by the student");
 break;
 default:
 console.log("D Grade should be achieved by the student");
 }
}
Grade(89);

//6-- Print Odd Numbers (1 to 25) using Debug Mode
function oddnumber(values){
 for (let i=1;i<=25;i++){
 if (i%2!==0){
 console.log(i+ " Is Odd Number");
 }
 }
}
oddnumber();