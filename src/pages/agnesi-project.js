import React, { Component } from 'react'
import Header from '../components/home/header'
import Footer from '../components/home/footer'
import { Carousel } from 'react-responsive-carousel'
import MobilAgnesi from '../components/agnesi-casa/agnesi-project-mobil'

export default class AgnesiProject extends Component{
   componentDidMount() {
      document.title = "Agnesi casa";
  }
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
            <img src="/images/main-image.png" alt=""/>
            <div className="agnesi-project">
              <button>cotiza tu proyecto</button>
              <hr/>
              <div className="icons" >
                <img className="facebook"src="images/icon1.svg" alt="facebook"/>
                <img className="instagram"src="images/icon2.svg" alt="instagram"/>
                <img className="correo"src="images/icon3.svg" alt="correo"/>
              </div>

            </div>
          </div>
          <div>
            <img src="/images/agnesi.png" alt="" />
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
