import React, { Component } from 'react';
import queryString from 'query-string';
/*import laoyut components*/
import HeaderNosotros from '../components/nosotros/header-nosotros'
import SingleProductMobil from '../components/Mobile/single-product-mobil'
import Social from "../components/home/social"
import Footer from "../components/home/footer"
import { getPost } from './api-admin';

class Nosotros extends Component {
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
        <HeaderNosotros />
        <div className="back-single"><img src="back.svg" alt="volver"/><span>¿Quiénes somos?</span></div>
        <SingleProductMobil/>
        <div className="container-text">
          <p>
            Somos un equipo completo de asesoría en diseño de interior, elaboración de muebles, paquetes de decoración y una línea<br/>
            exclusiva de diseño interior. Somos proveedores número uno de telas nacionales e importadas de distintos lugares del mundo<br/>
            -España. Bélgica e Italia, entre algunos- con los diseños más innovadores y la mejor calidad. Estamos cambiando el concepto<br/>
            de interiorismo desde 1970. Estudio Uno es el principio del concepto de Sofás & Sillones Co.<br/>
            <span className="filosofia">Nuestra Filosofía</span>
            Crear ambientes con características únicas para cada cliente de acuerdo a su proyecto, dimensiones o espacio.
          </p>
          <h2>Síguenos en nuestras redes sociales</h2>
        </div>
        <Social />
        <Footer />
      </main>
    )
  }
}

export default Nosotros;
