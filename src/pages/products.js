import React, { Component } from 'react';
import queryString from 'query-string';
/*import laoyut components*/
import HeaderProducts from '../components/single-item/headerProducts';
import ProductFeed from '../components/category-products/productFeed';
import Social from '../components/home/social';
import Footer from '../components/home/footer';
import { getProductsByCategory } from './api-admin';
import { getCategory } from './api-admin';
import { Loader } from 'react-loaders';
import Ajax from './ajax'

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: null,
      category: null
    };
	}

	componentDidMount() {
    this.handleCategory();
    let that = this
    setTimeout(function() {
      that.handleProducts();
    }, 100)
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      this.setState({ products: [], category: {} });
      this.handleCategory();
      let that = this
      setTimeout(function() {
        that.handleProducts();
      }, 100)
    }
  }

  handleProducts = () => {
    this.setState({products: null});
    const { id } = queryString.parse(this.props.location.search);
    console.log(id);
		getProductsByCategory(id)
			.then(products => {
				this.setState({products});
		});

  }
  handleCategory() {
    this.setState({category: null});
    const { id } = queryString.parse(this.props.location.search);
    // console.log(id);
    // getCategory(id)
    //   .then(category => {
    //     this.setState({category});
    // });
    Ajax.send({
      url: `/category/${id}`,
      success: this.handleCategorySuccess.bind(this),
      successE: this.handleCategoryError.bind(this),
      error: this.handleCategoryError.bind(this),
      timeout: 5000
    })
  }
  handleCategorySuccess (category) {
    this.setState({category})
  }
  handleCategoryError (data) {
    console.log('handleCategoryError')
    console.log(data)
    this.handleCategory()
  }
  render() {
    console.log(this.state);
    return (
      <main className="products">

        {this.state.category
        ? <HeaderProducts category={this.state.category} />
        :<Loader type="ball-pulse" />}
        {this.state.products
        ? <ProductFeed products={this.state.products} />
        :<Loader type="ball-pulse" />}
        <Social />
        <Footer />
      </main>
    );
  }
}

export default Products;
