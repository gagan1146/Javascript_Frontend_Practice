const addValueWithReturnKeyword = (num1,num2)=>{
    return num1+num2;
}
const addValueWithoutReturnKeyword = (num1,num2)=>(num1+num2);
const addValueWithoutReturnKeywordAndNoParenthesis = num1=>num1+5;

// ----------------------------------------------------------------
console.log(addValueWithReturnKeyword(2,3));
console.log(addValueWithoutReturnKeyword(2,3));
console.log(addValueWithoutReturnKeywordAndNoParenthesis(10));
// ----------------------------------------------------------------

(function immediateInvokedFunctionExpression(){
    console.log("IIFE executed");
})();

// ----------------------------------------------------------------