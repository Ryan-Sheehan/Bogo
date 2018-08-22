var Tabs = React.createClass({
    handleClick: function(tab){
    	this.props.changeTab(tab);
    },
    
    render: function(){
        return (
            <nav>
                <ul>
                {this.props.tabList.map(function(tab, index) {
                    return (
                        <Tab
                            handleClick={this.handleClick.bind(this, index)}
                            key={tab.id}
                            url={tab.url}
                            name={tab.name}
                            isCurrent={(this.props.currentTab === index)}
                         />
                    );
                }.bind(this))}
                </ul>
            </nav>
        );
    }
});

var App = React.createClass({
	getInitialState: function () {        
        return {
            tabList: tabList,
            currentTab: 0
        };
    },

    changeTab: function(index) {
        this.setState({ currentTab: index });
    },

    render: function(){
        return(
            <div>
                <Tabs
            		currentTab={this.state.currentTab}
            		tabList={this.state.tabList}
            		changeTab={this.changeTab}
            	/>
            	<div className="content">
            		{this.state.tabList[this.state.currentTab].content}
            	</div>
            </div>
        );
    }
});
