<?php 
$title = 'filters';
include 'header.php'; ?>

	<section class="filters-window">
		
	</section>

	<div class="container">

		<section class="filters-form">
			<div class="form">
				<div class="search-box">
					<input type="search" placeholder="Search movies">
					<span class="fas fa-search"></span>
				</div>

				<ul class="select">
					<li class="choice">-- Categories --</li>
					<ul class="dropdown">
						<li>Action</li>
						<li>Animation</li>
						<li>Aventure</li>
						<li>Comedie</li>
						<li>Epique</li>
						<li>Fantasy</li>
						<li>Horreur</li>
						<li>Policier</li>
						<li>Romantiquer</li>
					</ul>
				</ul>

				<ul class="select">
					<li class="choice">-- Notations --</li>
					<ul class="dropdown">
						<li>5 étoiles</li>
						<li>4 étoiles</li>
						<li>3 étoiles</li>
						<li>2 étoiles</li>
						<li>1 étoiles</li>
					</ul>
				</ul>
			</div>
		</section>

		<section class="filters-films">
			<div class="wrapper">

				<?php for($i=0;$i<10;$i++) { ?>
				<article class="card">
					<div class="card__image"></div>
					<div class="card__info">
						<h2 class="title">Retour vers le futur</h2>
						<p class="genre">Science-fiction</p>

						<div class="desc">
							<div class="rating">
								<p class="meta">Science-fiction - 1h 56m</p>
								<div class="stars">
									<i class="fas fa-star"></i>
									<i class="fas fa-star"></i>
									<i class="fas fa-star"></i>
									<i class="fas fa-star"></i>
									<i class="fas fa-star"></i>
								</div>
							</div>
							
							<p>
								L'intrigue relate le voyage dans le passé d'un adolescent, Marty McFly, à bord d'une machine à voyager dans le temps fabriquée par le docteur Emmett Brown à partir d'une voiture de modèle DeLorean DMC-12...
							</p>
						</div>
						<a class="button" href="#">&#9658; Plus d'informations</a>
					</div>
				</article>
				<?php } ?>

			</div>
		</section>

	</div>

</body>
</html>
<script type="text/javascript" src="js/script.js"></script>
<script type="text/javascript">
	var settings = {
		"async": true,
		"crossDomain": true,
		"url":
		"https://api.themoviedb.org/3/authentication/token/new?api_key=a128fc27663857df169c5d4a66796724",
		"method": "GET",
		"headers": {},
		"data": "{}"
	}
	$.ajax(settings).done(function (response) {
		console.log(response); //afficher dans la console (F12) le résultat de l’objet
	});
</script>