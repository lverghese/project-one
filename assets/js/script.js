const bookAPIKey = "j6Kh3WHlTmst7fqijtBiGQZe8BFyQjzc"
const movieApiKey = "9460c855"
var userTitleSearch = ""
var type = ""

var movieInputEl = document.querySelector("#movieName")


//function to get info from the book api




//function to get info from the movie api

var getMovie = function() {
    
    var movieUrl = "http://www.omdbapi.com/?apikey=" + movieApiKey + "&s=batman" ;

    fetch(movieUrl)
    .then(function(response) {
        //if response was successful
        if (response.ok) {
            console.log(response);
            response.json().then(function(data) {
                console.log(data);
            });
        } else {
            alert('Error: ' + response.statusText);
        }
      })
      .catch(function(error) {
          alert('Unable to connect to movie');
      });
    }

    getMovie();