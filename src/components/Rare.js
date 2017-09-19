import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import rare from "../data/rare.js";

class RareArmor extends Component {
  render() {

    let bgStyle = {
      backgroundImage: 'url(https://i.imgur.com/fMVeE1G.jpg/zip)',
      backgroundSize: 'cover',
      marginTop: '-5rem'
}
   let match = this.props.match;

   let navRare = rare.map((rare) => {
     return(
       <div key={rare.id} className="col-sm-4">
           <div className="card" style={{marginTop: 20}}>
             <img className="card-image-top" src={rare.image} alt={rare.imageAlt} style={{width: "150px", margin:"auto"}} />
             <div className="card-block">
                 <h4 className="card-title">{rare.name}</h4>
                 <p className="card-text" style={{color:"red", fontSize:"1.3em"}}><strong>{rare.price}</strong></p>
             </div>
             <div className="card-footer">
               <Link to={`${match.url}/${rare.name}`}>Details</Link>
             </div>
           </div>
         </div>
      )
    })
  return (
    <div style={bgStyle}>
      <section>
         <div className="card-deck-wrapper" style={{marginLeft: 25, marginRight: 25, marginTop: 70, marginBottom: 100}}>
           <div className="card-deck">
             {navRare}
           </div>
         </div>
         </section>
        </div>
       );
     }
   }


export default RareArmor;
