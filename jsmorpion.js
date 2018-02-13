
$( document ).ready(function(){

function ordinateur(){

		if (player==2 && compteur<9 && jouer == 1){
					player=1;
					compteur++;
					
					//----------------------------------------------------PARTIE ORDINATEUR-----------------------------------------------
					if($('#sq1').hasClass('fa fa-times') && $('#sq2').hasClass('fa fa-times')  && !$('#sq3').hasClass('fa fa-times') && !$('#sq3').hasClass('fa fa-circle-o') ) {
						$('#sq3').addClass('fa fa-circle-o');					
					}
					else if($('#sq3').hasClass('fa fa-times') && $('#sq2').hasClass('fa fa-times')  && !$('#sq1').hasClass('fa fa-times') && !$('#sq1').hasClass('fa fa-circle-o') ) {
						$('#sq1').addClass('fa fa-circle-o');
					}
					else if($('#sq1').hasClass('fa fa-times') && $('#sq3').hasClass('fa fa-times')  && !$('#sq2').hasClass('fa fa-times') && !$('#sq2').hasClass('fa fa-circle-o') ) {
						$('#sq2').addClass('fa fa-circle-o');
					}
					// ligne 1 horizontal 3 possibilitées

					else if($('#sq4').hasClass('fa fa-times') && $('#sq5').hasClass('fa fa-times')  && !$('#sq6').hasClass('fa fa-times') && !$('#sq6').hasClass('fa fa-circle-o')  ) {
						$('#sq6').addClass('fa fa-circle-o');
					}
					else if($('#sq6').hasClass('fa fa-times') && $('#sq5').hasClass('fa fa-times')  && !$('#sq4').hasClass('fa fa-times') && !$('#sq4').hasClass('fa fa-circle-o') ) {
						$('#sq4').addClass('fa fa-circle-o');
					}
					else if($('#sq4').hasClass('fa fa-times') && $('#sq6').hasClass('fa fa-times')  && !$('#sq5').hasClass('fa fa-times') && !$('#sq5').hasClass('fa fa-circle-o') ) {
						$('#sq5').addClass('fa fa-circle-o');
					}


					//ligne 2 horizontal 3 possibilitées

					
					else if($('#sq7').hasClass('fa fa-times') && $('#sq8').hasClass('fa fa-times')  && !$('#sq9').hasClass('fa fa-times') && !$('#sq9').hasClass('fa fa-circle-o') ) {
						$('#sq9').addClass('fa fa-circle-o');
					}
					else if($('#sq9').hasClass('fa fa-times') && $('#sq8').hasClass('fa fa-times')  && !$('#sq7').hasClass('fa fa-times') && !$('#sq7').hasClass('fa fa-circle-o') ) {
						$('#sq7').addClass('fa fa-circle-o');
					}
					else if($('#sq7').hasClass('fa fa-times') && $('#sq9').hasClass('fa fa-times')  && !$('#sq8').hasClass('fa fa-times') && !$('#sq8').hasClass('fa fa-circle-o') ) {
						$('#sq8').addClass('fa fa-circle-o');
					}

					//ligne 3 horizontal 3 possibilitées

					
					else if($('#sq1').hasClass('fa fa-times') && $('#sq4').hasClass('fa fa-times')  && !$('#sq7').hasClass('fa fa-times') && !$('#sq7').hasClass('fa fa-circle-o') ) {
						$('#sq7').addClass('fa fa-circle-o');
					}
					else if($('#sq1').hasClass('fa fa-times') && $('#sq7').hasClass('fa fa-times')  && !$('#sq4').hasClass('fa fa-times') && !$('#sq4').hasClass('fa fa-circle-o') ) {
						$('#sq4').addClass('fa fa-circle-o');
					}
					else if($('#sq7').hasClass('fa fa-times') && $('#sq4').hasClass('fa fa-times')  && !$('#sq1').hasClass('fa fa-times') && !$('#sq1').hasClass('fa fa-circle-o') ) {
						$('#sq1').addClass('fa fa-circle-o');
					}
						//colonne 1 vertical 3 possibilitées
					
					else if($('#sq2').hasClass('fa fa-times') && $('#sq5').hasClass('fa fa-times')  && !$('#sq8').hasClass('fa fa-times') && !$('#sq8').hasClass('fa fa-circle-o') ) {
						$('#sq8').addClass('fa fa-circle-o');
					}
					else if($('#sq8').hasClass('fa fa-times') && $('#sq5').hasClass('fa fa-times')  && !$('#sq2').hasClass('fa fa-times') && !$('#sq2').hasClass('fa fa-circle-o') ) {
						$('#sq2').addClass('fa fa-circle-o');
					}
					else if($('#sq2').hasClass('fa fa-times') && $('#sq8').hasClass('fa fa-times')  && !$('#sq5').hasClass('fa fa-times') && !$('#sq5').hasClass('fa fa-circle-o') ) {
						$('#sq5').addClass('fa fa-circle-o');
					}

					//colonne 2 vertical 3 possibilitées

					
					else if($('#sq3').hasClass('fa fa-times') && $('#sq6').hasClass('fa fa-times')  && !$('#sq9').hasClass('fa fa-times') && !$('#sq9').hasClass('fa fa-circle-o') ) {
						$('#sq9').addClass('fa fa-circle-o');
					}
					else if($('#sq3').hasClass('fa fa-times') && $('#sq9').hasClass('fa fa-times')  && !$('#sq6').hasClass('fa fa-times')  && !$('#sq6').hasClass('fa fa-circle-o') ) {
						$('#sq6').addClass('fa fa-circle-o');
					}
					else if($('#sq6').hasClass('fa fa-times') && $('#sq9').hasClass('fa fa-times')  && !$('#sq3').hasClass('fa fa-times') && !$('#sq3').hasClass('fa fa-circle-o') ) {
						$('#sq3').addClass('fa fa-circle-o');
					}
					//colonne 3 vertical 3 possibilitées


					
					else if($('#sq1').hasClass('fa fa-times') && $('#sq5').hasClass('fa fa-times')  && !$('#sq9').hasClass('fa fa-times') && !$('#sq9').hasClass('fa fa-circle-o') ) {
						$('#sq9').addClass('fa fa-circle-o');
					}
					else if($('#sq1').hasClass('fa fa-times') && $('#sq9').hasClass('fa fa-times')  && !$('#sq5').hasClass('fa fa-times') && !$('#sq5').hasClass('fa fa-circle-o') ) {
						$('#sq5').addClass('fa fa-circle-o');
					}
					else if($('#sq9').hasClass('fa fa-times') && $('#sq5').hasClass('fa fa-times')  && !$('#sq1').hasClass('fa fa-times') && !$('#sq1').hasClass('fa fa-circle-o') ) {
						$('#sq1').addClass('fa fa-circle-o');
					}
						//diagonale l 3 possibilitées

					else if($('#sq3').hasClass('fa fa-times') && $('#sq5').hasClass('fa fa-times')  && !$('#sq7').hasClass('fa fa-times') && !$('#sq7').hasClass('fa fa-circle-o') ) {
						$('#sq7').addClass('fa fa-circle-o');
					}
					else if($('#sq3').hasClass('fa fa-times') && $('#sq7').hasClass('fa fa-times')  && !$('#sq5').hasClass('fa fa-times') && !$('#sq5').hasClass('fa fa-circle-o') ) {
						$('#sq5').addClass('fa fa-circle-o');
					}
					else if($('#sq7').hasClass('fa fa-times') && $('#sq5').hasClass('fa fa-times')  && !$('#sq3').hasClass('fa fa-times') && !$('#sq3').hasClass('fa fa-circle-o') ) {
						$('#sq3').addClass('fa fa-circle-o');
					}

					//diagonale 2 3 possibilitées

					else{
						var sq = '#sq' + Math.floor((Math.random() * 9) + 1);
						while ($(sq).hasClass('fa fa-circle-o') ||	$(sq).hasClass('fa fa-times') && compteur<8) {
						   var sq = '#sq' + Math.floor((Math.random() * 9) + 1);
						}
						$(sq).addClass('fa fa-circle-o');
						player=1;
					}
					//---------------------------------------------------- FIN PARTIE ORDINATEUR-----------------------------------------------
					
		}
	}



	
	var player=1;
	var compteur = 0;
	var jouer = 1;
	var victoire_joueur1=0;
	var victoire_joueur2=0;
	var nulles=0;
	var nbre_parties=0;
	var reini=0;
	
	$('.square').on('click',function(even){ // Lors d'un click sur une case ...
	var squareSelected=$(this); // On définit le case selectionné dans une variable
	$("#message1").html('');	// On définit le message 1

	// -------------------------------PARTIE VERIFICATION QUI à GAGNER--------------------------------
	if(checkIfPlayerWon('fa fa-times')){
						
					//$("#resultat").html("Felicitation ! le joueur "+ player +" a gagne.");						
					ajaxResultats(1)	;
					jouer=0;
					victoire_joueur1++;								
					
	}
	else if (checkIfPlayerWon('fa fa-circle-o')){
					
					//$("#resultat").html("Felicitation ! le joueur "+ player +" a gagne.");	
					ajaxResultats(2);
					jouer=0;
					victoire_joueur2++;
					
	

	}
	// -------------------------------FIN PARTIE VERIFICATION QUI à GAGNER--------------------------------
		if(squareSelected.hasClass('fa fa-circle-o') ||	squareSelected.hasClass('fa fa-times') && jouer == 1){		//Test si la case n'est pas déjà prise
			$("#message1").html('Cette case est dejas selectionnee!');			
		}
		else if(compteur==8){ajaxResultats(0); jouer = 0; nulles++; nbre_parties++;} // SI le compteur est égal à 8 on stop la partie, il y a égalitée
		else if(player==1 && compteur<9 && jouer == 1){				
				squareSelected.addClass('fa fa-times');
				compteur++;
				player = 2;
				ordinateur();
		}
								
				
	});


	

		
	
	//-------------------------------------------------FIN PARTIE ORDI---------------------------------------------------------------
	
	function ajaxResultats(joueur){
		$.ajax({
			type: 'POST',  // Mode de transfert.
			url : 'resultats.php',            // L'adresse du fichier cible
			async : true,  // Optionnel. Si on veut une requête synchrone, écrire 'false'
			dataType : 'text',   // Autres possibilités : 'html' 'xml' 'script' 'json'
			//data: 'joueur='+joueur+'compteur='+compteur+'victoireJ1='+victoire_joueur1+'victoireJ2='+victoire_joueur2+'nulles='+nulles+'nbre_parties='+nbre_parties+'player='+player+'reini='+reini,
			data: {joueur: joueur, compteur: compteur, victoireJ1: victoire_joueur1, victoireJ2: victoire_joueur2, nulles: nulles, nbre_parties: nbre_parties, player: player, reini: reini}, // Paramètres éventuels
			success : function(reponse){
			$('#resultat').text(reponse);  
			// Insertion de la variable réponse, qui est un fragment de texte dans l'élément dont l'identifiant est 'resultat'  
			},
			error : function(reponse){
			// Fonction exécutée en cas d'erreur
			} 
		});					
		
		
	}


			

	
	$('#initialiser').on('click',function(even){
		for(i=0;i<=9;i++){
			if ($('#sq'+i).hasClass('fa fa-times')) { $('#sq'+i).removeClass('fa fa-times')} ;// supprime les ronds et carrés
			if ($('#sq'+i).hasClass('fa fa-circle-o')) {$('#sq'+i).removeClass('fa fa-circle-o')} ;		
		}
		compteur = 0;// reinitialise les compteurs
		jouer=1;
		player=1;
		$("#resultat").html(" ");	
		$("#message1").html(" ");

		

	});

	$('#reinitialiser').on('click',function(even){//reinitialise les compteurs
		
	var player=1;
	var compteur = 0;
	var jouer = 1;
	var victoire_joueur1=0;
	var victoire_joueur2=0;
	var nulles=0;
	var nbre_parties=0;
	var reini=1;
	ajaxResultats(5);

	});
	
	
	function checkIfPlayerWon(icon){// fon,ctions qui vérifie si le joueur à gagné
		if($('#sq1').hasClass(icon) && $('#sq2').hasClass(icon)  && $('#sq3').hasClass(icon) ) {
			return true;
		}
		else if($('#sq4').hasClass(icon) && $('#sq5').hasClass(icon)  && $('#sq6').hasClass(icon) ) {
			return true;
		}
		else if($('#sq7').hasClass(icon) && $('#sq8').hasClass(icon)  && $('#sq9').hasClass(icon) ) {
			return true;
		}
		else if($('#sq1').hasClass(icon) && $('#sq4').hasClass(icon)  && $('#sq7').hasClass(icon) ) {
			return true;
		}
		else if($('#sq2').hasClass(icon) && $('#sq5').hasClass(icon)  && $('#sq8').hasClass(icon) ) {
			return true;
		}
		else if($('#sq3').hasClass(icon) && $('#sq6').hasClass(icon)  && $('#sq9').hasClass(icon) ) {
			return true;
		}
		else if($('#sq1').hasClass(icon) && $('#sq5').hasClass(icon)  && $('#sq9').hasClass(icon) ) {
			return true;
		}
		else if($('#sq3').hasClass(icon) && $('#sq5').hasClass(icon)  && $('#sq7').hasClass(icon) ) {
			return true;
		}
		else if(compteur==8) {
			return false;
		}
		else{
			return false;
			
		}
		
		
	}

	
});