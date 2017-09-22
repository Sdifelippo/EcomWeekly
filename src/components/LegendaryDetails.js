import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import exotic from '../data/exotic';
import Detail from './Detail';

 class LegendaryDetails extends Component {

  render() {

    const {ordernum} = this.props.match.params;

    let legendaryDetails = exotic.map((item) => {

      if(item.orderNumber === ordernum) {
        return (
          <Detail key={item.id} data={item}/>
        );
      }
    });

    return (
      <div className="text-center" style={{marginTop: 100}}>
        <Link className="btn btn-large" to="/legendary">Return</Link>
        {LegendaryDetails}
      </div>
    );
  }
}

export default LegendaryDetails;