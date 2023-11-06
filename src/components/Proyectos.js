/*
Este código define el componente "Proyectos", que muestra una lista de proyectos laborales y universitarios. 
Cada proyecto está representado como un contenedor (div) que contiene un título (h3), una descripción (p) y un enlace (a) 
que dirige a la página del proyecto correspondiente. Este componente es exportado para su uso en otros archivos y utiliza 
estilos externos definidos en el archivo "Proyectos.css".
*/

import React from 'react';
import './Proyectos.css';

function Proyectos() {
  return (
    <div className="proyectos-container">
      <h2 className="proyectos-titulo">Mis Proyectos Laborales y Universitarios</h2>
      <div className="proyecto">
        <h3>Proyecto 1 - Universitario - Red Social</h3>
        <p>Este proyecto es una red social similar a Instagram que deberá permitir a los usuarios crear su perfil, seguir a otros usuarios, ser seguidos por otros usuarios y además tendrán un muro donde todo lo que el usuario escriba será visible por todos sus seguidores.
        <p>El árbol AVL debe tener todos los usuarios registrados en la aplicación, los perfiles de los usuarios están almacenados aquí.</p>
          Cada usuario tendrá dos tablas hash, una para la lista de amigos seguidos y otra para los seguidores (nótese que este par de tablas es por usuario).
          El muro estará compuesto por las publicaciones de fotos del usuario en una lista doblemente enlazada, esto incluirá publicaciones propias propios y de amigos seguidos.</p>
        <a href="https://github.com/Edy-Esquivel/ProyectoFinalProgra3">Ver más</a>
      </div>
      <div className="proyecto">
        <h3>Proyecto 2 - Universitario - Árboles</h3>
        <p>Es un árbol de búsqueda binario que trata de mantenerlo 
          lo más balanceado posible, conforme se realizan operaciones de inserción y eliminación</p>
          <p>Encontramos muchos ejemplos de árboles en nuestra vida diaria:
            Organización de torneos deportivo,
            Árboles familiares (ascendientes y descendientes),
            Organigramas de corporaciones,
            Procesamiento de lenguaje natural,
            Organización de sistemas de archivos (directorios y archivos).</p>
        <a href="https://github.com/Edy-Esquivel/ArbolesAVL">Ver más</a>
      </div>
      <div className="proyecto">
        <h3>Proyecto 3 - Universitario - Integración Continua</h3>
        <p>ntegración y Despliegue Continuo usando git para manejar ambientes (desarrollo, control de calidad y producción) (ramas DEV, QA, PROD).</p>
        <p>Análisis de código mediante Jenkins y SonarQube.</p>
        <a href="https://github.com/Edy-Esquivel/simple-java-maven-app">Ver más</a>
      </div>
      <div className="proyecto">
        <h3>Proyecto 4 - Laboral - Sistema de Facturación para Zapatería</h3>
        <p>Es un Sistema de Facturacion e Inventarios para tu negocio desarrollado en MEAN. (MONGO, EXPRESS, ANGULAR, NODEJS) y Un Dashboard hecho en Dash.</p>
        <a href="https://github.com/Edy-Esquivel/Factura360">Ver más</a>
      </div>
      <div className="proyecto">
        <h3>Proyecto 5 - Laboral - Implementación de ServiceDesk</h3>
        <p>"Desarrollé y gestioné exitosamente la implementación de un Service Desk integral, optimizando la eficiencia operativa y mejorando la experiencia del usuario. Este proyecto incluyó la creación de un sistema de gestión de incidencias, la configuración de flujos de trabajo, y la provisión de soporte técnico, 
          resultando en una mejora significativa en la resolución de problemas y en la satisfacción del cliente."</p>
        <a href="enlace_al_proyecto_5">Ver más</a>
      </div>
    </div>
  );
}

export default Proyectos;
