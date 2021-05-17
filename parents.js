// array destructuring and arrow functioning
let sum=function(a,b,c){
 var d= (a+b);
 var f=(d*c);
 console.log(f)
}
 sum(2,3,4)
  
const consist=(x,y,z)=>{
  var add=x+y
  var multiply=add*z
  console.log(multiply)
  }
  consist(40,50,10)
let seive=(sum,division,module)=>{
  var concat=sum/division
  var remeinder=concat%module
  console.log(remeinder)
   }
  seive(10,5,10)
  
  
  //export user before declaration
export class Person{
constractor(firstName,surname,age){
  this.firstName=firstName
  this.surname=surname
  this.age=age
    }
  }
  //say Hello.js
function greet(industrialdesign){
  console.log(`Hello, ${Industriadesign}`)
  }
function walk(street){
  console.log(`How  is the ${street}`)
  }
  export{greet,walk}
  //main.js
  import {greet,walk}from'./say Hello.js';
  greet("python");
  // walk("new home");
// Asynchromous functions
console.log("plant kunde");
setTimeout(function(){
console.log("Water kunde")
},3000)
//callbacks functions
setInterval(function() {
    console.log('hello');
   }, 1000)
   function greeting(name){
       console.log(`Hello${name},welcome to js class`)

   }
   function introduction(firstname,secondname,callback){
       const fullName=`${firstname}${secondname}`;
       callback(fullName)
   }
   introduction("john,doe",greeting);
//Defining functions
function prepare(ingredients, callback) {
    console.log("Preparing " + ingredients);
    callback();
}

//callback function
function chop(){
    console.log("Chopping");
}

//Calling the function
prepare("onions and garlic", chop);
// callback arrow functions
const oddnums =(nums)=>{
if(nums%2!==0){
return nums
}
};
var bucket=(1,23,4,5,6,7,9,10,25)
//use of fillter passing oddnums as a parameter
var odd=nums.filter(oddnums)
console.log(odd)