// function meraFun(){
//     // console.log('test1')
//     return 'a1b2c3'
// }

// const meraFun2 = meraFun();//this is incorrect u are storing the result of the meraFun() in this meraFun2 rather than making it a function copy

// console.log(meraFun2)



// // console.log(meraFun2());


// //if u want to make merafun2 as function same as meraFun just do 

// const meraFun3 = meraFun; //this is very important

// console.log(meraFun3);
// console.log(meraFun3());
// (()=>{console.log("iife magic")})();//iife 

function prntConsole(){
    console.log('this is a string from console.log')
    // return 'this is a string from console.log'
};

prntConsole();
const data = prntConsole();

//2 times the same msg is displayed

console.log (data)
//it says undefined because the function is not storing any value rather it has a instruction to do that is console.log msg



function scopeChk(){
    let a = "apple";
    var b = "mango";
    const c = "banana";

    return [a,b,c]
}

const value1 = scopeChk();

console.log(value1);
console.log(value1[1]);
console.log(value1[2]);


//function scope

const az = 'abc123';
let by = 456;
var cx = 'JavaScript';

function scopeChk2(){
    console.log(az)
    console.log(by)
    console.log(cx)
}

scopeChk2();  // all are accessible 

//you will get error in all the 3
// console.log(a)
// console.log(b)
// console.log(c)


const ab = function fun1() {
    console.log("hello");
};

ab(); // This works and will output: "hello"

fun1(); // This will throw a ReferenceError: fun1 is not defined