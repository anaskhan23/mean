var simpleInterest =(p,t=10,r=2)=>{

var result=(p*r*t)/100;
return result;
}

var r=simpleInterest(100,10);
var r=simpleInterest(100,10,1);

console.log(r)