/* let a=[10,12,14,16]
let b=[18,20,22]
let c=[...a, ...b,20,25,30]
console.log(c); */

/* let a=[38,40,42,44]
let b=a
a[0]=39
console.log(a);
console.log(b); */

/* let size =['s','m','l','xl']
let new_size=[]
for( s of size){
   // console.log(new_size);
    new_size.push(s)
    //console.log(new_size);
}
size[1]=38
console.log(size);
console.log(new_size); */

/* let marks=[35,36,37,38,39]
let new_marks=[...marks]
console.log(marks);
console.log(new_marks ); */

/* 
let user={
          id:100, 
          name:"sanjay",
          email:"nraj455@gmail.com",
          sal:4500
        }
let new_user={...user}     
//console.log(user);     
console.log(new_user); */

let user={id:100,name:"suresh",email:"suri123@gmail.com,"}
let details={id:102, l0c:"bangalore"}
let a={...user,...details}
console.log(a);

