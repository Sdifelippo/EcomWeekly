import React, { Component } from 'react';
import Gear from '../data/data';
import {Link} from 'react-router-dom';

class Gear extends Component {
    render() {
        let armor = this.props.match.params.id;
        let armors =  Gear[armor]
        let output = armors.map((items, index) =>{
            let link = "/" + line + "/" + index;
            return(
                <div key={index}>
                    <h2>{items.name}</h2>
                    <span className="innersection">
                        <img src="http://fillmurray.com/100/100" alt="cue"/>
                        <p>Price: ${items.price}</p>
                    </span>
                     <Link to={link}>Details</Link>
                </div>
                )
        });
        return (
            <div className="products">
                {output}
            </div>
        );
    }
}

export default Products;
