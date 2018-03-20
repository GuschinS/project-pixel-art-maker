//declaration of variables

const height = document.querySelector('#inputHeight');
const width = document.querySelector('#inputWidth');
const submit = document.querySelector('#submit');
const table = document.querySelector('#pixelCanvas');
const color = document.querySelector('#colorPicker');

//data for start

height.setAttribute('value', 12);
width.setAttribute('value', 12);
color.setAttribute('value', '#009999');
makeGrid(table, height, width)

//Declaring a function and clearing a table

function makeGrid(table, height, width) {
	height = height.value;
	width = width.value;
	table.innerHTML = "";

	//	building a table

	for (let n = 0; n < height; n++) {
		const tr = document.createElement('tr');
		table.append(tr);

		for (let m = 0; m < width; m++) {
			const td = document.createElement('td');
			tr.append(td);
		}
	}
};

//	background change when clicked

table.addEventListener('click', function (event) {
	event.preventDefault();
	if (event.target.nodeName === 'TD') {
		if (event.target.style.backgroundColor == ('')) {
			event.target.style.backgroundColor = color.value;
		} else {
			event.target.style.backgroundColor = ('');
		}
	}
});

//click processing

submit.addEventListener('click', function (event) {
	event.preventDefault();
	makeGrid(table, height, width);
});
