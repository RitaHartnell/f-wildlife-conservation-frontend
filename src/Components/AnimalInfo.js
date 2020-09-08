import React, { PureComponent } from "react";

class AnimalInfo extends PureComponent {
  render() {
    const { info } = this.props;
    const displayName = info.animal;

    return (
      <div className="Animal-info-card">
        <div>
          {displayName} |{" "}
          <a
            target="_new"
            href={`http://en.wikipedia.org/w/index.php?title=Special:Search&search=${displayName}`}
          >
            info
          </a>
        </div>
        <img width={300} src={info.image} alt={info.animal}/>
      </div>
    );
  }
}

export default AnimalInfo