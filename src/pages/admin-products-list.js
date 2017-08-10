import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { API_URL } from '../config';
import { deleteProduct } from './api-admin';

export default class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      dataPost: []
    };
  }

  componentDidMount() {
    fetch(`${API_URL}/category`)
      .then(response => {
        if (response.status !== 200) {
          console.log(
            'Looks like there was a problem. Status Code: ' + response.status
          );
          return;
        }

        // Examine the text in the response
        response.json().then(data => {
          this.setState({ data });
        });
      })
      .catch(err => {
        console.log('Fetch Error :-S', err);
      });

    fetch(`${API_URL}/post`)
      .then(response => {
        if (response.status !== 200) {
          console.log(
            'Looks like there was a problem. Status Code: ' + response.status
          );
          return;
        }

        // Examine the text in the response
        response.json().then(dataPost => {
          this.setState({ dataPost });
        });
      })
      .catch(err => {
        console.log('Fetch Error :-S', err);
      });
  }

  handleDeleteProduct = (id) => {
    const dataPost = this.state.dataPost.filter(post => post.id !== id);
    deleteProduct(id)
      .then(() => {
        alert('Product delete ok');
        this.setState({ dataPost });
      });
  }

  render() {
    return (
      <main id="admin-anuncios">
        <div className="container">
          <div className="row">
            <div className="col-md-3 back-page">
              <div className="back">
                <Link to="/admin-menu">
                  <img src="images/back.svg" alt="volver" />
                  <span>atrás</span>
                </Link>
              </div>
            </div>
            <div className="col-md-12">
              <div className="row width-slider">
                <div className="col-md-12">
                  <h1 className="title-admin-menu">Muebles</h1>
                  <div className="add-mueble">
                    <Link to="/admin-products">
                      <img src="images/add.svg" alt="agregar" />
                      <span className="add-user-icon">Agregar mueble</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid list-container">
          <div className="row container-list">
            <div className="col-md-3 category-list">
              <h2>CATEGORIAS</h2>
              <ul>
                {this.state.data.map(category =>
                  <li key={category.id}>
                    {category.name}
                  </li>
                )}
              </ul>
            </div>
            <div className="col-md-9 product-list">
              <h2>MUEBLES</h2>
              <ul>
                {this.state.dataPost.map(post =>
                  <li key={post.id}>
                    <div className="name">{post.nombre}</div>
                    <Link to={{ pathname: '/product-edit', search: '?id=' + post.id }}>edit</Link>
                    <span onClick={() => this.handleDeleteProduct(post.id)}>delete</span>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </main>
    );
  }
}
