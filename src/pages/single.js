import React, { Component } from 'react';
import queryString from 'query-string';
/*import laoyut components*/
import HeaderProducts from '../components/single-item/headerProducts'
import SingleProduct from '../components/single-item/single-product'
import SingleProductMobil from '../components/Mobile/single-product-mobil'
import Social from "../components/home/social"
import Footer from "../components/home/footer"
import Similar from "../components/single-item/similar"
import { getPost } from './api-admin';

class SinglePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null
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
        // Aqui se hace la otra magia pokemón
        product.images = JSON.parse(product.images);
        this.setState({product});
      });
  }

  render(){
    return(
      <main id="single">
      {this.state.product
        ?
        <HeaderProducts category={this.state.product._category} />
        : null
      }
        <div className="back-single"><img src="back.svg" alt="volver"/><span>Mesas</span></div>
        <div className="back-single-desktop">
          <span>ATRÁS</span>
          <span className="back-line"></span>
        </div>
        {this.state.product
          ?
          <SingleProduct product={this.state.product} />
          :null}
        <SingleProductMobil/>
        <Similar />
        <div className="col-md-12 redes">
          <h2>Síguenos en nuestras redes sociales</h2>
        </div>
        <Social />
        <Footer />
      </main>
    )
  }
}

export default SinglePage;
