var fs = require('fs');
var options = {
	flag : 'a'
}
fs.writeFile('../readWriteDemos/message.txt','这是追加的数据。',options,function(err) {
	if (err) {
		console.log('写文件操作失败！');
	} else {
		console.log('写文件操作成功！');
	}
})