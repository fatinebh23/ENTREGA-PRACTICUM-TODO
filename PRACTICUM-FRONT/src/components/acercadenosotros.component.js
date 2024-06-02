import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import nosotros from './img/nosotros.png';
import fatine from "./img/fatine.png";
import claudia from "./img/claudia.png";
import patri from "./img/patri.png";

class AcercaDeNosotros extends React.Component {

  render() {// Método render(), obligatorio en clases de componentes de Reac

    return (
      <div className="container" > {/* Contenedor principal */}
        <div className="row" > {/* Fila dentro del contenedor */}
          <div className="col-12" > {/* Columna dentro de la fila */}

            {/* Sección "Sobre Nosotros" */}
            <section id="sobre-nosotros"> {/* Sección "Sobre Nosotros" */}
              <div className="container-fluid py-5"> {/* Contenedor fluido */}
                <div className="row"> {/* Fila dentro del contenedor */}
                  <div className="col-lg-6"> {/* Columna para texto */}
                    <h2 className="display-4 mb-5 text-shadow-poco">Sobre Nosotros</h2> {/* Título */}
                    <p className="lead py-3"> {/* Párrafo de texto */}
                      La idea de negocio surge de la dificultad de encontrar empresas para prácticas Duales en el primer curso, ya que no había una plataforma centralizada para ver las ofertas disponibles. Esta necesidad se acentuó por una experiencia negativa vivida por una alumna, que tuvo problemas con la oferta y el ambiente de trabajo, resultando en ansiedad y la ruptura del contrato. Esto evidenció la falta de organización y apoyo en el proceso de prácticas.

                      La propuesta es crear una página web que facilite la búsqueda y gestión de prácticas, mejorando la conexión entre estudiantes y empresas. Esta plataforma ayudaría tanto a profesores como a alumnos, y podría desarrollarse como nuestro Trabajo de Fin de Grado Superior (TFGS), aportando un componente educativo y práctico al proyecto. La idea se presentó en un certamen organizado por el CEEI de Castellón.
                    </p>
                  </div>
                  <div className="col-lg-5 offset-1 wow animate__backInRight" data-wow-duration="2s"> {/* Columna para imagen */}
                    <img src={nosotros} alt="Sobre Nosotros" className="img-fluid pt-0" width="100%" height="auto"></img> {/* Imagen */}
                  </div>
                </div>
              </div>
            </section>
            <section id="vision">
              {/* Sección "Nuestra Visión" */}
              <div class="container py-5">
                <div class="row">
                  <div class="col-12 py-lg-5 p-5">
                    <h3 class="display-4 mb-4 py-3 d-flex justify-content-center text-shadow-poco">Nuestra Visión</h3>
                    <p class="lead text-center">En Practicum, nos enorgullece forjar un camino hacia un futuro laboral más inclusivo y dinámico.
                      Nuestra visión se fundamenta en la creencia de que cada estudiante merece una oportunidad justa y significativa
                      para desarrollar su potencial y contribuir al mundo laboral de manera significativa. Nos esforzamos por ser líderes
                      en la creación de un ecosistema educativo y laboral que fomente la igualdad de oportunidades y el desarrollo profesional
                      continuo. Buscamos inspirar y empoderar a estudiantes de todas las trayectorias y orígenes, conectándolos con empresas
                      innovadoras que valoran el talento y la diversidad. A través de la excelencia, la colaboración y la innovación
                      constante, aspiramos a trascender los límites tradicionales de la educación y la inserción laboral,
                      creando un futuro en el que el éxito sea accesible para todos.
                    </p>
                  </div>
                </div>
              </div>
            </section>
            {/* Sección "Nuestros Valores" */}
            <section id="valores">
              <div class="container py-3">
                <div class="row">
                  <div class="col-12 py-lg-5 p-3">
                    <h3 class="display-4 mb-4 py-3 d-flex justify-content-center text-shadow-poco">Nuestros Valores</h3>
                    <ul class="list-unstyled">
                      <li class="mb-3">
                        Transparencia: Operamos con honestidad y claridad en todas nuestras interacciones, promoviendo la confianza y la credibilidad.
                      </li>
                      <li class="mb-3">
                        Compromiso con la calidad: Buscamos la excelencia en cada aspecto de nuestra plataforma, desde la interfaz del usuario hasta la calidad de las oportunidades ofrecidas.
                      </li>
                      <li class="mb-3">
                        Innovación: Fomentamos la creatividad y la innovación constante para adaptarnos a las cambiantes necesidades del mercado y proporcionar soluciones efectivas.
                      </li>
                      <li class="mb-3">
                        Colaboración: Valoramos las relaciones sólidas con instituciones educativas, empresas y la comunidad, reconociendo que el éxito se logra mejorando juntos.
                      </li>
                      <li class="mb-3">
                        Empatía: Nos esforzamos por comprender las necesidades y expectativas de nuestros usuarios, mostrando empatía en cada interacción.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
            {/* Sección "Equipo" */}
            <section id="equipo">
              <div class="container py-5">
                <h2 class="display-4 text-center mb-5 text-shadow-poco">Equipo</h2>
                <div class="row">
                  <div class="col-lg-4 mb-4">
                    <div class="cardindex wow animate__fadeInUp" data-wow-duration="2s">
                      <img src={fatine} class="card-img-top-team rounded-circle" alt="Equipo 1"></img>
                      <div class="card-body">
                        <h4 class="card-title">Fatine</h4>
                        <p class="card-text">CEO</p>
                        <p class="card-text">Hola, soy Fatine Bouhrich Hmidi, estudiante de Desarrollo de Aplicaciones Web en el IES Álvaro Falomir. Al terminar Bachillerato decidí estudiar una FP de informática. Con habilidades en JAVA, HTML, CSS, JavaScript y en crear interfaces atractivas.
                          Durante este curso académico, experimenté las dificultades que muchos enfrentamos al buscar prácticas valiosas. Con Practicum, queremos eliminar esas barreras y conectar a estudiantes con oportunidades que impulsen su crecimiento profesional.

                        </p>
                        <a class="nav-link" href="https://www.linkedin.com/in/fatine-bouhrich-180458262/">
                          <svg class="icono mt-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" width="50" height="50">
                            <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" /></svg>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-4 mb-4">
                    <div class="cardindex wow animate__fadeInUp" data-wow-duration="2.5s">
                      <img src={claudia} class="card-img-top-team rounded-circle" alt="Equipo 2"></img>
                      <div class="card-body">
                        <h4 class="card-title">Claudia</h4>
                        <p class="card-text">CEO</p>
                        <p class="card-text">Hola, soy Claudia Marzá, estudiante de Desarrollo de Aplicaciones Web en el IES Álvaro Falomir. Al acabar bachiller me anime a estudiar oposiciones de Policía Local, estuve unos años y me di cuenta de que no era lo mío, entonces,  decidí estudiar este grado superior. Siempre estoy dispuesta a aprender tecnologías emergentes, considerando estas experiencias como valiosas contribuciones a mi crecimiento profesional.
                          En cuanto al plan de empresa, nos enfocaremos en cubrir las necesidades de los estudiantes y las empresas para evitar ciertos problemas que hay en la actualidad.
                        </p>
                        <a class="nav-link" href="https://www.linkedin.com/in/claudia-marza-83b1882a9/">
                          <svg class="icono mt-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" width="50" height="50">
                            <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" /></svg>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-4 mb-4">
                    <div class="cardindex wow animate__fadeInUp" data-wow-duration="2s">
                      <img src={patri} class="card-img-top-team rounded-circle" alt="Equipo 3"></img>
                      <div class="card-body">
                        <h4 class="card-title">Patricia</h4>
                        <p class="card-text">CEO</p>
                        <p class="card-text">Hola, soy Patricia Pallarés González, estudiante de Desarrollo de Aplicaciones Web en el IES Álvaro Falomir. Tras graduarme en Marketing por la UEV y vivir tres años en el Reino Unido decidí dar un giro a mi vida y estudiar programación.
                          Durante estos dos años he aprendido los fundamentos de la programación, la gestión de bases de datos y la creación de interfaces atractivas. He visto en este proyecto una oportunidad para refrescar mis conocimientos de marketing y desarrollar una idea que me parece genuinamente relevante.
                        </p>
                        <a class="nav-link" href="https://www.linkedin.com/in/patriciapallaresgonzalez/">
                          <svg class="icono mt-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" width="50" height="50">
                            <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" /></svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    );
  }
}

export default AcercaDeNosotros;
