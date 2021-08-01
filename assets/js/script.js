const bookAPIKey = "AIzaSyDcXOeyScItwcFMcUTf8T0ESWNi1x22kvU"
const movieAPIKey = "9460c855"

var movieInputEl = document.getElementById("movieSearch");
var releaseYear = document.getElementById("releaseYear");
var movieRating = document.getElementById("movieRating");
var boxOffice = document.getElementById("boxOffice");
var smallPlot = document.getElementById("smallPlot");
var director = document.getElementById("director");

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
          alert('Unable to connect to book api');
      });
    }



//retrieving the movie title and sending it to the html

var getMovieTitle = function() {

    //getting a value from the input element
    var title = movieInputEl.value.trim();

    if (title) {
        getMovieData(title);
        movieInputEl.value = ''
    } else {
        alert("Please input a movie title")
    }
}






//function to get info from the movie api

var getMovieData = function(movie) {
    
    var movieUrl = "http://www.omdbapi.com/?apikey=" + movieAPIKey + "&t=batman+begins" + "&r=json";

    fetch(movieUrl)
    .then(function(response) {
        //if response was successful
        if (response.ok) {
            console.log(response);
            response.json().then(function(title) {
                console.log(title);
                releaseYear.innerHTML = title.Released;
                boxOffice.innerHTML = title.BoxOffice;
                smallPlot.innerHTML = title.Plot;
                movieRating.innerHTML = title.Rated;
                director.innerHTML = title.Director;
                
            });
        } else {
            alert('Error: ' + response.statusText);
        }
      })
      .catch(function(error) {
          alert('Unable to connect to movie');
      });
    }

    getMovieData();
    getBook();