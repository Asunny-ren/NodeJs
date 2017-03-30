var student = require('./student.js')
var teacher = require('./teacher.js')

teacher.add('scoor')
function add(teacherName,students) {
	teacher.add(teacherName)

	students.forEach(function(item, index) {
		student.add(item)
	})
}

//传统一个模块实例
//一般用这种方式
exports.add = add


//希望模块成为一个特别的模块的时候用module.exports
//真实存在的东西，exports是module.exports的一个辅助方法
//返回的给调用者
//exports挂载属性和方法
//module.exports = add