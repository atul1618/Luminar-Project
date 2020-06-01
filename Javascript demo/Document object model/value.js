class Customer
{
    static dataset()
    {
        var database=
        {
            6392:{name:"Atul",ac_type:"savings",pin:1618,balance:4500},
            3042:{name:"Arun",ac_type:"savings",pin:4534,balance:11000},
            4582:{name:"Philip",ac_type:"NRI",pin:3582,balance:1050000},
            3628:{name:"Ann",ac_type:"savings",pin:7822,balance:6000}
        }
        return database;
    }

    static accountverification()
    {
        var num=document.querySelector("#AccountNo").value;
        var pin=document.querySelector("#Pinno").value;

       var data=Customer.dataset();
       if(num in data)
       {
            var userbalance=data[num]["balance"];
            var username=data[num]["name"];
            var accounttype=data[num]["ac_type"];
            var userpin=data[num]["pin"];
            if(pin==userpin)
            {
                 alert("Dear "+username+", Your "+accounttype+" account "+num+" balance is "+userbalance+"₹.");
            }
            else
            {
                alert("Incorrect pin");
            }
       }
       else
       {
            alert("Invalid account number");
       }


    }
}
