function pet() {
	this.words = '...',
	this.speak = function() {
		console.log(this.words)
	}
}

function dog(words) {
	pet.call(this, words)
	//pet.apply(this, arguments)
}

var Dog = new dog('wang')

Dog.speak()
