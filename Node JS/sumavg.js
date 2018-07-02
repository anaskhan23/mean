var array=[10,20,30];
var sum=0;
var count=0;
var avg=0;
array.forEach(element => {
    sum+=element;

count++;
});

avg=sum/count;

console.log(sum)

console.log(avg)