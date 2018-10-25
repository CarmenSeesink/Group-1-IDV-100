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
    movieGenre = response.Genre;
    imdbRating = response.imdbRating;
    movieYear = response.Year;
    movieRating = response.Rated;
    moviePlot = response.Plot;
    id = response.imdbID;

    

    $(function() { 
      $(".row1").append("<div id=" + "con" + id + "><div class='card--content'><img class='poster' src=" + movieImage + "></div></div>");
    });

  });
  

}

for (var i = 0; i < moviesArray.length; i++) {  
  
  console.log(moviesArray[i]);
  getData(moviesArray[i], i)
  
}

});



//Coming Soon Api function

$(function(){

//Requested movies array
var moviesArray = ["The+Nutcracker+and+the+Four+Realms", "The+Grinch&y=2018", "Nobody's+Fool", "Ralph+Breaks+the+Internet", "robin+hood&y=2018", "Mortal+Engines"];

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
    movieGenre = response.Genre;
    imdbRating = response.imdbRating;
    movieYear = response.Year;
    movieRating = response.Rated;
    moviePlot = response.Plot;
    id = response.imdbID;

    

    $(function() { 
      $(".row2").append("<div id=" + "con" + id + "><div class='card--content'><img class='poster' src=" + movieImage + "></div></div>");
    });

  });
  

}

for (var i = 0; i < moviesArray.length; i++) {  
  
  console.log(moviesArray[i]);
  getData(moviesArray[i], i)
  
}
});