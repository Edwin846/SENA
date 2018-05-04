	var numero1,numero2;
	function calcular() {
	numero1= parseInt(document.getElementById('caja1').value);
	numero2= parseInt(document.getElementById('caja2').value);
	if(numero1 > numero2){
	alert (numero1+" es mayor a "+numero2);

	}
	else{
	alert (numero2+" es mayor a "+numero1);
	}
	return false;
	}