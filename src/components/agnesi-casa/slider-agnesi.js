import React, { Component } from 'react'

import HeaderAgnesi from './headerAgnesi'


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
                  <img style={agnesiStyle} src="/images/agnesiwhiteh.png" alt="agnesi casa"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
