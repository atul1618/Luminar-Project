
console.log(num1);
console.log(num2);

function add()
{
    var num1=Number(document.querySelector("#num1").value);
    var num2=Number(document.querySelector("#num2").value);

    var res=num1+num2;
    console.log(res);
    alert(res);
}

function sub()
{
    var num1=Number(document.querySelector("#num1").value);
    var num2=Number(document.querySelector("#num2").value);
    if(num1>num2)
    {
        var res=num1-num2;
        alert(res);
    }
    else
    {
        var res=num2-num1;
        alert(res);
    }

}

function mul()
{
    var num1=Number(document.querySelector("#num1").value);
    var num2=Number(document.querySelector("#num2").value);
    var res=num1*num2;
    alert(res);
}

function div()
{
    var num1=Number(document.querySelector("#num1").value);
    var num2=Number(document.querySelector("#num2").value);
    var res=num1/num2;
    alert(res);
}