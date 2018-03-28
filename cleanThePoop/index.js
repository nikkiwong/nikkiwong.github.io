const tiles = document.querySelectorAll('.tile');
const scoreBoard = document.querySelector('.score');
const poops = document.querySelectorAll('.poop');
const pups = document.querySelectorAll('.puppy');

let lastTile;
let timeUp = false;
let score = 0;
let tilesWithPoop = [];

function randomTime(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}
function randomTile(tiles) {
  const idx = Math.floor(Math.random() * tiles.length);
  const tile = tiles[idx];
  if (tilesWithPoop.includes(tile)) {
    console.log('Ah nah thats the same tile');
    return randomTile(tiles);
  }
  tilesWithPoop.push(tile);
  return tile;
}
function puppy() {
  const time = randomTime(200, 1000);
  const tile = randomTile(tiles);
  tile.classList.add('up1');
  setTimeout(() => {
    tile.classList.remove('up1');
    tile.classList.add('up2');
    if (!timeUp && tilesWithPoop.length!=tiles.length)  puppy();
  }, time);
}
function startGame() {
  scoreBoard.textContent = 0;
  timeUp = false;
  score = 0;
  puppy();
  setTimeout(() => timeUp = true, 10000)
}
function clean(e) {
  if(!e.isTrusted) return; // cheater!
  score++;
  console.log(this.parentNode.classList[1]);
  let cleaned = tilesWithPoop.indexOf(this.parentNode.classList[1]);
  console.log(tilesWithPoop);
  tilesWithPoop.splice(cleaned,1);
  console.log(tilesWithPoop);
  this.parentNode.classList.remove('up2');
  this.parentNode.classList.remove('up1');
  scoreBoard.textContent = score;
}
poops.forEach(poop => poop.addEventListener('click', clean));
pups.forEach(pup => pup.addEventListener('click', clean))
