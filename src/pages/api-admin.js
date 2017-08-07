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
      timeout: 2000
    })
    .then( (r) => {
      return r.json();
    } )
    .catch ( (err) => {
      getProductsByCategory(id)
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
      body: null
    })
    .then( (r) => {
      return r.json();
    } )
    .catch ( (err) => {
      getCategory(id)
    })

    // let timeout = new Promise((resolve, reject) => {
    //   setTimeout(reject, 2000, 'request timed out');
    // })
    // let fetch = new Promise((resolve, reject) => {
    //   fetch(`${API_URL}/category/${id}`, {
    //     method: "GET",
    //     headers: new Headers(),
    //     body: null
    //   })
    //   .then(response => response.json())
    //   .then( (r) => {
    //     return r.json();
    //   } )
    //   .catch ( (err) => {
    //     getCategory(id)
    //   })
    // })
    // return Promise
    //   .race([timeout, fetch])
    //   .then(json => {return json})
    //   .catch(err => {})

}
// Obtener anuncios

//CREANDO SLIDER
const createSlider = (data, archivos) => {

  let formData = new FormData();
  formData.append('titulo1', data.titulo1);
  formData.append('sliderlink1', data.sliderlink1);
  formData.append('titulo2', data.titulo2);
  formData.append('sliderlink2', data.sliderlink2);
  formData.append('titulo3', data.titulo3);
  formData.append('sliderlink3', data.sliderlink3);
  formData.append('titulo4', data.titulo4);
  formData.append('sliderlink4', data.sliderlink4);
  formData.append('titulo5', data.titulo5);
  formData.append('sliderlink5', data.sliderlink5);

  //eslint-disable-next-line
  let images = []
  archivos.map((f) => {
    if (f === null) {
      images.push('NONE')
    } else {
      images.push('YES')
      formData.append('archivos', f);
    }
  });
  formData.append('image1', images[0]);
  formData.append('image2', images[1]);
  formData.append('image3', images[2]);
  formData.append('image4', images[3]);
  formData.append('image5', images[4]);

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
