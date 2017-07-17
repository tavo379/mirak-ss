import React, { Component } from 'react'
import styled from 'styled-components'
import Header from '../components/home/header'
import Footer from '../components/home/footer'
import { Carousel } from 'react-responsive-carousel'
import MobilAgnesi from '../components/agnesi-casa/agnesi-project-mobil'
const imgLogoStyle = {
  width:'100%',
};
const agnesiStyle = {
  width:'20%'
}
export default class AgnesiProject extends Component{
  render(){
    return(
    <main className="agnesi agnesi-project">
      <MobilAgnesi/>
      <div className="total-slider">
      <div>
        <div className="opacity"></div>
          <Header/>
        <Carousel showArrows={true} showStatus={false} showThumbs={false} infiniteLoop={true}  emulateTouch={true}>
          <div className="prueba-slider">
            <img src="/static/main-image.png" />
            <div className="agnesi-project">
              <button>cotiza tu proyecto</button>
              <hr/>
              <div className="icons" >
                <img className="facebook"src="static/icon1.svg"/>
                <img className="instagram"src="static/icon2.svg"/>
                <img className="correo"src="static/icon3.svg"/>
              </div>

            </div>
          </div>
          <div>
            <img src="/static/agnesi.png" />
            <p className="legend">Legend 6</p>
          </div>

        </Carousel>
      </div>
    </div>
    <Footer/>
  </main>
    )
  }
}
