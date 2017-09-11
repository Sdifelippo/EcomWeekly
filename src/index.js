import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import registerServiceWorker from './registerServiceWorker';

//import {BrowserRouter, Route, Switch} from 'react-router-dom'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import App from './components/App'
import BaseLayout from './components/BaseLayout'
import Legendary from './components/Legendary'
import PostList from './components/PostList'
import ShowPost from './components/ShowPost'
import Rare from './components/Rare'
import Contact from './components/Contact'
import AboutUs from './components/AboutUs'

ReactDOM.render(
  <BrowserRouter>
    <BaseLayout>
      <Switch>
        <Route exact path='/' component={App} />
        <Route path='/legendary' component={Legendary} />
        <Route path='/all/:id' component={ShowPost} />
        <Route path='/all' component={PostList} />
        <Route path='/rare' component={Rare} />
        <Route path='/contact' component={Contact} />
        <Route path='/about' component={AboutUs} />
      </Switch>
    </BaseLayout>
  </BrowserRouter>

, document.getElementById('root'));
registerServiceWorker();
