class central_govt{
    constructor(){
        console.log("parent class constructor method");
    }
}
//let c1=new central_govt()
class ka_govt extends central_govt{
    constructor(){
        super()
        console.log("child class constructor method");
    }
}
new ka_govt();
