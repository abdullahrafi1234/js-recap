// Array.prototype.filter()

// condition match korar por baki element gulao diye de

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

let result = numbers.filter((currentValue, index, arr) => {
	console.log(index)
	console.log(arr)
	return currentValue> 4

})
console.log(result)