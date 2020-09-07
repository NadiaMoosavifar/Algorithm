

function CommunistCensorship(array, word){
    var new_array = [];
    var res = '';
    for(var i = 0; i<array.length; i++){
        if(array[i] === word){ 
            for(var j = 0; j<array[i].length; j++){
                res += '*'
            }
             new_array.push(res)
            }else{
                new_array.push(array[i])
            }
        }
    console.log(new_array);
}
var x = ['Man', 'I','Love','The','Matrix','Program'];
CommunistCensorship(x, 'Man')
CommunistCensorship(x, 'I')
CommunistCensorship(x, 'Love')
CommunistCensorship(x, 'The')
CommunistCensorship(x, 'Matrix')
CommunistCensorship(x, 'Program')