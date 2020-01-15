sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/routing/History"
], function (Controller, History) {
	"use strict";

	return Controller.extend("streckenband.controller.BaseController", {

		getRouter: function () {
			return sap.ui.core.UIComponent.getRouterFor(this);
		},

		onNavBack: function (oEvent) {
			jQuery.sap.log.debug("back");
		},

		setIconsModel: function () {
			////debugger;
			var oIconsModel = new sap.ui.model.json.JSONModel();
			this.getView().setModel(oIconsModel);
		}

	});

});