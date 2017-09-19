import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import legendary from "../data/legendary.js";

class Legendary extends Component{
  render() {

    let bgStyle = {
      backgroundImage: 'url(https://i.imgur.com/fMVeE1G.jpg/zip)',
      backgroundSize: 'cover',      
      marginTop: '-5rem'


    }

    let match = this.props.match;

    let navLegendary = legendary.map((legendary) => {
      return(
        <div key={legendary.id} className="col-sm-4">
          <div className="card" style={{marginTop: 20}}>
            <img className="card-image-top" src={legendary.image} alt={legendary.imageAlt} style={{width:"150px", margin:"auto"}} />
            <div className="card-block">
              <h4 className="card-title">{legendary.name}</h4>
              <p className="card-text" style={{color:"red", fontSize:"1.3em"}}><strong>{legendary.price}</strong></p>
            </div>
            <div className="card-footer">
              <Link to={`${match.url}/${legendary.name}`}>Details</Link>
            </div>
          </div>
        </div>
      )
    });

    return (
        <div style={bgStyle}>
          <section>
            <div className="card-deck-wrapper" style={{marginLeft: 25, marginRight: 25 , marginTop: 70, marginBottom: 100}}>
            <div className="card-deck">
              {navLegendary}
            </div>
            </div>
          </section>

</div>

          );
        }
      }

export default Legendary;
