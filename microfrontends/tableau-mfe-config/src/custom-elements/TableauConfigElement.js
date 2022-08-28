import React from 'react';
import ReactDOM from 'react-dom';
import AppConfig from '../components/config/AppConfig';

const ATTRIBUTES = {
  url: 'url',
};

class TableauConfigElement extends HTMLElement {
  constructor() {
    super();
    this.reactRootRef = React.createRef();
    this.mountPoint = null;
  }

  get config() {
    return this.reactRootRef.current ? this.reactRootRef.current.state : {};
  }

  set config(value) {
    return this.reactRootRef.current.setState(value);
  }

  static get observedAttributes() {
    return Object.values(ATTRIBUTES);
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (!Object.values(ATTRIBUTES).includes(name)) {
      throw new Error(`Untracked changed attribute: ${name}`);
    }
    if (this.mountPoint && newValue !== oldValue) {
      this.render();
    }
  }

  connectedCallback() {
    this.mountPoint = document.createElement('div');
    this.appendChild(this.mountPoint);

    const url = this.getAttribute(ATTRIBUTES.url);
    ReactDOM.render(<AppConfig ref={this.reactRootRef} url={url}/>, this.mountPoint);
  }
}

if (!customElements.get('tableau-mfe-config')) {
  customElements.define('tableau-mfe-config', TableauConfigElement);
}
