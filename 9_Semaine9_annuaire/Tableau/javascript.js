// JavaScript File
var list = document.getElementById("list");
var text = document.getElementById("text");
var add = document.getElementById("add");
var erase = document.getElementById("erase");


var tableau = ['John', 'henri', 'Josephine', 'Lucas'];

function addElement() {
    if (text.value != 0 ) {
        tableau.push(text.value);
        showList();
    }else {
        alert("Vous n'avez rien ajoute")
    }
}
function eraseElement() {
    tableau.pop();
    showList();
}
function showList() {
    elements = " ";
    for (var i = 0; i < tableau.length; i++) {
        elements += "<li>" + tableau[i] + "</li>";
    }
    list.innerHTML = elements;
}
add.onclick = addElement;
erase.onclick = eraseElement;

showList();

