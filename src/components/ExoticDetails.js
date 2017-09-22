import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Exotic from '../data/exotic';
import Detail from './ExoticDetails';

 class ExoticDetails extends Component {

  render() {

    const {ordernum} = this.props.match.params;

    let ExoticInfo  = Exotic.map((item) => {

      if(item.orderNumber === ordernum) {
        return (
          <Detail key={item.id} data={item}/>
        );
      }
    });

    return (
      <div className="text-center" style={{marginTop: 100}}>
        <Link className="btn btn-large" to="/exotics">Return</Link>
        {ExoticDetails}
      </div>
    );
  }
}

export default ExoticDetails;
