import React, { Component } from 'react';
/*import laoyut components*/
import Slider from '../components/home/slider'
import Promo from '../components/home/promo'
import Recommended from "../components/home/recommended"
import Social from "../components/home/social"
import Footer from "../components/home/footer"
import HeaderMobil from "../components/Mobile/header-mobil"
import { API_URL } from '../config'

export default class HomePage extends Component {
  constructor(props){
    super(props);
    this.state = {data: ''};
  }
  componentDidMount(){
    fetch(`${API_URL}/anuncios`)
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
    console.log(this.state.data)
    return(
      <main>
  			<HeaderMobil />
  			<Slider/>
  			<div className="container-fluid">
  				<div className="row">
  					<div className="col-md-12 col-xs-12 text-md-right agnesi-mobil">
  						<img src="images/agnesi-black.png" alt="logo agnesi negro"/>
  					</div>
  				</div>
  			</div>
  			{/*<h1>Página principal</h1>
  			<Link href="/about">
  				<a>Ir a <em>/about</em></a>
  			</Link>*/}
  			<Promo anuncios = {this.state.data} />
  			<div className="container-fluid">
  				<div className="row">
  					<div className="banner-cotizacion col-md-12 text-md-center ">
  						<h1>Cotiza tu proyecto</h1>
  					</div>
  				</div>
  			</div>
  			<Recommended anuncios = {this.state.data} />
  			<Social />
  			<Footer />
  		</main>
    )
  }
}
