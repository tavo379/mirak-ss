// Depedencias
import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

// Componente

import HomePage       from './pages/home';
import Products       from './pages/products';
import SinglePage     from './pages/single';
import ProductForm    from './pages/admin-products';
import AdminCategory  from './pages/admin-category';
import AnuncioForm    from './pages/admin-anuncios';
import AdminLogin     from './pages/admin-login';
import AdminMenu      from './pages/admin-menu';
import SliderForm     from './pages/admin-sliders';
import AdminUserAdd   from './pages/admin-users-add';
import AdminUsers     from './pages/admin-users';
import AgnesiAdmin    from './pages/agnesi-admin';
import AgnesiCasa     from './pages/agnesi-casa';
import AgnesiProject  from './pages/agnesi-project';
import Nosotros       from './pages/nosotros';
import Sucursales     from './pages/sucursales';
import ProductList    from './pages/admin-products-list';
import CategoryList   from './pages/admin-category-list';
import ProductEdit    from './pages/admin-product-edit';

const loggedIn = () => !!localStorage.token;

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    loggedIn() ? (
      <Component {...props}/>
    ) : (
      <Redirect to={{
        pathname: '/admin-login',
        state: { from: props.location }
      }}/>
    )
  )}/>
);

const AppRoutes = () =>
  <Switch>
    <Route path="/products/subcategoria/:id/:subcategoria" component={ Products }/>
    <Route path="/single" component={ SinglePage }/>
    <Route path="/nosotros" component={ Nosotros }/>
    <Route path="/sucursales" component={ Sucursales }/>
    <Route path="/product-list" component= { ProductList }/>
    <Route path="/category-list" component= { CategoryList }/>
    <PrivateRoute path="/admin-products" component={ ProductForm }/>
    <Route path="/admin-category" component={ AdminCategory }/>
    <Route path="/admin-anuncios" component={ AnuncioForm }/>
    <Route path="/admin-login" component={ AdminLogin }/>
    <Route path="/admin-menu" component={ AdminMenu }/>
    <Route path="/admin-slider" component={ SliderForm }/>
    <Route path="/admin-user-add" component={ AdminUserAdd }/>
    <Route path="/admin-users" component={ AdminUsers }/>
    <Route path="/admin-agnesi" component={ AgnesiAdmin }/>
    <Route path="/agnesi-casa" component={ AgnesiCasa }/>
    <Route path="/agnesi-project" component={ AgnesiProject }/>
    <Route path="/product-edit" component={ ProductEdit }/>
    <Route path="/" component={ HomePage }/>
  </Switch>

export default AppRoutes;
