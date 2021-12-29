class Bank{
    min_bal=500;
    constructor(a,b,c){
        this.acc_id=a;
        this.name=b;
        this.amount=c;
    }
    get_balance(){
        return this.min_bal+400;
    }
    open_acc(){
        console.log("account open successfully");
    }
   Bank_statement(){
       console.log("account running successfully");
   }
   acc_close(){
       console.log("account closed");
   }
}
let c1=new Bank(2211,"nags",100000)
console.log(c1);
console.log(c1.min_bal);
console.log(c1.get_balance());
let amount=c1.get_balance();
console.log(amount);
c1.open_acc();
c1.Bank_statement();
c1.acc_close();