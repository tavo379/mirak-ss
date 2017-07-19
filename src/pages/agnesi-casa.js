import React, { Component } from 'react'
/*import laoyut components*/
import SliderAgnesi from '../components/agnesi-casa/slider-agnesi'
import AgnesiDes from '../components/agnesi-casa/description-agnesi'
import Social from '../components/home/social'
import Footer from '../components/home/footer'
import HeaderMobil from "../components/Mobile/header-mobil"

export default class AgnesiCasa extends Component {
	componentDidMount() {
      document.title = "Agnesi casa";
  	}
	render(){
		return(
		<main className="agnesi">
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
		)
	}
}
