import React, { PureComponent } from "react";

export default class AnimalInfo extends PureComponent {
  render() {
    const { info } = this.props;
    const displayName = info.animal;

    return (
      <div>
        <div>
          {displayName} |{" "}
          <a
            target="_new"
            href={`http://en.wikipedia.org/w/index.php?title=Special:Search&search=${displayName}`}
          >
            Wiki
          </a>
        </div>
        <img width={240} src={info.image} />
      </div>
    );
  }
}
