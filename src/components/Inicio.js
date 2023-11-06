/*
Este código define un componente funcional llamado "Inicio". 
Dentro de este componente se encuentra un contenedor principal 
que contiene un título (h1), un subtítulo (p) y una imagen (img). 
El título presenta un mensaje de bienvenida a la página del CV digital, 
el subtítulo muestra un saludo y el nombre, y la imagen es una fotografía de perfil. 
Este componente es exportado para su uso en otros archivos y utiliza estilos externos definidos en el archivo "Inicio.css".
*/

import React from 'react'; // Importa la biblioteca React

import './Inicio.css'; // Importa los estilos del componente de Inicio

function Inicio() {
  // Componente funcional Inicio
  return (
    <div className="inicio-container"> {/* Contenedor principal del componente */}
      <h1 className="inicio-titulo">¡Bienvenido a mi CV digital!</h1> {/* Título principal */}
      <p className="inicio-subtitulo">¡Hola! Soy Edy Esquivel.</p> {/* Subtítulo o mensaje de saludo */}
      <img src="tu_foto.jpg" alt="Tu foto" className="perfil-imagen" /> {/* Imagen de perfil */}
    </div>
  );
}

export default Inicio; // Exporta el componente Inicio para ser utilizado en otros archivos
