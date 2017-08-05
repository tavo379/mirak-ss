import React, { Component } from 'react'
import Header from '../home/header'


export default class HeaderProducts extends Component{
  render(){
    const { category } = this.props;
    console.log(category);
    return(
      <div className="container-fluid">
        <span className="icon-back-white"><img src="/images/back-icon-white.svg" alt="volver"/></span>
        <div className="row header-products">
          <div className="col-md-12">
            <Header handleCategory={ this.props.handleCategory } />
          </div>
          <div className="col-md-6 col-xs-12">
            <h1>{category.name}</h1>
          </div>
        </div>

      </div>
    )
  }
}
