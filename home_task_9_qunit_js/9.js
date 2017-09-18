// ф-ція сортування
function sort(arr){
    for (var i = 0; i < arr.length - 1; i++){
        for (var j = 0; j < arr.length - 1; j++){
            if (arr[j+1].length > arr[j].length){
                var temp = arr[j+1];
                arr[j+1] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}


