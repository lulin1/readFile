var fs = require('fs');
fs.readFile('../readWriteDemos/message.txt',function(err,data) {
	if(err) {
		console.log('error!!');
	} else {
		console.log(data.toString());
	}
})