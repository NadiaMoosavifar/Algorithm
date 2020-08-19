var x =[0,1]
 for(i=2; i<=30; i++){
     x.push(x[i-1] + x[i-2])
 }
 console.log(x)





var x =[0,1]
 for(i=2; i<=30; i++){
     x[i] = x[i-1] + x[i-2]
 }
 console.log(x)





// var n = 100
// var i = 1
// var x =[0,1]
//  while(i++ < n){
//      x[i] = x[i-1] + x[i-2]
//  }
//  console.log(x)