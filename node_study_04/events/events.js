var EventEmitter = require('events').EventEmitter

var life = new EventEmitter()

life.setMaxListeners(11)

function removeWork(who) {
	console.log(who + ' is removed')
}	

life.on('work', removeWork)

life.on('work', function(who) {
	console.log(who + ' work')
})

life.on('work', function(who) {
	console.log(who + ' eat')
})

life.on('work', function(who) {
	console.log(who + ' drink')
})

life.on('work', function(who) {
	console.log(who + ' see')
})

life.on('work', function(who) {
	console.log(who + ' speak')
})

life.on('work', function(who) {
	console.log(who + ' sleep')
})

life.on('work', function(who) {
	console.log(who + ' visit')
})

life.on('work', function(who) {
	console.log(who + ' sing')
})

life.on('work', function(who) {
	console.log(who + ' listen')
})

life.on('work', function(who) {
	console.log(who + ' toilet')
})

life.on('award', function(who) {
	console.log(who + ' is the best')
})

// life.removeListener('work', function(who) {
// 	console.log(who + ' study is removed')
// })

life.removeListener('work', removeWork)

life.removeAllListeners()

var hasWorkListener = life.emit('work', 'rjd')
var hasAwardListener = life.emit('award', 'rjd')
var hasWhatListener = life.emit('what', 'rjd')

// console.log(life.listeners('work').length)
// 如果不传事件名则不移除任何事件
// console.log(life.listeners().length)

// 这里用EventEmitter身上的方法listenerCount，第一个参数是实例的对象名，第二个是监听的事件名
console.log(EventEmitter.listenerCount(life, 'work'))

console.log(hasWorkListener, hasAwardListener, hasWhatListener)