var info = document.getElementById('info');
var btn = document.getElementById('btn');
document.getElementById('myInput').style.display='none';
btn.addEventListener('click',function(){

		var xhttp = new XMLHttpRequest();
		xhttp.open('GET','ajax.json');
		xhttp.onload = function(){
		var data = JSON.parse(xhttp.responseText);
		console.log(data);
		renderHTML(data);
	};
	xhttp.send();
});
var i=0;

function renderHTML(data){
	var htmlString = "";

	for(i=0;i<data.length;i++){
		htmlString += "<tr><td>" + data[i].name + "</td><td>" + data[i].branch + "</td></tr>";
	}
	if(i==data.length)
	{
		htmlString += "<p>Total records : " + i + "</p>"
		i++;
		document.getElementById('btn').style.display='none';
		document.getElementById('myInput').style.display='block';

	}
	info.insertAdjacentHTML('beforeend' , htmlString);
}

function myFunction() {
  // Declare variables
  var input, filter, table, tr, td, i;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("info");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}
