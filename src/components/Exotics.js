import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import exotic from '../data/exotic.js';

class Exotics extends Component{
  render() {

    let match = this.props.match;
      console.log(match);
    let navExotics = exotic.map((exotic) => {
      console.log(navExotics);
      return(
        <div key={exotic.id} className="col-sm-4">
          <div className="card" style={{marginTop: 20}}>
            <img className="card-image-top" src={exotic.image} alt={exotic.imageAlt} style={{width:"150px", margin:"auto"}} />
            <div className="card-block">
              <h4 className="card-title">{exotic.name}</h4>
              <p className="card-text" style={{color:"green", fontSize:"1.3em"}}><strong>{exotic.price}</strong></p>
            </div>
            <div className="card-footer">
              <Link to={`${match.url}/${exotic.id}`}style={{color:"red", fontSize:"1.3em"}}>Details</Link>
            </div>
          </div>
        </div>
      )
    });

    return (
      <div >
      <section>
      <div className="card-deck-wrapper" style={{marginLeft: 25, marginRight: 25 , marginTop: 70, marginBottom: 100}}>
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
