function getID(id){
	return document.getElementById(id).value;
}

function innerHTML(id,result){
	return document.getElementById(id).innerHTML=result;
}

function contadorCaracteres(){
	setInterval(function(){
		var c=getID("textarea");
		if (c.length>50){
			innerHTML("txtresultado", "Se permiten hasta 50 caracteres");
		}else{
			innerHTML("txtresultado",c.length);
		}
	},0 0 0 0);
}
