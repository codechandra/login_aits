var http=require('http');
var express=require('express');
var mysql=require('mysql');
var path = require('path');
var morgan = require('morgan');
var multer  = require('multer');
var router=express.Router();
var upload = multer({ dest: 'ui/uploads/' });

var app=express();
//app.use(morgan('combined'));
var connection=mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'',
  database:'exam'
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
  res.sendFile(path.join(__dirname, 'ui', 'login.html'));
});
app.get('/image.gif',function(req,res){
  res.sendFile(path.join(__dirname, 'ui', 'image.gif'));
});
app.get('/logo.jpg',function(req,res){
  res.sendFile(path.join(__dirname, 'ui', 'logo.jpg'));
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
  var value=req.params.id;
    var m=value.split('$');
   var id=(m[0]);
   var pass=(m[1]);

       connection.query('SELECT status FROM admin where (username=? AND password=?)',[id,pass],function(err,rows,fields){
      if(err){
        //console.log(res);
          res.status(500).send(err.toString());

      }
      else
      {
        if(JSON.stringify(rows).length==2)
        {
          res.send("Error");
      }
      else {
        res.send("Success");
      }
  }
});
});
app.get('/upload/paperset/:id',function(req,res){
  var value=req.params.id;
    var m=value.split('$');
   var one=(m[0]);
   var two=(m[1]);
   var three=m[2];
   var four=m[3];
   var five=m[4];

       connection.query('INSERT INTO questionpapers(test_name,questions_count,test_time,year,branch) VALUES (?,?,?,?)',[one,two,three,four,five],function(err,rows,fields){
      if(err){
        //console.log(res);
          res.status(500).send(err.toString());

      }
      else
      {
        res.send("Thank you");
  }
});
});




var port = 3000;
app.listen(port, function () {
  console.log(`Server is listening on port ${port}!`);
});
