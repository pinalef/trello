function tareaPrincipal(){

    //obtiene div lista
   var lista = document.getElementById('lista');
  // parent node
  var parentDiv = lista.parentNode;
  console.log(parentDiv);

   //creo contenedor formulario, y elementos
   var contLista = document.createElement('div');
   var input = document.createElement('input');
   var button = document.createElement('input');

   console.log(contLista);

   //Agrego elementos a contenedor
   contLista.appendChild(input);
   contLista.appendChild(button);
 
  
 
   //agrego style
   contLista.setAttribute('id', 'contlista');
   input.setAttribute('type', 'text');
   input.setAttribute('text', 'Anadir una lista...');
   button.setAttribute('type', 'button');
   console.log(button);

   //reemplazo nodo
    parentDiv.replaceChild(contLista, lista);
}