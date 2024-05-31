/* eslint-disable no-unused-labels */
/* eslint-disable no-unused-vars */
"use strict";

// if (1){
//     console.log('Ok!');
// } else {
//     console.log('Error');
// }

// if (num < 49){
//     console.log('Error');
// } else if (num > 100) {
//     console.log('Багато');
// } else {
//     console.log('Ok!');
// }

// (num === 50) ? console.log('Ok!') : console.log('Error'); // Тернарний оператор

// 4 + 4 // бінарний оператор
// +4 // унарний оператор

// const num = 50;

// switch (num) {
//     case 49:
//         console.log('Не правильно');
//         break;
//     case 100:
//         console.log('Не правильно');
//         break;
//     case 51:
//         console.log('В точку');
//         break;
//     default:
//         console.log('Не в цей раз');
//         break;
// }

// const hamburger = 3;
// const fries = 1;
// const cola = 0;

// console.log(hamburger === 3 && cola && fries);

// console.log(1 && 0);
// console.log(1 && 5);
// console.log(null & 5);
// console.log(0 && 'dfsdfffsfsfsf');

// if (hamburger === 3 && cola ===1 && fries) {
//     console.log('Всі ситі');
// } else {
//     console.log('ми йдемо в інший заклад');
// }

// while (num <= 55){
//     console.log(num);
//     num++;
// }

// do {
//     console.log(num);
//     num++;
// }
// while (num < 55);

// let num = 50;

// for (let i = 1; i < 8; i++){
//     if (i === 6){
//        // break;
//        continue;
//     }

//     console.log(i);

// }

// for (let i = 0; i < 3; i++) {
//     console.log(i);
//     for (let j = 0; j < 3; j++) {
//         console.log(j);
//     }
// }

// let result = '';
// const length = 7;

// for (let i = 1; i < length; i++){

//     for (let j = 0; j < i; j++){
//         result += '*';
//     }

//     result += '\n';
// }

// console.log(result);

// first: for (let i = 0; i < 3; i++) {
//     console.log(`First level': ${i}`);
//     for (let j = 0; j < 3; j++) {
//         console.log(`Second level': ${j}`);
//         for (let k = 0; k < 3; k++) {
//             if (k === 2) continue
//             console.log(`Third level': ${k}`);
//         }
//     }
// }

// const numberOfFilms = +prompt('How many films have you already watched?', '');
// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     private: false
// };

// for (let i = 0; i < 2; i++) {

//     const a = prompt('One of the last movies you watched?', ''),
//           b = prompt('How much would you rate it at', '');

//     if (a !=null && b != null && a != '' && b !='' && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//         console.log('Done!');
//     } else {
//         console.log('error');
//         i--;
//     } if (personalMovieDB.count <= 10){
//         console.log('Доволі мало фільмів');
//     } else if (personalMovieDB.count >= 10 && personalMovieDB.count <30) {
//         console.log('Ви класичний глядач');
//     } else if (personalMovieDB.count >= 30){
//         console.log('Ви кіноман');
//     } else {
//         console.log('Відбулась помилка');
//     }

// }

// console.log(personalMovieDB);

// let num = 20;

// function showFirstMessage(text) {
//     console.log(text);
//     console.log(num);
// }

// showFirstMessage('Hello World!');
// console.log(num);

// function calc(a, b) {
//     return (a + b);
// }

// console.log(calc(4, 3));
// console.log(calc(5, 3));
// console.log(calc(10, 6));

// function ret() {
//     let num = 50;

//     //

//     return num;
// }

// const anotherNum = ret();
// console.log(anotherNum);

// const str = 'test';

// // console.log(str[2] = 'd');

// console.log(str.toUpperCase());
// console.log(str.toLowerCase());
// console.log(str);

// const fruit = 'Some fruit';

// console.log(fruit.indexOf('fruit'));

// const logg = 'Hello world!'

// console.log(logg.slice(6, 10));
// console.log(logg.substring(6, 10));
// console.log(logg.substr(6, 5));

// const num = 12.2;
// console.log(Math.round(num));

// const test = '12.2px';
// console.log(parseInt(test));

// let numberOfFilms

// function start () {
//  numberOfFilms = +prompt('Скільки фільмів Ви вже подивились?', '');

//  while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
//     numberOfFilms = +prompt('Скільки фільмів Ви вже подивились?', '');
//  }
//  start();

// }

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// function rememberMyFilms() {

//     for (let i = 0; i < 2; i++) {
//         const a = prompt('Один з останніх переглянутих фільмів?', ''),
//         b = prompt('На скільки оціните його', '');
//     if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//         console.log('done');
//     } else {
//         console.log('error');
//         i--;
//     }
//     }
// }
// rememberMyFilms();

// function detectPersonalLevel() {
//     if (personalMovieDB.count < 10) {
//         console.log('Переглянуто доволі мало фільмів');
//     } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30){
//         console.log('Ви класичний глядач');
//     } else if (personalMovieDB.count > 30){
//         console.log('Ви кіноман');
//     } else {
//         console.log('Відбулась помилка')
//     }
// }

// detectPersonalLevel();

// console.log(personalMovieDB);
// function showMyDB(){
//     if (personalMovieDB.privat == false) {
//         console.log(personalMovieDB);
//     }
// }

// function first() {
//     // Do something
//     setTimeout(function(){
//         console.log(1);
//     }, 500);
// }

// function second()  {
//     console.log(2);
// }

// first();
// second();

// function learnJS(lanп, callback){
//     console.log(`Я вчу %{lang}`);
//     callback();
// }

//  function done() {
//     console.log('Я проходжу цей урок!');
//     }

// learnJS('Javascript', done);

// const options = {
//   name: "test",
//   widith: 1024,
//   height: 1024,
//   coloes: {
//     border: "black",
//     red: "red",
//   },
// };

// console.log(options.neme);
// delete options.name;
// console.log(options);

// const options = {
//     name: 'test',
//     width: 1024,
//     height: 1024,
//     colors: {
//         border: 'black',
//         bg: 'red'
//     }
// };

// console.log(options.name);

// delete options.neme;

// console.log()

// const arr = [2, 3, 4, 6, 8, 10];
// // arr[99] = 0;
// // console.log(arr.length);
// // console.log(arr);

// arr.forEach(function (item, i, arr) {
//   console.log(`${i}: ${item} в середині ${arr}`);
// });

// for (let value of arr) {
//     console.log(value);
//   }

// arr.push(10);
// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }


// const str = prompt("", ""); 
// const products = str.split(", ");
// products.sort();
// console.log(products.join(','))


