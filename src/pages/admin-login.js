import React, { Component } from 'react'
import Link from 'next/link'
import Headss from 'components/head'
/*import laoyut components*/
import { login } from './api-admin'


// function AdminLogin() {
// 	return (
// 		<main id="admin">
//     <Headss/>
// 			<div className="container">
//         <div className="row">
//           <div className="col-md-3 logo">
//             <img src="../static/syslogoblack.png"/>
//           </div>
//           <div className="col-md-12 form-admin-login">
//             <div className="form-login">
//               <h1>Administrador</h1>
//               <form>
//                 <div>
//                   <span>Correo</span><br/>
//                   <input type="text"></input>
//                 </div>
//                 <div>
//                   <span>Contraseña</span><br/>
//                   <input type="password"></input>
//                 </div>
//                 <button>Entrar</button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
// 		</main>
// 	);
// }

class AdminLogin extends Component {
	state = {
		email: '',
		password: ''
	}

	handleSubmit(ev){
		ev.preventDefault();

		login( this.state )
		.then( (r) => {
			console.log(r);
		})
		.catch( (err) => {
			console.log(err);
		})
	}

	render(){
			return (
				<div id="admin">
		    <Headss/>
					<div className="container">
		        <div className="row">
		          <div className="col-md-3 logo">
		            <img src="../static/syslogoblack.png"/>
		          </div>
		          <div className="col-md-12 form-admin-login">
		            <div className="form-login">
		              <h1>Administrador</h1>
		              <form onSubmit={ (ev) => this.handleSubmit(ev) }>
		                <div>
		                  <span>Correo</span><br/>
		                  <input type="text" onChange={ (email) => { this.setState({ email })}} ></input>
		                </div>
		                <div>
		                  <span>Contraseña</span><br/>
		                  <input type="password" onChange={ (password) => { this.setState({ password })}} ></input>
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
