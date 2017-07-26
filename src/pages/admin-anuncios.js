import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { createAnuncio } from './api-admin.js'


export default class AnuncioForm extends Component{
  files = [];

  handleSubmit = (ev) => {
    ev.preventDefault();
    createAnuncio(this.files).then(r => {
      console.log(r);
    });
  }

  handleImageChange = (ev) => {
    // eslint-disable-next-line
    ev.preventDefault;
    const file = ev.target.files[0];
    this.files.push(file);
  }

  render(){
    return(
      <main id="admin-anuncios">
        <div className="container">
          <div className="row">
            <div className="col-md-3 back-page">
              <div className="back"><Link to="/admin-menu"><img src="images/back.svg" alt="volver"/><span>atrás</span></Link></div>
            </div>
            <div className="col-md-12">
              <div className="row">
                <div className="col-md-4 menu-admin">
                  <h1 className="title-admin-menu">Anuncios</h1>
                  <form
                    className="col-md-12"
                    onSubmit={ev => {
                      this.handleSubmit(ev);
                    }}
                  >
                     <div className="new-item-anuncio">
                       <span className="number-anuncio">1</span>
                       <h2>Newsletter imagen</h2>
                       <input
                         type="file"
                         onChange={res => {
                           this.handleImageChange(res);
                         }}
                       />
                       <span className="size-description">El tamaño debe ser de 1270 x 870px</span>
                     </div>
                     <div className="new-item-anuncio">
                       <span className="number-anuncio">2</span>
                       <h2>Sofás & sillones recomienda imagen</h2>
                       <input
                         type="file"
                         onChange={res => {
                           this.handleImageChange(res);
                         }}
                       />
                       <span className="size-description">El tamaño debe ser de 1480 x 1016px</span>
                     </div>
                     <button className="save" type="submit">Guardar</button>
                    </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    )
  }
}
