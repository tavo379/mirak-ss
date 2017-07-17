import React, { Component } from 'react';
import queryString from 'query-string';
/*import laoyut components*/
import HeaderProducts from '../components/single-item/headerProducts';
import ProductFeed from '../components/category-products/productFeed';
import Social from '../components/home/social';
import Footer from '../components/home/footer';
import { getProductsByCategory } from './api-admin';

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
	}

	componentDidMount() {
		const { id } = queryString.parse(this.props.location.search);
		getProductsByCategory(id)
			.then(products => {
				console.log(products);
				// this.setState(products)
			});
	}

  render() {
		console.log(this.state);
    return (
      <main className="products">
        <HeaderProducts />
        <ProductFeed products={this.state.products} />
        <Social />
        <Footer />
      </main>
    );
  }
}

export default Products;
