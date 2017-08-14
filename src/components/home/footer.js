import React, { Component } from 'react'
import { URL_FRONT } from '../../config'
import { Link } from 'react-router-dom'

const imgLogoStyle = {
  width:'100%',
};
export default class Footer extends Component{
  render(){
    return(
      <div className="container-fluid">
      <div className="row flex-items-md-middle footer-ss">
        <div className="col-md-2 logo-footer"><img style={imgLogoStyle} src={`${URL_FRONT}/images/syslogowhite.png`} alt="inicio"/></div>
        <div className="col-md-6 offset-md-1 ">
          <ul className="ListMenu_footer">
            <li><Link to="/nosotros">NOSOTROS</Link></li>
            <li><Link to="/sucursales">SUCURSALES</Link></li>
            <li>CONTACTO</li>
          </ul>
        </div>
        <div className="col-md-3 email-footer">
          <span className="title-email">RECIBE NUESTROS CORREOS:</span>
          <div className="mobil-newsletter">
            <input type ="email" placeholder="email"/>
            <span className="text-md-right">ENVIAR</span>
        </div>
        </div>
      </div>
      </div>
    )
  }
}
