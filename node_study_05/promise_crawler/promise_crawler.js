var http = require('http')
var Promise = require('bluebird')
var cheerio = require('cheerio')
var baseUrl = 'http://www.imooc.com/learn/'
var videoIds = [348, 75, 637, 221, 556]

function filterChapters(html) {
	var $ = cheerio.load(html)
	var chapters = $('.chapter')
	var title = $('#main .hd h2').text()
	// var number = parseInt($($('#main .statics .static-item')[1]).find('.js-learn-num').text().trim(), 10)
	var number = parseInt($('.js-learn-num').text(), 10)

	// courseData = {
	// 	title: title,
	// 	videos: [{
	// 		chapterTitle: '',
	// 		videos: [
	// 			title: '',
	// 			id: ''
	// 		]
	// 	}],
	// 	number: number
	// }
	// 
	
	
	var courseData = {
		title: title,
		number: number,
		videos: []
	}

	chapters.each(function(item) {
		var chapter = $(this)
		var chapterTitle = chapter.find('strong').text()
		var videos = chapter.find('.video').children('li')

		var chapterData = {
			chapterTitle: chapterTitle,
			videos: [

			]
		}
		videos.each(function(item) {
			var video = $(this).find('.J-media-item')
			var videoTitle = video.text()
			var id = video.attr('href').split('video/')[1]

			chapterData.videos.push({
				title: videoTitle,
				id: id
			})
		})
		courseData.videos.push(chapterData)
	})

	return courseData
}

function printCourseData(coursesData) {
	coursesData.forEach(function(courseData) {
		console.log(courseData.number + '人学过：' + courseData.title + '\n')
	})

	coursesData.forEach(function(courseData) {
		console.log('### ' + courseData.title + '\n')
		courseData.videos.forEach(function(item) {
			var chapterTitle = item.chapterTitle

			console.log(chapterTitle + '\n')

			item.videos.forEach(function(video) {
				console.log('   【' + video.id + '】' + video.title + '\n')
			})
		})
	})
}

function getPageAsync(url) {
	return new Promise(function(resolve, reject) {
		http.get(url, function(res) {
			var html = ''

			res.on('data', function(data) {
				html += data 
			})

			res.on('end', function() {
				resolve(html)

				// var courseData = filterChapters(html)
			})
		}).on('error', function(e) {
			reject(e)
			// console.log('获取数据失败')
		})
	})
}

var fetchCourseArray = []

videoIds.forEach(function(id, index) {
	fetchCourseArray.push(getPageAsync(baseUrl + id))
})

Promise
	.all(fetchCourseArray)
	.then(function(pages) {
		var coursesData = []

		pages.forEach(function(html) {
			var courses = filterChapters(html)
			coursesData.push(courses)
		})
		coursesData.sort(function(a, b) {
			return a.number < b.number
		})
		printCourseData(coursesData)
	})