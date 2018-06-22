<?php
include 'header.php';


?>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Connexion/Inscription</title>
    <link rel="stylesheet" type="text/css" href="connexion.scss">
</head>


<body>

<h1>Connexion</h1>
<form action="connection.php" method=POST>
    <p><label>Email: <input type="email" name="e-mail"/></label></p>
    <p><label>Mot de passe: <input type="password" name="mdp-passe"/></label></p>
    <p><label>Confirmer le mot de passe: <input type="password" name="mdp-passe"/></label></p>
    <p><input type="submit"></p>

</form>

<h1>Inscription</h1>
<form action="register.php" method=POST>
    <p><label>Prénom: <input type="text" name="first_name"></label></p>
    <p><label>Nom: <input type="text" name="last_name"></label></p>
    <p><label>Email: <input type="email" name="email"/></label></p>
    <p><label>Mot de passe: <input type="password" name="mdp"/></label></p>
    <p><label>Confirmer le mot de passe: <input type="password" name="mdp2"/></label></p>
    <p><input type="submit"></p>

</form>



</body>
</html>
