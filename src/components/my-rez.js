/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

import { html } from '@polymer/lit-element';
import { PageViewElement } from './page-view-element.js';
import { connect } from 'pwa-helpers/connect-mixin.js';

// This element is connected to the Redux store.
import { tab } from '../tab.js';

// These are the actions needed by this element.
import { increment, decrement } from '../actions/tab.js';

// We are lazy loading its reducer.
import tab from '../reducers/tab.js';
store.addReducers({
  tab
});

// These are the elements needed by this element.
import './tab-element.js';

// These are the shared styles needed by this element.
import { SharedStyles } from './shared-styles.js';

class MyRez extends connect(store)(PageViewElement) {
  _render(props) {
    return html`
      ${SharedStyles}
      <style>
      .toolbar-list {
        
      }

      .toolbar-list > a {
        display: block;
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
      <!-- This gets hidden on a small screen-->
      <nav class="toolbar-list">
        <a selected?="${_tab === 'view1'}" href="/view1">View One</a>
        <a selected?="${_tab === 'view2'}" href="/view2">View Two</a>
        <a selected?="${_tab === 'view3'}" href="/view3">View Three</a>
      </nav> 

    `;
  }


}

window.customElements.define('my-rez', MyRez);
