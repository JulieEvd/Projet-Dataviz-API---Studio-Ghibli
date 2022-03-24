let exple = [1, 2, 3]
let texte = ["Le chateau ambulant", "Le voyage de Chihiro", "Le vent se lève"]

function addElement() {
    for (i=0; i < exple.length; i++) {
    const newDiv = document.createElement("div");
    newDiv.innerHTML = texte[i];
    document.getElementById("div").appendChild(newDiv);
    }
}

addElement()