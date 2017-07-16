import React, { Component } from 'react'
import styled from 'styled-components'



const imgLogoStyle = {
  width:'100%',
};
const agnesiStyle = {
  width:'20%'
}
export default class SliderMobil extends Component{
  render(){
    return(
      <div className="container-fluid slider-mobil">
        <div className="row slider">
          <div className="opacity"></div>
          <div className="col-md-12 col-xs-12">
            <div className="row project-link">
              <div className="col-md-4 offset-md-7 col-xs-12">
                <h1>New Arrivals</h1>
              </div>
            </div>
          </div>

        </div>
      </div>
    )
  }
}
