/*this is the component of the header*/

import fetch from 'isomorphic-fetch'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// import axios from 'axios'

const imgLogoStyle = {
  width:'100%',
};
const agnesiStyle = {
  width:'20%'
}
export default class Header extends Component{
  constructor(props){
    super(props);
    this.state = {data: []};
  }
  componentDidMount(){
    fetch('http://localhost:1337/category')
    .then((response) => {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
        response.status);
        return;
      }

      // Examine the text in the response
      response.json().then((data) => {
        this.setState({data})
      });
    }
  )
  .catch((err) => {
    console.log('Fetch Error :-S', err);
  });
}
  render(){
    return(
      <div className="container-fluid mobile-feed-page">
        <div className="row header">
          <div className="col-md-2 flex syslogo"><Link to="/"><img style={imgLogoStyle} src="images/syslogowhite.png" alt="inicio"/></Link></div>
          <div className="col-md-10">
            <div className="row">
            <div className="col-md-12 col-xs-12 text-md-right agnesi"><Link to="/agnesi-project"><img style={agnesiStyle} src="images/agnesiwhiteh.png" alt="agnesi casa" /></Link></div>
            <div className="col-md-12 col-xs-12">
              <ul className="ListMenu">
                {this.state.data.map((categoria)=>
                  <li  key={categoria.id}>
                  <Link to={{ pathname: '/products', search: '?id=' + categoria.id }}>
                        {categoria.name}
                  </Link>
                  </li>
                )}
              </ul>
            </div>
          </div>
          </div>
        </div>
      </div>
    )
  }
}
