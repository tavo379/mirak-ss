import React from 'react'
import { Link } from 'react-router-dom'
import { API_URL } from '../../config'


const ProductFeed = ({ products }) => (
  <div className="container">
    <div className="row product">
    { products.map(( product ) => {
      let images = JSON.parse(product.images)
      return (
        <div key = { product.id } className="col-md-6 col-xs-6 feed-box">
          <div>
          <img src={API_URL + images[0]} alt=""/>
          </div>
          <div className="feed-description"><span>{ product.nombre }</span><hr/></div>
          <div className="feed-single-redirection">
            <Link to={{
              pathname: '/single',
              search: `?id=${product.id}`,
            }}>
              Ver
            </Link>
          </div>
        </div>
      )
     
    })}
    </div>
  </div>
)

export default ProductFeed
