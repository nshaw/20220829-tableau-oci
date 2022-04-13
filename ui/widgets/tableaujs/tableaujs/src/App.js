import Tableau from "tableau-react";
import React, { Component } from "react";

class App extends Component {
  render() {
    const options = {
      hideTabs: true,
      hideToolbar: true
    };

    const { url } = this.props;

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
