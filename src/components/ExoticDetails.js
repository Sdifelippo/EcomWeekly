import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Exotic from '../data/exotic';
import Detail from './Detail';
import Panel from 'muicss/lib/react/panel';
import Button from 'muicss/lib/react/button';

 class ExoticDetails extends Component {

  render() {

    let bgStyle = {
      backgroundImage: 'url(https://i.imgur.com/fMVeE1G.jpg/zip)',
      backgroundSize: 'cover',
      marginTop: '10rem'
    }

    const {ordernum} = this.props.match.params;

    let ExoticInfo  = Exotic.map((item) => {

      if(item.orderNumber === ordernum) {
        return (
          <Detail key={item.orderNumber} data={item}/>
        );
      }
    });

    return (
      <Panel>
      <div className="text-center" style={bgStyle}>
        <Button><Link className="btn btn-large" to="/exotic">Return To Exotics</Link></Button>
        {ExoticInfo}
      </div>
      </Panel>
    );
  }
}

export default ExoticDetails;
