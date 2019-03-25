var express = require('express');
var app = express();
 
app.get('/hello', function(req, res){
   res.send("Hello World!");
});
app.post('/hello', function(req, res){
	res.send("Phuong thuc Post");
});
var userRouter = require('./userRouter');
app.use('/user',userRouter);
app.listen(3333);
