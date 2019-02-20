sap.ui.define([
	"TestApp/TestApp/controller/BaseController"
], function (Controller) {
	"use strict";

	return Controller.extend("TestApp.TestApp.controller.Master", {

		onInit: function () {
			// debugger;
			this._page = this.getView().getContent()[0];
			this._oRouter = this.getRouter(this);
			this._oRouter.navTo("blockLayout");
		},

		onItemSelect: function (that) {
			// debugger;
			var oView = this.getParent().getParent();
			oView.getController()._oRouter.navTo(that.getSource().getSelectedKey());
		}

	});
});