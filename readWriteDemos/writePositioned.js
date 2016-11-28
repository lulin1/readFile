var fs = require('fs');
var buf = new Buffer('我喜爱编程啊啊啊啊！'); //一个汉字的utf编码为三个字节数据

fs.open('../readWriteDemos/messageWrite.txt', 'a', function(err, fd) {

    fs.write(fd, buf, 3, 9, 0, function(err, written, buffer) {
        fs.write(fd, buf, 12, 12, null, function(err, written, buffer) {
            if (err) { console.log('写文件操作失败') };
            console.log('写文件操作成功');
            fs.fsync(fd);
            fs.close(fd);
        })

    })

})