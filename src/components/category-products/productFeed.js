import React from 'react'
import { Link } from 'react-router-dom'


const ProductFeed = ({ products }) => (
  <div className="container">
    <div className="row product">
    { products.map(( product ) =>
      <div key = { product.id } className="col-md-6 col-xs-6 feed-box">
        <div><img src="images/mesa1.png" alt=""/></div>
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
    )}
    </div>
  </div>
)

export default ProductFeed
