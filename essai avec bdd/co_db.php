<?php
try

{

    $bdd= new PDO('mysql:host=localhost;dbname=morpion', 'root', '');

}

catch (Exception $e)

{

        die('Erreur : ' . $e->getMessage());

}
?>