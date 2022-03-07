var infoModal = document.getElementById("infoModal");

var helpButton = document.getElementById("help");
var shareButton = document.getElementById("share");
var spanHelp = document.getElementsByClassName("close-help")[0];
var keyboardDiv = document.getElementById("keyboard");
var answerDiv = document.getElementById("answer");
var postGameDiv = document.getElementById("postGame");
var shareDiv = document.getElementById("shareBox");

var twitterButton = document.getElementById("twitterShare");
var discordButton = document.getElementById("discordShare");


// Mash some Stack Overflow together to get a seeded ordering of the words we're gonna have...
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

let seed = 776;
function random() {
    var x = Math.sin(seed++) * 10000;
    return x - Math.floor(x);
}

function shuffle(array: string[]) {
    let currentIndex = array.length,  randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {

	// Pick a remaining element...
	randomIndex = Math.floor(random() * currentIndex);
	currentIndex--;

	// And swap it with the current element.
	[array[currentIndex], array[randomIndex]] = [
	    array[randomIndex], array[currentIndex]];
    }

    return array;
}

const words = [
    "BARAN",
    "KATRI",
    "HENRY",
    "NOMAH",
    "BANTU",
    "SOREN",
    "SIMIA",
    "TRADE",
    "JAMKE",
    "CHEVE",
    "ALTEA",
    "CHILD",
    "TAHRA",
    "BEAST",
    "LUCIA",
    "PANIC",
    "JUDGE",
    "GOLEM",
    "MARCH",
    "GREIL",
    "BANBA",
    "ARVIS",
    "THIEF",
    "ELIBE",
    "FLARE",
    "DAHNA",
    "MERCY",
    "SHINE",
    "OSTIA",
    "LAHNA",
    "WIGHT",
    "PRIAM",
    "RUGER",
    "CHEST",
    "SITRI",
    "SHIRO",
    "TOMES",
    "URVAN",
    "MALIG",
    "MAERA",
    "SHIPS",
    "GLARE",
    "BARDS",
    "PALLA",
    "LAGUZ",
    "FLAME",
    "BADGE",
    "MIGAL",
    "ORSON",
    "BERAN",
    "BATTA",
    "RAMAN",
    "UTHER",
    "SAUIN",
    "FLASH",
    "KAFTI",
    "MANNU",
    "GERIK",
    "BRUNO",
    "VALOR",
    "OIFEY",
    "NUDGE",
    "GAZAK",
    "EIBEL",
    "BRAVE",
    "SMOKE",
    "CARDS",
    "BALDR",
    "BLACK",
    "BARTH",
    "LLOYD",
    "RAIGH",
    "PANNE",
    "REPEL",
    "JEDAH",
    "EAGLE",
    "BRADY",
    "LISSA",
    "ENTEH",
    "CHILL",
    "SYLGR",
    "GHARN",
    "CLAUD",
    "DEDUE",
    "SHURA",
    "AESHA",
    "CREST",
    "RIDER",
    "BARTS",
    "GOMEZ",
    "BRIDE",
    "FRUIT",
    "NORNE",
    "OSKAR",
    "FIORA",
    "NIHIL",
    "CLAWS",
    "THRIA",
    "STAFF",
    "STEAL",
    "TIANA",
    "FAYRE",
    "ZANTH",
    "SULLY",
    "MELEE",
    "SHOTS",
    "ARENA",
    "ZEISS",
    "KATTI",
    "OSCAR",
    "SIMON",
    "SLEUF",
    "SLEET",
    "JORGE",
    "KEMPF",
    "DECOY",
    "SAYRI",
    "JAGEN",
    "MORSE",
    "FEROX",
    "LORDS",
    "JUDAH",
    "HONEY",
    "RUFUS",
    "BINKS",
    "WATCH",
    "PRIMA",
    "LAURA",
    "GYRAL",
    "ALDER",
    "MAIKO",
    "BALOR",
    "ASBEL",
    "STAHL",
    "SAIAS",
    "GORAN",
    "RINEA",
    "TANIA",
    "WOODS",
    "THRUD",
    "HYMAN",
    "GARON",
    "LINUS",
    "SABLE",
    "HREST",
    "NADOS",
    "ARMOR",
    "WORDE",
    "OSIAN",
    "DAGDA",
    "INDRA",
    "KAMUI",
    "HADES",
    "DEATH",
    "BRZAK",
    "AENIR",
    "CHAOS",
    "GEESE",
    "DAYAN",
    "DRYAS",
    "KATAR",
    "FOTLA",
    "ATHOL",
    "DREAD",
    "SAINT",
    "SALEH",
    "CANAS",
    "HAIKU",
    "SWARM",
    "LEVIN",
    "SAIZO",
    "RAGNA",
    "DANCE",
    "ROARK",
    "WAVES",
    "FLOUR",
    "NOBLE",
    "AEGIS",
    "MULAN",
    "AGNEA",
    "MYSON",
    "RUNAN",
    "TERIN",
    "BLOOM",
    "LEWYN",
    "ARDEN",
    "BARON",
    "YODEL",
    "YARNE",
    "SMITE",
    "CLASS",
    "LIFIS",
    "RINGS",
    "DOLTH",
    "BLADE",
    "AMITI",
    "IDUNN",
    "LETHE",
    "AURUM",
    "GAIUS",
    "MARLA",
    "SIGHT",
    "ALPEA",
    "ELITE",
    "ARION",
    "HEATH",
    "NASIR",
    "VASTO",
    "VAIKE",
    "FLORA",
    "TOBIN",
    "AZAMA",
    "HILDA",
    "DRACO",
    "SOTHE",
    "AGONY",
    "GARTH",
    "RONAN",
    "GOTOH",
    "TARBA",
    "HERBS",
    "PUZON",
    "OGIER",
    "RODAN",
    "ASTRA",
    "GRADO",
    "DOZLA",
    "MARTY",
    "GEORG",
    "NOMAD",
    "CLIVE",
    "REESE",
    "EQUUS",
    "SONIA",
    "IZUMO",
    "BONDS",
    "BARST",
    "FIONA",
    "JAROD",
    "KLIMT",
    "DAUNT",
    "BADON",
    "MYCEN",
    "NEIMI",
    "POWER",
    "CANIS",
    "FOILS",
    "FEINT",
    "HOLST",
    "MORVA",
    "MISHA",
    "MUSAR",
    "SRENG",
    "ALTAR",
    "EVADE",
    "BLAZE",
    "FORDE",
    "ZELOT",
    "LOPTR",
    "DOLHR",
    "RUBEN",
    "QUEEN",
    "DACIA",
    "TALYS",
    "PIVOT",
    "GRAVE",
    "ERITZ",
    "OATES",
    "HEAVY",
    "KARLA",
    "STARS",
    "LYRIA",
    "LAMIA",
    "SUMIA",
    "EFFIE",
    "AVOID",
    "LAYLA",
    "SERRA",
    "STEEL",
    "THANI",
    "HRIST",
    "SOLON",
    "COINS",
    "MIDIA",
    "NANNA",
    "WATER",
    "CLAIR",
    "ASUGI",
    "FURIA",
    "TAKSH",
    "MINTZ",
    "DARIN",
    "SWORD",
    "FANGS",
    "UNITS",
    "WASTE",
    "MAGIC",
    "FREYR",
    "IGNIS",
    "PURGE",
    "SPEED",
    "RUNES",
    "LANCE",
    "FATES",
    "SENNO",
    "DAGON",
    "EMBLA",
    "NILES",
    "LEPUS",
    "EUGEN",
    "KNOLL",
    "HICKS",
    "BOIES",
    "VOLUG",
    "DAMAS",
    "MACES",
    "ILIOS",
    "PEONY",
    "YAZAM",
    "ABYSS",
    "WINGS",
    "SCOTT",
    "PRIDE",
    "PETRA",
    "LOBOS",
    "KADEN",
    "BRIAN",
    "DAISY",
    "ZHARA",
    "LADLE",
    "BYRON",
    "ARLEN",
    "RAVEN",
    "LONQU",
    "SABER",
    "STICK",
    "KURTH",
    "COLHO",
    "GEITZ",
    "ROWAN",
    "ATHOS",
    "DRAUG",
    "HORSE",
    "OWAIN",
    "WRATH",
    "OGHMA",
    "GECKO",
    "BRYCE",
    "TALON",
    "ROGUE",
    "MONKE",
    "SHADE",
    "BUCKS",
    "FOCUS",
    "MARAJ",
    "RANDY",
    "DOZEL",
    "LYKKE",
    "AZMUR",
    "SILAS",
    "CORAL",
    "RAITH",
    "NIAMH",
    "JERME",
    "NOLAN",
    "LIBRA",
    "HANON",
    "MOORE",
    "TARAS",
    "ADRAH",
    "GUARD",
    "WHITE",
    "SACAE",
    "PERCY",
    "INIGO",
    "SURTR",
    "TOKYO",
    "SKILL",
    "LUKAS",
    "SKADI",
    "JARTH",
    "PEARL",
    "SPURN",
    "GYGES",
    "STONE",
    "NINJA",
    "PERES",
    "ORTON",
    "DRINK",
    "LINDE",
    "OSWIN",
    "PABLO",
    "BIRDS",
    "DRUID",
    "FIEND",
    "SHOVE",
    "NOTRE",
    "JESSE",
    "KABUL",
    "KUKRI",
    "YNGVI",
    "SWEET",
    "RELIC",
    "ARRAN",
    "EDAIN",
    "TURNS",
    "RAMON",
    "KIRAN",
    "DWYER",
    "PAPER",
    "CHROM",
    "ZAGAM",
    "BRAGI",
    "CAEDA",
    "VOLKE",
    "ARTUR",
    "BORGO",
    "AZURA",
    "AQQAR",
    "TITAN",
    "GOMER",
    "LUMEL",
    "VERNA",
    "GAROU",
    "SPEAR",
    "NOVIS",
    "FLAER",
    "BOYCE",
    "GRIMA",
    "YASHA",
    "CECIL",
    "MARTH",
    "KLEIN",
    "SKULD",
    "OLWEN",
    "EVANS",
    "DODGE",
    "ARDRI",
    "RIGEL",
    "RALLY",
    "LUNGE",
    "COHEN",
    "KAREL",
    "BOVIS",
    "ALICE",
    "GENNY",
    "LINDA",
    "FJORM",
    "SHOPS",
    "ZAGAN",
    "REGIA",
    "ALGOL",
    "CATCH",
    "RISYL",
    "CIRCE",
    "DIECK",
    "IKONA",
    "WARDS",
    "UMONO",
    "BRAND",
    "GLASS",
    "FRANZ",
    "CODHA",
    "OBORO",
    "CLUBS",
    "HERON",
    "GRUST",
    "CHARM",
    "ATLAS",
    "VAIDA",
    "ELICE",
    "FLEET",
    "MEDAL",
    "SAGES",
    "KNIFE",
    "DAEIN",
    "ANIMA",
    "SHIVA",
    "BENNY",
    "VALLA",
    "ITEMS",
    "RYOMA",
    "IMBUE",
    "BATON",
    "FIGHT",
    "ELISE",
    "KARIN",
    "PHILA",
    "VOUGE",
    "WALLS",
    "IDEAL",
    "AEGIR",
    "HAGAR",
    "ELENA",
    "BAZBA",
    "SASHA",
    "EMBER",
    "DROPS",
    "LARGO",
    "RENEE",
    "VALNI",
    "BROOM",
    "ETZEL",
    "LYCIA",
    "PERNE",
    "MYRRH",
    "CAMUS",
    "HOMER",
    "JULIA",
    "JAKOB",
    "KILMA",
    "BOOTS",
    "TORUS",
    "MARIA",
    "NOIRE",
    "WALTZ",
    "ASSAL",
    "SALEM",
    "MIDIR",
    "WOLFF",
    "LOWEN",
    "BLAKE",
    "IZANA",
    "RUMEI",
    "SIENE",
    "LEVEL",
    "ALOIS",
    "LARUM",
    "WITCH",
    "FLAYN",
    "OATHS",
    "DULAM",
    "BRAWL",
    "GLENN",
    "BREAD",
    "NIIME",
    "INNES",
    "ARETE",
    "ZOFIA",
    "PHINA",
    "FRAUS",
    "CYRIL",
    "CODDA",
    "TANYA",
    "GALLE",
    "DEVIL",
    "UZUME",
    "HALVE",
    "PATTY",
    "RAZIA",
    "TIGER",
    "SEALS",
    "GRIEF",
    "MABEL",
    "IZUKA",
    "NADER",
    "TOMAS",
    "FUNKE",
    "EITRI",
    "PILUM",
    "CANTO",
    "NEVKA",
    "WOOTZ",
    "CROWN",
    "DALEN",
    "ROGER",
    "FELIX",
    "LIGHT",
    "FORGE",
    "FROST",
    "JINYA",
    "MARCO",
    "ZONTA",
    "LIONS",
    "SONYA",
    "TRAIT",
    "RAIMI",
    "GLADE",
    "KLIFF",
    "DEMON",
    "YODER",
    "UNITY",
    "DOLPH",
    "KIRIA",
    "ROBIN",
    "TONIC",
    "REINA",
    "MAGES",
    "SHION",
    "EXPEL",
    "PUPIL",
    "LEILA",
    "ADEPT",
    "KOHGA",
    "OMOZU",
    "FIANA",
    "BROOK"];

const answer = words[todaysIndex()];

const canvas: HTMLCanvasElement = document.getElementById('mainCanvas') as HTMLCanvasElement;
const ctx: CanvasRenderingContext2D | null = canvas.getContext("2d");


// Prevent selection of text while interacting with the canvas
document.onselectstart = function () {
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
    round: number;
    currentRow: number;
    guesses: string[];
    gameOver: boolean;
    colours: string[][];
    letterMap: Map<string, string>;
    win: string;

    saveState(this: GameState) {
	window.localStorage.setItem('ferdleState', JSON.stringify(this));
	window.localStorage.setItem('ferdleLetterMap', JSON.stringify(Array.from(gameState.letterMap.entries())));
    }

    loadState(): GameState {
	if (window.localStorage.getItem('ferdleState'))
	{
	    let gameStateData = JSON.parse(window.localStorage.getItem('ferdleState')!) as GameState;
	    let gameState = new GameState();
	    gameState.date = new Date(gameStateData.date);
	    gameState.guesses = gameStateData.guesses;
	    gameState.currentRow = gameStateData.currentRow;
	    gameState.gameOver = gameStateData.gameOver;
	    gameState.win = gameStateData.win;
	    if (gameStateData.round) {
		gameState.round = gameStateData.round;
	    } else {
		// Best guess.
		gameState.round = todaysIndex();
	    }
	    if (gameStateData.colours) {
		gameState.colours = gameStateData.colours;
	    } else {
		// Calculate colours as if it's the first time
		for (let guess of gameState.guesses) {
		    gameState.colours.push(colour(guess, false));
		}
	    }
	    if (window.localStorage.getItem('ferdleLetterMap'))
	    {
		gameState.letterMap = new Map(JSON.parse(window.localStorage.getItem('ferdleLetterMap')!));
	    } else {
		gameState.letterMap = new Map();
	    }
	    return gameState;
	}
	return new GameState();
    }

    // Should only be called the first time the user starts the game
    constructor() {
	this.date = new Date();
	this.round = todaysIndex();
	this.guesses = [];
	this.currentRow = 0;
	this.gameOver = false;
	this.win = "X";
	this.colours = [];
	this.letterMap = new Map();
    }

};

let gameState = new GameState().loadState();

function gameOver() {
    if (gameState.gameOver) {
	// Enable the share button
	shareButton!.style.display = 'block';
	shareDiv!.style.display = 'block';
	postGameDiv!.style.display = 'block';
	let text = "";
	if (gameState.win !== "X") {
	    text = "Congratulations, you got it! See you tomorrow!";
	} else {
	    text = "Oops, not this time!<br/>The word was: " + answer + ".<br/>See you tomorrow!";
	}
	answerDiv!.innerHTML = text;
	answerDiv!.style.display = 'block';
	keyboardDiv!.style.display = 'none';
    }
}

function stateCheck() {
    if (gameState.date.getDate() !== new Date().getDate()) {
	gameState.date = new Date();
	gameState.round = todaysIndex();
	gameState.guesses = [];
	gameState.currentRow = 0;
	gameState.gameOver = false;
	gameState.win = "X";
	gameState.colours = [];
	gameState.letterMap = new Map();
    }

    if (gameState.gameOver) {
	gameOver();
    }
}

let currentGuess: string = "";

function colour(guess: string, allWhite: boolean) : string[] {
    let colours = [];
    let ignoreIndices = [];
    for (let i = 0; i < 5; i++) {
	if (!allWhite) {
	    colours.push("rgb(200, 200, 200)");
	} else {
	    colours.push("white");
	}
    }
    if (allWhite) {
	return colours;
    }
    let answerCopy = "";
    let guessCopy = "";
    for (let i = 0; i < 5; i++) {
	if (answer[i] === guess[i]) {
	    colours[i] = "rgb(135, 224, 151)";
	    answerCopy += ' ';
	    guessCopy += ' ';
	    ignoreIndices.push(i);
	} else {
	    answerCopy += answer[i];
	    guessCopy += guess[i];
	}
    }

    let yellowCounts : Map<string, number> = new Map();
    for (let i = 0; i < guessCopy.length; i++) {
	// Count how many times the remaining letters appear. This is how many
	// times AT MOST we can mark a letter as yellow.
	let count = answerCopy.split('').filter(x => x === guessCopy[i]).length;
	yellowCounts.set(guessCopy[i], count);
    }

    // Last loop - go through each letter, decrementing the count each time we find match and marking that cell as yellow
    for (let i = 0; i < guessCopy.length; i++) {
	if (answerCopy.includes(guessCopy[i]) && guessCopy[i] !== ' ') {
	    if (yellowCounts.get(guessCopy[i])! > 0) {
		yellowCounts.set(guessCopy[i], yellowCounts.get(guessCopy[i])! - 1);
		colours[i] = "yellow";
	    }
	}
    }

    return colours;
}

function drawGame() {
    // Game grid is six lines long - draw six rows of five boxes
    const boxGap = 5;
    // We want the boxes to be centered, so first work out the total width of one line
    const boxLineWidth = 5 * boxWidth + 4 * boxGap;
    // First X offset is half the space remaining once you remove the box width from the total width
    let xOffset = (canvas.width - boxLineWidth) / 2;

    // Vertical alignment...
    let totalGameHeight = 6 * (boxGap + boxWidth);
    let yOffset = (canvas.height - totalGameHeight) / 2;

    // Draw boxes...
    for (let j = 0; j < 6; j++) {
	for (let i = 0; i < 5; i++) {
	    let letter = "";
	    let colour = "white";
	    if (gameState.colours.length > j) {
		colour = gameState.colours[j][i];
	    }
	    if (j < gameState.currentRow) {
		letter = gameState.guesses[j][i];
	    }
	    if (j === gameState.currentRow) {
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

function resize() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    canvas.height = canvas.offsetHeight;
    canvas.width = canvas.offsetWidth;
    drawScreen();
}

function drawScreen() {
    // Width height ratio:
    const ratio = 800 / 500;

    // Redraw the canvas to be as big as the space between the header and the footer
    // How many pixels do we have between the header and footer?
    const headerElem: HTMLElement | null = document.getElementById('header');
    const footerElem: HTMLElement | null = document.getElementById('footer');

    if (ctx) {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
    drawGame();
    updateKeyboardColours();
}

function updateKeyboardColours() {
    for (const [key, value] of gameState.letterMap.entries()) {
	const keyElem: HTMLElement | null = document.getElementById(key);
	if (keyElem) {
	    keyElem.style.backgroundColor = value;
	}
    }
}

window.addEventListener('resize', resize);
window.addEventListener('keydown', inputEvent);
keyboardDiv!.addEventListener('click', clickEvent);

function submitGuess() {
    if (currentGuess.length === 5) {
	currentGuess = currentGuess.toUpperCase();
	if (words.includes(currentGuess)) {
	    logGuess(currentGuess);
	} else {
	    var snack = document.getElementById("snackbar");
	    snack!.innerHTML = "Invalid word.";
	    snack!.className = "show";
	    setTimeout(function(){ snack!.className = snack!.className.replace("show", ""); }, 3000);
	}
    }
}

function updateLetterMap(guess: string, colours: string[]) {
    for (let i = 0; i < guess.length; i++) {
	let colour = colours[i];
	let keyColour: string = "white";
	if (gameState.letterMap.has(guess[i])) {
	    keyColour = gameState.letterMap.get(guess[i])!;
	}

	// Only 'upgrade' colours -> white to yellow/green; yellow to green. Don't change greens.
	if (keyColour === 'rgb(135, 224, 151)') {
	    continue;
	}

	if (keyColour === 'yellow') {
	    if (colour === 'rgb(135, 224, 151)') {
		gameState.letterMap.set(guess[i], colour);
	    }
	    continue;
	}

	gameState.letterMap.set(guess[i], colour);
    }
}

function logGuess(guess: string) {
    gameState.guesses.push(guess);
    gameState.colours.push(colour(guess, false));
    updateLetterMap(guess, colour(guess, false));
    gameState.currentRow += 1;
    currentGuess = "";
    if (guess === answer) {
	gameState.win = gameState.currentRow + "";
    }
    if (guess === answer || gameState.currentRow > 5) {
	gameState.gameOver = true;
	gameOver();
    }
    gameState.saveState();
}

function todaysIndex() : number {
    const oneDay = 24 * 60 * 60 * 1000;
    const firstDate = new Date(Date.UTC(2022, 1, 5, 0, 0, 0));
    const secondDate = new Date();
    secondDate.setUTCHours(0,0,0,0);

    const diffDays = Math.round(Math.abs(((+firstDate) - (+secondDate)) / oneDay));
    return diffDays;
}


function processInput(keyCode: number) {
    if (gameState.gameOver) {
	// The game is over, no need to process anything!
	drawScreen();
	return;
    }
    if (keyCode > 64 && keyCode < 91) {
	if (currentGuess.length < 5) {
	    currentGuess += String.fromCharCode(keyCode);
	}
    }
    if (keyCode === 8 || keyCode == 46) {
	if (currentGuess.length > 0) {
	    currentGuess = currentGuess.substring(0, currentGuess.length - 1);
	}
    }
    if (keyCode === 13) {
	submitGuess();
    }
    drawScreen();
}

function inputEvent(evt: KeyboardEvent) {
    if (!evt.repeat) {
	processInput(evt.keyCode);
    }
}

function clickEvent(evt: Event) {
    evt.preventDefault();
    const target = evt.target as Element;
    if (target && target.id) {
	if (target.id === 'enter') {
	    processInput(13); // ugh
	} else if (target.id === 'delete') {
	    processInput(8); // oh the humanity
	} else if (target.id.length === 1) {
	    processInput(target.id.charCodeAt(0));
	}
    }
}

function copyResult(discord: boolean) {
    let copyText = "SOL KATTI #" + (gameState.round + 1) + " " + gameState.win + "/6 \n";
    for (let guess of gameState.guesses) {
	let colours = colour(guess, false);
	// terrible
	for (let colour of colours) {
	    if (colour === 'rgb(200, 200, 200)')
	    {
		copyText += "⬛";
	    }
	    if (colour === 'yellow')
	    {
		copyText += "🟨";
	    }
	    if (colour === 'rgb(135, 224, 151)')
	    {
		copyText += "🟩";
	    }
	}
	if (discord) {
	    copyText += "  ||`" + guess + "`||"
	}
	copyText += '\n';
    }
    copyText += "\nhttps://doopu.github.io/solkatti/";
    navigator.clipboard.writeText(copyText).then(function() {
	console.log('Copy successful!');
    }, function(err) {
	console.error('Copy failed...', err);
    });
}

stateCheck();
resize();


function copyButton(discord: boolean = false) {
    var snack = document.getElementById("snackbar");
    snack!.innerHTML = "Result copied to clipboard!";
    snack!.className = "show";
    setTimeout(function(){ snack!.className = snack!.className.replace("show", ""); }, 3000);
    copyResult(discord);
}

shareButton!.onclick = function() {
    copyButton(false);
}

twitterButton!.onclick = function() {
    copyButton(false);
}

discordButton!.onclick = function() {
    copyButton(true);
}

// Modal stuff

// When the user clicks the button, open the modal
helpButton!.onclick = function() {
  infoModal!.style.display = "block";
}

spanHelp!.addEventListener('click', function() {
  infoModal!.style.display = "none";
});


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == infoModal) {
    infoModal!.style.display = "none";
  }
}
