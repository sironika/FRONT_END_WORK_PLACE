
var str = "January,February,March,April,May,June,July,August,September,October,November,December";

console.log(str);
// розбив строку на масив

var arr = str.split(",");

var year = {};//створив об'єкт рік

// пройшовся по масиву місяців, визначивши номер і к-сть днів
for (var i = 0; i < arr.length; i++) {
    switch (true){
        case (i < 7):
            year[arr[i]] = {number: i+1, days: 31-(i%2)};
            break;
        case (i > 6):
            year[arr[i]] = {number: i+1, days: 30+(i%2)};
            break;
    }
}
year['February']['days'] = 28; //виключення для лютого
// створив об'єкти пір року
var winter = {};
var spring = {};
var summer = {};
var autumn = {};
//розбив рік на пори року згідно номеру місяця
for (var month in year){
    switch (true){
        case (year[month]['number'] < 3 || year[month]['number'] === 12):
            winter[month] = year[month];
            break;
        case (year[month]['number'] < 6):
            spring[month] = year[month];
            break;
        case (year[month]['number'] < 9):
            summer[month] = year[month];
            break;
        case (year[month]['number'] < 12):
            autumn[month] = year[month];
            break;
    }
}
//результат в консоль
console.log(winter);
console.log(spring);
console.log(summer);
console.log(autumn);


