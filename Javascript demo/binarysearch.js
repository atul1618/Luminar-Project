var list=[11,12,13,14,15,16,17,18,19,20];

var lower=0;
var upper=list.length-1;

var flag=0;

var key=Number(prompt("Key number: "));

//var key=1453;

//11,14,17,20


//alert(upper);
//
//alert("Lower: "+ list[lower]); 11
//alert("Mid: " + list[mid]);   15
//alert("Upper: " + list[upper]);   20


while(lower<=upper)
{
    var mid=Math.floor((lower+upper)/2);

    if(key>list[mid])
    {
        lower=mid+1;
    }
    else if(key<list[mid])
    {
        upper=mid-1;
    }
    else if(key==list[mid])
    {
        flag=1;
        break;
    }
    else
    {
        flag=0;
    }
}

if(flag>0)
{
    alert("Found");
}
else
{
    alert("Not found");
}