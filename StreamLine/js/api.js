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
console.log(loop);

  

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
      $(".movie-area").append("<div class='hide-now col-xs-12 col-md-4 col-lg-3'><div class='movie-holder'data-plot=" + moviePlot + " data-id=" + movieid + " data-title=" + movieTitle + " data-genre=" + movieGenre + " data-rating=" + movieRating + " data-votes=" + mvoieVotes + " data-year=" + movieYear + " data-language=" + movieLanguage + "><img class='movie-img effect1' src=" + movieImage + " data-id=" + movieid + "><h4>Title: " + movieTitle + "</h4><h5>Genre: " + movieGenre + "</h5><h5>Language: " +  movieLanguage + "</h5><h5>IMDb Rating: " +  movieRating + "</h5><div class='play'><div class='play-icon'></div></div><div class='plus'>ADD</div></div></div>");
   });

    

    $(".play").on("click", function () {
      $('#watch-modal').modal('show');

      $(".movie-area").append("<div class='col-xs-12 col-md-4 col-lg-3'><div class='movie-holder' data-id=" + movieid + " data-title=" + movieTitle + " data-genre=" + movieGenre + " data-rating=" + movieRating + " data-votes=" + mvoieVotes + " data-year=" + movieYear + " data-language=" + movieLanguage + "><img class='movie-img effect1' src=" + movieImage + "><h4>Title: " + movieTitle + "</h4><h5>Genre: " + movieGenre + "</h5><h5>Language: " +  movieLanguage + "</h5><h5>IMDb Rating: " +  movieRating + "</h5><div class='play'><div class='play-icon'></div></div><div class='plus'>ADD</div></div></div>");

    });

    $(".plus").on("click", function () {
      $('#added-modal').modal('show');
    });  



    $(".movie-img").on("click", function () {
      event.preventDefault();
      var storage = $(this).attr("data-id");

      

      console.log(storage);    

          var movieID = storage;
          var movieTitle = $(this).attr("data-title");
          var movieGenre = $(this).attr("data-genre");

          var imdbRating = $(this).attr("data-rating");
          var movieYear = $(this).attr("data-year");
          var movieRating = $(this).attr("data-votes");
          var moviePlot = $(this).attr("data-plot");
              
          localStorage.setItem("movieID", movieID);

          localStorage.setItem("movieTitle", movieTitle);
         
          localStorage.setItem("movieGenre", movieGenre);
          localStorage.setItem("imdbRating", imdbRating);
          localStorage.setItem("movieYear", movieYear);
          localStorage.setItem("movieRating", movieRating);
          localStorage.setItem("moviePlot", moviePlot);
          localStorage.setItem("movieLanguage", movieLanguage);
          localStorage.setItem("id", id);

    
      var movieName =  localStorage.getItem("movieID");
        console.log(movieName);
      $(location).attr('href', page); 
      
    });

    //  $(".movie-holder").on("click", function () {
    //   var testter = $(this).attr("data-id");

    //   console.log(testter)

    // });
    
  });
}

for (var i = 0; i < moviesArray.length; i++) {  
  
  console.log(moviesArray[i]);
  getData(moviesArray[i], i)
  
}











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
  
