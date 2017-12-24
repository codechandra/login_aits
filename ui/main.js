function admin_log()
{
  var id=document.getElementById('admin_id').value;
  var pass=document.getElementById('admin_pass').value;
  var s="/admin_check/"+id+"$"+pass;
  var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     window.open("/upload","_self");
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
