const fs = require('fs')
const source = fs.readFileSync('../buffer/logo.png')

fs.writeFileSync('stream_copy_logo.png', source)