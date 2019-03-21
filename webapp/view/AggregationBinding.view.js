sap.ui.jsview("TestApp.TestApp.view.AggregationBinding", {

	/** Specifies the Controller belonging to this View. 
	 * In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	 * @memberOf TestApp.TestApp.view.Page2
	 */
	getControllerName: function () {
		return "TestApp.TestApp.controller.AggregationBinding";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	 * Since the Controller is given to this method, its event handlers can be attached right away. 
	 * @memberOf TestApp.TestApp.view.Page2
	 */
	createContent: function (oController) {

		var oPanel = new sap.m.Panel({
			headerToolbar: new sap.m.Toolbar({
				// headerText: "text"
			}),
			content: new sap.m.Panel({
				text: "text"
			})
		});

		var oList = new sap.m.List({
			headerText: "sap.m.List Object",
			items: {
				// correct uri path
				// https://webidetesting8570658-p2000034815trial.dispatcher.hanatrial.ondemand.com/destinations/ES5/sap/opu/odata/IWBEP/GWSAMPLE_BASIC/ProductSet
				path: "/ProductSet",
				template: sap.m.StandardListItem({
					description: "{Name}",
					title: "{ProductID}"
				})
			}
		});

		var oHorizontalLayout = new sap.ui.layout.HorizontalLayout({
			content: [oList, oPanel]
		});

		var oPage = new sap.m.Page({
			title: "Aggregation Binding",
			content: [oHorizontalLayout]
		});

		var app = new sap.m.App("myAppPage2", {
			// initialPage: "oPage"
		});
		app.addPage(oPage);
		return app;
	}

});