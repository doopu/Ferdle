"use strict";
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
function shuffle(array) {
    let currentIndex = array.length, randomIndex;
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
        // Pick a remaining element...
        randomIndex = Math.floor(random() * currentIndex);
        currentIndex--;
        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]
        ];
    }
    return array;
}
const words = [
    "ABYSS",
    "ADEPT",
    "ADRAH",
    "AEGIR",
    "AEGIS",
    "AENIR",
    "AESHA",
    "AGONY",
    "ALDER",
    "ALGOL",
    "ALICE",
    "ALOIS",
    "ALPEA",
    "ALTAR",
    "ALTEA",
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
    "BADON",
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
    "BORGO",
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
    "CHEVE",
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
    "DACIA",
    "DAEIN",
    "DAGDA",
    "DAGON",
    "DAHNA",
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
    "DOLHR",
    "DOLPH",
    "DOLTH",
    "DOZEL",
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
    "EVANS",
    "EXPEL",
    "FANGS",
    "FATES",
    "FAYRE",
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
    "GAROU",
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
    "GRADO",
    "GRAVE",
    "GREIL",
    "GRIEF",
    "GRIMA",
    "GRUST",
    "GUARD",
    "GYGES",
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
    "HREST",
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
    "IZUMO",
    "JAGEN",
    "JAKOB",
    "JAMKE",
    "JAROD",
    "JARTH",
    "JEDAH",
    "JERME",
    "JESSE",
    "JINYA",
    "JORGE",
    "JUDAH",
    "JUDGE",
    "JULIA",
    "KABUL",
    "KADEN",
    "KAFTI",
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
    "KOHGA",
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
    "LYCIA",
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
    "MULAN",
    "MUSAR",
    "MYCEN",
    "MYRRH",
    "MYSON",
    "NADER",
    "NADOS",
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
    "NOTRE",
    "NOVIS",
    "NUDGE",
    "OATES",
    "OATHS",
    "OBORO",
    "OGHMA",
    "OGIER",
    "OIFEY",
    "OLWEN",
    "OMOZU",
    "ORSON",
    "ORTON",
    "OSCAR",
    "OSIAN",
    "OSKAR",
    "OSTIA",
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
    "RAGNA",
    "RAIGH",
    "RAIMI",
    "RAITH",
    "RALLY",
    "RAMAN",
    "RAMON",
    "RANDY",
    "RAVEN",
    "RAZIA",
    "REESE",
    "REGIA",
    "REINA",
    "RELIC",
    "RENEE",
    "REPEL",
    "RIDER",
    "RIGEL",
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
    "SAUIN",
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
    "SIENE",
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
    "TAHRA",
    "TAKSH",
    "TALON",
    "TALYS",
    "TANIA",
    "TANYA",
    "TARAS",
    "TARBA",
    "TERIN",
    "THANI",
    "THIEF",
    "THRIA",
    "THRUD",
    "TIANA",
    "TIGER",
    "TITAN",
    "TOBIN",
    "TOKYO",
    "TOMAS",
    "TOMES",
    "TONIC",
    "TORUS",
    "TRADE",
    "TRAIT",
    "TURNS",
    "UMONO",
    "UNITS",
    "UNITY",
    "URVAN",
    "UTHER",
    "UZUME",
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
    "WORDE",
    "WRATH",
    "YARNE",
    "YASHA",
    "YAZAM",
    "YNGVI",
    "YODEL",
    "YODER",
    "ZAGAM",
    "ZAGAN",
    "ZANTH",
    "ZEISS",
    "ZELOT",
    "ZHARA",
    "ZOFIA",
    "ZONTA"
];
// Yep, this is what enterprise development looks like.
shuffle(words);
shuffle(words);
shuffle(words);
shuffle(words);
const answer = words[todaysIndex()];
const canvas = document.getElementById('mainCanvas');
const ctx = canvas.getContext("2d");
// Prevent selection of text while interacting with the canvas
document.onselectstart = function () {
    return false;
};
const boxWidth = 60;
function drawBox(x, y, fillStyle = 'rgba(0, 0, 0, 1)', letter) {
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
    // Should only be called the first time the user starts the game
    constructor() {
        this.date = new Date();
        this.guesses = [];
        this.currentRow = 0;
        this.gameOver = false;
        this.win = "X";
        this.colours = [];
        this.letterMap = new Map();
    }
    saveState() {
        window.localStorage.setItem('ferdleState', JSON.stringify(this));
        window.localStorage.setItem('ferdleLetterMap', JSON.stringify(Array.from(gameState.letterMap.entries())));
    }
    loadState() {
        if (window.localStorage.getItem('ferdleState')) {
            let gameStateData = JSON.parse(window.localStorage.getItem('ferdleState'));
            let gameState = new GameState();
            gameState.date = new Date(gameStateData.date);
            gameState.guesses = gameStateData.guesses;
            gameState.currentRow = gameStateData.currentRow;
            gameState.gameOver = gameStateData.gameOver;
            gameState.win = gameStateData.win;
            if (gameStateData.colours) {
                gameState.colours = gameStateData.colours;
            }
            else {
                // Calculate colours as if it's the first time
                for (let guess of gameState.guesses) {
                    gameState.colours.push(colour(guess, false));
                }
            }
            if (window.localStorage.getItem('ferdleLetterMap')) {
                gameState.letterMap = new Map(JSON.parse(window.localStorage.getItem('ferdleLetterMap')));
            }
            else {
                gameState.letterMap = new Map();
            }
            return gameState;
        }
        return new GameState();
    }
}
;
let gameState = new GameState().loadState();
function gameOver() {
    if (gameState.gameOver) {
        // Enable the share button
        shareButton.style.display = 'block';
        shareDiv.style.display = 'block';
        postGameDiv.style.display = 'block';
        let text = "";
        if (gameState.win !== "X") {
            text = "Congratulations, you got it! See you tomorrow!";
        }
        else {
            text = "Oops, not this time!<br/>The word was: " + answer + ".<br/>See you tomorrow!";
        }
        answerDiv.innerHTML = text;
        answerDiv.style.display = 'block';
        keyboardDiv.style.display = 'none';
    }
}
function stateCheck() {
    if (gameState.date.getDate() !== new Date().getDate()) {
        gameState.date = new Date();
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
let currentGuess = "";
function colour(guess, allWhite) {
    let colours = [];
    let ignoreIndices = [];
    for (let i = 0; i < 5; i++) {
        if (!allWhite) {
            colours.push("rgb(200, 200, 200)");
        }
        else {
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
        }
        else {
            answerCopy += answer[i];
            guessCopy += guess[i];
        }
    }
    let yellowCounts = new Map();
    for (let i = 0; i < guessCopy.length; i++) {
        // Count how many times the remaining letters appear. This is how many
        // times AT MOST we can mark a letter as yellow.
        let count = answerCopy.split('').filter(x => x === guessCopy[i]).length;
        yellowCounts.set(guessCopy[i], count);
    }
    // Last loop - go through each letter, decrementing the count each time we find match and marking that cell as yellow
    for (let i = 0; i < guessCopy.length; i++) {
        if (answerCopy.includes(guessCopy[i]) && guessCopy[i] !== ' ') {
            if (yellowCounts.get(guessCopy[i]) > 0) {
                yellowCounts.set(guessCopy[i], yellowCounts.get(guessCopy[i]) - 1);
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
            drawBox(xOffset + (i * boxWidth) + (i * boxGap), yOffset + (j * boxWidth) + (j * boxGap), colour, letter);
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
    const headerElem = document.getElementById('header');
    const footerElem = document.getElementById('footer');
    if (ctx) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
    drawGame();
    updateKeyboardColours();
}
function updateKeyboardColours() {
    for (const [key, value] of gameState.letterMap.entries()) {
        const keyElem = document.getElementById(key);
        if (keyElem) {
            keyElem.style.backgroundColor = value;
        }
    }
}
window.addEventListener('resize', resize);
window.addEventListener('keydown', inputEvent);
keyboardDiv.addEventListener('click', clickEvent);
function submitGuess() {
    if (currentGuess.length === 5) {
        currentGuess = currentGuess.toUpperCase();
        if (words.includes(currentGuess)) {
            logGuess(currentGuess);
        }
        else {
            var snack = document.getElementById("snackbar");
            snack.innerHTML = "Invalid word.";
            snack.className = "show";
            setTimeout(function () { snack.className = snack.className.replace("show", ""); }, 3000);
        }
    }
}
function updateLetterMap(guess, colours) {
    for (let i = 0; i < guess.length; i++) {
        let colour = colours[i];
        let keyColour = "white";
        if (gameState.letterMap.has(guess[i])) {
            keyColour = gameState.letterMap.get(guess[i]);
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
function logGuess(guess) {
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
function todaysIndex() {
    const oneDay = 24 * 60 * 60 * 1000;
    const firstDate = new Date(2022, 1, 3);
    const secondDate = new Date();
    secondDate.setHours(0, 0, 0, 0);
    const diffDays = Math.round(Math.abs(((+firstDate) - (+secondDate)) / oneDay));
    return diffDays;
}
function processInput(keyCode) {
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
function inputEvent(evt) {
    if (!evt.repeat) {
        processInput(evt.keyCode);
    }
}
function clickEvent(evt) {
    evt.preventDefault();
    const target = evt.target;
    if (target && target.id) {
        if (target.id === 'enter') {
            processInput(13); // ugh
        }
        else if (target.id === 'delete') {
            processInput(8); // oh the humanity
        }
        else if (target.id.length === 1) {
            processInput(target.id.charCodeAt(0));
        }
    }
}
function copyResult(discord) {
    let copyText = "SOL KATTI BETA " + gameState.win + "/6 \n";
    for (let guess of gameState.guesses) {
        let colours = colour(guess, false);
        // terrible
        for (let colour of colours) {
            if (colour === 'rgb(200, 200, 200)') {
                copyText += "⬛";
            }
            if (colour === 'yellow') {
                copyText += "🟨";
            }
            if (colour === 'rgb(135, 224, 151)') {
                copyText += "🟩";
            }
        }
        if (discord) {
            copyText += "  ||`" + guess + "`||";
        }
        copyText += '\n';
    }
    copyText += "\nhttps://doopu.github.io/solkatti/";
    navigator.clipboard.writeText(copyText).then(function () {
        console.log('Copy successful!');
    }, function (err) {
        console.error('Copy failed...', err);
    });
}
stateCheck();
resize();
function copyButton(discord = false) {
    var snack = document.getElementById("snackbar");
    snack.innerHTML = "Result copied to clipboard!";
    snack.className = "show";
    setTimeout(function () { snack.className = snack.className.replace("show", ""); }, 3000);
    copyResult(discord);
}
shareButton.onclick = function () {
    copyButton(false);
};
twitterButton.onclick = function () {
    copyButton(false);
};
discordButton.onclick = function () {
    copyButton(true);
};
// Modal stuff
// When the user clicks the button, open the modal
helpButton.onclick = function () {
    infoModal.style.display = "block";
};
spanHelp.addEventListener('click', function () {
    infoModal.style.display = "none";
});
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == infoModal) {
        infoModal.style.display = "none";
    }
};
