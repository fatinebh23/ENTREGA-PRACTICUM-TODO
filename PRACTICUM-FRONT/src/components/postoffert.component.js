import React, { Component } from 'react'
import {BASEPATH} from "../utils/constant"
import axios from 'axios';
import "./loading.component"
import "../loading.css"

 
export default class PostOffert extends Component {

    constructor(props) {
        super(props)
        this.state = {
            title: '',
            name: '',
            sector: '',
            prov: '',
            dates: '',
            schedule: '',
            vacancies: '',
            remun: '',
            description: '',
            loading: false,
            errors: {}
        }
        // Bind event handlers
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.showSpinner = this.showSpinner.bind(this);
        this.hideSpinner = this.hideSpinner.bind(this);
    }

    // Método para mostrar el Spinner
    showSpinner() {
      this.setState({ loading: true });
    }

    // Método para ocultar el Spinner
    hideSpinner() {
      this.setState({ loading: false });
    }

    onChange(e) {
      this.setState({ [e.target.name]: e.target.value });
    } 
  
    validateForm() {
      const { title, name, sector, prov, dates, schedule, vacancies, remun, description } = this.state;
      const errors = {};
      if (!title) errors.tittle = 'Campo obligatorio';
      if (!name) errors.name = 'Campo obligatorio';
      //if (!sector) errors.sector = 'Campo obligatorio';
      //if (!prov) errors.prov = 'Campo obligatorio';
      if (!dates) errors.dates = 'Campo obligatorio';
      if (!schedule) errors.schedule = 'Campo obligatorio';
      if (!vacancies) errors.vacancies = 'Campo obligatorio';
      if (!remun) errors.remun = 'Campo obligatorio';
      if (!description) errors.description = 'Campo obligatorio';
      return errors;
    }

    onSubmit(e) {
        e.preventDefault()
        const errors = this.validateForm();
        if (Object.keys(errors).length > 0) {
          this.setState({ errors });
          return;
    }

    this.showSpinner(); // Muestra el Spinner

    // Clear errors
    this.setState({ errors: {}, loading: true });

    if(this.state.name.length<3 || this.state.name.length>20 ){
      alert("El nombre debe tener entre 3 y 20 caracteres.")
    }

    const postoffertObject = {
      title: this.state.title,
      name: this.state.name,
      sector: this.state.sector,
      prov: this.state.prov,
      dates: this.state.dates,
      schedule: this.state.schedule,
      vacancies: this.state.vacancies,
      remun: this.state.remun,
      description: this.state.description,
    };

        axios.post(BASEPATH + '/api/offerts/add', postoffertObject)
            .then((res) => {
              this.hideSpinner(); // Oculta el Spinner

                if(res.data.message === "Oferta publicada correctamente."){
                    alert("Publicación correcta.")

                    this.props.reloadList();

                    this.setState({
                    title: '',
                    name: '', 
                    sector: '', 
                    prov: '', 
                    dates: '', 
                    schedule: '', 
                    vacancies: '', 
                    remun: '', 
                    description: '' });
                }
            })
            .catch((error) => {
                if(error.response.data ===  "{\"email\":[\"Está oferta ya ha sido publicada.\"]}"){
                  alert("La oferta ya ha sido publicada con el mismo email.")
                }else{
                  alert("Error al publicar la oferta.")
                  this.setState({ loading: false });
                }
            });
    }


  render() {
    
    const { errors, loading } = this.state;

    return (
        <div className="container">
          <div className="row">
            <div className="cardform col-12">
              <form onSubmit={this.onSubmit}>
                <h3>Crea tu oferta</h3>
                <div>
                <div className="mb-3">
                  <label>Título</label>
                  <input
                    type="titulo"
                    className={`form-control ${errors.title ? 'is-invalid' : ''}`}
                    placeholder="Escriba el título de la oferta"
                    onChange={this.onChange}
                    name="title"
                    value={this.state.title}
                  />
                  {errors.title && <div className="invalid-feedback">{errors.title}</div>}
                </div>
                <div className="mb-3">
                  <label>Nombre de la empresa</label>
                  <input
                    type="nombre"
                    className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                    placeholder="Escriba el nombre de la empresa"
                    onChange={this.onChange}
                    name="name"
                    value={this.state.name}
                  />
                  {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                </div>
                <div className="mb-3">
                  <label>Sector</label>
                  <input
                    type="text"
                    className={`form-control ${errors.sector ? 'is-invalid' : ''}`}
                    placeholder="Escriba el sector de la oferta"
                    onChange={this.onChange}
                    name="sector"
                    value={this.state.sector}
                  />
                  {errors.sector && <div className="invalid-feedback">{errors.sector}</div>}
                </div>
                <div className="mb-3">
                  <label>Provincia</label>
                  <input
                    type="text"
                    className={`form-control ${errors.prov ? 'is-invalid' : ''}`}
                    placeholder="Escriba la provincia de la empresa"
                    onChange={this.onChange}
                    name="prov"
                    value={this.state.prov}
                  />
                  {errors.prov && <div className="invalid-feedback">{errors.prov}</div>}

                </div>
                <div className="mb-3">
                  <label>Fecha de publicación</label>
                  <input
                    type="date"
                    className={`form-control ${errors.dates ? 'is-invalid' : ''}`}
                    placeholder="Escriba la fecha de publicación de la oferta"
                    onChange={this.onChange}
                    name="dates"
                    value={this.state.dates}
                  />
                  {errors.dates && <div className="invalid-feedback">{errors.dates}</div>}
                </div>
                <div className="mb-3">
                  <label>Horario</label>
                  <input
                    type="horario"
                    className={`form-control ${errors.schedule ? 'is-invalid' : ''}`}
                    placeholder="Escriba el horario de prácticas"
                    onChange={this.onChange}
                    name="schedule"
                    value={this.state.schedule}
                  />
                  {errors.schedule && <div className="invalid-feedback">{errors.schedule}</div>}
                </div>
                <div className="mb-3">
                  <label>Número de vacantes</label>
                  <input
                    type="number"
                    className={`form-control ${errors.vacancies ? 'is-invalid' : ''}`}
                    placeholder="Escriba el número de vacantes disponibles para la oferta"
                    onChange={this.onChange}
                    name="vacancies"
                    value={this.state.vacancies}
                  />
                  {errors.vacancies && <div className="invalid-feedback">{errors.vacancies}</div>}
                </div>
                <div className="mb-3">
                  <label>Remuneradas?</label>
                  <div class="form-check">
                    <input 
                      class="form-check-input"
                      type="radio" 
                      name="remun" 
                      value="si"
                      checked={this.state.remun === "si"}
                      onChange={this.onChange}
                    />
                    <label class="form-check-label">
                      Si
                    </label>
                  </div>
                  <div class="form-check">
                  <input 
                      class="form-check-input"
                      type="radio" 
                      name="remun" 
                      value="no"
                      checked={this.state.remun === "no"}
                      onChange={this.onChange}
                    />
                    <label class="form-check-label">
                      No
                    </label>
                  </div>
                  {errors.remun && <div className="invalid-feedback">{errors.remun}</div>}
                </div>
                <div className="mb-3">
                  <label>Descripción</label>
                  <input
                    type="text"
                    className={`form-control ${errors.description ? 'is-invalid' : ''}`}
                    placeholder="Escriba en que consiste la oferta, en qué puesto estará y qué hará el alumno, etc"
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
                      <button type="submit" className="btn purple-button text-uppercase py-2 m-3" >
                        Publicar
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