<?php
	session_start();
	require_once "co_db.php";

	$num = $_POST['id'];
	
	$req = $bdd->prepare("SELECT * FROM partie WHERE id=:num LIMIT 1");// "prepare" pour création d'un objet selon les conditions. : devant les variables
	$req->execute(array(
		':num' => $num));
	$resultat = $req->fetch();
	echo($resultat['joueur']);
	if($resultat['joueur'] == 0){
		$verifJoueur = $_SESSION['player'];
		$req = $bdd->prepare("UPDATE `partie` SET `joueur`= ? WHERE `id`= ?");// "prepare" pour création d'un objet selon les conditions. : devant les variables
		if($verifJoueur == 1){
			$req->execute(array( 1, $num));
			echo('Joueur 1 a joué.');
			$_SESSION['player'] = 2;
		}
		else{
			$req->execute(array( 2, $num));
			echo('Joueur 2 a joué');
			$_SESSION['player'] = 1;
		}
	}
	else{
		echo('déjà utilisée');
	}
	
?>