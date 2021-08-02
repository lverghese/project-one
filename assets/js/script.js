const bookAPIKey = "AIzaSyDcXOeyScItwcFMcUTf8T0ESWNi1x22kvU"
const movieAPIKey = "9460c855"

var movieInputEl = document.getElementById("movieSearch")
var releaseYear = document.getElementById("releaseYear");
var movieRating = document.getElementById("movieRating");
var boxOffice = document.getElementById("boxOffice");
var smallPlot = document.getElementById("smallPlot");
var director = document.getElementById("director");
var movieTitle = document.getElementById("movieTitle");
var movieImg = document.getElementById("movieImg");
var noPoster = document.getElementById("noPoster");



//modal initialization
$(document).ready(function(){
    $('.modal').modal();
  });


//function to get info from the book api

var getBook = function() {
    
    var bookUrl = "https://www.googleapis.com/books/v1/volumes" + "?q=percy-jackson+and+the+lightning+thief" + "&api-key=" + bookAPIKey;

    fetch(bookUrl)
    .then(function(response) {
        //if response was successful
        if (response.ok) {
            //console.log(response);
            response.json().then(function(data) {
                //console.log(data.items[0].volumeInfo.title);
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
        
    } else {
        alert("Please input a movie title")
    }
}

//search button for movie
var searchBtn = document.getElementById("titleInput")
searchBtn.addEventListener("click", function() {
    var movieInputEl = document.getElementById("movieSearch")
    var movieElement = {
        movieName: movieInputEl.value
    };
    saveMovie(movieElement);
    getMovieTitle();
    
})

//saving the movie searches in local storage
var saveMovie = function(movieElement) {

    if (localStorage.getItem("movieData") == null) {
        var newArray = [];
        newArray.push(movieElement);
        localStorage.setItem("cityData", JSON.stringify(newArray));
    } else {
        //array already exists in storage
        var currentMovieData = JSON.parse(localStorage.getItem("movieData"))
        var movieExists = false;

        for( i = 0; i < currentMovieData.length; i++) {
            if (currentMovieData[i].movieName == movieElement.movieName) {
                cityExists = true;
            }
        }
        if (!movieExists) {
            currentmovieData.push(movieElement);
            localStorage.setItem("movieData", JSON.stringify(currentMovieData));
        }
    }
   
};






//function to get info from the movie api
var getMovieData = function(movie) {
   
    var movieUrl = "http://www.omdbapi.com/?apikey=" + movieAPIKey + "&t=" + movie + "&r=json";

    fetch(movieUrl)
    .then(function(response) {
        //if response was successful
        if (response.ok) {
            //console.log(response);
            response.json().then(function(title) {
                console.log(title.Response);
                if(title.Response == "False") {
                    instance.open(modal1);
                } else {
                    movieInputEl.value = ''
                movieTitle.innerHTML = checkData(title.Title);
                releaseYear.innerHTML = checkData(title.Released);
                boxOffice.innerHTML = checkData(title.BoxOffice);
                smallPlot.innerHTML = checkData(title.Plot);
                movieRating.innerHTML = checkData(title.Rated);
                director.innerHTML = checkData(title.Director);
                movieImg.src = checkData(title.Poster);
                }
            
            });
            
        } else {
            alert("Please input a valid movie");
        }
      })
      .catch(function(error) {
          alert('Unable to connect to movie');
      });
    }


    var checkData = function(result) {
        if (result == null) {
            return "N/A"
        } else if (result == "N/A") {
            noPoster.style.display="block";
            movieImg.style.display="none";
            return result;
        } else {
            noPoster.style.display="none";
            movieImg.style.display="block";
            return result;
        }

    }

    //search button for movie
var searchBtn = document.getElementById("titleInput")
searchBtn.addEventListener("click", function() {
    var movieInputEl = document.getElementById("movieSearch")
    var movieElement = {
        movieName: movieInputEl.value
    };
    saveMovie(movieElement);
    getMovieTitle();
    
})

var clearBtn = document.getElementById("clearCurrent");
  clearBtn.addEventListener("click", function() {
    movieTitle.innerHTML = ''
    releaseYear.innerHTML = ''
    boxOffice.innerHTML = ''
    smallPlot.innerHTML = ''
    movieRating.innerHTML = ''
    director.innerHTML = ''
    movieImg.src = ''
    movieImg.style.display="none";
  })