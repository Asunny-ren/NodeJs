var pet = {
	words : '...',
	speak : function(say) {
		console.log(say + ' ' + this.words)
	}
}

// pet.speak('Speak')

var dog = {
	words: 'wang'
}
// pet.speak.call(dog, 'Dog')
pet.speak.apply(dog, ['Dog'])