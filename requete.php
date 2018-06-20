<?php
try

{
    $bdd = new PDO('mysql:host=localhost;dbname=race;charset=utf8', 'root', 'root');
}

catch(Exception $e)
{
    die('Erreur : '.$e->getMessage());
}
//Affichage commentaires en fonction de l'id du film

$reponse = $bdd->query('SELECT text_commentary FROM commentary WHERE id_film = 2  ');
while ($donnees = $reponse->fetch())
{
?>
    <p>
        <?php echo $donnees['text_commentary']; ?>
    </p>
    <?php
}
$reponse->closeCursor();
?>


