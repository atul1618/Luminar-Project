//alert("inside calculator");

function display(num)
{
    document.querySelector("#Op").value+=num;
}


function scr()
{
    document.querySelector("#Op").value="";
}

function result()
{
    var item= document.querySelector("#Op").value;
    var result=eval(item);
    document.querySelector("#Op").value=result;

}