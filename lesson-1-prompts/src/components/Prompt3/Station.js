import React, { Component } from 'react';

class Station extends Component {
  constructor() {
    super();

    this.state = {
      shipName: "The Rocinante",
      currentStation: "Tyco Station",
      crewMembers: [
        'Captain James Holden',
        'Executive Officer Naomi Nagata',
        'Pilot Alex Kamal',
        'Chief Engineer Amos Burton'
      ]
    };
  }

  render() {
    return (
      <div>

      </div>
    );
  }
}

export default Station;



