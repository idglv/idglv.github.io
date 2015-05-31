sap.ui.jsview("sap.app.view.tree", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf view.tree
	*/ 
	getControllerName : function() {
		return "sap.app.view.tree";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf view.tree
	*/ 
	createContent : function(oController) {
		var oList = new sap.m.List(this.createId("list"), {
			items: {
				path: "/tree",
				template: new sap.m.StandardListItem({
					title: "{name}",
					type: {
						path: "hasExpander",
						formatter: function(bFlag) {
							return bFlag ? sap.m.ListType.Navigation : sap.m.ListType.Active
						}
					},
					customData: [{"key": "key", "value": "{key}"}]
				})
			},
			itemPress: [oController.handlePressList, oController]
		});
		

		var pageId1 = this.createId("page1");
		var pageId2 = this.createId("page2");
		var pageId3 = this.createId("page3");

 		var oPage1 = new sap.m.Page(pageId1, {
			title: "",
			content: oList,
			customData: [{"key": "next", "value": pageId2}]
		});

 		var oPage2 = new sap.m.Page(pageId2, {
			title: "",
			showNavButton: true,
			navButtonPress: [oController.handleNavButtonPress, oController],
			customData: [{"key": "next", "value": pageId3},
				{"key": "back", "value": pageId1}]
		});
 		
 		var oPage3 = new sap.m.Page(pageId3, {
			title: "",
			navButtonPress: [oController.handleNavButtonPress, oController],
			showNavButton: true,
			customData: [{"key": "back", "value": pageId2}]
		});

		return new sap.m.NavContainer(this.createId("navContainer"), {
			pages: [oPage1, oPage2, oPage3]
		})
	}

});