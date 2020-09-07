var x =[0,1]
var n = 1000000
 for(i=2; (x[i-1] + x[i-2]<n); i++){
     x.push(x[i-1] + x[i-2])
 }
 console.log(x)




//code Habib
// var a = 1000000;
// var fibo_arr = [0, 1];
// var last_item = fibo_arr[fibo_arr.length - 2] + fibo_arr[fibo_arr.length - 1];
// while (last_item < a){
//   fibo_arr.push(last_item);
//   last_item = fibo_arr[fibo_arr.length - 2] + fibo_arr[fibo_arr.length - 1];
// }
// console.log(fibo_arr);





// function fibonacci(n){
//     var fibo = [0, 1];
//     for (var i = 2; i < n; i++){
//       var temp = fibo[i - 1] + fibo[i - 2];
//       if (temp < n){
//         fibo.push(temp);
//       }else{
//         return fibo;
//         break;
//       }
//     }
//   }
  
//   var m = 1000000;
//   console.log(fibonacci(m));




