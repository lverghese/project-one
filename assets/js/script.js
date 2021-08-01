var bookAPIKey = "j6Kh3WHlTmst7fqijtBiGQZe8BFyQjzc"
const movieApiKey = "53e27a88"
var userTitleSearch = ""
var type = ""


//function to get info from the book api
fetch("https://api.nytimes.com/svc/books/v3/reviews.json?title=${userTitleSearch}&api-key=j6Kh3WHlTmst7fqijtBiGQZe8BFyQjzc")
      .then(function(response){
          console.log('Success!');
      })
      .catch(function(error){
          console.log('API trouble'+ error)
      });
    
//function to get info from the movie api
fetch("http://www.omdbapi.com/?tt0108037&apikey=53e27a88")
      .then(function(response){
          console.log('Success!');
      })
      .catch(function(error){
          console.log('API trouble'+ error)
      });