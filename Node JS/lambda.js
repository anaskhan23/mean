var factorial = n =>{
var fact=1;

for (var i = 1;i<=n;i++){

fact*=i;
}
return fact;
}

var result=factorial(4);

console.log(result);