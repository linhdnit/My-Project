var http = require('http');
var formidable = require('formidable');
http.createServer(function (req, res) {
  if (req.url == '/login') {
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields) {
    var username = fields.username;
    var password = fields.password;
    console.log('username: ' + username + ' ---- password: ' + password);
    res.write('username: ' + username + ' ---- password: ' + password);
    res.end();
    });
  } else {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<form action="login" method="post">');
    res.write('username: <input type="text" name="username"><br>');
    res.write('password: <input type="password" name="password"><br>');
    res.write('<input type="submit">');
    res.write('</form>');
    return res.end();
  }
}).listen(8080);