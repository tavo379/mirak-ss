import React from 'react'
import Link from 'next/link'
import Headss from 'components/head'
/*import laoyut components*/


function Admin() {
	return (
		<main id="admin">
		<Headss/>
			<div className="container">
				<div className="row">
					<div className="col-md-3 logo">
						<img src="../static/syslogoblack.png"/>
					</div>
					<div className="col-md-12">
						<div className="row">
							<div className="col-md-7 menu-admin">
								<h1 className="title-admin-menu">Menú</h1>
								<nav className="nav-admin">
									<ul>
										<li><a href="#">Usuarios</a></li>
										<li><a href="#">Categorías</a></li>
										<li><a href="#">Muebles</a></li>
										<li><a href="#">sliders</a></li>
										<li><a href="#">anuncios</a></li>
										<li><a href="#">agnesi casa</a></li>
									</ul>
								</nav>
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}

export default Admin;
