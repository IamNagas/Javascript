let sum=(a,b)=>{return a+b}
let sub=(a,b)=>{return a-b}

let calculate=(a,b,callback)=>{
    if(callback==sum){
        return callback(a,b)
    }
    if (callback==sub){
        return callback(a,b)
    }

}
let result=calculate(10,20, sum)
console.log(result);
result=calculate(50,10,sub)
console.log(result);