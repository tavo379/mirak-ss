// import axios from 'axios';

// const API_URL = `http://localhost:1337`;
import { API_URL } from '../config';

var cabecezaras = new Headers();

function fetchStatusHandler(response) {
  if (response.status === 200) {
    return response.json();
  } else {
    throw new Error(response.statusText);
  }
}

  // CREAR PRODUCTO
const createProduct = (data, archivos) => {
  let formData = new FormData();
      formData.append('nombre', data.nombre);
      formData.append('category_name', data.category_name);
      formData.append('descripcion', data.descripcion);
      formData.append('color1', data.color1);
      formData.append('color2', data.color2);
      formData.append('color3', data.color3);
      formData.append('user_id', '1');
      formData.append('medidas', data.medidas);

  archivos.map((f) => {
    formData.append('archivos', f);
  });

  return fetch(`${API_URL}/post`,{
    method: "POST",
    headers: cabecezaras,
    body: formData
  })
  .then( (r) => {
    return r.json()
  })
  .catch( (err) => {
    console.log(err);
  })
  data.nombre = '';
}

//CREANDO ANUNCIO
const createAnuncio = (archivos) => {
  let formData = new FormData();
    //eslint-disable-next-line
  if (archivos[0]) {
    formData.append('image1','Y');
  } else {
    formData.append('image1','N');
  }
  if (archivos[1]) {
    formData.append('image2','Y');
  } else {
    formData.append('image2','N');
  }

  archivos.map((f) => {
    formData.append('archivos', f);
  });

  return fetch(`${API_URL}/anuncios`,{
    method: "POST",
    headers: cabecezaras,
    body: formData
  })
  .then( (r) => {
    return r.json()
  })
  .catch( (err) => {
    console.log(err);
  })
}
  // LISTA DE PRODUCTOS POR CATEGORIA
const getProductsByCategory = (id) => {
    return fetch(`${API_URL}/posts/category/${id}`, {
      method: "GET",
      headers: new Headers(),
      body: null,
    })
    .then( (r) => {
      return r.json();
    } )
    .catch ( (err) => {
      console.log(err);
    })
}
// Obtener POst
const getPost = (id) => {
    return fetch(`${API_URL}/posts/${id}`, {
      method: "GET",
      headers: new Headers(),
      body: null,
    })
    .then( (r) => {
      return r.json();
    } )
    .catch ( (err) => {
      console.log(err);
    })
}

// delete user
const deleteUser = (id) => {
    return fetch(`${API_URL}/users/${id}`, {
      method: "DELETE",
      headers: new Headers(),
      body: null,
    })
    .then( (r) => {
      return r.json();
    } )
    .catch ( (err) => {
      console.log(err);
    })
}

const getCategory = (id) => {
    return fetch(`${API_URL}/category/${id}`, {
      method: "GET",
      headers: new Headers(),
      body: null,
    })
    .then( (r) => {
      return r.json();
    } )
    .catch ( (err) => {
      console.log(err);
    })
}
// Obtener anuncios

//CREANDO SLIDER
const createSlider = (data, archivos) => {

  let formData = new FormData();
  formData.append('titulo1', data.titulo);
  formData.append('sliderlink1', data.sliderlink);
  formData.append('titulo2', data.titulo);
  formData.append('sliderlink2', data.sliderlink);
  formData.append('titulo3', data.titulo);
  formData.append('sliderlink3', data.sliderlink);
  formData.append('titulo4', data.titulo);
  formData.append('sliderlink4', data.sliderlink);
  formData.append('titulo5', data.titulo);
  formData.append('sliderlink5', data.sliderlink);

  //eslint-disable-next-line
  archivos.map((f) => {
    if (f === null) {
      formData.append('archivosIndex', 'N');
    } else {
      formData.append('archivosIndex', 'Y');
      formData.append('archivos', f);
    }    
  });
  return fetch(`${API_URL}/sliders`,{
    method: "POST",
    headers: cabecezaras,
    body: formData
  })
  .then( (r) => {
    return r.json()
  })
  .catch( (err) => {
    console.log(err);
  })

}



// CREAR CATEGORIA
const createCategory = (data) => {

  let formData = new FormData();

  formData.append('name', data.name);
  formData.append('sub', data.sub);
  formData.append('image', data.image);

  return fetch(`${API_URL}/category`, {
    method: "POST",
    headers: cabecezaras,
    body: formData
  })
  .then( (r) => {
    // console.log(r);
    return r.json();
  })
  .catch( (err) => {
    console.log(err);
  })
}
//CREAR USUARIO
const createUser = (data) => {
  let formData = new FormData();
      formData.append('email', data.email);
      formData.append('password', data.password);

  return fetch(`${API_URL}/signup`, {
    method: "POST",
    headers: cabecezaras,
    body: formData
  })
  .then((r) => r.json())
  .catch( (err) => {
    console.log(err);
  })
}
// LOGIN
const login = (data, history) => {
  return fetch(`${API_URL}/login`, {
    method: "POST",
    headers: cabecezaras,
    body: JSON.stringify(data)
  })
  .then(fetchStatusHandler)
  .then((r) => {
    localStorage.setItem('token', r.token);
    history.push('/admin-menu');
  })
  .catch((err) =>{
    console.log(err);
  })
}

// LOGIN
const signUp = (data) => {
  return fetch(`${API_URL}/signup`,{
    method: "POST",
    headers: cabecezaras,
    body: JSON.stringify(data)
  })
  .then( (r) => {
    console.log(r);
  })
  .catch( (err) =>{
    console.log(err);
  })
}

export {
  createProduct,
  createCategory,
  createAnuncio,
  createUser,
  createSlider,
  getProductsByCategory,
  getCategory,
  getPost,
  login,
  signUp,
  deleteUser
}
