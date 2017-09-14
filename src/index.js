import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import registerServiceWorker from './registerServiceWorker';

//import {BrowserRouter, Route, Switch} from 'react-router-dom'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import App from './components/App'
import BaseLayout from './components/BaseLayout'
import Legendary from './components/Legendary'
import ShowPost from './components/ShowPost'
import Rare from './components/Rare'
import Exotics from './components/Exotics'
import Contact from './components/Contact'
import About from './components/About'

ReactDOM.render(
  <BrowserRouter>
    <BaseLayout>
      <Switch>
        <Route exact path='/' component={App} />
        <Route path='/legendary' component={Legendary} />
        <Route path='/all/:id' component={ShowPost} />
        <Route path='/rare' component={Rare} />
        <Route path='/exotic' component={Exotics} />
        <Route path='/contact' component={Contact} />
        <Route path='/about' component={About} />
      </Switch>
    </BaseLayout>
  </BrowserRouter>

, document.getElementById('root'));
registerServiceWorker();
