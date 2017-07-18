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
      data: [],
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
  componentDidMount(){
    fetch('http://localhost:1337/posts/595b0da940eabbd0213d6fa7')
    .then((response) => {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
        response.status);
        return;
      }

      // Examine the text in the response
      response.json().then((data) => {
        console.log(data)
        this.setState({data: data})
      });
    })
    .catch((err) => {
      console.log('Fetch Error :-S', err);
    });

  };

  render(){
    return(
      <div className="container single-desktop">
        <div className="row product">
          <div className="col-md-12 title-single ">
            <h1>{this.state.data.nombre}</h1>
          </div>
          <div className="col-md-8 col-xs-12 padding-sigle">
            <div className="row">
              <div className="col-md-3 most-images">
                <div className="margin-item-img"><img src="images/single-mesa-1.png"/></div>
                <div><img src="images/single-mesa-2.png"/></div>
              </div>
              <div className="col-md-9"><img src="images/mesa1.png"/></div>
            </div>
          </div>
          <div className="col-md-4 col-xs-12 padding-sigle-description ">
            <div className="description">
              <h3>Descripción</h3>
              <p>
                {this.state.data.descripcion}
              </p>
              <h3>Medidas</h3>
              <p>
                {this.state.data.medidas}
              </p>
              <div className="color-group">
                <h3>Color</h3>
                <div className="color-swatches">
                  <span><label style = { { background: `${this.state.data.color}` } }></label></span>
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
                    <div className="close-icon" onClick={this.closeModal}><img src="/images/x-icon.svg"/></div>
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
