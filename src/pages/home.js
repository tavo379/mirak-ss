import React from 'react'
import Link from 'next/link'
import Headss from '../components/head'
/*import laoyut components*/
import Header from '../components/home/header'
import Slider from '../components/home/slider'
import Promo from '../components/home/promo'
import Recommended from "../components/home/recommended"
import Social from "../components/home/social"
import Footer from "../components/home/footer"
import SliderMobil from "../components/Mobile/slider-mobil"
import HeaderMobil from "../components/Mobile/header-mobil"
import agnesi from '../images/agnesi-black.png';

function HomePage() {
	return (
		<main>
			<Headss/>
			<HeaderMobil />
			<Slider/>
			<div className="container-fluid">
				<div className="row">
					<div className="col-md-12 col-xs-12 text-md-right agnesi-mobil">
						<img src={agnesi}/>
					</div>
				</div>
			</div>
			{/*<h1>Página principal</h1>
			<Link href="/about">
				<a>Ir a <em>/about</em></a>
			</Link>*/}
			<Promo />
			<div className="container-fluid">
				<div className="row">
					<div className="banner-cotizacion col-md-12 text-md-center ">
						<h1>Cotiza Tu proyecto</h1>
					</div>
				</div>
			</div>
			<Recommended />
			<Social />
			<Footer />
		</main>
	);
}

export default HomePage;
