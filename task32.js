"use strict";
function mul(a, b) {
   return a * b;
}
var doubleMul = mul.bind(null, 2)// Ваш код
var qudraMul = mul.bind(null, 4)// Ваш код
console.log(doubleMul(5)); // 10
console.log(qudraMul(5)); // 20



/*Задание №2. Привязка контекста
Есть следующий код:
function mul(a, b) {
   return a * b;
}
var doubleMul = // Ваш код
var qudraMul = // Ваш код
console.log(doubleMul(5)); // 10
console.log(qudraMul(5)); // 20
Используя функцию mul() и карринг создайте две функции doubleMul() и qadraMul(), которые умножают числа на 2 и на 4 соответственно.

*/