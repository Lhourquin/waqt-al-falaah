import React, { Component } from "react";
import { HorairesList } from "./day-list/horaireslist.component"
class Day extends Component {
    constructor(){
        super();
        this.state = {
            today : [],
        }
    }

    componentDidMount() {
        fetch(
          `https://api.aladhan.com/v1/timingsByCity?country=France&method=2&city=Tourcoing`
        )
          .then((Response) => Response.json())
          .then((result) => this.setState({ today : [result]}));
      }

    render(){
        return (
            <HorairesList today={this.state.today}/>
           

        )
    }

    
}

export default Day;