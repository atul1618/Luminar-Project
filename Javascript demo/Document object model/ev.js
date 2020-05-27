function numcheck()
{
    var num=Number(document.querySelector("#num").value);
    if(num%2==0)
    {
        alert(num+" is even");

    }
    else
    {
        alert(num+ " is odd");
    }
}