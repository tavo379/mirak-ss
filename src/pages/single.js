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
      products: []
    };
  }
  omponentDidMount() {
    this.handleProducts();
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      this.setState({ products: [] });
      this.handleProducts();
    }
  }

  handleProducts = () => {
    const { id } = queryString.parse(this.props.location.search);
    getPost(id)
      .then(products => {
        this.setState({products});
      });
  }
  render(){
    console.log(this.state.products);
    return(
      <main id="single">
        <HeaderProducts />
        <div className="back-single"><img src="back.svg" alt="volver"/><span>Mesas</span></div>
        <div className="back-single-desktop">
          <span>ATRÁS</span>
          <span className="back-line"></span>
        </div>
        <SingleProduct products= {this.state.products} />
        <SingleProductMobil/>
        <Similar />
        <Social />
        <Footer />
      </main>
    )
  }
}

export default SinglePage;
