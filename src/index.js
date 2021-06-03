import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Bmi from './components/BMI/Bmi'
import { BrowserRouter, Switch, Route } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/bmi" component={Bmi} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);