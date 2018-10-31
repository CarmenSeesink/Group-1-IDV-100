<<<<<<< Updated upstream

=======
$(function(){
    console.log("from Library js")
    
    $("#all").on("click", function(event){
            $(".movie-holder").fadeIn();
        
    });
    
    
    $("#filter-submit").on("click", function(event){
        event.preventDefault();
        if($("#gen").val() === "romance"){
            $(".movie-holder").hide();
            $(".movie-holder").each(function(){
                  if($(this).data("title") == "Pearl") {
                    $(this).fadeIn();
                }
                if($(this).data("title") == "A") {
                    $(this).fadeIn();
                }
                if($(this).data("rating") == "7.9") {
                    $(this).fadeIn();
                }
            });
            
        }
        
         if($("#gen").val() === "action"){
            $(".movie-holder").hide();
            $(".movie-holder").each(function(){
                if($(this).data("genre") == "Action,") {
                    $(this).fadeIn();
                }
            });
            
        }
        
         if($("#gen").val() === "animation"){
            $(".movie-holder").hide();
            $(".movie-holder").each(function(){
                if($(this).data("genre") == "Animation,") {
                    $(this).fadeIn();
                }
            });
            
        }
        
         if($("#gen").val() === "horror"){
            $(".movie-holder").hide();
            $(".movie-holder").each(function(){
                if($(this).data("genre") == "Horror,") {
                    $(this).show();
                }
            });
            
        }
        
          if($("#gen").val() === "comedy"){
            $(".movie-holder").hide();
            $(".movie-holder").each(function(){
                if($(this).data("genre") == "Comedy,") {
                    $(this).show();
                }
            });
            
        }
                
          if($("#gen").val() === "drama"){
            $(".movie-holder").hide();
            $(".movie-holder").each(function(){
                if($(this).data("genre") == "Drama,") {
                    $(this).show();
                }
            });
            
        }
        
          if($("#gen").val() === "triller"){
            $(".movie-holder").hide();
            $(".movie-holder").each(function(){
                if($(this).data("genre") == "Thriller,") {
                    $(this).show();
                }
            });
            
        }
        
         if($("#lang").val() === "english"){
            $(".movie-holder").hide();
            $(".movie-holder").each(function(){
                if($(this).data("language") === "English") {
                    $(this).fadeIn();
                }
                
            });
        }
        
        if($("#lang").val() === "french"){
            $(".movie-holder").hide();
            $(".movie-holder").each(function(){
                if($(this).data("title") == "Pearl") {
                    $(this).fadeIn();
                }
                if($(this).data("rating") == "5.7") {
                    $(this).fadeIn();
                }
            });
            
        }
        
        if($("#lang").val() === "xhosa"){
            $(".movie-holder").hide();
            $(".movie-holder").each(function(){
                if($(this).data("title") == "Invictus") {
                    $(this).fadeIn();
                }
                if($(this).data("year") == "1994") {
                    $(this).fadeIn();
                }
            });
            
        }
        
        if($("#lang").val() === "japanese"){
            $(".movie-holder").hide();
            $(".movie-holder").each(function(){
                if($(this).data("title") == "Pearl") {
                    $(this).fadeIn();
                }
            });
            
        }
        
        if($("#lang").val() === "spanish"){
            $(".movie-holder").hide();
            $(".movie-holder").each(function(){
                if($(this).data("title") == "Step") {
                    $(this).fadeIn();
                }
            });
            
        }
         
        if($("#rating").val() === "5-6.5"){
            $(".movie-holder").hide();
            $(".movie-holder").each(function(){
                if($(this).data("rating") == "5.7") {
                    $(this).fadeIn();
                }
                if($(this).data("rating") == "6.1") {
                    $(this).fadeIn();
                }
                if($(this).data("rating") == "6.4") {
                    $(this).fadeIn();
                }
            });
            
        }
        
        if($("#rating").val() === "6.5-7"){
            $(".movie-holder").hide();
            $(".movie-holder").each(function(){
                if($(this).data("rating") == "6.6") {
                    $(this).fadeIn();
                }
                if($(this).data("rating") == "6.8") {
                    $(this).fadeIn();
                }
                if($(this).data("rating") == "6.9") {
                    $(this).fadeIn();
                }
            });
            
        }
        
        if($("#rating").val() === "7.5-8"){
            $(".movie-holder").hide();
            $(".movie-holder").each(function(){
                if($(this).data("rating") == "7.1") {
                    $(this).fadeIn();
                }
                if($(this).data("rating") == "7.3") {
                    $(this).fadeIn();
                }
                if($(this).data("rating") == "7.7") {
                    $(this).fadeIn();
                }
                 if($(this).data("rating") == "7.9") {
                    $(this).fadeIn();
                }
            });
            
        }
        
         if($("#rating").val() === "8.5-9"){
            $(".movie-holder").hide();
            $(".movie-holder").each(function(){
                if($(this).data("rating") == "8.5") {
                    $(this).fadeIn();
                }
                if($(this).data("rating") == "8.4") {
                    $(this).fadeIn();
               
                }
            });
            
        }
        
         if($("#user").val() === "1"){
            $(".movie-holder").hide();
            $(".movie-holder").each(function(){
                if($(this).data("title") == "First") {
                    $(this).fadeIn();
                }
                if($(this).data("title") == "Halloween") {
                    $(this).fadeIn();
                }
                if($(this).data("title") == "Johnny") {
                    $(this).fadeIn();
                }
                
            });
            
        }
        
        if($("#user").val() === "2"){
            $(".movie-holder").hide();
            $(".movie-holder").each(function(){
                if($(this).data("title") == "The") {
                    $(this).fadeIn();
                }
                if($(this).data("title") == "Smallfoot") {
                    $(this).fadeIn();
                }
                if($(this).data("title") == "Invictus") {
                    $(this).fadeIn();
                }
                
            });
            
        }
         
        if($("#user").val() === "3"){
            $(".movie-holder").hide();
            $(".movie-holder").each(function(){
                if($(this).data("title") == "Widows") {
                    $(this).fadeIn();
                }
                if($(this).data("title") == "Venom") {
                    $(this).fadeIn();
                }
               
            });
            
        }
         
        if($("#user").val() === "4"){
            $(".movie-holder").hide();
            $(".movie-holder").each(function(){
                if($(this).data("title") == "Pearl") {
                    $(this).fadeIn();
                }
                if($(this).data("title") == "A") {
                    $(this).fadeIn();
                }
                
            });
            
        }
        
        if($("#user").val() === "5"){
            $(".movie-holder").hide();
            $(".movie-holder").each(function(){
                if($(this).data("title") == "Gladiator") {
                    $(this).fadeIn();
                }
                
            });
            
        }
        
         if($("#year").val() === "2000"){
            $(".movie-holder").hide();
            $(".movie-holder").each(function(){
                if($(this).data("year") == "1978") {
                    $(this).fadeIn();
                }
                if($(this).data("year") == "1994") {
                    $(this).fadeIn();
                }
                if($(this).data("year") == "2000") {
                    $(this).fadeIn();
                }
                
            });
            
        }
        
        if($("#year").val() === "2005"){
            $(".movie-holder").hide();
            $(".movie-holder").each(function(){
                if($(this).data("year") == "2000") {
                    $(this).fadeIn();
                }
                if($(this).data("year") == "2001") {
                    $(this).fadeIn();
                }
                if($(this).data("year") == "2004") {
                    $(this).fadeIn();
                }
                 if($(this).data("year") == "2005") {
                    $(this).fadeIn();
                }
                
            });
            
        }
         
         
        if($("#year").val() === "2010"){
            $(".movie-holder").hide();
            $(".movie-holder").each(function(){
                if($(this).data("year") == "2005") {
                    $(this).fadeIn();
                }
                if($(this).data("year") == "2008") {
                    $(this).fadeIn();
                }
                if($(this).data("year") == "2009") {
                    $(this).fadeIn();
                }
            
            });
            
        }
         
        if($("#year").val() === "2018"){
            $(".movie-holder").hide();
            $(".movie-holder").each(function(){
                if($(this).data("year") == "2018") {
                    $(this).fadeIn();
                }
            
            });
            
        }
       
         
             
    });
    
       
    $("#all1").on("click", function(event){
            $(".movie-holder").fadeIn();
        
    });
    
    
    $("#filter-submit1").on("click", function(event){
        event.preventDefault();
        if($("#gen1").val() === "romance"){
            $(".movie-holder").hide();
            $(".movie-holder").each(function(){
                if($(this).data("title") == "Pearl") {
                    $(this).fadeIn();
                }
                if($(this).data("title") == "A") {
                    $(this).fadeIn();
                }
                if($(this).data("rating") == "7.9") {
                    $(this).fadeIn();
                }
            });
            
        }
        
         if($("#gen1").val() === "action"){
            $(".movie-holder").hide();
            $(".movie-holder").each(function(){
                if($(this).data("genre") == "Action,") {
                    $(this).fadeIn();
                }
            });
            
        }
        
         if($("#gen1").val() === "animation"){
            $(".movie-holder").hide();
            $(".movie-holder").each(function(){
                if($(this).data("genre") == "Animation,") {
                    $(this).fadeIn();
                }
            });
            
        }
        
         if($("#gen1").val() === "horror"){
            $(".movie-holder").hide();
            $(".movie-holder").each(function(){
                if($(this).data("genre") == "Horror,") {
                    $(this).show();
                }
            });
            
        }
        
          if($("#gen1").val() === "comedy"){
            $(".movie-holder").hide();
            $(".movie-holder").each(function(){
                if($(this).data("genre") == "Comedy,") {
                    $(this).show();
                }
            });
            
        }
                
          if($("#gen1").val() === "drama"){
            $(".movie-holder").hide();
            $(".movie-holder").each(function(){
                if($(this).data("genre") == "Drama,") {
                    $(this).show();
                }
            });
            
        }
        
          if($("#gen1").val() === "triller"){
            $(".movie-holder").hide();
            $(".movie-holder").each(function(){
                if($(this).data("genre") == "Thriller,") {
                    $(this).show();
                }
            });
            
        }
        
         if($("#lang1").val() === "english"){
            $(".movie-holder").hide();
            $(".movie-holder").each(function(){
                if($(this).data("language") === "English") {
                    $(this).fadeIn();
                }
                
            });
        }
        
        if($("#lang1").val() === "french"){
            $(".movie-holder").hide();
            $(".movie-holder").each(function(){
                if($(this).data("title") == "Pearl") {
                    $(this).fadeIn();
                }
                if($(this).data("rating") == "5.7") {
                    $(this).fadeIn();
                }
            });
            
        }
        
        if($("#lang1").val() === "xhosa"){
            $(".movie-holder").hide();
            $(".movie-holder").each(function(){
                if($(this).data("title") == "Invictus") {
                    $(this).fadeIn();
                }
                if($(this).data("year") == "1994") {
                    $(this).fadeIn();
                }
            });
            
        }
        
        if($("#lang1").val() === "japanese"){
            $(".movie-holder").hide();
            $(".movie-holder").each(function(){
                if($(this).data("title") == "Pearl") {
                    $(this).fadeIn();
                }
            });
            
        }
        
        if($("#lang1").val() === "spanish"){
            $(".movie-holder").hide();
            $(".movie-holder").each(function(){
                if($(this).data("title") == "Step") {
                    $(this).fadeIn();
                }
            });
            
        }
         
        if($("#rating1").val() === "5-6.5"){
            $(".movie-holder").hide();
            $(".movie-holder").each(function(){
                if($(this).data("rating") == "5.7") {
                    $(this).fadeIn();
                }
                if($(this).data("rating") == "6.1") {
                    $(this).fadeIn();
                }
                if($(this).data("rating") == "6.4") {
                    $(this).fadeIn();
                }
            });
            
        }
        
        if($("#rating1").val() === "6.5-7"){
            $(".movie-holder").hide();
            $(".movie-holder").each(function(){
                if($(this).data("rating") == "6.6") {
                    $(this).fadeIn();
                }
                if($(this).data("rating") == "6.8") {
                    $(this).fadeIn();
                }
                if($(this).data("rating") == "6.9") {
                    $(this).fadeIn();
                }
            });
            
        }
        
        if($("#rating1").val() === "7.5-8"){
            $(".movie-holder").hide();
            $(".movie-holder").each(function(){
                if($(this).data("rating") == "7.1") {
                    $(this).fadeIn();
                }
                if($(this).data("rating") == "7.3") {
                    $(this).fadeIn();
                }
                if($(this).data("rating") == "7.7") {
                    $(this).fadeIn();
                }
                 if($(this).data("rating") == "7.9") {
                    $(this).fadeIn();
                }
            });
            
        }
        
         if($("#rating1").val() === "8.5-9"){
            $(".movie-holder").hide();
            $(".movie-holder").each(function(){
                if($(this).data("rating") == "8.5") {
                    $(this).fadeIn();
                }
                if($(this).data("rating") == "8.4") {
                    $(this).fadeIn();
               
                }
            });
            
        }
        
         if($("#user1").val() === "1"){
            $(".movie-holder").hide();
            $(".movie-holder").each(function(){
                if($(this).data("title") == "First") {
                    $(this).fadeIn();
                }
                if($(this).data("title") == "Halloween") {
                    $(this).fadeIn();
                }
                if($(this).data("title") == "Johnny") {
                    $(this).fadeIn();
                }
                
            });
            
        }
        
        if($("#user1").val() === "2"){
            $(".movie-holder").hide();
            $(".movie-holder").each(function(){
                if($(this).data("title") == "The") {
                    $(this).fadeIn();
                }
                if($(this).data("title") == "Smallfoot") {
                    $(this).fadeIn();
                }
                if($(this).data("title") == "Invictus") {
                    $(this).fadeIn();
                }
                
            });
            
        }
         
        if($("#user1").val() === "3"){
            $(".movie-holder").hide();
            $(".movie-holder").each(function(){
                if($(this).data("title") == "Widows") {
                    $(this).fadeIn();
                }
                if($(this).data("title") == "Venom") {
                    $(this).fadeIn();
                }
               
            });
            
        }
         
        if($("#user1").val() === "4"){
            $(".movie-holder").hide();
            $(".movie-holder").each(function(){
                if($(this).data("title") == "Pearl") {
                    $(this).fadeIn();
                }
                if($(this).data("title") == "A") {
                    $(this).fadeIn();
                }
                
            });
            
        }
        
        if($("#user1").val() === "5"){
            $(".movie-holder").hide();
            $(".movie-holder").each(function(){
                if($(this).data("title") == "Gladiator") {
                    $(this).fadeIn();
                }
                
            });
            
        }
        
         if($("#year1").val() === "2000"){
            $(".movie-holder").hide();
            $(".movie-holder").each(function(){
                if($(this).data("year") == "1978") {
                    $(this).fadeIn();
                }
                if($(this).data("year") == "1994") {
                    $(this).fadeIn();
                }
                if($(this).data("year") == "2000") {
                    $(this).fadeIn();
                }
                
            });
            
        }
        
        if($("#year1").val() === "2005"){
            $(".movie-holder").hide();
            $(".movie-holder").each(function(){
                if($(this).data("year") == "2000") {
                    $(this).fadeIn();
                }
                if($(this).data("year") == "2001") {
                    $(this).fadeIn();
                }
                if($(this).data("year") == "2004") {
                    $(this).fadeIn();
                }
                 if($(this).data("year") == "2005") {
                    $(this).fadeIn();
                }
                
            });
            
        }
         
         
        if($("#year1").val() === "2010"){
            $(".movie-holder").hide();
            $(".movie-holder").each(function(){
                if($(this).data("year") == "2005") {
                    $(this).fadeIn();
                }
                if($(this).data("year") == "2008") {
                    $(this).fadeIn();
                }
                if($(this).data("year") == "2009") {
                    $(this).fadeIn();
                }
            
            });
            
        }
         
        if($("#year1").val() === "2018"){
            $(".movie-holder").hide();
            $(".movie-holder").each(function(){
                if($(this).data("year") == "2018") {
                    $(this).fadeIn();
                }
            
            });
            
        }
       
         
             
    });
    
    
    
    
});
   
           

    
    
   





    
    
    
    
   
    
    
    

    
    
>>>>>>> Stashed changes
