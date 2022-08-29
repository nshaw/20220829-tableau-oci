import './public-path';
import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';

const ATTRIBUTES = {
    config: 'config'
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
        const attributeConfig = this.getAttribute(ATTRIBUTES.config);
        const config = attributeConfig && JSON.parse(attributeConfig);

        this.mountPoint = document.createElement('div');
        this.appendChild(this.mountPoint);
        ReactDOM.render(<App config={config}/>, this.mountPoint);
    }
}

customElements.define('tableau-mfe', TableauJsElement);

export default TableauJsElement;
