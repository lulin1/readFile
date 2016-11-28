var fs = require('fs');
fs.readFile('./test.txt',function(err,data) {
	if(err) {
		console.log('error!!');
	} else {
		console.log(data.toString());
	}
})