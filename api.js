

    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function(){
    
        if(this.readyState == 4 & this.status == 200){
    
            var response = JSON.parse(this.response);
            var output ="";
            for(var i=0; i<response.length; i++){
                output += "<li type= none><input type= checkbox >   "+ response[i].title +" </input></li>"
            }
            document.getElementById("para1").innerHTML = output;

            
            
        }
    }
    
    
    
    
    
    xhttp.open("GET","https://jsonplaceholder.typicode.com/todos","true");
    xhttp.send();
















// var xhttp = new XMLHttpRequest();

// xhttp.onreadystatechange = function(){

//     if(this.readyState == 4 & this.status == 200){

//         var response = JSON.parse(this.response);
//         var output ="";
//         for(var i=0; i<response.length; i++){
//             output += "<li type= none><input type= checkbox >    "+ response[i].title +" </input></li>"
//         }
//         document.getElementById("para1").innerHTML = output;
//     }
// }





// xhttp.open("GET","https://jsonplaceholder.typicode.com/todos","true");
// xhttp.send();