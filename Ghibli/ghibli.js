let exple = [1, 2, 3]
let texte = ["Le chateau ambulant", "Le voyage de Chihiro", "Le vent se lève"]

function addElement() {
    for (i=0; i < exple.length; i++) {
    const newDiv = document.createElement("div");
    newDiv.innerHTML = texte[i];
    document.getElementById("div").appendChild(newDiv);
    }
}
document.getElementById("date").innerHTML= "Trouver un film";
let btn = document.querySelector('input');
btn.addEventListener('click', enterDate);

function enterDate(){
   let entree= prompt("Entrez une date entre 1985 et 2020", "<Entrer votre date>");
    if (entree==null){
        alert("vous avez annule");
    }
        if (entree<1985){
            document.getElementById("date").innerHTML= "Le studio n'existait pas encore. Il fut fondé en 1985.";
        } else if (entree>2020){
            document.getElementById("date").innerHTML= "Le studio n'a pas fait de films après 2020";
        } else{
            document.getElementById("date").innerHTML= "Afficher";
        }
}

addElement()