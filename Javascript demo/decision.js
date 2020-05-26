//num=Number(prompt("Number: "));

//if(num>0){
//alert("Postive");
//}
//else{
//alert("Negative");
//}

num1=Number(prompt("Num1: "));
num2=Number(prompt("Num2:"));
num3=Number(prompt("Num3:"));

if((num1>num2)&(num1>num3)) {
alert(" num1 is greater");
}
else if((num1<num2)&(num2>num3)){
alert("num2 is greater");
}
else {
alert("num3 is greater");
}