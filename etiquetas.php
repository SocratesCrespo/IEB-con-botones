<?php
	
	require "pronombres.php";

	class etiquetas{

		var $opcion1;
		var $opcion2;

	}

		function etiquetas ($opcion1, $opcion2){

			$this -> opcion1=$opcion1;
			$this -> opcion2=$opcion2;
		}

		 function Imprimir(){

		 	echo "I'm Drinking";
		 	echo this -> $opcion1;
		 	echo "I'm Working";
		 	echo this -> $opcion2;
		 }

		 $fin = new etiquetas($opcion1, $opcion2);
		 $fin -> Imprimir();

	?>