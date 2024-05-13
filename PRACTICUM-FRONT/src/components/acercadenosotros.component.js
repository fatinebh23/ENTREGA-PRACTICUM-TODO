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
                      Nuestra plataforma nació de la necesidad de simplificar la búsqueda y organización de prácticas profesionales para estudiantes...
                    </p>
                  </div>
                  <div className="col-lg-5 offset-1"> {/* Columna para imagen */}
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
                    <div class="cardindex">
                      <img src={fatine} class="card-img-top-team rounded-circle" alt="Equipo 1"></img>
                      <div class="card-body">
                        <h4 class="card-title">Fatine</h4>
                        <p class="card-text">CEO</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-4 mb-4">
                    <div class="cardindex">
                      <img src={claudia} class="card-img-top-team rounded-circle" alt="Equipo 2"></img>
                      <div class="card-body">
                        <h4 class="card-title">Claudia</h4>
                        <p class="card-text">CEO</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-4 mb-4">
                    <div class="cardindex">
                      <img src={patri} class="card-img-top-team rounded-circle" alt="Equipo 3"></img>
                      <div class="card-body">
                        <h4 class="card-title">Patricia</h4>
                        <p class="card-text">CEO</p>
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
