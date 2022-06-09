var field = [];
const restart = document.querySelector('[data-js="restart"]');
var vals = [0,0,0,0,0,0,0,0,0];
var turn = "orange";
const gameText = document.getElementById("turn")
var player1 = "sven";
var player2 = "mike";


for(var x=0;x<9;x++){
    field[x] = document.querySelector('[data-js="'+x+'"]');
}
initialiseGame();


function initialiseGame(){
    for(var x=0;x<9;x++){
        field[x].addEventListener('click', updateVal);
        if(vals[x]==-1){
            field[x].classList.toggle("orange");
            console.log("new_blue");
        }else if(vals[x]==1){
            field[x].classList.toggle("blue");
            console.log("new_orange");
        }
        vals[x] = 0;
    }
}

restart.addEventListener('click',initialiseGame);

function updateVal(nr){
    console.log(nr.target.dataset.js);

    if(turn=="orange" && vals[nr.target.dataset.js]==0){
        //vals[nr] =  vals[nr] - 1;
        vals[nr.target.dataset.js] = vals[nr.target.dataset.js]-1;
        field[nr.target.dataset.js].classList.toggle("orange");
        gameText.innerHTML = player1+"'s turn";
        turn = "blue";
    }else if(turn=="blue" && vals[nr.target.dataset.js]==0){
        //vals[nr] = vals[nr] + 1;
        vals[nr.target.dataset.js] = vals[nr.target.dataset.js]+1;
        field[nr.target.dataset.js].classList.toggle("blue");
        gameText.innerHTML = player2+"'s turn";
        turn = "orange";
    }
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
        for(var x=0;x<9;x++){
            field[x].removeEventListener('click', updateVal);
        }
        gameText.innerHTML = player2+" wins!";

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
        console.log("BLUE WIN");
        for(var x=0;x<9;x++){
            field[x].removeEventListener('click', updateVal);
        }
        gameText.innerHTML = player1+" wins!";
    }else if(   vals[0]!=0 &&
                vals[1]!=0 &&
                vals[2]!=0 &&
                vals[3]!=0 &&
                vals[4]!=0 &&
                vals[5]!=0 &&
                vals[6]!=0 &&
                vals[7]!=0 &&
                vals[8]!=0
        ){
            for(var x=0;x<9;x++){
                field[x].removeEventListener('click', updateVal);
            }
            gameText.innerHTML = "it's a tie!";
        }
}
