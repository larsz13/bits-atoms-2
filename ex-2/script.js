// SETTING VARIABLES
var field = [];
var vals = [];
const restart = document.querySelector('[data-js="restart"]');
const start = document.querySelector('[data-js="start"]');
const overlay = document.querySelector('[data-js="overlay"]');
const game = document.querySelector('[data-js="game"]');
const gameText = document.getElementById("turn")
var turn = "blue";
var player1 = "blue";
var player2 = "orange";
const col1 = "#5568fa";
for(var x=0;x<9;x++){
    vals[x] = 0;
    field[x] = document.querySelector('[data-js="'+x+'"]');
}


// FIRST INITIALSIE OF GAME
initialiseGame();
restart.addEventListener('click',initialiseGame);
start.addEventListener('click',nameSave);
game.classList.toggle("hide");


// SAVING THE NAMES INTO VARIABLE AND SWITCHING INTERFACE
function nameSave(){
    player1 = document.getElementById("player1").value;
    player2 = document.getElementById("player2").value;
    if(player1 == ""){
        player1 = "blue";
    }
    if(player2 == ""){
        player2 = "orange";
    }
    overlay.classList.toggle("hide");
    game.classList.toggle("hide");
    gameText.innerHTML = player1+"'s turn";
};

// ON FIRST INITIALISE AND ON RESTARTING
function initialiseGame(){
    if(turn=="orange"){
        gameText.innerHTML = player2+"'s turn";
        gameText.style.color = "orange";
    }else if(turn="blue"){
        gameText.innerHTML = player1+"'s turn";
        gameText.style.color = col1;
    }
    for(var x=0;x<9;x++){
        field[x].addEventListener('click', updateVal);
        if(vals[x]==-1){
            field[x].classList.toggle("orange");
        }else if(vals[x]==1){
            field[x].classList.toggle("blue");
        }
        vals[x] = 0;
    }
}

// AFTER CLICKING IN A FIELD
function updateVal(nr){
    if(turn=="orange" && vals[nr.target.dataset.js]==0){
        vals[nr.target.dataset.js] = vals[nr.target.dataset.js]-1;
        field[nr.target.dataset.js].classList.toggle("orange");
        gameText.innerHTML = player1+"'s turn";
        gameText.style.color = col1;
        turn = "blue";
    }else if(turn=="blue" && vals[nr.target.dataset.js]==0){
        vals[nr.target.dataset.js] = vals[nr.target.dataset.js]+1;
        field[nr.target.dataset.js].classList.toggle("blue");
        gameText.innerHTML = player2+"'s turn";
        gameText.style.color = "orange";
        turn = "orange";
    }
    // CHECK IF SOMEONE ALREADY WON (OR TIE)
    winCheck();
};


function winCheck(){
    if( vals[0]+vals[1]+vals[2]==-3 ||
        vals[3]+vals[4]+vals[5]==-3 ||
        vals[6]+vals[7]+vals[8]==-3 ||
        vals[0]+vals[3]+vals[6]==-3 ||
        vals[1]+vals[4]+vals[7]==-3 ||
        vals[2]+vals[5]+vals[8]==-3 ||
        vals[0]+vals[4]+vals[8]==-3 ||
        vals[2]+vals[4]+vals[6]==-3
        ){
        gameEnded();
        gameText.innerHTML = player2+" wins!";
        gameText.style.color = "orange";

    }else if(
        vals[0]+vals[1]+vals[2]==3 ||
        vals[3]+vals[4]+vals[5]==3 ||
        vals[6]+vals[7]+vals[8]==3 ||
        vals[0]+vals[3]+vals[6]==3 ||
        vals[1]+vals[4]+vals[7]==3 ||
        vals[2]+vals[5]+vals[8]==3 ||
        vals[0]+vals[4]+vals[8]==3 ||
        vals[2]+vals[4]+vals[6]==3
    ){
        gameEnded();
        gameText.innerHTML = player1+" wins!";
        gameText.style.color = col1;
    }else if(   // LOOKING FOR A TIE
                vals[0]!=0 &&
                vals[1]!=0 &&
                vals[2]!=0 &&
                vals[3]!=0 &&
                vals[4]!=0 &&
                vals[5]!=0 &&
                vals[6]!=0 &&
                vals[7]!=0 &&
                vals[8]!=0
        ){
            gameEnded();
            gameText.innerHTML = "it's a tie!";
            gameText.style.color = "white";
        }
}

// REMOVING THE EVENTLISTENER, SO NOONE COULD PLAY ONE BEFORE PRESSING 'RESTART'
function gameEnded(){
    for(var x=0;x<9;x++){
        field[x].removeEventListener('click', updateVal);
    }
}