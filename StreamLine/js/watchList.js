//Requested movies array
var moviesArray = ["venom"]

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
    movieRating = response.imdbRating;
    mvoieVotes = response.imdbVotes;
    movieYear = response.Year;
    moviePlot = response.Plot;
    id = response.imdbID;
    movieLanguage = response.Language;

    

    $(function() { 
      $(".holder").append(" <div class='card--content col-xs-3 hover'><div class='poster'><img class='col-xl-1' id='movie-z' src=" + movieImage + " height='100%' width='100%'></div><div class='bio col-xs-4'><P id='title'> Title" + movieTitle + "</P><P id='bio'>" + moviePlot + "</P></div><div class='button-container hiddin visible-lg visible-md col-xs-4'><div class='watch-btn button effect1'>WATCH</div><div class='remove-btn-tablit button effect1'>REMOVE</div></div><div class='button-container-tablit hidden visible-sm hidden-xs col-xs-4'><div class='watch-btn-tablit button effect1 col-xs-3'>WATCH</div><div class='remove-btn-tablit button effect1 col-xs-3'>REMOVE</div></div></div>");
    });

  });
  

}

for (var i = 0; i < moviesArray.length; i++) {  
  
  console.log(moviesArray[i]);
  getData(moviesArray[i], i)
  
}