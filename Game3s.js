var num = 100;
while (num > 1){
  if (num % 3 === 0){
    console.log(num, 0);
    num = num / 3;
  }
  else if (num % 3 === 1){
    console.log(num, -1);
    num = (num - 1) / 3;
  }
  else {
    console.log(num, +1);
    num = (num + 1) / 3;
  }
}
console.log(num);




// function gameOfThree(number){
//     for(var i=number; i>=1; i--){
//         if(number%3 === 0){
//             console.log(number, 0)
//             number = number / 3
//         }else if ((number-1) %3 === 0){
//             console.log(number, -1)
//             number = (number-1) / 3
//         }else if ((number+1) % 3 === 0){
//             console.log(number, 1)
//             number = (number+1) / 3
//         }
//         if(number === 1){
//             console.log(1)
//             break;
//         }
//     }
// }
// gameOfThree(100)




