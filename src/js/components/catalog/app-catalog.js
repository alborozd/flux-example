var React = require("react");
var AppStore = require("../../stores/app-store");
var AddToCart = require("../cart/app-addtocart.js");

function getCatalog () {
	 return {
	 	items: AppStore.getCatalog()
	 } 
}

var Catalog = React.createClass({
	getInitialState: function() {
		return getCatalog();
	},
	render: function() {
		var items = this.state.items.map(function(item, i) {
			return ( <tr key={item.id}>
				<td>
					{item.title}
				</td>
				<td>
					${item.cost}
				</td>
				<td>
					<AddToCart item={item} />
				</td>
			</tr> );
		});
		return (
			<table className="table table-hover">
				<tbody>
					{items}
				</tbody>
			</table>
		); 
	}
});

module.exports = Catalog;