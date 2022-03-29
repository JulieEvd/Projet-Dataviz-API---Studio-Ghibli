// let exple = [1, 2, 3]
// let texte = ["Le chateau ambulant", "Le voyage de Chihiro", "Le vent se lève"]

// let films = [ 
//   {
//     titre: "Le chateau ambulant",
//     date: "2004",
//     duree: "119",
//     image: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/TkTPELv4kC3u1lkloush8skOjE.jpg"
//   },
//   {
//     titre: "Le voyage de Chihiro",
//     date: "2001",
//     duree: "124",
//     image: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/39wmItIWsg5sZMyRUHLkWBcuVCM.jpg'
//   },
//   {
//     titre: "Le vent se lève",
//     date: "2013",
//     duree: "126",
//     image: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/jfwSexzlIzaOgxP9A8bTA6t8YYb.jpg'
//   }
// ]

var films = JSON.parse($.ajax({'url': "https://ghibliapi.herokuapp.com/films/", 'async': false}).responseText)
let entree

function addElement() {
  btn.addEventListener('click', enterDate)
  console.log(entree)
  if (entree!=null) {
    for (i=0; i < films.length; i++) {
        for (i=0; i <= films.length; i++) {
        var element = document.getElementById("div")
          while (element.firstChild) {
              element.removeChild(element.firstChild)
              break
            }
        if (films[i]["release_date"]==entree) {
           const newDiv = document.createElement("div")
           const poster  = document.createElement("section")
           poster.className = "poster"
           const resume = document.createElement("section")
           resume.className = "resume"
           poster.innerHTML = '<img id="image" height="200" width="140" src="' + films[i]["image"] + '" />'
           resume.innerHTML =  films[i]["title"] + "<br />" + films[i]["original_title"] + "&nbsp;" + "&nbsp;"+ films[i]["original_title_romanised"] +"<br />" + "<br />" + "Year of release: " + films[i]["release_date"] +"<br />" + "Duration (min): "+ films[i]["running_time"] + "<br />" + "<br />" + films[i]["description"]
           document.getElementById("div").appendChild(newDiv)
           newDiv.prepend(poster)
           newDiv.append(resume)
           }
      }
    }
  } else {
        //  for (i=0; i < films.length; i++) {
        //    var element = document.getElementById("div")
        //      while (element.lastChild) {
        //          element.removeChild(element.lastChild)
        //      }
      for (i=0; i < films.length; i++) {
        const newDiv = document.createElement("div")
        const poster  = document.createElement("section")
        poster.className = "poster"
        const resume = document.createElement("section")
        resume.className = "resume"
        poster.innerHTML = '<img id="image" height="200" width="140" src="' + films[i]["image"] + '" />'
        resume.innerHTML =  films[i]["title"] + "<br />" + films[i]["original_title"] + "&nbsp;" + "&nbsp;"+ films[i]["original_title_romanised"] +"<br />" + "<br />" + "Year of release: " + films[i]["release_date"] +"<br />" + "Duration (min): "+ films[i]["running_time"] + "<br />" + "<br />" + films[i]["description"]
        document.getElementById("div").appendChild(newDiv)
        newDiv.prepend(poster)
        newDiv.append(resume)
      
    }
  }
}


document.getElementById("date").innerHTML= "Trouver un film"
let btn = document.querySelector('input')
//btn.addEventListener('click', enterDate)

function enterDate(){
   entree= prompt("Entrez une date entre 1985 et 2021", "<Entrer votre date>")
    if (entree==null){
        alert("vous avez annule")
    }
        if (entree<1985){
            document.getElementById("date").innerHTML= "Le studio n'existait pas encore. Il fut fondé en 1985."
        } else if (entree>2021){
            document.getElementById("date").innerHTML= "Le studio n'a pas fait de films après 2021"
        } else{
          return addElement()
            //document.getElementById("date").innerHTML= "Afficher"
        }
}



addElement()



 
//document.getElementById("example").innerHTML = json[0]["release_date"]
