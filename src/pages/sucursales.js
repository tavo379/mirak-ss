import React, { Component } from 'react';
import queryString from 'query-string';
/*import laoyut components*/
import HeaderSucursales from '../components/sucursales/header-sucursales'
import SingleProductMobil from '../components/Mobile/single-product-mobil'
import Social from "../components/home/social"
import Footer from "../components/home/footer"
import { getPost } from './api-admin';

class Sucursales extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {}
    };
  }

  componentDidMount() {
    this.handleProduct();
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      this.setState({ product: {} });
      this.handleProduct();
    }
  }

  handleProduct = () => {
    const { id } = queryString.parse(this.props.location.search);
    getPost(id)
      .then(product => {
        this.setState({product});
      });
  }

  render(){
    return(
      <main id="single">
        <HeaderSucursales />
        <div className="back-single"><img src="back.svg" alt="volver"/><span>¿Quiénes somos?</span></div>
        <SingleProductMobil/>
        <div className="container text-sucursales">
          <div className="row">
            <div className="col-md-6">
              <span>Guadalajara</span><br/><br/>
              <p>
                López Mateos Norte No.33<br/>
                Guadalajara, Jalisco, Mex.<br/><br/>
                Tel. 01 (33) 36 16 05 05<br/><br/>
                Horario:<br/><br/>
                Lunes a viernes de 10 a 14 horas y de 16 a 20 horas<br/>
                Sábado de 10 a 14 horas
              </p>
            </div>
            <div className="col-md-6">
              <span>Puerto Vallarta</span><br/><br/>
              <p>
                Blvd. Francisco Medina Ascencio km. 7.5, Plaza Neptuno<br/>
                Local A3 y A20<br/>
                Marina Vallarta, Puerto Vallarta, Jalisco, Mex.<br/><br/>
                Tel. (322) 22 10 300<br/><br/>
                Horario:<br/><br/>
                Lunes a viernes de 10 a 15 horas y de 16 a 20 horas<br/>
                Sábado de 10 a 14 horas
              </p>
            </div>
            <div className="col-md-12">
              <h2>Síguenos en nuestras redes sociales</h2>
            </div>
          </div>
        </div>
        <Social />
        <Footer />
      </main>
    )
  }
}

export default Sucursales;
