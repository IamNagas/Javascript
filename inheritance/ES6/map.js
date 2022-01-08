/* let size=[38,40,42,44]
// size.map(()=>{}) fat arrow fuction
size.map((size)=>{
    return size

})
console.log(size); */

/* let a=[10,20,30,40,]
let b=a.map((value)=>{
    return value
})
console.log(b); */

let employee=[{id:100},{id:101},{id:102}]
let result = employee.map((emp) => {
    console.log(emp.id);
    return emp.id
})
console.log(result);