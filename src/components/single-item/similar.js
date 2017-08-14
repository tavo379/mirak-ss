import React, { Component } from 'react'
import { API_URL } from '../../config'
import queryString from 'query-string';
import { Link } from 'react-router-dom'

export default class Similar extends Component {
  constructor(props){
    super(props);
    this.state = {data: []};
  }
  componentDidMount() {
    fetch(`${API_URL}/products/random/${this.props.product.id}`)
    .then((response) => {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
        response.status);
        return;
      }

      // Examine the text in the response
      response.json().then((data) => {
        this.setState({data})
      });
    }
  )
  .catch((err) => {
    console.log('Fetch Error :-S', err);
  });
}
  render(){
    let data = this.state.data;
    if(!data) {
      return null;
    }
    return(
      <div className="container">
        <div className="row margin-similar product">
          <div className="col-md-12 margin-similar-bottom ">
              <div className="feed-description"><h2>También te puede gustar</h2><hr/></div>
          </div>
            {this.state.data.map((producto, index1)=>{
              let imagen = JSON.parse(producto.images[0]);
              return(
                <div className="col-md-3 col-xs-6" key={"producto"+producto.id}>
                  <Link to={{
                      pathname: '/single',
                      search: `?id=${producto.id}`,
                    }}>
                    <img src={`${API_URL}${imagen[0].color1}`} alt=""/>
                  </Link>
                </div>
              )
            })}
        </div>
      </div>
    )
  }
}
