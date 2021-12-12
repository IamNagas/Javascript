const bcrypt=require("bcryptjs");

let user={
    name:"Naga",
    email:"Naga@gmail.com",
    password:"1234567",
    cc:"233336322323"
};
let salt=bcrypt.genSaltSync(10);
let new_password=bcrypt.hashSync(user.password,salt);
let new_cc=bcrypt.hashSync(user.cc,salt)

let new_user={...user,password:new_password,cc:new_cc};
console.log(new_user);
let result=bcrypt.compareSync(user.password,new_user.password);
if(result){
    console.log("loginsuccessfull");
}
else
{
    console.log("loginfailed");
}

let result1=bcrypt.compareSync(user.cc,new_cc);
if(result1){
console.log("both are same");
}
else{
    console.log("diffrent");
}
