import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MapContainer from './MapContainer.component';

import contacto from './img/contacto.jpeg';

class Contacto extends React.Component {

  render() {

    return (
      <div className="container" >
        <div className="row" >
          <div className="col-12" >
            <section id="contacto">
              <div class="container d-flex text-center">
                <div class="row">
                  <h2 class="display-4 mb-5 text-shadow-poco">Contacto</h2>
                  <div class="col-12">
                    <ul class="list-unstyled">
                      <p>Para cualquier consulta, no dudes en contactarnos.</p>
                      <li>
                      <svg class="icono m-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" width="20" height="20"><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/></svg>
                        <strong>Teléfono:</strong> +34 966 981 504</li>
                      <li>
                      <svg class="icono m-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" width="20" height="20"><path d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"/></svg>
                      <strong>Email:</strong> contact@mypracticum.es</li>
                    </ul>
                  </div>
                  <div class="col-lg-4 col-12">
                    <img src={contacto} class="img-fluid d-flex" width="100%" height="auto"></img>
                  </div>
                  <div class="col-lg-6 offset-1 col-12">
                    <form>
                      <div class="form-group my-4">
                        <label for="nombre">Nombre:</label>
                        <input type="text" class="form-control" id="nombre" placeholder="Escriba su nombre"></input>
                      </div>
                      <div class="form-group my-4">
                        <label for="email">Email:</label>
                        <input type="email" class="form-control" id="email" placeholder="Escriba su email"></input>
                      </div>
                      <div class="form-group my-4">
                        <label for="mensaje">Mensaje:</label>
                        <textarea class="form-control" id="mensaje" rows="5" placeholder="Escriba su mensaje"></textarea>
                      </div>
                      <button type="submit" class="btn purple-button my-2">Enviar Mensaje</button>
                    </form>
                    </div>
                  <div class="col-12 position-relative mt-5" style={{height: "400px"}}>
                  <MapContainer />
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

export default Contacto;
