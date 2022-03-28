let exple = [1, 2, 3]
let texte = ["Le chateau ambulant", "Le voyage de Chihiro", "Le vent se lève"]

let films = [ 
  {
    titre: "Le chateau ambulant",
    date: "2004",
    duree: "119",
    image: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/TkTPELv4kC3u1lkloush8skOjE.jpg"
  },
  {
    titre: "Le voyage de Chihiro",
    date: "2001",
    duree: "124",
    image: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/39wmItIWsg5sZMyRUHLkWBcuVCM.jpg'
  },
  {
    titre: "Le vent se lève",
    date: "2013",
    duree: "126",
    image: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/jfwSexzlIzaOgxP9A8bTA6t8YYb.jpg'
  }
]
  

function addElement() {
    for (i=0; i < films.length; i++) {
    const newDiv = document.createElement("div")
    newDiv.innerHTML = '<img id="image" height="200" width="140" src="' + films[i]["image"] + '" />' + "<br />" + films[i]["titre"] + "<br />" + "Année de sortie: " + films[i]["date"] +"<br />" + "Durée en minutes: "+ films[i]["duree"]
    document.getElementById("div").appendChild(newDiv)
    }
}

addElement()

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