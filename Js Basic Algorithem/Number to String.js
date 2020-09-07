
var x = [1,-4,0,-1];
var y = 'Turing';
for(var i=0; i<x.length; i++){
    if(x[i]<0){
       x[i] = y;
    }
}
console.log(x);