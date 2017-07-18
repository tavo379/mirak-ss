// import axios from 'axios';

const URL = `http://localhost:1337`;

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
  console.log(archivos);
  let formData = new FormData();
      formData.append('nombre', data.nombre);
      formData.append('category_name', data.category_name);
      formData.append('descripcion', data.descripcion);
      formData.append('color', data.color);
      formData.append('user_id', '1');
      formData.append('medidas', data.medidas);

  Array.prototype.forEach.call(archivos, function(f) {
    formData.append('archivos', f);
  });

  return fetch(`${URL}/post`,{
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
//CREANDO SLIDER
const createSlider = (data, url) => {

  let formData = new FormData();
      formData.append('titulo', data.titulo);
      formData.append('subtitulo', data.subtitulo);
      formData.append('sliderlink', data.sliderlink);
      formData.append('url', url);

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

//CREANDO ANUNCIO
const createAnuncio = (url, url2 ) => {

  let formData = new FormData();
      formData.append('url', url);
      formData.append('url2', url2);

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
  login,
  signUp
}
