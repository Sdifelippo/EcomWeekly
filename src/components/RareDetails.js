import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import rare from '../data/rare';
import Detail from './Detail';
import Panel from 'muicss/lib/react/panel';
import Button from 'muicss/lib/react/button';

class RareInfo extends Component {

  render() {

    let bgStyle = {
      backgroundImage: 'url(https://i.imgur.com/fMVeE1G.jpg/zip)',
      backgroundSize: 'cover',
      marginTop: '10rem'
    }

    const {ordernum} = this.props.match.params;
    console.log(ordernum);
    let rareArmor = rare.map((item) => {
        console.log(item.orderNumber);
      if (item.orderNumber === ordernum) {
        console.log('here');
        return (
          <Detail key={item.orderNumber} data={item}/>
        );
      }
    });

    return (
      <Panel>
      <div className="text-center" style={bgStyle }>
        <Button><Link className="btn btn-large btn-danger" to="/rare">Return To Rare</Link></Button>
        {rareArmor}
      </div>
      </Panel>
    );
  }
}
export default RareInfo
