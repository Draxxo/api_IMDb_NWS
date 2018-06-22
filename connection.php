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

if(isset($_POST['email']) && isset($_POST['mdp'])) {

    $email    = trim($_POST['email']);
    $password = trim($_POST['mdp']);

    $query = 'SELECT * FROM `user` WHERE `email` = :email';
    $st = $db->prepare($query);
    $st->execute(array(':email' => $email));
    $arr = $st->fetch();

    if($arr)
        if(password_verify($password, $arr['mdp'])) {  
            $_SESSION['id']    = $arr['id'];         
        }

        header('Location: index.php');
    }
    ?>
