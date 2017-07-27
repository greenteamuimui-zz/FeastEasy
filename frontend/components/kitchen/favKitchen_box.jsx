import React from 'react';
import { Link, withRouter } from 'react-router-dom';


const favKitchenBox = ({kitchen, pictures}) => {
  let pictureUrl ="";
  for (let i = 0; i < pictures.length; i++) {
    if (pictures[i].kitchen_id === kitchen.id) {
      pictureUrl = pictures[i].image_url;
      break;
    }
  }
  return (
    <div className="indiv-kitchen">
        <div className="kitchen-box">
          <div className="pic-box">
            <Link to={`/kitchens/${kitchen.id}`}><img src={pictureUrl}/></Link>
          </div>
          <div className="kitchen-box-info">
            <h1><Link to={`/kitchens/${kitchen.id}`}>{kitchen.name}</Link></h1>
            <div className="kitchen-box-about">
              <h2>{kitchen.about}</h2>
              <h2>{kitchen.cuisine}</h2>
              <h2>{kitchen.address}</h2>
            </div>
          </div>
        </div>
    </div>
  );

};

const WrappedfavKitchenBox = withRouter(favKitchenBox);
export default WrappedfavKitchenBox;
