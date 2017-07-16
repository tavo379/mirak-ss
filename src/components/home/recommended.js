import React, { Component } from 'react'
import styled from 'styled-components'


export default class Recommended extends Component{
  render(){
    return(
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4 recommended"><span>sofas y sillones<br/> recomienda</span></div>
          <div className="col-md-8 "><img src="../../images/recommended.png"/></div>
        </div>
      </div>
    )
  }
}
