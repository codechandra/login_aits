var http=require('http');
var express=require('express');
var mysql=require('mysql');
var path = require('path');
var morgan = require('morgan');
var app=express();
//app.use(morgan('combined'));
var connection=mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'',
  database:'pdf'
});
connection.connect(function(error){
  if(error){
  console.log("error");
}
  else {
    console.log("connected");
  }
});
app.get('/',function(req,res){
  res.sendFile(path.join(__dirname, 'ui', 'i.html'));
});
app.get('/ui/main.js',function(req,res){
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});
app.get('/m.pdf',function(req,res){
  res.sendFile(path.join(__dirname, 'ui', 'm.pdf'));
});

app.get('/ui/style.css',function(req,res){
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
app.get('/upload',function(req,res){
  res.sendFile(path.join(__dirname, 'ui', 'upload.html'));
});
app.get('/admin',function(req,res){
  res.sendFile(path.join(__dirname, 'ui', 'admin_login.html'));
});
app.get('/admin_check/:id',function(req,res){
  res.send(req.params.id);
});


var port = 3001;
app.listen(port, function () {
  console.log(`Server is listening on port ${port}!`);
});
