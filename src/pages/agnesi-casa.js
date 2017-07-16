import React from 'react'
import Link from 'next/link'
import Headss from 'components/head'
/*import laoyut components*/
import Header from '../components/home//header'
import SliderAgnesi from '../components/agnesi-casa/slider-agnesi'
import AgnesiDes from '../components/agnesi-casa/description-agnesi'
import Social from '../components/home/social'
import Footer from '../components/home/footer'
import HeaderMobil from "../components/Mobile/header-mobil"


function HomePage() {
	return (
		<main className="agnesi">
			<Headss/>
			<HeaderMobil/>
			<SliderAgnesi/>
			{/*<h1>Página principal</h1>
			<Link href="/about">
				<a>Ir a <em>/about</em></a>
			</Link>*/}
			<AgnesiDes />
			<Social />
			<Footer />
		</main>
	);
}

export default HomePage;
