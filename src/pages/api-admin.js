// import axios from 'axios';

// const URL = `http://localhost:1337`;
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

  archivos.archivosColor1.map((f) => {
    formData.append('archivosColor1', f);
  });
  archivos.archivosColor2.map((f) => {
    formData.append('archivosColor2', f);
  });
  archivos.archivosColor3.map((f) => {
    formData.append('archivosColor3', f);
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
  archivos.map((f) => {
    formData.append('archivos', f);
  });

  return fetch(`${URL}/anuncios`,{
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
    return fetch(`${URL}/posts/category/${id}`, {
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
    return fetch(`${URL}/posts/${id}`, {
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
      formData.append('titulo', data.titulo);
      formData.append('subtitulo', data.subtitulo);
      formData.append('sliderlink', data.sliderlink);
  //eslint-disable-next-line
  archivos.map((f) => {
    formData.append('archivos', f);
  });
  return fetch(`${URL}/sliders`,{
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
const createCategory = (data, sub) => {

  let formData = new FormData();

  formData.append('name', data.name);
  formData.append('sub', data.sub);

  return fetch(`${URL}/category`, {
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

  return fetch(`${URL}/signup`, {
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
  return fetch(`${URL}/login`, {
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
  return fetch(`${URL}/signup`,{
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
  getPost,
  login,
  signUp
}
