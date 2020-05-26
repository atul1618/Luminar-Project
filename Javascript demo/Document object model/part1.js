//var item=document.getElementsByClassName("two");
//alert("hello");
//for(i of item){
//    i.style.color="blue";
//}
//
//var htag=document.getElementsByTagName("h1");
//
//for(j of htag){
//    j.style.color="red";
//}


//var litag=document.querySelectorAll("li");
var litag1=document.querySelector("#one");
var litag2=document.querySelectorAll(".two");

//for(i of litag){
//    i.style.color="green";
//}

litag1.style.color="red";

for(i of litag2){
    i.style.color="blue";
}

var litag3=document.querySelector("#g");
var litag4=document.querySelector("#r");

litag3.style.color="green";
litag4.style.color="red";

for(j of litag2){
    console.log(j.textContent);
    j.innerHTML="<strong>hello</strong>";


}
