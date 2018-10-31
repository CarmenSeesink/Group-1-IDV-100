    

$(function(){
    console.log("Individual Test")

    var item =  localStorage.getItem("movieID");
    
          
       

          


    console.log(item);

    $.ajax({
        url: 'https://www.omdbapi.com/?i=' + encodeURI(item) + '&apikey=5d0c0e4f',
        dataType: "json",
        async: true
      }).done(function(response) {

        console.log(response);
        
    
        movieImage = response.Poster;
        console.log(movieImage);
        
        movieTitle = response.Title;
        movieGenre = response.Genre;
        movieRating = response.imdbRating;
        mvoieVotes = response.imdbVotes;
        movieYear = response.Year;
        moviePlot = response.Plot;
        movieLanguage = response.Language;
        movieid = response.imdbID;
    

        
        
            $(".movie-con").append(" <div class='poster'><img class='col-xl-1' id='movie-z' src=" + movieImage + " height='100%' width='100%'></div>");
          
    
    $("#movie-title").text(movieTitle);
    $("#movie-genre").text(movieGenre);
    $("#movie-rating").text(movieRating);
    $("#movie-year").text(movieYear);
    $("#movie-vote").text(movieRating);
    $("#movie-plot").text(moviePlot);
    // $("#movie-language").text(movieLanguage);   

      });
      
      $(".button-one").on("click", function () {
        $('#watch-modal').modal('show');
  
        $(".movie-area").append("<div class='col-xs-12 col-md-4 col-lg-3'><div class='movie-holder' data-title=" + movieTitle + " data-genre=" + movieGenre + " data-rating=" + movieRating + " data-votes=" + mvoieVotes + " data-year=" + movieYear + " data-language=" + movieLanguage + "><img class='movie-img effect1' src=" + movieImage + "><h4>Title: " + movieTitle + "</h4><h5>Genre: " + movieGenre + "</h5><h5>Language: " +  movieLanguage + "</h5><h5>IMDb Rating: " +  movieRating + "</h5><div class='play'><div class='play-icon'></div></div><div class='plus'>ADD</div></div></div>");
  
      });
  
      $(".button-two").on("click", function () {
        $('#added-modal').modal('show');
      });  
  

}); 

