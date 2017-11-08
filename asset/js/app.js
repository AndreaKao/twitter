function add(){
    //tenemos que tomar el texto ingresado en el textarea
    var comments = document.getElementById('comment').value;

    //limpiar el textarea
    document.getElementById('comment').value = '';

    //contenedor que esta en el html
    var cont = document.getElementById('cont');

    //creamos el div que contiene cada comentario
    var newComments = document.createElement('div');

    //nodos de texto del textarea
    var textNewComment = document.createTextNode(comments);

    var contenedorElemento = document.createElement('p');
    /*agregando los hijos */
    contenedorElemento.appendChild(textNewComment);

    newComments.appendChild(contenedorElemento);

    cont.appendChild(newComments);
    }
    if(comments.length <= 119) {
		document.getElementById("commentLength").style.color= "#547389";
	}
	if(comments.length >= 120 || <= 129) {
		document.getElementById("commentLength").style.color="#b026be";
	}
	if(comments.length >= 130 || <= 140) {
		document.getElementById("commentLength").style.color="#9F1122";
	}
}

/*
var button = document.getElementById('btn');
button.addEventListener('click', function(){
	//tenemos que tomar el texto ingresado en el textarea
	var tweetMsg = document.getElementById('newTweet').value;
	//limpiar el textarea
	document.getElementById('newTweet').value = '';
	//contenedor que esta en el html
	var cont = document.getElementById('cont');
	//creamos el div que contiene cada comentario
	var newComm = document.createElement('div');
	//validar que textarea tenga un msje
	var text = document.createTextNode(tweetMsg);
	newComm.appendChild(text);
	var contenedor = document.getElementById("comment");
	contenedor.appendChild(newComm);

	if(comments.length <= 119) {
		document.getElementById("commentLength").style.color= "#547389";
	}
	if(comments.length >= 120 || <= 129) {
		document.getElementById("commentLength").style.color="#b026be";
	}
	if(comments.length >= 130 || <= 140) {
		document.getElementById("commentLength").style.color="#9F1122";
	}
}
