import React, { Component } from 'react';
import '../home.css';

import logoname from "./img/logo-name.png";
import header from "./img/header.jpeg";
import home1 from "./img/home-1.png";
import home2 from "./img/home-2.jpeg";
import home3 from "./img/home-3.png";
import home4 from "./img/home-4.png";
import home5 from "./img/home-5.png";
import cliente1 from "./img/cliente1.png";
import cliente2 from "./img/cliente2.png";
import cliente3 from "./img/cliente3.png";



export default class Home extends Component {

  render() {

    return (
      <div>
      <section class="s-bloq-1 overflow-hidden wow animate__fadeInUp" data-wow-duration="2s">
        <div class="container">
          <div class="row">
        <div class="col-12">
          <div class="row">
            <div class="col-lg-6 offset-lg-1 position-absolute">
              <img src={logoname} class="img-fluid" width="100%" height="auto"></img>
            </div>
          <div class="col-12">
            <img src={header} class="img-fluid" width="100%" height="auto"></img>
          </div>
        {/*<p class="s-introduccion-text text-center">Practicum se erige como el puente hacia un horizonte lleno de oportunidades profesionales en la 
        provincia de Castellón. Con una plataforma innovadora, nuestra misión es conectar de manera eficiente a estudiantes de Formación Profesional con
       empresas locales, facilitando encuentros que no solo fomentan el crecimiento personal, sino que también impulsan el desarrollo profesional. Creemos 
       firmemente en el poder de la educación práctica y en la importancia de la experiencia laboral temprana. Nuestra plataforma, diseñada para ser 
       intuitiva y de fácil manejo, permite a los estudiantes explorar ofertas de prácticas, crear perfiles profesionales y establecer conexiones 
       directas con empresas locales. Del mismo modo, las empresas pueden publicar ofertas de prácticas, buscar perfiles de estudiantes y 
       encontrar el talento idóneo para sus necesidades. Únete a Practicum hoy mismo y emprende tu viaje hacia el éxito profesional. 
    Descubre nuevas oportunidades, desarrolla tus habilidades y haz crecer tu carrera con nosotros.</p>*/}
          <div class="col-12 wow animate__fadeInUp" data-wow-duration="2s">
          <h4 class="text-eslogan text-center py-3">"Encuentra la práctica ideal para impulsar tu carrera profesional."</h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<section class="s-bloq-3 p-lg-5 py-5 my-5">
<div class="s-bloq-3-bg p-5 mx-lg-5 mx-1 rounded-4 overflow-hidden">
    <div class="container-fluid d-flex">
      <div class="row">
        <div class="col-lg-6 col-12">
          <h3 class="s-bloq-3-bg-text">¿Que ofrecemos?</h3>
          <ul class="list-unstyled py-4">
            <li><p class=" text-white" ><h5>1. Ofertas de prácticas</h5></p></li><br></br>
            <li><p class=" text-white" ><h5>2. Perfiles de estudiantes</h5></p></li>
          </ul>
          <div class="col-12 p-4 mt-5 order-2 order-lg-1 bg-caja d-none d-lg-block">
                <h5>¿Estás buscando nuevas oportunidades para crecer profesionalmente?</h5>
                <p>Descubre prácticas adaptadas a tus intereses y habilidades con Practicum. Conéctate con empresas locales y desarrolla tu potencial en un entorno de aprendizaje práctico. Sea cual sea tu objetivo, ya sea obtener un título técnico o complementar tu formación, aquí encontrarás oportunidades en diversas industrias. ¡Explora y encuentra tu próximo desafío profesional con nosotros!</p>
              </div>
        </div>
        <div class="col-12 col-lg-6 px-lg-4 bg-transparent d-flex order-1 order-lg-2">
                <img src={home1} class="img-fluid" width="90%" height="auto"></img>
              </div>
        </div>
      </div>
  </div>
</section>

<section class="s-bloq-7 py-5">
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 mb-0 overflow-hidden">
        <div class="row">
          <div class="col-lg-4 col-12 order-1 offset-lg-1 d-flex align-items-center">
            <div class="p-2">
              <h3>Conoce nuestro trabajo</h3>
              <p class="text-align-center">En Practicum, conectamos a estudiantes de Formación Profesional con empresas locales para ofrecer prácticas que se adapten a tus intereses y habilidades. ¡Descubre tu próximo desafío profesional!</p>
              {/*<a href="#" class="btn btn-outline-dark rounded-4 my-5">Ver el catálogo</a>*/}
            </div>
          </div>
          <div class="col-lg-6 col-12 order-2 offset-lg-1 px-0 d-flex s-bloq-7-capas wow animate__backInRight" data-wow-duration="2s" >
            <img src={home2} class="img-fluid s-bloq-7-capas-img "></img>
          </div>
        </div>
      </div>
      <div class="col-12">
        <div class="row">
          <div class="col-lg-6 col-12 order-lg-1 order-2 d-flex offset-lg-0 wow animate__backInLeft" data-wow-duration="2s">
            <img src={home3} class="img-fluid" width="100%" height="auto"></img>
          </div>
          <div class="col-lg-4 col-12 offset-lg-1 order-lg-2 order-1 d-flex align-items-center">
              <div class="p-lg-2 py-5 my-5">
                <h3>Da una oportunidad a cada estudiante</h3>
                <p class="text-align-center">Nos dedicamos a ofrecer prácticas que se adaptan a tus necesidades de aprendizaje y desarrollo profesional. Descubre cómo podemos ayudarte a alcanzar tus metas.</p>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12 mb-0">
        <div class="row">
          <div class="col-lg-4 col-12 order-1 offset-lg-1 d-flex align-items-center">
            <div class="p-lg-2 py-5 my-5">
              <h3>Aseguraté de qué és el perfil que buscas para tu empresa</h3>
              <p class="text-align-center"> En nuestro proyecto nos comprometemos a conectar a las empresas con perfiles de estudiantes de Formación Profesional que se ajusten perfectamente a sus necesidades. Nuestra plataforma innovadora facilita esta conexión de manera eficiente, asegurando que encuentres el talento que tu empresa necesita para crecer y prosperar.</p>
              </div>
          </div>
          <div class="col-lg-6 col-12 order-2 offset-lg-1 px-0 pe-0 wow animate__backInRight" data-wow-duration="2s">
            <img src={home4} class="img-fluid" width="100%" height="auto"></img>
          </div>
            </div>
          </div>
        </div>
      </div>
</section>
<section id="mision">
  <div class="container py-5">
    <div class="row">
      <div class="col-12 py-lg-5 p-5">
        <h3 class="display-4 mb-4 text-center text-shadow-poco">Nuestra Misión</h3>
        <p class="lead text-center">En nuestra plataforma, nos comprometemos a proporcionar a estudiantes y empresas una herramienta eficaz y fácil de usar para conectar y encontrar las mejores oportunidades de prácticas profesionales y a ser la principal referencia global en la facilitación de prácticas, transformando y facilitando la transición estudiantil al ámbito laboral. </p>
      </div>
      </div>
      </div>
      </section>

<section id="testimonios" class="py-5">
  <div class="container">
    <h2 class="display-4 text-center mb-5 text-shadow-poco">Testimonios</h2>
    <div class="row justify-content-center">
    <div class="col-lg-4 mb-4">
        <div class="testimonial-card wow animate__fadeInUp" data-wow-duration="2s" >
          <div class="testimonial-img d-flex justify-content-center py-4">
          <img src={cliente1} class="card-img-top-team rounded-circle" alt="Cliente 1"></img>
          </div>
          <div class="testimonial-info py-5">
            <h3>Victoria Martínez</h3>
            <p>Gracias a Practicum, encontré una oportunidad de práctica increíble que me ayudó a desarrollar mis habilidades y obtener experiencia relevante en mi campo. ¡Altamente recomendado!</p>
          </div>
        </div>
      </div>
      <div class="col-lg-4 mb-4 wow animate__fadeInUp" data-wow-duration="2.5s" >
        <div class="testimonial-card" >
          <div class="testimonial-img d-flex justify-content-center py-4">
          <img src={cliente2} class="card-img-top-team rounded-circle" alt="Cliente 2"></img>
          </div>
          <div class="testimonial-info py-4">
            <h3>Fernando García</h3>
            <p>Practicum ha sido una herramienta invaluable para nuestra empresa. Nos ha permitido encontrar talentosos estudiantes de Formación Profesional que se ajustan perfectamente a nuestras necesidades.¡Gracias a Practicum por facilitar este proceso de reclutamiento!</p>
          </div>
        </div>
      </div>
      <div class="col-lg-4 mb-4">
        <div class="testimonial-card wow animate__fadeInUp" data-wow-duration="2s">
          <div class="testimonial-img d-flex justify-content-center py-4">
          <img src={cliente3} class="card-img-top-team rounded-circle" alt="Cliente 3"></img>
          </div>
          <div class="testimonial-info py-4">
            <h3>Marta Pérez</h3>
            <p>Estoy muy impresionado con la calidad del servicio que ofrece Practicum. Gracias a ellos, pude conectar con una empresa que se alinea perfectamente con mis intereses y objetivos profesionales. ¡No puedo agradecerles lo suficiente!</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<section id="faq" className="py-5">
          <div className="container">
            <h2 className="display-4 text-center text-shadow-poco mb-5">Preguntas Frecuentes</h2>
            <div className="accordion" id="faqAccordion">
              <div className="accordion-item">
                <h2 className="accordion-header" id="faqHeadingOne">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faqCollapseOne"
                    aria-expanded="true"
                    aria-controls="faqCollapseOne"
                  >
                    ¿Cómo puedo registrarme en Practicum?
                  </button>
                </h2>
                <div
                  id="faqCollapseOne"
                  className="accordion-collapse collapse show"
                  aria-labelledby="faqHeadingOne"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    Para registrarte en Practicum, simplemente ve a nuestra página de inicio y haz clic en el botón "Registrarse". Luego, sigue los pasos y completa la información requerida.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="faqHeadingTwo">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faqCollapseTwo"
                    aria-expanded="false"
                    aria-controls="faqCollapseTwo"
                  >
                    ¿Cómo puedo buscar ofertas de prácticas?
                  </button>
                </h2>
                <div
                  id="faqCollapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="faqHeadingTwo"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    Puedes buscar ofertas de prácticas utilizando nuestro motor de búsqueda. Simplemente ingresa palabras clave relacionadas con el tipo de práctica que estás buscando y navega por los resultados.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="faqHeadingThree">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faqCollapseThree"
                    aria-expanded="false"
                    aria-controls="faqCollapseThree"
                  >
                    ¿Cómo puedo ponerme en contacto con el equipo de Practicum?
                  </button>
                </h2>
                <div
                  id="faqCollapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="faqHeadingThree"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    Puedes ponerte en contacto con nuestro equipo a través del formulario de contacto en nuestra página web. También puedes enviarnos un correo electrónico a contact@mypracticum.es o llamarnos al +34 966 981 504.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="s-bloq-10 overflow-hidden p-5">
  <div class="container-fluid mt-5">
    <div class="row">
      <div class="col-lg-5 offset-lg-1 col-12 s-bloq-10-rec wow animate__backInLeft" data-wow-duration="2s">
        <div class="py-lg-5 mt-lg-5 p-4">
          <p>¿Necesitas más información?</p>
          <p>Concerta una reunión, una videollamada o envíanos tus consultas</p>
          <a href="/contacto" class="btn btn-outline-light rounded-4 my-5">Contáctanos</a>
    </div>
  </div>
  <div class="col-lg-6 d-flex px-0 wow animate__backInRight" data-wow-duration="2s">
    <img src={home5} class="img-fluid d-none d-lg-block d-flex" width="90%" height="auto"></img>
  </div>
  </div>
  </div>
</section>
</div>
    )
  }
}
