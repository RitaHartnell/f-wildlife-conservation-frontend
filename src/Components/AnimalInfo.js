import React, { PureComponent } from "react";
import '../style/AnimalInfo.css';

class AnimalInfo extends PureComponent {
  handleClick = (displayName) => {
    window.open(`http://en.wikipedia.org/w/index.php?title=Special:Search&search=${displayName}`)
  }

  render() {
    const { info } = this.props;
    const displayName = info.animal;

    return (
      <div className="container">
        <figure>
          <img src={info.image} alt={displayName} onClick={() => this.handleClick(displayName)} />
        </figure>
        <h1>{displayName}</h1> 
        <p className="tooltiptext">Click image for more info</p>
      </div>
    );
  }
}

export default AnimalInfo