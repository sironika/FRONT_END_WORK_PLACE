
var type = prompt('Введіть тип прогресії: \n a - арифметична \n g - геометрична', 'a або g');

switch (type) {
    case 'a':
        var a1 = parseInt(prompt('Введіть перше число прогресії'));
        while (a1 === ' ' || isNaN(a1)) {
            alert("Введене не коректне число");
            a1 = parseInt(prompt('Введіть перше число прогресії'));
        }
        var d = parseInt(prompt('Введіть різницю прогресії'));
        while (d === ' ' || isNaN(d)) {
            alert("Введене не коректне число");
            d = parseInt(prompt('Введіть різницю прогресії'));
        }
        var an = parseInt(prompt('Введіть кількість ітерацій'));
        while (an === ' ' || isNaN(an)) {
            alert("Введене не коректне число");
            an = parseInt(prompt('Введіть кількість ітерацій'));
        }
        alert('Сума перших ' + an + ' елементів Арифметичної прогресії становить ' + sumAr(a1, d, an));
        break;
    case 'g':
        var g1 = parseInt(prompt('Введіть перше число прогресії'));
        while (g1 === ' ' || isNaN(g1)) {
            alert("Введене не коректне число");
            g1 = parseInt(prompt('Введіть перше число прогресії'));
        }
        var q = parseInt(prompt('Введіть дільник прогресії'));
        while (q === ' ' || isNaN(q)) {
            alert("Введене не коректне число");
            q = parseInt(prompt('Введіть дільник прогресії'));
        }
        var gn = parseInt(prompt('Введіть кількість ітерацій'));
        while (gn === ' ' || isNaN(gn)) {
            alert("Введене не коректне число");
            gn = parseInt(prompt('Введіть кількість ітерацій'));
        }
        alert('Сума перших ' + gn + ' елементів Геометричної прогресії становить ' + sumGeo(g1, q, gn));
        break;
    default:
        alert("Введений не коректний тип прогресії");
}

function sumAr(a1, d, an) {
    var number = a1;
    var result = 0;

    for (var i = 0; i < an; i++) {
        result += number;
        number += d;
    }
    return result;
   }

function sumGeo(g1, q, gn) {
    var number = g1;
    var result = 0;

    for (var i = 0; i < gn; i++) {
        result += number;
        number *= q;
    }
    return result;
    }