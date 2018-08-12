sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/routing/History",
	"tp/TrainingProgram/utils/formatter"
], function (Controller, History, formatter) {
	"use strict";

	return Controller.extend("tp.TrainingProgram.controller.Display", {
		formatter: formatter,

		handleCellClick: function (oEvent) {
				var oContext = oEvent.getParameter("rowBindingContext");
				if (oContext) {
					this.getOwnerComponent().getRouter().navTo("table");
				}
			}
			/**
			 * Called when a controller is instantiated and its View controls (if available) are already created.
			 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
			 * @memberOf tp.TrainingProgram.view.Display
			 */
			//	onInit: function() {
			//
			//	},

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf tp.TrainingProgram.view.Display
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf tp.TrainingProgram.view.Display
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf tp.TrainingProgram.view.Display
		 */
		//	onExit: function() {
		//
		//	}

	});

});