const bcrypt=require('bcryptjs')
let user={
    name:"sitara",
    email:"sitara123@gmail.com",
    cc:'4545 7878 1212 2323',
    password:"sitaraforever"
}
let salt=bcrypt.genSaltSync(10);
//let new_name=bcrypt.hashSync(user.name,salt)
//let new_email=bcrypt.hashSync(user.email,salt);
let new_cc=bcrypt.hashSync(user.cc,salt);
let new_password=bcrypt.hashSync(user.password,salt);
//console.log(new_name);
//console.log(new_email);
//console.log(new_cc);
//console.log(new_password);

let new_user={... user,password:new_password,cc:new_cc}
console.log(user);
console.log(new_user);

let result =bcrypt.compareSync("ilovesita",new_user.password)
//console.log(result);
result?console.log("login success"):console.log("login failed");


