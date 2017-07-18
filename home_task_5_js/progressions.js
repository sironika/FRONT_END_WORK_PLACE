
var arPro = confirm('Ви бажаєте вибрати арифметичну прогресію?');

if (!arPro)
    var geoPro = confirm('Ви бажаєте вибрати геометричну прогресію?');

var a = prompt('Введіть перше число прогресії');
// об'єднав d(різниця) та q(дільник) в b(крок)
var b = prompt('Введіть крок прогресії');
var n = prompt('Введіть кількість ітерацій');

var text = arPro ? 'арифметичної ': geoPro ? 'геометричної':'';

var result = arPro ? sumAr(a, b, n): geoPro ? sumGeo(a, b, n): 0;

alert('Сума перших '+ n + ' елементів ' + text + 'прогресії становить ' + result );

function sumAr(a, b, n) {
    var number = +a;
    var result = 0;
    for (var i = 0; i < +n; i++) {
        result += number;
        number += +b;
    }
    return result;
}

function sumGeo(a, b, n) {
    var number = +a;
    var result = 0;
    for (var i = 0; i < +n; i++) {
        result += number;
        number *= +b;
    }
    return result;
}