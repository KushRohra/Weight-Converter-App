var output = document.getElementById('output');
output.style.visibility = 'hidden';

var input = document.getElementById('lbsInput');
var grams = document.getElementById('gramsOutput');
var kilograms = document.getElementById('kilogramsOutput');
var ounces = document.getElementById('ozOutput');

input.addEventListener('input', function(e)
	{
		output.style.visibility = 'visible'
		let pounds = e.target.value;
		grams.innerHTML = pounds/0.0022046;
		kilograms.innerHTML = pounds/2.2046;
		ounces.innerHTML = pounds*16;
	});