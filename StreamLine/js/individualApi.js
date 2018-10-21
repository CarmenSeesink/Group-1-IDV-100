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
             trailer = data.movies[i].id;
                movieDescription = data.movies[i].id;
                movieTitle = data.movies[i].id;
                movieRating = data.movies[i].id;
                age = data.movies[i].id;
               genre = data.movies[i].id;
                movieDuration = data.movies[i].id;
               director = data.movies[i].id;
            }
            
            
            $(".movie-content-container").on("click", function(){
                var storageReference = +$(this).find("#movie-id").text();
                console.log(storageReference);
                
                for(i = 0; i < data.movies.length; i++){
                    
            });
            
            
        }
    }
    
    localStorage.
});