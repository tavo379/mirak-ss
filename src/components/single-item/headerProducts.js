import React, { Component } from 'react'
import styled from 'styled-components'

import Header from '../home/header'

const imgLogoStyle = {
  width:'100%',
};
const agnesiStyle = {
  width:'20%'
}
const HeaderBackground =styled.div`
background-image: url("static/headerfeed.png");
`
export default class HeaderProducts extends Component{
  render(){
    return(
      <div className="container-fluid">
        <span className="icon-back-white"><img src="../static/back-icon-white.svg"/></span>
        <div className="row header-products">
          <div className="col-md-12">
            <Header handleCategory={ this.props.handleCategory } />
          </div>
          <div className="col-md-6 col-xs-12">
            <h1>Mesas</h1>
          </div>
        </div>

      </div>
    )
  }
}
