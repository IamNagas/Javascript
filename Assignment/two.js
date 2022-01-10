/*let i=152
if(152 % i==152){
    console.log("152 is an amstrong number");
}else{
console.log("152 is not an amstrong numebr");
} */
var a,b,result;
a=0;
b=1;
result=b;
var a,b, result;
for(var i=0; i<=100; i++){
   // document.write(result+"<br/>");
    result=a+b;
    a=b; 
    
    b=result;

}