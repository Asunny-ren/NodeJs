var grade = require('./class')

exports.add = function(grades) {
	grades.forEach(function(item, index) {
		var _grade = item
		var _teacher = item.teacher
		var _students = item.students

		grade.add(_teacher, _students)
	})
}