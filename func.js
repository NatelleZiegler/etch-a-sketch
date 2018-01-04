const wrapper = document.querySelector('.wrapper');
//Create a two-dimensional array
var boxArr = [];
for(var i = 0; i < 16 * 16; i++) {
	boxArr[i] = document.createElement('div');
	boxArr[i].classList.add('box');
	boxArr[i].addEventListener("mouseover", mouseOver);
	wrapper.appendChild(boxArr[i]);
}

function mouseOver() {
    this.style.backgroundColor = "red";
}

const resetButton = document.getElementById('reset');
resetButton.addEventListener("click", resetGrid);

function resetGrid() {
	for(var i = 0; i < boxArr.length; i++) {
		boxArr[i].style.backgroundColor = "white";
	}
}