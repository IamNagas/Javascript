class central_govt{
    tax=18;
    applytax(){
        console.log("applying tax - central govt");

    }
}
class ka_govt extends central_govt{
    tax=20;
}
let ka1=new ka_govt();
console.log(ka1.tax);
ka1.applytax()
class goa_govt{
    applytax(){
        console.log("applying tax - goa govt");
    }
}
let g1=new goa_govt();
g1.applytax()
