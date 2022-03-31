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
  if (entree!=null) {
    let dateArray = films.filter(function (item){
      return item.release_date == entree
    })
    if(dateArray.length == 0) {
      const newDiv = document.createElement("div")
      newDiv.innerHTML = '<img src="Chihiro.gif">'
      document.getElementById("div").appendChild(newDiv)
      for (i=0; i <= films.length; i++) {
        var element = document.getElementById("div")
          while (element.firstChild) {
              element.removeChild(element.firstChild)
              break
          }
          }
    } else {
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
      }
  } else {
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


document.getElementById("date").innerHTML= "Find your movie"
let btn = document.querySelector('input')

function enterDate(){
   entree= prompt("Choose a year from 1985", "2010")
    if (entree===null){
        alert("You cancelled your answer")
    } else if (entree<1985){
        document.getElementById("date").innerHTML= "The studio wasn't founded yet. It was created in 1985."
    } else if (entree>films[films.length-1]["release_date"]){
        document.getElementById("date").innerHTML= "There are no new movies released after " + films[films.length-1]["release_date"]
    } else{
        return addElement()
        }
}

const refreshButton = document.querySelector('.refresh-button');

const refreshPage = () => {
  location.reload()
}

refreshButton.addEventListener('click', refreshPage)

addElement()