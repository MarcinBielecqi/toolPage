sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("TestApp.TestApp.controller.Page3", {

		oXMLModel: null,

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf TestApp.TestApp.view.Page3
		 */
		onInit: function () {
			// var oViewModel = new sap.ui.model.odata.v2.ODataModel();
			// this.getView().setModel(oViewModel, "page3View");
		},

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf TestApp.TestApp.view.Page3
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf TestApp.TestApp.view.Page3
		 */
		onAfterRendering: function () {

		},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf TestApp.TestApp.view.Page3
		 */
		//	onExit: function() {
		//
		//	}

		onButtonPress: function (oController) {

		},

		setNumberState: function (Price) {
			if (Price < 500) {
				return "Success";
			} else {
				return "Error";
			}
		},

		setFirstStatus: function (sMeasure, iWeight) {
			var formatterMailDelivery = "deliver via mail",
				formatterParcelDelivery = "deliver via parcel",
				formatterCarrierDelivery = "deliver via carrier";

			if (sMeasure === "G") {
				iWeight = iWeight / 1000;
			}
			if (iWeight < 0.5) {
				return formatterMailDelivery;
			} else if (iWeight < 5) {
				return formatterParcelDelivery;
			} else {
				return formatterCarrierDelivery;
			}

		}

	});

});