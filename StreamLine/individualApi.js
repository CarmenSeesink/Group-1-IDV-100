$(function(){
    
    var apiRequest = XMLHttpRequest();
    apiRequest.open('GET', 'http://www.omdbapi.com/?i=tt3896198&apikey=5d0ce4f', true);
    
    apiRequest.onload = function (){
        var data = JSON.parse(this.response);
        
        function createContainers(movieCon,movieImage,trailer,movieDescription,movieTitle,movieYear,movieRating,age,genre,movieDuration,director){
            $(".movie-content").append();
            
            for(i = 0; i < data.movies.length; i++){
                movieCon = data.movies[i].movie.full_name;
                movieImage = data.movies[i].movie_img;
             trailer = data.movies[i].trailer;
                movieDescription = data.movies[i].movie_descrpt;
                movieTitle = data.movies[i].movie_title;
                movieRating = data.movies[i].movie_rating;
                age = data.movies[i].age;
               genre = data.movies[i].genre;
                movieDuration = data.movies[i].movie_dura;
               director = data.movies[i].direc;
                
                createContainers (movieCon,movieImage,trailer,movieDescription,movieTitle,movieYear,movieRating,age,genre,movieDuration,director)
            }
            
        }
    }
});