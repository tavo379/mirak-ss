import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { createProjects } from './api-admin.js'

export default class AgnesiAdmin extends Component{
  filesProject = [];
  constructor(props){
    super(props);
    this.state = {
      titulo1: '',
      titulo2: '',
      titulo3: '',
      titulo4: '',
      titulo5: ''
    };
    for (var i = 0; i < 30; i++) {
      this.filesProject[i] = null;
    }
  }
  handleImageChange = (ev, index) => {
    // eslint-disable-next-line
    ev.preventDefault;
    const file = ev.target.files[0];
    this.filesProject[index] = file;
  }

  handleSubmit = (ev) => {
    ev.preventDefault();
    createProjects(this.state, this.files).then(r => {
      console.log(r);
    });
  }
  render() {
    let self = this;

    return(
      <main id="admin-anuncios">
        <div className="container">
  				<div className="row">
  					<div className="col-md-3 back-page">
  						 <div className="back"><Link to="/admin-menu"><img src="images/back.svg" alt="volver"/><span>atrás</span></Link></div>
  					</div>
  					<div className="col-md-12">
  						<div className="row">
                <div className="col-md-12"><h1 className="title-admin-menu agnesi-menu">Agnesi casa</h1></div>
                <div className="col-md-5 offset-md-1">
                    <div className="agnesi-description-area">
                      <h3>titulo</h3><span>max. 140 caracteres</span>
                      <input
                        type="text"
                        defaultValue = {this.state.titulo1}
                        onChange={res => {
                          this.setState({ titulo1: res.target.value });
                        }}
                      />
                    </div>
                    <textarea></textarea>
                </div>
  							<div className="col-md-5 offset-md-1">
  					       <div className="new-item-anuncio  agnesi-admin-images">
                    <h2>Imagenes principales agnesi</h2>
                    <span className="size-description">El tamaño debe ser de 1280 x 580px</span>
                    {[0,1,2,3,4].map(function(index) {
                      return (
                        <div className="button-input" key={'image-agnesi-'+index}>
                          Selecionar archivo
                          <input
                            type="file"
                            onChange={res => {
                              self.handleImageChange(res, index);
                            }}
                          />
                        </div>
                      )
                    })}
                   </div>
  							</div>
                <div className="col-md-12"><h2 className="title-admin-menu agnesi-menu subtitle">proyectos</h2></div>
                  <div className="col-md-5 offset-md-1">
                      <span className="number-anuncio">1</span>
                      <div className="agnesi-description-area agnesi-projects">
                        <span>Nombre proyecto</span>
                        <div className="inputs-group">
                        <input
                          type="text"
                          defaultValue = {this.state.titulo2}
                          onChange={res => {
                            this.setState({ titulo2: res.target.value });
                          }}
                        /><span> Max. 30 caracteres</span>
                        </div>
                      </div>
                  </div>
    							<div className="col-md-5 offset-md-1 projects-images">
    					      <div className="new-item-anuncio  agnesi-admin-images">
                      <h2>Imagenes principales agnesi</h2>
                      <span className="size-description">El tamaño debe ser de 1280 x 580px</span>
                      {[5,6,7,8,9].map((index)=>{
                        return (
                          <div className="button-input" key={'image-agnesi-'+index}>
                            Selecionar archivo
                            <input
                              type="file"
                              onChange={res => {
                                self.handleImageChange(res, index);
                              }}
                            />
                          </div>
                        )
                      })}
                    </div>
                  </div>
                  <div className="col-md-5 offset-md-1">
                      <span className="number-anuncio">2</span>
                      <div className="agnesi-description-area agnesi-projects">
                        <span>Nombre proyecto</span>
                        <div className="inputs-group">
                        <input
                          type="text"
                          defaultValue = {this.state.titulo3}
                          onChange={res => {
                            this.setState({ titulo3: res.target.value });
                          }}
                        /><span> Max. 30 caracteres</span>
                        </div>
                      </div>
                  </div>
                  <div className="col-md-5 offset-md-1 projects-images">
                    <div className="new-item-anuncio  agnesi-admin-images">
                      <h2>Imagenes principales agnesi</h2>
                      <span className="size-description">El tamaño debe ser de 1280 x 580px</span>
                      {[10,11,12,13,14].map((index)=>{
                        return (
                          <div className="button-input" key={'image-agnesi-'+index}>
                            Selecionar archivo
                            <input
                              type="file"
                              onChange={res => {
                                self.handleImageChange(res, index);
                              }}
                            />
                          </div>
                        )
                      })}
                    </div>
                  </div>
                  <div className="col-md-5 offset-md-1">
                      <span className="number-anuncio">3</span>
                      <div className="agnesi-description-area agnesi-projects">
                        <span>Nombre proyecto</span>
                        <div className="inputs-group">
                        <input
                          type="text"
                          defaultValue = {this.state.titulo4}
                          onChange={res => {
                            this.setState({ titulo4: res.target.value });
                          }}
                        /><span> Max. 30 caracteres</span>
                        </div>
                      </div>
                  </div>
    							<div className="col-md-5 offset-md-1 projects-images">
    					      <div className="new-item-anuncio  agnesi-admin-images">
                      <h2>Imagenes principales agnesi</h2>
                      <span className="size-description">El tamaño debe ser de 1280 x 580px</span>
                      {[15,16,17,18,19].map((index)=>{
                        return (
                          <div className="button-input" key={'image-agnesi-'+index}>
                            Selecionar archivo
                            <input
                              type="file"
                              onChange={res => {
                                self.handleImageChange(res, index);
                              }}
                            />
                          </div>
                        )
                      })}
                    </div>
                  </div>
                  <div className="col-md-5 offset-md-1">
                      <span className="number-anuncio">4</span>
                      <div className="agnesi-description-area agnesi-projects">
                        <span>Nombre proyecto</span>
                        <div className="inputs-group">
                        <input
                          type="text"
                          defaultValue = {this.state.titulo5}
                          onChange={res => {
                            this.setState({ titulo5: res.target.value });
                          }}
                        /><span> Max. 30 caracteres</span>
                        </div>
                      </div>
                  </div>
    							<div className="col-md-5 offset-md-1 projects-images">
    					      <div className="new-item-anuncio  agnesi-admin-images">
                      <h2>Imagenes principales agnesi</h2>
                      <span className="size-description">El tamaño debe ser de 1280 x 580px</span>
                      {[20,21,22,23,24].map((index)=>{
                        return (
                          <div className="button-input" key={'image-agnesi-'+index}>
                            Selecionar archivo
                            <input
                              type="file"
                              onChange={res => {
                                self.handleImageChange(res, index);
                              }}
                            />
                          </div>
                        )
                      })}
                    </div>
                  </div>
                  <div className="col-md-5 offset-md-1">
                      <span className="number-anuncio">5</span>
                      <div className="agnesi-description-area agnesi-projects">
                        <span>Nombre proyecto</span>
                        <div className="inputs-group">
                        <input
                          type="text"
                          defaultValue = {this.state.titulo6}
                          onChange={res => {
                            this.setState({ titulo6: res.target.value });
                          }}
                        /><span> Max. 30 caracteres</span>
                        </div>
                      </div>
                  </div>
    							<div className="col-md-5 offset-md-1 projects-images">
    					      <div className="new-item-anuncio  agnesi-admin-images">
                      <h2>Imagenes principales agnesi</h2>
                      <span className="size-description">El tamaño debe ser de 1280 x 580px</span>
                      {[25,26,27,28,29].map((index) => {
                        return (
                          <div className="button-input" key={'image-agnesi-6-'+index}>
                            Selecionar archivo
                            <input
                              type="file"
                              onChange={res => {
                                self.handleImageChange(res, index);
                              }}
                            />
                          </div>
                        )
                      })}
                     </div>
                  </div>
                <button className="save" onClick={ this.handleSubmit.bind(this) }>Guardar</button>
  						</div>
  					</div>
  				</div>
  			</div>
      </main>
    )
  }
}
