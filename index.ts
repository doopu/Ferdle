const canvas: HTMLCanvasElement = document.getElementById('mainCanvas') as HTMLCanvasElement;
const ctx: CanvasRenderingContext2D | null = canvas.getContext("2d");

canvas.style.width="800px";
canvas.width = 800;
canvas.height = 500;

// Prevent selection of text while interacting with the canvas
canvas.onselectstart = function () {
   return false;
}

const boxWidth = 60;

function drawBox(x: number, y: number,
		 fillStyle: string = 'rgba(0, 0, 0, 1)',
		 letter: string) : void {
    if (ctx) {
	ctx.lineCap = 'butt';
	ctx.lineJoin = 'miter';
	ctx.strokeStyle = 'rgba(128, 128, 128, 1.0)';
	ctx.fillStyle = fillStyle;
	ctx.lineWidth = 1.0;

	ctx.beginPath();
	ctx.rect(x, y, boxWidth, boxWidth);
	ctx.stroke();
	ctx.fill();

	ctx.font = '32px sans-serif';
	ctx.textAlign = 'center';
	ctx.fillStyle = 'rgba(0, 0, 0, 1)';
	const xCenter = x + boxWidth / 2;
	const yCenter = y + boxWidth / 2 + 10;
	ctx.fillText(letter, xCenter, yCenter);
    }
}

class GameState {
    date: Date;
    currentRow: number;
    guesses: string[];
    gameOver: boolean;

    saveState(this: GameState) {
	window.localStorage.setItem('ferdleState', JSON.stringify(this));
    }

    loadState(): GameState {
	if (window.localStorage.getItem('ferdleState'))
	{
	    return JSON.parse(window.localStorage.getItem('ferdleState')!) as GameState;
	}
	return new GameState();
    }

    // Should only be called the first time the user starts the game
    constructor() {
	this.date = new Date();
	this.guesses = [];
	this.currentRow = 0;
	this.gameOver = false;
    }

};

let gameState = new GameState().loadState();

function stateCheck() {
    if (gameState.date.getDate() !== new Date().getDate()) {
	gameState.date = new Date();
	gameState.guesses = [];
	gameState.currentRow = 0;
	gameState.gameOver = false;
    }
}

let currentGuess: string = "";

function drawGame() {
    // Game grid is six lines long - draw six rows of five boxes
    const boxGap = 5;
    // We want the boxes to be centered, so first work out the total width of one line
    const boxLineWidth = 5 * boxWidth + 4 * boxGap;
    // First X offset is half the space remaining once you remove the box width from the total width
    let xOffset = (canvas.width - boxLineWidth) / 2;
    // Y offset is whatever we want really, but we'll start at 50
    let yOffset = 50;
    for (let j = 0; j < 6; j++) {
	for (let i = 0; i < 5; i++) {
	    let letter = "";
	    let colour = "white";
	    let answerCopy = answer;
	    if (j < gameState.currentRow) {
		letter = gameState.guesses[j][i];
		if (letter === answer[i]) {
		    colour = "green";
		} else {
		    colour = "grey";
		}
	    }
	    if (j == gameState.currentRow) {
		if (currentGuess[i]) {
		    letter = currentGuess[i];
		}
	    }
	    drawBox(xOffset + (i * boxWidth) + (i * boxGap),
		    yOffset + (j * boxWidth) + (j * boxGap),
		    colour,
		   letter);
	}
    }
}

function drawScreen() {
    // Redraw the canvas to be as big as the space between the header and the footer
    // How many pixels do we have between the header and footer?
    const header = 100;
    const footer = 200; // consts for now
    const gap = window.innerHeight - footer - header;
    let scaleFactor = 1.0;
    if (gap < 500) {
	scaleFactor = gap / 500.0;
	if (ctx) {
	    canvas.style.width = 800 * scaleFactor + "px";
	}
    }
    drawGame();
}

window.addEventListener('resize', drawScreen);
window.addEventListener('keydown', inputEvent);

function submitGuess() {
    if (currentGuess.length === 5) {
	// TODO: Check word is in dictionary; if not, toast an error
	// Log guess in game state, move on to next...
	logGuess(currentGuess);
    }
}

function logGuess(guess: string) {
    gameState.guesses.push(guess);
    gameState.currentRow += 1;
    currentGuess = "";
    if (guess === answer || gameState.currentRow > 6) {
	gameState.gameOver = true;
    }
}

const answer = "BEAST";

function inputEvent(evt: KeyboardEvent) {
    if (gameState.gameOver) {
	// The game is over.
	drawScreen();
    }
    if (!evt.repeat) {
	if (evt.keyCode > 64 && evt.keyCode < 91) {
	    if (currentGuess.length < 5) {
		currentGuess += evt.key.toUpperCase();
	    }
	}
	if (evt.keyCode === 8 || evt.keyCode == 46) {
	    if (currentGuess.length > 0) {
		currentGuess = currentGuess.substring(0, currentGuess.length - 1);
	    }
	}
	if (evt.keyCode === 13) {
	    submitGuess();
	}
    }
    drawScreen();
}

drawScreen();
