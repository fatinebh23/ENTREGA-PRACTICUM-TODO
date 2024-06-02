import React, { Component } from 'react'; // Importa la biblioteca React y el componente Component
import axios from 'axios'; // Importa la biblioteca Axios para hacer solicitudes HTTP
import { BASEPATH } from "../utils/constant"; // Importa la ruta base de la API desde un archivo de constantes
import "./loading.component"
import "../loading.css"


export default class Login extends Component {
  constructor(props) {
    super(props);
    const udata = localStorage.getItem('user');
    let loggedIn = true;
    if (udata === null) {
      loggedIn = false;
    }
    this.state = {
      email: '',
      password: '',
      loggedIn,
      rememberMe: false,
      loading: false,
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onRememberMeChange = this.onRememberMeChange.bind(this);
    this.showSpinner = this.showSpinner.bind(this);
    this.hideSpinner = this.hideSpinner.bind(this);
  }

  componentDidMount() {
    const rememberedEmail = localStorage.getItem('rememberedEmail');
    if (rememberedEmail) {
      this.setState({ email: rememberedEmail, rememberMe: true });
    }
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
    const { email, password } = this.state;
    const errors = {};
    if (!email) errors.email = 'Campo obligatorio';
    if (!password) errors.password = 'Campo obligatorio';
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

    const userObject = {
      email: this.state.email,
      password: this.state.password
    };

    axios.post(BASEPATH + '/api/login', userObject)
      .then((res) => {
        this.hideSpinner();
        this.setState({ email: '', password: '' });
        if (res.status === 200) {
          localStorage.setItem('user', JSON.stringify(res.data));
          switch (res.data.user.role_id) {
            case 2:// Empresa
              window.location = "/indexcompany";
              break;
            case 3:// Estudiante
              window.location = "/indexstudent";
              break;
            case 1:// Administrador
              window.location = "/index";
              break;
            default:
              alert("Role desconocido");
          }
          alert("Inicio de sesión correctamente.");

          if (this.rememberMe) {
            localStorage.setItem('rememberedEmail', this.state.email);
          } else {
            localStorage.removeItem('rememberedEmail');
          }
        }
      })
      .catch((error) => {
        this.hideSpinner();
        if (error.response && error.response.data.message === 'Unauthorized') {
          alert("Email o contraseña incorrectos. Inténtelo de nuevo.");
        } else {
          console.error("Error de inicio de sesión:", error);
          alert("Ocurrió un error. Por favor, inténtalo de nuevo más tarde.");
        }
      });
  }

  render() {
    const { errors, loading, rememberMe } = this.state;

    return (
      <div className="container">
        <div className="row">
          <div className="card col-12">
              <form onSubmit={this.onSubmit}>
                <h3 className="d-flex justify-content-center">Iniciar sesión</h3>
                <p className="forgot-password text-right">
                  ¿No tienes cuenta?<a href="/sign-up" className="text-success"> Únete a nosotros</a>
                </p>
                <div className="mb-3">
                  <label>Email</label>
                  <input
                    type="email"
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
                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="customCheck1"
                      checked={rememberMe}
                      onChange={this.onRememberMeChange}
                    />
                    <label className="custom-control-label text-success m-2" htmlFor="customCheck1">
                      Recuérdame
                    </label>
                    </div>
                  </div>
                <div className="d-grid">
                  {loading ? (
                    <div className="loading-container">
                      <div className="spinner-border text-success" role="status">
                        <span className="visually-hidden">Loading...</span>
                      </div>
                    </div>
                  ) : (
                    <button type="submit" className="btn purple-button text-uppercase py-2 m-3">
                      Entrar
                    </button>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
    );
  }
}

