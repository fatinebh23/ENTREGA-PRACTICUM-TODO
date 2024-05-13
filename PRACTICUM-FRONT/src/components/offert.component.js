import React from 'react';
import axios from 'axios';
import {BASEPATH} from "../utils/constant"

class ListaOfertas extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      offerts: [],
    };
  }

  componentDidMount() {
    // Realizar una solicitud a la API
    axios.get(BASEPATH + '/api/offerts')
      .then(response => response.json())
      .then(data => {
        // Actualizar el estado con los datos de la API
        this.setState({ offerts: data });
      })
      .catch(error => {
        console.error('Error al obtener las ofertas:', error);
      });
  }

  handleFiltroChange = (event) => {
    this.setState({ filtro: event.target.value });
  }

  render() {
    const { offerts, filtro } = this.state;
    const offertsFiltradas = offerts.filter(offerts =>
      offerts.titulo.toLowerCase().includes(filtro.toLowerCase())
    );

    return (
      <div className="container" >
          <div className="row" >
            <div className="col-12" >
              <h1>Ofertas Actuales</h1>
              <input type="text" class="search-input" placeholder="Buscar..."></input>
              </div>
              <div className="col-6">
              <select class="filter-select">
              <option value="">Filtrar por sector</option>
              <option value="opcion1">Poner sectores</option>
            </select>
            <button class="search-button">Buscar</button>
            </div>
            <div className="col-6">
              <select class="filter-select">
              <option value="">Filtrar por provincia</option>
              <option value="opcion1">Poner provincias</option>
            </select>
            <button class="search-button">Buscar</button>
            </div>
              <ul>
                {offertsFiltradas.map(offerts => (
                  <li key={offerts.id}>
                    <h2>{offerts.titulo}</h2>
                    <p>{offerts.location}</p>
                  </li>
                ))}
              </ul>
            </div>
        <section class="py-5">
          <div class="container-fluid">
            <div class="row">
              <div class="col-12">
                <div class="cardindex mb-4">
                  <div class="card-body">
                    <h5 class="card-title">Oferta 1</h5>
                    <p class="card-text">Descripción</p>
                    <button href="/" type="submit" class="btn purple-button my-2">Inscribirse</button>
                  </div>
                </div>
              </div>
              <div class="col-12">
                <div class="cardindex mb-4">
                  <div class="card-body">
                    <h5 class="card-title">Oferta 2</h5>
                    <p class="card-text">Descripción</p>
                    <button href="/" type="submit" class="btn purple-button my-2">Inscribirse</button>
                  </div>
                </div>
              </div>
              <div class="col-12">
                <div class="cardindex mb-4">
                  <div class="card-body">
                    <h5 class="card-title">Oferta 3</h5>
                    <p class="card-text">Descripción</p>
                    <button href="/" type="submit" class="btn purple-button my-2">Inscribirse</button>
                  </div>
                </div>
              </div>
            </div>
        </div>
    </section>
  </div>
    );
  }
}

export default ListaOfertas;