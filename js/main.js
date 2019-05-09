/*----- constants -----*/
var images = {
	0: 'images/ga.png',
	2: 'images/github.png',
	3: 'imges/slack.png'
}


var inPlay;

/*----- app's state (variables) -----*/
var initialSlot;
//wins and loses


/*----- cached element references -----*/
var slotOne = document.getElementById('slotOne')
var slotTwo = document.getElementById('slotTwo')
var slotThree = document.getElementById('slotThree')
var msg = document.getElementById('box1')

/*----- event listeners -----*/
var btn = document.querySelector('button')
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

function render() {
	if (!isPlay) {
	for(var i = 0; i < 3; i++){
		var num = Math.floor(Math.random() * 100);
		initialSlot.push(num);
		console.log(initialSlot)
	}

	for (var i = 0; i < 3; i++){
		if(initialSlot[i] == 0){
			
		}
		// if(){
			
		// }
		// if(){
			
		// }
	}
	// textContent and innerhtml
		slotOne.textContent = initialSlot[0];
		slotTwo.textContent = initialSlot[1];
		slotThree.textContent = initialSlot[2];
	init()

	}
	// adding images
	// slotTwo.src = `${images.one}`
	// slotThree.src = `${images.one}`
}

function init() {
	initialSlot = [];
	isPlay = false;
	msg.textContent = "Let's Play!"
}