import React, { Component } from 'react'
import styled from 'styled-components'
import Modal from 'react-modal'
import { API_URL } from '../../config';

import { ReactImageMagnify } from 'react-image-magnify';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};
const Button = styled.button`
background: #000000;
border-radius: 16px;
padding: 10px 20px;
color: #fff;
text-transform: uppercase;
font-size: 20px;
border-style: none;
`


export default class SingleProduct extends Component{
  constructor() {
    super();
    this.state = {
      modalIsOpen: false,
      colorSeleccionado: 'color1',
      imagenSeleccionada: 0
    };
  }

  openModal = () => {
    this.setState({modalIsOpen: true});
  }

  closeModal = () => {
    this.setState({modalIsOpen: false});
  }

  /**
   * Evento al seleccinar color
   * 
   * @param {String} propColor nueo color seleccionado
   */
  cambioColor (propColor) {
    this.setState({
      colorSeleccionado: propColor
    })
  }
  /**
   * Evento al seleccionar una imagen
   * 
   * @param {Integer} propImagen Nuevo index de la imagen seleccionada
   */
  cambioImagen (propImagen) {
    this.setState({
      imagenSeleccionada: propImagen
    })
  }
  render(){
    const { product } = this.props;

    let color = product[this.state.colorSeleccionado]
    let urlImagen = product.images[this.state.imagenSeleccionada][this.state.colorSeleccionado]
    
    return(
      <div className="container single-desktop">
        <div className="row product">
          <div className="col-md-12 title-single ">
            <h1>{product.nombre}</h1>
          </div>
          <div className="col-md-8 col-xs-12 padding-sigle">
            <div className="row">
              <div className="col-md-3 most-images">
                {/* Motrar las imagenes en miniatura, no la seleccionada */}
                {product.images.map((image, index) => {
                  if (this.state.imagenSeleccionada === index) {
                    return null
                  }
                  let url = image[this.state.colorSeleccionado]
                  return (
                    <div className="margin-item-img"><img key={'imagen-'+index} src={url} onClick={this.cambioImagen.bind(this, index)} /></div>
                  )
                })}
              </div>
              <div className="col-md-9">                

                {/* Foto principal */}
                <div className="pointer">
                  {/* Titulo */}
                  <div className="pointer__instructions">
                    <span style={{width:'100%', textAlign: 'center'}}>{d.titulo}</span>
                  </div>
                  <ReactImageMagnify {...{
                      largeImage: {
                          alt: '',
                          src: urlImagen,
                          width: 800,
                          height: 800
                      },
                      smallImage: {
                          alt: 'Wristwatch by Ted Baker London',
                          src: urlImagen,
                          width: 300,
                          height: 300
                      }
                  }} />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-xs-12 padding-sigle-description ">
            <div className="description">
              <h3>Descripción</h3>
              <p>
                {product.descripcion}
              </p>
              <h3>Medidas</h3>
              <p>
                {product.medidas}
              </p>
              <div className="color-group">
                <h3>Color</h3>
                <div className="color-swatches">
                  <span><label style = { { background: `${product.color1}` } } onClick={this.cambioColor.bind(this, 'color1')}></label></span>
                  <span><label style = { { background: `${product.color2}` } } onClick={this.cambioColor.bind(this, 'color2')}></label></span>
                  <span><label style = { { background: `${product.color3}` } } onClick={this.cambioColor.bind(this, 'color3')}></label></span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12">
            <div className="order">
              <Button onClick={this.openModal}>Haz tu pedido</Button>
              <a href="">O cotiza tu mueble personalizado</a>
              <Modal
                isOpen={this.state.modalIsOpen}
                onRequestClose={this.closeModal}
                style={customStyles}
                className="Modal"
                contentLabel="Example Modal"
                >
                  <div className="container-fluid">
                  <div className="row modal-center">
                    <div className="close-icon" onClick={this.closeModal}><img src="/images/x-icon.svg" alt="cerrar "/></div>
                    <div className="col-md-12">
                      <h1>Contáctanos</h1>
                    </div>
                    <div className="col-md-6">
                    <form className="order-form">
                      <input type="text" placeholder="Nombre" />
                      <input type="tel" placeholder="Teléfono"/>
                      <input type="email" placeholder="Correo electrónico"/>
                      <div className="number-group">
                        <label>Cantidad</label><input type="number"></input>
                      </div>
                      <div className="color-group">
                        <label>Color</label>
                        <div className="color-swatches">
                          <span><label className="color-1"></label></span>
                          <span><label className="color-2"></label></span>
                          <span><label className="color-3"></label></span>
                        </div>
                      </div>
                      <button>ENVIAR</button>

                    </form>
                  </div>
                  <div className="col-md-12 email-direction"><span>O escríbenos a: proyectos@sofasysillones.com.mx</span></div>
                </div>
                  </div>
                </Modal>
              </div>
            </div>
          </div>
        </div>
      )
    }

  }
