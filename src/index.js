import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import App from './components/App';
import BaseLayout from './components/BaseLayout';
import Legendaries from './components/Legendary';
import LegendaryDetails from './components/LegendaryDetails';
import Rare from './components/Rare';
import RareDetails from './components/RareDetails';
import Exotics from './components/Exotics';
import ExoticDetails from './components/ExoticDetails';
import Contact from './components/Contact';
import About from './components/About';

ReactDOM.render(
  <BrowserRouter>
    <BaseLayout>
      <Switch>
        <Route exact path='/' component={App} />
        <Route exact path='/legendary' component={Legendaries} />
        <Route path="/legendary/:ordernum" component={LegendaryDetails}/>
        <Route exact path='/rare' component={Rare} />
        <Route path="/rare/:ordernum" component={RareDetails}/>
        <Route exact path='/exotic' component={Exotics} />
        <Route path="/exotic/:ordernum" component={ExoticDetails}/>
        <Route path='/contact' component={Contact} />
        <Route path='/about' component={About} />
      </Switch>
    </BaseLayout>
  </BrowserRouter>

, document.getElementById('root'));
