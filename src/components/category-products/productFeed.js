import React, { Component } from 'react'
import fetch from 'isomorphic-fetch'
import styled from 'styled-components'
import { getProductsByCategory } from '../../pages/api-admin'

export default class ProductFeed extends Component{
  constructor(props){
    super(props);
    this.state = {
      data: [],
    };
  }
  componentWillReceiveProps(nextProps){
    if( nextProps !== this.props){
      this.setState({
        data:nextProps.products
      })
      // console.log(this.state.data);
    }
  }
  render(){
    return(
      <div className="container">
        <div className="row product">
        { this.state.data.map(( products ) =>
          <div key = { products.id } className="col-md-6 col-xs-6 feed-box">
            <div><img src="../../iamges/mesa1.png"/></div>
            <div className="feed-description"><span>{ products.nombre }</span><hr/></div>
            <div className="feed-single-redirection"><a href="#">Ver</a></div>
          </div>
        )}
        </div>
      </div>
    )
  }
}
