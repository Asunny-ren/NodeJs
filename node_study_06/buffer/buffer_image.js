var fs = require('fs')

fs.readFile('logo.png', function(err, origin_buffer) {
	console.log(Buffer.isBuffer(origin_buffer))

	fs.writeFile('logo_buffer.png', origin_buffer, function(err) {
		if (err) console.log(err)
	})

	// var base64Image = new Buffer(origin_buffer).toString('base64')
	var base64Image  = origin_buffer.toString('base64')

	console.log(base64Image)

	var decodedImage = Buffer.from(base64Image, 'base64')

	console.log(Buffer.compare(decodedImage,origin_buffer))

	fs.writeFile('decoded_image.png', decodedImage, function(err) {
		if (err) console.log(err)
	})

})