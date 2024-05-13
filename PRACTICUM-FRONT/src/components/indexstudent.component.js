import React, { Component } from 'react'
import { Navigate } from 'react-router-dom';

import oferta from "./img/empresa-contrato.jpeg";
import cv from "./img/cv-perfil.jpeg";

export default class IndexUser extends Component {
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
  logout(){
  localStorage.clear()
  window.location.href = "/sign-in"
}
 
  render() {
    if(this.state.loggedIN === false){
      return  <Navigate to="/indexstudent" />
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
                <h1 class="text2-shadow d-flex justify-content-center">"Encuentra la práctica ideal para impulsar tu carrera profesional."</h1>
                <hr></hr>
              </div>
            </div>
          <div class="container">
            <div class="row py-3">
              <div class="col-lg-6 col-12 p-lg-4">
                <a href="/offert" class="link">
                  <div class="cardindex shadow text-center">
                    <img src={oferta} alt="bg" width="60%" height="auto"/>
                      <div class="card-body py-3">
                        <h3 class="card-title s-bloq-4-text-tittle py-4">Ofertas</h3>
                          <p class="card-text s-bloq-4-text">Ver todas las ofertas publicadas por las empresas</p>
                      </div>
                    </div>
                  </a>
                </div>
          <div class="col-lg-6 col-12 p-lg-4">
            <a href="/postprofile" class="link">
              <div class="cardindex shadow text-center">
                <img src={cv} alt="bg" width="60%" height="auto"/>
                  <div class="card-body py-3">
                    <h3 class="card-title s-bloq-4-text-tittle py-4">Publicar perfil</h3>
                    <p class="card-text s-bloq-4-text">Rellenar el formulario con tus datos</p>
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
