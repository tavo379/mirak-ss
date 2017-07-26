import React, { Component } from 'react'
import Header from './header'
import { Carousel } from 'react-responsive-carousel'

export default class Slider extends Component{
  render(){
    return(
      <div className="total-slider">
      <div>
        <div className="opacity"></div>
          <Header/>
        <Carousel showArrows={false} showStatus={false} showThumbs={false} infiniteLoop={true}  emulateTouch={true}>
          <div className="prueba-slider">
            <img src="images/main-image.png" alt=""/>
            <div className="row project-link ">
              <div className="col-md-4 offset-md-7 col-xs-12 title-slider">
                <h1>New Arrivals</h1>
                <div className="ver_group">
                  <span>ver</span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <img src="images/agnesi.png" alt="title"/>
            <p className="legend">Legend 6</p>
          </div>
        </Carousel>
      </div>
    </div>
    )
  }
}
