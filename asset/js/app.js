
function otherTweet(){
   //tenemos que tomar el texto ingresado en el textarea //.valeu guarda lo que se ingresó en ese texto
    var comments = document.getElementById('newTweet').value;

    //limpiar el textarea //al darle valor al value se está dando un valor modificando lo guarda y limpia
    document.getElementById('newTweet').value = '';
    //document.getElementById("indicator").innerHTML = "140";

    //se llama al contenedor vacio que esta en el html
    var cont = document.getElementById('comment');

    //creamos el div que contiene cada comentario al contenedor vacio
    var newComments = document.createElement('div');
    //nodos de texto del textarea. Nuevo texto

    //Son todas las condiciones que no son permitidas ingresar en el textarea, ya sea si no se ingresa valor o si se ingresan cualquier otro caracter indicando con una alerta 
 if(comments.length == 0 || comments == null || /^\s+$/ .test(comments)){
     	alert("Ingresa un mensaje válido");
     	return false;
     }

    var textNewComment = document.createTextNode(comments);

    var contenedorElemento = document.createElement('p');

      /*agregando los hijos */
    contenedorElemento.appendChild(textNewComment);

    newComments.appendChild(contenedorElemento);

    //crear hora 
    var hactual = new Date();
    var hourss = hactual.getHours();
    var minutess = hactual.getUTCMinutes();
	var hourActual = document.createTextNode(hourss + ":" + minutess);
    //La hora se guardará en un elemento nuevo
    var hourFinal = document.createElement("p");

    //Se guarda la p y la hora en el contenido final
    hourFinal.appendChild(hourActual);
    newComments.appendChild(hourFinal);


    cont.appendChild(newComments);
}

//Scroll que permite agrandar textarea
function textAreaAdjust(o){
	o.style.height="1px";
	o.style.height=(25+o.scrollHeight)+"px"
};

//Contador. Agrega colores 
var textarea = document.getElementById("newTweet");
newTweet.onkeydown = function(){
	var newTweet = document.getElementById("newTweet");
	var comments = newTweet.value.length;
	var contadorr = document.getElementById("indicator");
	contadorr.innerHTML = 140 - comments;
	//Si el valor está entre 120 a 130 el color será verde
	if(comments >= 120 && comments < 130){
		return contadorr.setAttribute("id","green");
	}
	//si el valorestá entre 130 y 140 el color del contador será rojo
	if(comments >= 130 && comments < 140){
		return contadorr.setAttribute("id","red");
	} else {

	};

	//Activa y desactiva el boton cuando los caracteres sobrepasan los 140
	if(comments > 140){
		return document.getElementById("btn").disabled = true;
	} else {
		return document.getElementById("btn").enabled = true;
	}

};
	