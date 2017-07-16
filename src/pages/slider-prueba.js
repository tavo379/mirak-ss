import React from 'react';
import Headss from 'components/head'
import Header from 'components/home/header'

import { Carousel } from 'react-responsive-carousel';



function HomePage() {
  return (

      <div class="demo-carousel">
        <Headss/>
        <div className="opacity"></div>
          <Header/>
        <Carousel showArrows={false} showStatus={false} showThumbs={false} infiniteLoop={true}  emulateTouch={true}>

          <div className="prueba-slider">
            <img src="/static/main-image.png" />
            <div className="row project-link ">
              <div className="col-md-4 offset-md-7 col-xs-12">
                <h1>New Arrivals</h1>
                <div className="ver_group">
                  <span>ver</span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <img src="/static/agnesi.png" />
            <p className="legend">Legend 6</p>
          </div>

        </Carousel>
      </div>

  );
}
export default HomePage;
