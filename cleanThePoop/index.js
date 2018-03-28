const tiles = document.querySelectorAll('.tile');
const scoreBoard = document.querySelector('.score');
const finalScoreBoard = document.querySelector('.finalScore');
const poops = document.querySelectorAll('.poop');
const pups = document.querySelectorAll('.puppy');
const gameover = document.getElementById("gameover");
const container = document.getElementById("container");
const intro = document.getElementById("intro");

let timeUp = false;
let score = 0;
let tilesWithPoop = [];
let minTime = 300;
let maxTime = 1000;

function randomTime(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}
function randomTile(tiles) {
  const idx = Math.floor(Math.random() * tiles.length);
  const tile = tiles[idx];
  if (tilesWithPoop.includes(tile.classList[1])) {
    console.log('Ah nah thats the same tile');
    return randomTile(tiles);
  }
  tilesWithPoop.push(tile.classList[1]);
  return tile;
}

function startPuppy() {
  const time = randomTime(minTime, maxTime);
  const tile = randomTile(tiles);
  tile.classList.add('up1');
  setTimeout(() => {
    tile.classList.remove('up1');
    tile.classList.add('up2');
    if (tilesWithPoop.length!=tiles.length)  {
      startPuppy();
    }else {
      finalScoreBoard.textContent = score;
      gameover.style.display = 'inherit';
  }
  }, time);
}

function resetBoard(){
  intro.style.display='none';
  container.style.display = 'block';
  gameover.style.display = 'none';
  scoreBoard.textContent = 0;
  minTime = 300;
  maxTime = 1000;
  score = 0;
  tilesWithPoop = [];
  tiles.forEach(tile => {
    tile.classList.remove('up2');
    tile.classList.remove('up1');
  });
}

function startGame() {
  resetBoard();
  setTimeout(()=>{
      startPuppy();
      setInterval(() => {
        if (minTime>5){
          minTime=minTime-5;}
        if (maxTime>20){
          maxTime=maxTime-20;}
      }, 1000);
  }, 100);
}
function cleanPoop(e) {
  if(!e.isTrusted) return; // cheater!
  score++;
  let cleaned = tilesWithPoop.indexOf(this.parentNode.classList[1]);
  let spliced = tilesWithPoop.splice(cleaned,1);
  this.parentNode.classList.remove('up2');
  scoreBoard.textContent = score;
}

function movePuppy(e) {
  if(!e.isTrusted) return; // cheater!
  this.parentNode.classList.remove('up1');
}

poops.forEach(poop => poop.addEventListener('click', cleanPoop));
pups.forEach(pup => pup.addEventListener('click', movePuppy));
