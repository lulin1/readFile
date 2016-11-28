var fs = require('fs');
fs.symlink('../a','../b','dir',function(err){
	if (err) console.log('为目录操作符号链接失败。');
	else {
		fs.symlink(__dirname + '/a/message.txt',__dirname + '/a/anotherMessage.txt','file',function(err){
			if(err) console.log('为文件创建符号链接失败')
			else console.log('为文件创建符号链接成功')

		})
	}
})