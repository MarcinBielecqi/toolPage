sap.ui.jsview("TestApp.TestApp.view.BlockLayout", {

	/** Specifies the Controller belonging to this View. 
	 * In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	 * @memberOf TestApp.TestApp.view.BlockLayout
	 */
	getControllerName: function () {
		return "TestApp.TestApp.controller.BlockLayout";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	 * Since the Controller is given to this method, its event handlers can be attached right away. 
	 * @memberOf TestApp.TestApp.view.BlockLayout
	 */
	createContent: function (oController) {

		var oFragment = sap.ui.xmlfragment("TestApp.TestApp.view.fragments.BlockLayoutFragment");
		var oHTMLFragment = sap.ui.htmlfragment("TestApp.TestApp.view.fragments.UiPartZ");
		//debugger;
		var oPage = new sap.m.Page({
			title: "BlockLayout",
			showHeader: false,
			content: [oFragment]
		});

		var app = new sap.m.App("myAppBlockLayout", {
			// initialPage: "oPage"
		});

		app.addPage(oPage);
		return app;
	}

});