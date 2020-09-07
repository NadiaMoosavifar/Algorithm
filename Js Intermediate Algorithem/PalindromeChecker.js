
function isPalindrome(str){
    var word = str;
    // console.log(word)
    var newWord = word.split(",").join("")
    // console.log(newWord)
    var newWord1 = newWord.split(" ").join("").toLowerCase()
    // console.log(newWord1)
    for(var i = 0 ; i<newWord1.length/2 ; i++){
        // console.log(newWord1[newWord1.length-1-i]);
        // console.log(newWord1[i]);
        if(newWord1[i] !== newWord1[newWord1.length-1-i]){
            return false;
        }
    }
    return true;
}
console.log(isPalindrome('Hello World, Guys'));
console.log(isPalindrome('Hello olleh'));   
console.log(isPalindrome('A nut for a jar of tuna'));










// function isPalindrome(str){
//     var word = str;
//     // console.log(word)
//     var newWord = word.split(",").join("")
//     // console.log(newWord)
//     var newWord1 = newWord.split(" ").join("").toLowerCase()
//     // console.log(newWord1)
//     for(var i = 0 ; i<newWord1.length/2 ; i++){
//         // console.log(newWord1[newWord1.length-1-i]);
//         // console.log(newWord1[i]);
//         if(newWord1[i] !== newWord1[newWord1.length-1-i]){
//             return false;
//         }
//     }
//     return true;
// }
// console.log(isPalindrome('Hello World, Guys'));
// console.log(isPalindrome('Hello,/  olleh'));








// function reverseString(str){
//     var text = "";
//     for(var i=str.length-1; i>=0; i--){
//         text += str[i];
//     }
//     return text;
// }
// console.log(reverseString('baby'));