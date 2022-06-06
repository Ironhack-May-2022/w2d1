// dom - document object model
// console.log(document)

// retrieve elements from the page

// getElement(s)By...

// querySelector() querySelectorAll() 

const section = document.getElementById('container')
// console.log(section)

// this returns an html collection - this is 
// similar to an array
const divs = document.getElementsByTagName('div')
// console.log(divs[0])

// 
const boxes = document.getElementsByClassName('box')
// console.log(boxes)

// same using querySelector()

const sect = document.querySelector('#container')
// console.log(sect)

// this returns a Node List - can also be used like 
// an array, here you can also use forEach()
const bxs = document.querySelectorAll('.box')
// console.log(bxs)

// you can pass any valid css selector
console.log(document.querySelector('body > ul > li:nth-child(2)'))

const firstDiv = document.querySelector('div')
console.log(firstDiv)
const allDivs = document.querySelectorAll('div')
console.log(allDivs)

// read the text from the section
// use innerText
const text = document.querySelector('section').innerText
console.log(text)
const innerHTML = document.querySelector('section').innerHTML
console.log(innerHTML)

console.clear()

// change values in the dom
// changing the heading on the page
// document.querySelector('h1').innerText = '🐵'

// document.querySelector('section').innerText = '<h3>new</h3>'

// uppercase all characters in the list
const list = document.querySelectorAll('li')
console.log(list)
list.map(function (el) {
	console.log(el)
})
// list.forEach(function (el) {
// 	// console.log(el)
// 	el.innerText = el.innerText.toUpperCase()
// })
// you could also use a for loop
for (let i = 0; i < list.length; i++) {
	// console.log(list[i])
}
// this would replace all the HTML in the body
// document.body.innerHTML = '<h1>Hello 👋</h1>'

console.clear()

// change the styling of an element

const h1 = document.querySelector('h1')
h1.style.backgroundColor = 'red'

// access the classes of an element 

// const boxes = document.getElementsByClassName('box')
const classList = boxes[0].classList
// console.log(boxes)
// you can add() and remove() classes
boxes[0].classList.add('new-class')
console.log(classList)

// add an attribute to a dom element
// add an id to the heading 
document.querySelector('h1').setAttribute(
	'id',
	'heading'
)

// you can use these methods not only on the document
// but also on dom nodes
const section1 = document.querySelector('section')
console.log(section1)

const innerH1 = section1.querySelector('h1')
console.log(innerH1)
