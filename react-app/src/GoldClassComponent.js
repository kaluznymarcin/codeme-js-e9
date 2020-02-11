import React from 'react';
import axios from 'axios'

const url = 'http://api.nbp.pl/api/cenyzlota/2020-02-03?format=json';

// http://api.nbp.pl/api/exchangerates/rates/c/usd/last/5/?format=json

class Gold extends React.Component {
  state = {
    apiData: null
  }

  componentDidMount() {
    axios.get(url)
      .then(res => res.json())
      .then(data => this.setState({
        apiData: data[0]
      }));
  }

  render() {
    const content = !this.state.apiData
      ? '' :
      `${this.state.apiData.data} :: ${this.state.apiData.cena}`
    return (
      <div>
        { content }
      </div>
    );
  }
}

export default Gold;
