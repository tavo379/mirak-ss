import React, { Component } from 'react'
import { createUser } from './api-admin.js'
import { Link } from 'react-router-dom'


export default class AdminUserAdd extends Component{

  state = {
    email: '',
    password: ''
  }

  handleSubmit(ev){
    ev.preventDefault();

    createUser( this.state)
    .then( (r) =>{
      console.log(r);
    });
    this.setState({
      email: '',
      password: '',
    })
  }
  render(){
    return(
      <main id="admin-anuncios">
        <div className="container">
  				<div className="row">
  					<div className="col-md-3 back-page">
  					  <div className="back"><Link to="/admin-users"><img src="images/back.svg" alt="volver"/><span>atrás</span></Link></div>
  					</div>
  					<div className="col-md-12">
  						<div className="row width-slider">
                <div className="col-md-12"><h1 className="title-admin-menu">Agregar Usuario</h1></div>
                <form className="col-md-12" onSubmit={ (ev) => { this.handleSubmit(ev) }}>
                  <div className="row">
                    <div className="col-md-5 offset-md-4">
                      <div className="inputs">
                        <span className="inputs-title">Correo</span><br/>
                        <div className="inputs-group">
                          <input type="text" value={ this.state.email } onChange={ (res) => { this.setState({ email: res.target.value }) } } />
                        </div>
                      </div>
                      <div className="inputs">
                        <span className="inputs-title">Contraseña</span><br/>
                        <div className="inputs-group">
                          <input type="text" value={ this.state.password } onChange={ (res) => { this.setState({ password: res.target.value }) } } />
                        </div>
                      </div>
                    </div>
                  </div>
                  <button className="save" type="submit">CREAR</button>
                </form>
              </div>
  					</div>
  				</div>
  			</div>
      </main>

    )
  }
}
