class Address {
    constructor(houseNo,area,city){
        this.houseNo=houseNo;
        this.area=area;
        this.city=city;
        console.log("Adrress class constructor");
}
getAddress(){
    return this.city;
  }
}
let a=new Address(44,'seegehalli','bangalore')
console.log(a);
module.exports=Address;