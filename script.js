"use strict";
// let arr = [1, 2, 3, 4, 5]

// console.log(arr);
// const man = {
//   hands: 2,
//   lags: 2,
//   eyes: 2,
//   walk: function () {
//     console.log('Я хожу');
//   },
//   talk: function () {
//     console.log('Я говорю');
//   }
// }

// const newMan = Object.create(man)
// newMan.name = 'Ivan'//добавление новых свойств уже существующему прототипу
// newMan.age = 23

// console.log(newMan);

// const worker = {
//   //объект- прототип
//   workplace: 1,
//   dinner: 1,
//   goToWork: function () {
//     console.log("Иду на работу");
//   },
//   leaveWork: function () {
//     console.log("Ухожу с работы");
//   },
//   work: function () {
//     console.log("Работаю");
//   },
//   sayHello: function () {
//     console.log("Hello" +''+ this.name)
//   }
// };

// const frontEndDev = Object.create(worker);
// const backEndDev = Object.create(worker);//делегировали новой переменной уже существующие методы существующего объекта
// frontEndDev.dinner = 2;
// frontEndDev.role = 'Front End Dev'
// backEndDev.role = 'Back End Dev'

// frontEndDev.work = function () {
//   console.log('Пишу качественный фронт')
// }

// backEndDev.work = function () {
//   console.log('Пишу качественный бэк')
// }

// const developer1 = Object.create(frontEndDev)
// const developer2 = Object.create(frontEndDev)
// const developer3 = Object.create(backEndDev)
// const developer4 = Object.create(backEndDev)

// developer1.name = 'Alex'
// developer2.name = 'Ivan'
// developer3.name = 'Anna'
// developer4.name = 'Elena'

// // developer1.sayHello()
// // developer2.sayHello()
// // developer3.sayHello()
// // developer4.sayHello()

// console.log(developer1.dinner)
// console.log(developer2.dinner)
// console.log(developer3.dinner)
// console.log(developer4.dinner)

// const person = { //объект
//   name: 'Maxim', //свойство объекта
//   age: 25,
//   greet: function() {
//     console.log('Greet!') //метод объекта
//   }
//

// const Person1 = function (name, age) {
//   this.name = name
//   this.age = age
// }

// Person1.prototype.sayHello = function () {
//   console.log(`Привет! меня зовут ${this.name}`);
// }

// const person1 = new Person1('Vlad', 23)
// person1.sayHello()
// console.log(person1);

// class Person {
//   constructor(name, age) {
//     this.name = name
//     this.age = age
//   }

//   sayHello() {
//     console.log(`Hello! my name ${this.name}`);
//   }
// }

// class FrontEndDev extends Person {

// }
// const dev = new FrontEndDev('Vlad',23)

// console.log(dev);
// dev.sayHello()

//деструктуризация
// const logger = (first, second, third) => {
//   console.log(`${first} ${second} ${third}`);
// };
// logger("I", "love", "JS");

const sum = ( ...params) => {
  return params.reduce((sum, num) => sum + num)
}

console.log(sum(1, 2, 3, 4, 5, 6, 'args', false));