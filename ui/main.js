function makeQuestionPaper()
{
  var testName=document.getElementById('test_name').value;
  var noOfQuestion=document.getElementById('noOfQuestions').value;
  var testDUration=document.getElementById('testTime').value;
  var y=document.getElementById('target_year');
    var year = y.options[y.selectedIndex].text;
    var b=document.getElementById('target_branch');
      var branch = b.options[b.selectedIndex].text;
  //  alert(testName+noOfQuestion+testDUration+year+branch);
  if(testName==""||noOfQuestion==""||testDUration=="")
{
  alert("Please Fill all the fileds");
}
else {
  var s="/upload/paperset/"+testName+"$"+noOfQuestion+"$"+testDUration+"$"+year+"$"+branch;
  var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {

 }

};
xhttp.open("GET", s, true);
xhttp.send();

}

}
function admin_log()
{
  var id=document.getElementById('admin_id').value;
  var pass=document.getElementById('admin_pass').value;
  var s="/admin_check/"+id+"$"+pass;
  var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      if(this.responseText=="Success")
      {
     window.open("/upload","_self");
   }
   else if(this.responseText="Error") {
     alert("Incorrect credentials");
   }
 }

};
xhttp.open("GET", s, true);
xhttp.send();

}
function setUpload(x)
{
  var noOfSets=Number(x);
  switch(noOfSets)
  {
    case 1:{
      document.getElementById('s1').style.display='block';
      document.getElementById('s2').style.display='none';
      document.getElementById('s3').style.display='none';
      document.getElementById('s4').style.display='none';
      break;
    }
    case 2:{
      document.getElementById('s1').style.display='none';
      document.getElementById('s2').style.display='block';
      document.getElementById('s3').style.display='none';
      document.getElementById('s4').style.display='none';
      break;
    }
    case 3:{
      document.getElementById('s1').style.display='none';
      document.getElementById('s2').style.display='none';
      document.getElementById('s3').style.display='block';
      document.getElementById('s4').style.display='none';
      break;
    }
    case 4:{
      document.getElementById('s1').style.display='none';
      document.getElementById('s2').style.display='none';
      document.getElementById('s3').style.display='none';
      document.getElementById('s4').style.display='block';
      break;
    }
  }
}
