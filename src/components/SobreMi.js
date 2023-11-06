import React from 'react';
import './SobreMi.css'; // Archivo de estilos para SobreMi

function SobreMi() {
  return (
    <div className="sobre-mi-container">
      <h2 className="sobre-mi-titulo">Sobre Mí</h2>
      <div className="imagen-container">
        <img src="tu_foto.jpg" alt="Tu foto" className="perfil-imagen" />
      </div>
      <div className="seccion">
        <h3>Formación Profesional</h3>
        <p>Soy un profesional,enfocado en el análisis y soporte de nuevos procesos, 
        sistemas, hardware y aplicaciones en general, 
        basados en un portafolio robusto de proyectos internos y externos tanto pasivos como activos. 
        Enfocado en el Aseguramiento de la calidad y continuidad de los mismos. 
        Apasionado por los logros en equipo y altas habilidades de adaptación con base a los objetivos de la empresa.
        </p>
        <p>Estudiante de Ingeniería en sistemas.
          ene 2020 - presente
          Universidad Mariano Gálvez de Guatemala, Campus Central.
          Actualmente Cursando el 10mo. Ciclo de la carrera de Ingeniería en sistemas.
        </p>
        <p>Soy Administrador de Base de Datos SQL Server.
          Universidad Galileo, Guatemala.
        </p>
        <p>Cisco - CCNA.
          Universidad Galileo, Guatemala.
          4 de 4 módulos cursados para certificación
        </p>
      </div>
      <div className="seccion">
        <h3>Experiencia Laboral</h3>
        <p>
        Analizar y brindar soporte a cada uno de los procesos internos asociados con el funcionamiento técnico y operativo de las aplicaciones core y web.
        Brindar apoyo a los usuarios internos, a nivel de flujo operativo con administración interna de los datos que se emplean en los sistemas y aplicaciones.
        Documentar procesos y procedimientos utilizados para solucionar problemas y mantener un registro de todas las actualizaciones y correcciones que se han aplicado y se necesiten implementar
        Gestión de base de datos Oracle, SQL Server, PostgreSQL, en la estructura de los procedimientos, datos y relaciones aplicando PL/SQL.
        Aseguramiento de la continuidad de las operaciones siendo el vínculo con proveedores, y áreas internas enfocadas a los servicios tecnológicos.
        Emplear funciones de administración y supervisión de los sistemas, para la gestión de los recursos de un sistema informático y la interacción con otros sistemas utilizando tecnologías de desarrollo orientadas a objetos.
        Trabajo constante para el diagnóstico y la solución, de dificultades y problemas con el software, hardware, equipos periféricos, bases de datos e internet, asegurando también la disponibilidad, orientación y apoyo en el despliegue, instalación y mantenimiento de tecnologías de la información.
        </p>
        <p>Ser el primer punto de contacto entre el usuario y la empresa, particularmente entre los empleados sobre un producto o servicio tecnológico específico bajo las mejores prácticas de ITIL.
          Brinda soporte a los usuarios y colaboradores para que desarrollen sus tareas sin inconvenientes. Además, realizar análisis constantes para descubrir incidencias recurrentes y establecer métodos que las resuelvan en el menor tiempo posible, o incluso, antes de que ocurran.
          Brindar soporte técnico a los usuarios finales.
          Investigar y ayudar a resolver problemas con software de proveedores y sistemas empresariales.
          Brindar soporte a los usuarios finales y mediar entre estos y los equipos de IT y de desarrollado.
          Supervisar la seguridad de los usuarios y el sistema en el cual se desempeñan.
          Brindar soporte fuera del horario laboral.
          Administración de consolas de anti virus y de equipo tecnológico.
        </p>
        <p>
        Encargado de asistir y solucionar todos los problemas técnicos que se pudieran presentar con el hardware y software de la empresa, como área de servicio al cliente que asiste a los empleados que presentan problemas al momento de utilizar un equipo electrónico o informático.
        Instalar y configurar la tecnología a ser empleada en la empresa, es decir, los equipos, sistemas operativos, programas y aplicaciones.
        Realizar el mantenimiento periódico de los equipos y sistemas.
        Brindar asistencia a los empleados o clientes en materia tecnológica.
        Comprender el problema y su causa.
        Solucionar el problema de forma remota o en sitio.
        Explicar el problema a los miembros del equipo o el cliente.
        Detectar las averías en los sistemas y aplicaciones:
        Realizar diagnósticos del malfuncionamiento del hardware y el software.
        Encontrar soluciones a cualquier falla e implementarlas.
        Reemplazar las partes dañadas o con averías en los equipos cuando fuera necesario.
        </p>
      </div>
      <div className="seccion">
        <h3>Cursos</h3>
        <p>Gestión de servicios con ITIL</p>
        <p>Administración de Consolas de Anti Virus - SISAP</p>
        <p>Programación con Arduino y python Online</p>
        <p>Linux para administración de Servidores </p>
        <p>SCRUM study - Fundamentos de SCRUM - metodologías ágiles</p>
      </div>
      <div className="seccion">
        <h3>Pasatiempos</h3>
        <p>Actividades al aire libre.</p>
        <p>Leer sobre tecnología.</p>
        <p>Aprender más sobre el ajedrez</p>
      </div>
    </div>
  );
}

export default SobreMi;
