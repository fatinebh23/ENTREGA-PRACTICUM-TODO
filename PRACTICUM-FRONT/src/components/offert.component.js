import React from 'react';
import axios from 'axios';
import {BASEPATH} from "../utils/constant"

class ListaOfertas extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      offerts: [],
      sectors: [],
      sector: '',
      provinces: [],
      province: '',
      filtro: '',
    };
  }

  loadList = () => {
    const { filtro, sector, province } = this.state;


    axios.post(BASEPATH + '/api/offerts/search', {
      search: filtro,
      sector,
      province
    })
      .then(response => {
        // Actualizar el estado con los datos de la API
        this.setState({ offerts: response.data.results });
      })
      .catch(error => {
        console.error('Error al obtener las ofertas:', error);
      });
  }

  loadSectors = () => {
    axios.get(BASEPATH + '/api/sectors')
      .then(response => {
        // Actualizar el estado con los datos de la API
        this.setState({ sectors: response.data.sectors });
      })
      .catch(error => {
        console.error('Error al obtener los sectores:', error);
      });
  }

  loadProvinces = () => {
    axios.get(BASEPATH + '/api/provinces')
      .then(response => {
        // Actualizar el estado con los datos de la API
        this.setState({ provinces: response.data.provinces });
      })
      .catch(error => {
        console.error('Error al obtener las provincias:', error);
      });
  }

  componentDidMount() {
    // Realizar una solicitud a la API
    this.loadList();
    this.loadSectors();
    this.loadProvinces();
  }

  handleFiltroChange = (event) => {
    this.setState({ filtro: event.target.value });
  }

  handleSectorChange = (event) => {
    this.setState({ sector: event.target.value });
  }

  handleProvinceChange = (event) => {
    this.setState({ province: event.target.value });
  }

  render() {
    const { offerts, filtro, sectors, provinces } = this.state;

    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1>Ofertas Actuales</h1>
            <input
              type="text"
              className="search-input"
              placeholder="Buscar..."
              value={filtro}
              onChange={this.handleFiltroChange}
            />
          </div>
          <div className="col-6">
            <select className="filter-select" onChange={this.handleSectorChange} >
              <option value="">Filtrar por sector</option>
              {sectors.map(s => (
                <option value={s.id} >{s.name}</option>
              ))}
            </select>
          </div>
          <div className="col-6">
            <select className="filter-select" onChange={this.handleProvinceChange}>
              <option value="">Filtrar por provincia</option>
              {provinces.map(p => (
                <option value={p.id} >{p.name}</option>
              ))}
            </select>
          </div>
          <button className="search-button" onClick={this.loadList} >Buscar</button>
        </div>
        <section className="py-5">
          <div className="container-fluid">
            <div className="row">
              {offerts.map(offert => (
                <div className="col-12 col-lg-6" key={offert.id}>
                  <div className="cardindex mb-4">
                    <div className="card-body">
                      <h3 className="card-title">{offert.title}</h3>
                      <hr />
                      <p className="card-text"><strong>Nombre de la empresa: </strong>{offert.name}</p>
                      <p className="card-text"><strong>Sector: </strong>{offert.sector}</p>
                      <p className="card-text"><strong>Fechas: </strong>{offert.dates}</p>
                      <p className="card-text"><strong>Horario: </strong>{offert.schedule}</p>
                      <p className="card-text"><strong>Número de vacantes: </strong>{offert.vacancies}</p>
                      <p className="card-text"><strong>Remuneración: </strong>{offert.remun}</p>
                      <p className="card-text"><strong>Provincia: </strong>{offert.provincia}</p>
                      <p className="card-text"><strong>Descripción: </strong>{offert.description}</p>
                      <button href="/" type="submit" className="btn purple-button my-2">Inscribirse</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default ListaOfertas;