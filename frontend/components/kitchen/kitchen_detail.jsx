import React from 'react';
import {Link} from 'react-router-dom';
import KitchenDetailHeader from './kitchen_detail_header';

class KitchenDetail extends React.Component {
  constructor (props) {
    super(props);

  }

  componentDidMount() {
    this.props.fetchKitchen(this.props.match.params.kitchenId);
  }


  render () {
    if (!this.props.kitchen) {
      return null;
    }
    let kitchen = this.props.kitchen;
    let pictures = Object.values(kitchen.image_url);
    let picComponent = pictures.map((picture, idx) => {
      return (
      <li key={idx}>
        <img className="kitchen-pictures" src={picture.image_url}/>
      </li>
      );
    });
    return (
      <div>
        <KitchenDetailHeader kitchen={kitchen} />
        <section>
          <ul>
            {picComponent}
          </ul>
        </section>
      </div>
    );
  }
}

export default KitchenDetail;
