var https = require('https')
var fs = require('fs')

var options = {
	//私钥文件
	key: fs.readFileSync('ssh_key.pem'),
	//证书文件
	cert: fs.readFileSync('ssh_cert.pem') 
}

https
	.createServer(options, function(req, res) {
		res.writeHead(200)
		res.end('hello nodejs')
	})
	.listen(8090)