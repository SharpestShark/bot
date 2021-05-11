function script() {
var input = document.getElementById('input').value;
try {
	script1(input);
}
catch(err) {
	document.getElementById('errors').innerHTML = err;
}
}

