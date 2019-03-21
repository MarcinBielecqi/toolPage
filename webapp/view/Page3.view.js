sap.ui.jsview("TestApp.TestApp.view.Page3", {

	oList: null,

	/** Specifies the Controller belonging to this View. 
	 * In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	 * @memberOf TestApp.TestApp.view.Page3
	 */
	getControllerName: function () {
		return "TestApp.TestApp.controller.Page3";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	 * Since the Controller is given to this method, its event handlers can be attached right away. 
	 //* @memberOf TestApp.TestApp.view.Page3
	 */
	createContent: function (oController) {

		var oList = this.oList = new sap.m.List();

		oList.bindItems("/ProductSet",
			new sap.m.ObjectListItem({
				title: "{Name}",
				number: "{Price}",
				numberUnit: "{CurrencyCode}",
				numberState: {
					path: "Price",
					formatter: function (Price) {
						return oController.setNumberState(Price);
					}
				},
				intro: "{ProductID}",
				firstStatus: [
					new sap.m.ObjectStatus({
						text: {
							parts: [{
								path: "WeightUnit"
							}, {
								path: "WeightMeasure"
							}],
							formatter: function (WeightUnit, WeightMeasure) {
								return oController.setFirstStatus(WeightUnit, WeightMeasure);
							}
						}
					})
				]
			}));

		var oPage = new sap.m.Page({
			title: "Page3",
			content: [oList]
		});

		var app = new sap.m.App("myAppPage3", {
			// initialPage: "oPage"
		});
		app.addPage(oPage);
		return app;
	}

});