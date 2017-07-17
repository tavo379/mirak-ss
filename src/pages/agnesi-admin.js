import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Back from '../images/back.svg'

export default class AgnesiAdmin extends Component{
  render(){
    return(
      <main id="admin-anuncios">
        <div className="container">
  				<div className="row">
  					<div className="col-md-3 back-page">
  						 <div className="back"><Link to="/admin-menu"><img src={ Back }/><span>atrás</span></Link></div>
  					</div>
  					<div className="col-md-12">
  						<div className="row">
                <div className="col-md-12"><h1 className="title-admin-menu agnesi-menu">Agnesi casa</h1></div>
                <div className="col-md-5 offset-md-1">
                    <div className="agnesi-description-area">
                      <h3>descripcion</h3><span>max. 140 caracteres</span>

                    </div>
                    <textarea></textarea>
                </div>
  							<div className="col-md-5 offset-md-1">

  					       <div className="new-item-anuncio  agnesi-admin-images">

                     <h2>Imagenes principales agnesi</h2>
                     <span className="size-description">El tamaño debe ser de 1280 x 580px</span>
                     <button>Seleccionar archivo</button>
                     <button>Seleccionar archivo</button>
                     <button>Seleccionar archivo</button>
                     <button>Seleccionar archivo</button>
                     <button>Seleccionar archivo</button>
                   </div>

  							</div>
                <div className="col-md-12"><h2 className="title-admin-menu agnesi-menu subtitle">proyectos</h2></div>
                  <div className="col-md-5 offset-md-1">
                      <span className="number-anuncio">1</span>
                      <div className="agnesi-description-area agnesi-projects">
                        <span>Nombre proyecto</span>
                        <div className="inputs-group">
                          <input type="text"></input><span> Max. 30 caracteres</span>
                        </div>
                      </div>
                  </div>
    							<div className="col-md-5 offset-md-1 projects-images">

    					       <div className="new-item-anuncio  agnesi-admin-images">

                       <h2>Imagenes principales agnesi</h2>
                       <span className="size-description">El tamaño debe ser de 1280 x 580px</span>
                       <button>Seleccionar archivo</button>
                       <button>Seleccionar archivo</button>
                       <button>Seleccionar archivo</button>
                       <button>Seleccionar archivo</button>
                       <button>Seleccionar archivo</button>
                     </div>


                </div>

                <button className="save">Guardar</button>
  						</div>
  					</div>
  				</div>
  			</div>
      </main>
    )
  }
}
