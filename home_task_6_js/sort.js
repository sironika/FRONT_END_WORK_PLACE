
var str = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";

alert(str);
// розбив строку на масив речень
var arr = str.split(".");

// розбив масиви речень по словам
var arr1 = arr[0].split(" ");
var arr2 = arr[1].split(" ");
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

// задаю нові відсортовані масиви
arr1 = sort(arr1);
arr2 = sort(arr2);

// об'єдную в один масив
var newArr = arr1.concat('.',arr2);
// переганяю його в нову строку
var newStr = newArr.join();

// замінюю коми пробілами
newStr = newStr.replace(/,/g," ");

alert(newStr); // результат