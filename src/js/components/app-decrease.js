var React = require("react");
var AppActions = require("../actions/app-actions");

var Decrease = React.createClass({
	clickHandle: function() {
		AppActions.decreaseItem(this.props.index);
	},
	render: function() {
		return (
			<button onClick={this.clickHandle}>-</button>
		);
	}
});

module.exports = Decrease;