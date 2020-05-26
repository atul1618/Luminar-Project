var str="this is the text text";
var word= str.split(" ");
count={}

for(i of word){
if(i in count){
count[i]+=1;
}
else{
count[i]=1;
}
}

for(j in count){
console.log(j);
console.log(count[j]);
}

