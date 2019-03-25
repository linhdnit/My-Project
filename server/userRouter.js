var express = require("express");
var router = express.Router();

router.get('/hello', function(req,res){
	res.send("Hello word!");
});
router.post('/hello', function(req,res){
	res.send("phuong thuc post");
});

module.exports = router;