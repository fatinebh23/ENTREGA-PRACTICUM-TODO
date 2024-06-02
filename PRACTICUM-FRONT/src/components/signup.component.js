import React, { Component } from 'react'
import axios from 'axios';
import {BASEPATH} from "../utils/constant"
import { Navigate  } from 'react-router-dom';
import "./loading.component"
import "../loading.css"

export default class SignUp extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      type: 'student',
      nameCompany: '',
      dir: '',
      prov: '',
      center: '',
      fecha: '',
      errors: {},
      loading: false,
      rememberMe: false,
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.showSpinner = this.showSpinner.bind(this);
    this.hideSpinner = this.hideSpinner.bind(this);
    this.onRememberMeChange = this.onRememberMeChange.bind(this);
  }

  showSpinner() {
    this.setState({ loading: true });
  }

  hideSpinner() {
    this.setState({ loading: false });
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onRememberMeChange(e) {
    this.setState({ rememberMe: e.target.checked });
  }

  validateForm() {
    const { name, email, password, type, nameCompany, dir, prov, center, fecha } = this.state;
    const errors = {};

    // Validación del nombre
    if (!name) errors.name = 'Campo obligatorio';

    // Validación del correo
    const emailRegex = /^[a-zA-Z0-9._%+-]+@(gmail\.com|[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
    if (!email) {
        errors.email = 'Campo obligatorio';
    } else if (!emailRegex.test(email)) {
        errors.email = 'El correo debe tener un formato válido (por ejemplo, usuario@gmail.com o usuario@dominio.es).';
    }

    // Validación de la contraseña
    if (!password) errors.password = 'Campo obligatorio';

    // Validación del tipo de usuario
    if (!type) errors.type = 'Campo obligatorio';

    // Validación específica para tipo "company"
    if (type === 'company') {
        if (!nameCompany) errors.nameCompany = 'Campo obligatorio';
        if (!dir) errors.dir = 'Campo obligatorio';
        if (!prov) errors.prov = 'Campo obligatorio';
    }

    // Validación específica para tipo "student"
    if (type === 'student') {
        if (!center) errors.center = 'Campo obligatorio';
        if (!prov) errors.prov = 'Campo obligatorio';
        if (!fecha) errors.fecha = 'Campo obligatorio';
    }

    return errors;
}
  

  onSubmit(e) {
    e.preventDefault();
    const errors = this.validateForm();
    if (Object.keys(errors).length > 0) {
      this.setState({ errors });
      return;
    }

    this.showSpinner();

    const formObject = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      type: this.state.type,
      nameCompany: this.state.nameCompany,
      dir: this.state.dir,
      prov: this.state.prov,
      center: this.state.center,
      fecha: this.state.fecha,
    };

    axios.post(BASEPATH + '/api/register', formObject)
      .then((res) => {
        this.hideSpinner();

        if(res.data.message === "Usuario registrado correctamente"){
            alert("Registro correcto.")
            window.location = "/sign-in";
            this.setState({
              name: '',
              email: '',
              password: '',
              type: 'student',
              nameCompany: '',
              dir: '',
              prov: '',
              center: '',
              fecha: '',
              errors: {}
          });
        }
      })
      .catch((error) => {
        this.hideSpinner();
        if(error.response.data.message == 'The email has already been taken.'){
          alert("El email ya ha sido registrado.")
        }
        console.error("Error al registrarte:", error);
        alert("Ocurrió un error. Por favor, inténtalo de nuevo más tarde.");
        console.log(error);
      });
  }


  render() {

    const { errors, loading } = this.state;
    if (this.state.loggedIN === false){
      return  <Navigate to="sign-in"/>
    }
    return (
      <div className="container">
      <div className="row">
        <div className="card col-12">
          <form onSubmit={this.onSubmit}>
                <h3 className="d-flex justify-content-center">Registrate</h3>
                <div className="mb-3">
                  <label>Nombre de usuario</label>
                  <input
                    type="text"
                    name="name"
                    value={this.state.name}
                    onChange={this.onChange}
                    className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                    placeholder="Escriba su nombre"
                  />
                  {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                </div>
                <div className="mb-3">
                  <label>Email</label>
                  <input
                    type="text"
                    name="email"
                    value={this.state.email}
                    onChange={this.onChange}
                    className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                    placeholder="Escriba su email"
                  />
                  {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                </div>
                <div className="mb-3">
                  <label>Contraseña</label>
                  <input
                    type="password"
                    name="password"
                    value={this.state.password}
                    onChange={this.onChange}
                    className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                    placeholder="Escriba su contraseña"
                  />
                  {errors.password && <div className="invalid-feedback">{errors.password}</div>}
                </div>
                <div className="mb-3">
                  <label>Tipo de usuario</label>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="type"
                      value="student"
                      checked={this.state.type === "student"}
                      onChange={this.onChange}
                    />
                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                      Estudiante
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="type"
                      value="company"
                      checked={this.state.type === "company"}
                      onChange={this.onChange}
                    />
                    <label className="form-check-label" htmlFor="flexRadioDefault2">
                      Empresa
                    </label>
                  </div>
                </div>
                {this.state.type === "company" && (
                  <div>
                    <div className="mb-3">
                      <label>Nombre empresa</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Escriba el nombre de la empresa"
                        onChange={this.onChange}
                        name="nameCompany"
                        value={this.state.nameCompany}
                      />
                      {errors.nameCompany && <div className="invalid-feedback">{errors.nameCompany}</div>}
                    </div>
                    <div className="mb-3">
                      <label>Dirección empresa</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Escriba la dirección"
                        onChange={this.onChange}
                        name="dir"
                        value={this.state.dir}
                      />
                      {errors.dir && <div className="invalid-feedback">{errors.dir}</div>}
                    </div>
                    <div className="mb-3">
                      <label>Provincia</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Escriba la provincia"
                        onChange={this.onChange}
                        name="prov"
                        value={this.state.prov}
                      />
                      {errors.prov && <div className="invalid-feedback">{errors.prov}</div>}
                    </div>
                  </div>
                )}
                {this.state.type === "student" && (
                  <div>
                    <div className="mb-3">
                      <label>Centro educativo</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Escriba el centro educativo donde has estudiado"
                        onChange={this.onChange}
                        name="center"
                        value={this.state.center}
                      />
                      {errors.center && <div className="invalid-feedback">{errors.center}</div>}
                    </div>
                    <div className="mb-3">
                      <label>Provincia</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Escriba la provincia"
                        onChange={this.onChange}
                        name="prov"
                        value={this.state.prov}
                      />
                      {errors.prov && <div className="invalid-feedback">{errors.prov}</div>}
                    </div>
                    <div className="mb-3">
                      <label>Fecha nacimiento</label>
                      <input
                        type="date"
                        className="form-control"
                        placeholder="Escriba su fecha de nacimiento"
                        onChange={this.onChange}
                        name="fecha"
                        value={this.state.fecha}
                      />
                      {errors.fecha && <div className="invalid-feedback">{errors.fecha}</div>}
                    </div>
                  </div>
                )}
                <div className="d-grid">
                  {loading ? (
                    <div className="loading-container">
                      <div className="spinner-border text-success" role="status">
                        <span className="visually-hidden">Loading...</span>
                      </div>
                    </div>
                  ) : (
                    <button type="submit" className="btn purple-button text-uppercase py-2 m-3">
                      Registrarme
                    </button>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
    )
  }
}