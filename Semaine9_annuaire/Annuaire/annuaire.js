// JavaScript File
var list = document.getElementById("list");
var prenom = document.getElementById("prenom");
var nom = document.getElementById("nom");
var telephone = document.getElementById("telephone");
var add = document.getElementById("add");
var erase = document.getElementById("erase");
var searchContent = document.getElementById("searchContent");
var search = document.getElementById("search");
var searchResult = document.getElementById("searchResult");
var hide = document.getElementById("hide");
var show = document.getElementById("show");


var contacts = [{
    prenom: 'Yanis',
    nom: 'Hommet',
    telephone: '06 06 99 87 65'
}, {
    prenom: 'Chantal',
    nom: 'Lapierre',
    telephone: '07 65 88 99 88'
}, {
    prenom: 'Angel',
    nom: 'Perez',
    telephone: '06 00 99 88 64 33'
}, {
    prenom: 'Maeva',
    nom: 'Perez',
    telephone: '09 99 88 77 66'
}];

function formate(truc) {
    return truc.charAt(0).toUpperCase() + truc.substring(1).toLowerCase();
}
function addElement() {
    if (prenom.value != 0 && nom.value != 0 && telephone.value != 0) {
        contacts.push({
            prenom: formate(prenom.value),
            nom: formate(nom.value),
            telephone: telephone.value
        });
        showList();
    } else {
        alert("Merci de compléter les trois champs.")
    }
}
function eraseElement() {
    contacts.pop();
    showList();
}
function texteContact(contact) {
    return contact.prenom + " " + contact.nom + " (" + contact.telephone + ")";
}
function showList() {
    var elements = " ";
    for (var i = 0; i < contacts.length; i++) {
        elements += "<li>" + texteContact(contacts[i]) + "</li>";
    }
    list.innerHTML = elements;
}
function searchContact() {
    searchContent= formate(searchContent.value);

    var elements = " ";
    for (var i = 0; i < contacts.length; i++) {

        if (searchContent == contacts[i].prenom
            || searchContent == contacts[i].nom
            || searchContent == contacts[i].telephone) {
            elements += "<li>" + texteContact(contacts[i]) + "</li>";
        }
    }
    if (elements== " ") {
        elements = "Aucun résultat ne correspond à votre recherche"
    }
    searchResult.innerHTML = elements;
}
function visibility_toggle(){
    list.classList.toggle("hideIt");
    hide.classList.toggle("hideIt");
    show.classList.toggle("hideIt");
}

add.onclick = addElement;
erase.onclick = eraseElement;
search.onclick = searchContact;
hide.onclick = visibility_toggle;
show.onclick = visibility_toggle;

showList();
