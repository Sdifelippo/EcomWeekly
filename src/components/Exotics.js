import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import exotics from '../data/exotic.js';

class Exotics extends Component{
  render() {

    let bgStyle = {
      backgroundImage: 'url(https://i.imgur.com/fMVeE1G.jpg/zip)',
      backgroundSize: 'cover',
      marginTop: '-7rem'
    }

    let match = this.props.match;
      console.log(match);
    let navExotics = exotics.map((exotics) => {
      console.log(navExotics);
      return(
        <div key={exotics.id} >
          <div className="card" style={{marginTop: 70}} >
            <img className="card-image-top" src={exotics.image} alt={exotics.imageAlt} style={{width:"80px", margin:"auto"}} />
            <div className="card-block">
              <h4 className="card-title">{exotics.name}</h4>
              <p className="card-text" style={{color:"green", fontSize:"1.3em"}}><strong>{exotics.price}</strong></p>
            </div>
            <div className="card-footer">
              <Link to={`${match.url}/${exotics.orderNumber}`} style={{color:"red", fontSize:"1.3em"}}>Details</Link>
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
          {navExotics}
        </div>
      </div>
      </section>
      </div>
    );
  }
}
  export default Exotics;
