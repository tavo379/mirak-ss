import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { API_URL } from '../config';
import { createProduct } from './api-admin.js';

export default class ProductForm extends Component {
  files = [];
  constructor(props) {
    super(props);
    this.archivos = []
    let files = []
    for (var i = 0; i < 9; i++) {
      files[i] = ''
    }
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
      files: files,
      data: []
    };
  }

  componentDidMount() {
    fetch(`${API_URL}/subcategories`)
      .then(response => {
        if (response.status !== 200) {
          console.log(
            'Looks like there was a problem. Status Code: ' + response.status
          );
          return;
        }

        // Examine the text in the response
        response.json().then(data => {
          let category_name = ''
          if (data.length > 0) {
            category_name = data[0]
          }
          this.setState({data: data, category_name: category_name});
        });
      })
      .catch(err => {
        console.log('Fetch Error :-S', err);
      });
  }

  handleSubmit = (ev) => {
    ev.preventDefault();
    createProduct(this.state, this.archivos).then(r => {
      console.log(r);
    });
    let files = []
    for (var i = 0; i < 9; i++) {
      files[i] = ''
    }
    // this.setState({
    //   nombre: '',
    //   color1: '',
    //   color2: '',
    //   color3: '',
    //   descripcion: '',
    //   medidas: '',
    //   url: '',
    //   user_id: '1',
    //   files: files,
    //
    // })
  }

  handleImageChangeColor = (ev, index, indexColor, archivoColor) => {
    // eslint-disable-next-line
    ev.preventDefault;
    // eslint-disable-next-line
    this.state.files[index] = ev.target.value
    this.setState({ files: this.state.files });
    this.archivos[index] = ev.target.files[0] // ev.target.value
    // const file = ev.target.files[0];
    // this.files.push(file);
  }
  render() {
    let data = this.state.data
    if (!data) {
      data = []
    }
    return (
      <main id="admin-anuncios">
        <div className="container">
          <div className="row">
            <div className="col-md-3 back-page">
              <div className="back">
                <Link to="/product-list">
                  <img src="images/back.svg" alt="volver"/>
                  <span>atrás</span>
                </Link>
              </div>
            </div>
            <div className="col-md-12">
              <div className="row width-slider">
                <div className="col-md-12">
                  <h1 className="title-admin-menu">AGREGAR MUEBLE</h1>
                </div>
                <form
                  className="col-md-12"
                  onSubmit={ev => {
                    this.handleSubmit(ev);
                  }}
                >
                  <div className="row">
                    <div className="col-md-6">
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
                              console.log(res.target.value);
                              this.setState({
                                category_name: res.target.value
                              });
                            }}
                          >

                            {this.state.data.map((categoria, index) =>
                              <option key={`categoria${index}`} value={categoria}>
                                {categoria}
                              </option>
                            )}
                          </select>
                        </div>
                        <span className="inputs-title">Descripción</span>
                        <br />
                        <div className="inputs-group">
                          <textarea
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
                          <textarea
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

                        <h2>Imagen </h2>
                        {/* Primer grupo de inputs */}
                        {/* Urls color 1 */}
                        <input
                          type="file"
                          value={this.state.files[0]}
                          onChange={res => {
                            this.handleImageChangeColor(res, 0, 0, 'archivosColor1');
                          }}
                        />
                        {/* Urls color 2 */}
                        <input
                          type="file"
                          value={this.state.files[1]}
                          onChange={res => {
                            this.handleImageChangeColor(res, 1, 0, 'archivosColor2');
                          }}
                        />
                        {/* Urls color 3 */}
                        <input
                          type="file"
                          value={this.state.files[2]}
                          onChange={res => {
                            this.handleImageChangeColor(res, 2, 0, 'archivosColor3');
                          }}
                        />

                        {/* Segundo grupo de inputs */}
                        <span className="inputs-title">Agregar color</span>
                        <div className="inputs-group">
                          <input
                            type="text"
                            onChange={res => {
                              this.setState({ color2 : res.target.value });
                            }}
                          />
                        </div>
                        {/* Urls color 1 */}
                        <input
                          type="file"
                          value={this.state.files[3]}
                          onChange={res => {
                            this.handleImageChangeColor(res, 3, 1, 'archivosColor1');
                          }}
                        />
                        {/* Urls color 2 */}
                        <input
                          type="file"
                          value={this.state.files[4]}
                          onChange={res => {
                            this.handleImageChangeColor(res, 4, 1, 'archivosColor2');
                          }}
                        />
                        {/* Urls color 3 */}
                        <input
                          type="file"
                          value={this.state.files[5]}
                          onChange={res => {
                            this.handleImageChangeColor(res, 5, 1, 'archivosColor3');
                          }}
                        />

                        {/* Tercer grupo de inputs */}
                        <span className="inputs-title">Agregar color</span>

                        <div className="inputs-group">
                          <input
                            type="text"
                            onChange={res => {
                              this.setState({ color3 : res.target.value });
                            }}
                          />
                        </div>
                        {/* Urls color 1 */}
                        <input
                          type="file"
                          value={this.state.files[6]}
                          onChange={res => {
                            this.handleImageChangeColor(res, 6, 2, 'archivosColor1');
                          }}
                        />
                        {/* Urls color 2 */}
                        <input
                          type="file"
                          value={this.state.files[7]}
                          onChange={res => {
                            this.handleImageChangeColor(res, 7, 2, 'archivosColor2');
                          }}
                        />
                        {/* Urls color 3 */}
                        <input
                          type="file"
                          value={this.state.files[8]}
                          onChange={res => {
                            this.handleImageChangeColor(res, 8, 2, 'archivosColor3');
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
