var React = require("react");
var AppActions = require("../actions/app-actions");

var App = React.createClass({
	clickHandle: function() {
		AppActions.addItem("some item");
	},
	render: function() {
		return (
			<h1 onClick={this.clickHandle}>applicatio1</h1>
		);
	}
});

module.exports = App;