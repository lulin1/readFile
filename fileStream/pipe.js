var fs = require('fs');
var file = fs.createReadStream('../test1.txt');
var out = fs.createWriteStream('../test2.txt');
file.pipe(out);