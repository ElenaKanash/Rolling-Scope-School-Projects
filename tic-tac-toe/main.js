const area = document.querySelector('.ceil-container');
const ceils = document.querySelectorAll('.ceil');
let count = 0;
let result = '';
const victory = document.querySelector('.winner');
const winnerCount = document.querySelector('.winnerCount');
const btn = document.querySelector('.btn');
const mute = document.querySelector('.mute');

area.addEventListener ('click', e => {
//  console.log(e.target)
  count % 2 == 0 ? e.target.textContent = 'X' : e.target.textContent = 'O';
  e.target.classList.add('active');
  count++;

  checkResult();
  console.log (count);
})

const checkResult = () => {
  const arrWinnerCeis = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

for (let i = 0; i < arrWinnerCeis.length; i++) {
   // console.log (ceils[arrWinnerCeis[i]]);
    if (
      ceils[arrWinnerCeis[i][0]].textContent == 'X' && ceils[arrWinnerCeis[i][1]].textContent == 'X' && ceils[arrWinnerCeis[i][2]].textContent == 'X'
      ) {
        result = 'крестики';
        showWinner(result);
    } else if (
      ceils[arrWinnerCeis[i][0]].textContent == 'O' && ceils[arrWinnerCeis[i][1]].textContent == 'O' && ceils[arrWinnerCeis[i][2]].textContent == 'O'
    ) {
      result = 'нолики';
      showWinner(result);
    }  else  if (
      count === 9
    ) {
      result = 'ничья';
      showWinner (result);
    }
  }
}

const showWinner = (winner) => {
  console.log(victory)
  victory.textContent  = '';
  victory.textContent  = `Победитель: ${winner}!`
  count = Math.ceil(count / 2);
  winnerCount.textContent  = '';
  winnerCount.textContent  = `Количество ходов: ${count}`
}

btn.addEventListener('click', () => {
  location.reload();
})

const audio = new Audio();
let isPlay = false;


function playAudio() {
  if (!isPlay) {
    audio.src = './assets/sound.mp3';
    audio.currentTime = 0;
    audio.play();
    isPlay = true;
  } else {
    mute.src = './assets/play.png';
    audio.pause();
    isPlay = false;
  }
}

function changeImage() {
  mute.src = './assets/play.png';
}

mute.addEventListener('click', playAudio)
