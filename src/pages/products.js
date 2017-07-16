import React, { Component } from 'react'
import Link from 'next/link'
import fetch from 'isomorphic-fetch'
/*import laoyut components*/
import HeaderProducts from '../components/single-item/headerProducts'
import ProductFeed from '../components/category-products/productFeed'
import Social from "../components/home/social"
import Footer from "../components/home/footer"
import { getProductsByCategory } from './api-admin'

class Products extends Component {
	constructor(props,context){
		super(props)
		this.state = {
			products: []
		}
	}
	static async getInitialProps (context) {
		debugger;
		const { id } = await context.query;
		const res = await fetch(`http://localhost:1337/category/${id}`);
    const json = await res.json();
		return { id, products: json }
}
	render(){
		console.log(this.props);
		return (
			<main className="products">
				<HeaderProducts/>
				<ProductFeed products={this.props.products}/>
				<Social />
				<Footer />
			</main>
		)
	}
}


export default Products;
