$(function() { 

    console.log("Test Login")
    $("#problem").hide();

    var libraryPage = "index.html"
    
    
    //Login Page 

    $(".login-btn").on("click", function(){
        event.preventDefault();
    
        var nameInput = document.getElementById("inputName").value
        var passwordInput = document.getElementById("inputPassword").value

        if(nameInput == "Metal"){
            if(passwordInput == "X"){
                $(location).attr('href', libraryPage);
                
            }
        }        

        if(nameInput == ""){
            $("#problem").show();
            $("#problem").text("Wow, that cool name isn't in our database sorry about that")
            
        }  
            
        if(passwordInput == ""){
            $("#problem").show();
            $("#problem").text("Unfortunately that password isn't in our awesome database")
            
        }  

        if(nameInput == ""){
            if(passwordInput == ""){
                $("#problem").show();
                $("#problem").text("We are sorry, but that awesome username and password isn't available")
                
            }
        } 
    
    });
    
});