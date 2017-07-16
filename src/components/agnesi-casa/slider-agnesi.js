import React, { Component } from 'react'
import styled from 'styled-components'

import HeaderAgnesi from './headerAgnesi'

const imgLogoStyle = {
  width:'100%',
};
const agnesiStyle = {
  width:'60%'
}
export default class SliderAgnesi extends Component{
  render(){
    return(
      <div className="container-fluid">
        <div className="row slider-agnesi">
          <div className="opacity"></div>
          <div className="col-md-12">
            <div className="agnesi-header_mobile"><HeaderAgnesi/></div>
            <div className="container">
              <div className="row agnesi-hero-content">
                <div className="col-md-12 col-xs-12 hero">
                  <img style={agnesiStyle} src="/static/agnesiwhiteh.png"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
