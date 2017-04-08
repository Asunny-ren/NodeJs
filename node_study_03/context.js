function pet(words) {
	this.words = words
	

	this.speak = function() {
		console.log(this.words)

		console.log(this === a)
	}
	console.log(this.speak)
}

var a = new pet('...')
// new的过程
//创建一个新的对象，这个对象的类型是 object；
//设置这个新的对象的内部、可访问性和[[prototype]]属性为构造函数（指prototype.construtor所指向的构造函数）中设置的；
//执行构造函数，当this关键字被提及的时候，使用新创建的对象的属性； 返回新创建的对象（除非构造方法中返回的是‘无原型’）。
//在创建新对象成功之后，如果调用一个新对象没有的属性的时候，JavaScript 会延原型链向止逐层查找对应的内容。这类似于传统的‘类继承’。
a.speak()
