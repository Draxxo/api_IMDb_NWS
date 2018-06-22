<?php 
session_start();

try
{
    $bdd = new PDO('mysql:host=localhost;dbname=race', 'root', '');
}
catch(Exception $e)
{
    die('Erreur : '.$e->getMessage());
}

if(isset($_POST['first_name']) && isset($_POST['last_name'])
    && isset($_POST['mdp'])  && isset($_POST['mdp2']) && isset($_POST['email'])) {

    $st = $bdd->query('SELECT COUNT(*) FROM `user`');
    $donnees = $st->fetchAll();
    $id = $donnees[0][0];
    $id++;

    if($_POST['mdp'] == $_POST['mdp2']) {
        $bdd->exec("INSERT INTO `user` VALUES ('".$id."', '".$_POST['first_name']."', '".$_POST['last_name']."', '".$_POST['email']."', '".$_POST['mdp']."')");

        $_SESSION['id'] = $id;

        echo $_SESSION['id'];

        header('Location: home.php');
    }
    else header('Location: form-co-ins.php');
}

header('Location: home.php');
?>