// without array//

// for(var i=200; i<=2700; i++){
//     if((i % 3 === 0 || i % 5 === 0) && i % 15 !==0){
//             console.log(i);
//     }
// }




// with array//

var my_array = []
for(var i=200; i<=2700; i++){
    if((i % 3 === 0 || i % 5 === 0) && i % 15 !==0){
            my_array.push(i);
    }
}
console.log(my_array)
