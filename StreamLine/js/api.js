//Requested movies array
var moviesArray = ["venom", "goosebumps+2", "first+man", "halloween", "johnny+English+Strikes+Again"];

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
      $(".poster-container").append("<div id=" + "con" + id + "><div class='movie-con' title=" + movieTitle + " genre=" + movieGenre + " rating=" + movieRating + " votes=" + mvoieVotes + " year=" + movieYear + " language=" + movieLanguage + " ><div class='poster'><div class='poster-overlay'><img src=" + movieImage + "></div></div></div></div>");
    });

  });
  

}

for (var i = 0; i < moviesArray.length; i++) {  
  
  console.log(moviesArray[i]);
  getData(moviesArray[i], i)
  
}



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
  
