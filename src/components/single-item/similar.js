import React, { Component } from 'react'
import styled from 'styled-components'


export default class Similar extends Component{
  render(){
    return(
      <div className="container">
        <div className="row margin-similar product">
          <div className="col-md-12 margin-similar-bottom ">
              <div className="feed-description"><h2>También te puede gustar</h2><hr/></div>
          </div>
          <div className="col-md-3 col-xs-6"><img src="static/mesa1.png"/></div>
          <div className="col-md-3 col-xs-6"><img src="static/mesa1.png"/></div>
          <div className="col-md-3 col-xs-6"><img src="static/mesa1.png"/></div>
          <div className="col-md-3 col-xs-6"><img src="static/mesa1.png"/></div>
        </div>
      </div>
    )
  }
}
