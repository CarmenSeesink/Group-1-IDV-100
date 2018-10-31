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

    
    
    movieImage = response.Poster;
    movieTitle = response.Title;
    
    id = response.imdbID;

    $(function() {
      $(".row1").append("<div class='card--content col-xs-3 hover'><div class='poster'><figure><img class='col-xl-1' id='movie-z' src=" + movieImage + " height='100%' width='100%'></figure></div><div class='play'><div class='play-icon'></div></div><div class='plus'>ADD</div></div>");
    });

    $(".play").on("click", function () {
      $('#watch-modal').modal('show');
    });
  });
}

for (var i = 0; i < moviesArray.length; i++) {  
  
  console.log(moviesArray[i]);
  getData(moviesArray[i], i)
}
});


//Requested movies array

$(function () { 
 
  //Requested movies array
  var moviesArray = ["The+Nutcracker+and+the+Four+Realms", "The+Grinch&y=2018", "Nobody's+Fool", "Ralph+Breaks+the+Internet", "robin+hood&y=2018", "Mortal+Engines", "Aquaman&y=2018", "Bumblebee"];
  
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
  
      
      
      movieImage = response.Poster;
      movieTitle = response.Title;
      
      id = response.imdbID;
  
      $(function() {
        $(".row2").append("<div class='card--content col-xs-3 hover'><div class='poster'><figure><img class='col-xl-1' id='movie-z' src=" + movieImage + " height='100%' width='100%'></figure></div><div class='play'><div class='play-icon'></div></div><div class='plus'>ADD</div></div>");
      });

      $(".play").on("click", function () {
        $('#watch-modal').modal('show');
      });    

    });
  }
  
  for (var i = 0; i < moviesArray.length; i++) {  
    
    console.log(moviesArray[i]);
    getData(moviesArray[i], i)
  }
  
  

});
  

 // $(".card--content").on("click", function () {
      //   var storage = +$(this).find(".poster").text();
      //   console.log("test");
      
      //   console.log(storage);
      
      //   for(i = 0; i < moviesArray.length; i++){
      //     if(imdbID === storage){
      //       var movieTitle = response[i].Poster;
      //       var movieImage = response[i].Title;
      //       var movieGenre = response[i].Genre;
      //       var imdbRating = response[i].imdbRating;
      //       var movieYear = response[i].imdbVotes;
      //       var movieRating = response[i].Year;
      //       var moviePlot = response[i].Plot;
      //       var movieLanguage = response[i].Language;
      //       var id = imdbID;
      
      //       localStorage.setItem("movieTitle", movieTitle);
      //       localStorage.setItem("movieImage", movieImage);
      //       localStorage.setItem("movieGenre", movieGenre);
      //       localStorage.setItem("imdbRating", imdbRating);
      //       localStorage.setItem("movieYear", movieYear);
      //       localStorage.setItem("movieRating", movieRating);
      //       localStorage.setItem("moviePlot", moviePlot);
      //       localStorage.setItem("movieLanguage", movieLanguage);
      //       localStorage.setItem("id", id);
      //     }
      //   }
      
      // });