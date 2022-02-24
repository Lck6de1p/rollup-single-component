var http = require('http');
var fs = require('fs');//引入文件读取模块

var documentRoot = './';
//需要访问的文件的存放目录（项目所在位置的文件夹路径）

var server = http.createServer(function (req, res) {
    res.writeHead(200, {
		'Access-Control-Allow-Origin': 'http://localhost:8082',
		'Access-Control-Max-Age': 5000,
		'Access-Control-Expose-Headers': 'X-Test-Header',
		'Access-Control-Allow-Headers': 'X-Test-Header',
		'Access-Control-Allow-Methods': 'PUT,POST,GET,HEAD',
		'X-Test-Header': 'No! You are ugly'
	})

    var url = req.url;
    //客户端输入的url，例如如果输入localhost:8888/index.html
    //那么这里的url == /index.html 

    var file = documentRoot + url;
    console.log(url);


    fs.readFile(file, function (err, data) {
        /*
            一参为文件路径
            二参为回调函数
                回调函数的一参为读取错误返回的信息，返回空就没有错误
                二参为读取成功返回的文本内容
        */
        if (err) {
            res.writeHeader(404, {
                'content-type': 'text/html;charset="utf-8"'
            });
            res.write('<h1>404错误</h1><p>你要找的页面不存在</p>');
            res.end();
        } else {
            res.writeHeader(200, {
                'content-type': 'text/html;charset="utf-8"'
            });
            res.write(data);//将index.html显示在客户端
            res.end();

        }

    });



}).listen(8081);

console.log('服务器开启成功');



