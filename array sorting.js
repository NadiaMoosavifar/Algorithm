function get_min(array){
    let min = array[0];
    let j = 0;
    for (let i = 0; i < array.length; i++){
        if(array[i] < min){
            min = array[i];
            j = i;
        }
    }
    return j;
}

var x = [5, 2, 8, 20, -2, 0, 11, 7, 3, 9, 31];
let y = x;
var z = [];
while (y.length > 0){
    let l = get_min(y)
    // console.log(l);
    z.push(y[l]);
    // console.log(z);
    y.splice(l, 1);
    // console.log(y);
}
console.log(z);