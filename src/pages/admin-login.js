import React, { Component } from 'react'
/*import layout components*/
import { login } from './api-admin'

class AdminLogin extends Component {
	state = {
		email: '',
		password: ''
	}

	handleSubmit = (ev) => {
		ev.preventDefault();
		login(this.state, this.props.history);
	}

	render(){
			return (
				<div id="admin">
					<div className="container">
		        <div className="row">
		          <div className="col-md-3 logo">
		            <img src="/images/syslogoblack.png"/>
		          </div>
		          <div className="col-md-12 form-admin-login">
		            <div className="form-login">
		              <h1>Administrador</h1>
		              <form onSubmit={ (ev) => this.handleSubmit(ev) }>
		                <div>
		                  <span>Correo</span><br/>
		                  <input type="text" onChange={e => this.setState({email: e.target.value})} />
		                </div>
		                <div>
		                  <span>Contraseña</span><br/>
		                  <input type="password" onChange={e => this.setState({password: e.target.value})} />
		                </div>
		                <button>Entrar</button>
		              </form>
		            </div>
		          </div>
		        </div>
		      </div>
				</div>
			);
	}
}

export default AdminLogin;
