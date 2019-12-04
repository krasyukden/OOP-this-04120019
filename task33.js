"use strict";
function bind(func, context) {
   // Ваш код
   /*return {
	   name: name,
	   age: age
   };*/
   //func.call(user, name, age)
   //func.call(user){
   //return func.call(context, name, age);
		
	
   
    return function (name, age){ //Ошибки не выдает, не раб 
		user.name;
		user.age;
	};
	/*return function (context, name, age){
		this.name;
		this.age;
	};*/
   /*
   this.name = name;
   this.age = age;*/
   
}
function func() {
   console.log(this.name + " - "+ this.age);
}
var user = {
   name: "Tom",
   age: 20
};
var f = bind(func, user);
f(); // "Tom – 20"


/*Задание №3. Привязка контекста
Напишите аналог метода bind():
function bind(func, context) {
   // Ваш код
}
function func() {
   console.log(this.name + " - "+ this.age);
}
var user = {
   name: "Tom",
   age: 20
};
var f = bind(func, user);
f(); // "Tom – 20"*/
