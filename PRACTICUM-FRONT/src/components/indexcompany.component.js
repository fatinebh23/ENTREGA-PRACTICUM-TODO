import React, { Component } from 'react'
import { Navigate } from 'react-router-dom';

import perfil from "./img/alumno-perfil.jpeg";
import oferta from "./img/oferta.jpeg";

export default class IndexCompany extends Component {
  constructor(props) {
    super(props)
    const udata = localStorage.getItem('user')
    const odata = JSON.parse(udata)
    
    let loggedIN = true
    if (udata == null){
      loggedIN = false
    }
    this.state = {
      user : (odata) ? odata.user : '',
      loggedIN
    }
}
 
  render() {
    if(this.state.loggedIN === false){
      return  <Navigate to="/indexcompany" />
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
                    <h1 class="text2-shadow d-flex justify-content-center">"Encuentra el perfil ideal para tu empresa."</h1>
                    <hr></hr>
                  </div>
                </div>
              <div class="container">
                <div class="row py-3">
                  <div class="col-lg-6 col-12 p-lg-4">
                    <a href="/postoffert" class="link">
                      <div class="cardindex shadow text-center">
                        <img src={oferta} alt="bg" width="70%" height="auto"/>
                          <div class="card-body py-2">
                            <h3 class="card-title s-bloq-4-text-tittle py-2">Publicar oferta</h3>
                            <p class="card-text s-bloq-4-text">Rellenar el formulario con tus datos</p>
                          </div>
                        </div>
                      </a>
                    </div>
                <div class="col-lg-6 col-12 p-lg-4">
                    <a href="/profile" class="link">
                      <div class="cardindex shadow text-center">
                        <img src={perfil} alt="bg" width="100%" height="auto"/>
                          <div class="card-body py-2">
                            <h3 class="card-title s-bloq-4-text-tittle py-3">Perfiles</h3>
                            <p class="card-text s-bloq-4-text">Ver todos los perfiles de los estudiantes</p>
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
