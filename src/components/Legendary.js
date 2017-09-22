import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import legendary from "../data/legendary.js";

class Legendaries extends Component{
  render() {

    let bgStyle = {
      backgroundImage: 'url(https://i.imgur.com/fMVeE1G.jpg/zip)',
      backgroundSize: 'cover',
      marginTop: '-7rem'
    }

    let match = this.props.match;

    let navLegendary = legendary.map((legendary) => {
      return(
        <div key={legendary.id} >
          <div className="card" style={{marginTop: 70}}>
            <img className="card-image-top" src={legendary.image} alt={legendary.imageAlt} style={{width:"80px", margin:"auto"}} />
            <div className="card-block">
              <h4 className="card-title">{legendary.name}</h4>
              <p className="card-text" style={{color:"green", fontSize:"1.3em"}}><strong>{legendary.price}</strong></p>
            </div>
            <div className="card-footer">
              <Link to={`${match.url}/${legendary.orderNumber}`}style={{color:"red", fontSize:"1.3em"}}>Details</Link>
            </div>
          </div>
        </div>
      )
    });

    return (
        <div style={bgStyle}>
          <section>
            <div>
            <div className="card-deck">
              {navLegendary}
            </div>
            </div>
          </section>
        </div>
          );
        }
      }

export default Legendaries;
