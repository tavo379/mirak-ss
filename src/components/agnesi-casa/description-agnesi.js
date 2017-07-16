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


export default class AgnesiDes extends Component{
  constructor() {
    super();

    this.state = {
      modalIsOpen: false,
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  render(){
    return(
      <div className="container">
        <div className="row Promo">
          <div className="col-md-6 "><img src="static/agnesi-black.png"/></div>
          <div className="col-md-6 col-xs-12 padding-sigle-description ">
            <div className="description-agnesi">

              <p>
                Un equipo completo en asesoría en diseño de interior,
                elaboración de muebles, paquetes de decoración y una línea
                exclusiva de diseño interior.
              </p>

              <p>
                Somos proveedores número uno de telas nacionales e importadas de distintos
                lugares del mundo -España, Bélgica e Italia, entre algunos- con los diseños más
                innocadores y la mejor calidad.
              </p>
            </div>
          </div>
          <div className="col-md-12">
            <div className="proyectos">
              <span>Proyectos</span><img src="/static/next-black.svg"/>
            </div>
            <div className="order">
              <Button onClick={this.openModal}>Cotiza tu proyecto</Button>
              <Modal
                isOpen={this.state.modalIsOpen}
                onRequestClose={this.closeModal}
                style={customStyles}
                className="Modal"
                contentLabel="Example Modal"
                >
                  <div className="container-fluid">
                  <div className="row modal-center">
                    <div className="close-icon" onClick={this.closeModal}><img src="../static/x-icon.svg"/></div>
                    <div className="col-md-12">
                      <h1>Contáctanos</h1>
                    </div>
                    <div className="col-md-6">
                    <form className="order-form">
                      <input type="text" placeholder="Nombre" />
                      <input type="tel" placeholder="Teléfono"/>
                      <input type="email" placeholder="Correo electrónico"/>
                      <textarea type="Mensaje" placeholder="Mensaje"/>
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
