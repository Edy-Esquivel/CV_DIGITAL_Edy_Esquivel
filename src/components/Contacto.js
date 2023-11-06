import React from 'react'; // Importa la biblioteca React
import './Contacto.css'; // Importa los estilos del componente

function Contacto() {
  // Componente funcional Contacto
  return (
    <div className="contacto-container"> {/* Contenedor principal del formulario */}
      <h2 className="contacto-titulo">Contacto</h2> {/* Título del formulario */}
      <form className="formulario"> {/* Formulario */}
        <div className="campo-formulario"> {/* Campo del formulario para el Nombre */}
          <label>Nombre:</label> {/* Etiqueta del campo Nombre */}
          <input type="text" /> {/* Campo de entrada de texto para el Nombre */}
        </div>
        <div className="campo-formulario"> {/* Campo del formulario para el Correo Electrónico */}
          <label>Correo Electrónico:</label> {/* Etiqueta del campo Correo Electrónico */}
          <input type="email" /> {/* Campo de entrada de texto para el Correo Electrónico */}
        </div>
        <div className="campo-formulario"> {/* Campo del formulario para el Mensaje */}
          <label>Mensaje:</label> {/* Etiqueta del campo Mensaje */}
          <textarea></textarea> {/* Campo de texto multi-línea para el Mensaje */}
        </div>
        <button>Enviar</button> {/* Botón de envío del formulario */}
      </form>
    </div>
  );
}

export default Contacto; // Exporta el componente Contacto para ser utilizado en otros archivos
