import React, { Component } from 'react';
import queryString from 'query-string';
/*import laoyut components*/
import HeaderProducts from '../components/single-item/headerProducts';
import ProductFeed from '../components/category-products/productFeed';
import Social from '../components/home/social';
import Footer from '../components/home/footer';
import { getProductsByCategory } from './api-admin';
import { getCategory } from './api-admin';

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      category: null
    };
	}

	componentDidMount() {
    this.handleProducts();
    this.handleCategory();
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      this.setState({ products: [] });
      this.handleProducts();
      this.setState({ category: {} });
      this.handleCategory();
    }
  }

  handleProducts = () => {
    const { id } = queryString.parse(this.props.location.search);
		getProductsByCategory(id)
			.then(products => {
				this.setState({products});
		});

  }
  handleCategory() {
    const { id } = queryString.parse(this.props.location.search);
    getCategory(id)
      .then(category => {
        this.setState({category});
    });
  }

  render() {
    return (
      <main className="products">
      {this.state.category
        ?
      <HeaderProducts category={this.state.category} />
        :null}

        {this.state.products
          ?
            <ProductFeed products={this.state.products} />
          :null}


        <Social />
        <Footer />
      </main>
    );
  }
}

export default Products;
