import React from 'react'
import Link from 'next/link'



/*import laoyut components*/
import HeaderProducts from '../components/single-item/headerProducts'
import SingleProduct from '../components/single-item/single-product'
import SingleProductMobil from '../components/Mobile/single-product-mobil'
import Social from "../components/home/social"
import Footer from "../components/home/footer"
import Similar from "../components/single-item/similar"

function SinglePage() {
	return (
		<main id="single">
			<HeaderProducts />
			<div className="back-single"><img src="../static/back.svg"/><span>Mesas</span></div>
			<div className="back-single-desktop">
				<span>ATRÁS</span>
				<span className="back-line"></span>
			</div>
      <SingleProduct />
			<SingleProductMobil/>
      <Similar />
			<Social />
			<Footer />
		</main>
	);
}

export default SinglePage;
