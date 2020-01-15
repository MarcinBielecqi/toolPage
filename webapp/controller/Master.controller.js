sap.ui.define([
	"TestApp/TestApp/controller/BaseController"
], function (Controller) {
	"use strict";

	return Controller.extend("TestApp.TestApp.controller.Master", {

		onInit: function () {
			// ////debugger;
			this._page = this.getView().getContent()[0];
			this._oRouter = this.getRouter(this);
			this._oRouter.navTo("blockLayout");
		},

		onItemSelect: function (that) {
			// ////debugger;
			var oView = this.getParent().getParent();
			oView.getController()._oRouter.navTo(that.getSource().getSelectedKey());
		},

		onToggleSideContentModePress: function () {
			var sIconClose = "sap-icon://close-command-field",
				sIconOpen = "sap-icon://open-command-field",
				oToolPage = this.getParent().getParent();

			if (oToolPage.getSideExpanded()) {
				this.setIcon(sIconOpen);
			} else {
				this.setIcon(sIconClose);
			}

			oToolPage.toggleSideContentMode();
		}

	});
});