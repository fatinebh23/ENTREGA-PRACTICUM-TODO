import React, { Component } from 'react'
import { Navigate } from 'react-router-dom';

import check from "./img/check-admin.jpg";
import crudcursos from "./img/crud-cursos.png";
import crudcentros from "./img/crud-centros.png";

export default class IndexAdmin extends Component {
  constructor(props) { // Constructor del componente
    super(props); // Llama al constructor de la clase padre (Component)
    const udata = localStorage.getItem('user'); // Obtiene los datos del usuario del localStorage
    const odata = JSON.parse(udata); // Convierte los datos del usuario a formato JSON

    let loggedIN = true; // Inicializa la variable loggedIN como verdadera
    if (udata == null) { // Si no hay datos de usuario en el localStorage
      loggedIN = false; // Establece loggedIN como falso
    }
    // Inicializa el estado del componente con los datos del usuario y su estado de inicio de sesión
    this.state = {
      user: (odata) ? odata.user : '', // Nombre de usuario
      loggedIN // Estado de inicio de sesión
    };
  }

  logout() { // Método para cerrar sesión
    localStorage.clear(); // Borra todos los datos del localStorage
    window.location.href = "/sign-in"; // Redirige a la página de inicio de sesión
  }
  render() {
    if(this.state.loggedIN === false){
      return  <Navigate to="/index" />
    }
    return (
        <div>
          <section class="s-bloq-1">
            <div class="rounded-4 m-2">
              <div class="container">
                <div class="row">
                  <div class="col-12">
                    {/*<h2 class="text text-success px-4">¡ BIENVENIDA&nbsp;
                    <span className="text-danger">{this.state.user.name} !</span></h2>*/}
                    <hr></hr>
                    <h1 class="text2-shadow d-flex justify-content-center text2-shadow wow animate__fadeInUp" data-wow-duration="2s">"Portal de Administración."</h1>

                    <hr></hr>
                  </div>
                </div>
                  <div class="container">
                    <div class="row py-3">
                      <div class="col-lg-6 col-12 p-lg-4 wow animate__backInLeft" data-wow-duration="2s">
                      <a href="/" class="link">
                        <div class="cardindex shadow text-center">
                        <img src={check} alt="check" width="50%" height="auto"/>
                          <div class="card-body py-4 wow animate__backInLeft" data-wow-duration="2s">
                            <h3 class="card-title s-bloq-4-text-tittle">Empresas</h3>
                            <p class="card-text s-bloq-4-text pt-3">Validar empresas registradas</p>
                          </div>
                        </div>
                      </a>
                    </div>
                  <div class="col-lg-6 col-12 p-lg-4 wow animate__backInRight" data-wow-duration="2s">
                        <a href="/" class="link">
                          <div class="cardindex shadow text-center">
                            <img src={crudcursos} alt="cursos" width="70%" height="auto"/>
                              <div class="card-body py-4 wow animate__backInRight" data-wow-duration="2s">
                                <h3 class="card-title s-bloq-4-text-tittle py-2">Cursos</h3>
                                <p class="card-text s-bloq-4-text">Operaciones CRUD cursos</p>
                          </div>
                        </div>
                      </a>
                    </div>
                  <div class="col-lg-6 offset-lg-3 col-12 p-lg-4 wow animate__backInLeft" data-wow-duration="2s">
                      <a href="/" class="link">
                        <div class="cardindex shadow text-center">
                        <img src={crudcentros} alt="centros" width="50%" height="auto"/>
                          <div class="card-body p-3 wow animate__backInLeft" data-wow-duration="2s">
                            <h3 class="card-title s-bloq-4-text-tittle py-3">Centros</h3>
                            <p class="card-text s-bloq-4-text">Operaciones CRUD centros</p>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
       </div>
    )
  }
}
