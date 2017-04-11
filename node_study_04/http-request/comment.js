var http = require('http')
var querystring = require('querystring')

var postData = querystring.stringify({
	'content': '为什么我的评论不在前面',
	'mid': 8837
})

var options = {
	hostname: 'www.imooc.com',
	port: 80,
	path: '/course/docomment',
	method: 'POST',
	headers:{
		'Accept': 'application/json, text/javascript, */*; q=0.01',
		'Accept-Encoding': 'gzip, deflate',
		'Accept-Language': 'zh-CN,zh;q=0.8',
		'Connection': 'keep-alive',
		'Content-Length': postData.length,
		'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
		'Cookie': 'PHPSESSID=0nnero5aqatgaigg5i90l0u0d3; imooc_uuid=396aaace-92f2-4dba-bdab-88f283cd7009; imooc_isnew=1; imooc_isnew_ct=1491879377; loginstate=1; apsid=QzYzU2MGIwMDc3N2E5YmYyYmU1YjkwZTA3NGNkYWQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMzY3ODUxOQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAxMzk4NDg4MTY1QHFxLmNvbQAAAAAAAAAAAAAAAAAAAGMxN2ZlMjg1YmJlZjUzMzg5YzNhMjk5ODI2YjNjOGI2i0bsWItG7Fg%3DMG; last_login_username=1398488165%40qq.com; IMCDNS=0; Hm_lvt_f0cfcccd7b1393990c78efdeebff3968=1491879377; Hm_lpvt_f0cfcccd7b1393990c78efdeebff3968=1491896958; cvde=58ec45d1eb6cc-91',
		'Host': 'www.imooc.com',
		'Origin': 'http://www.imooc.com',
		'Referer': 'http://www.imooc.com/video/8837',
		'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/57.0.2987.133 Safari/537.36',
		'X-Requested-With': 'XMLHttpRequest',
	}
}


var req = http.request(options, function(res) {
	console.log('status: ' + res.statusCode)
	console.log('headers: ' + JSON.stringify(res.headers))

	res.on('data', function(chunk) {
		console.log(Buffer.isBuffer(chunk))
		console.log(typeof chunk)
	})

	res.on('end', function() {
		console.log('评论成功！')
	})

})
req.on('error', function(e) {
	console.log('Error: ' + e.message ||'评论失败！')
})

req.write(postData)

req.end()