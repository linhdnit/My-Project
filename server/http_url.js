/*	var http = require('http');
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(req.url); // reg.url là phần chứa url ở sau tên domain
    res.end();
}).listen(8080);
*/
var http = require('http');
var url = require('url'); // module URL dùng để tách chuỗi truy vấn --- dammio.com
 
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  var q = url.parse(req.url, true).query; // chuyển truy vấn thành đối tượng q chứa các thuộc tính truy vấn và giá trị của chúng
  var txt = q.year + " " + q.month;
  res.end(txt);
}).listen(8080);