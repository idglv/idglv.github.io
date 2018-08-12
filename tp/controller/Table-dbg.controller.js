sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/Column",
	"sap/m/Text",
	"tp/TrainingProgram/utils/formatter"
], function (Controller, Column, Text, formatter) {
	"use strict";

	return Controller.extend("tp.TrainingProgram.controller.Table", {
		formatter: formatter,

		factoryColumn: function (sId, oContext) {
			var mSettings = oContext.getObject();
			var properties = Object.assign({}, mSettings);
			delete properties.id;

			return new Column(sId, Object.assign({
				header: new Text({
					text: mSettings.text
				})
			}, properties));
		},

		handleNavButtonPress: function () {
				this.getOwnerComponent().getRouter().navTo("display", {}, true);
			}
			/**
			 * Called when a controller is instantiated and its View controls (if available) are already created.
			 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
			 * @memberOf tp.TrainingProgram.view.Table
			 */
			//	onInit: function() {
			//
			//	},

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf tp.TrainingProgram.view.Table
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf tp.TrainingProgram.view.Table
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf tp.TrainingProgram.view.Table
		 */
		//	onExit: function() {
		//
		//	}

	});

});