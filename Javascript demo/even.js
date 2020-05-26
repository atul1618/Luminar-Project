var num=[10,11,12,13,14,15,16,17,18,19,20]

//for(i of num){
//if(i%2==0){
//console.log(i);
//}}
var flag=0;
var search=Number(prompt("Search Number: "));
for(i of num){
if(i==search){
flag=1;
break;
}
else{
flag=0;
}
}

if(flag>0)
{
alert("Element found");
}
else
{
alert("Element not found");
}