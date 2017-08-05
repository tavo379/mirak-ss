import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { API_URL } from '../config';
import { deleteUser } from './api-admin.js';

export default class AdminUsers extends Component{
  constructor(props){
    super(props);
    this.state = {data: []};
  }
  componentDidMount(){
    fetch(`${API_URL}/users`)
    .then((response) => {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
        response.status);
        return;
      }

      // Examine the text in the response
      response.json().then((data) => {
        console.log('data del servicio users ',data)
        this.setState({data: data})
      });
    })

    .catch((err) => {
      console.log('Fetch Error :-S', err);
    });
  }
  handleDelete(user_id) {
    deleteUser(user_id)
      .then(()=> {
        for( var i = 0 ; i < this.state.data.length; i++) {
          if( user_id == this.state.data[i].id) {
            this.state.data.splice(i, 1)
            break;
          }
        };
        this.setState({
          data: this.state.data
        })

      })
  }
  render(){
    return(
      <main id="admin-user">
        <div className="container">
          <div className="row">
            <div className="col-md-3 back-page">
              <div className="back"><Link to="/admin-menu"><img src="images/back.svg" alt="volver"/><span>atrás</span></Link></div>
            </div>
            <div className="col-md-12">
              <div className="row">
                <div className="col-md-10 menu-admin">
                  <h1 className="title-admin-menu">Usuarios</h1>
                  <div className="add-user"><Link to="/admin-user-add"><img src="images/add.svg" alt="agregar"/><span className="add-user-icon">Agregar usuario</span></Link></div>
                  <nav className="nav-admin">
                    <ul>
                      {this.state.data.map((usuario)=>
                        <li  key={usuario.id}><div className="delete-icon" onClick={ this.handleDelete.bind(this, usuario.id) }><img src="images/x-icon.svg" alt="cerrar"/></div>{usuario.email}</li>
                      )}
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    )
  }
}
