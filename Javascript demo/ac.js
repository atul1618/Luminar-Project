var today=new Date();
var day=today.getDate();
var month=today.getMonth()+1;
var year=today.getFullYear();
var hour=today.getHours();
var min=today.getMinutes();
var sec=today.getSeconds();

class BankAccount
{
    constructor(custname,bankname,acno,minbalance,balance)
    {
        this.custname=custname;
        this.bankname=bankname;
        this.acno=acno;
        this.minbalance=minbalance;
        this.balance=balance;
    }
    deposit(damount)
    {
        this.damount=damount;
        this.acbalance=this.damount+this.balance;
        console.log("Dear " +this.custname +  ",Your " + this.bankname+" account "+this.acno +" is credited with ₹ " + this.damount + " at "+hour+":"+min+":"+sec+" on "+day+"-"+month+"-"+year+".");
        console.log("Your current balance is ₹ "+this.acbalance+".");
    }

    withdraw(wamount)
    {
        this.wamount=wamount;
        this.acbalance=this.balance-this.wamount;
        if(this.acbalance<this.minbalance)
        {
            console.log("You don't have sufficient balance.");
        }
        else
        {
            console.log("Dear " +this.custname +  ",Your " +this.bankname+" account "+ this.acno +" is debited with ₹ " + this.wamount + " at "+hour+":"+min+":"+sec+" on "+day+"-"+month+"-"+year+".");
            console.log("Your current balance is ₹ "+this.acbalance+".");
        }
     }

    balanceenq()
    {
        alert("Dear "+this.custname+",Your "+this.bankname+" account "+this.acno+" balance is "+this.balance);
    }

}

a=new BankAccount("Atul","SIB",5155,1000,4000);
a.deposit(1000);
//a.withdraw(500);
//a.balanceenq();
