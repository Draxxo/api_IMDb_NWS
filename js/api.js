$(document).ready(function () {

    var title = $('body').attr('id');

    switch (title) {
        case 'filters':
            cardFilters();
            break;
    }

    function cardFilters() {

        theMovieDb.movies.getPopular({},
            function (data) {

                let popularFilmObject = JSON.parse(data);

                var genresList;

                theMovieDb.genres.getMovieList({language: 'fr-FR'}, function (result) {
                        genresList = JSON.parse(result).genres;

                    }, function (data) {
                        console.log("Error callback: " + data)
                    }
                );

                setTimeout(function () {

                    popularFilmObject.results.forEach(function (movie) {
                        let article = $('<article/>', {'class': 'card'});
                        let cardImage = $('<div/>', {
                            'class': 'card__image',
                            'style': 'background-image: url(https://image.tmdb.org/t/p/w500' + movie.poster_path + ')',
                        });
                        let cardInfo = $('<div/>', {'class': 'card__info'});
                        let title = $('<h2/>', {'class': 'title', html: movie.title.substr(0, 20) + '...'});
                        let desc = $('<div/>', {'class': 'desc'});
                        let rating = $('<div/>', {'class': 'rating'});
                        let stars = $('<div/>', {'class': 'stars'});
                        let button = $('<a/>', {'class': 'button', html: '► Plus d\'informations'});
                        let resume = $('<p/>', {html: movie.overview.substr(0, 200) + '...'});

                        // Compare les genres d'un film avec les genres existant
                        var genre = $('<p/>', {'class': 'genre', html: 'unknown'});
                        var meta = $('<p/>', {'class': 'meta', html: 'unknown'});

                        genresList.forEach(function (g) {

                            if (g.id == movie.genre_ids[0]) {
                                genre = $('<p/>', {'class': 'genre', html: g.name});
                                meta = $('<p/>', {'class': 'meta', html: g.name});
                            }

                        });


                        // Calcul de la note pour afficher un nombre d'étoile
                        let popularity = Math.round(movie.vote_average / 2);

                        for (let iter = 0; iter < popularity; iter++) {
                            let starsImg = $('<i/>', {'class': 'fas fa-star'});
                            stars.append(starsImg);
                        }

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
                    })
                }, 1000);

            }, function (data) {
                console.log("Error callback: " + data);
            });
    }
});