var header = "{margin:25px;height:900px;width:100%}";
var main = "{padding:0 0 10px;margin:25px;width:100%}";
var wrap = "{margin:0 auto;width:960px}";
var footer = "{float:left;padding:0 0 10px;background:#eeaaa3}";

var res = [];
var obj = [header, main, wrap, footer];
for (var i = 0; i < obj.length; i++) {
    res[i] = {};
    var p = obj[i].slice(1,-1).split(";");
    for (var j = 0; j < p.length; j++){
        var v = p[j].split(":");
        res[i][v[0]] = v[1];
    }
    //
}

console.log(res);

var tmp = {};
var dup = {};
for (var i = 0; i < res.length; i++){
    for (var value in res[i]){
        if (value in tmp){
            if (res[i][value] === tmp[value]){
                dup[value] = tmp[value];
            }
        }else {
            tmp[value] = res[i][value];
        }
    }

}
console.log(dup);