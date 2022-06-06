console.log('app')

// list of browser events: https://developer.mozilla.org/en-US/docs/Web/Events


// register an event listener on the button
// document.querySelector('button').onclick = function () {
// 	// console.log('click')
// 	let h1 = document.querySelector('h1')
// 	h1.style.backgroundColor = 'red'
// 	console.log(h1.style.backgroundColor)
// }

// another way to register an event listener 
// document.querySelector('button').addEventListener('click', function () {
// 	console.log('click')
// })

// document.querySelector('input').addEventListener('keyup', function () {
// 	console.log('key up')
// })

document.querySelector('button').addEventListener('click', addTodo)

// register an event listener on every one of the list elements
document.querySelectorAll('li').forEach(function (li) {
	li.addEventListener('click', toggleTodo)
})


function toggleTodo(event) {
	// console.log('toggle')
	// console.log(event.target)
	// this toggles the class checked on the clicked li element

	event.target.classList.toggle('checked')

	// this removes a clicked element from the list
	// use removeChild()
	const list = document.querySelector('ul')
	// you can also move up levels in the structure
	console.log(event.target.parentNode.parentNode)
	// event.target is the element that we want to remove
	// list.removeChild(event.target)

	//alternative to removeChild() is remove()
	// you call that on the element to be removed
	event.target.remove()
}

function addTodo() {
	// retrieve the value from the input field
	const input = document.querySelector('input')
	// access the value
	console.log(input.value)
	const todo = document.createElement('li')
	todo.innerText = input.value
	// add the event listener to toggle this element
	todo.addEventListener('click', toggleTodo)

	console.log(todo)
	// add this element to the list
	// we use appendChild() - we need to select the list first
	const list = document.querySelector('ul')
	list.appendChild(todo)
	// clear the input field
	input.value = ''
}