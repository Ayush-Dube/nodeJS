//var
var a = 101;
function varFun(){
    var b = 201;
    console.log(a,b)
}

varFun();
// console.log(b)// this will error in all the cases whether var,let const


/*
const ab =77
const ab =78  // this is redeclaration (bcoz we have used const keyword )

ab = 45 // this is reassigned (no keyword used)
console.log(ab);

can not reassign 
can not be redeclared
*/

//spread operator 
const arr1 = [21,22,23,24]
const arr2 = [31,32,33,34]
const arr3 = [...arr1,...arr2]
console.log(arr3);
const obj1 = {value1:101,value2:102,value3:103}
const obj2 = {...obj1,value4:104,value5:105}
console.log(obj2);


// rest Parameter 
//always place it at the end 
function squareIt(...x){
    const arr = x;
    const result= [];
    for (let index = 0; index < arr.length; index++) {
        result.push(arr[index]*arr[index])
        
    }
    return result
}



console.log(squareIt(2,5,9));

//using map 
/*
function squareIt(...x) {
  return x.map(num => num * num);
}
  //laern how to use map

console.log(squareIt(2, 5, 9)); 
// Output: [4, 25, 81]

*/
