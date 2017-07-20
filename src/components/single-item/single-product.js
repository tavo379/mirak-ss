import React, { Component } from 'react'
import styled from 'styled-components'
import Modal from 'react-modal'


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
    };
  }

  openModal = () => {
    this.setState({modalIsOpen: true});
  }

  closeModal = () => {
    this.setState({modalIsOpen: false});
  }

  render(){
    const { product } = this.props;
    return(
      <div className="container single-desktop">
        <div className="row product">
          <div className="col-md-12 title-single ">
            <h1>{product.nombre}</h1>
          </div>
          <div className="col-md-8 col-xs-12 padding-sigle">
            <div className="row">
              <div className="col-md-3 most-images">
                <div className="margin-item-img"><img src="images/single-mesa-1.png" alt=""/></div>
                <div><img src="images/single-mesa-2.png" alt=""/></div>
              </div>
              <div className="col-md-9"><img src="images/mesa1.png" alt=""/></div>
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
                  <span><label style = { { background: `${product.color}` } }></label></span>
                  <span><label className="color-2"></label></span>
                  <span><label className="color-3"></label></span>
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
