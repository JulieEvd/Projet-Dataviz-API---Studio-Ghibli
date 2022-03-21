let h, m, s

function refresh(){
    var t = 1000; // rafraîchissement en millisecondes
    setTimeout('showDate()',t)
}

function showDate() {
    var date = new Date()
    h = date.getHours();
    m = date.getMinutes();
    s = date.getSeconds();
    if( h < 10 ){ h = '0' + h; }
    if( m < 10 ){ m = '0' + m; }
    if( s < 10 ){ s = '0' + s; }
    var time = h + ':' + m + ':' + s
    document.getElementById('horloge').innerHTML = time;
    refresh();
    deplacement()
 }

 function deplacement() {
    for (let i=0; i<24; i++) {
   //setInterval(function()) (element.innerHTML += 50 px )
       if (m===23 && s===0) {
            document.getElementById("image").animate([
            // étapes/keyframes
            { transform: 'translateX(60px)' }
         ], {
         // temporisation
            duration: 1000,
            //iterations: Infinity
        })
    }}}

