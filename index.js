

function valid(callback){

    var user = document.getElementById("user").value;
    var pwd = document.getElementById("pwd").value;

    if(user === "admin"){

        console.log("valid");
        
        
        
        
        
    }
    else{
        console.log("invalid");
        
    }

     if(pwd === "12345" ){

        console.log("valid");
        callback();
        
        
    }
    else{
        console.log("invalid");
        
        

    }
    
    
}
function next(){

    
     location.href = "main.html";
    
    
}






