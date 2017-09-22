import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import legendary from '../data/legendary';
import Detail from './Detail';
import Panel from 'muicss/lib/react/panel';
import Button from 'muicss/lib/react/button';

 class LegendaryDetails extends Component {

  render() {
    let bgStyle = {
      backgroundImage: 'url(https://i.imgur.com/fMVeE1G.jpg/zip)',
      backgroundSize: 'cover',
      marginTop: '10rem'
    }

    const {ordernum} = this.props.match.params;
console.log("oder",ordernum);
    let legendaryDetails = legendary.map((item) => {
      console.log(item.orderNumber);

      if(item.orderNumber === ordernum) {
        console.log('here');

        return (
          <Detail key={item.orderNumber} data={item}/>
        );
      }
    });

    return (
      <Panel>
      <div className="text-center" style={bgStyle}>
        <Button><Link className="btn btn-large" to="/legendary">Return To Legendary</Link></Button>
        {legendaryDetails}
      </div>
      </Panel>
    );
  }
}

export default LegendaryDetails;
