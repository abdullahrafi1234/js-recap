// parent child relation

const grandParent = document.querySelector('.todo-list')

const parent = grandParent.children
// console.log(parent)
const children = parent[1].children
// console.log(children)


// children to parent

const children2 = document.querySelector('.item')
// console.log(children2)
const parent2 = children2.parentElement
// console.log(parent2)

const grandParent2 = children2.closest('.todo-list')
// console.log(grandParent2)


// siblings
const childrenOne = document.querySelector('.item')
const childrenTwo = childrenOne.nextElementSibling
const childrenTwoPrevious = childrenTwo.previousElementSibling
childrenTwo.style.color = 'red'

console.log(childrenOne)
console.log(childrenTwo)
console.log(childrenTwoPrevious)