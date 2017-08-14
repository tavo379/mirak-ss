/*this is the component of the header*/

import fetch from 'isomorphic-fetch'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// import { DropdownTrigger, DropdownContent }  from 'react-simple-dropdown'

import Dropdown from '../Dropdown.js';
import DropdownContent from '../DropdownContent.js';
import DropdownTrigger from '../DropdownTrigger.js';

// import axios from 'axios'
import { API_URL } from '../../config'

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
    fetch(`${API_URL}/category`)
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
            <div className="col-md-12 col-xs-12 text-md-right agnesi"><Link to="/agnesi-casa"><img style={agnesiStyle} src="images/agnesiwhiteh.png" alt="agnesi casa" /></Link></div>
            <div className="col-md-12 col-xs-12">
              <ul className="ListMenu">
                {this.state.data.map((categoria, index1)=>
                  <li  key={categoria.id+index1}>
                    {/*<Link to={{ pathname: '/products', search: '?id=' + categoria.id }}>
                          {categoria.name}
                    </Link>*/}
                    <Dropdown>
                      <DropdownTrigger>{categoria.name}</DropdownTrigger>
                      <DropdownContent>
                        <ul>
                          { categoria.subcategorie ?
                            categoria.subcategorie.map((subcategorie, index2) => {
                              return(
                                <li key={categoria.id+subcategorie+index1+index2}>
                                  <Link to={{ pathname: '/products/subcategoria/'+ categoria.id+`/${subcategorie} ` }}>
                                        {subcategorie}
                                  </Link>
                                </li>
                              )
                            })
                            : null
                          }
                        </ul>
                      </DropdownContent>
                    </Dropdown>
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
