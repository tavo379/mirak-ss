import React, { Component } from 'react'
/*import laoyut components*/
import SliderAgnesi from '../components/agnesi-casa/slider-agnesi'
import AgnesiDes from '../components/agnesi-casa/description-agnesi'
import Social from '../components/home/social'
import Footer from '../components/home/footer'
import HeaderMobil from "../components/Mobile/header-mobil"
import { API_URL } from '../config'

export default class AgnesiCasa extends Component {
	constructor(props){
		super(props);
		this.state = {agnesi: {}};
	}
	componentDidMount() {
    document.title = "Agnesi casa";
		fetch(`${API_URL}/projects/first`)
		.then((response) => {
			if (response.status !== 200) {
				console.log('Looks like there was a problem. Status Code: ' +
				response.status);
				return;
			}

			// Examine the text in the response
			response.json().then((data) => {
				this.setState({agnesi:data})
			});
		})
		.catch((err) => {
			console.log('Fetch Error :-S', err);
		});
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
			<AgnesiDes agnesi = { this.state.agnesi }/>
			<Social />
			<Footer />
		</main>
		)
	}
}
