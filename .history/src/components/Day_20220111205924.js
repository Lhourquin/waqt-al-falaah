import React, { Component } from "react";
import { HorairesList } from "./day-list/horaireslist.component";
import { Pannel} from "./time-table-pannel/pannel.component"
class Day extends Component {
  constructor() {
    super();
    this.state = {
      today: [],
    };
  }

  componentDidMount() {
    fetch(
      `https://api.aladhan.com/v1/timingsByCity?country=France&method=2&city=Tourcoing`
    )
      .then((Response) => Response.json())
      .then((result) => this.setState({ today: [result] }));
  }

  render() {
    return (
      <div>
        <h1>Horaires du jour</h1>

        <HorairesList today={this.state.today} />
        <Pannel today={this.state.today}/>
      </div>
    );
  }
}

export default Day;
