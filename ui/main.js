function admin_log()
{
  var id=document.getElementById('admin_id').value;
  var pass=document.getElementById('admin_pass').value;
  var s="/admin_check/"+id+"$"+pass;
  var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        window.open('/upload');
    }
};
xhttp.open("GET", s, true);
xhttp.send();

}
