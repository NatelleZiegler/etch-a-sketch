const wrapper = document.querySelector('.wrapper');
var boxArr = [];

//Create a two-dimensional array
function createGrid(size) {
	while (wrapper.firstChild) {
		wrapper.removeChild(wrapper.firstChild);
	}
	wrapper.style["grid-template-columns"] = `repeat(${size}, 1fr)`;
	for(var i = 0; i < size * size; i++) {
		boxArr[i] = document.createElement('div');
		boxArr[i].classList.add('box');
		boxArr[i].addEventListener("mouseover", mouseOver);
		wrapper.appendChild(boxArr[i]);
	}
}

createGrid(16);

function mouseOver() {
    this.style.backgroundColor = "red";
}

const resetButton = document.getElementById('reset');
resetButton.addEventListener("click", resetGrid);

function resetGrid() {
	//Clear the grid
	for(var i = 0; i < boxArr.length; i++) {
		boxArr[i].style.backgroundColor = "white";
	}
	//Prompt the user for the size of the grid
	var size = prompt("How many squares per side for new grid?", "16");
	createGrid(size);
}