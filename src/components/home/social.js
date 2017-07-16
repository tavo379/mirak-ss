import React, { Component } from 'react'
import styled from 'styled-components'
import facebook from '../../images/icono1-black.svg';
import instagram from '../../images/icono2-black.svg';
import correo from '../../images/icono3-black.svg';

const height = {
  width:'100%',
};
export default class Social extends Component{
  render(){
    return(
      <div className="container-fluid">
      <div className="row social ">
        <div className="col-md-5 col-xs-3" ><hr width="100%"/></div>
        <div className="col-md-2 col-xs-6 icons" >
          <img className="facebook" src={ facebook }/>
          <img className="instagram"src={ instagram }/>
          <img className="correo"src={ correo }/>
        </div>
        <div className="col-md-5 col-xs-3" ><hr width="100%"  /></div>
      </div>
    </div>
    )
  }
}
