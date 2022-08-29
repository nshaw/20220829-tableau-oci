import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
class TableauConfigElement extends HTMLElement {
  constructor() {
    super();
    this.reactRootRef = React.createRef();
    this.mountPoint = null;
  }

  connectedCallback() {
    this.mountPoint = document.createElement('div');
    this.appendChild(this.mountPoint);
    this.render();
  }

  get config() {
    return this.reactRootRef.current ? this.reactRootRef.current.state : {};
  }

  set config(value) {
    return this.reactRootRef.current.setState(value);
  }

  render() {
    ReactDOM.render(<App ref={this.reactRootRef} />, this.mountPoint);
  }
}

customElements.define('tableau-mfe-config', TableauConfigElement);
