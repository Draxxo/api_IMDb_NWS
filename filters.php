<?php 
$title = 'filters';
include 'header.php'; ?>

</body>
</html>
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