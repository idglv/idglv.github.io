(function(){
	"use strict";

	sap.ui.jsview("sap.app.desktopView.app", {

		/** Specifies the Controller belonging to this View. 
		* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
		* @memberOf trea.app
		*/ 
		getControllerName : function() {
			return "sap.app.desktopView.app";
		},

		/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
		* Since the Controller is given to this method, its event handlers can be attached right away. 
		* @memberOf trea.app
		*/ 
		createContent : function(oController) {
			//tree
			var oTree = new sap.ui.commons.Tree({
				title: "ОАО \"Газпром\"",
				height: "315px",
				layoutData: new sap.ui.layout.GridData({
					span: "L4 M4 S4"
				}),
				select: [oController.handleSelectTree, oController]
			});

			var oFactSheetNodeTemplate = new sap.ui.commons.TreeNode({
				text: "{name}",
				expanded: false,
				hasExpander: "{hasExpander}",
				selectable: {
					path: "hasExpander",
					formatter: function(bSelectable) {
						return !bSelectable;
					} 
				},
				customData: [{"key": "key", "value": "{key}"}]
			});
		
			oTree.bindAggregation("nodes", {
				path: "/tree",
				template: oFactSheetNodeTemplate,
				parameters:{
					navigation : {
						'next' : 'next'
					}
				}
			});

			//table
			var oTable = new sap.ui.table.Table(this.createId("mainTable"), {
				width: "100%",
				layoutData: new sap.ui.layout.GridData({
					span: "L8 M8 S8"
				}),
				navigationMode: sap.ui.table.NavigationMode.Paginator,
				selectionMode: sap.ui.table.SelectionMode.None
			});

			oTable.bindColumns("/columns", function(index, context) {
		        var sColumnId = context.getObject().columnId;
		        var sColumnText = context.getObject().columnText;
		        var width = context.getObject().width;

		        return new sap.ui.table.Column({
		            label: sColumnText,
		            template: sColumnId,
		            sortProperty: sColumnId,
		            width: width
		        });
		    });

			//panel
			var oPanel = new sap.ui.commons.Panel({
				title: new sap.ui.core.Title({
					//text: "Классификаторы",
					icon: "img/logo.png"
				}),
				showCollapseIcon: false,
				layoutData: new sap.ui.layout.GridData({
					span: "L12 M12 S12"
				}),
			}).addStyleClass("logo");

			var Logo = new sap.ui.commons.Image({
				src: "img/gazprom_logo_140.png",
				layoutData: new sap.ui.layout.GridData({
					span: "L12 M12 S12"
				})
			});
			
		    //grid
		    var oGrid = new sap.ui.layout.Grid({
		    	hSpacing: 1,
				vSpacing: 1,
		    	content: [Logo, oTree, oTable]
		    });

			return oGrid;
		}
	});

})();

