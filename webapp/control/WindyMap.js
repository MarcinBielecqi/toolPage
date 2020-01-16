sap.ui.define([
	"sap/ui/core/Control",
	"sap/m/RatingIndicator",
	"sap/m/Label",
	"sap/m/Button"

], function (Control, RatingIndicator, Label, Button) {
	"use strict";
	const options = {
		// Required: API key
		key: undefined, // REPLACE WITH YOUR KEY !!!
		verbose: undefined,
		// Optional: Initial state of the map
		lat: undefined,
		lon: undefined,
		zoom: undefined,
	};
	return Control.extend("TestApp.TestApp.control.WindyMap", {
		metadata: {
			properties: {
				key: {
					type: "string",
					defaultValue: ''
				},
				verbose: {
					type: "bool",
					defaultValue: true
				},
				lat: {
					type: "float",
					defaultValue: 50.4
				},
				lon: {
					type: "float",
					defaultValue: 14.3
				},
				zoom: {
					type: "float",
					defaultValue: 5
				}
			},
			aggregations: {

			},
			events: {

			}
		},
		
		init: function () {

		},

		setValue: function (iValue) {
			this.setProperty("value", iValue, true);
			this.getAggregation("_rating").setValue(iValue);
		},

		renderer: function (oRM, oControl) {
			options.key = oControl.getKey();
			options.verbose = oControl.getVerbose();
			options.lat = oControl.getLat();
			options.lon = oControl.getLon();
			options.zoom = oControl.getZoom();

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
			
			oRM.write("<div id='windy' style='width: 100%; height: 100%;'></div>");
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