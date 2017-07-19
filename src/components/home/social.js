import React, { Component } from 'react'

export default class Social extends Component{
  render(){
    return(
      <div className="container-fluid">
      <div className="row social ">
        <div className="col-md-5 col-xs-3" ><hr width="100%"/></div>
        <div className="col-md-2 col-xs-6 icons" >
          <img className="facebook" src="images/icono1-black.svg" alt="facebook"/>
          <img className="instagram" src="images/icono2-black.svg" alt="instagram"/>
          <img className="correo" src="images/icono3-black.svg" alt="correo" />
        </div>
        <div className="col-md-5 col-xs-3" ><hr width="100%"  /></div>
      </div>
    </div>
    )
  }
}
