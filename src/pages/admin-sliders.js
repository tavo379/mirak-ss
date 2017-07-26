import React, { Component } from 'react'
import { createSlider } from './api-admin.js'
import { Link } from 'react-router-dom'

export default class SliderForm extends Component{
  files = [];
  constructor(props) {
    super(props);
    this.state = {
      titulo : '',
      subtitulo: '',
      sliderlink: ''
    };
  }


  handleSubmit = (ev) => {
    ev.preventDefault();
    createSlider(this.state, this.files).then(r => {
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
              <div className="row width-slider">
                <div className="col-md-12"><h1 className="title-admin-menu">Sliders</h1></div>
                <form
                  className="col-md-12"
                  onSubmit={ev => {
                    this.handleSubmit(ev);
                  }}
                  >
                  <div className="row">
                    <div className="col-md-8">
                      <span className="number-anuncio">1</span>
                      <div className="inputs">
                        <span className="inputs-title">Título</span><br/>
                        <div className="inputs-group">
                        <input
                          type="text"
                          onChange={res => {
                            this.setState({ titulo: res.target.value });
                          }}
                        /><span> Max. 30 caracteres</span>
                        </div>
                        <span className="inputs-title">subtítulo</span><br/>
                        <div className="inputs-group">
                        <input
                          type="text"
                          onChange={res => {
                            this.setState({ subtitulo: res.target.value });
                          }}
                        /><span> Max. 30 caracteres</span>
                        </div>
                        <span className="inputs-title">Link del slider</span><br/>
                        <div className="inputs-group">
                        <input
                          type="text"
                          onChange={res => {
                            this.setState({ sliderlink: res.target.value });
                          }}
                        />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="new-item-anuncio">
                        <h2>Imagen slider</h2>
                        <button>Seleccionar archivo</button>
                        <input
                          type="file"
                          onChange={res => {
                            this.handleImageChange(res);
                          }}
                        />
                        <span className="size-description">El tamaño debe ser de 1280 x 580px</span>
                      </div>
                    </div>
                    <button className="save" type="submit">Guardar</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    )
  }
}
