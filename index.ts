// Mash some Stack Overflow together to get a seeded ordering of the words we're gonna have...
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
      "ABYSS",
      "ADEPT",
      "ADRAH",
      "AEGIS",
      "AENIR",
      "AESHA",
      "AGONY",
      "ALDER",
      "ALGOL",
      "ALICE",
      "ALOIS",
      "ALTAR",
      "AMITI",
      "ANIMA",
      "AQQAR",
      "ARDEN",
      "ARDRI",
      "ARENA",
      "ARETE",
      "ARION",
      "ARLEN",
      "ARMOR",
      "ARRAN",
      "ARTUR",
      "ARVIS",
      "ASBEL",
      "ASSAL",
      "ASTRA",
      "ASUGI",
      "ATHOL",
      "ATHOS",
      "ATLAS",
      "AURUM",
      "AVOID",
      "AZAMA",
      "AZMUR",
      "AZURA",
      "BADGE",
      "BALDR",
      "BALOR",
      "BANBA",
      "BANTU",
      "BARAN",
      "BARDS",
      "BARON",
      "BARST",
      "BARTH",
      "BARTS",
      "BATON",
      "BATTA",
      "BAZBA",
      "BEAST",
      "BENNY",
      "BERAN",
      "BINKS",
      "BIRDS",
      "BLACK",
      "BLADE",
      "BLAKE",
      "BLAZE",
      "BLOOM",
      "BOIES",
      "BONDS",
      "BOOTS",
      "BOVIS",
      "BOYCE",
      "BRADY",
      "BRAGI",
      "BRAND",
      "BRAWL",
      "BREAD",
      "BRIAN",
      "BRIDE",
      "BROOK",
      "BROOM",
      "BRUNO",
      "BRYCE",
      "BRZAK",
      "BUCKS",
      "BYRON",
      "CAEDA",
      "CAMUS",
      "CANAS",
      "CANIS",
      "CANTO",
      "CARDS",
      "CATCH",
      "CECIL",
      "CHAOS",
      "CHARM",
      "CHEST",
      "CHILD",
      "CHILL",
      "CHROM",
      "CIRCE",
      "CLAIR",
      "CLASS",
      "CLAUD",
      "CLAWS",
      "CLIVE",
      "CLUBS",
      "CODDA",
      "CODHA",
      "COHEN",
      "COINS",
      "COLHO",
      "CORAL",
      "CREST",
      "CROWN",
      "CYRIL",
      "DAEIN",
      "DAGON",
      "DAISY",
      "DALEN",
      "DAMAS",
      "DANCE",
      "DARIN",
      "DAUNT",
      "DAYAN",
      "DEATH",
      "DECOY",
      "DEDUE",
      "DEMON",
      "DEVIL",
      "DIECK",
      "DODGE",
      "DOLPH",
      "DOLTH",
      "DOZLA",
      "DRACO",
      "DRAUG",
      "DREAD",
      "DRINK",
      "DROPS",
      "DRUID",
      "DRYAS",
      "DULAM",
      "DWYER",
      "EAGLE",
      "EDAIN",
      "EFFIE",
      "EIBEL",
      "EITRI",
      "ELENA",
      "ELIBE",
      "ELICE",
      "ELISE",
      "ELITE",
      "EMBER",
      "ENTEH",
      "EQUUS",
      "ERITZ",
      "ETZEL",
      "EUGEN",
      "EVADE",
      "EXPEL",
      "FANGS",
      "FATES",
      "FEINT",
      "FELIX",
      "FEROX",
      "FIANA",
      "FIEND",
      "FIGHT",
      "FIONA",
      "FIORA",
      "FJORM",
      "FLAER",
      "FLAME",
      "FLARE",
      "FLASH",
      "FLAYN",
      "FLEET",
      "FLORA",
      "FLOUR",
      "FOCUS",
      "FOILS",
      "FORDE",
      "FORGE",
      "FOTLA",
      "FRANZ",
      "FRAUS",
      "FREYR",
      "FROST",
      "FRUIT",
      "FUNKE",
      "FURIA",
      "GAIUS",
      "GALLE",
      "GARON",
      "GARTH",
      "GAZAK",
      "GECKO",
      "GEESE",
      "GEITZ",
      "GENNY",
      "GEORG",
      "GERIK",
      "GHARN",
      "GLADE",
      "GLARE",
      "GLASS",
      "GLENN",
      "GOLEM",
      "GOMER",
      "GOMEZ",
      "GORAN",
      "GOTOH",
      "GRAVE",
      "GREIL",
      "GRIEF",
      "GRIMA",
      "GUARD",
      "GYRAL",
      "HADES",
      "HAGAR",
      "HAIKU",
      "HALVE",
      "HANON",
      "HEATH",
      "HEAVY",
      "HENRY",
      "HERBS",
      "HERON",
      "HICKS",
      "HILDA",
      "HOLST",
      "HOMER",
      "HONEY",
      "HORSE",
      "HRIST",
      "HYMAN",
      "IDEAL",
      "IDUNN",
      "IGNIS",
      "IKONA",
      "ILIOS",
      "IMBUE",
      "INDRA",
      "INIGO",
      "INNES",
      "ITEMS",
      "IZANA",
      "IZUKA",
      "JAGEN",
      "JAKOB",
      "JAMKE",
      "JAROD",
      "JARTH",
      "JEDAH",
      "JERME",
      "JESSE",
      "JORGE",
      "JUDAH",
      "JUDGE",
      "JULIA",
      "KABUL",
      "KADEN",
      "KAMUI",
      "KAREL",
      "KARIN",
      "KARLA",
      "KATAR",
      "KATRI",
      "KATTI",
      "KEMPF",
      "KILMA",
      "KLEIN",
      "KLIFF",
      "KLIMT",
      "KNOLL",
      "KUKRI",
      "KURTH",
      "LADLE",
      "LAGUZ",
      "LAHNA",
      "LAMIA",
      "LANCE",
      "LARGO",
      "LARUM",
      "LAURA",
      "LAYLA",
      "LEILA",
      "LEPUS",
      "LETHE",
      "LEVEL",
      "LEVIN",
      "LEWYN",
      "LIBRA",
      "LIFIS",
      "LIGHT",
      "LINDA",
      "LINDE",
      "LINUS",
      "LIONS",
      "LISSA",
      "LLOYD",
      "LOBOS",
      "LONQU",
      "LOPTR",
      "LORDS",
      "LOWEN",
      "LUCIA",
      "LUKAS",
      "LUMEL",
      "LUNGE",
      "LYKKE",
      "LYRIA",
      "MABEL",
      "MACES",
      "MAERA",
      "MAGIC",
      "MAIKO",
      "MALIG",
      "MANNU",
      "MARAJ",
      "MARCH",
      "MARCO",
      "MARIA",
      "MARLA",
      "MARTH",
      "MARTY",
      "MEDAL",
      "MELEE",
      "MERCY",
      "MIDIA",
      "MIDIR",
      "MIGAL",
      "MINTZ",
      "MISHA",
      "MONKE",
      "MOORE",
      "MORSE",
      "MORVA",
      "MUSAR",
      "MYCEN",
      "MYRRH",
      "MYSON",
      "NADER",
      "NANNA",
      "NASIR",
      "NEIMI",
      "NEVKA",
      "NIAMH",
      "NIHIL",
      "NIIME",
      "NILES",
      "NINJA",
      "NOBLE",
      "NOIRE",
      "NOLAN",
      "NOMAD",
      "NOMAH",
      "NORNE",
      "NOVIS",
      "NUDGE",
      "OATES",
      "OATHS",
      "OBORO",
      "OGIER",
      "OIFEY",
      "OLWEN",
      "OMOZU",
      "ORSON",
      "ORTON",
      "OSCAR",
      "OSIAN",
      "OSKAR",
      "OSWIN",
      "OWAIN",
      "PABLO",
      "PALLA",
      "PANIC",
      "PANNE",
      "PAPER",
      "PATTY",
      "PEARL",
      "PEONY",
      "PERCY",
      "PERES",
      "PERNE",
      "PETRA",
      "PHILA",
      "PHINA",
      "PILUM",
      "PIVOT",
      "POWER",
      "PRIAM",
      "PRIDE",
      "PRIMA",
      "PUPIL",
      "PURGE",
      "PUZON",
      "QUEEN",
      "RAIGH",
      "RAIMI",
      "RAITH",
      "RALLY",
      "RAMON",
      "RANDY",
      "RAVEN",
      "REESE",
      "REINA",
      "RELIC",
      "RENEE",
      "REPEL",
      "RINEA",
      "RINGS",
      "RISYL",
      "ROARK",
      "ROBIN",
      "RODAN",
      "ROGER",
      "ROGUE",
      "RONAN",
      "ROWAN",
      "RUBEN",
      "RUFUS",
      "RUGER",
      "RUMEI",
      "RUNAN",
      "RUNES",
      "RYOMA",
      "SABER",
      "SABLE",
      "SACAE",
      "SAGES",
      "SAIAS",
      "SAINT",
      "SAIZO",
      "SALEH",
      "SALEM",
      "SASHA",
      "SAYRI",
      "SCOTT",
      "SEALS",
      "SENNO",
      "SERRA",
      "SHINE",
      "SHION",
      "SHIPS",
      "SHIRO",
      "SHIVA",
      "SHOPS",
      "SHOTS",
      "SHOVE",
      "SHURA",
      "SIGHT",
      "SILAS",
      "SIMIA",
      "SIMON",
      "SITRI",
      "SKADI",
      "SKILL",
      "SKULD",
      "SLEET",
      "SLEUF",
      "SMITE",
      "SMOKE",
      "SOLON",
      "SONIA",
      "SONYA",
      "SOREN",
      "SOTHE",
      "SPEAR",
      "SPEED",
      "SPURN",
      "SRENG",
      "STAFF",
      "STAHL",
      "STARS",
      "STEAL",
      "STEEL",
      "STICK",
      "STONE",
      "SULLY",
      "SUMIA",
      "SURTR",
      "SWARM",
      "SWEET",
      "SWORD",
      "SYLGR",
      "TAKSH",
      "TALON",
      "TANYA",
      "TARBA",
      "THANI",
      "THIEF",
      "THRIA",
      "THRUD",
      "TIANA",
      "TIGER",
      "TITAN",
      "TOBIN",
      "TOMAS",
      "TOMES",
      "TONIC",
      "TORUS",
      "TRADE",
      "TRAIT",
      "TURNS",
      "UNITS",
      "UNITY",
      "URVAN",
      "UTHER",
      "VAIDA",
      "VAIKE",
      "VALLA",
      "VALNI",
      "VALOR",
      "VASTO",
      "VERNA",
      "VOLKE",
      "VOLUG",
      "VOUGE",
      "WALLS",
      "WALTZ",
      "WARDS",
      "WASTE",
      "WATCH",
      "WATER",
      "WAVES",
      "WHITE",
      "WIGHT",
      "WINGS",
      "WITCH",
      "WOLFF",
      "WOODS",
      "WOOTZ",
      "WRATH",
      "YARNE",
      "YASHA",
      "YAZAM",
      "YODEL",
      "YODER",
      "ZAGAM",
      "ZAGAN",
      "ZANTH",
      "ZEISS",
      "ZELOT",
      "ZHARA",
      "ZOFIA",
      "ZONTA"];

// Yep, this is what enterprise development looks like.
shuffle(words);
shuffle(words);
shuffle(words);
shuffle(words);

const canvas: HTMLCanvasElement = document.getElementById('mainCanvas') as HTMLCanvasElement;
const ctx: CanvasRenderingContext2D | null = canvas.getContext("2d");

canvas.style.width="800px";
canvas.width = 800;
canvas.height = 500;

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
    // Y offset is whatever we want really, but we'll start at 50
    let yOffset = 50;
    for (let j = 0; j < 6; j++) {
	const colours = colour(gameState.guesses[j], j >= gameState.currentRow);
	for (let i = 0; i < 5; i++) {
	    let letter = "";
	    let colour = colours[i];
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
    if (ctx) {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
    drawGame();
}

window.addEventListener('resize', drawScreen);
window.addEventListener('keydown', inputEvent);
window.addEventListener('click', clickEvent);

function submitGuess() {
    if (currentGuess.length === 5) {
	// TODO: Check word is in dictionary; if not, toast an error
	currentGuess = currentGuess.toUpperCase();
	if (words.includes(currentGuess)) {
	    logGuess(currentGuess);
	}
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

function todaysIndex() : number {
    const oneDay = 24 * 60 * 60 * 1000;
    const firstDate = new Date(2022, 1, 3);
    const secondDate = new Date();
    secondDate.setHours(0,0,0,0);

    const diffDays = Math.round(Math.abs(((+firstDate) - (+secondDate)) / oneDay));
    return diffDays;
}

const answer = words[todaysIndex()];

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

stateCheck();
drawScreen();
