sap.ui.define([
	"sap/ui/core/Control",
	"sap/m/RatingIndicator",
	"sap/m/Label",
	"sap/m/Button"

], function (Control, RatingIndicator, Label, Button) {
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
	return Control.extend("TestApp.TestApp.control.WindyMap", {
		metadata: {

		},
		init: function () {
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

		setValue: function (iValue) {
			this.setProperty("value", iValue, true);
			this.getAggregation("_rating").setValue(iValue);
		},

		renderer: function (oRM, oControl) {
			oRM.write("<div id='windy'></div>");
			// oRM.writeControlData(oControl);
			// oRM.addClass("myAppDemoWTProductRating");
			// oRM.writeClasses();
			// oRM.write(">");
			// oRM.renderControl(oControl.getAggregation("_rating"));
			// oRM.renderControl(oControl.getAggregation("_label"));
			// oRM.renderControl(oControl.getAggregation("_button"));
			// oRM.write("</div>");
		}
	});
});