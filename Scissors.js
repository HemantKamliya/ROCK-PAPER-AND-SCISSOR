const rock = document.getElementsByClassName("rock")[0]; 
const paper = document.getElementsByClassName("paper")[0];
const scissor = document.getElementsByClassName("scissors")[0]; // Adjusted class name to "scissors"
const res = document.getElementsByClassName("result")[0];
const count=document.getElementsByClassName("count")[0];
const colors=document.getElementsByClassName("result")[0];
var winner;
var user=0;
var computer=0;
function bg_color(){
    let x=Math.floor(Math.random()*256);
    let y=Math.floor(Math.random()*256);
    let z=Math.floor(Math.random()*256);
    let bg="rgb(" + x + "," + y + "," + z + ")";
  colors.style.color=bg;
   }

function getRandom() {
    let value = Math.floor(Math.random() * 3);
    return value;
}

const option = Object.freeze({
    ROCK: 0,
    PAPER: 1,
    SCISSOR: 2
});

rock.addEventListener("click", () => {
    let x = getRandom();
    if (x == option.ROCK) {
        winner = "It's a draw";
    } else if (x == option.PAPER) {
        winner = "OOPS! Computer wins";
        computer++;

    } else {
        winner = "Hurray! you wins";
        user++;
    }
    texts();
});

paper.addEventListener("click", () => {
    let x = getRandom();
    if (x == option.PAPER) {
        winner = "It's a draw";
    } else if (x == option.SCISSOR) {
        winner = "OOPS! Computer wins";
        computer++;
    } else {
        winner = "Hurray! you wins";
        user++;
    }
    texts();
});

scissor.addEventListener("click", () => {
    let x = getRandom();
    if (x == option.SCISSOR) {
        winner = "It's a draw";
    } else if (x == option.ROCK) {
        winner = "OOPS! Computer wins";
        computer++;
    } else {
        winner = "Hurray! you wins";
        user++;
    }
    texts();
});

function texts() {
    bg_color();
    res.innerText = winner;
    count.innerHTML=`<h3>YOU=${user}</h3> 
    <h3>COMPUTER=${computer}</h3>`
}
