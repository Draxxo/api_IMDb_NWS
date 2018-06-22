$(document).ready(function () {

    theMovieDb.movies.getPopular({},
        function (data) {

            let popularFilmObject = JSON.parse(data);
            console.log(popularFilmObject);

            theMovieDb.genres.getMovieList({language: 'fr-FR'}, function (result) {
                let genresList = JSON.parse(result).genres;

                (function (genre) {
                    console.log(genre.name, genre.id);
                })

                popularFilmObject.results.forEach(function (movie) {
                    let article = $('<article/>', {'class': 'card'});
                    let cardImage = $('<div/>', {
                        'class': 'card__image',
                        'style': 'background-image: url(https://image.tmdb.org/t/p/w500' + movie.poster_path + ')',
                    });
                    let cardInfo = $('<div/>', {'class': 'card__info'});
                    let title = $('<h2/>', {'class': 'title', html: movie.title.substr(0, 20) + '...'});
                    let genre = $('<p/>', {'class': 'genre', html: movie.genre_ids});
                    let desc = $('<div/>', {'class': 'desc'});
                    let rating = $('<div/>', {'class': 'rating'});
                    let meta = $('<p/>', {'class': 'meta', html: 'jean-claude'});
                    let stars = $('<div/>', {'class': 'stars'});
                    let button = $('<a/>', {'class': 'button', html: '► Plus d\'informations'});
                    let resume = $('<p/>', {html: movie.overview.substr(0, 200) + '...'});

                    let popularity = Math.round(movie.vote_average/2);
                    console.log(popularity);

                    for(let iter = 0; iter < popularity; iter++) {

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

            }, function (data) {
                console.log("Error callback: " + data);
            });


        }, function (data) {
            console.log("Error callback: " + data);
        });

});