import Tableau from "tableau-react";
import React, { Component } from "react";

class App extends Component {

  render() {
    const { config } = this.props;
    const url = config && config.params && config.params['url'];

    const options = {
        hideTabs: true,
        hideToolbar: true
    };

    return (
      <div className="App">
        <Tableau
          url={url}
          options={options}
        />
      </div>
    );
  }
}

export default App;
