import React, { Component } from 'react';
import SearchGeo from './SearchGeo';

class App extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   data: [],
    //   isLoaded: false,
    // }
  }

  render() {
      return (
        <div>
          <SearchGeo />
        </div>
      )
    }
  }

export default App;
