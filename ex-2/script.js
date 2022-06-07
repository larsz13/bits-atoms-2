//const chosePlayer = document.querySelectorAll("[data-js]");
const field = document.querySelector('[data-js="box"]');
//console.log(chosePlayer);
let vals = [
    [0,0,0]
    [0,0,0]
    [0,0,0]
];

function myFunction(){
    console.log("clicked");
    field.classList.toggle("blue");
    
}

field.addEventListener("click", myFunction);