import React from 'react';

class ListaEstudiantes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      estudiantes: [],
      filtro: ''
    };
  }

  /*componentDidMount() {
    fetch('https://randomuser.me/api/?results=8') 
      .then(response => response.json())
      .then(data => {
        const estudiantes = data.results.map((user, index) => ({
          id: index,
          nombre: `${user.name.first} ${user.name.last}`,
          edad: user.dob.age,
          sector: user.location.city,
          descripcion: `Género: ${user.gender}`,
          foto: user.picture.large // URL de la foto grande del usuario
        }));
        this.setState({ estudiantes });
      })
      .catch(error => console.error('Error fetching data:', error));
  }*/

  handleFiltroChange = (event) => {
    this.setState({ filtro: event.target.value });
  }

  render() {
    const { estudiantes, filtro } = this.state;
    const estudiantesFiltrados = estudiantes.filter(estudiante =>
      estudiante.nombre.toLowerCase().includes(filtro.toLowerCase())
    );

    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1>Perfiles de Estudiantes</h1>
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
              <option value="">Filtrar por edad</option>
              <option value="opcion1">Poner provincias</option>
            </select>
            <button class="search-button">Buscar</button>
            </div>
            <section class="py-5">
          <div class="container-fluid">
            <div class="row">
              <div class="col-12">
                <div class="cardindex mb-4">
                  <div class="card-body">
                    <h5 class="card-title">Estudiante 1</h5>
                    <p class="card-text">Descripción</p>
                    <button href="/" type="submit" class="btn purple-button my-2">Enviar Mensaje</button>
                  </div>
                </div>
              </div>
              <div class="col-12">
                <div class="cardindex mb-4">
                  <div class="card-body">
                    <h5 class="card-title">Estudiante 2</h5>
                    <p class="card-text">Descripción</p>
                    <button href="/" type="submit" class="btn purple-button my-2">Enviar Mensaje</button>
                  </div>
                </div>
              </div>
              <div class="col-12">
                <div class="cardindex mb-4">
                  <div class="card-body">
                    <h5 class="card-title">Estudiante 3</h5>
                    <p class="card-text">Descripción</p>
                    <button href="/" type="submit" class="btn purple-button my-2">Enviar Mensaje</button>
                  </div>
                </div>
              </div>
            </div>
        </div>
    </section>
          </div>
        </div>
    );
  }
}

export default ListaEstudiantes;
