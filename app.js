var images = {
	man: {
		heading: 'Man Image',
		description: 'Image of a man.',
		path: '../images/man.jpg'
	},
	wizard: {
		heading: 'Wizard Image',
		description: 'Image of a wizard.',
		path: '../images/wizard.jpg'
	},
	beast: {
		heading: 'Beast Image',
		description: 'Image of a beast.',
		path: '../images/beast.jpg'
	}
};


// on mouse over will search for the element with id of manDesc and in the elelement will add "Title: Image of man"
function handleMouseOver() {
	document.getElementById("manDesc").innerHTML ="Title: "+ images.man.description;
}

// will get rid of the description once you mouse away from the imge
function handleMouseOut(){
	document.getElementById("manDesc").innerHTML = null;
}

// on mouse over will search for the element with id of wizDesc and in the elelement will add "Title: Image of man"
function handleWizard() {
	document.getElementById("wizDesc").innerHTML = "Tittle: " + images.wizard.description;
}

function handleWizardOut(){
	document.getElementById("wizDesc").innerHTML = null;
}

// on mouse over will search for the element with id of beastDesc and in the elelement will add "Title: Image of man"
function handleBeast() {
	document.getElementById("beastDesc").innerHTML = "Tittle: " + images.beast.description;
}

function handleBeastOut(){
	document.getElementById("beastDesc").innerHTML = null;
}


console.log("test: " + images.man.path);
