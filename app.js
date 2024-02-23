// 1 Переменные
// camelCase
// const firstName ='Ivan'
// const age = 26 // number
// const isProgrammer = true // boolean

// const __ = 'private'
// const $ = 'some value'

// const if = 'jhgjh' // err
// const withNum5 = '5'
// const 5withNum = 5 // err

// 2 Мутирование
// console.log('Имя человека: ' + firstName + ', а возраст: ' + age)
// alert('Имя человека: ' + firstName + ', а возраст: ' + age)

// const lastName = prompt('Введите фамилию')
// alert(firstName + ' ' + lastName)

// 3 Операторы
// let currentYear = 2020
// const birthYear = 1993

// const age = currentYear + birthYear

// const a = 10
// const b = 5

// let c = 32
// c = c + a
// c = c - a
// c = c * a
// c = c / a
// c += a
// c -= a
// c *= a
// c /= a

// console.log(a + b)
// console.log(a - b)
// console.log(a * b)
// console.log(a / b)
// console.log(++currentYear)
// console.log(--currentYear)
// console.log(c)

// 4 Типы данных
// const isProgrammer = true
// const name = 'Ivanov'
// const age = 26
// let x
// console.log(typeof isProgrammer)
// console.log(typeof name)
// console.log(typeof age)
// console.log(typeof x)
// console.log(typeof null)

// 5 Приоритет операторов
// const fullAge = 26
// const birthYear = 1993
// const currentYear = 2020

// > < >= <=
// const isFullAge = currentYear - birthYear >= fullAge // 27>=26 => true
// console.log(isFullAge)

// 6 Условные операторы
// const courseStatus = 'fail' // ready, fail, pending

// if (courseStatus === 'ready') {
//     console.log('Курс уже готов и его можно проходить')
// } else if (courseStatus === 'pending') {
//     console.log('Курс пока находится в процессе разработки')
// } else {
//     console.log('Курс не получился')
// }

// const isReady = true

// if (isReady) {
//     console.log('Все готово!')
// } else {
//     console.log('Все не готово!')
// }

// Тернарное выражение
// isReady ? console.log('Все готово!') : console.log('Все не готово!')

// const num1 = 42 // number
// const num2 = '42' // string

// console.log(num1 === num2)

// 7 Булевая логика
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators

// 8 Функции

// function calculateAge(year) {
//     return 2024 - year
// }


// console.log(calculateAge(1993))
// console.log(calculateAge(2019))
// console.log(calculateAge(1999))

// function logInfoAbout(name, year) {
//     const age = calculateAge(year)

//     if (age > 0) {
//         console.log('Человек по имени ' + name + ' сейчас имеет возраст ' + age)

//     } else {
//         console.log('Вообще-то это уже будущее!')
//     }
// }

// logInfoAbout('Иван', 1993)
// logInfoAbout('Елена', 1995)
// logInfoAbout('Иван', 2026)

// 9 Массивы
// const cars = ['Мазда','Мерседес', 'Форд']
// const cars = new Array('Мазда', 'Мерседес', 'Форд')
// console.log(cars)
// console.log(cars.length)
// console.log(cars[1])
// console.log(cars[0])
// console.log(cars[2])

// cars[0] = 'Porsche'
// cars[cars.length] = 'Mazda'
// console.log(cars)

// 10 Циклы
// const cars = ['Мазда', 'Мерседес', 'Форд', 'Porsche']

// for (let i = 0; i < cars.length; i++) {
//     const car = cars[i]
//     console.log(car)
// }

// for (let car of cars) {
//     console.log(car)
// }

// 11 Объекты
const person = {
    firstName: 'Ivan',
    lastName: 'Ivanov',
    year: 1993,
    languages: ['Ru', 'En', 'De'],
    hasWife: false,
    greet: function() {
        console.log('greet from person')
    }
}

console.log(person.firstName)
console.log(person['lastName'])
const key = 'year'
console.log(person[key])
person.hasWife = true
person.isProgrammer = true
console.log(person)

person.greet()