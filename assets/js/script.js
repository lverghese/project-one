const bookAPIKey = "AIzaSyDcXOeyScItwcFMcUTf8T0ESWNi1x22kvU"
const movieAPIKey = "9460c855"
var userTitleSearch = ""
var type = ""

var movieInputEl = document.querySelector("#movieName")


//function to get info from the book api

var getBook = function() {
    
    var bookUrl = "https://www.googleapis.com/books/v1/volumes" + "?q=percy-jackson+and+the+lightning+thief" + "&api-key=" + bookAPIKey;

    fetch(bookUrl)
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


//function to get info from the movie api

var getMovie = function() {
    
    var movieUrl = "http://www.omdbapi.com/?apikey=" + movieAPIKey + "&t=batman+begins";

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
    getBook();