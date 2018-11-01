$(function(){
    console.log("from Library js")
    
    $("#all").on("click", function(event){
            $(".hide-now").fadeIn();
        
    });
    
    
    $("#filter-submit").on("click", function(event){
        event.preventDefault();
        if($("#gen").val() === "romance"){
            $(".movie-holder").parent(".hide-now").hide();
            $(".movie-holder").each(function(){
                  if($(this).data("title") == "Pearl") {
                    $(this).parent(".hide-now").fadeIn();
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
            $(".movie-holder").parent(".hide-now").hide();
            $(".movie-holder").each(function(){
                if($(this).data("genre") == "Action,") {
                    $(this).parent(".hide-now").fadeIn();
                }
            });
            
        }
        
         if($("#gen").val() === "animation"){
            $(".movie-holder").parent(".hide-now").hide();
            $(".movie-holder").each(function(){
                if($(this).data("genre") == "Animation,") {
                    $(this).parent(".hide-now").fadeIn();
                }
            });
            
        }
        
         if($("#gen").val() === "horror"){
            $(".movie-holder").parent(".hide-now").hide();
            $(".movie-holder").each(function(){
                if($(this).data("genre") == "Horror,") {
                    $(this).parent(".hide-now").show();
                }
            });
            
        }
        
          if($("#gen").val() === "comedy"){
            $(".movie-holder").parent(".hide-now").hide();
            $(".movie-holder").each(function(){
                if($(this).data("genre") == "Comedy,") {
                    $(this).parent(".hide-now").show();
                }
            });
            
        }
                
          if($("#gen").val() === "drama"){
            $(".movie-holder").parent(".hide-now").hide();
            $(".movie-holder").each(function(){
                if($(this).data("genre") == "Drama,") {
                    $(this).parent(".hide-now").show();
                }
            });
            
        }
        
          if($("#gen").val() === "triller"){
            $(".movie-holder").parent(".hide-now").hide();
            $(".movie-holder").each(function(){
                if($(this).data("genre") == "Thriller,") {
                    $(this).parent(".hide-now").show();
                }
            });
            
        }
        
         if($("#lang").val() === "english"){
            $(".movie-holder").parent(".hide-now").hide();
            $(".movie-holder").each(function(){
                if($(this).data("language") === "English") {
                    $(this).parent(".hide-now").fadeIn();
                }
                
            });
        }
        
        if($("#lang").val() === "french"){
            $(".movie-holder").parent(".hide-now").hide();
            $(".movie-holder").each(function(){
                if($(this).data("title") == "Pearl") {
                    $(this).parent(".hide-now").fadeIn();
                }
                if($(this).data("rating") == "5.7") {
                    $(this).parent(".hide-now").fadeIn();
                }
            });
            
        }
        
        if($("#lang").val() === "xhosa"){
            $(".movie-holder").parent(".hide-now").hide();
            $(".movie-holder").each(function(){
                if($(this).data("title") == "Invictus") {
                    $(this).parent(".hide-now").fadeIn();
                }
                if($(this).data("year") == "1994") {
                    $(this).parent(".hide-now").fadeIn();
                }
            });
            
        }
        
        if($("#lang").val() === "japanese"){
            $(".movie-holder").parent(".hide-now").hide();
            $(".movie-holder").each(function(){
                if($(this).data("title") == "Pearl") {
                    $(this).parent(".hide-now").fadeIn();
                }
            });
            
        }
        
        if($("#lang").val() === "spanish"){
            $(".movie-holder").parent(".hide-now").hide();
            $(".movie-holder").each(function(){
                if($(this).data("title") == "Step") {
                    $(this).parent(".hide-now").fadeIn();
                }
            });
            
        }
         
        if($("#rating").val() === "5-6.5"){
            $(".movie-holder").parent(".hide-now").hide();
            $(".movie-holder").each(function(){
                if($(this).data("rating") == "5.7") {
                    $(this).parent(".hide-now").fadeIn();
                }
                if($(this).data("rating") == "6.1") {
                    $(this).parent(".hide-now").fadeIn();
                }
                if($(this).data("rating") == "6.4") {
                    $(this).parent(".hide-now").fadeIn();
                }
            });
            
        }
        
        if($("#rating").val() === "6.5-7"){
            $(".movie-holder").parent(".hide-now").hide();
            $(".movie-holder").each(function(){
                if($(this).data("rating") == "6.6") {
                    $(this).parent(".hide-now").fadeIn();
                }
                if($(this).data("rating") == "6.8") {
                    $(this).parent(".hide-now").fadeIn();
                }
                if($(this).data("rating") == "6.9") {
                    $(this).parent(".hide-now").fadeIn();
                }
            });
            
        }
        
        if($("#rating").val() === "7.5-8"){
            $(".movie-holder").parent(".hide-now").hide();
            $(".movie-holder").each(function(){
                if($(this).data("rating") == "7.1") {
                    $(this).parent(".hide-now").fadeIn();
                }
                if($(this).data("rating") == "7.3") {
                    $(this).parent(".hide-now").fadeIn();
                }
                if($(this).data("rating") == "7.7") {
                    $(this).parent(".hide-now").fadeIn();
                }
                 if($(this).data("rating") == "7.9") {
                    $(this).parent(".hide-now").fadeIn();
                }
            });
            
        }
        
         if($("#rating").val() === "8.5-9"){
            $(".movie-holder").parent(".hide-now").hide();
            $(".movie-holder").each(function(){
                if($(this).data("rating") == "8.5") {
                    $(this).parent(".hide-now").fadeIn();
                }
                if($(this).data("rating") == "8.4") {
                    $(this).parent(".hide-now").fadeIn();
               
                }
            });
            
        }
        
         if($("#user").val() === "1"){
            $(".movie-holder").parent(".hide-now").hide();
            $(".movie-holder").each(function(){
                if($(this).data("title") == "First") {
                    $(this).parent(".hide-now").fadeIn();
                }
                if($(this).data("title") == "Halloween") {
                    $(this).parent(".hide-now").fadeIn();
                }
                if($(this).data("title") == "Johnny") {
                    $(this).parent(".hide-now").fadeIn();
                }
                
            });
            
        }
        
        if($("#user").val() === "2"){
            $(".movie-holder").parent(".hide-now").hide();
            $(".movie-holder").each(function(){
                if($(this).data("title") == "The") {
                    $(this).parent(".hide-now").fadeIn();
                }
                if($(this).data("title") == "Smallfoot") {
                    $(this).parent(".hide-now").fadeIn();
                }
                if($(this).data("title") == "Invictus") {
                    $(this).parent(".hide-now").fadeIn();
                }
                
            });
            
        }
         
        if($("#user").val() === "3"){
            $(".movie-holder").parent(".hide-now").hide();
            $(".movie-holder").each(function(){
                if($(this).data("title") == "Widows") {
                    $(this).parent(".hide-now").fadeIn();
                }
                if($(this).data("title") == "Venom") {
                    $(this).parent(".hide-now").fadeIn();
                }
               
            });
            
        }
         
        if($("#user").val() === "4"){
            $(".movie-holder").parent(".hide-now").hide();
            $(".movie-holder").each(function(){
                if($(this).data("title") == "Pearl") {
                    $(this).parent(".hide-now").fadeIn();
                }
                if($(this).data("title") == "A") {
                    $(this).parent(".hide-now").fadeIn();
                }
                
            });
            
        }
        
        if($("#user").val() === "5"){
            $(".movie-holder").parent(".hide-now").hide();
            $(".movie-holder").each(function(){
                if($(this).data("title") == "Gladiator") {
                    $(this).parent(".hide-now").fadeIn();
                }
                
            });
            
        }
        
         if($("#year").val() === "2000"){
            $(".movie-holder").parent(".hide-now").hide();
            $(".movie-holder").each(function(){
                if($(this).data("year") == "1978") {
                    $(this).parent(".hide-now").fadeIn();
                }
                if($(this).data("year") == "1994") {
                    $(this).parent(".hide-now").fadeIn();
                }
                if($(this).data("year") == "2000") {
                    $(this).parent(".hide-now").fadeIn();
                }
                
            });
            
        }
        
        if($("#year").val() === "2005"){
            $(".movie-holder").parent(".hide-now").hide();
            $(".movie-holder").each(function(){
                if($(this).data("year") == "2000") {
                    $(this).parent(".hide-now").fadeIn();
                }
                if($(this).data("year") == "2001") {
                    $(this).parent(".hide-now").fadeIn();
                }
                if($(this).data("year") == "2004") {
                    $(this).parent(".hide-now").fadeIn();
                }
                 if($(this).data("year") == "2005") {
                    $(this).parent(".hide-now").fadeIn();
                }
                
            });
            
        }
         
         
        if($("#year").val() === "2010"){
            $(".movie-holder").parent(".hide-now").hide();
            $(".movie-holder").each(function(){
                if($(this).data("year") == "2005") {
                    $(this).parent(".hide-now").fadeIn();
                }
                if($(this).data("year") == "2008") {
                    $(this).parent(".hide-now").fadeIn();
                }
                if($(this).data("year") == "2009") {
                    $(this).parent(".hide-now").fadeIn();
                }
            
            });
            
        }
         
        if($("#year").val() === "2018"){
            $(".movie-holder").parent(".hide-now").hide();
            $(".movie-holder").each(function(){
                if($(this).data("year") == "2018") {
                    $(this).parent(".hide-now").fadeIn();
                }
            
            });
            
        }
       
         
             
    });
    
       
    $("#all1").on("click", function(event){
            $(".hide-now").fadeIn();
        
    });
    
    
    $("#filter-submit1").on("click", function(event){
        event.preventDefault();
        if($("#gen1").val() === "romance"){
            $(".movie-holder").parent(".hide-now").hide();
            $(".movie-holder").each(function(){
                if($(this).data("title") == "Pearl") {
                    $(this).parent(".hide-now").fadeIn();
                }
                if($(this).data("title") == "A") {
                    $(this).parent(".hide-now").fadeIn();
                }
                if($(this).data("rating") == "7.9") {
                    $(this).parent(".hide-now").fadeIn();
                }
            });
            
        }
        
         if($("#gen1").val() === "action"){
            $(".movie-holder").parent(".hide-now").hide();
            $(".movie-holder").each(function(){
                if($(this).data("genre") == "Action,") {
                    $(this).parent(".hide-now").fadeIn();
                }
            });
            
        }
        
         if($("#gen1").val() === "animation"){
            $(".movie-holder").parent(".hide-now").hide();
            $(".movie-holder").each(function(){
                if($(this).data("genre") == "Animation,") {
                    $(this).parent(".hide-now").fadeIn();
                }
            });
            
        }
        
         if($("#gen1").val() === "horror"){
            $(".movie-holder").parent(".hide-now").hide();
            $(".movie-holder").each(function(){
                if($(this).data("genre") == "Horror,") {
                    $(this).parent(".hide-now").show();
                }
            });
            
        }
        
          if($("#gen1").val() === "comedy"){
            $(".movie-holder").parent(".hide-now").hide();
            $(".movie-holder").each(function(){
                if($(this).data("genre") == "Comedy,") {
                    $(this).parent(".hide-now").show();
                }
            });
            
        }
                
          if($("#gen1").val() === "drama"){
            $(".movie-holder").parent(".hide-now").hide();
            $(".movie-holder").each(function(){
                if($(this).data("genre") == "Drama,") {
                    $(this).parent(".hide-now").show();
                }
            });
            
        }
        
          if($("#gen1").val() === "triller"){
            $(".movie-holder").parent(".hide-now").hide();
            $(".movie-holder").each(function(){
                if($(this).data("genre") == "Thriller,") {
                    $(this).parent(".hide-now").show();
                }
            });
            
        }
        
         if($("#lang1").val() === "english"){
            $(".movie-holder").parent(".hide-now").hide();
            $(".movie-holder").each(function(){
                if($(this).data("language") === "English") {
                    $(this).parent(".hide-now").fadeIn();
                }
                
            });
        }
        
        if($("#lang1").val() === "french"){
            $(".movie-holder").parent(".hide-now").hide();
            $(".movie-holder").each(function(){
                if($(this).data("title") == "Pearl") {
                    $(this).parent(".hide-now").fadeIn();
                }
                if($(this).data("rating") == "5.7") {
                    $(this).parent(".hide-now").fadeIn();
                }
            });
            
        }
        
        if($("#lang1").val() === "xhosa"){
            $(".movie-holder").parent(".hide-now").hide();
            $(".movie-holder").each(function(){
                if($(this).data("title") == "Invictus") {
                    $(this).parent(".hide-now").fadeIn();
                }
                if($(this).data("year") == "1994") {
                    $(this).parent(".hide-now").fadeIn();
                }
            });
            
        }
        
        if($("#lang1").val() === "japanese"){
            $(".movie-holder").parent(".hide-now").hide();
            $(".movie-holder").each(function(){
                if($(this).data("title") == "Pearl") {
                    $(this).parent(".hide-now").fadeIn();
                }
            });
            
        }
        
        if($("#lang1").val() === "spanish"){
            $(".movie-holder").parent(".hide-now").hide();
            $(".movie-holder").each(function(){
                if($(this).data("title") == "Step") {
                    $(this).parent(".hide-now").fadeIn();
                }
            });
            
        }
         
        if($("#rating1").val() === "5-6.5"){
            $(".movie-holder").parent(".hide-now").hide();
            $(".movie-holder").each(function(){
                if($(this).data("rating") == "5.7") {
                    $(this).parent(".hide-now").fadeIn();
                }
                if($(this).data("rating") == "6.1") {
                    $(this).parent(".hide-now").fadeIn();
                }
                if($(this).data("rating") == "6.4") {
                    $(this).parent(".hide-now").fadeIn();
                }
            });
            
        }
        
        if($("#rating1").val() === "6.5-7"){
            $(".movie-holder").parent(".hide-now").hide();
            $(".movie-holder").each(function(){
                if($(this).data("rating") == "6.6") {
                    $(this).parent(".hide-now").fadeIn();
                }
                if($(this).data("rating") == "6.8") {
                    $(this).parent(".hide-now").fadeIn();
                }
                if($(this).data("rating") == "6.9") {
                    $(this).parent(".hide-now").fadeIn();
                }
            });
            
        }
        
        if($("#rating1").val() === "7.5-8"){
            $(".movie-holder").parent(".hide-now").hide();
            $(".movie-holder").each(function(){
                if($(this).data("rating") == "7.1") {
                    $(this).parent(".hide-now").fadeIn();
                }
                if($(this).data("rating") == "7.3") {
                    $(this).parent(".hide-now").fadeIn();
                }
                if($(this).data("rating") == "7.7") {
                    $(this).parent(".hide-now").fadeIn();
                }
                 if($(this).data("rating") == "7.9") {
                    $(this).parent(".hide-now").fadeIn();
                }
            });
            
        }
        
         if($("#rating1").val() === "8.5-9"){
            $(".movie-holder").parent(".hide-now").hide();
            $(".movie-holder").each(function(){
                if($(this).data("rating") == "8.5") {
                    $(this).parent(".hide-now").fadeIn();
                }
                if($(this).data("rating") == "8.4") {
                    $(this).parent(".hide-now").fadeIn();
               
                }
            });
            
        }
        
         if($("#user1").val() === "1"){
            $(".movie-holder").parent(".hide-now").hide();
            $(".movie-holder").each(function(){
                if($(this).data("title") == "First") {
                    $(this).parent(".hide-now").fadeIn();
                }
                if($(this).data("title") == "Halloween") {
                    $(this).parent(".hide-now").fadeIn();
                }
                if($(this).data("title") == "Johnny") {
                    $(this).parent(".hide-now").fadeIn();
                }
                
            });
            
        }
        
        if($("#user1").val() === "2"){
            $(".movie-holder").parent(".hide-now").hide();
            $(".movie-holder").each(function(){
                if($(this).data("title") == "The") {
                    $(this).parent(".hide-now").fadeIn();
                }
                if($(this).data("title") == "Smallfoot") {
                    $(this).parent(".hide-now").fadeIn();
                }
                if($(this).data("title") == "Invictus") {
                    $(this).parent(".hide-now").fadeIn();
                }
                
            });
            
        }
         
        if($("#user1").val() === "3"){
            $(".movie-holder").parent(".hide-now").hide();
            $(".movie-holder").each(function(){
                if($(this).data("title") == "Widows") {
                    $(this).parent(".hide-now").fadeIn();
                }
                if($(this).data("title") == "Venom") {
                    $(this).parent(".hide-now").fadeIn();
                }
               
            });
            
        }
         
        if($("#user1").val() === "4"){
            $(".movie-holder").parent(".hide-now").hide();
            $(".movie-holder").each(function(){
                if($(this).data("title") == "Pearl") {
                    $(this).parent(".hide-now").fadeIn();
                }
                if($(this).data("title") == "A") {
                    $(this).parent(".hide-now").fadeIn();
                }
                
            });
            
        }
        
        if($("#user1").val() === "5"){
            $(".movie-holder").parent(".hide-now").hide();
            $(".movie-holder").each(function(){
                if($(this).data("title") == "Gladiator") {
                    $(this).parent(".hide-now").fadeIn();
                }
                
            });
            
        }
        
         if($("#year1").val() === "2000"){
            $(".movie-holder").parent(".hide-now").hide();
            $(".movie-holder").each(function(){
                if($(this).data("year") == "1978") {
                    $(this).parent(".hide-now").fadeIn();
                }
                if($(this).data("year") == "1994") {
                    $(this).parent(".hide-now").fadeIn();
                }
                if($(this).data("year") == "2000") {
                    $(this).parent(".hide-now").fadeIn();
                }
                
            });
            
        }
        
        if($("#year1").val() === "2005"){
            $(".movie-holder").parent(".hide-now").hide();
            $(".movie-holder").each(function(){
                if($(this).data("year") == "2000") {
                    $(this).parent(".hide-now").fadeIn();
                }
                if($(this).data("year") == "2001") {
                    $(this).parent(".hide-now").fadeIn();
                }
                if($(this).data("year") == "2004") {
                    $(this).parent(".hide-now").fadeIn();
                }
                 if($(this).data("year") == "2005") {
                    $(this).parent(".hide-now").fadeIn();
                }
                
            });
            
        }
         
         
        if($("#year1").val() === "2010"){
            $(".movie-holder").parent(".hide-now").hide();
            $(".movie-holder").each(function(){
                if($(this).data("year") == "2005") {
                    $(this).parent(".hide-now").fadeIn();
                }
                if($(this).data("year") == "2008") {
                    $(this).parent(".hide-now").fadeIn();
                }
                if($(this).data("year") == "2009") {
                    $(this).parent(".hide-now").fadeIn();
                }
            
            });
            
        }
         
        if($("#year1").val() === "2018"){
            $(".movie-holder").parent(".hide-now").hide();
            $(".movie-holder").each(function(){
                if($(this).data("year") == "2018") {
                    $(this).parent(".hide-now").fadeIn();
                }
            
            });
            
        }
       
         
             
    });
    
    
    
    
});
   