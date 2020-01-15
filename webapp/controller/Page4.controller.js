sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast"
], function (Controller, MessageToast) {
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
	return Controller.extend("TestApp.TestApp.controller.Page4", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf TestApp.TestApp.view.Page4
		 */
		onInit: function () {
			var page = this.oView.byId('page4');
			var mySignature = '<div id="windy"></div>';
			var myhtml = new sap.ui.core.HTML();
			myhtml.setContent(mySignature);
			page.addContent(myhtml);
			//debugger;
		},

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf TestApp.TestApp.view.Page4
		 */
		onBeforeRendering: function () {
			// Initialize Windy API
			windyInit(options, windyAPI => {
				// windyAPI is ready, and contain 'map', 'store',
				// 'picker' and other usefull stuff

				const {
					map
				} = windyAPI;
				// .map is instance of Leaflet map

				// L.popup()
				// 	.setLatLng([50.4, 14.3])
				// 	.setContent('Hello World')
				// 	.openOn(map);
			});

		},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf TestApp.TestApp.view.Page4
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf TestApp.TestApp.view.Page4
		 */
		//	onExit: function() {
		//
		//	}

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

		},

		onListItemPress: function (evt) {
			// MessageToast.show("Pressed : " + evt.getSource().getTitle());
			var element = $("#" + evt.getSource().sId);
			element[0].setAttribute("style", "background-color: " + this._randomColor());
			// element[0].setAttribute("style", "background-image: url(http://bi.gazeta.pl/im/31/38/16/z23300657IH,Nic-Cage.jpg")
		},

		_randomColor: function () {
			var offset = 150;
			var scale = 25;
			var r = Math.round(Math.random() * scale) + offset;
			var g = Math.round(Math.random() * scale) + offset;
			var b = Math.round(Math.random() * scale) + offset + 20;
			return this._rgbToHex(r, g, b);
		},

		_componentToHex: function (c) {
			var hex = c.toString(16);
			return hex.length === 1 ? "0" + hex : hex;
		},

		_rgbToHex: function (r, g, b) {
			return "#" + this._componentToHex(r) + this._componentToHex(g) + this._componentToHex(b);
		}

	});

});