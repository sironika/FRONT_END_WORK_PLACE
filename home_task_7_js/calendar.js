
var str = "January,February,March,April,May,June,July,August,September,October,November,December";

console.log(str);
// розбив строку на масив

var arr = str.split(",");

/*for (var i = 0; i < arr.length; i++){
console.log(arr[i]);
}*/

var winter = {};
var spring = {};
var summer = {};
var autumn = {};

var daysCount = [31,28,31,30,31,30,31,31,30,31,30,31];

winter[arr[11]] = {"number": arr.indexOf(arr[11])+1, "days": daysCount[11]};
winter[arr[0]] = {"number": arr.indexOf(arr[0])+1, "days": daysCount[0]};
winter[arr[1]] = {"number": arr.indexOf(arr[1])+1, "days": daysCount[1]};

spring[arr[2]] = {"number": arr.indexOf(arr[2])+1, "days": daysCount[2]};
spring[arr[3]] = {"number": arr.indexOf(arr[3])+1, "days": daysCount[3]};
spring[arr[4]] = {"number": arr.indexOf(arr[4])+1, "days": daysCount[4]};

summer[arr[5]] = {"number": arr.indexOf(arr[5])+1, "days": daysCount[5]};
summer[arr[6]] = {"number": arr.indexOf(arr[6])+1, "days": daysCount[6]};
summer[arr[7]] = {"number": arr.indexOf(arr[7])+1, "days": daysCount[7]};

autumn[arr[8]] = {"number": arr.indexOf(arr[8])+1, "days": daysCount[8]};
autumn[arr[9]] = {"number": arr.indexOf(arr[9])+1, "days": daysCount[9]};
autumn[arr[10]] = {"number": arr.indexOf(arr[10])+1, "days": daysCount[10]};

console.log(winter);
console.log(spring);
console.log(summer);
console.log(autumn);


