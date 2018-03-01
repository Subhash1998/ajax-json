var info = document.getElementById('info');
var btn = document.getElementById('btn');
btn.addEventListener('click',function(){

		var xhttp = new XMLHttpRequest();
//xhttp.open('GET','https://learnwebcode.github.io/json-example/animals-1.json');
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

	if(i<data.length){
		htmlString += "<tr><td>" + data[i].name + "</td><td>" + data[i].branch + "</td></tr>";
		i++;
	}
	if(i==data.length)
	{
		htmlString += "<p>Total records : " + i +"</p>"
		i++;
	}
	info.insertAdjacentHTML('beforeend' , htmlString);
}