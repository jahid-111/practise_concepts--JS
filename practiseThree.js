// console.log('practiseThree.js')



// ========================= MATH OPERATION BY STRING 
const integerNum = 5;
const floatingNum = 2.5;
const stringName = 'modulus' 
const mathOperation = (prmOne ,prmTwo, prmThree) => {
    let result;
        const operationType =  prmThree;    
        if (operationType === "sum") {
            result = prmOne + prmTwo;
        } else if (operationType === "substrac") {
           result = prmOne - prmTwo;
        } else if (operationType === "multiply") {
            result = prmOne * prmTwo;
        } else if ( operationType === "devide") {
            result = prmOne / prmTwo;
        } else if ( operationType === "modulus") {
            result = prmOne % prmTwo;
        } else {
            result = "Operation not supported"
        }
        return result;  
    }

const operationResult = mathOperation(integerNum, floatingNum, stringName)

console.log(operationResult) //Result = 0