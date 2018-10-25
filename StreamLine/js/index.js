//Current Movies Api function

$(function () { 
 
//Requested movies array
var moviesArray = ["venom", "goosebumps+2", "first+man", "halloween", "johnny+English+Strikes+Again", "Hunter+Killer", "Suspiria"];

//Requested content from the array
var movieTitle = '';
var movieImage = '';
var movieGenre = '';
var imdbRating = '';
var movieYear = '';
var movieRating = '';
var moviePlot = '';
var movieLanguage = '';
var id = '';


function getData(item, loop){

  $.ajax({
    url: 'https://www.omdbapi.com/?t=' + encodeURI(item, loop) + '&apikey=5d0c0e4f',
    dataType: "json",
    async: true
  }).done(function(response) {

    console.log(response);
    
    movieImage = response.Poster;
    movieTitle = response.Title;
    
    id = response.imdbID;

    

    $(function() { 
      $(".row1").append("<div class='card--content'><div class='poster'><div class='poster-overlay'><img id='movies-z' src=" + movieImage + " style='width:100%;' style='height:100%;'></div></div></div>");
    });

  });
  

}

for (var i = 0; i < moviesArray.length; i++) {  
  
  console.log(moviesArray[i]);
  getData(moviesArray[i], i)
  
}

});

//Requested movies array
// var moviesArray = ["The+Nutcracker+and+the+Four+Realms", "The+Grinch&y=2018", "Nobody's+Fool", "Ralph+Breaks+the+Internet", "robin+hood&y=2018", "Mortal+Engines"];
