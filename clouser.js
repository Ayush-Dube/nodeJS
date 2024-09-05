/*
1.a nested fucntion which travels along with the variables from its outr Scope.
2. in my understanding , usually variables inside a function are not accessible outside the function block.
3. but using clouser we can do this 
*/
function lexical(){
    var val1 = "from lexical Block"
    function clouser(){
        console.log(val1)
    }
    return clouser;
}

lexical();//nothing will display bcoz its just returning the written part ,not executing it

//make a variable into a function using function expression 

const ab = lexical();
//so now ab will have the written code 
/*
imagine this as 
const ab = function clouser(){
              console.log(val1)
              }
so now ab will act as an function ;

*/

ab();
//this will show the val1 

// so the clouser is travelling along with the variable reference from  the lexical scope.