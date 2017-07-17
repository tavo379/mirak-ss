import React from 'react'
/*import laoyut components*/
import Slider from '../components/home/slider'
import Promo from '../components/home/promo'
import Recommended from "../components/home/recommended"
import Social from "../components/home/social"
import Footer from "../components/home/footer"
import HeaderMobil from "../components/Mobile/header-mobil"

function HomePage() {
	return (
		<main>
			<HeaderMobil />
			<Slider/>
			<div className="container-fluid">
				<div className="row">
					<div className="col-md-12 col-xs-12 text-md-right agnesi-mobil">
						<img src="images/agnesi-black.png"/>
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
