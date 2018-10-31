    

$(function(){
    console.log("Individual Test")

    // var movieName =  localStorage.getItem("movieTitle");
    // var moviePoster = localStorage.getItem("movieImage");
    // var movieClass = localStorage.getItem("movieGenre");
    // var imdbScore = localStorage.getItem("imdbRating");
    // var moviereleased = localStorage.getItem("movieYear");
    // var movieScore = localStorage.getItem("movieRating");
    // var movieBio = localStorage.getItem("moviePlot");
    // var movieToungh = localStorage.getItem("movieLanguage");
    // var movieid = localStorage.getItem("movieid");

    // $(".movie-image-container").attr('src', moviePoster);
    // $("#movie-title").text(movieName);
    // $("#movie-genre").text(movieClass);
    // $("#movie-rating").text(imdbScore);
    // $("#movie-year").text(moviereleased);
    // $("#movie-rating").text(movieScore);
    // $("#movie-plot").text(movieBio);
    // $("#movie-language").text(movieToungh);   


    var vOneLS = localStorage.getItem("vOneLocalStorage ");
    var variableTwo = vOneLS;

    console.log(variableTwo)
    $("#movie-language").text(variableTwo);  
    
}); 