const bcrypt = require("bcryptjs");
let user={
    name:"Naga",
    email:"Naga@gmail.com",
    password:"1234567",
    credit_card:"123456789123456789"
};
let salt=bcrypt.genSaltSync(10);
let newPassword = bcrypt.hashSync(user.password,salt);
let newCC = bcrypt.hashSync(user.credit_card,salt);

let new_user ={...user, password:newPassword,credit_card:newCC};
console.log(new_user);

let result = bcrypt.compareSync 
(user.password,newPassword);
if(result){
    console.log("Login Succefully !");
}else{
    console.log("Login failed");
}