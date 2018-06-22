<?php 
$title = 'filters';
include 'header.php'; ?>

	<section class="lightbox">
		<div class="cross">
			<i class="fas fa-times"></i>
		</div>

		<div class="back_img" style="background-image: url(../img/test.jpg);"></div>
		<div class="behind_img" style="background-image: url(../img/test.jpg);"></div>
	</section>

	<div class="container">

		<?php for($j=0;$j<10;$j++) { ?>
		<section class="home-caroussel nouveaute">
			<h1>Nouveautées</h1>
			<div class="cards">

				<?php for($i=0;$i<10;$i++) { ?>
				<article class="card">
					<div class="card__image" style="background-image: url(../img/test.jpg);"></div>
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
								L'intrigue relate le voyage dans le passé d'un adolescent, Marty McFly, à bord d'une machine à voyager dans le temps fabriquée par le docteur Emmett Brown à partir d'une voiture de modèle DeLorean DMC-12... Je suis dans le meilleur des devs et j'aime regarder Clément par le trou des toilettes. 
							</p>
						</div>
						<a class="button">&#9658; Plus d'informations</a>
					</div>
				</article>
				<?php } ?>

			</div>
			<span class="arrow"></span>
		</section>
		<?php } ?>

	</div>

<?php include 'footer.php'; ?>