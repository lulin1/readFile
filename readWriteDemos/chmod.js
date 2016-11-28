var fs = require('fs');
fs.chmod('../readWriteDemos/test.txt',0600,function(err){
	if (err) console.log('操作文件权限操作失败');
	else console.log('操作文件权限操作成功')
})