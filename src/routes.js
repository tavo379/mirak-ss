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
    <Route path="/products" component={ Products }/>
    <Route path="/single" component={ SinglePage }/>
    <Route path="/admin-products" component={ ProductForm }/>
    <Route path="/admin-category" component={ AdminCategory }/>
    <Route path="/admin-anuncios" component={ AnuncioForm }/>
    <Route path="/admin-login" component={ AdminLogin }/>
    <PrivateRoute path="/admin-menu" component={ AdminMenu }/>
    <Route path="/admin-slider" component={ SliderForm }/>
    <Route path="/admin-user-add" component={ AdminUserAdd }/>
    <Route path="/admin-users" component={ AdminUsers }/>
    <Route path="/admin-agnesi" component={ AgnesiAdmin }/>
    <Route path="/agnesi-casa" component={ AgnesiCasa }/>
    <Route path="/agnesi-project" component={ AgnesiProject }/>
    <Route path="/" component={ HomePage }/>
  </Switch>

export default AppRoutes;
