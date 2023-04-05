let newObject = {
	addByDotWriting: 'newObject.',
	addBySquareWriting: 'newObject[]'
}

let mySister = 'My Sister'
let myMother = 'My Mother'

newObject.Name = 'Aleksey'
newObject.Surname = 'Levada'
newObject.CityOfBourne = 'Khartsyzsk'
newObject.Age = 32
newObject.Location = 'Moscow'
newObject[mySister] = 'Julia'
newObject[myMother] = 'Galina'
newObject.DateOfBirth = {
	Day: 5,
	Month: 12,
	Year: 1988,
}

//console.log(newObject)

let newObject_2 = JSON.parse(JSON.stringify(newObject))
//console.log(newObject_2)
newObject_2.DateOfBirth.Day = 7
newObject_2.Location = 'Khartsyzsk'
newObject_2.Age = 33



//  Конвертация объектов в JSON и обратно в JS (удобная вещь для копирования объектов с вложеными свойствами имеющие в значении объект)
// let newObjectToJSON = JSON.stringify(newObject)
// console.log(newObjectToJSON)

// let newObjectToJS = JSON.parse(newObjectToJSON)
// console.log(newObjectToJS)

let objectX = {
	age: 32,
	name: 'alex',
	surname: 'famyli',
	innerObject: {
		0: 0,
		1: 1,
		2: 2,
	}
}
//console.log(objectX)

let copyOfObjectX = { ...objectX }
copyOfObjectX.innerObject = {
	Name: 'Joackin',
	Surname: 'Joackinovich',
	Double: 'Treble',
}
//delete copyOfObjectX.innerObject
copyOfObjectX.age = 33
//console.log(copyOfObjectX)


var DataBase = [
	{
		ID: 1,
		NAME: "Alex",
		FAMILY: "SMIT",
		AGE: 18,
		WORK: "IBM",
	},
	{
		ID: 2,
		NAME: "Tom",
		FAMILY: "Grove",
		AGE: 32,
		WORK: "Google",
	},
	{
		ID: 3,
		NAME: "Valary",
		FAMILY: "SMASH",
		AGE: 47,
		WORK: null,
	},
	{
		ID: 4,
		NAME: "Sam",
		FAMILY: "Born",
		AGE: 30,
		WORK: "Google",
	},
	{
		ID: 5,
		NAME: "Mike",
		FAMILY: "Dev",
		AGE: 28,
		WORK: "Microsoft",
	},
	{
		ID: 6,
		NAME: "Mikela",
		FAMILY: "Devoblone",
		AGE: 62,
		WORK: "Microsoft",
	},
	{
		ID: 7,
		NAME: "Olaf",
		FAMILY: "Doglas",
		AGE: 47,
		WORK: "Fifsta",
	},
	{
		ID: 8,
		NAME: "Gendalf",
		FAMILY: "Sovrnantos",
		AGE: 39,
		WORK: "PEREKRESTOK",
	},

]


var myArr_1 = [1, 2, 3, 4, 5]

var myArr_2 = [5, 4, 3, 2, 1]

var myArrT = [1, 2, 3, 4, 5]


//Перебор массивов по элементам
// forEach()

//Редактирование, добавление, удаление, соединение, копирование элементов в массиве
// 	splice()
// 	slice()
// 	concat()

//Поиск элементов в массиве по его значекнию
// 	indexOF()
// 	lastIndexOf()
// 	includes()

//Поиск фильтрация сортировка элементов по массиву c помощью встроенной анонимной или стрелочной функции  
// find() - (element => element === '?')
// findIndex() -(element => element === '?')  
// filter() - (element => element === '?')
// sort() - ((a,b) => a - b) - обязательно функция должна иметь инструкцию return 
// reverse()

//Преобразование массива - получение нового массива на основе родительского массива
// map() 


// split() - Разбивка строки на элемменты и компановка символов в один массив 
// join()


// Узнать тип объекта массив ли это или нет
// Array.isArray() - true или false

// ]

var mainContainer = document.querySelector('.container')
var btnRemove = document.querySelector('[data-type="remove"]')
var btnApend = document.querySelector('[data-type="apend"]')

// btnRemove.addEventListener('click',function(){
// 	var item = document.querySelector('.container__item')
// 	item.remove()
// })

// Шаблон 
var addTemplate = function (element) {
	return `<div class="container__item">Text Here #${element.number}</div>`
}

//База данных
var BASE = [
	{ number: '1' },
	{ number: '2' },
	{ number: '3' },
	{ number: '4' },
	{ number: '5' },
	{ number: '6' },
	{ number: '7' },
	{ number: '8' },
	{ number: '9' },
	{ number: '10' },
]

// function addLiElements(){
// 	var ulList = document.createElement('ul')
// 	for ( var i = 0;i < 3; i++){
// 		var randomNumber = Math.round(Math.random()*100)
// 		var listItem = document.createElement('li')
// 		listItem.classList.add('listElement')
// 		listItem.innerHTML = randomNumber
// 		ulList.append(listItem)
// 	}
// 	console.log(ulList)
// 	return ulList
// }
// addLiElements()




// 26 Упражнений для прокачки навыков работы с DOM  деревом в JS

var body = document.querySelector('body')
body.style.backgroundColor = 'pink'

var firstDiv = document.createElement('div')
firstDiv.classList.add('wrapper')
firstDiv.style.background = '#c8c8c8'

body.prepend(firstDiv)

var firstHeader = document.createElement('h1')
firstHeader.insertAdjacentText("afterbegin", 'DOM (Document Object Model')

firstHeader.style.textAlign = 'center'
firstHeader.style.marginTop = '50px'
firstHeader.style.color = 'green'
firstHeader.style.fontSize = '40px'
firstHeader.style.fontWeight = 'bold'
firstHeader.style.fontFamily = 'Trebuchet MS'


// var ulList = `
// <ul>
// 	<li>One</li>
// 	<li>Two</li>
// 	<li>Three</li>
// </ul>
// `
// firstDiv.innerHTML = ulList
// body.prepend(firstHeader)

var secondDiv = document.createElement('div')
secondDiv.classList.add('secondDiv')
secondDiv.style.background = 'brown'
secondDiv.style.textAlign = 'center'


firstDiv.insertAdjacentElement('afterend', secondDiv)
// var secondHeader = document.createElement('h1')
//  secondHeader.insertAdjacentText('afterbegin','Hi There!')
//  secondDiv.insertAdjacentElement('afterbegin',secondHeader)

//  var img = document.createElement('img')
//  img.setAttribute('src','https://cdn-icons-png.flaticon.com/512/1674/1674292.png')
//  img.setAttribute('width','150')
//  img.classList.add('super')
//  img.setAttribute('alt','Super Man')

//  firstDiv.insertAdjacentElement('beforeend',img)

var htmlStroke = `
 <div class="pDiv">
	<p>Первый параграф</p>
	<p>Второй параграф</p>
 </div>
 `
firstDiv.insertAdjacentHTML('afterbegin', htmlStroke)

var secondP = document.querySelectorAll('p')[1]
var firstP = document.querySelectorAll('p')[0]

secondP.classList.add('text')
firstP.remove()
secondP.remove()

var Date = new Date()
currentYear = Date.getFullYear()

var generateAutoCards = function (brand, year, color, engine, photo) {
	return `
	<div class='auto__card'>
		<h2>${brand} ${year} года</h2>
		<p>Автомобиль ${brand} - ${year} года. Имеет ${engine} двигатель. Возраст автомобиля ${currentYear - year} лет</p>
		<img class='car_image' src='${photo}' width='250px' height='200px'>
		<button class='card-btn'>Удалить</button>
	</div>
	`
}

var divAutos = document.createElement('div')
divAutos.classList.add('autos')
divAutos.style.textAlign = 'center'
secondDiv.insertAdjacentElement('afterend', divAutos)

var cardList = [
	{
		brand: 'Tesla',
		year: '2019',
		color: 'red',
		engine: 'дизельный',
		photo: 'https://www.autostat.ru/application/includes/blocks/big_photo/images/cache/000/105/689/52607d18-670-0.jpg',
	},
	{
		brand: 'Lexus',
		year: '2015',
		color: 'Silver',
		engine: 'дизельный',
		photo: 'https://carsapa.ru/files/images/autos/lexus/2017gx460_suv/lexus_2017_gx460_suv_01.jpg',
	},
	{
		brand: 'Nissan',
		year: '2010',
		color: 'Purple',
		engine: 'бензиновый',
		photo: 'https://s.auto.drom.ru/i24273/pubs/4/88965/3855196.jpg',
	},
]

cardList.map(function (element) {
	divAutos.insertAdjacentHTML('beforebegin', generateAutoCards(element.brand, element.year, element.color, element.engine, element.photo))
})

function replaceToDiv() {
	for (var i = 0; i < 3; i++) {
		var autoCard = document.querySelector('.auto__card')
		divAutos.insertAdjacentElement('afterbegin', autoCard)
	}
}
replaceToDiv()

firstDiv.insertAdjacentElement("beforebegin", divAutos)

var btns = document.querySelectorAll('.card-btn')


//Для удаления и работы с методом EVENT 
//https://developer.mozilla.org/ru/docs/Web/API/Element/closest


delItem = function (event) {
	var itemForRemove = event.currentTarget.closest('.auto__card')
	itemForRemove.remove()
}

btns.forEach(function (element) {
	element.addEventListener('click', delItem)
})



// var firstItem = document.createElement('div')
// firstItem.classList.add('main-container')

// var secondItem = document.createElement('p')
// secondItem.classList.add('main-paragraph')

// var thirdItem = document.createElement('a')
// thirdItem.classList.add('main-link')

// var fourthItem = `<p>Theory</p>`

// firstItem.insertAdjacentElement("beforeend", secondItem)
// secondItem.insertAdjacentText("afterbegin",'Текст в параграфе')
// secondItem.insertAdjacentElement("afterend",thirdItem)
// thirdItem.insertAdjacentText("afterbegin",'Link for Share')
// thirdItem.insertAdjacentHTML("afterend",fourthItem)

//Свойства навигации элементов в DOM дереве

//innerHTML
//append()
//prepend()
//appendChild()
//removeChild()
//insertAdjacentHTML(option,item)
//insertAdjacentElement(optipn, item)
//insertAdjacentText(option,item)


// Важное понимание работы объекта Event

//target - отвечает за текущий элемент н котором произошло событие
//currentTarget - отвечает за узловой элемент на котором произошло событие
var myFn = function (e) {
	var currTarget = e.currentTarget
	var target = e.target
	//console.log('currTarget', currTarget)
	//console.log('target', target)
	target.remove()
}

var buttons = document.getElementsByClassName('auto__card')
var button
for (button of buttons) {
	button.addEventListener('click', myFn)
}




//Добавление одиночных карточек по шаблону через динамическое создание объекта в массиве

// var mainContainer = document.querySelector('.container__create-task')
// var mainBtn = document.querySelector('.container__btn')
// var inputID = document.querySelector('.input__field__id')
// var inputMainTask = document.querySelector('.input__field__main-text')
// var inputTmpTask = document.querySelector('.input__field__tmp-text')
//
// var data_base = []
//
// var newElement = function () {
// 	mainContainer.innerHTML = ''
// 	var newMassiveElement = {
// 		id: inputID.value,
// 		main_text: inputMainTask.value,
// 		tmp_text: inputTmpTask.value,
// 	}
// 	data_base.push(newMassiveElement)
// 	data_base.map(function (element) {
// 		mainContainer.innerHTML += generateNewTemplate(element)
// 	})
// }
//
// var generateNewTemplate = function (information) {
// 	return `<div class="container__item" id="${information.id}">
// 				<h1>${information.id}</h1>
// 				<h1>${information.main_text}</h1>
// 				<p>${information.tmp_text}</p>
// 			</div>
// 			`
// }
//
// mainBtn.addEventListener('click', newElement)




/* Базовые принципы ООП */

/* 1. Наследование - Наследование определенными классами методов свойств и атрибутов другими классами и прототипами
Наследование осуществляется с помощью ключевого слова super() (это - функция) Если необходимо унаследовать определенные
 свойства и методы - эти методы передаются как параметр в круглые скобки super(name, surname) и в дальнейшем вызываются 
 в теле вызываемого класса с помощью ключевого слова this (this.name)(this.surname). Если необходимо унаследовать все
  свойства и методы, в круглые скобки ключевого слова super() ничего передавать не нужно... Унаследуются только
   ЗНАЧЕНИЯ свойств атрибутов и методов. Сами свойства и атрибуты не унаследуются.
*/



class Name {
	constructor(name) {
		name = 'Aleksey'
		this.name = name
	}
	getName() {
		return this.name
	}
}

const personName = new Name('Ivan')
//console.log(personName)


class Surname extends Name {
	constructor(surname) {
		super()
		this.surname = surname
	}
	getSurname() {
		return this.surname
	}
}

const personSurname = new Surname('Ivanov')
//console.log(personSurname)



/*
	Инкапсуляция - принцип ООП который ограничивает доступ к своим свойствам атрибутам и методам извне, Есть три уровня доступа: 
		  	
			1. Публичный - могут унаследовать любые классы

			2. Защищенный - могут унаследовать (но по договоренности программистов менять и наследовать
				нежелательно), обозначается ключевым знаком _attr, _method().  

			3. Приватный - свойства, атрибуты и методы унаследовать невозможно. Возможно использовать 
				исключительно в блоке созданого класса. И обозначается ключевым знаком #privateAttr, #someMethod() 
*/

class Incapsulation extends Name {
	#privateAttribute = 'Приватный атрибут Incapsulation'
	constructor(name) {
		super()
		this.name = name
	}
	getPrivateAttribute() {
		//Функция для возврата приватного атрибута (с её помощью можно унаследовать приватный атрибут в других классах)
		return this.#privateAttribute
	}
	getPrivateMethod() {

	}
}

// new Incapsulation().#privateAttribute - таким образом невозможно обратиться к приватному атрибуту

//  С помощью метода который возвращаяет приватный атрибут, можно использовать,
//  приватный атрибут в текущем классе, а также возможно далее обратиться и 
//	унаследовать приватный атрибут в других классах и экземплярах класса.

//console.log(new Incapsulation().getPrivateAttribute())



class Incapsulation_2 extends Incapsulation {
	constructor() {
		super()
	}
	#getPrivateMethod_2() {
		// Подчеркнутый this.#privateAttribute не наследуется, так как закрыт (инкапсулирован в классе Incapsulation)
		//console.log('Приватный атрибут', this.#privateAttribute)
	}
	getPrivateAttributeFromParent() {
		const setPrivateAttr = this.getPrivateAttribute()
		//console.log(setPrivateAttr)
		return setPrivateAttr
	}
}
// В результате того что Incapsulation  открыл доступ к приватному атрибуту с помощью метода getPrivateAttribute(), теперь можно обратиться к приватному атрибуту #privateAttribute в Incapsulation_2

//console.log('Приватный атрибут Incapsulation в Incapsulation_2', new Incapsulation_2().getPrivateAttribute())


const setPrivateAttribute = new Incapsulation_2().getPrivateAttributeFromParent()

//console.log(setPrivateAttribute)





/*
	Полиморфизм (Абстракция) - принцип ООП который является тесно связанным с другими принципами ООП.
	Полиморфизм позволяет на основе одного или нескольких классов создавать многообразие созданных форм и объектов

*/

class Auto {
	constructor() {
		this.brand = ''
		this.mark = ''
		this.year = ''
		this.engine = ''
		this.body = ''
	}
	getBrand() {
		//console.log(`Представляем вашему вниманию автомобиль бренда ${this.brand}`)
	}
	getFullDescription() {
		//console.log(`Бренд ${this.brand}, в ${this.year} году выпустил с конвеера новейшую модель ${this.mark} оснащенную двигателем ${this.engine} Л/С в кузове ${this.body}`)
	}
}

// Создадим класс который будет наследовать абстрактный класс

class BMW extends Auto {
	constructor() {
		super()
		this.brand = 'BMW'
		this.mark = '513i'
		this.year = '2012'
		this.engine = '400'
		this.body = 'Седан'
	}
}

class Toyota extends Auto {
	constructor() {
		super()
		this.brand = 'Toyota'
		this.mark = 'Camry'
		this.year = '2019'
		this.engine = '370'
		this.body = 'Хечбэк'
	}
}

class KIA extends Auto {
	constructor() {
		super()
		this.brand = 'KIA'
		this.mark = 'Optima'
		this.year = '2010'
		this.engine = '300'
		this.body = 'Минивен'
	}
}


const BMW_513i = new BMW().getFullDescription()
const Toyota_Camry = new Toyota().getFullDescription()
const KIA_Optima = new KIA().getFullDescription()




// Генератор случайных ID (легкий аналог UUID модуля)

const massive = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

let newMassive = []
const generateUId = () => {
	for (let i = 0; i <= 10; i++) {
		let randomChar = Math.round(Math.random() * massive.length)
		newMassive.push(massive[randomChar])
	}
	return newMassive.join('')
}
generateUId()

const genID = generateUId()
//console.log(genID)



// Запрос погоды по геолокации, долготе и широте, по любому населенному пункту, через созданый новый экземпляр класса

// class WeatherForCity {
// 	API_key = '6862cc7f1455f65adedc5e29612912e5'
// 	constructor(lat, lon){
// 		this.latitude = lat
// 		this.longitude = lon
// 	}
// 	getWeather(){
// 		axios
// 			.get(`https://api.openweathermap.org/data/2.5/weather?lat=${this.latitude}&lon=${this.longitude}&appid=${this.API_key}`)
// 			.then(response => {
// 				console.log(response)
// 			})
// 	}
// }

// const Moscow = new WeatherForCity(57, 37).getWeather()

// Функция проверки массива на дубликаты
const arr = [15, 1, 2, 3, 4, 4, 5, 6, 6, 7, 7, 8, 9]

const myFunc = (arr) => {
	const uniqueMass = []
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] !== arr[i - 1] && arr[i] !== arr[i + 1]) {
			uniqueMass.push(arr[i])
		}
	}
	// console.log(uniqueMass)
}
myFunc(arr)

// Еще один способ проверить массив на дубликаты - это объеект класса Set()
let array = [1, 'asdf', 'test', 15, {}, 'asdf', 15, {}, 16, '16']

let clearArray = new Set(array)

//console.log(clearArray)



// Каррирование
// var multiplyAll = a => b  => a.map(w =>  w * b)



// function wordsToMarks(string){
// 	var res = []
// 	var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
// 	for (s of string){
// 	  res.push(alphabet.findIndex(i => i == s) + 1)
// 	}
// 	return res.reduce((partialSum, a) => { return partialSum + a}, 0)
//   }

// const winePromise = new Promise((resolve, reject) => {
// 	setTimeout(() => {
// 		fetch('https://api.sampleapis.com/wines/reds')
// 		.then(res => res.json())
// 		.then(data => resolve(data))
// 	}, 2000)
// })
// winePromise.then(data => console.log(data))

const getWineList = async () => {
	const wineList = await fetch('https://api.sampleapis.com/wines/reds')
	.then(res => res.json())
	.then(data => data)
	return wineList
}

const getBeerList = async () => {
	const beerList = await fetch('https://api.sampleapis.com/beers/ale')
	.then(res => res.json())
	.then(data => data)
	return beerList
}




const compareAlcohol = () => {
	const compareMass = []
	const getWineList = async () => {
		await fetch('https://api.sampleapis.com/wines/reds')
		.then(res => res.json())
		.then(data => {
			data.map(el => {
				compareMass.push(el)
			})
		})
	}
	getWineList()
	const getBeerList = async () => {
		await fetch('https://api.sampleapis.com/beers/ale')
		.then(res => res.json())
		.then(data => {
			data.map(el => {
				compareMass.push(el)
			})
		})
	}
	getBeerList()
	return compareMass
}
compareAlcohol()
const someData = compareAlcohol()