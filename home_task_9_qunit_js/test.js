
QUnit.module("Sorted");
QUnit.test("sort()", function (assert) {
    assert.ok(sort("q qw qwer qwerty"), "відсортовано строку по буквам ");
    assert.ok(sort("1 12 123 234"), "відсортовано строку по цифрам ");
    assert.ok(sort(1, 2, 3, 4), "числовий запис, не строка");

});


