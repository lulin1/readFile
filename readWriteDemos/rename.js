var fs = require('fs');
var file = fs.rename('../readWriteDemos/messageWrite.txt','../test/one.txt',function(err){
	if (err) console.log('操作文件权限操作失败');
	else console.log('操作文件权限操作成功')
})
	
