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





