"use strict";
// Проговорить алгоритм
/* //Раб
var user = {
   name: "Tom"
};
function format(beginMsg, endMsg) {
   console.log(beginMsg + this.name + endMsg);
}
var tomFormat = format.bind(user);// Ваш код
tomFormat("<<<", ">>>"); // "<<<Tom>>>" //  работ
*/

// Лек 2 Работ
var user = {
   name: "Tom",
   //age: 28 - почему берет только 1 св-во ???
};
function format(beginMsg, endMsg) {
   console.log(beginMsg + this.name + endMsg);
}
var tomFormat = format.call(user, "<<<", ">>>"); 
// Ваш код
tomFormat("<<<", ">>>"); // "<<<Tom>>>" // ????? !!! tomFormat is not a function

/* НЕ РАБ !!!
var user = {
   name: "Tom"
};
function format(beginMsg, endMsg) {
   console.log(beginMsg + this.name + endMsg);
}
var tomFormat = format(function(){
	user.name;// 
});// Ваш код
tomFormat("<<<", ">>>"); // "<<<Tom>>>" // не работ
*/




/*Задание №1. Привязка контекста
Есть следующий код:
var user = {
   name: "Tom"
};
function format(beginMsg, endMsg) {
   console.log(beginMsg + this.name + endMsg);
}
var tomFormat = // Ваш код
tomFormat("<<<", ">>>"); // "<<<Tom>>>"
Привяжите функцию format() к объекту user.
Реализуйте 2 версии текущего задания, используя:
1. Анонимную функцию обвертку;
2. Метод bind().*/
