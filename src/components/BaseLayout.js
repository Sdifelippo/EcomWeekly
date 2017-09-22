import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import Button from 'muicss/lib/react/button';
import DTower from '../images/DTower.jpg'

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
      color:'blue'
      }
      let bgimage={
          backgroundImage: {DTower}
        }

return (

  <div>
      <div className='backgroundImage'>
        <section style={navStyle}>
        <div>
        < Button variant='raised'><NavLink to='/contact' activeClassName='selected'>Contact</NavLink></Button>
        </div>
        <div>
        <Button variant="raised"><NavLink to='/about' activeClassName='selected'>About </NavLink></Button>
        </div>

        <header style={headStyle}>Guardian&apos;s Shop</header>
        <nav className="nav navbar">
          <nav>

            <Button variant="raised"><NavLink to='/' activeClassName='selected'>Home Page</NavLink></Button>

            <Button variant="raised"><NavLink to='/rare' activeClassName='selected'>Rare Gear</NavLink></Button>

            <Button variant="raised"><NavLink to='/legendary' activeClassName='selected'>Legendary Gear</NavLink></Button>

            <Button variant="raised"><NavLink to='/exotic' activeClassName='selected'>Exotic Gear</NavLink></Button>

          </nav>
        </nav>
        </section>
      </div>
        <section style={bgimage}>
          {this.props.children}
        </section>
      </div>
    )
  }
}
export default BaseLayout;
