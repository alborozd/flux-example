var React = require("react");
var AppActions = require("../actions/app-actions");

var Increase = React.createClass({
	clickHandle: function() {
		AppActions.increaseItem(this.props.index);
	},
	render: function() {
		return (
			<button onClick={this.clickHandle}>+</button>
		);
	}
});

module.exports = Increase;