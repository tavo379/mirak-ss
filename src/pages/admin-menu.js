import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class AdminMenu extends Component {
	render() {
			return (
				<div id="admin">
					<div className="container">
		        <div className="row">
		          <div className="col-md-3 logo">
		            <img src="images/syslogoblack.png" alt="inicio"/>
		          </div>
		          <div className="col-md-12 ">
                <div className="row">
                  <div className="col-md-7 menu-admin">
                    <h1 className="title-admin-menu">Menú</h1>
                    <nav className="nav-admin">
    		         			<ul>
    										<li><Link to="/admin-users">Usuarios</Link></li>
    										<li><Link to="/category-list">Categorias</Link></li>
    										<li><Link to="/product-list">Muebles</Link></li>
    										<li><Link to="/admin-slider">Sliders</Link></li>
    										<li><Link to="/admin-anuncios">Anuncios</Link></li>
    										<li><Link to="/admin-agnesi">Agnesi casa</Link></li>
    									</ul>
                    </nav>
                  </div>
                </div>
		          </div>
		        </div>
		      </div>
				</div>
			);
	}
}

export default AdminMenu;
