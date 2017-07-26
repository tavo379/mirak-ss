import React, { Component } from 'react'
import Header from '../home/header'


export default class HeaderNosotros extends Component{
  render(){
    return(
      <div className="container-fluid">
        <span className="icon-back-white"><img src="/images/back-icon-white.svg" alt="volver"/></span>
        <div className="row header-nosotros">
          <div className="col-md-12">
            <Header handleCategory={ this.props.handleCategory } />
          </div>
          <div className="col-md-6 col-xs-12">
            <h1>¿Quiénes somos?</h1>
          </div>
        </div>

      </div>
    )
  }
}
