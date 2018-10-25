 $(function () {
    var request = new XMLHttpRequest();

    // Open a new connection, using the GET request on the URL endpoint
    request.open('GET', 'https://omdbapi.com/?i=tt3896198&apikey=5d0c0e4f', true);
    
    request.send();
    
    request.onload = function(){
        var data = JSON.parse(this.response);
        
        var title = data.Title;
        var poster = data.Poster;
        var genre = data.Genre
        
            console.log(title);
            console.log(poster);
            console.log(genre);
        
        
        
        function create(){
            $(".poster-container").append("<div class='column-1'><div class='image-1'" + poster + "></div><p>" + title + "</p></div>");
            
        }
    }
});