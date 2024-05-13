import React, { Component } from 'react'
import axios from 'axios';
import {BASEPATH} from "../utils/constant"
import { Navigate  } from 'react-router-dom';

export default class SignUp extends Component {

    constructor(props) {
        super(props)
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeUserEmail = this.onChangeUserEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeType = this.onChangeType.bind(this);
        this.onChangeNameCompany = this.onChangeNameCompany.bind(this);
        this.onChangeDir = this.onChangeDir.bind(this);
        this.onChangeProv = this.onChangeProv.bind(this);
        this.onChangeCenter = this.onChangeCenter.bind(this);
        this.onChangeFecha = this.onChangeFecha.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
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
        }
    }
    onChangeName(e) {
        this.setState({ name: e.target.value })
    }
    onChangeUserEmail(e) {
        this.setState({ email: e.target.value })
    }
    onChangePassword(e) {
        this.setState({ password: e.target.value })
    }
    onChangeType(e) {
      console.log(e);
      this.setState({ type: e.target.value })
    }
    onChangeNameCompany(e) {
      console.log(e);
      this.setState({ nameCompany: e.target.value })
    }
    onChangeDir(e) {
      console.log(e);
      this.setState({ dir: e.target.value })
    }
    onChangeProv(e) {
      console.log(e);
      this.setState({ prov: e.target.value })
    }
    onChangeCenter(e) {
      console.log(e);
      this.setState({ center: e.target.value })
    }
    onChangeFecha(e) {
      console.log(e);
      this.setState({ fecha: e.target.value })
    }
    onSubmit(e) {
        e.preventDefault()

    if(this.state.name.length<3 || this.state.name.length>20 ){
      alert("El nombre debe tener entre 3 y 20 caracteres.")
    }
    if(this.state.password.length<6 ){
      alert("La contraseña debe tener más de 5 caracteres.")
    }

        const userObject = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            type: this.state.type,
            dir: this.state.dir,
            prov: this.state.prov,
            center: this.state.center,
            fecha: this.state.fecha,
            nameCompany: this.state.nameCompany
        };
        axios.post(BASEPATH + '/api/register', userObject)
            .then((res) => {
                if(res.data.message === "Usuario registrado correctamente"){
                  this.setState({ name: '', email: '', password: '', type: 'student', nameCompany: '', dir: '', prov: '', center: '', fecha: ''})
                    alert("Registro correcto.")
                    window.location = "/sign-in";
                }
            }).catch((error) => {
              if(error.response.data.message == 'The email has already been taken.'){
                  alert("El email ya ha sido registrado.")
                }
            });
        
    }


  render() {
    if (this.state.loggedIN === false){
      return  <Navigate to="sign-in"/>
    }
    return (
      <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="card col-12">
              <form onSubmit={this.onSubmit}>


                <h3 class="d-flex justify-content-center">Registrate</h3>
                <p className="forgot-password text-right">
                  ¿Ya tienes cuenta? <a href="/sign-in" class="text-success">Iniciar sesión</a>
                </p>
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
                <div className="mb-3">
                  <label>Tipo de usuario</label>
                  <div class="form-check">
                    <input 
                      class="form-check-input"
                      type="radio" 
                      name="type" 
                      value="student"
                      checked={this.state.type === "student"}
                      onChange={this.onChangeType}
                    />
                    <label class="form-check-label" for="flexRadioDefault1">
                      Estudiante
                    </label>
                  </div>
                  <div class="form-check">
                  <input 
                      class="form-check-input"
                      type="radio" 
                      name="type" 
                      value="company"
                      checked={this.state.type === "company"}
                      onChange={this.onChangeType}
                    />
                    <label class="form-check-label" for="flexRadioDefault2">
                      Empresa
                    </label>
                  </div>
                </div>
                {this.state.type === "company" && (
                  <div>
                    <div className="mb-3">
                      <label>Nombre empresa</label>
                      <input
                        type="nombre"
                        className="form-control"
                        placeholder="Escriba el nombre de la empresa"
                        onChange={this.onChangeNameCompany}
                        name="name"
                        value={this.state.nameCompany}
                      />
                    
                    </div>
                    <div className="mb-3">
                      <label>Dirección empresa</label>
                      <input
                        type="direccion"
                        className="form-control"
                        placeholder="Escriba su dirección"
                        onChange={this.onChangeDir}
                        name="name"
                        value={this.state.dir}
                      />
                    
                    </div>

                    <div className="mb-3">
                      <label>Provincia</label>
                      <input
                        type="nombre"
                        className="form-control"
                        placeholder="Escriba la provincia"
                        onChange={this.onChangeProv}
                        name="name"
                        value={this.state.prov}
                      />
                    
                    </div>
                  </div>
                )}
                {this.state.type === "student" && (
                  <div>
                  <div className="mb-3">
                    <label>Centro educativo</label>
                    <input
                      type="nombre"
                      className="form-control"
                      placeholder="Escriba el centro educativo donde has estudiado"
                      onChange={this.onChangeCenter}
                      name="name"
                      value={this.state.center}
                    />
                  
                  </div>
                  <div className="mb-3">
                    <label>Provincia</label>
                    <input
                      type="nombre"
                      className="form-control"
                      placeholder="Escriba la provincia"
                      onChange={this.onChangeProv}
                      name="name"
                      value={this.state.prov}
                    />
                  
                  </div>

                  <div className="mb-3">
                    <label>Fecha nacimiento</label>
                    <input
                      type="nombre"
                      className="form-control"
                      placeholder="Escriba su fecha de nacimiento"
                      onChange={this.onChangeFecha}
                      name="name"
                      value={this.state.fecha}
                    />
                  
                  </div>
                </div>
                
                )}
                <div className="d-grid">
                <button type="submit" className="btn purple-button text-uppercase py-2 m-3">
                    Registarme
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