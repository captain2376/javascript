//import and export--
// import * as apiKey from './util.js'

// console.log(apiKey.default);
//variables--
// let userMessage = "Hello, World!";
// console.log(userMessage);
// userMessage = "Hello, World! I am learning JS";
// console.log(userMessage);
// const var1="constant variable";
// console.log(var1);
//constants must not be reassigned
//operators--
// console.log("hello"+"world");
// console.log(2 === 3);//used to check the value and type of the variable
//operators like ===,!==,>=,<=,&&,||,! are used in if else statements
//functions--can be called many times
// function add(a,b){
//     return a+b;
// }
// console.log(add(2,3));
// function greet(name){
//     console.log("Hello...! "+name);
// }
// greet("Sindhu");
// function greetUser(userName,userMessage){
//     return "Hello...! "+userName+" "+userMessage;
    
// }
// console.log(greetUser("Sindhu","Good Morning"));
//ARROW FUNCTIONS--
//function keyword is replaced by =>
// export default (userName,message)=>{
//     console.log("Hello...! "+userName+" "+message);
//     return userName+message;
// }
// //one parameter
//  let greet  = user=>{console.log("Hello...! "+user);}//if only one parameter is there
//  greet("Sindhu");
// //returns only one statement
// let number =num=>num+num;
// console.log(number(2));
//RETURNING OBJECT
// let createObject = number => ({ age: number });
// console.log(createObject(2));
//OBJECTS--
// const user={
//     name:"Sindhuja",
//     age:22,
    
// }
// console.log(user.name);
//objects can also store functions
// const user={
//     name:"Sindhuja",
//     age:22,
//      greet ()  {
//         console.log("Hello...! "+this.name);
//      },
//      arrowGreet:(user)=>{
//         console.log("Hello...! "+user.name);
//      }
// }
// user.greet();
// user.arrowGreet(user);
// //blue print of object with class keyword
// class User{
//     //constructor is a special method used to initialize the object use this to accept parameters
//     constructor(name,age){
//         this.name=name;
//         this.age=age;
//     }
//     greet(){
//         console.log("Hii...! ");
//     }
// }
// //by instantiating the class we can create objects
// const user1 = new User("Captain",22);
// console.log(user1);
// user1.greet();
//ARRAYS--can contain any king of values -even array of arrays-can access elements using index
//  const hobbies=["Sports","Cooking","Reading"];
//  console.log(hobbies[1]);
// //couple of buitlin utitlity methods
// hobbies.push("Programming");//adds element to the end of the array
// console.log(hobbies);
// //find index of an element
// const index=hobbies.findIndex((item)=>{
//     return item ==="Cooking";
// });
// console.log(index);
// const arrowindex =hobbies.findIndex(item=>item==="Sports");
// console.log(arrowindex); 
// const editedHobbies=hobbies.map((item)=>item+"!");
// console.log(editedHobbies);
//destructuring
// const userName=["Harry","Albus"];
// const firstName=userName[0];
// const secondName=userName[1];
// const [fname,lname]=["max","will"]
// console.log(fname,lname);
// //desrtucturing objects
// const user={
//     name:"Sindhu",
//     age:22
// }
// const name=user.name;
// const age=user.age;
// const {person:nameP,plan}={
//     person:"p1",
//     plan:"escape"
// }
// console.log(nameP,plan);
// //spread  operator
// const hobbies=["Playing","Planning","Printing"]
// const newHobbies=["Reading"];
// const mergedHobbies=[...hobbies,...newHobbies]
// //pulls out elements from array and them as elements to new array
// console.log(mergedHobbies);
// //spread operator can also be used on objects
// const extendedUser={
//     isAdmin:true,
//     ...user,
     
// }
// console.log(extendedUser);
//control structures
//prompt is a fucntion which will prompt the user for input
// const password=prompt('Your Password');
// if (password==="sindhu") {
//     console.log("Welcome");
// }
// else if (password==='any') {
//     console.log("Wrong Password");
// }
// else{
//     console.log("Try Again!");
// }
// //for Loop
// const list=["1","2","32"]
// for(const x of list){
//     console.log(x);
// }
//DOM-react way
//in js we can send function as an argument to a function
//TRICKY PARTS
//YOU CAN PASS FUNCTIONS AS VALUES TO OTHER FUNCTIONS
//Example timeout needs a function as param
// function handleTimeout(){
//     console.log("Timed out");
// }
// const handleTimeout2=()=>console.log("Timed out Again..");
// setTimeout(handleTimeout,1000);//this is an anonymous function
//     //name is enough to pass function as param
//     //second arg-is not a funtion -number of millisec js should wait to execute the function
// //setTimeout(handleTimeout)--this is function sending as a parameter/vlaue and can set timeout to execute
// //setTimeout(handleTimeout())--here we get the return value of the function and cannot set timeout as it executes instanlty
// //store them in const or var to make them unanonymoues arrow functions
// setTimeout(handleTimeout2,2000);
// //or you can use anonymous functions --arrow functions
// setTimeout(()=>{
//     console.log("This is an anonymous function..");
// },4000);
// //we are just defining the function when we send functins as param but after the milliseconds itwill be execudted
// // not only built-in functions - we can also build our own functions and send function as params to them
// function greeter(greetFn){
// greetFn();
// }
// greeter(() =>{console.log('Hi');})
// //"() =>{console.log('Hi');}" this function passed as a value -greetFn and then greetFn is executed
// //DEFINE FUNCTIONS INSIDE OF FUNCTIONS---
// function init(){
//     function greet(){
//         console.log("greet");
//     }}//greet SCOPE in inside inti 
//REFERENCE VS PRIMITIVE VALUES
//WE cant edit primitives in js they produce a new value instead of editing the old value
//objects and arrays can be edited --the original can be edited
//arrays are objects and objects in js are called reference values  
//we can edit reference values because they store the address unlike primitive which store the value so 
//it is the reason we can edit their values
const hobbies=["dancing","painting"]
var new_hobby="playing"
hobbies.push(new_hobby)
console.log(hobbies);