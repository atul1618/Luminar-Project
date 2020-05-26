var num=[1,2,3,4,5,6];

var search=Number(prompt("Search Number: "));
for(i of num)
{
   for(j of num)
   {
        pair=i+j;
        if(search==pair)
        {
            console.log("("+i+","+j+")");
        }

    }
}

