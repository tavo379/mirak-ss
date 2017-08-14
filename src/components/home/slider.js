import React, { Component } from 'react'
import Header from './header'
import { Carousel } from 'react-responsive-carousel'
import { API_URL } from '../../config'

export default class Slider extends Component {
  constructor(props){
    super(props);
    this.state = {data: []};
  }
  componentDidMount(){
    fetch(`${API_URL}/sliders`)
    .then((response) => {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
        response.status);
        return;
      }

      // Examine the text in the response
      response.json().then((data) => {
        this.setState({data})
      });
    }
  )
  .catch((err) => {
    console.log('Fetch Error :-S', err);
  });
  }
  render(){
    return(
      <div className="total-slider">
      <div>
        <div className="opacity"></div>
          <Header/>
        <Carousel showArrows={false} showStatus={false} showThumbs={false} infiniteLoop={true}  emulateTouch={true}>
            {this.state.data.map((slider)=>
              <div className="prueba-slider" key={slider.id}>
                {
                  slider.images.length ?
                    <img src={API_URL + slider.images[0]} alt=""/>
                    : null
                  }
                <div className="row project-link ">
                <div className="col-md-4 offset-md-7 col-xs-12 title-slider">
                  <h1>{slider.titulo}</h1>
                  <div className="ver_group">
                    <span>ver</span>
                  </div>
                </div>
              </div>
              </div>
            )}

        </Carousel>
      </div>
    </div>
    )
  }
}
