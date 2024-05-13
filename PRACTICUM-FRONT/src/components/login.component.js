import React, { Component } from 'react'; // Importa la biblioteca React y el componente Component
import axios from 'axios'; // Importa la biblioteca Axios para hacer solicitudes HTTP
import { BASEPATH } from "../utils/constant"; // Importa la ruta base de la API desde un archivo de constantes

export default class Login extends Component { // Define una clase de componente llamada Login que extiende Component

  constructor(props) { // Constructor del componente
    super(props); // Llama al constructor de la clase padre
    const udata = localStorage.getItem('user'); // Obtiene los datos del usuario almacenados en el almacenamiento local del navegador
    let loggedIn = true; // Define un estado de inicio de sesión como verdadero por defecto
    if (udata === null) { // Verifica si no hay datos de usuario en el almacenamiento local
        loggedIn = false; // Cambia el estado de inicio de sesión a falso si no hay datos de usuario
    }
    this.state = { // Define el estado inicial del componente
        email: '', // Almacena el correo electrónico del usuario
        password: '', // Almacena la contraseña del usuario
        loggedIn // Almacena el estado de inicio de sesión
    };

    // Enlaza los métodos de cambio de estado al contexto actual
    this.onChangeUserEmail = this.onChangeUserEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChangeUserEmail(e) { // Método para manejar el cambio de correo electrónico del usuario
    this.setState({ email: e.target.value }); // Actualiza el estado del correo electrónico con el valor introducido por el usuario
  }

  onChangePassword(e) { // Método para manejar el cambio de contraseña del usuario
    this.setState({ password: e.target.value }); // Actualiza el estado de la contraseña con el valor introducido por el usuario
  }

  onSubmit(e) { // Método para manejar el envío del formulario de inicio de sesión
    e.preventDefault(); // Evita que el formulario se envíe de forma predeterminada

    // Objeto de usuario con el correo electrónico y la contraseña del estado actual
    const userObject = {
        email: this.state.email,
        password: this.state.password
    };

    // Solicita al servidor que inicie sesión con los datos del usuario
    axios.post(BASEPATH + '/api/login', userObject)
        .then((res) => { // Maneja la respuesta del servidor
          this.setState({ email: '', password: '' }); // Restablece el correo electrónico y la contraseña del estado
            if (res.status === 200) { // Verifica si la respuesta del servidor es exitosa
                localStorage.setItem('user', JSON.stringify(res.data)); // Almacena los datos del usuario en el almacenamiento local
                switch (res.data.user.role_id) { // Realiza una acción según el rol del usuario
                  case 2: // Si el rol del usuario es 2 (empresa)
                      window.location ="/indexcompany"; // Redirecciona a la página de inicio de empresa
                      break;
                  case 3: // Si el rol del usuario es 3 (estudiante)
                      window.location ="/indexstudent"; // Redirecciona a la página de inicio de estudiante
                      break;
                  case 1: // Si el rol del usuario es 1 (administrador)
                      window.location ="/index"; // Redirecciona a la página de inicio de administrador
                      break;
              }
            }
        })
        .catch((error) => { // Captura cualquier error de la solicitud
          if(error.response.message == 'Unauthorized'){ // Verifica si el error es de autorización
            alert("Email o contraseña incorrectos. Inténtelo de nuevo."); // Muestra una alerta si las credenciales son incorrectas
          }
        });
  }

  render() { // Método para renderizar el componente
    return (
      <div className="container"> {/* Contenedor principal */}
          <div className="row"> {/* Fila */}
            <div className="col-12"> {/* Columna */}
              <div className="card col-12"> {/* Tarjeta de inicio de sesión */}
                <form onSubmit={this.onSubmit}> {/* Formulario de inicio de sesión */}
                  <h3 class="d-flex justify-content-center">Iniciar sesión</h3> {/* Título */}
                  <p className="forgot-password text-right"> {/* Enlace para registrarse */}
                    ¿No tienes cuenta?<a href="/sign-up" class="text-success"> Únete a nosotros</a>
                  </p>
                  <div className="mb-3"> {/* Campo de entrada para el correo electrónico */}
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
                  <div className="mb-3"> {/* Campo de entrada para la contraseña */}
                    <label>Contraseña</label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Escriba su contraseña"
                      onChange={this.onChangePassword}
                      name="password"
                      value={this.state.password}
                    />
                  </div>
                  <div className="mb-3"> {/* Opción para recordar el usuario */}
                    <div className="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="customCheck1"
                      />
                      <label className="custom-control-label text-success m-2" htmlFor="customCheck1">
                        Recuérdame
                      </label>
                    </div>
                  </div>
                  <div className="d-grid"> {/* Botón para enviar el formulario */}
                    <button type="submit" className="btn purple-button text-uppercase py-2 m-3" >
                      Entrar
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
      </div>
    )
  }
}
