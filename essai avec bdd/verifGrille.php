<?php 
	session_start();
	require_once "co_db.php";
	$req = $bdd->prepare("SELECT * FROM partie WHERE id=:num LIMIT 1");// "prepare" pour création d'un objet selon les conditions. : devant les variables
	$num = $_POST['i'];
	$req->execute(array(
		':num' => $num));
	$resultat = $req->fetch();
	if($resultat['joueur'] = 1){
		echo('fa fa-times');
	}
	else if($resultat['joueur'] = 2){
		echo('fa fa-circle-o');
	}
	else {
		echo('.');
	}
?>