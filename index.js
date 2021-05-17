const squares = document.querySelectorAll('.square')
const mole = document.querySelector('.mole')
const timeLeft = document.querySelector('#time-left')
const score = document.querySelector('#score')

let result = 0
let hitPosition
let currentTime = 30
let timerId = null

function randomSquare() {
  squares.forEach(square => {
    square.classList.remove('mole')
  })

  let randomSquare = squares[Math.floor(Math.random() * 9)]
  randomSquare.classList.add('mole')

  hitPosition = randomSquare.id
}

squares.forEach(square => {
  square.addEventListener('mousedown', () => {
    if (square.id == hitPosition) {
      result++
      score.textContent = result
      hitPosition = null
    }
  })
})

function moveMole() {
  timerId = setInterval(randomSquare, 500)
}

//moveMole()

function countDown() {
 currentTime--
 timeLeft.textContent = currentTime

 if (currentTime == 0) {
   clearInterval(countDownTimerId)
   clearInterval(timerId)
   alert('GAME OVER! Your final score is ' + result)
 }

}

let countDownTimerId = null; // setInterval(countDown, 1000)


function handleStart(){
  clearInterval(countDownTimerId)
  clearInterval(timerId)
  hitPosition = null;
  result = 0;
  currentTime = 30;
  timerId = null;
  timeLeft.textContent = currentTime;
  moveMole()
  countDownTimerId = setInterval(countDown, 1000)
}
function handleReset(){
  clearInterval(countDownTimerId)
  clearInterval(timerId)
  hitPosition = null;
  result = 0;
  currentTime = 30;
  timerId = null;
  //timeLeft.textContent = currentTime
  squares.forEach(square => {
    square.classList.remove('mole')
  })
  score.textContent = result;
  timeLeft.textContent = currentTime;
  moveMole()
  countDownTimerId = setInterval(countDown, 1000)
}