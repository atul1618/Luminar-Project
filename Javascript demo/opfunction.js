//function add(num1,num2){
//res=num1+num2;
//console.log(res);
//}
//
//function sub(num1,num2){
//if(num1>num2){
//res=num1-num2;
//console.log(res)
//}
//else{
//res=num2-num1;
//console.log(res)}
//}
//
//function mul(num1,num2){
//res=num1*num2;
//console.log(res);
//}
//
//function div(num1,num2){
//res=num1/num2;
//console.log(res);
//}
//
//mul(2,3)

var num=Number(prompt("Number: "))
num1=num
var res=0;
function numrev(num){
while(num>0){
    var dig=num%10;
    res=(res*10)+dig;
    num=Math.floor(num/10);


}
  console.log(res)

if(res===num1){
    console.log("is palindrome");
    }
else{
console.log("Not a palindrome");

}

}

numrev(num)
