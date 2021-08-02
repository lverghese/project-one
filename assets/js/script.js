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
//function to get info from the book api

var getBook = function() {
    
    var bookUrl = "https://www.googleapis.com/books/v1/volumes" + "?q=percy-jackson+and+the+lightning+thief" + "&api-key=" + bookAPIKey;

    fetch(bookUrl)
    .then(function(response) {
        //if response was successful
        if (response.ok) {
            console.log(response);
            response.json().then(function(data) {
                console.log(data.items[0].volumeInfo.title);
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

//search button for movie
var searchBtn = document.getElementById("titleInput")
searchBtn.addEventListener("click", function() {
    var movieInputEl = document.getElementById("movieSearch")
    var movieElement = {
        movieName: movieInputEl.value
    };
    saveMovie(movieElement);
    getMovieTitle();
    console.log("poop")
    
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
            console.log(response);
            response.json().then(function(title) {
                console.log(title);

                movieTitle.innerHTML = checkData(title.Title);
                releaseYear.innerHTML = checkData(title.Released);
                boxOffice.innerHTML = checkData(title.BoxOffice);
                smallPlot.innerHTML = checkData(title.Plot);
                movieRating.innerHTML = checkData(title.Rated);
                director.innerHTML = checkData(title.Director);
                movieImg.src = checkData(title.Poster);
                movieImg.style.display="block";

                
            });
        } else {
            alert('Error: ' + response.statusText);
        }
      })
      .catch(function(error) {
          alert('Unable to connect to movie');
      });
    }


    var checkData = function(result) {
        if (result == null) {
            return "N/A"
        } else {
            return result;
        }

    }
  