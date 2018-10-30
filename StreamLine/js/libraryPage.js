$(function(){
    
    
    $("#filter-submit").on("click", function(event){
        event.preventDefault();
        if($("#filter").val() === "all"){
            $(".movie-holder").show();
        }
        
    });
    
    if($("#filter").val() === "english"){
        $(".movie-holder").hide();
        $(".movie-holder").each(function(){
           if ($(this).data("category") === "English"){
               $(this).fadeIn();
           } 
        });
        
    if($("#filter").val() === "spanish"){
        $(".movie-holder").hide();
        $(".movie-holder").each(function(){
           if ($(this).data("category") === "Spanish"){
               $(this).fadeIn();
           } 
        });
        
       
    }
    
   
           

    
    
   





    
    
    
    
   
    
    
    
  });
    
    