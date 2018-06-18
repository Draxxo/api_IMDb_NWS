<!DOCTYPE html>
<html>
<head>
	<title>TEST</title>
	<link rel="stylesheet" type="text/css" href="css/style.min.css">
	<script
			  src="https://code.jquery.com/jquery-3.3.1.min.js"
			  integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
			  crossorigin="anonymous"></script>
</head>
<body>

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