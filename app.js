function tareaPrincipal(){
    //obtiene div lista
   var lista = document.getElementById('lista');
  // parent node
  var parentDiv = lista.parentNode;

   //creo contenedor formulario, y elementos
   var contLista = document.createElement('div');
   var input = document.createElement('input');
   var button = document.createElement('input');

   //Agrego elementos a contenedor
   contLista.appendChild(input);
   contLista.appendChild(button);
 
   //agrego style
   contLista.setAttribute('id', 'contlista');
   input.setAttribute('type', 'text');
   input.value = 'Añadir una lista ...';
   button.setAttribute('type', 'button');
   button.value = 'Agregar';

   //reemplazo nodo
    parentDiv.replaceChild(contLista, lista);

}