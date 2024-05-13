import React, { Component } from 'react'
import {BASEPATH} from "../utils/constant"
import axios from 'axios';

 
export default class PostOffert extends Component {

    constructor(props) {
        super(props)
        this.onChangeTittle = this.onChangeTittle.bind(this);
        this.onChangeSector = this.onChangeSector.bind(this);
        this.onChangeDates = this.onChangeDates.bind(this);
        this.onChangeSchedule = this.onChangeSchedule.bind(this);
        this.onChangeVacancies = this.onChangeVacancies.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            tittle: '',
            sector: '',
            dates: '',
            schedule: '',
            vacancies: '',
            description: '',
        }
    }
    onChangeTittle(e) {
        this.setState({ tittle: e.target.value })
    }
    onChangeSector(e) {
        this.setState({ sector: e.target.value })
    }
    onChangeDates(e) {
      this.setState({ dates: e.target.value })
    }
    onChangeSchedule(e) {
      this.setState({ schedule: e.target.value })
    }
    onChangeVacancies(e) {
      this.setState({ vacancies: e.target.value })
    }
    onChangeDescription(e) {
    this.setState({ description: e.target.value })
    }
    onSubmit(e) {
        e.preventDefault()

    if(this.state.name.length<3 || this.state.name.length>20 ){
      alert("El nombre debe tener entre 3 y 20 caracteres.")
    }

        const postoffertObject = {
            tittle: this.state.tittle,
            sector: this.state.sector,
            dates: this.state.dates,
            schedule: this.state.schedule,
            vacancies: this.state.vacancies,
            description: this.state.description,
        };
        axios.post(BASEPATH + '/api/offerts/add', postoffertObject)
            .then((res) => {
                if(res.data.message === "Oferta publicada correctamente."){
                    alert("Publicación correcta.")
                    window.location = "/offert";
                }
            }).catch((error) => {
                if(error.response.data ===  "{\"email\":[\"Está oferta ya ha sido publicada.\"]}"){
                  alert("La oferta ya ha sido publicada con el mismo email.")
                }
            });
        this.setState({ tittle: '', sector: '', dates: '', schedule: '', vacancies: '', description: ''})
    }


  render() {
    return (
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="card col-12">
              <form onSubmit={this.onSubmit}>
                <h3>Crea tu oferta</h3>
                <div>
                <div className="mb-3">
                  <label>Título</label>
                  <input
                    type="titulo"
                    className="form-control"
                    placeholder="Escriba el título de la oferta"
                    onChange={this.onChangeTittle}
                    name="titulo"
                    value={this.state.tittle}
                  />
                </div>
                <div className="mb-3">
                  <label>Sector</label>
                  <input
                    type="sector"
                    className="form-control"
                    placeholder="Escriba el sector de la empresa"
                    onChange={this.onChangeSector}
                    name="sector"
                    value={this.state.sector}
                  />
                </div>
                <div className="mb-3">
                  <label>Fecha de publicación</label>
                  <input
                    type="dates"
                    className="form-control"
                    placeholder="Escriba la fecha de publicación de la oferta"
                    onChange={this.onChangeDates}
                    name="dates"
                    value={this.state.dates}
                  />
                </div>
                <div className="mb-3">
                  <label>Horario</label>
                  <input
                    type="horario"
                    className="form-control"
                    placeholder="Escriba el horario de prácticas"
                    onChange={this.onChangeSchedule}
                    name="horario"
                    value={this.state.schedule}
                  />
                </div>
                <div className="mb-3">
                  <label>Número de vacantes</label>
                  <input
                    type="vacantes"
                    className="form-control"
                    placeholder="Escriba el número de vacantes disponibles para la oferta"
                    onChange={this.onChangeVacancies}
                    name="vacantes"
                    value={this.state.vacancies}
                  />
                </div>
                <div className="mb-3">
                  <label>Descripción</label>
                  <input
                    type="descripcion"
                    className="form-control"
                    placeholder="Escriba la descripción de la oferta"
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