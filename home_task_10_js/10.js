//Домашнее задание №10
//На странице есть форма с элементами:
//    - текстовый инпут "Имя"
//- текстовый инпут "Логин"
//- текстовый инпут "Пароль"
//- текстовый инпут "Email"
//под каждым элементом есть свой чекбокс, который отвечает за валидацию (если отмечен, валидация нужна)
//Используя статические методы конструктора, сделать универсальную функцию-конструктор,
// которая будет уметь создавать объекты с разными свойствами и методами.  
// Все поля не обязательные, в зависимости от заполнения пользователем формы 
// (а также отметки в чекбоксе) нужно создавать объекты с разными свойствами и методами,
// но все это должен делать один конктруктор. 
// (Информация с полей должна записыватся в свойства и если отмечен чекбокс добавлятся метод валидации)


document.addEventListener('DOMContentLoaded', function () {
    var btm = document.getElementById('sub');
    btm.addEventListener('click', function () {
        var Obj = createObj();
        console.log(Obj);
        console.log(new UserInfo(Obj));
    });
});


function UserInfo(user) {
    var validate = "Validate";
    if (user) {
        for (var key in user.properties) {
            if (user.methods[key + validate] === true) {
                console.log(key);
                this[key] = {
                    properties: user.properties[key],
                    validate: key + 'Is validated'
                }
            } else
                this[key] = user.properties[key];
        }
    }
}


function createObj() {
    return {
        properties: {
            name: document.getElementById('name').value,
            login: document.getElementById('login').value,
            password: document.getElementById('pass').value,
            email: document.getElementById('email').value,
        },
        methods: {
            nameWithValidate: document.getElementById('valName').checked,
            loginWithValidate: document.getElementById('valLogin').checked,
            passWithValidate: document.getElementById('valPass').checked,
            emailWithValidate: document.getElementById('valEmail').checked
        }
    };
}
