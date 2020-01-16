sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	const options = {
		// Required: API key
		key: 'kXviELMLGnLXk7gJZ8u4oaYRLi6XWrbo', // REPLACE WITH YOUR KEY !!!

		// Put additional console output
		verbose: true,

		// Optional: Initial state of the map
		lat: 50.4,
		lon: 14.3,
		zoom: 5,
	};

	return Controller.extend("TestApp.TestApp.controller.HTMLFragment", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf TestApp.TestApp.view.HTMLFragment
		 */
		onInit: function () {
			

		},

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf TestApp.TestApp.view.HTMLFragment
		 */
		onBeforeRendering: function () {

		},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf TestApp.TestApp.view.HTMLFragment
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf TestApp.TestApp.view.HTMLFragment
		 */
		//	onExit: function() {
		//
		//	}

	});

});