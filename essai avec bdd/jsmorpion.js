
$( document ).ready(function(){
	
	$('.square').click(function(even){
	
	var valueElt = this.getAttribute('value');
	ajaxGrille(valueElt);
	ajaxVerifGrille();
	});
	
	
	function ajaxGrille(id){
		$.ajax({
			type: 'POST',  // Mode de transfert.
			url : 'grille.php',            // L'adresse du fichier cible
			async : true,  // Optionnel. Si on veut une requête synchrone, écrire 'false'
			dataType : 'text',   // Autres possibilités : 'html' 'xml' 'script' 'json'
			data: 'id='+id, // Paramètres éventuels
			success : function(reponse){
				$('#resultat').text(reponse);
			},
			error : function(reponse){
			// Fonction exécutée en cas d'erreur
			} 
		});					
		
		
	}
	
	function ajaxVerifGrille(){
		for(i=1; i <10; i++){
			$.ajax({
			type: 'POST',  // Mode de transfert.
			url : 'verifGrille.php',            // L'adresse du fichier cible
			async : true,  // Optionnel. Si on veut une requête synchrone, écrire 'false'
			dataType : 'text',   // Autres possibilités : 'html' 'xml' 'script' 'json'
			data: 'i='+i, // Paramètres éventuels
			success : function(reponse){
				/*document.getElementById('sq'+i).addClass(reponse);*/
				$('#resultat').text(reponse);
			},
			error : function(reponse){
			// Fonction exécutée en cas d'erreur
			} 
			});	
		}
	};
			

	
	$('#initialiser').on('click',function(even){
		for(i=0;i<=9;i++){
			if ($('#sq'+i).hasClass('fa fa-times'))  $('#sq'+i).removeClass('fa fa-times') ;
			else if ($('#sq'+i).hasClass('fa fa-circle-o')) $('#sq'+i).removeClass('fa fa-circle-o') ;		
		}
		$("#resultat").html(" ");	
		$("#message1").html(" ");
		

	});
	
	
	function checkIfPlayerWon(icon){
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
		else{
			return false;
			
		}
		
		
	}

	
});