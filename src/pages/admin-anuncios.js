import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Back from '../images/back.svg'
import { createAnuncio } from './api-admin.js'


export default class AnuncioForm extends Component{
  url1  = ''
  url2 = ''

  handleSubmit (ev) {
    ev.preventDefault();

    createAnuncio ( this.url, this.url2 )
    .then( (r) =>{
      console.log(r);
    });

  }
  handleImageChange(ev){
    ev.preventDefault;
    let reader = new FileReader();
    let file = ev.target.files[0];

      this.url1 = file ;
      this.url2 = file;
  }
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
                <div className="col-md-4 menu-admin">
                  <h1 className="title-admin-menu">Anuncios</h1>
                    <form onSubmit={ (ev) => { this.handleSubmit(ev) }}>
                     <div className="new-item-anuncio">
                       <span className="number-anuncio">1</span>
                       <h2>Imagen anuncio</h2>
                       <input type="file" onChange={ (res) => { this.handleImageChange(res) }} />
                       <span className="size-description">El tamaño debe ser de 1280 x 580px</span>
                     </div>
                     <div className="new-item-anuncio">
                       <span className="number-anuncio">2</span>
                       <h2>Imagen anuncio</h2>
                       <input type="file" onChange={ (res) => { this.handleImageChange(res) }} />
                       <span className="size-description">El tamaño debe ser de 1280 x 580px</span>
                     </div>
                     <button className="save">Guardar</button>
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
