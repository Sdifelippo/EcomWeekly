import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import Button from 'muicss/lib/react/button';


class BaseLayout extends Component{
  render(){
    let navStyle={
        backgroundImage: 'linear-gradient(grey, #223A5E)'
      }

    let headStyle={
        color:'white',
        fontSize:'3rem',
        display: 'flex',
        justifyContent: 'space-evenly'
      }

    let selected={
      color:'white'
      }

return (

  <div>

        <section style={navStyle}>
        <NavLink to='/contact'  activeClassName='selected'>Contact us</NavLink>
        <NavLink to='/aboutUs'  activeClassName='selected'>About us</NavLink>

        <header style={headStyle}>Guardian&apos;s Shop</header>
        <nav className="nav navbar">
          <nav>

            <Button variant="raised"><NavLink to='/' activeClassName='selected'>Home Page</NavLink></Button>

            <Button variant="raised"><NavLink to='/rare' activeClassName='selected'>Rare Gear</NavLink></Button>

            <Button variant="raised"><NavLink to='/legendary' activeClassName='selected'>Legendary Gear</NavLink></Button>

            <Button variant="raised"><NavLink to='/all' activeClassName='selected'>Exotic Gear</NavLink></Button>

          </nav>
        </nav>
        </section>
        <section>
          {this.props.children}
        </section>
      </div>
    )
  }
}
export default BaseLayout;
