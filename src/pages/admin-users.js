import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Back from '../images/back.svg'
import Delete from '../images/x-icon.svg'
import Add from '../images/add.svg'

export default class AdminUsers extends Component{
  constructor(props){
    super(props);
    this.state = {data: []};
  }
  componentDidMount(){
    fetch('http://localhost:1337/users')
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
  render(){
    return(
      <main id="admin-user">
        <div className="container">
          <div className="row">
            <div className="col-md-3 back-page">
              <div className="back"><Link to="/admin-menu"><img src={ Back }/><span>atrás</span></Link></div>
            </div>
            <div className="col-md-12">
              <div className="row">
                <div className="col-md-10 menu-admin">
                  <h1 className="title-admin-menu">Usuarios</h1>
                  <div className="add-user"><span className="add-user-icon">Agregar usuario</span><Link to="/admin-user-add"><img src={Add} /></Link></div>
                  <nav className="nav-admin">
                    <ul>
                      {this.state.data.map((usuario)=>
                        <li  key={usuario.id}><div className="delete-icon"><img src={Delete}/></div>{usuario.email}</li>
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
