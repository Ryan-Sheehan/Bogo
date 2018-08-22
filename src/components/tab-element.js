/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

import { LitElement, html } from '@polymer/lit-element';

// This is a reusable element. It is not connected to the store. You can
// imagine that it could just as well be a third-party element that you
// got from someone else.
class TabElement extends LitElement {
  _render(props) {
    return html`
      <style>
      .toolbar-list > a {
        display: inline-block;
        color: var(--app-header-text-color);
        text-decoration: none;
        line-height: 30px;
        padding: 4px 24px;
      }
      .toolbar-list > a[selected] {
        color: var(--app-header-selected-color);
        border-bottom: 4px solid var(--app-header-selected-color);
      }
      </style>
      <nav class="toolbar-list">
        <a selected?="${_page === 'home'}" href="/${_page}/view1">Drinks</a>
        <a selected?="${_page === 'rez'}" href="/${_page}/view2">Muffins</a>
        <a selected?="${_page === 'kindlevan'}" href="/${_page}/view3">Bagels</a>
      </nav>
    `;
  }

  static get properties() { return {
    _page: String,
    _index: Number,
    _title: String,
    _isCurrent: false
  }};

  constructor() {
    super();
    this._index = 0;
    this._title = '';
  }

  _onRightSwipe() {
    this.index++;
    this.clicks++;
    this.dispatchEvent(new CustomEvent('tab-incremented'));
  }

  _onLeftSwipe() {
    this.index--;
    this.clicks++;
    this.dispatchEvent(new CustomEvent('tab-decremented'));
  }
}





window.customElements.define('counter-element', CounterElement);
