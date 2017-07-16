import React from 'react'
import Link from 'next/link'
import Headss from 'components/head'
/*import laoyut components*/
import Header from '../home//header'
import SliderAgnesi from '../agnesi-casa/slider-agnesi'
import AgnesiDes from '../agnesi-casa/description-agnesi'
import Social from '../home/social'
import Footer from '../home/footer'
import HeaderMobil from "../Mobile/header-mobil"


function MobilAgnesi() {
	return (
		<main className="agnesi agnesi-mobil">
			<Headss/>
      <div className="back-single"><img src="../static/back.svg"/><span>agnesi casa</span></div>
      <div className="col-md-12 title-single ">
        <h1>Proyecto n°4</h1>
      </div>
			<SliderAgnesi/>
			{/*<h1>Página principal</h1>
			<Link href="/about">
				<a>Ir a <em>/about</em></a>
			</Link>*/}
			<AgnesiDes />
			<Social />
		</main>
	);
}

export default MobilAgnesi;
