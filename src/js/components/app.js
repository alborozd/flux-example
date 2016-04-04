var React = require("react");
var AppActions = require("../actions/app-actions");
var Catalog = require("../components/app-catalog");
var Cart = require("../components/app-cart");

var App = React.createClass({
	render: function() {
		return (
			<div>
				<h4>mess</h4>
				<Catalog />
				<h4>Cart</h4>
				<Cart />
			</div>
		);
	}
});

module.exports = App;