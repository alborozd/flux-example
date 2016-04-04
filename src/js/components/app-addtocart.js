var React = require("react");
var AppActions = require("../actions/app-actions");

var AddToCart = React.createClass({
	clickHandle: function() {
		AppActions.addItem(this.props.item);
	},
	render: function() {
		return (
			<button onClick={this.clickHandle} className="btn btn-default">Add to cart</button>
		);
	}
});

module.exports = AddToCart;