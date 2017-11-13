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

    //anado evento al input texto
    input.addEventListener('click', function(){
    input.value = "";
    agregar();
    })

    function agregar(){
        button.addEventListener('click', function(){
            var texto = input.value;
            input.value = "";
            //creo nuevos elementos, parrafo y link
            var parrafo = document.createElement('p');
            var enlace = document.createElement('a');
            var parrafo1 = document.createTextNode(texto);
            var enlace1 = document.createTextNode('Añadir una tarea');
            
            //anado contenido a parrafo y link
            parrafo.appendChild(parrafo1);
            enlace.appendChild(enlace1);

            //reemplazo nodos             
            contLista.replaceChild(parrafo, input);
            contLista.replaceChild(enlace, button);

            //anado evento click a enlace
            enlace1.addEventListener('click', function(){
            //creo contenedor nuevo formulario, y elementos
             var contLista1 = document.createElement('div');
            var input1 = document.createElement('input');
            var button1 = document.createElement('input');
            })
        })


    }
}

