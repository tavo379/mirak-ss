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
		getProductsByCategory(id)
			.then(products => {
				this.setState({products});
			});
  }

  render() {
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
