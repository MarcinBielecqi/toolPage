sap.ui.jsview("TestApp.TestApp.view.Master", {

	/** Specifies the Controller belonging to this View. 
	 * In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	 * @memberOf controller.Master
	 */
	getControllerName: function () {
		return "TestApp.TestApp.controller.Master";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	 * Since the Controller is given to this method, its event handlers can be attached right away.
	 * @memberOf controller.Master
	 */

	oToolPage: null,
	oToolHeader: null,
	oPage: null,
	oSideNavigation: null,
	oNavigationList: null,
	oNavigationListItem: null,

	createContent: function (oController) {

		this.oNavigationList = new sap.tnt.NavigationList({
			items: {
				path: "side>/navigation",
				template: new sap.tnt.NavigationListItem({
					key: "{side>key}",
					text: "{side>title}",
					expanded: "{side>expanded}",
					icon: "{side>icon}"
				})
			}
		});

		this.oSideNavigation = new sap.tnt.SideNavigation({
			item: this.oNavigationList,
			itemSelect: oController.onItemSelect
		});

		this.oToolHeader = new sap.tnt.ToolHeader("toolHeader", {
			content: [new sap.m.Button("idToggleSideContentModeButton", {
				press: oController.onToggleSideContentModePress,
				icon: "sap-icon://close-command-field"
			})]
		});

		var app = new sap.m.App("appPages", {});

		this.oToolPage = new sap.tnt.ToolPage("app", {
			header: this.oToolHeader,
			mainContents: app,
			sideContent: this.oSideNavigation
		});

		return this.oToolPage;
	}

});