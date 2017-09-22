import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import rare from '../data/rare';
import Detail from './Detail';

class RareInfo extends Component {

  render() {

    const {ordernum} = this.props.match.params;

    let rareArmor = rare.map((item) => {

      if(item.orderNumber === ordernum) {
        return (
          <Detail key={item.id} data={item}/>
        );
      }
    });

    return (
      <div className="text-center" style={{marginTop: 100}}>
        <Link className="btn btn-large btn-danger" to="/parts">Back to Rare</Link>
        {rareArmor}
      </div>
    );
  }
}
export default RareInfo
