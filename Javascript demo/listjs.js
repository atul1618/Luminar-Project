var num=[10,11,12,10,13,14,12,12,15];

//var number=num.split(",")

var numcount={}

for(i of num){
    if(i in numcount)
    {
        numcount[i]+=1;
     }
    else
    {
        numcount[i]=1;
    }
}

for(j in numcount){
    console.log(j);
    console.log(numcount[j]);
    }

