
//          Задача:
// В каждый элемент списка зеленого цвета добавить тег SPAN,
// а если элемент черного цвета, добавить тег Р. Внутренний текст должен сохранится.
//  Пример,
// <li style="color: green"><span>Element 10</span></li>
// или
// <li><p>Element 1</p></li>



var elements = document.getElementsByTagName('li');
var black = " - it is black)", green = " - it is green)";

for (var i = 0; i < elements.length; i++ ){
    if (elements[i].style.color === 'green'){
        elements[i].innerHTML = "<span>" + elements[i].childNodes[0].data + green + "</span>"
    }else {
        elements[i].innerHTML = "<p>" + elements[i].childNodes[0].data + black + "</p>";
    }
    console.log(elements[0]);
}
