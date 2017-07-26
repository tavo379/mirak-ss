import React, { Component } from 'react'
import { API_URL } from '../../config'


export default class Recommended extends Component{
  render(){
    const anuncios = this.props.anuncios;
    const [ anuncio ] = anuncios || [];
    const { images = [] } = anuncio || {};
    console.log( images );
    return(
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4 recommended"><span>sofas y sillones<br/> recomienda</span></div>
          <div className="col-md-8 ">
            {
              images.length ?
                <img src={API_URL + images[1]} alt=""/>
              : null
            }
          </div>
        </div>
      </div>
    )
  }
}
