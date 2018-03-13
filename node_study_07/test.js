const fs = require('fs');

fs.writeFile('a.txt', '123', function (err) {
    console.log(err);
})
fs.readFile('a.txt', function (err, data) {
    console.log(data.toString());
})
