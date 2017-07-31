import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { API_URL } from '../config';
import { createProduct } from './api-admin.js';

export default class ProductForm extends Component {
  files = [];
  constructor(props) {
    super(props);
    this.state = {
      category_name: '',
      nombre: '',
      color1: '',
      color2: '',
      color3: '',
      descripcion: '',
      medidas: '',
      url: '',
      user_id: '1',
      file1: "",
      file2: "",
      file3: "",
      data: []
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
          this.setState({data});
        });
      })
      .catch(err => {
        console.log('Fetch Error :-S', err);
      });
  }

  handleSubmit = (ev) => {
    ev.preventDefault();
    createProduct(this.state, this.files).then(r => {
      console.log(r);
    });
    this.setState({
      nombre : '',
      name: '',
      file1: '',
      file2: '',
      file3: '',
    })
  }

  handleImageChangeColor1 = (ev) => {
    // eslint-disable-next-line
    ev.preventDefault;
    this.setState({ file1: ev.target.value });
    // const file = ev.target.files[0];
    // this.files.push(file);
    this.filesColor1 = ev.target.files;
  }
  handleImageChangeColor2 = (ev) => {
    // eslint-disable-next-line
    ev.preventDefault;
    this.setState({ file2: ev.target.value });
    // const file = ev.target.files[0];
    // this.files.push(file);
    this.filesColor2 = ev.target.files;
  }
  handleImageChangeColor3 = (ev) => {
    // eslint-disable-next-line
    ev.preventDefault;
    this.setState({ file3: ev.target.value });
    // const file = ev.target.files[0];
    // this.files.push(file);
    this.filesColor3 = ev.target.files;
  }
  render() {
    return (
      <main id="admin-anuncios">
        <div className="container">
          <div className="row">
            <div className="col-md-3 back-page">
              <div className="back">
                <Link to="/admin-menu">
                  <img src="images/back.svg" alt="volver"/>
                  <span>atrás</span>
                </Link>
              </div>
            </div>
            <div className="col-md-12">
              <div className="row width-slider">
                <div className="col-md-12">
                  <h1 className="title-admin-menu">Sliders</h1>
                </div>
                <form
                  className="col-md-12"
                  onSubmit={ev => {
                    this.handleSubmit(ev);
                  }}
                >
                  <div className="row">
                    <div className="col-md-6">
                      <span className="number-anuncio">1</span>
                      <div className="inputs">
                        <span className="inputs-title">Nombre</span>
                        <br />
                        <div className="inputs-group">
                          <input
                            type="text"
                            value={this.state.name}
                            onChange={res => {
                              this.setState({ nombre: res.target.value });
                            }}
                          />
                          <span> Max. 30 caracteres</span>
                        </div>
                        <div className="inputs-group">
                          <select
                            id="select-padre"
                            name="select"
                            required
                            value={this.state.category_name}
                            onChange={res => {
                              this.setState({
                                category_name: res.target.value
                              });
                            }}
                          >
                            <option selected hidden>
                              Seleccionar categoría padre
                            </option>
                            {this.state.data.map(categoria =>
                              <option key={categoria.id} value={categoria.name}>
                                {categoria.name}
                              </option>
                            )}
                          </select>
                        </div>
                        <span className="inputs-title">Descripción</span>
                        <br />
                        <div className="inputs-group">
                          <input
                            type="text"
                            onChange={res => {
                              this.setState({ descripcion: res.target.value });
                            }}
                          />
                          <span> Max. 30 caracteres</span>
                        </div>
                        <span className="inputs-title">Medidas</span>
                        <br />
                        <div className="inputs-group">
                          <input
                            type="text"
                            onChange={res => {
                              this.setState({ medidas: res.target.value });
                            }}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="new-item-anuncio">
                        <span className="inputs-title">Agregar color</span>
                        <br />
                        <div className="inputs-group">
                          <input
                            type="text"
                            onChange={res => {
                              this.setState({ color1 : res.target.value });
                            }}
                          />
                        </div>
                        <div className="inputs-group">
                          <input
                            type="text"
                            onChange={res => {
                              this.setState({ color2 : res.target.value });
                            }}
                          />
                        </div>
                        <div className="inputs-group">
                          <input
                            type="text"
                            onChange={res => {
                              this.setState({ color3 : res.target.value });
                            }}
                          />
                        </div>
                        <h2>Imagen </h2>
                        <input
                          type="file"
                          value={this.state.file1}
                          onChange={res => {
                            this.handleImageChangeColor1(res);
                          }}
                        />
                        {/* Urls color 3 */}
                        <input
                          type="file"
                          onChange={res => {
                            this.handleImageChangeColor2(res);
                          }}
                        />
                        {/* Urls color 2 */}
                        <input
                          type="file"
                          onChange={res => {
                            this.handleImageChangeColor3(res);
                          }}
                        />

                        {/* Segundo grupo de inputs */}

                        <input
                          type="file"
                          value={this.state.file1}
                          onChange={res => {
                            this.handleImageChangeColor1(res);
                          }}
                        />
                        {/* Urls color 3 */}
                        <input
                          type="file"
                          onChange={res => {
                            this.handleImageChangeColor2(res);
                          }}
                        />
                        {/* Urls color 2 */}
                        <input
                          type="file"
                          onChange={res => {
                            this.handleImageChangeColor3(res);
                          }}
                        />

                        {/* Tercer grupo de inputs */}

                        <input
                          type="file"
                          value={this.state.file1}
                          onChange={res => {
                            this.handleImageChangeColor1(res);
                          }}
                        />
                        {/* Urls color 3 */}
                        <input
                          type="file"
                          onChange={res => {
                            this.handleImageChangeColor2(res);
                          }}
                        />
                        {/* Urls color 2 */}
                        <input
                          type="file"
                          onChange={res => {
                            this.handleImageChangeColor3(res);
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  <button className="save" type="submit">
                    Guardar
                  </button>
                </form>

                {/* <input value="Guardar" type="submit" /> */}
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}
