
// Домашнее задание № 11
// Есть класс Components() в котором есть два публичных метода active и disabled, которые отвечают за включение
// выключения компонента. Создать класс Form() который унаследует Components() и будет уметь свои методы: валидации
// и отправки.
//    Также реализовать:
//    - переопределение метода активации, чтобы при активации формы, сразу запускалась и валидация
// - методы валидации и отправки, должны быть недоступны, если компонент выключен
// - сеттер/геттер для просмотра статуса формы



function Components() {

    var activate;

    this.active = function () {
        activate = true;
        myForm.validate();
    };
    this.disabled = function () {
        activate = false;
    };
    this.getActive = function () {
        return activate;
    }
}

function Form() {
    Components.call(this);

    var status = 0;

    //setter
    this.setStatus = function (value) {
        status = value;
    };
    //getter
    this.getStatus = function () {
        return console.log(status);
    };

    this.validate = function () {
        console.log("validated");
    };
    this.send = function () {
        console.log("sent");
    };
}

var myForm = new Form, myComp = new Components;

myComp.active();
//myComp.disabled();
console.log(myComp.getActive() + "Component is active (true) or disabled (false)");//перевірка активності компонента

var act = myComp.getActive();

if (act !== false && act !== undefined) {
    console.log("if TRUE, 'validation' and 'send' methods available"); //якщо активно, маєм доступні методи
    myForm.validate();
    myForm.send();
}
else {
    console.log("if FALSE or UNDEFINED, 'methods not sent or validated while Components disable'");
    // поки компонент не активний, нічого не надсилається і не перевіряється
}

myForm.setStatus(123);
myForm.getStatus();