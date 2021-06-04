import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Bmi from './components/BMI/Bmi'
import Home from './components/Home/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import DietList from './components/DietList/DietList';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/bmi" component={Bmi} />
      <Route path="/dietlist/1" component={DietList} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);