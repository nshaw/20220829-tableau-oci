import React, {Component} from 'react';

class AppConfig extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: props.url || 'https://public.tableau.com/views/RegionalSampleWorkbook/Economy',
    };
  }

  handleChange = e => {
    const input = e.target;
    this.setState({
      [input.name]: input.value,
    });
  };

  render() {
    const { url } = this.state;
    return (
      <div>
        <h1>Tableau Demo Configuration</h1>
        <div>
          <label htmlFor="url">Tableau View URL</label>
          <input name="url" value={url} type="text" onChange={this.handleChange}  />
        </div>
      </div>
    );
  }
}

export default AppConfig;
