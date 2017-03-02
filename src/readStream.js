var fs = require('fs');
var file = fs.createReadStream('../message.txt',{start:3,end:23});

file.on('open',function(fd){
	console.log('开始读取文件');
})

file.on('data',function(data){
	console.log('读取到数据');
	console.log(data.toString());
})

file.on('end',function(){
	console.log('文件已经全部读取完毕');
})

file.on('close',function(){
	console.log('文件被关闭');
})

file.on('error',function(){
	console.log('文件读取失败');
})