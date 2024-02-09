// 1 задание

let userName = prompt("Введите ваше имя")

alert("Привет, "  + userName)

// 2 задание 

const today = 2024
let userAge = promt("Введите ваш возраст")
let totalUserAge = today - userAge

alert("Ваш возраст = " + totalUserAge)

// 3 задание

let sideLengthSquare = prompt("Введите длинну стороны квадрата")
let perimetr = sideLengthSquare * 4

alert("Периметр квадрата = " + perimetr)

// 4 задание 

const pi = 3.14
let radiusOfCircle = prompt("Введите радиус окружности")
let squareOfCircle = pi * radiusOfCircle ** radiusOfCircle

alert("Площадь окружности = " + squareOfCircle)

// 5 задание 

let distance = prompt("Введите расстояние в км между двумя городами")
let hours = prompt("Введите за сколько вы хотите добраться из пункта A до пункта B")
let speed = distance / hours

alert("Вы должны двигаться со скоростью " + speed + "чтобы добраться за " + hours)

// 6 задание

const EuroExchangeRate = 1.08
let dollars = prompt("Введите доллары")
let euroToDollars = 1.08 * dollars

alert("Доллары в евро = " + euroToDollars)

// 7 задание

let flashDriveSize = prompt("Укажите объем флешки в Гб:")
let filesCount = Math.floor(flashDriveSize * 1024 / 820)

alert("На флешке объемом " + flashDriveSize + " Гб поместится " + filesCount + " файлов по 820 Мб.")

// 8 задание 

let money = prompt("Введите сумму в кошельке")
let costOfChocalate = promt("Введите стоимость шоколадки")
let quantity = money / costOfChocalate // количество шоколадок
let change = money % costOfChocalate // сдача

alert("количество шоколадок" + quantity + "сдача" + change)

// 9 задание

let num = prompt("Введите трехзначное число")
let firstElementInNum = num % 100
let secondElementInNum = (num % 100) / 10
let thirdElementInNum = num % 10
let reversedNum = firstElementInNum + secondElementInNum + thirdElementInNum

alert("Число задом наперед " + reversedNum)
// 10 задание

let number = promt("Введите число ")
let isNumberEvenOrNot = (number % 2 === 0) ? alert("Число четное") : alert("число нечетное")