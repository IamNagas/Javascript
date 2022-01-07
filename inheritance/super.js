class india{
    constructor(country){
        this.country=country;

    }
    render(){
        console.log("UI execution");
    }
} 

class america extends india{
    constructor(a,b,c,d){
    super(d);
    this.id=a;
    this.name=b;
    this.country=c;
    this.n1=d;
    
    }
    render(){
        console.log("in america -render method");
    }
}
let a1=new america(420,"chandan","india" ,"shahiba")
console.log(a1);
a1.render();