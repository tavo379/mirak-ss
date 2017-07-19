import React, { Component } from 'react'

export default class Promo extends Component{
  render(){
    return(
      <div className="container promo-margin">
        <div className="row Promo">
          <div className="col-md-7 center-md col-xs-12"><img src="../../images/promo.png" alt="promo"/></div>
          <div className="col-md-3 offset-md-1 col-xs-12 email-promo">
            <p>Si quieres saber las ofertas antes que nadie, subscríbete a nuestro newslatter:</p>
            <input type ="email" placeholder="email"/>
            <span className="text-md-right">ENVIAR</span>
          </div>
        </div>
      </div>
    )
  }
}
