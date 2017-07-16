import React, { Component } from 'react'
import styled from 'styled-components'


const imgLogoStyle = {
  width:'100%',
};
export default class FooterMobile extends Component{
  render(){
    return(
      <div className="container-fluid">
      <div className="row flex-items-md-middle footer-ss">
        <div className="col-md-2 "><img style={imgLogoStyle}src="static/syslogowhite.png" /></div>
        <div className="col-md-6 offset-md-1 ">
          <ul className="ListMenu_footer">
            <li>NOSOTROS</li>
            <li>SUCURSALES</li>
            <li>CONTACTO</li>
          </ul>
        </div>
        <div className="col-md-3 email-footer">
          <span className="title-email">RECIBE NUESTROS CORREOS:</span>
          <input type ="email" placeholder="email"/>
          <span className="text-md-right">ENVIAR</span>
        </div>
      </div>
      </div>
    )
  }
}
