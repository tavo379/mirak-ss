import React, { Component } from 'react'
import fetch from 'isomorphic-fetch'
import styled from 'styled-components'
import { getProductsByCategory } from '../../pages/api-admin'

const ProductFeed = ({ products }) => (
  <div className="container">
    <div className="row product">
    { products.map(( product ) =>
      <div key = { product.id } className="col-md-6 col-xs-6 feed-box">
        <div><img src="iamges/mesa1.png"/></div>
        <div className="feed-description"><span>{ product.nombre }</span><hr/></div>
        <div className="feed-single-redirection"><a href="#">Ver</a></div>
      </div>
    )}
    </div>
  </div>
)

export default ProductFeed
