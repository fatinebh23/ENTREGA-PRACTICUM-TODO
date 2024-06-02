import React from 'react';
import axios from 'axios';
import {BASEPATH} from "../utils/constant"

class ListaEstudiantes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      sectors: [],
      sector: '',
      filtro: ''
    };
  }

  loadList = () => {
    const { filtro, sector} = this.state;


    axios.post(BASEPATH + '/api/users/search', {
      search: filtro,
      sector,
    })
      .then(response => {
        // Actualizar el estado con los datos de la API
        this.setState({ users: response.data.results });
      })
      .catch(error => {
        console.error('Error al obtener los perfiles:', error);
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

  componentDidMount() {
    // Realizar una solicitud a la API
    this.loadList();
    this.loadSectors();
  }

  handleFiltroChange = (event) => {
    this.setState({ filtro: event.target.value });
  }

  handleSectorChange = (event) => {
    this.setState({ sector: event.target.value });
  }

  render() {
    const { users, sectors, filtro } = this.state;

    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1>Perfiles de Estudiantes</h1>
            <input
              type="text"
              className="search-input"
              placeholder="Buscar..."
              value={filtro}
              onChange={this.handleFiltroChange}
            />
              </div>
              <div className="col-12">
              <select className="filter-select" onChange={this.handleSectorChange} >
              <option value="">Filtrar por sector</option>
              {sectors.map(s => (
                <option value={s.id} >{s.name}</option>
              ))}
            </select>
            </div>
            <button className="search-button" onClick={this.loadList} >Buscar</button>
            <section className="py-5">
          <div className="container-fluid">
            <div className="row">
              {users.map(user => (
                <div className="col-12 col-lg-6" key={user.id}>
                  <div className="cardindex mb-4">
                    <div className="card-body">
                      <h3 className="card-title">{user.name}</h3>
                      <hr />
                      <p className="card-text"><strong>Email: </strong>{user.email}</p>
                      <p className="card-text"><strong>Centro educativo: </strong>{user.center_id}</p>
                      <p className="card-text"><strong>Curso: </strong>{user.course_id}</p>
                      <p className="card-text"><strong>Edad: </strong>{user.age}</p>
                      <p className="card-text"><strong>Sector: </strong>{user.sector_id}</p>
                      <p className="card-text"><strong>Descripción: </strong>{user.description}</p>
                      <button href="/" type="submit" className="btn purple-button my-2">Enviar mensaje</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        </div>
      </div>
    );
  }
}

export default ListaEstudiantes;
