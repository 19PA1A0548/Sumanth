var express = require('express');

var app = express()  

var bodyParser=require("body-parser")

app.use(bodyParser.urlencoded({ extended: false }))

app.use(express.static('public'));

var mongojs = require('mongojs');

var cString= "mongodb+srv://abhishek:abhishek@cluster0.gimxr.mongodb.net/sumanth?retryWrites=true&w=majority";

var db = mongojs(cString,['sumanth'])
  
app.get('/', function (req, res) {  
	res.sendFile(__dirname+"/public/home.html")
})  

app.post('/signupsubmi',function(req,res) {
	var d={
		password:req.body.pass,
		username:req.body.us,
		Phonenumber:req.body.phn,
		Email:req.body.em,
		Fullname:req.body.full
	}
	console.log(d);
	db.sumanth.insert(d,function (err,docs) {
		if (err) {
			res.send("error")
		}
		else{
			res.sendFile(__dirname+"/public/login.html")
		}
		
	})
})
app.post("/login",function(req,res){
	res.sendFile(__dirname+"/public/home.html");
})
app.listen(3000, function () {  
console.log('Example app listening on port 3000!')  
})
