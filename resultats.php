<?php
session_start();
function securite($var){
 $securise = stripslashes(strip_tags(htmlspecialchars(trim($var))));
 return $securise;
}


	if (isset($_POST['joueur']) && !empty($_POST['compteur']) && isset($_POST['compteur']) && !empty($_POST['victoireJ1']) && isset($_POST['victoireJ1']) && !empty($_POST['victoireJ2']) && isset($_POST['victoireJ2']) && !empty($_POST['nulles']) && isset($_POST['nulles']) && !empty($_POST['nbre_parties']) && isset($_POST['nbre_parties']) && !empty($_POST['player']) && isset($_POST['player']) && !empty($_POST['joueur'])  ){


				
			$joueur_gagner= securite($_POST['joueur']);// on sécurise les données
			$compteur=securite($_POST['compteur']);
			$pts_j1= securite($_POST['victoireJ1']);
			$pts_j2= securite($_POST['victoireJ2']);
			$pts_nul= securite($_POST['nulles']);
			$nbre_parties= securite($_POST['nbre_parties']);
			$player= securite($_POST['player']);
			$total_parties = $pts_j1 + $pts_j2 + $pts_nul;

			if ($reini_temp != securite($_POST['reini']) ){
				$pts_nul_temp++;
			    $nbre_parties_temp++;
			    $pts_j2_temp++;
			    $pts_j1_temp++;
			    $reini_temp = securite($_POST['reini']);

			}

			switch ($joueur_gagner) {// On vérifie quels joueur à gagné
			    case 0:
			        echo "Egalité";
			        $pts_nul_temp++;
			        $nbre_parties_temp++;			        
			        break;
			    case 1:
			        echo "Félicitation ! le joueur 1 a gagné";
			        $pts_j1_temp++;
			        $nbre_parties_temp++;
			        break;
			    case 2:
			        echo "Félicitation ! le joueur 2 a gagné";
			        $pts_j2_temp++;
			        $nbre_parties_temp++;
			        break;
			}

			
		 if ($pts_nul_temp!=$pts_nul ||  $nbre_parties_temp!=$nbre_parties || $pts_j1_temp!=$pts_j1 || $pts_j2_temp!=$pts_j2 ||  $total_parties!= $nbre_parties){ //Anti triche:
		 	echo "<h1>Tricherie detecté</h1>";

		 }//Anti triche: Nous utilisons le fait de savoir si un joueur à gagné pour determiner le nombre de parties joué ainsi que le nombre de fois ou un joueur à gagné. Nous utilisons ensuite ces donnèes local pour les comparer avec les données envoyer par Ajax. De ce fait si modification il y à eu, nous le saurons car les comparaisons ne seront pas les mêmes.


		

			
	}



	else{
		echo "Erreur lors de la transmission des variables";

	}
	/* Nous avions pleins d'idées mais nous avons été ralentit par les bugs rencontrés. Nous voulions par exemple comparer plusieurs données pour tenter de découvrir si tricherie il y avait. Par exemple avec la variable total_parties. Notre but été, à l'aide des données enristrées par le jeu et celles calculés graàce aux victoires/défaites, de déterminer si il y avait eu des modifications du côté client. SI les données concordes, alors elles sont correctes, sinon il y à eu des modifications. >N'oublions-pas qu'il reste possible de modifier le champ "Data" de la requête ajax pour modifier la requête et ainsi envoyer des données falsifiée, d'ou l'importance d'avoir les compteurs en doubles. */
?>