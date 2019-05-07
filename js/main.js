/*----- constants -----*/
var images = {
	one: 'images/ga.png',
	two: 'images/github.png',
	three: 'imges/slack.png'
}

/*----- app's state (variables) -----*/
//wins and loses


/*----- cached element references -----*/
var slotOne = document.getElementById('slotOne')
var slotTwo = document.getElementById('slotTwo')
var slotThree = document.getElementById('slotThree')
var msg = document.getElementById('box1')

/*----- event listeners -----*/
var btn = document.querySelector('button');
btn.addEventListener('click', play);

/*----- functions -----*/
init();

// function that will distribute a deck of cards evenly into 3 arrays (the 3 different slots)


// function that randomly pick a card on each array

// function that will compare the 3 cards chosen to see if there's a match or not
function compare() {

}


function play(event) {
	// console.log(event);
	render()
	// console.log(slotOne.textContent, slotTwo.textContent, slotThree.textContent)
	// console.log(slotOne.textContent == slotTwo.textContent && slotTwo.textContent == slotThree.textContent)
	if(slotOne.textContent == slotTwo.textContent && slotTwo.textContent == slotThree.textContent){
		msg.textContent = "You win!"
	} else {
		msg.textContent = "You lose!"
	}
}

function init() {
	msg.textContent = "Let's Play!"
}

function render() {
	var initialSlot = []

	for(var i = 0; i < 3; i++){
		var num = Math.floor(Math.random() * 3);
		initialSlot.push(num)
	}
	//console.log(initialSlot[0])
	slotOne.src = `${images.one}`
	slotTwo.src = `${images.one}`
	slotThree.src = `${images.one}`
}