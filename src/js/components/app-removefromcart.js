var React = require("react");
var AppActions = require("../actions/app-actions");

var RemoveFromCart = React.createClass({
	clickHandle: function() {
		AppActions.removeItem(this.props.index);
	},
	render: function() {
		return (
			<button onClick={this.clickHandle}>x</button>
		);
	}
});

module.exports = RemoveFromCart;