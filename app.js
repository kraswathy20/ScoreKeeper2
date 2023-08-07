const btn1 = document.querySelector('#btn1')
const btn2 = document.querySelector('#btn2')
const p1 = document.querySelector('#p1')
const p2 = document.querySelector('#p2')
const playto = document.querySelector('#playto')
const btn3 = document.querySelector('#btn3')

let p1Score = 0
let p2Score = 0
let winningScore = 0
let isGameOver = false

btn1.addEventListener('click',function (){
    if(!isGameOver){
        p1Score ++
    if(p1Score === winningScore){
        isGameOver = true
        p1.classList.add('winner')
        p2.classList.add('loser')
    }
    p1.textContent = p1Score
}
})
btn2.addEventListener('click',function (){
    if(!isGameOver){
        p2Score ++
    if(p2Score === winningScore){
        isGameOver = true
        p2.classList.add('winner')
        p1.classList.add('loser')
    }
    p2.textContent = p2Score
}
})
playto.addEventListener('change', function (){
    winningScore = parseInt(this.value)
    resetter();
})
btn3.addEventListener('click',resetter )

function resetter(){
    p1Score = 0
    p2Score = 0
    p1.textContent = 0
    p2.textContent = 0
    isGameOver = false
    p1.classList.remove('winner','loser')
    p2.classList.remove('winner','loser')
}
