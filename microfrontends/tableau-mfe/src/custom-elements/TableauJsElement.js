import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';

const ATTRIBUTES = {
  url: 'url',
};

class TableauJsElement extends HTMLElement {
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
        ReactDOM.render(<App url={url}/>, this.mountPoint);
    }
}

customElements.define('tableau-mfe', TableauJsElement);

export default TableauJsElement;
