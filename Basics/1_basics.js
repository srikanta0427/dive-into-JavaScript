let a = 5
let b = "5"

console.log(a + b) // here js do concatation 

console.log(a * b) //  here b changes data type string to number default


// difference betn == and ===

console.log(a == b) // because == not check the data type only check value if u write string then js try to convert
console.log(a == '') // false because a=1 and ''=0
console.log(0 == '') // because '' empty string means 0 if we change dtype


console.log(a === b) // this will check dtype of variable 
