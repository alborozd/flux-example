var React = require("react");
var AppActions = require("../actions/app-actions");
var Catalog = require("./catalog/app-catalog");
var Cart = require("./cart/app-cart");
var Router = require("react-router-component");
var CatalogDetails = require("./product/app-catalogdetails");
var Template = require("./app-apptemplate")

var Locations = Router.Locations;
var Location = Router.Location;

var App = React.createClass({
	render: function() {
		return (
			<Template>
				<Locations>
					<Location path="/" handler={Catalog} />
					<Location path="/cart" handler={Cart} />
					{/*<Location path="/item/:item" handler={CatalogDetails} />*/}
				</Locations>
			</Template>
		);
	}
});

module.exports = App;