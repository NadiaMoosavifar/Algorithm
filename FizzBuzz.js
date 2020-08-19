
var x = [];
for(var i=1; i<=135; i++){
    x.push(i);
    if(x[i-1] % 15 === 0){
        x[i-1] = "FizzBuzz"
    }
    if(x[i-1] % 3 === 0){
        x[i-1] = "Fizz"
    }
    if(x[i-1] % 5 === 0){
        x[i-1] = "Buzz"
    }
}
console.log(x)