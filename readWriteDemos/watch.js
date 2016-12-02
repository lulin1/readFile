var fs = require('fs');
var watcher = fs.watch('../readWriteDemos/test.txt',function(event,filename){
	console.log(1);
	console.log(event);
	console.log(2);
	console.log(filename);
	console.log(3);
	watcher.close();
})