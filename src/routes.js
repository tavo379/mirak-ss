// Depedencias
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Componente

import HomePage    from './pages/home';
import Products    from './pages/products';
import SinglePage  from './pages/single';
import ProductForm from './pages/admin-products';

const AppRoutes = () =>
  <Switch>
    <Route path="/products" component={ Products }/>
    <Route path="/single" component={ SinglePage }/>
    <Route path="/admin-products" component={ ProductForm }/>
    <Route path="/" component={ HomePage }/>

  </Switch>

export default AppRoutes;
