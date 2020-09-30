window.addEventListener('load', function () {
	allimages = document.querySelectorAll('img');

	for (var i = 0; i < allimages.length; i++) {
		allimages[i].addEventListener('dragstart', startdrag);
		allimages[i].addEventListener('dragend', enddrag);
	}

	up = document.getElementById('up');
	up.addEventListener('dragleave', leavedrag);

	down = document.getElementById('down');
	down.addEventListener('drop', dropped);
	down.addEventListener('dragover', overdrag);
	down.addEventListener('dragenter', enterdrag);
}); //end of load

function startdrag(e) {
	e.dataTransfer.setData('myimg', e.target.outerHTML);
}
function leavedrag(e) {
	e.preventDefault();
}
function dropped(e) {
	e.preventDefault();
	down.innerHTML += e.dataTransfer.getData('myimg');
}
function enddrag(e) {
	e.preventDefault();
	e.target.style.display = 'none';
}
function overdrag(e) {
	e.preventDefault();
	down.style.backgroundColor = '#7eff74';
	// down.style.background = '-webkit-linear-gradient(180deg, rgba(255,225,178,1) 0%, rgba(126,255,116,1) 50%, rgba(255,225,176,1) 100%);';

	$('#down').attr(
		'style',
		'background-image:linear-gradient( rgba(255,216,108,1) 0%, lightgreen 25%, lightgreen 75% ,rgba(255,216,108,1) 100%)',
	);
}
function enterdrag(e) {
	e.preventDefault();
}
