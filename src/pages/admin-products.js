import React, { Component } from 'react'
import styled from 'styled-components'
import Headss from '../components/head'
import Header from '../components/home/header'
import Footer from '../components/home/footer'
import { Carousel } from 'react-responsive-carousel'
import MobilAgnesi from '../components/agnesi-casa/agnesi-project-mobil'
import { Link } from 'react-router-dom'
import Back from '../images/back.svg'

import { createProduct } from './api-admin.js'

const imgLogoStyle = {
  width:'100%',
};
const agnesiStyle = {
  width:'20%'
}
export default class ProductForm extends Component {
  constructor(props){
    super(props);
    this.state = {data: []};
  }
  image = ''
  state = {
    name: '',
    subcategorie: []
  }

  url = ''
  archivos = []
  state = {
    category_name : '',
    nombre: '',
    color: '',
    descripcion: '',
    medidas: '',
    url:'',
    images: [],
    user_id: '1'
  }

  handleSubmit(ev){
    ev.preventDefault();
    createProduct( this.state, this.archivos)
    .then( (r) => {
      console.log(r);
    });

  }
  handleImageChange(ev){
    ev.preventDefault;
    let files = ev.target.files;
    this.archivos = files;
  }
  componentDidMount(){
    fetch('http://localhost:1337/category')
    .then((response) => {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
        response.status);
        return;
      }

      // Examine the text in the response
      response.json().then((data) => {
        console.log('data del servicio category ',data)
        this.setState({data: data})
      });
    }
  )
    .catch((err) => {
      console.log('Fetch Error :-S', err);
    });
  }

  render(){
    return(
      <main id="admin-anuncios">
        <Headss/>
        <div className="container">
  				<div className="row">
  					<div className="col-md-3 back-page">
  						<div className="back"><Link to="/admin-menu"><img src={ Back }/><span>atrás</span></Link></div>
  					</div>
  					<div className="col-md-12">
  						<div className="row width-slider">
                <div className="col-md-12"><h1 className="title-admin-menu">Sliders</h1></div>
                <form className="col-md-12" onSubmit={ (ev) => { this.handleSubmit(ev) }}>
                  <div className="row">
                    <div className="col-md-6">
                      <span className="number-anuncio">1</span>
                      <div className="inputs">
                        <span className="inputs-title">Nombre</span><br/>
                        <div className="inputs-group">
                          <input type="text" value={ this.state.name } onChange={ (res) => { this.setState({ nombre: res.target.value }) } } />
                          <span> Max. 30 caracteres</span>
                        </div>
                        <div className="inputs-group">
                        <select id="select-padre"name="select" required value={ this.state.category_name } onChange={ (res) => { this.setState( { category_name: res.target.value} ) }}>
                          <option selected hidden>Seleccionar categoría padre</option>
                          {this.state.data.map((categoria)=>
                            <option key={categoria.id} value={categoria.name}>{categoria.name}</option>
                          )}
                        </select>

                        </div>
                        <span className="inputs-title">Descripción</span><br/>
                        <div className="inputs-group">
                          <input type="text" onChange={ (res) => { this.setState({ descripcion: res.target.value })}} />
                          <span> Max. 30 caracteres</span>
                        </div>
                        <span className="inputs-title">Medidas</span><br/>
                        <div className="inputs-group">
                          <input type="text" onChange={ (res) => { this.setState( { medidas: res.target.value } ) }} />
                        </div>
                      </div>
                    </div>
    							  <div className="col-md-6">

    					       <div className="new-item-anuncio">

                     <span className="inputs-title">Agregar color</span><br/>
                     <div className="inputs-group">
                       <input type="text" onChange={ (res) => { this.setState({ color: res.target.value }) }}/>
                     </div>
                       <h2>Imagen </h2>
                       <button onClick= {(res) => { this.handleFiles(res) }}>Seleccionar archivo</button>
                       {/* <span className="size-description">El tamaño debe ser de 1280 x 580px</span>*/}
                       <input type="file" multiple onChange={(res) => { this.handleImageChange(res) }} />
                     </div>
                    </div>
                  </div>
                  <button className="save" type="submit">Guardar</button>
                </form>

                {/* <input value="Guardar" type="submit" /> */}
  						</div>
  					</div>
  				</div>
  			</div>
      </main>

    )
  }
}
