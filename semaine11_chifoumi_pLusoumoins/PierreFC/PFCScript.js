var result = document.getElementById("result");
var player_choice = document.getElementById('player_choice');
var computer_choice = document.getElementById('computer_choice');
var pscore = document.getElementById('pscore');
var buttons = document.querySelectorAll("button"),
    result1,
    result2;
    var score = 0;
listen();

function listen() {
    var i;
    for (i = 0; i < buttons.length; i++) {
        buttons[i].id = i;
        if (i<3){
        buttons[i].addEventListener("click", player, false)}
    }
}
function player() {
    player_choice.innerHTML = " ";
    player_choice.innerHTML = " ";
    result.innerHTML = " ";

    result2= "";
    result1 = this.name;
    player_choice.innerHTML = result1;
    var roll = setInterval(computer, 250);
    setTimeout(function stop() {
        clearInterval(roll);
        winner()
    }, 3000);
}


function computer() {
    var chance = Math.floor((Math.random() * 3) + 3);
    result2 = buttons[chance].name;
    buttons[chance].focus();
    computer_choice.innerHTML = result2;
}

function winner() {
    var short;
    if (result1 == "pierre") {
        if (result2 == "pierre") {
            short = 0;
        }
        if (result2 == "feuille") {
            short = -1;
        }
        if (result2 == "ciseaux") {
            short = +1;
        }
    }
    if (result1 == "feuille") {
        if (result2 == "pierre") {
            short = +1;
        }
        if (result2 == "feuille") {
            short = 0;
        }
        if (result2 == "ciseaux") {
            short = -1;
        }
    }
    if (result1 == "ciseaux") {
        if (result2 == "pierre") {
            short = -1;
        }
        if (result2 == "feuille") {
            short = +1;
        }
        if (result2 == "ciseaux") {
            short = 0;
        }
    }
    if (short==-1){
        result.innerHTML="L'ordinateur gagne";
        score = score -1;
    }
    if (short==1){
        result.innerHTML="Vous gagnez";
        score = score +1;
    }
    if (short==0){
        result.innerHTML="égalité";
        score = score;
    }
    pscore.innerHTML= "Vous avez " +score + " points";

}