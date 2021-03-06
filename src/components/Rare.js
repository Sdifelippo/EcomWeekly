import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import rare from "../data/rare.js";
//import rareInfo from "./RareDetails.js"


class RareArmor extends Component {
  render() {

    let bgStyle = {
      backgroundImage: 'url(https://i.imgur.com/fMVeE1G.jpg/zip)',
      backgroundSize: 'cover',
      marginTop: '-7rem'
}
   let match = this.props.match;

   let navRare = rare.map((rare) => {
     return(
       <div key={rare.id} className="col-sm-4">
           <div className="card" style={{marginTop: 70}}>
             <img className="card-image-top" src={rare.image} alt={rare.imageAlt} style={{width:"80px", margin:"auto"}} />
             <div className="card-block">
                 <h4 className="card-title">{rare.name}</h4>
                 <p className="card-text" style={{color:"green", fontSize:"1.3em"}}><strong>{rare.price}</strong></p>
             </div>
             <div className="card-footer">
               <Link to={`${match.url}/${rare.orderNumber}`} style={{color:"red", fontSize:"1.3em"}}>Details</Link>
             </div>
           </div>
         </div>
      )
    })
  return (
    <div style={bgStyle}>
      <section>
           <div className="card-deck">
             {navRare}
           </div>
         </section>
        </div>
       );
     }
   }


export default RareArmor;
