//Requested movies array
var moviesArray = ["venom", "widows", "first+man", "halloween", "johnny+English+Strikes+Again", "pearl+harbor", "gladiator", "the+nun", "longest+yard", "a+star+is+born", "the+nutcracker+and+the+four+realms", "smallfoot" , "the+lion+king", "the+notebook", "step+brothers", "invictus"];
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

$(".movieVideo").hide();

var page = "individual.html"

function getData(item, loop){

  $.ajax({
    url: 'https://www.omdbapi.com/?t=' + encodeURI(item, loop) + '&apikey=5d0c0e4f',
    dataType: "json",
    async: true
  }).done(function(response) {

    movieImage = response.Poster;
    movieTitle = response.Title;
    movieGenre = response.Genre;
    movieRating = response.imdbRating;
    mvoieVotes = response.imdbVotes;
    movieYear = response.Year;
    moviePlot = response.Plot;
    movieLanguage = response.Language;
    movieid = response.imdbID;
    

    $(function() { 
      $(".movie-area").append("<div class='col-xs-12 col-md-4 col-lg-3'><div class='movie-holder' id=" + movieid + " title=" + movieTitle + " genre=" + movieGenre + " rating=" + movieRating + " votes=" + mvoieVotes + " year=" + movieYear + " language=" + movieLanguage + "><img class='movie-img effect1' src=" + movieImage + "><h4>Title: " + movieTitle + "</h4><h5>Genre: " + movieGenre + "</h5><h5>Language: " +  movieLanguage + "</h5><h5>IMDb Rating: " +  movieRating + "</h5><div class='play'><div class='play-icon'></div></div><div class='plus'>ADD</div></div></div>");
    });

    var variableOne = "55555555555";  
    localStorage.setItem("vOneLocalStorage", variableOne);

    $(".play").on("click", function () {
      $('#watch-modal').modal('show');
    });

  });
  

}

for (var i = 0; i < moviesArray.length; i++) {  
  
  console.log(moviesArray[i]);
  getData(moviesArray[i], i)
  
}


// $(".movie-holder").on("click", function () {
    //   event.preventDefault();
    //   var storage = +$(this).find(".id").text();
      
    
    //   console.log(storage);
       
    //   for(i = 0; i < moviesArray.length; i++){
    //     if(response.imdbID[i] === storage){

    //       var movieTitle = response[i].Poster;
    //       var movieImage = response[i].Title;
    //       var movieGenre = response[i].Genre;
    //       var imdbRating = response[i].imdbRating;
    //       var movieYear = response[i].imdbVotes;
    //       var movieRating = response[i].Year;
    //       var moviePlot = response[i].Plot;
    //       var movieLanguage = response[i].Language;
    //       var movieid = response[i].imdbID;
              
    //       localStorage.setItem("movieImage", movieImage);
    //       localStorage.setItem("movieTitle", movieTitle);
    //       localStorage.setItem("movieGenre", movieGenre);
    //       localStorage.setItem("imdbRating", imdbRating);
    //       localStorage.setItem("movieYear", movieYear);
    //       localStorage.setItem("movieRating", movieRating);
    //       localStorage.setItem("moviePlot", moviePlot);
    //       localStorage.setItem("movieLanguage", movieLanguage);
    //       localStorage.setItem("movieid", movieid);
          
          
          
    //     }
    //   }
    //   $(location).attr('href', page); 
    // });










// $(".movie-holder").on("click", function () {
//   var storage = +$(this).find(".poster").text();
//   console.log("test");

//   console.log(storage);

//   for(i = 0; i < moviesArray.length; i++){
//     if(imdbID === storage){
//       var movieTitle = response.Poster;
//       var movieImage = response.Title;
//       var movieGenre = response.Genre;
//       var imdbRating = response.imdbRating;
//       var movieYear = response.imdbVotes;
//       var movieRating = response.Year;
//       var moviePlot = response.Plot;
//       var movieLanguage = response.Language;
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

 

 //   function createContainers(cameraView, photoNumber, img_src, total_images){
  //     $(".rover-images").append("<div class='rover-image-container col-xs-3'><img src=" + img_src + "><h6 id='camera-name'><strong>Camera:</strong> " + cameraView + "</h6><h6><strong>Photo ID:</strong><span id='photo-id'>" + photoNumber + "</span></h6><h6 id='photo-number'>" +currentImages + " / " + total_images + "</h6><a href='curiosityIndividual.html'>Click to view</a></div>"); 
  //   }

  //   for (i = 0; i < data.length; i++){
        
  //     cameraName = data.Title;
  //     photoID = data.Year;
  //     imgSource = data.photos[i].img_src;
  //     currentImages = 1 + i;
  //     totalImages = data.photos[i].rover.total_images;

  //     createContainers(cameraName, photoID, imgSource, totalImages)
  // }

  //   var test = data.Title;

  //   console.log(test);
  // }

  //   $(".rover-image-container").on("click", function(){
  //     var storageRefrance = +$(this).find("#photo-id").text();
  //     console.log(storageRefrance);

  //     for(i = 0; i < data.photos.length; i++){
  //         if(data.photos[i].id === storageRefrance){
  //             var imageID = data.photos[i].id;
  //             var cameraName = data.photos[i].camera.full_name;
  //             var imageSource = data.photos[i].img_src;
  //             var totalImages = data.photos[i].rover.total_images;
  //             var landDate = data.photos[i].landing_date;
  //             var launchDate = data.photos[i].launch_date;
  //             var status = data.photos[i].status;
  //             var maxSol = data.photos[i].max_sol;

  //             localStorage.setItem("imageID", imageID);
  //             localStorage.setItem("cameraName", cameraName);
  //             localStorage.setItem("imageSource", imageSource);
  //             localStorage.setItem("totalImages", totalImages);
  //             localStorage.setItem("landDate", landDate);
  //             localStorage.setItem("launchDate", launchDate);
  //             localStorage.setItem("status", status);
  //             localStorage.setItem("maxSol", maxSol);
  //             localStorage.setItem("roverName", roverName);
  //         }
  //     }
  // });
  
