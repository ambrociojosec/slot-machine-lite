/*----- constants -----*/
var images = {
	img1: 'images/ga.png',
	img2: 'images/github.png',
	img3: 'imges/slack.png',
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
		var num = Math.floor(Math.random() * 3);
		initialSlot.push(num);
	}

	for (var i = 0; i < 3; i++){
		if(initialSlot[i] == 0){
		}
	}
		slotOne.innerHTML = initialSlot[0];
		slotTwo.textContent = initialSlot[1];
		slotThree.textContent = initialSlot[2];
	init()
	}
}

function init() {
	initialSlot = [];
	isPlay = false;
	msg.textContent = "Let's Play!"
}
