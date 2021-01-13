import React, { Component } from "react";

class ShipInfo extends Component {
  constructor() {
   super()
  }
  render() {
    let { shipName, currentStation, crewMembers } = this.props;
       return (
      <div>
        <h3>Currently taking on repairs at: {currentStation}</h3>

        <h1>{shipName}</h1>
        <h2>{currentStation}</h2>
        <p>{crewMembers}</p>
      </div>
    );
  }
}
export default ShipInfo;
