/*----- constants -----*/


/*----- app's state (variables) -----*/
let winner, score, btn;

/*----- cached element references -----*/

/*----- event listeners -----*/
btn = document.querySelector('button');
btn.addEventListener('click', play);

/*----- functions -----*/
init();

function play(event) {
	console.log(event);
}

function render() {

}

function init() {
	//will be set to somethig
	winner = null;
	score = {
		image1: 'images/1.png',
		image2: 'images/2.png',
		image3: 'images/3.png'
	}
	render()
}