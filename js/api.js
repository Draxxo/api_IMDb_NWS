$( document ).ready(function() {

    function errorCB(data) {
        console.log("Error callback: " + data);
    }

    theMovieDb.movies.getPopular({},
        function (data) {
            let popularFilmObject = JSON.parse(data);
            console.log(popularFilmObject);
            for (element in popularFilmObject.results) {
               let article = $('<article/>', {'class': 'card'});
               let cardImage = $('<div/>', {'class': 'card__image', 'style' : 'background-image: url(https://image.tmdb.org/t/p/w500' + popularFilmObject.results[element].poster_path + ')', });
               let cardInfo = $('<div/>', {'class': 'card__info'});
               let title = $('<h2/>', {'class': 'title', html: popularFilmObject.results[element].title});
               let genre = $('<p/>', {'class': 'genre', html: popularFilmObject.results[element].genre_ids});
               let desc = $('<div/>', {'class': 'desc'});
               let rating = $('<div/>', {'class' : 'rating'});
               let meta = $('<p/>', {'class': 'meta', html: 'jean-claude'});
               let stars = $('<div/>', {'class': 'stars'});
               let button = $('<a/>', {'class': 'button', html: '► Plus d\'informations'});
               let resume = $('<p/>', {html: popularFilmObject.results[element].overview.substr(0,200) + '...'});



               rating.append(meta);
               rating.append(stars);

               desc.append(rating);
               desc.append(resume);

               cardInfo.append(title);
               cardInfo.append(genre);
               cardInfo.append(desc);
               cardInfo.append(button);

               article.append(cardImage);
               article.append(cardInfo);

               $('.wrapper').append(article);
            }

        }, errorCB);

});