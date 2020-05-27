function display()
{
    var age=Number(document.querySelector("#Age").value);
    var today=new Date();
    var year=today.getFullYear();
    var dob=year-age;
    alert("DOB: "+dob);
}

title=document.querySelectorAll("#title");

for(item of title)
{
    item.style.color="black";
}
