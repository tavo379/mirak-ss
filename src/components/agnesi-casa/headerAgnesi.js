/*this is the component of the header*/
import React, { Component } from 'react'
import styled from 'styled-components'
import Link from 'next/link'
const imgLogoStyle = {
  width:'100%',
};
const agnesiStyle = {
  width:'20%'
}
export default class HeaderAgnesi extends Component{
  render(){
    return(
      <div className="container-fluid">
        <div className="row header">
          <div className="col-md-2 flex middle-md syslogo"><img style={imgLogoStyle} src="/static/syslogowhite.png"/></div>
          <div className="col-md-10">
            <div className="row">
            <div className="col-md-12 text-md-right agnesi"><img style={agnesiStyle} src="/static/agnesiwhiteh.png"/></div>
            <div className="col-md-12">
              <ul className="ListMenu">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/agnesi-project">Proyecto Individual</Link></li>
                <li><a href="#">Proyecto 3</a></li>
                <li><a href="#">Proyecto 4</a></li>
                <li><a href="#">Proyecto 5</a></li>
              </ul>
            </div>
          </div>
          </div>
        </div>
      </div>
    )
  }
}
