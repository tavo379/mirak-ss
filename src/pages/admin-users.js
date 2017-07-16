import React, { Component } from 'react'
import Link from 'next/link'

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
              <div className="back"><Link href="/admin-menu"><a><img src="../static/back.svg"/><span>atrás</span></a></Link></div>
            </div>
            <div className="col-md-12">
              <div className="row">
                <div className="col-md-10 menu-admin">
                  <h1 className="title-admin-menu">Usuarios</h1>
                  <div className="add-user"><span className="add-user-icon">Agregar usuario</span><Link href="/admin-users-add"><a><img src="../static/add.svg"/></a></Link></div>
                  <nav className="nav-admin">
                    <ul>
                      {this.state.data.map((usuario)=>
                        <li  key={usuario.id}><div className="delete-icon"><img src="../static/x-icon.svg"/></div>{usuario.email}</li>
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
