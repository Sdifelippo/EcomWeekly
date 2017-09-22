import React from 'react';

const Detail = (props) => {

  let detail = props.data;
console.log(props);
  return(
    <div className="col-sm-6">
      <div className="card " style={{marginTop: 20}}>
        <div className="card-block">
          <img className="card-image-top" src={detail.image} alt='Armor' style={{width:"60px", float:"right", height:"60px"}} />
          <h4 className="card-title">{detail.name}</h4>
          <p className="card-text">Order-Number: {detail.orderNumber}</p>
          <ul className="list-group list-group">
            <li className="list-group-item">Price: {detail.price}</li>
            <li className="list-group-item text-left">{detail.details}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Detail;
