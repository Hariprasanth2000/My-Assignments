//1-Function Declaration
 function userprofile(name){
    //console.log("Hello "+ name +" !");
    console.log(`Hello ${name}! `);
   
}
userprofile("Hari");
 
//2- Arrow Function  
let double = (number)=>{
    return  number*2
}
console.log(double(10));
 
//3- Anonymous Function  
setTimeout(()=>{
    console.log("Time Delay");
    }, 2000)
 
setTimeout(function(){
console.log("Time Delays for 1sec");
},3000)
 
//4- Callback Function
function getUserData (callback){
    console.log("Fetching Data");
   
    setTimeout(()=>{
        callback();
 
    },4000);
}getUserData(function(){
    console.log("Call Back Function");
   
})
//2- Intersection of Two arrays
function inspection (arr1,arr2){
    let Result=[];
    for (let i=0;i<arr1.length;i++){
        if(arr2.includes(arr1[i])){
            if (!Result.includes(arr1[i])){
                Result.push(arr1[i]);
            }
        }
    }
    return Result;
}
console.log("Typical Cases");
let arr1 = [1,2,3,4,5]
let arr2=[2,3,5,7];
console.log(inspection(arr1,arr2));
 
console.log("All Common Elements");
let arr3 = [2,3,5,7]
let arr4=[2,3,5,7];
console.log(inspection(arr3,arr4));
 
console.log("No Common Elements");
let arr5 = [2,3,5,7]
let arr6=[1,4,6,8];
console.log(inspection(arr5,arr6));
 
//3- Call Back Function
const browser="Chrome";
function checkBrowserVersion(callback){
    console.log("Browser Version");
   
    setTimeout(()=>{
        callback(browser);
    },2000);
}
function browserversion(browsername){
    console.log("Browser Version: " + browsername);
}checkBrowserVersion(browserversion);
 
//4 - Fibannoci series
function fibonacci (n){
    if (n==0){
        return0;
    }
    if (n==1){
        return 1;
    }
    let first=0;
        let second=1;
        let next;
 
    for (let i=2;i<=n;i++){
        next=first+second;
        first=second;
        second=next;
       
       
    }
    return second;
 
}
console.log("Fibannoci Series: " + fibonacci(10));