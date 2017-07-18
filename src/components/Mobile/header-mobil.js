/*this is the component of the header*/
import React, { Component } from 'react'
import styled from 'styled-components'

const imgLogoStyle = {
  width:'100%',
};
const LogoToggle = {
  width: '40%',
  padding:'5px 0',
  height: '100%'
}
const agnesiStyle = {
  width:'20%'
}
export default class HeaderMobil extends Component{
  constructor() {
    super();
    this.state = {
      categorie: "collapse",
      toggleHide: "col-xs-12 collapse-menu"
    };
  }

  addClassName() {
    this.setState({
      categorie: "row header",
      toggleHide:"collapse"
    }, () => console.log(this.state.categorie));
  }
  toggleClose() {
    this.setState({
      categorie: "collapse",
      toggleHide: "col-xs-12 collapse-menu"
    }, () => console.log(this.state.categorie));
  }
  render(){
    return(
      <div className="container-fluid header-mobil">
        <div className="row ">
          <div className={this.state.toggleHide}>
            <img style={LogoToggle} src="/images/syslogoblack.png"/>
            <img src="/images/toggle.svg" onClick={this.addClassName.bind(this)} className="toggle"/>
          </div>
        </div>
        <div className={this.state.categorie}>
          <img src="/images/x-icon.svg" onClick={this.toggleClose.bind(this)} className="toggle-x"/>
          <div className="col-md-2 flex middle-md"><img style={imgLogoStyle} src="/images/syslogoblack.png"/></div>
          <div className="col-md-10">
            <div className="row">

            <div className="col-md-12 col-xs-12">
              <ul className="ListMenu">
                <li><a href="#">Mesas</a></li>
                <li><a href="#">Comedores</a></li>
                <li><a href="#">Sofas</a></li>
                <li><a href="#">Sillones</a></li>
                <li><a href="#">Recámaras</a></li>
              </ul>
            </div>
          </div>
          </div>
        </div>
      </div>
    )
  }
}
