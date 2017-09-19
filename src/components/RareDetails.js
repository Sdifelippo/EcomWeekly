import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import rare from '../data/rare';
import Details from './Detail';

 class rareInfo extends Component {

  render() {

    const {rare} = this.props.match.params;

    let rareInfo = rare.map((rare) => {

      if(rare.name === name) {
        return (
          <Detail key={rare.id} data={rare}/>
        );
      }
    });

    return (
      <div className="text-center" style={{marginTop: 50}}>
        <Link className="btn btn-large" to="/rare">Return to Rare Gear</Link>
        {rareInfo}
      </div>
    );
  }
}

export default RareInfo;
