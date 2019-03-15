import React, { Component } from 'react';
import WineAPI from '../api/WineAPI.js'

class WinePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wine: {}
    };
  }

  componentDidMount() {
    let id = this.props.match.params.wineID;
    WineAPI.fetchWineByID(id)
      .then((wine) => this.setState({
        wine: wine
    }));
  }

  render() {
    return (
      <div>
        <h2> Name </h2>
        <p> {this.state.wine['name']}</p>
        <h2> Price </h2>
        <p> {this.state.wine['price']}</p>
        <h2> Varietal </h2>
        <p> {this.state.wine['varietal']}</p>
        <h2> Description </h2>
        <p> {this.state.wine['description']}</p>
      </div>
    );
  }
}

export default WinePage;