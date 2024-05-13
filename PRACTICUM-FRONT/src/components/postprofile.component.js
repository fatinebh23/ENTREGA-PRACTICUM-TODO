import React, { Component } from 'react'
import { BASEPATH } from "../utils/constant"
import axios from 'axios';

export default class PostProfile extends Component {

  constructor(props) { // Constructor del componente
    super(props); // Llama al constructor de la clase padre (Component)
    // Enlaza los métodos de cambio de estado al contexto del componente
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeUserEmail = this.onChangeUserEmail.bind(this);
    this.onChangeAge = this.onChangeAge.bind(this);
    this.onChangeCenter = this.onChangeCenter.bind(this);
    this.onChangeSector = this.onChangeSector.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    // Inicializa el estado del componente con los campos del formulario
    this.state = {
      name: '',
      email: '',
      age: '',
      center: '',
      sector: '',
      description: ''
    };
  }

  // Métodos para manejar los cambios en los campos del formulario
  onChangeName(e) {
    this.setState({ name: e.target.value });
  }
  onChangeUserEmail(e) {
    this.setState({ email: e.target.value });
  }
  onChangeAge(e) {
    this.setState({ age: e.target.value });
  }
  onChangeCenter(e) {
    this.setState({ center: e.target.value });
  }
  onChangeSector(e) {
    this.setState({ sector: e.target.value });
  }
  onChangeDescription(e) {
    this.setState({ description: e.target.value });
  }

  onSubmit(e) { // Método para manejar la presentación del formulario
    e.preventDefault(); // Evita que el formulario se envíe de forma predeterminada

    // Validación de longitud del nombre
    if (this.state.name.length < 3 || this.state.name.length > 20) {
      alert("El nombre debe tener entre 3 y 20 caracteres.");
    } else {
      // Objeto con los datos del perfil a enviar
      const postprofileObject = {
        name: this.state.name,
        email: this.state.email,
        age: this.state.age,
        center: this.state.center,
        sector: this.state.sector,
        description: this.state.description
      };
      // Envía una solicitud POST al servidor con los datos del perfil
      axios.post(BASEPATH + '/api/users/add', postprofileObject)
        .then((res) => {
          if (res.data.message === "Perfil publicado correctamente.") { // Si el perfil se publica correctamente
            alert("Perfil correcto."); // Muestra un mensaje de alerta
            window.location = "/profile"; // Redirige al usuario a la página de perfil
          }
        }).catch((error) => {
          if (error.response.data === "{\"email\":[\"El perfil ya ha sido publicado.\"]}") { // Si el perfil ya ha sido publicado
            alert("El perfil ya ha sido publicado con el mismo email."); // Muestra un mensaje de alerta
          }
        });
      // Limpia los campos del formulario después de enviar
      this.setState({
        name: '',
        email: '',
        age: '',
        center: '',
        sector: '',
        description: ''
      });
    }
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="card col-12">
              <form onSubmit={this.onSubmit}>
                <h3>Crea tu perfil</h3>
                <div>
                  <div className="mb-3">
                    <label>Nombre</label>
                    <input
                      type="nombre"
                      className="form-control"
                      placeholder="Escriba su nombre"
                      onChange={this.onChangeName}
                      name="name"
                      value={this.state.name}
                    />
                  </div>
                  <div className="mb-3">
                    <label>Email</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Escriba su email"
                      onChange={this.onChangeUserEmail}
                      name="email"
                      value={this.state.email}
                    />
                  </div>
                  <div className="mb-3">
                    <label>Edad</label>
                    <input
                      type="edad"
                      className="form-control"
                      placeholder="Escriba su edad"
                      onChange={this.onChangeAge}
                      name="edad"
                      value={this.state.age}
                    />
                  </div>
                  <div className="mb-3">
                    <label>Centro</label>
                    <input
                      type="ubicacion"
                      className="form-control"
                      placeholder="Escriba donde estudia o ha estudiado"
                      onChange={this.onChangeCenter}
                      name="ubicacion"
                      value={this.state.center}
                    />
                  </div>
                  <div className="mb-3">
                    <label>Sector</label>
                    <input
                      type="sector"
                      className="form-control"
                      placeholder="Escriba el sector que ha estudiado"
                      onChange={this.onChangeSector}
                      name="sector"
                      value={this.state.sector}
                    />
                  </div>
                  <div className="mb-3">
                    <label>Descripción</label>
                    <input
                      type="descripcion"
                      className="form-control"
                      placeholder="Escriba la descripción de su perfil"
                      onChange={this.onChangeDescription}
                      name="descripcion"
                      value={this.state.description}
                    />
                  </div>
                  <div className="d-grid">
                    <button type="submit" className="btn purple-button text-uppercase py-3 m-5">
                      Publicar
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}