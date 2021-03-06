import React from 'react'
/*import laoyut components*/

import SliderAgnesi from '../agnesi-casa/slider-agnesi'
import AgnesiDes from '../agnesi-casa/description-agnesi'
import Social from '../home/social'



function MobilAgnesi() {
	return (
		<main className="agnesi agnesi-mobil">
      <div className="back-single"><img src="/images/back.svg" alt="volver"/><span>agnesi casa</span></div>
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
