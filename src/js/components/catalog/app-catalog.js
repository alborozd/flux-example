var React = require("react");
var AppStore = require("../../stores/app-store");
var AddToCart = require("../cart/app-addtocart.js");
var CatalogItem = require("./app-catalogitem");
var StoreWatchMixin = require("../../mixins/StoreWatchMixin").StoreWatchMixin;

function getCatalog () {
	 return {
	 	items: AppStore.getCatalog()
	 } 
}

var Catalog = React.createClass({
	mixins: [new StoreWatchMixin(getCatalog)],
	render: function() {
		var items = this.state.items.map(function(item, i) {
			return ( 
				<CatalogItem item={item} key={i}/>
			);
		});
		return (
			<div className="row">
				{items}
			</div>
		); 
	}
});

module.exports = Catalog;