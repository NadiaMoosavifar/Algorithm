var my_array = [-4,-6,0,-1,2];
var max = my_array[0];
for(i=1; i<my_array.length; i++){
    if(max<my_array[i]){
        max = my_array[i];
    }
}
console.log('This is the Max number in my_array:  '+max);
