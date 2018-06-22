<?php
$title = 'connexion';
include 'header.php'; ?>

<div class="form-co-ins">
    <div class="co">
        <h1>Connexion</h1>
        <form action="connection.php" method=POST>
            <p><input type="email" name="email" placeholder="email@hotmail.fr" /></p>
            <p><input type="password" name="mdp" placeholder="password"/></p>
            <p><input type="submit"></p>
        </form>
    </div>
    <hr>
    <div class="ins">
        <h1>Inscription</h1>
        <form action="register.php" method=POST>
            <p><input type="text" name="first_name" placeholder="Jean"></p>
            <p><input type="text" name="last_name" placeholder="Philippe"></p>
            <p><input type="email" name="email" placeholder="jp@hotmail.fr"/></p>
            <p><input type="password" name="mdp" placeholder="azerty"/></p>
            <p><input type="password" name="mdp2" placeholder="azerty"/></p>
            <p><input type="submit"></p>
        </form>
    </div>
</div>

<?php include 'footer.php'; ?>