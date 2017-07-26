import React, { Component } from 'react'
import Newsletter from './newsletter'
import { API_URL } from '../../config'

export default class Promo extends Component{
  render(){
    const anuncios = this.props.anuncios;
    const [ anuncio ] = anuncios || [];
    const { images = [] } = anuncio || {};
    return(
      <div className="container promo-margin">
        <div className="row Promo">
          <div className="col-md-7 center-md col-xs-12">
          {
            images.length ?
              <img src={API_URL + images[0]} alt=""/>
            : null
          }
          </div>
          <div className="col-md-3 offset-md-1 col-xs-12 email-promo">
            <p>Si quieres saber las ofertas antes que nadie, subscríbete a nuestro newsletter:</p>
            <Newsletter/>
          </div>
        </div>
      </div>
    )
  }
}
