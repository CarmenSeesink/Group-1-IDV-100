    

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
      
}); 

