console.log('welcome')

const taskOne = () =>  {
	return new Promise((resolve, reject)=> {
		resolve('task 1 is completed')
	})
}
const taskTwo = () =>  {
	return new Promise((resolve, reject)=> {
		// resolve('task 2 is complet/ed')
		setTimeout(()=> {
			resolve('task 2 is completed')
		},2000)
	})
}
const taskThree = () =>  {
	return new Promise((resolve, reject)=> {
		// resolve('task 3 is  completed')
		reject('task 3 is not completed')
	})
}
const taskFour = () =>  {
	return new Promise((resolve, reject)=> {
		resolve('task 4 is completed')
	})
}


taskOne()
.then((res) => {console.log(res)})
.then(taskTwo)
.then((res)=> console.log(res))
.then(taskThree)
.then((res)=> console.log(res))
.then(taskFour)
.then((res)=> console.log(res))
.catch((err)=> console.log(err)) // 1 ta catch ei jotheshto and reject hoile r smne agame na...

console.log('bye')