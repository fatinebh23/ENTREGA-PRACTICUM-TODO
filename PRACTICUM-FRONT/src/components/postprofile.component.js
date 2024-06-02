import React, { Component } from 'react'
import { BASEPATH } from "../utils/constant"
import axios from 'axios';
import "./loading.component"
import "../loading.css"

export default class PostProfile extends Component {

  constructor(props) { // Constructor del componente
    super(props); // Llama al constructor de la clase padre (Component)
    // Enlaza los métodos de cambio de estado al contexto del componente
    this.onChange = this.onChange.bind(this);
    this.showSpinner = this.showSpinner.bind(this);
    this.hideSpinner = this.hideSpinner.bind(this);
    this.onSubmit = this.onSubmit.bind(this);


    // Inicializa el estado del componente con los campos del formulario
    this.state = {
      name: '',
      email: '',
      age: '',
      center_id: '',
      sector_id: '',
      course_id: '',
      description: '',
      errors: {},
      loading: false,
    };
  }

  // Métodos para manejar los cambios en los campos del formulario
  onChange(e) {
  this.setState({ [e.target.name]: e.target.value });
}
 

  showSpinner() {
    this.setState({ loading: true });
  }

  hideSpinner() {
    this.setState({ loading: false });
  }

  // Validación de los campos del formulario
  validateForm() {
    const { name, email, age, center_id, sector_id, course_id, description } = this.state;
    const errors = {};

    if (!name) {
      errors.name = 'Campo obligatorio';
    } else if (name.length < 3 || name.length > 20) {
      errors.name = 'El nombre debe tener entre 3 y 20 caracteres';
    }

    if (!email) {
      errors.email = 'Campo obligatorio';
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      errors.email = 'Correo electrónico no válido';
    }

    if (!age) {
      errors.age = 'Campo obligatorio';
    } else if (isNaN(age) || age < 0) {
      errors.age = 'La edad debe ser un número positivo';
    }

    //if (!center_id) errors.center_id = 'Campo obligatorio';
    //if (!sector_id) errors.sector_id = 'Campo obligatorio';
    //if (!course_id) errors.course_id = 'Campo obligatorio';
    if (!description) errors.description = 'Campo obligatorio';

    this.setState({ errors });

    return errors;
}

  onSubmit(e) { // Método para manejar la presentación del formulario
    e.preventDefault(); // Evita que el formulario se envíe de forma predeterminada
    const errors = this.validateForm(); // Llamada a la función validateForm

    if (Object.keys(errors).length > 0) { // Verificar si no hay errores
      // Aquí puedes enviar el formulario si no hay errores
      return
    }

    this.showSpinner(); // Muestra el spinner de carga

      // Objeto con los datos del perfil a enviar
      const postProfileObject = {
        name: this.state.name,
        email: this.state.email,
        age: this.state.age,
        center_id: this.state.center_id,
        sector_id: this.state.sector_id,
        course_id: this.state.course_id,
        description: this.state.description,
      };

      const user = JSON.parse(localStorage.getItem('user')); // Obtiene el usuario del almacenamiento local

      // Envía una solicitud POST al servidor con los datos del perfil
      axios.post(BASEPATH + '/api/users/update/' + user.user.id, postProfileObject)

      .then((res) => {
        if (res.data.message === "Perfil modificado correctamente.") { // Si el perfil se publica correctamente
          alert("Perfil modificado correctamente."); // Muestra un mensaje de alerta
        }
      })
      .finally(() => {
        this.hideSpinner(); // Oculta el Spinner
      })
      .catch((error) => {
        // Comprueba si la respuesta de error contiene un mensaje específico
        if (error.response && error.response.data && error.response.data.message) { 
            alert(error.response.data.message); // Muestra un mensaje de alerta con el mensaje de error específico
        } else {
            alert("No se ha producido correctamente."); // Muestra un mensaje de alerta general para otros errores
            console.error(error.response.data);
        }
    });
    }

  render() {

    const { errors, loading } = this.state; // Obtiene los errores del estado

    return (
      <div className="container">
        <div className="row">
          <div className="cardform col-12">
              <form onSubmit={this.onSubmit}>
                <h3>Editar perfil</h3>
                <div>
                  <div className="mb-3">
                    <label>Nombre</label>
                    <input
                      type="text"
                      className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                      placeholder="Escriba su nombre"
                      onChange={this.onChange}
                      name="name"
                      value={this.state.name}
                    />
                    {errors.name && <div className="invalid-feedback">{errors.name}</div>} {/* Muestra el mensaje de error si existe */}
                  </div>
                  <div className="mb-3">
                    <label>Email</label>
                    <input
                      type="text"
                      className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                      placeholder="Escriba su email"
                      onChange={this.onChange}
                      name="email"
                      value={this.state.email}
                    />
                    {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                  </div>
                  <div className="mb-3">
                    <label>Edad</label>
                    <input
                      type="number"
                      className={`form-control ${errors.age ? 'is-invalid' : ''}`}
                      placeholder="Escriba su edad"
                      onChange={this.onChange}
                      name="age"
                      value={this.state.age}
                    />
                    {errors.age && <div className="invalid-feedback">{errors.age}</div>}
                  </div>
                  <div className="mb-3">
                    <label>Centro</label>
                    <input
                      type="text"
                      className={`form-control ${errors.center_id ? 'is-invalid' : ''}`}
                      placeholder="Escriba donde estudia o ha estudiado"
                      onChange={this.onChange}
                      name="center_id"
                      value={this.state.center_id}
                    />
                    {errors.center_id && <div className="invalid-feedback">{errors.center_id}</div>}
                  </div>
                  <div className="mb-3">
                    <label>Sector</label>
                    <input
                      type="text"
                      className={`form-control ${errors.sector_id ? 'is-invalid' : ''}`}
                      placeholder="Escriba el sector que ha estudiado"
                      onChange={this.onChange}
                      name="sector_id"
                      value={this.state.sector_id}
                    />
                    {errors.sector_id && <div className="invalid-feedback">{errors.sector_id}</div>}
                  </div>
                  <div className="mb-3">
                    <label>Curso</label>
                    <input
                      type="text"
                      className={`form-control ${errors.course_id ? 'is-invalid' : ''}`}
                      placeholder="Escriba el curso que ha estudiado"
                      onChange={this.onChange}
                      name="course_id"
                      value={this.state.course_id}
                    />
                    {errors.course_id && <div className="invalid-feedback">{errors.course_id}</div>}
                  </div>
                  <div className="mb-3">
                    <label>Descripción</label>
                    <input
                      type="text"
                      className={`form-control ${errors.description ? 'is-invalid' : ''}`}
                      placeholder="Escriba sus habilidades y qué es lo que buscas"
                      onChange={this.onChange}
                      name="description"
                      value={this.state.description}
                    />
                    {errors.description && <div className="invalid-feedback">{errors.description}</div>}
                  </div>
                  <div className="d-grid">
                  {loading ? (
                    <div className="loading-container">
                      <div className="spinner-border text-success" role="status">
                        <span className="visually-hidden">Loading...</span>
                      </div>
                    </div>
                  ) : (
                    <button type="submit" className="btn purple-button text-uppercase py-3 m-5">
                      Guardar
                    </button>
                  )}
                </div>
                </div>
              </form>
            </div>
          </div>
        </div>
    )
  }
}