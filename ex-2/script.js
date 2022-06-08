var field = [];
var vals = [0,0,0,0,0,0,0,0,0];
var turn = "orange";



for(var x=0;x<9;x++){
    field[x] = document.querySelector('[data-js="'+x+'"]');
    console.log(field[x]);
    //field[x].addEventListener('click', updateVal);
    field[x].addEventListener('click', updateVal);
    
}

function updateVal(nr){
    console.log(nr.target.attributes['data-js']);
    console.log(nr.target.dataset.js);

    if(turn=="orange" && vals[0]==0){
        //vals[nr] =  vals[nr] - 1;
        vals[0] = vals[0]-1;
        field[0].classList.toggle("orange");
        turn = "blue";
    }else if(turn=="blue" && vals[0]==0){
        //vals[nr] = vals[nr] + 1;
        vals[0] = vals[0]+1;
        field[0].classList.toggle("blue");
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
        vals[2]+vals[5]+vals[8]==-3
        ){
        //orangeWin();
        console.log("ORANGE WIN");
    }else if(
        vals[0]+vals[1]+vals[2]==3 ||
        vals[3]+vals[4]+vals[5]==3 ||
        vals[6]+vals[7]+vals[8]==3 ||
        vals[0]+vals[3]+vals[6]==3 ||
        vals[1]+vals[4]+vals[7]==3 ||
        vals[2]+vals[5]+vals[8]==3
    ){
        //blueWin();
        console.log("BLUE WIN");
}}
