/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

export const SWIPE_RIGHT = 'UPDATE_RIGHT';
export const SWIPE_LEFT = 'UPDATE_LEFT';

const TAB_LIST = [
    {"id": 0, "title": "Drinks"},
    {"id": 1, "title": "Muffins"},
    {"id": 2, "title": "Bagels"}
];

export const update_tab = () => {
  return {
    type: UPDATE_TAB
  };
};




var Tab = React.createClass({
    handleClick: function(e){
        e.preventDefault();
    	this.props.handleClick();
    },
    
    render: function(){
        return (
            <li className={this.props.isCurrent ? 'current' : null}>
            	<a onClick={this.handleClick} href={this.props.url}>
            		{this.props.name}
	            </a>
            </li>
        );
    }
});


var tabList = [
    {
        'name': 'Mike',
        'url': '/mike',
        'content':
            <div className="mike">
            	<img src="http://s.mlkshk.com/r/104TN" />
            </div>
    },
    {
        'name': 'Donnie',
        'url': '/donnie',
        'content':
            <div className="donnie">
            	<img src="http://s.mlkshk.com/r/103AG" />
            </div>
    },
    {
        'name': 'Raph',
        'url': '/raph',
        'content':
       		<div className="raph">
            	<img src="http://s.mlkshk.com/r/JAUD" />
            </div>
    },
    {
        'name': 'Leo',
        'url': '/leo',
        'content':
        	<div className="leo">
            	<img src="http://s.mlkshk.com/r/ZJPL" />
            </div>
    }
];

React.render(
    <App />,
    document.body
);